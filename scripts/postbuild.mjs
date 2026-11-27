// Convierte la exportación de Next en HTML estático puro:
// quita el motor de React del navegador y deja solo los scripts propios (pequeños).
import { aMarkdown } from "./markdown.mjs";
import { readdirSync, readFileSync, writeFileSync, statSync, unlinkSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const PROPIOS = new Set(["efectos", "calculadora", "estimador", "formulario", "plazo", "comparador", "presupuesto", "analitica", "cuota", "alta-script", "solvencia-script", "coste-script", "fifo-script", "whatsapp-script"]);
const CONSERVAR_TXT = new Set(["robots.txt", "llms.txt", "b123850b6e54d9e67cec1ab029166f3b.txt"]);

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

// --- Fecha de revisión, autor y copia en Markdown para agentes de IA ---
const SITIO = "https://www.fiscalyx.com";
let FECHAS = {};
try { FECHAS = JSON.parse(readFileSync("lib/fechas.json", "utf8")); } catch {}
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let markdowns = 0;
function fechaYAutor(html, ruta) {
  if (!/<main\b/.test(html) || /name="robots" content="[^"]*noindex/.test(html)) return html;
  const rel = ruta.slice(OUT.length).replace(/\\/g, "/");
  const pagina = rel.endsWith("index.html") ? rel.slice(0, -"index.html".length) || "/" : null;
  if (!pagina) return html;
  const iso = FECHAS[pagina]?.m;
  const pub = FECHAS[pagina]?.p;
  const titulo = (/<title>([^<]*)<\/title>/.exec(html)?.[1] ?? "").replace(/&#x27;/g, "'").replace(/&amp;/g, "&");
  const url = SITIO + pagina;
  // Copia en Markdown junto al HTML y enlace para que los agentes la encuentren.
  const md = aMarkdown(html, SITIO);
  if (md.trim().length > 50) {
    writeFileSync(ruta.replace(/index\.html$/, "index.md"), `# ${titulo}\n\nFuente: ${url}${iso ? `\nActualizado: ${iso.slice(0, 10)}` : ""}\n\n${md}`);
    html = html.replace("</head>", `<link rel="alternate" type="text/markdown" href="${pagina}index.md"/></head>`);
    markdowns++;
  }
  if (!iso) return html;
  const d = new Date(iso);
  const legible = `${d.getUTCDate()} de ${MESES[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
  const dia = iso.slice(0, 10);
  // Las guías ya llevan su Article con autor: solo actualizamos su fecha.
  html = html.replace(/"dateModified":"\d{4}-\d{2}-\d{2}"/g, `"dateModified":"${dia}"${pub ? `,"datePublished":"${pub.slice(0, 10)}"` : ""}`);
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: titulo,
    inLanguage: "es-ES",
    dateModified: dia,
    ...(pub ? { datePublished: pub.slice(0, 10) } : {}),
    isPartOf: { "@type": "WebSite", name: "Fiscalyx", url: SITIO + "/" },
    reviewedBy: {
      "@type": "Person",
      name: "Francisco Seva Soriano",
      jobTitle: "Economista colegiado",
      url: SITIO + "/quienes-somos/",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Colegiación profesional",
        name: "Economista colegiado n.º 4174",
        recognizedBy: { "@type": "Organization", name: "Colegio de Economistas de Alicante" },
      },
    },
    lastReviewed: dia,
  };
  html = html.replace("</head>", `<script type="application/ld+json">${JSON.stringify(webpage)}</script></head>`);
  if (/Revisado por/.test(html) || /^\/(aviso-legal|privacidad|cookies)\/$/.test(pagina)) return html;
  const linea = `<div class="contenedor revisado"><p>Revisado por <a rel="author" href="/quienes-somos/">Francisco Seva Soriano</a>, economista colegiado n.º 4174 del Colegio de Economistas de Alicante. Última actualización: <time datetime="${dia}">${legible}</time>.</p></div>`;
  html = html.replace(/<\/main>/, `${linea}</main>`);
  return html;
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
    // Google pide que la URL del favicon sea estable: quitamos el ?hash que añade Next.
    html = html.replace(/(href="\/(?:favicon\.ico|icon\.svg|icon\.png|apple-icon\.png))\?[^"]*"/g, '$1"');
    html = fechaYAutor(html, ruta);
    writeFileSync(ruta, html);
    paginas++;
  } else if ((nombre.endsWith(".txt") && !CONSERVAR_TXT.has(nombre)) || (ruta.includes("/_next/static/chunks/") && nombre.endsWith(".js"))) {
    unlinkSync(ruta);
    borrados++;
  }
});
console.log(`postbuild: ${paginas} páginas limpias, ${markdowns} copias en Markdown, ${borrados} archivos de React eliminados`);
