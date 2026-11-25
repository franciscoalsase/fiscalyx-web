// Convierte la exportación de Next en HTML estático puro:
// quita el motor de React del navegador y deja solo los scripts propios (pequeños).
import { readdirSync, readFileSync, writeFileSync, statSync, unlinkSync } from "node:fs";
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
    writeFileSync(ruta, html);
    paginas++;
  } else if ((nombre.endsWith(".txt") && !CONSERVAR_TXT.has(nombre)) || (ruta.includes("/_next/static/chunks/") && nombre.endsWith(".js"))) {
    unlinkSync(ruta);
    borrados++;
  }
});
console.log(`postbuild: ${paginas} páginas limpias, ${borrados} archivos de React eliminados`);
