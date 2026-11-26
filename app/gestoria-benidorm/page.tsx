import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en Benidorm: autónomos y hostelería",
  description:
    "Gestoría online para autónomos y empresas de Benidorm: bares, restaurantes y alojamientos, IVA del 10 %, módulos, temporada y cuota de autónomo.",
  alternates: { canonical: "/gestoria-benidorm/" },
};

export default function GestoriaBenidorm() {
  return (
    <PaginaLocal
      zona="Benidorm"
      titulo="Gestoría en Benidorm para hostelería, comercio y autónomos"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos y sociedades de Benidorm y la Marina Baixa: bares, restaurantes, alojamientos, comercio y servicios. Online, con cuota fija y el mismo asesor todo el año."
      municipios={["L'Alfàs del Pi", "La Nucía", "Finestrat", "Villajoyosa", "Altea", "Polop", "Callosa d'en Sarrià"]}
      areaServida={["Benidorm", "Marina Baixa", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Una ciudad que vive del turismo todo el año</h2>
          <p>
            Benidorm cerró el censo de 2025 con 77.221 habitantes, la cifra más alta de su historia, pero en los días de
            más afluencia multiplica por cinco su población. En 2025 sumó más de 16 millones de pernoctaciones, dos de
            cada tres de turistas internacionales, y la comunidad extranjera más numerosa entre sus vecinos es la
            británica.
          </p>
          <p>
            Para un negocio de aquí, eso se traduce en preguntas muy concretas: si a tu bar le conviene tributar por
            módulos o por lo que gana de verdad, cómo contratar a la gente de la temporada, qué IVA lleva cada cosa que
            vendes y cómo ajustar tu cuota de autónomo a un año que no se parece al anterior.
          </p>
          <p>
            La sede de Fiscalyx está en Alicante, a menos de una hora. Trabajamos en remoto, por WhatsApp, teléfono y
            correo, y cuando hace falta revisar algo en persona, lo concertamos.
          </p>
        </>
      }
      fiscalTitulo="Si tienes un bar, un restaurante o un alojamiento"
      fiscalFilas={[
        ["IVA de lo que vendes", "Las comidas y bebidas que se sirven en bares y restaurantes llevan el 10 %, y el alojamiento en hoteles y apartamentos turísticos, también el 10 %"],
        ["Módulos o estimación directa", "Un bar o restaurante pequeño puede tributar por módulos: pagas según el personal, las mesas y la potencia eléctrica, no según lo que ganas. Compensa en un buen año y pesa en uno malo"],
        ["La gente de la temporada", "Desde la reforma laboral de 2022, el contrato para trabajos que se repiten cada temporada es el fijo discontinuo, al que se llama cada año"],
        ["Tu cuota de autónomo", "Se ajusta a tus rendimientos reales del año: si eliges una base y luego ganas menos, la Seguridad Social te devuelve la diferencia"],
      ]}
      fiscalNota={
        <p>
          Antes de elegir entre módulos y estimación directa hacemos las cuentas con tus cifras de los dos últimos años.
          Si alquilas un apartamento a turistas, mira lo que exige ahora la Comunitat Valenciana en nuestra página de{" "}
          <Link href="/gestoria-orihuela/">Orihuela Costa</Link>, y calcula tu cuota con la{" "}
          <Link href="/calculadora-cuota-autonomos/">calculadora de la cuota de autónomos</Link>.{" "}
          Si tu negocio está en la Marina Alta, mira también la página de <Link href="/gestoria-denia/">Dénia</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Benidorm registra la mayor población de su historia con 77.221 habitantes (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/marinabaixa/benidorm-registra-la-mayor-poblacion-de-su-historia-con-77221-habitantes-y-podria-optar-a-gran-ciudad" },
        { nombre: "Radiografía del turismo en Benidorm: 16 millones de pernoctaciones (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/marinabaixa/radiografia-del-turismo-en-benidorm-16-millones-de-pernoctaciones-el-67-de-los-turistas-internacionales-y-los-apartamentos-creciendo" },
        { nombre: "Población de Benidorm en verano y residentes extranjeros (idealista)", url: "https://www.idealista.com/en/news/lifestyle-in-spain/2026/01/21/877818-this-is-the-population-of-benidorm-in-2025-summer-and-foreign-residents" },
        { nombre: "Ley 37/1992 del IVA (artículo 91, tipos reducidos)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740" },
      ]}
      preguntas={[
        {
          p: "Tengo un bar en Benidorm. ¿Me conviene estar en módulos?",
          r: "Depende de lo que factures y de cuánto te cueste el local y el personal. En módulos pagas lo mismo ganes más o menos; en estimación directa, según lo que ganes de verdad. Hacemos la comparación con tus cifras antes de decidir, porque el cambio te ata al menos tres años.",
        },
        {
          p: "Contrato camareros solo para el verano. ¿Qué contrato les hago?",
          r: "Si el trabajo se repite cada temporada, el contrato que corresponde es el fijo discontinuo: el trabajador se llama cada año cuando empieza la temporada. Te preparamos los contratos, las altas y las nóminas.",
        },
        {
          p: "Soy británico y quiero abrir un negocio en Benidorm. ¿Qué necesito?",
          r: "NIE y, al no ser ciudadano de la UE desde el Brexit, una autorización de residencia que te permita trabajar por cuenta propia. Con eso te damos de alta en Hacienda y en la Seguridad Social y te explicamos qué impuestos vas a pagar desde el primer trimestre.",
        },
        {
          p: "¿Tenéis oficina en Benidorm?",
          r: "No. La sede está en Alicante y trabajamos en remoto, por WhatsApp, teléfono, correo y videollamada. Si necesitas que nos veamos para empezar o revisar algo importante, lo concertamos.",
        },
      ]}
    />
  );
}
