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
    title: `Gestoría online en ${c.corto} para autónomos y sociedades`,
    description: `Impuestos y contabilidad de autónomos y sociedades de ${c.ciudades.slice(0, 3).join(", ")} y el resto de ${c.corto}, con la escala autonómica del IRPF de 2026 aplicada. Economistas colegiados y cuota fija.`,
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
      entradilla={`Llevamos los impuestos y la contabilidad de autónomos y sociedades de ${c.ciudades.slice(0, 3).join(", ")} y toda la comunidad, con la escala y las deducciones autonómicas de ${c.corto} aplicadas. En remoto, con cuota fija y el mismo asesor todo el año.`}
      municipios={c.ciudades}
      areaServida={[c.nombre, ...c.ciudades.slice(0, 3)]}
      intro={
        <>
          <h2>Tributar {c.en}: qué cambia</h2>
          <p>{c.intro[0]}</p>
          <p>{c.intro[1]}</p>
        </>
      }
      fiscalTitulo={`Tus impuestos ${c.en} en 2026`}
      fiscalFilas={[
        ["Escala autonómica del IRPF", `${c.tramos} tramos, del ${pct(c.min)} al ${pct(c.max)}. Sumada a la estatal, el tipo máximo es del ${pct(maxTotal)}`],
        ["Mínimo personal y familiar", c.minimo],
        ["Impuesto sobre el Patrimonio", c.patrimonio],
        ["Sucesiones y donaciones", c.sucesiones],
        ["Transmisiones patrimoniales (compra de vivienda usada)", c.itp],
        ["Quién lo gestiona", `Agencia Tributaria para IRPF, IVA y Sociedades; ${c.agencia} para Sucesiones y Transmisiones`],
      ]}
      fiscalNota={
        <p>
          El IVA, el Impuesto sobre Sociedades y la cuota de autónomos son iguales en toda España. Lo que cambia de una
          comunidad a otra es la mitad autonómica del IRPF y los impuestos cedidos. Compara {c.corto} con el resto en la
          guía de <Link href="/guias/irpf-por-comunidades-2026/">el IRPF por comunidades en 2026</Link>.
        </p>
      }
      fuentes={[FUENTE]}
      preguntas={[
        {
          p: `¿Tenéis oficina ${c.en}?`,
          r: `No. Trabajamos en remoto con toda la comunidad, por WhatsApp, teléfono, correo y videollamada. Para presentar en tu nombre basta con que nos autorices ante Hacienda y la Seguridad Social, y te guiamos para hacerlo.`,
        },
        {
          p: "¿Aplicáis las deducciones autonómicas?",
          r: `Sí. Cada año revisamos las deducciones de ${c.corto} que te puedan corresponder, por familia, vivienda, discapacidad o lugar de residencia, y las aplicamos en tu Renta. El borrador de Hacienda no siempre las incluye.`,
        },
        {
          p: "¿Cuánto cuesta?",
          r: "Lo mismo en todas las comunidades: la cuota de autónomo incluye trimestrales, resúmenes anuales y la Renta del titular; la de sociedades, contabilidad, impuestos y cuentas anuales. Sin permanencia.",
        },
        {
          p: "Ya tengo gestoría. ¿Cómo me cambio?",
          r: "Nos autorizas y pedimos nosotros la documentación a tu gestoría actual, sin coste para ti. Empezamos a llevarte desde el trimestre siguiente, sin dejar nada a medias.",
        },
      ]}
    />
  );
}
