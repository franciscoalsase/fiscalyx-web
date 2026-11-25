import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría y asesoría fiscal en Murcia para autónomos",
  description:
    "Gestoría online para autónomos, sociedades e inversores en criptomonedas de la Región de Murcia. Economistas colegiados, cuota fija y el mismo asesor siempre.",
  alternates: { canonical: "/gestoria-murcia/" },
};

export default function GestoriaMurcia() {
  return (
    <PaginaLocal
      zona="Murcia"
      titulo="Tu gestoría online en Murcia, con economistas colegiados"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos y sociedades de la Región de Murcia, y la Renta de quienes invierten en criptomonedas. Con cuota fija y siempre el mismo asesor."
      municipios={["Molina de Segura", "Alcantarilla", "Cartagena", "Lorca", "Santomera", "Beniel", "San Javier", "Torre-Pacheco"]}
      areaServida={["Región de Murcia", "Murcia", "Cartagena", "Molina de Segura"]}
      intro={
        <>
          <h2>Al lado de la Región, y online</h2>
          <p>
            Trabajamos desde la Vega Baja, a pocos kilómetros de Murcia, y muchos de nuestros clientes viven a un lado
            del límite y trabajan al otro. Por eso conocemos bien las dos normativas autonómicas y lo que cambia en tus
            impuestos según dónde tengas tu residencia.
          </p>
          <p>
            El servicio es el mismo para toda la Región: nos envías tus facturas por WhatsApp o correo, te avisamos de
            cada plazo, te llamamos antes de cada trimestre y presentamos todo en tu nombre. Sin desplazamientos.
          </p>
          <h2>Murcia tiene su propia escala del IRPF</h2>
          <p>
            La parte autonómica de tu IRPF va con la escala murciana, con menos tramos que la estatal y unos tipos que no
            coinciden con los de la Comunitat Valenciana. Si te mudas de Orihuela a Murcia, o al revés, tu Renta cambia
            aunque ganes lo mismo. Y los impuestos de la compra de una vivienda, las herencias y las donaciones se
            tramitan con la Agencia Tributaria de la Región de Murcia.
          </p>
        </>
      }
      fiscalTitulo="Lo que cambia en tus impuestos por vivir en la Región de Murcia."
      fiscalFilas={[
        ["Escala autonómica del IRPF", "5 tramos, del 9,50 % al 22,50 %"],
        ["Impuesto sobre el Patrimonio", "Mínimo exento general de 700.000 € y una bonificación autonómica ligada al Impuesto de Solidaridad de las Grandes Fortunas"],
        ["Vivienda, herencias y donaciones", "Se tramitan con la Agencia Tributaria de la Región de Murcia"],
        ["IRPF, IVA, Sociedades y Modelo 721", "Igual que en el resto de España, con la Agencia Tributaria estatal"],
      ]}
      fiscalNota={
        <p>
          Si tienes criptomonedas y un patrimonio alto, el Impuesto sobre el Patrimonio en Murcia funciona distinto que en
          la Comunitat Valenciana, donde el mínimo exento ha subido a dos millones. Merece la pena revisarlo cada año.
          Para todo lo demás, las reglas de las criptomonedas son las estatales: mira nuestra guía de{" "}
          <Link href="/guias/compensar-perdidas-criptomonedas/">cómo compensar pérdidas</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Ministerio de Hacienda: Tributación autonómica, medidas 2026", url: "https://www.hacienda.gob.es/SGFAL/FinanciacionTerritorial/Autonomica/Capitulo-I-Tributacion-Autonomica-2026.pdf" },
        { nombre: "Impuesto sobre el Patrimonio en la Región de Murcia 2026", url: "https://guiafiscal.es/patrimonio/ip/murcia/" },
        { nombre: "Agencia Tributaria de la Región de Murcia", url: "https://agenciatributaria.carm.es/" },
      ]}
      extra={
        <section className="seccion" aria-labelledby="murcia-cripto">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="murcia-cripto">Asesor fiscal de criptomonedas en Murcia</h2>
            <p>
              Preparamos la Renta con criptomonedas de inversores de toda la Región: historial de cada exchange y monedero,
              cálculo con el método FIFO, presentación de la declaración y un informe que la justifica ante Hacienda.
              También regularizamos años anteriores y preparamos el Modelo 721.
            </p>
            <p>
              Mira <Link href="/criptomonedas/">nuestro servicio de criptomonedas</Link> o calcula tu precio en el{" "}
              <Link href="/criptomonedas/#presupuesto">presupuesto en tres preguntas</Link>.
            </p>
          </div>
        </section>
      }
      preguntas={[
        {
          p: "¿Podéis llevar a un autónomo de Murcia si estáis en la Comunitat Valenciana?",
          r: "Sí. Los impuestos de un autónomo se presentan ante la Agencia Tributaria estatal y la Seguridad Social, estés donde estés. Lo que cambia es la escala autonómica de tu IRPF y tus deducciones, y las aplicamos según tu residencia.",
        },
        {
          p: "Vivo en Murcia pero trabajo en la Vega Baja. ¿Qué escala se me aplica?",
          r: "La de la comunidad donde tengas tu residencia habitual, normalmente donde vives más días del año. Te ayudamos a comprobarlo si tienes dudas.",
        },
        {
          p: "¿Lleváis sociedades de la Región de Murcia?",
          r: "Sí. Contabilidad, impuestos trimestrales, Impuesto sobre Sociedades y cuentas anuales, con una cuota fija mensual.",
        },
        {
          p: "Ya tengo gestoría en Murcia. ¿Cómo me cambio?",
          r: "Nos autorizas y pedimos la documentación a tu gestoría actual. Lo habitual es empezar a llevarte desde el trimestre siguiente, sin dejar nada a medias.",
        },
      ]}
    />
  );
}
