import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en la Vega Baja",
  description:
    "Gestoría online para autónomos y sociedades de la Vega Baja: Orihuela, Torrevieja, Callosa de Segura, Almoradí y Pilar de la Horadada. Economistas colegiados.",
  alternates: { canonical: "/gestoria-vega-baja/" },
};

export default function GestoriaVegaBaja() {
  return (
    <PaginaLocal
      zona="la Vega Baja"
      titulo="Tu gestoría en la Vega Baja, de Orihuela a Torrevieja"
      entradilla="Somos de aquí. Llevamos los impuestos y la contabilidad de autónomos y sociedades de la Vega Baja, y la Renta de quienes invierten en criptomonedas, con cuota fija y un asesor que conoce la comarca."
      municipios={["Orihuela", "Torrevieja", "Callosa de Segura", "Almoradí", "Pilar de la Horadada", "Rojales", "Guardamar del Segura", "Cox", "Redován", "Catral", "Dolores", "Albatera"]}
      areaServida={["Vega Baja del Segura", "Orihuela", "Torrevieja", "Callosa de Segura", "Almoradí", "Pilar de la Horadada"]}
      intro={
        <>
          <h2>Una gestoría online con raíces en la comarca</h2>
          <p>
            Detrás de Fiscalyx hay economistas que llevan años trabajando con empresas y autónomos de la Vega Baja desde
            Callosa de Segura. Conocemos cómo funciona la comarca: el comercio de los pueblos, los negocios de la costa que
            viven de la temporada, la agricultura y cada vez más profesionales que trabajan en remoto para clientes de
            fuera.
          </p>
          <p>
            Lo que cambia con Fiscalyx es la forma de trabajar. No hace falta que vengas a la oficina a dejar facturas:
            nos las envías por WhatsApp o correo, te avisamos de cada plazo y te llamamos antes de cada trimestre para
            que sepas lo que vas a pagar.
          </p>
          <p>
            Si estás en Orihuela o en Torrevieja, tienes páginas con lo propio de cada sitio:{" "}
            <Link href="/gestoria-orihuela/">el régimen agrario y la costa de Orihuela</Link> y{" "}
            <Link href="/gestoria-torrevieja/">los autónomos extranjeros de Torrevieja</Link>.
          </p>
          <h2>Quién se encarga de cada impuesto</h2>
          <p>
            Una de las dudas que más nos plantean es a qué administración hay que acudir. Vivir en la Vega Baja significa
            tratar con cuatro: Hacienda, la Seguridad Social, la Agència Tributària Valenciana y tu ayuntamiento. Te lo
            resumimos en la tabla, y de todas nos encargamos nosotros.
          </p>
        </>
      }
      fiscalTitulo="Cada impuesto, con su administración"
      fiscalFilas={[
        ["Agencia Tributaria", "IRPF y Renta, IVA, Impuesto sobre Sociedades, retenciones, Modelo 721 e Impuesto sobre el Patrimonio"],
        ["Seguridad Social", "Tu cuota de autónomo, las altas y bajas y los seguros sociales de tus trabajadores"],
        ["Agència Tributària Valenciana", "Compraventa de inmuebles usados, herencias y donaciones"],
        ["Ayuntamiento", "IBI, plusvalía municipal e IAE, del que están exentos los autónomos y las sociedades que facturan menos de 1 millón"],
      ]}
      fiscalNota={
        <p>
          Al estar en la Comunitat Valenciana, tu IRPF lleva la escala autonómica valenciana, que en 2026 va del 8,80 %
          al 29,35 %, y puedes aplicar sus deducciones autonómicas. Te lo explicamos con más detalle en nuestra página de{" "}
          <Link href="/gestoria-alicante/">gestoría en Alicante</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Escala autonómica del IRPF 2026 en la Comunitat Valenciana", url: "https://guiafiscal.es/irpf/valencia/" },
        { nombre: "Agència Tributària Valenciana", url: "https://atv.gva.es/" },
        { nombre: "Agencia Tributaria: novedades de la Orden de módulos para 2026 (Orden HAC/1425/2025)", url: "https://sede.agenciatributaria.gob.es/static_files/Sede/Actualidad/Novedades/2025/BOLINFORM_orden_modulos_2026.pdf" },
        { nombre: "Agencia Tributaria: reducción de índices de rendimiento neto de 2025 (Orden HAC/484/2026)", url: "https://sede.agenciatributaria.gob.es/Sede/en_gb/todas-noticias/2026/mayo/18/reduccion-indices-rendimiento-neto-actividades-2025.html" },
      ]}
      extra={
        <>
        <section className="seccion seccion-banda" aria-labelledby="vega-agricultores">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="vega-agricultores">Si eres agricultor: los módulos del IRPF</h2>
            <p>
              La mayoría de agricultores de la huerta tributa en el IRPF por módulos. Tu rendimiento no sale de restar
              gastos a ingresos: se multiplica lo que vendes por un índice que fija Hacienda para cada cultivo, distinto
              para los cítricos, las hortalizas o los frutales.
            </p>
            <p>
              Ese índice no es fijo. Cada primavera Hacienda rebaja los de los cultivos y municipios que han tenido un
              mal año por sequía, granizo o plagas. Para la Renta de 2025 lo hizo la Orden HAC/484/2026, de 14 de mayo.
              Además, todo el que tributa por módulos se aplica en 2026 una reducción general del 5&nbsp;% sobre el
              rendimiento. Antes de presentar tu Renta comprobamos qué índice le toca a cada cultivo y a cada parcela.
            </p>
            <p>
              Puedes seguir en módulos mientras tus ingresos agrarios no pasen de 250.000&nbsp;€, y la compensación
              del 12&nbsp;% que te pagan tus compradores ya no cuenta para ese límite. En el IVA funcionas con el
              régimen especial agrario, que te explicamos en la página de{" "}
              <Link href="/gestoria-orihuela/">gestoría en Orihuela</Link>.
            </p>
          </div>
        </section>
        <section className="seccion" aria-labelledby="vega-cripto">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="vega-cripto">También tus criptomonedas</h2>
            <p>
              Cada vez más clientes de la comarca tienen criptomonedas y no saben cómo declararlas. Calculamos las
              ganancias y pérdidas de todos tus exchanges y monederos con el método FIFO, presentamos tu Renta y te
              preparamos el Modelo 721 si hace falta. Si eres autónomo, lo llevamos todo con el mismo asesor.
            </p>
            <p>
              Mira <Link href="/criptomonedas/">nuestro servicio de criptomonedas</Link> o calcula tu precio en el{" "}
              <Link href="/criptomonedas/#presupuesto">presupuesto en tres preguntas</Link>.
            </p>
          </div>
        </section>
        </>
      }
      preguntas={[
        {
          p: "¿Puedo ir a veros en persona?",
          r: "Trabajamos sobre todo en remoto, pero estamos en la comarca. Si prefieres que nos veamos para empezar o para revisar algo importante, lo concertamos.",
        },
        {
          p: "Tengo un negocio en la costa que trabaja por temporadas. ¿Me podéis llevar?",
          r: "Sí. Te ayudamos a organizar los trimestres de más y menos actividad, a revisar tu cuota de autónomo según lo que ganes en realidad y a no llevarte sorpresas en la Renta.",
        },
        {
          p: "Soy agricultor y tributo por módulos. ¿Me puede bajar el IRPF por un mal año?",
          r: "Sí. Cada primavera Hacienda rebaja los índices de los cultivos y municipios afectados por sequía, granizo u otras circunstancias; para 2025 lo hizo en mayo de 2026. Revisamos qué índice le toca a cada uno de tus cultivos antes de presentar tu Renta.",
        },
        {
          p: "¿Lleváis también sociedades de la Vega Baja?",
          r: "Sí. Contabilidad, impuestos trimestrales, Impuesto sobre Sociedades y cuentas anuales, con una cuota fija mensual.",
        },
        {
          p: "Ya tengo gestoría en Orihuela. ¿Cómo me cambio?",
          r: "Nos autorizas y pedimos la documentación a tu gestoría actual. Lo habitual es empezar a llevarte desde el trimestre siguiente, sin dejar nada a medias.",
        },
      ]}
    />
  );
}
