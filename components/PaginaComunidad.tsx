import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";
import { comunidades, ESTATAL_MAX, pct } from "@/lib/comunidades";

const FUENTE = {
  nombre: "Ministerio de Hacienda: Tributación Autonómica, medidas 2026",
  url: "https://www.hacienda.gob.es/es-ES/Areas%20Tematicas/Financiacion%20Autonomica/Paginas/Tributacion-Autonomica-2026.aspx",
};

export function tituloComunidad(slug: string) {
  const c = comunidades.find((x) => x.slug === slug)!;
  return {
    title: `Gestoría online en ${c.corto}`,
    description: `Gestoría para autónomos y sociedades de ${c.ciudades[0]}, ${c.ciudades[1]} y toda ${c.corto}, con la escala del IRPF de 2026 aplicada. Economistas colegiados.`,
    alternates: { canonical: `/gestoria-${c.slug}/` },
  };
}

export function PaginaComunidad({ slug }: { slug: string }) {
  const c = comunidades.find((x) => x.slug === slug)!;
  const maxTotal = Math.round((c.max + ESTATAL_MAX) * 100) / 100;
  return (
    <PaginaLocal
      zona={c.corto}
      titulo={`Gestoría online en ${c.corto}`}
      entradilla={`Autónomos y sociedades de ${c.ciudades.slice(0, 3).join(", ")} y el resto de ${c.corto}, con su escala y sus deducciones aplicadas.`}
      municipios={c.ciudades}
      servicios={false}
      areaServida={[c.nombre, ...c.ciudades.slice(0, 3)]}
      intro={
        <>
          <h2>Tributar {c.en}: qué cambia</h2>
          <p>{c.intro[0]}</p>
          <p>{c.intro[1]}</p>
          <p>Trabajamos con clientes de {c.ciudades.slice(0, -1).join(", ")} y {c.ciudades[c.ciudades.length - 1]}, entre otros municipios.</p>
        </>
      }
      fiscalTitulo={`Tus impuestos ${c.en} en 2026`}
      fiscalFilas={[
        ["Escala autonómica del IRPF", `${c.tramos} tramos, del ${pct(c.min)} al ${pct(c.max)} (con la estatal, hasta el ${pct(maxTotal)})`],
        ["Mínimo personal y familiar", c.minimo],
        ["Impuesto sobre el Patrimonio", c.patrimonio],
        ["Sucesiones y donaciones", c.sucesiones],
        ["Transmisiones patrimoniales (compra de vivienda usada)", c.itp],
        ["Sucesiones y Transmisiones se presentan ante", c.agencia],
      ]}
      fiscalNota={
        <p>
          Compara {c.corto} con el resto en <Link href="/guias/irpf-por-comunidades-2026/">el IRPF por comunidades</Link>.
          También trabajamos con{" "}
          {comunidades
            .filter((o) => o.slug !== c.slug)
            .map((o, i, arr) => (
              <span key={o.slug}>
                {i > 0 ? (i === arr.length - 1 ? " y " : ", ") : ""}
                <Link href={`/gestoria-${o.slug}/`}>{o.corto}</Link>
              </span>
            ))}
          .
        </p>
      }
      fuentes={[FUENTE]}
      extra={
        <section className="seccion" aria-labelledby="comunidad-deducciones">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="comunidad-deducciones">Deducciones autonómicas de {c.corto}</h2>
            <p>Algunas de las que tiene {c.corto}, además de las estatales:</p>
            <ul className="lista-simple">
              {c.deducciones.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </section>
      }
      preguntas={[
        ...c.preguntas,
        {
          p: "Ya tengo gestoría. ¿Cómo me cambio?",
          r: "Nos autorizas y pedimos nosotros la documentación a tu gestoría actual, sin coste para ti. Empezamos a llevarte desde el trimestre siguiente.",
        },
      ]}
    />
  );
}
