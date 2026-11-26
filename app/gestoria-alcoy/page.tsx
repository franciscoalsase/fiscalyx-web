import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en Alcoy para empresas y autónomos",
  description:
    "Gestoría online para empresas industriales, sociedades y autónomos de Alcoy y l'Alcoià: cuentas anuales, auditoría, IVA y crecimiento.",
  alternates: { canonical: "/gestoria-alcoy/" },
};

export default function GestoriaAlcoy() {
  return (
    <PaginaLocal
      zona="Alcoy"
      titulo="Gestoría en Alcoy para empresas industriales y autónomos"
      entradilla="Llevamos la contabilidad, los impuestos y las cuentas anuales de sociedades y autónomos de Alcoy, l'Alcoià y el Comtat. Online, con cuota fija y el mismo asesor todo el año."
      municipios={["Cocentaina", "Muro d'Alcoi", "Banyeres de Mariola", "Ibi", "Onil", "Castalla", "Benilloba"]}
      areaServida={["Alcoy", "L'Alcoià", "El Comtat", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Una ciudad de empresas</h2>
          <p>
            Alcoy tiene unos 60.000 habitantes y más de 3.700 empresas, y casi una de cada seis factura más de un millón
            de euros al año. En l'Alcoià y el Comtat, el textil sigue a la cabeza: reúne cerca del 30&nbsp;% de la
            facturación y del empleo industrial de las dos comarcas, y a su lado crecen la cosmética, la alimentación y
            los servicios.
          </p>
          <p>
            Muchas son empresas familiares que empezaron pequeñas y han ido creciendo. Y crecer tiene consecuencias que no
            avisan: pasar de cierta cifra te obliga a auditar las cuentas, a presentar el IVA cada mes o a tener un plan
            de igualdad. Es mejor verlo venir con un año de margen.
          </p>
          <p>
            La sede de Fiscalyx está en Alicante. Trabajamos en remoto con empresas de toda la provincia y, cuando hace
            falta sentarse a revisar el cierre o una operación, lo concertamos.
          </p>
        </>
      }
      fiscalTitulo="Cuando tu empresa crece: las cifras que cambian tus obligaciones"
      fiscalFilas={[
        ["Cuentas anuales abreviadas", "Puedes presentarlas mientras, durante dos ejercicios seguidos, no superes dos de estos tres límites: 4 millones de activo, 8 millones de cifra de negocios y 50 trabajadores"],
        ["Auditoría obligatoria", "Cuando superas dos de estos tres límites durante dos ejercicios seguidos: 2,85 millones de activo, 5,7 millones de cifra de negocios y 50 trabajadores de media"],
        ["IVA mensual y Suministro Inmediato", "Si facturaste más de 6.010.121,04 € el año anterior, el IVA pasa a ser mensual y los libros se envían a Hacienda en cuatro días"],
        ["Plan de igualdad", "Obligatorio desde los 50 trabajadores, negociado con la representación de la plantilla y registrado"],
      ]}
      fiscalNota={
        <p>
          Hubo un proyecto de ley para subir los límites de las cuentas abreviadas y de la auditoría, pero no llegó a
          aprobarse: a finales de 2026 siguen vigentes los de esta tabla. Lo explicamos con más detalle en la guía de{" "}
          <Link href="/guias/cuentas-anuales-sociedad/">cuentas anuales de una sociedad</Link>, y si eres socio y
          trabajas en tu empresa, mira <Link href="/guias/cobrar-de-tu-sociedad/">cómo cobrar de tu sociedad</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Alcoy alcanza los 60.372 habitantes (Alicante Plaza)", url: "https://alicanteplaza.es/alcoy-sigue-ganando-poblacion-alcanza-los-60372-habitantes-y-recupera-la-sexta-posicion-provincial" },
        { nombre: "El 17,4 % de las empresas de Alcoy facturan más de un millón (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/alcoy-el-comtat/el-174-de-las-empresas-en-alcoy-facturan-mas-de-un-millon-de-euros-ya-son-654-tras-sumar-un-centenar-en-tres-anos" },
        { nombre: "El textil, a la cabeza en l'Alcoià y el Comtat (Alicante Plaza)", url: "https://alicanteplaza.es/las-empresas-textiles-siguen-a-la-cabeza-en-lalcoia-y-el-comtat-alcanzan-el-30-de-la-facturacion-y-de-los-empleos" },
        { nombre: "Ley de Sociedades de Capital (artículos 257 y 263)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2010-10544" },
      ]}
      preguntas={[
        {
          p: "Mi empresa ha pasado de 6 millones de facturación. ¿Qué cambia?",
          r: "Pasas a ser gran empresa a efectos del IVA: presentas el IVA cada mes y llevas los libros por el Suministro Inmediato de Información, con cuatro días para enviar cada factura. Si además superas los límites de auditoría dos años seguidos, tendrás que auditar las cuentas. Lo preparamos antes de que te toque.",
        },
        {
          p: "Somos una empresa familiar. ¿Cómo deberíamos cobrar los socios?",
          r: "Depende de si trabajáis en la empresa, de cuánto gana y de cuánto necesitáis sacar cada año. Lo normal es combinar nómina o retribución de administrador con dividendos; hacemos los números para que pagar el IRPF y el Impuesto sobre Sociedades salga lo más barato posible dentro de la ley.",
        },
        {
          p: "¿Lleváis también la contabilidad de la sociedad?",
          r: "Sí. Contabilidad, impuestos trimestrales, Impuesto sobre Sociedades, cuentas anuales y su depósito en el Registro Mercantil, con una cuota fija mensual que te damos por escrito antes de empezar.",
        },
        {
          p: "¿Tenéis oficina en Alcoy?",
          r: "No. La sede está en Alicante y trabajamos en remoto. Para el cierre del ejercicio o una operación importante, si prefieres que nos veamos, lo concertamos.",
        },
      ]}
    />
  );
}
