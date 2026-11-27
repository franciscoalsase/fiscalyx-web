import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en Villena: autónomos y empresas",
  description:
    "Gestoría online para autónomos, talleres y empresas de Villena y el Alto Vinalopó: impuestos, contabilidad y qué pagar al comprar o ampliar una nave.",
  alternates: { canonical: "/gestoria-villena/" },
};

export default function GestoriaVillena() {
  return (
    <PaginaLocal
      zona="Villena"
      titulo="Gestoría en Villena para autónomos, talleres y empresas"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos y sociedades de Villena y el Alto Vinalopó: calzado, mueble, construcción, agricultura y comercio. Online, con cuota fija y el mismo asesor todo el año."
      municipios={["Biar", "Sax", "Cañada", "Beneixama", "Camp de Mirra", "Salinas"]}
      areaServida={["Villena", "Alto Vinalopó", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Industria y campo en la cabecera del Vinalopó</h2>
          <p>
            Villena tiene unos 34.700 habitantes y uno de los términos municipales más grandes de la provincia. Hasta los
            años sesenta vivió sobre todo de la agricultura; hoy su economía descansa en los servicios y en la industria,
            con el calzado, la construcción y el mueble a la cabeza.
          </p>
          <p>
            Es también una ciudad donde las empresas crecen sin irse: el ayuntamiento ha aprobado un nuevo polígono de
            135.000 metros cuadrados pensado precisamente para que las que ya están puedan ampliar. Y comprar o ampliar
            una nave es una de las operaciones en las que más dinero se pierde por no mirar bien los impuestos.
          </p>
          <p>
            La sede de Fiscalyx está en Alicante. Trabajamos en remoto con empresas de toda la provincia y, para una
            operación así, nos sentamos contigo antes de firmar.
          </p>
        </>
      }
      fiscalTitulo="Si compras una nave para tu empresa: IVA o transmisiones"
      fiscalFilas={[
        ["Nave nueva, de promotor", "Lleva IVA, que como empresa recuperas en tu declaración, más el impuesto de actos jurídicos documentados de la escritura"],
        ["Nave de segunda mano", "La venta está exenta de IVA y pagas el impuesto de transmisiones patrimoniales, que no se recupera"],
        ["La renuncia a la exención", "Si vendedor y comprador son empresas y el comprador puede deducir todo el IVA, se puede renunciar a la exención: pagas IVA, que recuperas, en lugar de transmisiones"],
        ["Cómo se hace", "Hay que comunicarlo por escrito al vendedor antes de la venta o en la propia escritura, y el IVA lo declara el comprador por inversión del sujeto pasivo"],
      ]}
      fiscalNota={
        <p>
          La diferencia entre una opción y otra puede ser de decenas de miles de euros, así que revisamos la operación
          antes de que fijes el precio. Si además tu empresa está creciendo, mira qué obligaciones nuevas llegan al pasar
          ciertas cifras en la página de <Link href="/gestoria-alcoy/">Alcoy</Link>, y si trabajas en el calzado, lo que
          explicamos para <Link href="/gestoria-elda-petrer/">Elda y Petrer</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Villena: población por edad y nacionalidad, padrón de 2025 (INE, vía City Population)", url: "https://citypopulation.de/en/spain/comunitatvalenciana/alicante/03140__villena" },
        { nombre: "Villena aprueba el Plan Parcial La Solana: 135.000 m² de suelo industrial (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/elda-vinalopo-mitja/villena-aprueba-el-plan-parcial-la-solana-para-crear-135000-metros-cuadrados-de-nuevo-suelo-industrial" },
        { nombre: "Ley 37/1992 del IVA (artículos 20.Dos y 84, renuncia a la exención e inversión del sujeto pasivo)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740" },
      ]}
      preguntas={[
        {
          p: "Voy a comprar una nave de segunda mano. ¿Pago IVA o transmisiones?",
          r: "En principio, transmisiones patrimoniales, porque la venta está exenta de IVA. Pero si el vendedor es empresa y tú puedes deducirte todo el IVA, podéis renunciar a la exención y pagar IVA, que recuperas. Casi siempre sale más barato; lo calculamos antes de firmar.",
        },
        {
          p: "Tengo una empresa de muebles que vende a toda España. ¿Me lleváis la contabilidad?",
          r: "Sí. Contabilidad, impuestos trimestrales, Impuesto sobre Sociedades, cuentas anuales y, si tienes plantilla, nóminas, con una cuota fija que te damos por escrito antes de empezar.",
        },
        {
          p: "Soy agricultor en Villena. ¿Cómo tributo?",
          r: "Lo habitual es el IRPF por módulos y el régimen especial agrario en el IVA. Lo explicamos en las páginas de la Vega Baja y de Orihuela, y revisamos cada año si te conviene seguir en ese régimen.",
        },
        {
          p: "¿Tenéis oficina en Villena?",
          r: "No. La sede está en Alicante y trabajamos en remoto. Para operaciones importantes, como la compra de una nave, si prefieres que nos veamos lo concertamos.",
        },
      ]}
    />
  );
}
