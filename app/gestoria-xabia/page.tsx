import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en Xàbia (Jávea) para extranjeros",
  description:
    "Gestoría online en Xàbia/Jávea: autónomos, negocios de temporada y familias extranjeras, con herencias, donaciones y la casa en España.",
  alternates: { canonical: "/gestoria-xabia/" },
};

export default function GestoriaXabia() {
  return (
    <PaginaLocal
      zona="Xàbia"
      titulo="Gestoría en Xàbia para autónomos, familias y propietarios extranjeros"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos y sociedades de Xàbia/Jávea y, sobre todo, las cuestiones fiscales de las familias que tienen aquí su casa: la Renta, la vivienda, las herencias y las donaciones. Online y con el mismo asesor."
      municipios={["Dénia", "Benitatxell", "Teulada-Moraira", "Gata de Gorgos", "Pedreguer", "Benissa"]}
      areaServida={["Xàbia", "Jávea", "Marina Alta", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Casi la mitad de los vecinos llegaron de otro país</h2>
          <p>
            Xàbia tiene unos 30.800 habitantes empadronados, y cerca del 47&nbsp;% tiene nacionalidad extranjera. Es uno
            de los municipios de España con más británicos empadronados en proporción, y en verano su población se
            multiplica.
          </p>
          <p>
            Por eso las consultas que más se repiten aquí no son las de un trimestre de IVA, sino las de una familia con
            patrimonio en dos países: qué pasa con la casa si fallece uno de los padres, cómo dar dinero a un hijo en
            vida, si conviene empadronarse o no y en qué país se paga cada impuesto.
          </p>
          <p>
            La sede de Fiscalyx está en Alicante. Trabajamos en remoto, también con herederos que viven fuera de España,
            por correo, WhatsApp y videollamada.
          </p>
        </>
      }
      fiscalTitulo="Si heredas una casa en Xàbia"
      fiscalFilas={[
        ["Padres, hijos y cónyuges", "En la Comunitat Valenciana tienen una bonificación del 99 % en el Impuesto sobre Sucesiones, además de una reducción por parentesco. En la mayoría de herencias se paga muy poco"],
        ["Hermanos y sobrinos", "Desde 2026 tienen una bonificación del 25 %, que la Generalitat ha previsto subir al 50 % en 2027"],
        ["Si vives fuera de España", "Puedes aplicar las mismas ventajas de la Comunitat Valenciana cuando la casa heredada está aquí"],
        ["El plazo", "Seis meses desde el fallecimiento para presentar el impuesto, aunque salga a pagar muy poco. Se puede pedir una prórroga dentro de los cinco primeros meses"],
      ]}
      fiscalNota={
        <p>
          Además del Impuesto sobre Sucesiones, el ayuntamiento cobra la plusvalía municipal, y si después vendes la casa
          siendo no residente, el comprador te retendrá el 3&nbsp;%: lo explicamos en la página de{" "}
          <Link href="/gestoria-denia/">Dénia</Link>. Si mantienes la casa sin vivir en España, cada año hay que
          presentar el modelo 210, como contamos en la de <Link href="/gestoria-torrevieja/">Torrevieja</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Xàbia: censo de población y nacionalidades (Jávea.com, con datos del INE)", url: "https://www.javea.com/en/censo-de-poblacion-habitantes-y-nacionalidad/" },
        { nombre: "Calpe, primer municipio con más extranjeros que españoles; Xàbia, 47 % (idealista)", url: "https://www.idealista.com/en/news/node/870309" },
        { nombre: "Agència Tributària Valenciana: novedades fiscales y bonificación del 99 % en sucesiones", url: "https://atv.gva.es/documents/173852445/177585437/Presentaci%C3%B3n+DG+Tributos+novedades+fiscales/ad720e9a-a565-4862-bb72-c281a3a2d500" },
        { nombre: "Ley 29/1987 del Impuesto sobre Sucesiones y Donaciones (disposición adicional segunda, no residentes)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1987-28141" },
      ]}
      preguntas={[
        {
          p: "Mi padre vivía en Xàbia y ha fallecido. Yo vivo en el Reino Unido. ¿Cuánto pago por heredar la casa?",
          r: "Como hijo tienes la reducción por parentesco y la bonificación del 99 % de la Comunitat Valenciana, que puedes aplicar aunque vivas fuera porque la casa está aquí. En la mayoría de los casos el impuesto es pequeño, pero hay que presentarlo en seis meses. Lo preparamos con la documentación del notario.",
        },
        {
          p: "Queremos dar dinero a nuestros hijos para que compren una casa. ¿Tributa?",
          r: "Sí, como donación. En la Comunitat Valenciana las donaciones a hijos, nietos, padres y cónyuge tienen también una bonificación del 99 %, pero solo si se cumplen sus requisitos, entre ellos los de residencia. Lo revisamos antes de hacer la transferencia, porque después ya no se puede arreglar.",
        },
        {
          p: "Paso medio año en Xàbia. ¿Dónde pago mis impuestos?",
          r: "Depende de dónde estés más de 183 días al año y de dónde tengas el centro de tus intereses, y también del convenio con tu país. Lo analizamos contigo, porque ser residente aquí cambia qué declaras y dónde.",
        },
        {
          p: "¿Tenéis oficina en Xàbia?",
          r: "No. La sede está en Alicante y trabajamos en remoto, también con clientes que viven fuera de España. Si necesitas que nos veamos, lo concertamos.",
        },
      ]}
    />
  );
}
