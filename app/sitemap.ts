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
  "/gestoria-murcia/",
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

export default function sitemap(): MetadataRoute.Sitemap {
  return rutas.map((ruta) => ({
    url: `${site.url}${ruta}`,
    lastModified: new Date(),
    changeFrequency: ruta === "/" || ruta === "/criptomonedas/" ? "monthly" : "yearly",
    priority: ruta === "/" ? 1 : ruta === "/criptomonedas/" ? 0.9 : ruta.startsWith("/guias/") ? 0.7 : 0.3,
  }));
}
