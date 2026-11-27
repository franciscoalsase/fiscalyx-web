# Genera el PDF de ejemplo del aviso trimestral (public/ejemplos/aviso-trimestral-ejemplo.pdf).
# Uso local: python3 scripts/aviso-pdf.py. Datos ficticios, coherentes con el aviso de la portada.
import asyncio, base64, pathlib
from playwright.async_api import async_playwright

RAIZ = pathlib.Path(__file__).resolve().parent.parent
def f(n): return "data:font/woff2;base64," + base64.b64encode((RAIZ / "app" / "fuentes" / n).read_bytes()).decode()
SANS, SERIF = f("schibsted.woff2"), f("source-serif.woff2")

def e(n):
    s = f"{n:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")
    return s + " €"

# 303 del tercer trimestre
base_ventas, iva_rep = 19800.00, 4158.00
base_compras, iva_sop = 3206.67, 673.40
iva = iva_rep - iva_sop            # 3.484,60
# 130 acumulado de enero a septiembre
ingresos, gastos = 54300.00, 15880.00
rend = ingresos - gastos           # 38.420,00
veinte = round(rend * 0.20, 2)     # 7.684,00
reten, anteriores = 3150.00, 3921.70
irpf = round(veinte - reten - anteriores, 2)  # 612,30
assert abs(iva - 3484.60) < 0.005 and abs(irpf - 612.30) < 0.005

HTML = f"""<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
@font-face {{ font-family: S; src: url({SANS}); font-weight: 400 900; }}
@font-face {{ font-family: R; src: url({SERIF}); font-weight: 200 900; }}
@page {{ size: A4; margin: 0; }}
* {{ box-sizing: border-box; margin: 0; }}
body {{ width: 210mm; height: 297mm; padding: 15mm 20mm 14mm; font-family: R; font-size: 10pt; line-height: 1.5; color: #1b2a41; background: #fff; position: relative; }}
.cab {{ display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #1b2a41; padding-bottom: 6mm; }}
.marca {{ font-family: S; font-weight: 800; font-size: 20pt; letter-spacing: -0.04em; background: linear-gradient(transparent 52%, #ffe86e 52%, #ffe86e 94%, transparent 94%); padding: 0 3px; margin-left: -3px; }}
.cab .datos {{ font-family: S; font-size: 8.5pt; color: #566072; text-align: right; line-height: 1.45; }}
.ejemplo {{ position: absolute; top: 7mm; left: 20mm; font-family: S; font-size: 8pt; font-weight: 700; color: #a3412f; border: 1px solid #a3412f; padding: 1px 6px; border-radius: 2px; }}
.para {{ display: flex; justify-content: space-between; margin-top: 5mm; font-family: S; font-size: 9pt; color: #566072; }}
.para b {{ color: #1b2a41; font-weight: 600; }}
h1 {{ font-family: S; font-weight: 750; font-size: 18pt; letter-spacing: -0.02em; margin-top: 6mm; line-height: 1.15; }}
.intro {{ margin-top: 3mm; max-width: 150mm; }}
.total {{ margin-top: 5mm; display: flex; justify-content: space-between; align-items: baseline; border: 1px solid #dfddd5; border-left: 4px solid #1b2a41; padding: 4mm 5mm; }}
.total span {{ font-family: S; font-weight: 600; font-size: 11pt; }}
.total strong {{ font-family: S; font-weight: 800; font-size: 20pt; letter-spacing: -0.02em; background: linear-gradient(transparent 8%, #ffe86e 8%, #ffe86e 94%, transparent 94%); padding: 0 4px; }}
h2 {{ font-family: S; font-weight: 700; font-size: 10.5pt; margin-top: 5.5mm; padding-bottom: 1.5mm; border-bottom: 1px solid #1b2a41; display: flex; justify-content: space-between; }}
h2 em {{ font-style: normal; font-weight: 500; color: #566072; font-size: 9pt; }}
table {{ width: 100%; border-collapse: collapse; font-family: S; font-size: 9.5pt; }}
td {{ padding: 1.1mm 0; border-bottom: 1px solid #ecebe6; }}
td.n {{ text-align: right; white-space: nowrap; }}
tr.res td {{ font-weight: 700; border-bottom: none; }}
.sug {{ margin-top: 5.5mm; background: #fffbe6; border-left: 3px solid #ffe86e; padding: 3.5mm 5mm; }}
.sug b {{ font-family: S; }}
.pasos {{ margin-top: 4.5mm; padding-left: 5mm; }}
.pasos li {{ margin-top: 1.2mm; }}
.firma {{ margin-top: 6mm; font-family: S; }}
.firma b {{ display: block; font-size: 10pt; }}
.firma span {{ font-size: 8.5pt; color: #566072; }}
.pie {{ position: absolute; left: 20mm; right: 20mm; bottom: 12mm; border-top: 1px solid #dfddd5; padding-top: 2.5mm; font-family: S; font-size: 7.5pt; color: #566072; display: flex; justify-content: space-between; }}
</style></head><body>
<p class="ejemplo">EJEMPLO · DATOS FICTICIOS</p>
<div class="cab"><span class="marca">Fiscalyx</span>
<p class="datos">Gestoría y asesoría online<br>info@fiscalyx.com · 637 46 08 35<br>fiscalyx.com</p></div>
<div class="para"><p>Para: <b>Lucía Ferrer Molina</b> · Diseño web, estimación directa</p><p>Alicante, 12 de octubre de 2026</p></div>
<h1>Tu tercer trimestre de 2026</h1>
<p class="intro">Hola, Lucía. Estos son los importes del 303 y el 130 de julio a septiembre, calculados con las facturas y tickets que nos has mandado. Si estás de acuerdo, los presentamos y se cargan en tu cuenta el día 20.</p>
<div class="total"><span>A pagar el 20 de octubre</span><strong>{e(iva + irpf)}</strong></div>
<h2>Modelo 303, IVA del trimestre <em>{e(iva)}</em></h2>
<table>
<tr><td>Ventas del trimestre (base imponible)</td><td class="n">{e(base_ventas)}</td></tr>
<tr><td>IVA que has cobrado (21 %)</td><td class="n">{e(iva_rep)}</td></tr>
<tr><td>IVA de tus gastos, deducible</td><td class="n">−{e(iva_sop)}</td></tr>
<tr class="res"><td>Resultado a ingresar</td><td class="n">{e(iva)}</td></tr>
</table>
<h2>Modelo 130, pago a cuenta del IRPF <em>{e(irpf)}</em></h2>
<table>
<tr><td>Ingresos de enero a septiembre</td><td class="n">{e(ingresos)}</td></tr>
<tr><td>Gastos deducibles de enero a septiembre</td><td class="n">−{e(gastos)}</td></tr>
<tr><td>Rendimiento neto</td><td class="n">{e(rend)}</td></tr>
<tr><td>20 % del rendimiento</td><td class="n">{e(veinte)}</td></tr>
<tr><td>Retenciones que te han hecho tus clientes</td><td class="n">−{e(reten)}</td></tr>
<tr><td>Pagados en el primer y el segundo trimestre</td><td class="n">−{e(anteriores)}</td></tr>
<tr class="res"><td>Resultado a ingresar</td><td class="n">{e(irpf)}</td></tr>
</table>
<div class="sug"><b>Para pagar menos:</b> la factura de la impresora del 2 de septiembre (290 € más IVA) aún no nos ha llegado. Si nos la pasas antes del día 15, el 303 baja {e(290*0.21)}.</div>
<ol class="pasos">
<li>Revisa las cifras y respóndenos «de acuerdo» por correo o WhatsApp antes del día 17.</li>
<li>Presentamos los dos modelos y te mandamos los justificantes con su código seguro de verificación.</li>
<li>El día 20 Hacienda carga el importe en tu cuenta domiciliada.</li>
</ol>
<p class="firma"><b>Francisco Seva Soriano</b><span>Economista colegiado n.º 4174 del Colegio de Economistas de Alicante</span></p>
<div class="pie"><span>Ejemplo del aviso que enviamos antes de cada trimestre. Persona, cifras y fechas ficticias.</span><span>fiscalyx.com</span></div>
</body></html>"""

async def main():
    out = RAIZ / "public" / "ejemplos"; out.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page()
        await pg.set_content(HTML); await pg.evaluate("document.fonts.ready")
        await pg.pdf(path=str(out / "aviso-trimestral-ejemplo.pdf"), format="A4", print_background=True)
        await pg.set_viewport_size({"width": 794, "height": 1123}); await pg.screenshot(path="/tmp/aviso-pdf.png", full_page=True)
        await b.close()
    print("ok")
asyncio.run(main())
