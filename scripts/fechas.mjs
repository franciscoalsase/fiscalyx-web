// Fecha real de la última modificación de cada página, sacada de git, para el lastmod del sitemap.
// Si no hay historial (por ejemplo, en una copia sin .git), no se pone lastmod: mejor ninguno que uno falso.
import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const fechas = {};
function recorrer(dir, ruta) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) recorrer(p, `${ruta}${n}/`);
    else if (n === "page.tsx") {
      try {
        const m = execSync(`git log -1 --format=%cI -- "${p}"`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
        const todas = execSync(`git log --format=%cI -- "${p}"`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim().split("\n");
        if (m) fechas[ruta] = { m, p: todas[todas.length - 1] || m };
      } catch {}
    }
  }
}
if (existsSync("app")) recorrer("app", "/");
writeFileSync("lib/fechas.json", JSON.stringify(fechas, null, 0) + "\n");
console.log(`fechas: ${Object.keys(fechas).length} páginas con fecha de git`);
