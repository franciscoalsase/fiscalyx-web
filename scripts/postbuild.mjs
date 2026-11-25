// Convierte la exportación de Next en HTML estático puro:
// quita el motor de React del navegador y deja solo los scripts propios (pequeños).
import { readdirSync, readFileSync, writeFileSync, statSync, unlinkSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const PROPIOS = new Set(["efectos", "calculadora", "estimador", "formulario", "plazo", "comparador", "presupuesto", "analitica", "cuota", "alta-script"]);
const CONSERVAR_TXT = new Set(["robots.txt", "llms.txt"]);

function recorrer(dir, fn) {
  for (const nombre of readdirSync(dir)) {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) recorrer(ruta, fn);
    else fn(ruta, nombre);
  }
}

// Next hereda las etiquetas Open Graph del layout en todas las páginas. Aquí cada página
// recibe las suyas: título, descripción, URL canónica e imagen propia si existe en public/og/.
function metasSociales(html) {
  const titulo = /<title>([^<]*)<\/title>/.exec(html)?.[1];
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1];
  const canon = /<link rel="canonical" href="([^"]*)"/.exec(html)?.[1];
  if (!titulo || !canon) return html;
  const ruta = new URL(canon).pathname.replace(/^\/|\/$/g, "").replace(/\//g, "-");
  const imagen = ruta && existsSync(join("public", "og", ruta + ".png")) ? `/og/${ruta}.png` : "/og.png";
  const abs = new URL(imagen, canon).href;
  const poner = (re, valor) => (h) => h.replace(re, (m, a) => a + valor + '"');
  return [
    poner(/(<meta property="og:title" content=")[^"]*"/, titulo),
    poner(/(<meta name="twitter:title" content=")[^"]*"/, titulo),
    desc ? poner(/(<meta property="og:description" content=")[^"]*"/, desc) : (h) => h,
    desc ? poner(/(<meta name="twitter:description" content=")[^"]*"/, desc) : (h) => h,
    poner(/(<meta property="og:url" content=")[^"]*"/, canon),
    poner(/(<meta property="og:image" content=")[^"]*"/, abs),
    poner(/(<meta name="twitter:image" content=")[^"]*"/, abs),
    poner(/(<meta property="og:image:alt" content=")[^"]*"/, titulo),
  ].reduce((h, f) => f(h), html);
}

let paginas = 0, borrados = 0;
recorrer(OUT, (ruta, nombre) => {
  if (nombre.endsWith(".html")) {
    let html = readFileSync(ruta, "utf8");
    html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/g, (todo, attrs) => {
      if (/type="application\/ld\+json"/.test(attrs)) return todo;
      const id = /id="([^"]+)"/.exec(attrs)?.[1];
      return id && PROPIOS.has(id) ? todo : "";
    });
    html = html.replace(/<link\b[^>]*rel="(?:preload|modulepreload)"[^>]*as="script"[^>]*\/?>/g, "");
    html = html.replace(/<link\b[^>]*as="script"[^>]*rel="(?:preload|modulepreload)"[^>]*\/?>/g, "");
    html = metasSociales(html);
    writeFileSync(ruta, html);
    paginas++;
  } else if ((nombre.endsWith(".txt") && !CONSERVAR_TXT.has(nombre)) || (ruta.includes("/_next/static/chunks/") && nombre.endsWith(".js"))) {
    unlinkSync(ruta);
    borrados++;
  }
});
console.log(`postbuild: ${paginas} páginas limpias, ${borrados} archivos de React eliminados`);
