import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { GuiasRelacionadas } from "@/components/GuiasRelacionadas";
import { FormularioContacto } from "@/components/FormularioContacto";
import { LineaAnio, type MesAnio } from "@/components/LineaAnio";
import { Check } from "@/components/Iconos";
import { CierreEjercicio } from "@/components/CierreEjercicio";
import { prices, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gestoría online para sociedades limitadas",
  description: `Contabilidad, impuestos, Impuesto sobre Sociedades y cuentas anuales de tu SL, llevados por economistas colegiados. Desde ${prices.sociedadMes} € al mes, sin permanencia.`,
  alternates: { canonical: "/sociedades/" },
};

const anio: MesAnio[] = [
  { mes: "Ene", hito: { t: "4.º trimestre", d: "303, 111, 115 y resúmenes anuales" } },
  { mes: "Feb" },
  { mes: "Mar", hito: { t: "Cuentas", d: "Se formulan las cuentas del año anterior", renta: true } },
  { mes: "Abr", hito: { t: "1.er trimestre", d: "303, 111, 115 y primer pago del 202" } },
  { mes: "May" },
  { mes: "Jun", hito: { t: "Junta", d: "Se aprueban las cuentas anuales", renta: true } },
  { mes: "Jul", hito: { t: "Modelo 200", d: "Impuesto sobre Sociedades, 2.º trimestre y depósito", renta: true } },
  { mes: "Ago" },
  { mes: "Sep" },
  { mes: "Oct", hito: { t: "3.er trimestre", d: "303, 111, 115 y segundo pago del 202" } },
  { mes: "Nov" },
  { mes: "Dic", hito: { t: "Último 202", d: "Tercer pago fraccionado" } },
];

const incluye = [
  { t: "Contabilidad y libros oficiales", d: "Registramos tus facturas y movimientos y legalizamos los libros cada año." },
  { t: "Impuestos trimestrales", d: "IVA, retenciones y pagos fraccionados: modelos 303, 111, 115 y 202 cuando correspondan." },
  { t: "Impuesto sobre Sociedades", d: "El modelo 200, preparado con el cierre del año ya revisado contigo." },
  { t: "Cuentas anuales", d: "Las formulamos, preparamos el acta de la junta y las depositamos en el Registro Mercantil." },
  { t: "Resúmenes anuales", d: "Modelos 390, 190, 180 y 347." },
  { t: "Un asesor asignado", d: "WhatsApp directo, respuesta en 24 horas laborables y una llamada antes de cada trimestre." },
];

const preguntas = [
  {
    p: "¿El Impuesto sobre Sociedades y las cuentas anuales van incluidos?",
    r: "Sí, dentro de la cuota mensual. Solo pagas aparte las tasas del Registro Mercantil por el depósito de cuentas y la legalización de libros.",
  },
  {
    p: "¿Por qué el precio es «desde»?",
    r: "Porque depende del volumen. El precio de partida es para sociedades con operativa sencilla. Antes de empezar revisamos cuántas facturas y movimientos tienes y te damos una cuota cerrada por escrito.",
  },
  {
    p: "¿Podéis constituir la sociedad?",
    r: "Sí. Te ayudamos con los estatutos, el NIF y las altas en Hacienda y la Seguridad Social, con un presupuesto cerrado. La notaría y el Registro se pagan aparte. Lo explicamos paso a paso en la página de constituir una sociedad.",
  },
  {
    p: "Soy autónomo. ¿Me conviene pasarme a sociedad?",
    r: "Depende de cuánto ganas, de cuánto necesitas sacar cada año para vivir y de los riesgos de tu actividad. Lo calculamos con tus números reales antes de que decidas.",
  },
  {
    p: "¿Puedo cambiarme a mitad de año?",
    r: "Sí. Recogemos la contabilidad de tu gestoría actual, la revisamos y seguimos desde ahí. Te avisamos si encontramos algo que haya que corregir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
};

export default function Sociedades() {
  return (
    <>
      <Cabecera actual="/sociedades/" />
      <main id="contenido">
        <section className="portada portada-cripto">
          <div className="contenedor">
            <div>
              <h1 style={{ maxWidth: "17ch" }}>La gestoría de tu sociedad, con un economista que la conoce.</h1>
              <p className="entradilla">
                Contabilidad, impuestos, Impuesto sobre Sociedades y cuentas anuales de tu SL, desde{" "}
                {prices.sociedadMes} € al mes. Todo incluido en la cuota y siempre con el mismo asesor.
              </p>
              <div className="acciones">
                <a className="boton boton-principal" href="#contacto">
                  Pedir presupuesto
                </a>
                <a
                  className="enlace-sencillo"
                  href={whatsappLink("Hola, quería información para mi sociedad.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <ul className="garantias">
                <li>
                  <Check /> Impuesto sobre Sociedades incluido
                </li>
                <li>
                  <Check /> Cuentas anuales incluidas
                </li>
                <li>
                  <Check /> Sin permanencia
                </li>
              </ul>
            </div>
            <CierreEjercicio />
          </div>
        </section>

        <section className="seccion seccion-banda" id="calendario" aria-labelledby="anio-sl">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="anio-sl">El año de una sociedad, organizado por nosotros.</h2>
              <p>
                Impuestos trimestrales, pagos fraccionados, cuentas anuales y el Impuesto sobre Sociedades. Para una
                sociedad cuyo ejercicio coincide con el año natural.
              </p>
            </div>
            <LineaAnio meses={anio} leyenda={["Impuestos trimestrales y pagos fraccionados", "Cierre del ejercicio"]} />
          </div>
        </section>

        <section className="seccion" aria-labelledby="incluye-sl">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="incluye-sl">Qué incluye la cuota.</h2>
              <p>Todo lo que necesita tu sociedad durante el año, con el mismo asesor.</p>
            </div>
            <ul className="lista-incluye lista-incluye-doble">
              {incluye.map((i) => (
                <li key={i.t}>
                  <Check />
                  <div>
                    <strong>{i.t}</strong>
                    <br />
                    <span>{i.d}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="julio-sl">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="julio-sl">Sin factura extra en julio.</h2>
              <p>
                En julio toca el Impuesto sobre Sociedades y el depósito de las cuentas anuales, y es cuando muchas
                gestorías pasan una factura aparte. Con nosotros, el cierre del año va dentro de la cuota.
              </p>
            </div>
            <div className="tabla-scroll">
              <table className="tabla comparar">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="visualmente-oculto">Concepto</span>
                    </th>
                    <th scope="col">Lo habitual</th>
                    <th scope="col" className="comparar-nos">Fiscalyx</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Contabilidad y trimestrales</th>
                    <td>En la cuota</td>
                    <td className="comparar-nos">En la cuota</td>
                  </tr>
                  <tr>
                    <th scope="row">Impuesto sobre Sociedades (Modelo 200)</th>
                    <td>A veces aparte, o con condiciones</td>
                    <td className="comparar-nos">En la cuota</td>
                  </tr>
                  <tr>
                    <th scope="row">Cuentas anuales y legalización de libros</th>
                    <td>Muchas veces aparte</td>
                    <td className="comparar-nos">En la cuota; solo pagas los aranceles del Registro</td>
                  </tr>
                  <tr>
                    <th scope="row">Quién te atiende</th>
                    <td>Depende del plan; a menudo, por chat</td>
                    <td className="comparar-nos">Un economista colegiado asignado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="nota-fuente">
              Comparación con las tarifas y condiciones publicadas por gestorías online para sociedades en noviembre de 2026.
            </p>
          </div>
        </section>

        <section className="seccion seccion-verde" aria-labelledby="precio-sl">
          <div className="contenedor precio">
            <div>
              <h2 id="precio-sl">Precio cerrado, antes de empezar.</h2>
              <p className="cifra" aria-label={`Desde ${prices.sociedadMes} euros al mes más IVA`}>
                <span className="cifra-desde">desde</span>
                {prices.sociedadMes} €<small>al mes + IVA</small>
              </p>
              <p className="precio-nota">
                Revisamos el volumen de tu sociedad y te damos una cuota fija por escrito. Sin permanencia.
              </p>
            </div>
            <div className="tarjeta-blanca">
              <table className="tabla">
                <caption>Qué entra y qué va aparte</caption>
                <tbody>
                  <tr>
                    <th scope="row">Contabilidad, trimestrales y resúmenes anuales</th>
                    <td className="importe incluido">Incluido</td>
                  </tr>
                  <tr>
                    <th scope="row">Impuesto sobre Sociedades</th>
                    <td className="importe incluido">Incluido</td>
                  </tr>
                  <tr>
                    <th scope="row">Cuentas anuales, acta y depósito</th>
                    <td className="importe incluido">Incluido</td>
                  </tr>
                  <tr>
                    <th scope="row">Nóminas y seguros sociales, por trabajador</th>
                    <td className="importe">{prices.nominaMes} € al mes</td>
                  </tr>
                  <tr>
                    <th scope="row">Tasas del Registro Mercantil</th>
                    <td className="importe">Aparte</td>
                  </tr>
                  <tr>
                    <th scope="row">Constitución y cambios en la sociedad</th>
                    <td className="importe">Presupuesto cerrado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="preguntas-sl">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="preguntas-sl">Preguntas frecuentes.</h2>
            </div>
            <div className="preguntas">
              {preguntas.map((q) => (
                <details key={q.p}>
                  <summary>{q.p}</summary>
                  <p>{q.r}</p>
                </details>
              ))}
            </div>
            <GuiasRelacionadas slugs={["autonomo-o-sociedad", "factura-electronica-verifactu", "cuota-autonomos-2027"]} />
            <p style={{ marginTop: "2rem" }}>
              ¿Aún no tienes la sociedad? <Link href="/constituir-sociedad/">Te ayudamos a constituirla</Link>. ¿No sabes si te compensa? <Link href="/calculadora-autonomo-o-sociedad/">Compáralo en un minuto</Link>. ¿Eres
              autónomo? <Link href="/autonomos/">Mira nuestro plan para autónomos</Link>.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" id="contacto" aria-labelledby="contacto-sl">
          <div className="contenedor contacto">
            <div>
              <h2 id="contacto-sl">Cuéntanos cómo es tu sociedad.</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                A qué se dedica, cuántas facturas emite y recibe al mes y si tiene trabajadores. Te contestamos con una
                cuota cerrada en 24 horas laborables.
              </p>
            </div>
            <FormularioContacto temaInicial="sociedad" />
          </div>
        </section>
      </main>
      <Pie contacto="#contacto" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
