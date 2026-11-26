import mapa from "@/lib/mapa-espana.json";
import { comunidades, otrasComunidades, ESTATAL_MAX, pct } from "@/lib/comunidades";

// Mapa de España coloreado por el tipo máximo del IRPF (estatal + autonómico) de 2026.
// Escala secuencial de un solo tono, validada: monótona, saltos visibles y extremo claro con contraste.
const RAMPA = ["#9ab3d8", "#7795c2", "#5677a8", "#3b5984", "#243857"];
const CLASES: { hasta: number; texto: string }[] = [
  { hasta: 46, texto: "45–46 %" },
  { hasta: 47, texto: "47 %" },
  { hasta: 49.5, texto: "49–49,5 %" },
  { hasta: 50.5, texto: "50–50,5 %" },
  { hasta: 99, texto: "51,5–53,85 %" },
];

type Dato = { nombre: string; total: number; href: string };

const datos: Record<string, Dato> = {};
for (const c of comunidades) {
  datos[c.slug] = { nombre: c.nombre, total: Math.round((c.max + ESTATAL_MAX) * 100) / 100, href: `/gestoria-${c.slug}/` };
}
const [cv, mu] = otrasComunidades;
datos["valenciana"] = { nombre: cv.nombre, total: Math.round((cv.max + ESTATAL_MAX) * 100) / 100, href: cv.pagina };
datos["murcia"] = { nombre: mu.nombre, total: Math.round((mu.max + ESTATAL_MAX) * 100) / 100, href: mu.pagina };

const FORALES: Record<string, string> = { navarra: "Navarra", "pais-vasco": "País Vasco" };

// Ajustes finos de la posición de algunas etiquetas para que no se pisen.
const AJUSTE: Record<string, [number, number]> = { baleares: [44, -38], madrid: [0, 4], "la-rioja": [-4, 6], cantabria: [8, 4], valenciana: [-6, 30] };
// Etiquetas que caen fuera de su comunidad (sobre el mar): texto oscuro.
const FUERA = new Set(["baleares"]);

function clase(v: number) {
  return CLASES.findIndex((c) => v <= c.hasta);
}

export function MapaIrpf({ actual, compacto = false }: { actual?: string; compacto?: boolean }) {
  return (
    <figure className={`mapa-irpf${compacto ? " mapa-compacto" : ""}`}>
      <svg viewBox={`0 0 ${mapa.W} ${mapa.H}`} role="img" aria-labelledby="mapa-irpf-titulo">
        <title id="mapa-irpf-titulo">Tipo máximo del IRPF en 2026 por comunidad autónoma, sumando la escala estatal y la autonómica</title>
        <defs>
          <pattern id="rayado-foral" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="7" height="7" fill="#efeee9" />
            <line x1="0" y1="0" x2="0" y2="7" stroke="#cfcdc4" strokeWidth="2" />
          </pattern>
        </defs>
        {mapa.regiones.map((r) => {
          const d = datos[r.id];
          if (!d) {
            return (
              <path key={r.id} d={r.d} className="mapa-foral" fill="url(#rayado-foral)">
                <title>{`${FORALES[r.id] ?? r.id}: hacienda foral, no la atendemos`}</title>
              </path>
            );
          }
          const k = clase(d.total);
          return (
            <a key={r.id} href={d.href} className={`mapa-region${actual === r.id ? " mapa-actual" : ""}`}>
              <path d={r.d} fill={RAMPA[k]} />
              <title>{`${d.nombre}: tipo máximo del ${pct(d.total)}`}</title>
            </a>
          );
        })}
        {!compacto &&
          mapa.regiones
            .filter((r) => datos[r.id])
            .map((r) => {
              const d = datos[r.id];
              const [dx, dy] = AJUSTE[r.id] ?? [0, 0];
              return (
                <text
                  key={`t-${r.id}`}
                  x={r.x + dx}
                  y={r.y + dy}
                  className={`mapa-cifra${clase(d.total) >= 2 && !FUERA.has(r.id) ? " mapa-cifra-clara" : ""}${r.id === "valenciana" ? " mapa-cifra-estrecha" : ""}`}
                  textAnchor="middle"
                  aria-hidden="true"
                >
                  {pct(d.total)}
                </text>
              );
            })}
      </svg>
      <figcaption>
        <ul className="mapa-leyenda" aria-label="Leyenda: tipo máximo del IRPF">
          {CLASES.map((c, i) => (
            <li key={c.texto}>
              <span style={{ background: RAMPA[i] }} aria-hidden="true" />
              {c.texto}
            </li>
          ))}
          <li>
            <span className="mapa-leyenda-foral" aria-hidden="true" />
            Foral, no atendemos
          </li>
        </ul>
        {!compacto && (
          <p>
            Tipo marginal máximo del IRPF en 2026, sumando la escala estatal y la autonómica. Canarias, Ceuta y Melilla no
            aparecen: tienen otro sistema de impuestos indirectos y no trabajamos con ellas. Fuente: Ministerio de
            Hacienda, Tributación Autonómica 2026.
          </p>
        )}
      </figcaption>
    </figure>
  );
}
