import fechasJson from "@/lib/fechas.json";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

import { guias } from "@/lib/guias";

const rutas = [
  "/",
  "/autonomos/",
  "/sociedades/",
  "/capitalizar-paro/",
  "/calculadora-criptomonedas/",
  "/licitaciones-publicas/",
  "/criptomonedas/",
  "/calculadora-autonomos/",
  "/calculadora-autonomo-o-sociedad/",
  "/calculadora-cuota-autonomos/",
  "/gestoria-alicante/",
  "/gestoria-vega-baja/",
  "/gestoria-elche/",
  "/gestoria-orihuela/",
  "/gestoria-torrevieja/",
  "/gestoria-benidorm/",
  "/gestoria-alcoy/",
  "/gestoria-elda-petrer/",
  "/gestoria-denia/",
  "/gestoria-murcia/",
  "/gestoria-madrid/",
  "/gestoria-andalucia/",
  "/gestoria-cataluna/",
  "/gestoria-galicia/",
  "/gestoria-castilla-y-leon/",
  "/gestoria-castilla-la-mancha/",
  "/gestoria-aragon/",
  "/gestoria-asturias/",
  "/gestoria-baleares/",
  "/gestoria-cantabria/",
  "/gestoria-extremadura/",
  "/gestoria-la-rioja/",
  "/cambiar-de-gestoria/",
  "/empezar/",
  "/precios/",
  "/constituir-sociedad/",
  "/guias/",
  ...guias.map((g) => `/guias/${g.slug}/`),
  "/quienes-somos/",
  "/aviso-legal/",
  "/privacidad/",
  "/cookies/",
];

const fechas = fechasJson as Record<string, string>;

export default function sitemap(): MetadataRoute.Sitemap {
  return rutas.map((ruta) => ({
    url: `${site.url}${ruta}`,
    ...(fechas[ruta] ? { lastModified: new Date(fechas[ruta]) } : {}),
    changeFrequency: ruta === "/" || ruta === "/criptomonedas/" ? "monthly" : "yearly",
    priority: ruta === "/" ? 1 : ruta === "/criptomonedas/" ? 0.9 : ruta.startsWith("/guias/") ? 0.7 : 0.3,
  }));
}
