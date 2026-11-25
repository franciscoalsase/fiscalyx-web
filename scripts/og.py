# Genera las imágenes para compartir (1200x630) de cada página a partir de la web ya construida.
# Uso local, después de `npm run build`:  python3 scripts/og.py
# Escribe public/og/<ruta>.png y public/og.png (portada). No se ejecuta en Vercel.
import asyncio, base64, html, json, pathlib, re

from playwright.async_api import async_playwright

RAIZ = pathlib.Path(__file__).resolve().parent.parent
OUT = RAIZ / "out"
DESTINO = RAIZ / "public" / "og"
SALTAR = {"aviso-legal", "privacidad", "cookies", "fuentes", "404"}

precios = json.loads((RAIZ / "scripts" / "og-datos.json").read_text())
ICONO = (RAIZ / "app" / "icon.svg").read_text()
def fuente(nombre):
    # Incrustada en base64: una página creada con set_content no puede leer file://.
    return "data:font/woff2;base64," + base64.b64encode((RAIZ / "app" / "fuentes" / nombre).read_bytes()).decode()


SANS = fuente("schibsted.woff2")
SERIF = fuente("source-serif.woff2")


def etiqueta(ruta):
    if ruta.startswith("guias-"):
        return "Guía"
    if ruta.startswith("calculadora-"):
        return "Calculadora gratuita"
    if ruta.startswith("gestoria-"):
        return "Gestoría online"
    return ""


def plantilla(titulo, subtitulo, kicker, dato):
    largo = len(titulo)
    ancho = 700 if dato else 980
    tam = 66 if largo < 45 else 58 if largo < 70 else 50
    if not dato and largo < 60:
        tam = 74
    if dato and largo > 48:
        tam = 50
    tarjeta = ""
    cifra = 104 if not dato or len(dato['cifra']) <= 4 else 84
    if dato:
        tarjeta = f"""<div class="dato"><p class="pre">{html.escape(dato.get('pre', ''))}</p>
        <p class="cifra"><span>{html.escape(dato['cifra'])}</span></p><p class="pie">{html.escape(dato['pie'])}</p></div>"""
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: S; src: url({SANS}); font-weight: 400 900; }}
@font-face {{ font-family: R; src: url({SERIF}); font-weight: 200 900; }}
* {{ margin: 0; box-sizing: border-box; }}
body {{ width: 1200px; height: 630px; background: #fcfcfa; color: #1b2a41; font-family: S; position: relative; overflow: hidden; }}
.marca {{ position: absolute; left: 72px; top: 60px; display: flex; align-items: center; gap: 14px; font-weight: 800; font-size: 34px; letter-spacing: -0.02em; }}
.marca svg {{ width: 46px; height: 46px; }}
.cuerpo {{ position: absolute; left: 72px; top: 158px; width: {ancho}px; }}
.kicker {{ font-size: 24px; color: #1d6a51; font-weight: 600; margin-bottom: 18px; }}
h1 {{ font-size: {tam}px; line-height: 1.06; font-weight: 750; letter-spacing: -0.025em; }}
.sub {{ font-family: R; font-size: 27px; line-height: 1.4; color: #566072; margin-top: 26px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }}
.base {{ position: absolute; left: 72px; right: 72px; bottom: 50px; border-top: 2px solid #1b2a41; padding-top: 16px; display: flex; justify-content: space-between; font-size: 21px; color: #566072; }}
.base b {{ color: #1b2a41; font-weight: 700; }}
.dato {{ position: absolute; right: 72px; top: 160px; width: 330px; background: #fff; border: 1px solid #dfddd5; border-radius: 6px; padding: 34px 34px 30px; box-shadow: 0 24px 48px -34px rgba(27,42,65,.55); }}
.pre {{ font-size: 21px; color: #566072; }}
.cifra {{ white-space: nowrap; font-size: {cifra}px; font-weight: 800; letter-spacing: -0.04em; line-height: 1; margin: 10px 0 14px; }}
.cifra span {{ background: linear-gradient(transparent 62%, #ffe86e 62%, #ffe86e 90%, transparent 90%); padding: 0 4px; }}
.dato .pie {{ font-family: R; font-size: 23px; line-height: 1.35; color: #1b2a41; }}
</style></head><body>
<div class="marca">{ICONO}<span>Fiscalyx</span></div>
<div class="cuerpo">{f'<p class="kicker">{html.escape(kicker)}</p>' if kicker else ''}<h1>{html.escape(titulo)}</h1><p class="sub">{html.escape(subtitulo)}</p></div>
{tarjeta}
<div class="base"><b>fiscalyx.com</b><span>Economistas colegiados, para toda España</span></div>
</body></html>"""


def paginas():
    for f in sorted(OUT.rglob("index.html")):
        doc = f.read_text()
        canon = re.search(r'<link rel="canonical" href="https://[^/]+/([^"]*)"', doc)
        if not canon:
            continue
        ruta = canon.group(1).strip("/").replace("/", "-")
        if ruta in SALTAR or ruta == "guias-" or ruta.startswith("_"):
            continue
        h1 = re.search(r"<h1[^>]*>(.*?)</h1>", doc, re.S)
        desc = re.search(r'<meta name="description" content="([^"]*)"', doc)
        if not h1:
            continue
        titulo = html.unescape(re.sub(r"<[^>]+>", "", h1.group(1))).strip()
        sub = html.unescape(desc.group(1)) if desc else ""
        if len(sub) > 125:
            # Mejor una frase entera que un texto cortado con puntos suspensivos.
            primera = re.split(r"(?<=\.)\s", sub)[0]
            sub = primera if len(primera) <= 135 else sub
        yield ruta, titulo, sub


async def main():
    DESTINO.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1200, "height": 630})
        n = 0
        for ruta, titulo, sub in paginas():
            datos = precios.get(ruta or "inicio", {})
            await pg.set_content(plantilla(datos.get("titulo", titulo), datos.get("sub", sub), datos.get("kicker", etiqueta(ruta)), datos.get("dato")))
            await pg.evaluate("document.fonts.ready.then(() => [...document.fonts].map(f => f.status).join())")
            destino = RAIZ / "public" / "og.png" if not ruta else DESTINO / f"{ruta}.png"
            await pg.screenshot(path=str(destino))
            n += 1
        await b.close()
    print(f"og: {n} imágenes")


asyncio.run(main())
