import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en Alicante para autónomos",
  description:
    "Gestoría online con sede en Alicante para autónomos, sociedades e inversores en criptomonedas de Alicante y su área. Economistas colegiados y cuota fija.",
  alternates: { canonical: "/gestoria-alicante/" },
};

export default function GestoriaAlicante() {
  return (
    <PaginaLocal
      zona="Alicante"
      foto="puerto"
      fotoPie="El puerto de Alicante. Nuestra sede está en el centro, en el Centro ULab de la plaza de San Cristóbal."
      titulo="Tu gestoría en Alicante, con economistas colegiados"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos y sociedades de Alicante y su área, y la Renta de quienes invierten en criptomonedas. Online, con cuota fija y siempre el mismo asesor."
      municipios={["Elche", "San Vicente del Raspeig", "Sant Joan d'Alacant", "El Campello", "Mutxamel", "Santa Pola", "Crevillent"]}
      areaServida={["Alicante", "Elche", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Una gestoría de aquí que trabaja como las online</h2>
          <p>
            La sede de Fiscalyx está en Alicante. Trabajamos sobre todo en remoto, por WhatsApp, correo y videollamada,
            porque es lo que piden la mayoría de autónomos: no perder una mañana para entregar facturas. Pero cuando hace
            falta sentarse a revisar un caso, lo concertamos.
          </p>
          <p>
            Nuestros clientes de la zona son, sobre todo, profesionales que facturan a empresas, comercios, negocios
            ligados al turismo y cada vez más trabajadores digitales que viven en Alicante y trabajan para clientes de
            fuera. Muchos de ellos, además, tienen inversiones en criptomonedas, y ahí está nuestra diferencia: los
            llevamos con el mismo asesor.
          </p>
          <p>
            Si tu negocio está en Elche y vendes a otros países, mira nuestra página de{" "}
            <Link href="/gestoria-elche/">gestoría en Elche</Link>, con el IVA de las ventas al extranjero.
          </p>
          <p>
            Si estás en el sur de la provincia, tienes lo que cambia allí en nuestras páginas de la{" "}
            <Link href="/gestoria-vega-baja/">Vega Baja</Link>, de{" "}
            <Link href="/gestoria-orihuela/">Orihuela y Orihuela Costa</Link> y de{" "}
            <Link href="/gestoria-torrevieja/">Torrevieja</Link>, donde muchos autónomos son residentes extranjeros con
            rentas en otros países.
          </p>
          <p>
            Y en el resto de la provincia, cada zona tiene sus preguntas: la hostelería de{" "}
            <Link href="/gestoria-benidorm/">Benidorm</Link>, las empresas industriales de{" "}
            <Link href="/gestoria-alcoy/">Alcoy</Link>, el calzado de{" "}
            <Link href="/gestoria-elda-petrer/">Elda y Petrer</Link> y los propietarios extranjeros de{" "}
            <Link href="/gestoria-denia/">Dénia</Link>.
          </p>
          <h2>Por qué importa que tu asesor conozca la Comunitat Valenciana</h2>
          <p>
            La mitad de tu IRPF va con la escala autonómica, y la valenciana tiene sus propios tramos, su mínimo
            personal y una de las listas de deducciones más largas de España. Un programa genérico no las aplica; un
            asesor que no las conoce, tampoco. Además, la compra de una vivienda, una herencia o una donación no se
            tramitan con la Agencia Tributaria estatal, sino con la Agència Tributària Valenciana.
          </p>
        </>
      }
      fiscalTitulo="Tus impuestos, por vivir en la Comunitat Valenciana"
      fiscalFilas={[
        ["Escala autonómica del IRPF de 2026", "11 tramos, del 8,80 % al 29,35 %, rebajada por la Ley 5/2026"],
        ["Mínimo personal autonómico", "6.105 €, distinto del estatal"],
        ["Deducciones autonómicas", "Más de treinta: familia, vivienda y alquiler, cultura, discapacidad y otras"],
        ["Impuesto sobre el Patrimonio", "Mínimo exento de 2.000.000 € desde el ejercicio 2026, que se declara en 2027"],
        ["Vivienda, herencias y donaciones", "Se tramitan con la Agència Tributària Valenciana"],
      ]}
      fiscalNota={
        <p>
          Si inviertes en criptomonedas, el nuevo mínimo exento del Impuesto sobre el Patrimonio te interesa: con un
          patrimonio por debajo de dos millones de euros, contando también tus criptomonedas, ya no tendrás que pagar
          este impuesto en la Comunitat. Lo que sigue igual es la obligación de declarar en la Renta tus ventas y permutas,
          y el <Link href="/guias/modelo-721/">Modelo 721</Link> si tienes más de 50.000 € en plataformas extranjeras.
        </p>
      }
      fuentes={[
        { nombre: "Escala autonómica del IRPF 2026 en la Comunitat Valenciana", url: "https://guiafiscal.es/irpf/valencia/" },
        { nombre: "Tramos, mínimo personal y deducciones autonómicas", url: "https://taxdown.es/irpf/tramos-tablas-comunidad-valenciana" },
        { nombre: "Ley 5/2026: mínimo exento del Patrimonio a 2 millones", url: "https://www.cuatrecasas.com/es/spain/art/comunidad-valenciana-novedades-tributarias-2026" },
      ]}
      extra={
        <section className="seccion" aria-labelledby="alicante-cripto">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="alicante-cripto">Asesor fiscal de criptomonedas en Alicante</h2>
            <p>
              Preparamos la Renta con criptomonedas de inversores de Alicante y Elche: descargamos el historial de cada
              exchange y monedero, calculamos las ganancias y pérdidas con el método FIFO y presentamos la declaración con
              un informe que la justifica. También regularizamos años anteriores y contestamos las cartas de Hacienda.
            </p>
            <p>
              Si además eres autónomo o tienes una sociedad, lo llevamos todo junto, con el mismo asesor. Mira{" "}
              <Link href="/criptomonedas/">nuestro servicio de criptomonedas</Link> o calcula tu precio en el{" "}
              <Link href="/criptomonedas/#presupuesto">presupuesto en tres preguntas</Link>.
            </p>
          </div>
        </section>
      }
      preguntas={[
        {
          p: "¿Tenéis oficina en Alicante?",
          r: "La sede de Fiscalyx está en Alicante. Trabajamos en remoto por WhatsApp, correo y videollamada, que es lo más cómodo para la mayoría de clientes; si necesitas que nos veamos, lo concertamos.",
        },
        {
          p: "Soy de Elche o de San Vicente. ¿Podéis llevarme?",
          r: "Sí. Trabajamos con autónomos y sociedades de toda la provincia y de toda España. Para presentar en tu nombre basta con un apoderamiento o tu certificado digital.",
        },
        {
          p: "¿Aplicáis las deducciones autonómicas valencianas?",
          r: "Sí. Revisamos cada año las deducciones de la Comunitat Valenciana que te puedan corresponder, como las de familia, vivienda o alquiler, y las aplicamos en tu Renta.",
        },
        {
          p: "Ya tengo gestoría en Alicante. ¿Cómo me cambio?",
          r: "Nos autorizas y pedimos la documentación a tu gestoría actual. Lo habitual es empezar a llevarte desde el trimestre siguiente, sin dejar nada a medias.",
        },
      ]}
    />
  );
}
