import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { FormularioContacto } from "@/components/FormularioContacto";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Constituir una sociedad limitada: pasos, plazos y capital",
  description:
    "Te ayudamos a crear tu SL de principio a fin: denominación, estatutos, notaría, Registro Mercantil, NIF y altas. También con capital desde 1 €.",
  alternates: { canonical: "/constituir-sociedad/" },
};

const pasos = [
  { t: "Estudio previo", d: "Comprobamos con tus números si te conviene la sociedad frente a seguir como autónomo." },
  { t: "Nombre de la sociedad", d: "Pedimos al Registro Mercantil Central el certificado de que la denominación está libre." },
  { t: "Estatutos y capital", d: "Redactamos los estatutos contigo y te indicamos cómo aportar el capital." },
  { t: "Notaría", d: "Coordinamos la firma de la escritura de constitución y la obtención del NIF provisional." },
  { t: "Registro Mercantil", d: "Inscribimos la sociedad y pedimos el NIF definitivo." },
  { t: "Altas", d: "Alta en Hacienda, en la Seguridad Social del administrador y, si contratas, de la empresa." },
];

const preguntas = [
  {
    p: "¿De verdad se puede crear una SL con 1 €?",
    r: "Sí. Desde la Ley 18/2022, de creación y crecimiento de empresas, el capital mínimo de una sociedad limitada es de 1 €. Pero mientras el capital no llegue a 3.000 €, la sociedad debe destinar al menos el 20 % del beneficio a una reserva legal hasta alcanzar esa cifra. Y si se liquida sin bienes suficientes, los socios responden de la diferencia hasta 3.000 €.",
  },
  {
    p: "¿Cuánto se tarda?",
    r: "Depende sobre todo de la notaría y del Registro Mercantil de tu provincia. Te damos una previsión realista al empezar y te mantenemos al día en cada paso.",
  },
  {
    p: "¿Cuánto cuesta?",
    r: "Nuestros honorarios van con presupuesto cerrado antes de empezar. La notaría y el Registro Mercantil se pagan aparte, según sus aranceles.",
  },
  {
    p: "¿Y después de crearla?",
    r: "Podemos llevar la contabilidad, los impuestos y las cuentas anuales de la sociedad desde el primer día, con el plan de sociedades.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
};

export default function ConstituirSociedad() {
  return (
    <>
      <Cabecera actual="/sociedades/" />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "19ch" }}>Crea tu sociedad limitada sin perderte en trámites</h1>
              <p className="entradilla">
                Desde comprobar si te conviene hasta el NIF definitivo y las altas. Nos ocupamos de todo con un
                precio por escrito, y seguimos contigo después si quieres.
              </p>
              <div className="acciones">
                <a className="boton boton-principal" href="#contacto">
                  Pedir presupuesto
                </a>
                <a
                  className="enlace-sencillo"
                  href={whatsappLink("Hola, quiero constituir una sociedad.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <p className="portada-condiciones">Te damos el precio por escrito antes de empezar. Desde 2022, una SL se puede constituir con 1 € de capital.</p>
            </div>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="pasos-sl">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="pasos-sl">Los seis pasos, de la idea a la sociedad inscrita</h2>
            </div>
            <ol className="pasos pasos-seis">
              {pasos.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seccion" aria-labelledby="preguntas-constituir">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="preguntas-constituir">Dudas antes de constituir la sociedad</h2>
            </div>
            <dl className="preguntas-abiertas">
              {preguntas.map((q) => (
                <div key={q.p}>
                  <dt>{q.p}</dt>
                  <dd>{q.r}</dd>
                </div>
              ))}
            </dl>
            <p style={{ marginTop: "2rem" }}>
              Una vez creada, mira <Link href="/sociedades/">qué incluye la gestoría de tu sociedad</Link>.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" id="contacto" aria-labelledby="contacto-constituir">
          <div className="contenedor contacto">
            <div>
              <h2 id="contacto-constituir">Cuéntanos tu proyecto</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                A qué se va a dedicar la sociedad, cuántos socios seréis y si ya eres autónomo. Te respondemos con un
                presupuesto en 24 horas laborables.
              </p>
            </div>
            <FormularioContacto temaInicial="sociedad" />
          </div>
        </section>
      </main>
      <Pie />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
