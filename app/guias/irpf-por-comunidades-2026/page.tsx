import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";
import { comunidades, otrasComunidades, ESTATAL_MAX, pct } from "@/lib/comunidades";
import { MapaIrpf } from "@/components/MapaIrpf";

export const metadata: Metadata = {
  title: "IRPF por comunidades en 2026: escalas y tipos",
  description:
    "La escala autonómica del IRPF de 2026 en cada comunidad: tramos, tipo mínimo y máximo, máximo con la estatal e ITP, con datos de Hacienda.",
  alternates: { canonical: "/guias/irpf-por-comunidades-2026/" },
};

const filas = [
  ...comunidades.map((c) => ({ nombre: c.nombre, tramos: c.tramos, min: c.min, max: c.max, itp: c.itp.replace(/, el más bajo.*$/, ""), pagina: `/gestoria-${c.slug}/` })),
  ...otrasComunidades,
].sort((a, b) => a.max - b.max || a.min - b.min);

export default function IrpfComunidades() {
  return (
    <Articulo
      titulo="El IRPF por comunidades en 2026"
      entradilla="La mitad de tu IRPF depende de la comunidad en la que vives. Con los mismos ingresos, el tipo más alto va del 45 % en Madrid al 53,85 % en la Comunitat Valenciana. Aquí tienes la escala de cada comunidad de régimen común, ordenada de menor a mayor."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Tu Renta, con las deducciones de tu comunidad",
        texto: "Llevamos autónomos y sociedades de todas las comunidades de régimen común, con la escala y las deducciones autonómicas aplicadas.",
        href: "/empezar/",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Ministerio de Hacienda: Tributación Autonómica, medidas 2026, capítulo I", url: "https://www.hacienda.gob.es/SGFAL/FinanciacionTerritorial/Autonomica/Capitulo-I-Tributacion-Autonomica-2026.pdf" },
        { nombre: "Ley 35/2006 del IRPF (artículos 63, 74 y 72)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764" },
      ]}
    >
      <h2>Cómo se reparte el IRPF</h2>
      <p>
        Tu base imponible general, la de tu actividad, tu sueldo o tus alquileres, paga dos escalas a la vez: la estatal,
        igual en toda España, que llega al {pct(ESTATAL_MAX)}, y la autonómica, que fija cada comunidad. Lo que pagas es la
        suma de las dos. La base del ahorro, la de los intereses, dividendos y ganancias como las de las criptomonedas,
        tiene la misma escala en todas partes.
      </p>
      <p>
        Las comunidades también pueden subir el mínimo personal y familiar, la parte de tu renta que no tributa, y crear
        sus propias deducciones. Por eso dos autónomos con los mismos números pueden pagar cantidades distintas en
        Madrid y en Valencia.
      </p>

      <h2>La escala de cada comunidad</h2>
      <p>Pasa el ratón o toca una comunidad para ver su tipo máximo y entrar en su página.</p>
      <MapaIrpf />
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Comunidad</th>
              <th scope="col">Tramos</th>
              <th scope="col">Tipo mínimo</th>
              <th scope="col">Tipo máximo</th>
              <th scope="col">Máximo con la estatal</th>
              <th scope="col">ITP vivienda usada</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((f) => (
              <tr key={f.nombre}>
                <th scope="row">
                  <Link href={f.pagina}>{f.nombre}</Link>
                </th>
                <td>{f.tramos}</td>
                <td>{pct(f.min)}</td>
                <td>{pct(f.max)}</td>
                <td>{pct(Math.round((f.max + ESTATAL_MAX) * 100) / 100)}</td>
                <td>{f.itp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Ordenadas por tipo máximo. Quedan fuera el País Vasco y Navarra, que tienen su propio IRPF foral, y Canarias, Ceuta
        y Melilla, con un sistema de impuestos indirectos distinto; con ellas no trabajamos.
      </p>

      <h2>Qué comunidad te toca</h2>
      <p>
        La de tu residencia habitual: aquella en la que hayas vivido más días del año. No importa dónde estén tus clientes
        ni dónde factures. Si te mudas a mitad de año, tributas en la comunidad donde hayas pasado más días, y un cambio
        hecho solo para pagar menos no vale si en realidad sigues viviendo en la otra.
      </p>

      <h2>El tipo máximo no lo es todo</h2>
      <p>
        Las diferencias de la tabla se notan sobre todo en rentas altas. Con un rendimiento neto de 25.000 o 30.000 € al
        año, el mínimo personal y las deducciones autonómicas pesan tanto como la escala: por hijos, alquiler, compra
        de vivienda en zonas rurales o discapacidad. Hay que pedirlas en la Renta, y el borrador no siempre las recoge.
      </p>
      <p>
        Si estás pensando en pasar a sociedad, recuerda que el Impuesto sobre Sociedades es igual en toda España; puedes
        comparar los dos con nuestra <Link href="/calculadora-autonomo-o-sociedad/">calculadora de autónomo o
        sociedad</Link>.
      </p>
    </Articulo>
  );
}
