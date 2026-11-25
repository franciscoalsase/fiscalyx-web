import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { FormularioContacto } from "@/components/FormularioContacto";
import { Check } from "@/components/Iconos";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cambiar de gestoría: cómo hacerlo sin dejar nada a medias",
  description:
    "Cómo cambiar de gestoría siendo autónomo o con una sociedad: cuándo hacerlo, qué documentación necesitas y cómo nos encargamos nosotros de pedírsela a tu gestoría actual.",
  alternates: { canonical: "/cambiar-de-gestoria/" },
};

const pasos = [
  {
    t: "Una llamada de 15 minutos",
    d: "Nos cuentas tu actividad, tus facturas y lo que no te gusta de tu gestoría actual. Te damos un presupuesto cerrado por escrito.",
  },
  {
    t: "Nos autorizas",
    d: "Un apoderamiento en la Agencia Tributaria y una autorización en la Seguridad Social. Se hace online en unos minutos y te guiamos paso a paso.",
  },
  {
    t: "Pedimos tu documentación",
    d: "Escribimos a tu gestoría y le pedimos lo que necesitamos: modelos presentados, libros, contabilidad y datos de tus trabajadores si los tienes.",
  },
  {
    t: "Revisamos lo que heredamos",
    d: "Repasamos los últimos ejercicios en busca de errores, plazos pendientes y deducciones que no se te estaban aplicando.",
  },
  {
    t: "Empezamos el siguiente trimestre",
    d: "Te damos la bienvenida con tu calendario de plazos y qué enviarnos cada mes. Desde ahí, tu asesor es siempre el mismo.",
  },
];

const necesitamos = [
  { t: "Modelos presentados", d: "Trimestrales y anuales de los últimos cuatro años. Si tu gestoría tarda, los descargamos de la sede de Hacienda con tu autorización." },
  { t: "Libros y contabilidad", d: "Libros de ingresos y gastos si eres autónomo; contabilidad completa y cuentas anuales si tienes una sociedad." },
  { t: "Datos censales", d: "Tu alta en Hacienda (modelo 036 o 037) y en la Seguridad Social, con las actividades y epígrafes." },
  { t: "Trabajadores, si los tienes", d: "Contratos, nóminas y seguros sociales, para no interrumpir ningún pago." },
];

const preguntas = [
  {
    p: "¿Tengo que avisar yo a mi gestoría?",
    r: "Es buena práctica que les digas que vas a cambiar, pero de pedir la documentación nos encargamos nosotros. Lo hacemos por escrito y con tu autorización.",
  },
  {
    p: "¿Y si mi gestoría no me da la documentación?",
    r: "Tus modelos presentados, tus libros y tu contabilidad son tuyos. Si hay retrasos, podemos descargar de la sede de la Agencia Tributaria las declaraciones presentadas con tu autorización y reconstruir lo que haga falta.",
  },
  {
    p: "¿Cuándo es mejor cambiarse?",
    r: "Al empezar un trimestre: así quien llevaba el trimestre anterior lo cierra y nosotros empezamos con el siguiente. Si quieres cambiar a mitad, también se puede: cerramos nosotros el trimestre en curso con tu documentación.",
  },
  {
    p: "¿Pierdo algo si me cambio a mitad de año?",
    r: "No. La Renta y los resúmenes anuales los preparamos con los datos de todo el año, también los de los trimestres que llevó tu gestoría anterior.",
  },
  {
    p: "Tengo una sociedad. ¿Es más complicado?",
    r: "Un poco más, porque hay que traspasar la contabilidad y revisar el último cierre. Por eso lo mejor es hacerlo antes del cierre del ejercicio o justo después de presentar las cuentas anuales.",
  },
  {
    p: "¿Hay permanencia con vosotros?",
    r: "No. Pagas mes a mes y, si un día te vas, te entregamos toda tu documentación.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
};

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo cambiar de gestoría",
  step: pasos.map((p, i) => ({ "@type": "HowToStep", position: i + 1, name: p.t, text: p.d })),
};

export default function CambiarDeGestoria() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "20ch" }}>Cambiar de gestoría, sin dejar nada a medias.</h1>
              <p className="entradilla">
                Si tu gestoría no contesta, te avisa tarde o no entiende tu negocio, cambiarse es más sencillo de lo que
                parece. Tú nos autorizas; del resto nos encargamos nosotros, también de pedir tu documentación.
              </p>
              <div className="acciones">
                <a className="boton boton-principal" href="#contacto">
                  Quiero cambiarme
                </a>
                <a
                  className="enlace-sencillo"
                  href={whatsappLink("Hola, quiero cambiar de gestoría.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <ul className="garantias">
                <li>
                  <Check /> Pedimos tu documentación
                </li>
                <li>
                  <Check /> Presupuesto cerrado
                </li>
                <li>
                  <Check /> Sin permanencia
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="cambio-pasos">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="cambio-pasos">Cinco pasos, y solo el segundo es tuyo.</h2>
            </div>
            <ol className="pasos">
              {pasos.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seccion" aria-labelledby="cambio-necesitamos">
          <div className="contenedor texto-estrecho">
            <h2 id="cambio-necesitamos">Lo que pedimos a tu gestoría.</h2>
            <ul className="lista-incluye" style={{ marginTop: "1.5rem" }}>
              {necesitamos.map((i) => (
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

        <section className="seccion seccion-banda" aria-labelledby="cambio-cuando">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="cambio-cuando">Señales de que toca cambiar.</h2>
            <p>
              Si te reconoces en dos o más, merece la pena hablar: te enteras de cuánto pagas el día antes del plazo; nadie
              te ha explicado nunca qué gastos te puedes deducir; tardan días en contestar un WhatsApp; cada vez te atiende
              alguien distinto; o tienes criptomonedas y tu gestoría te ha dicho que eso no lo lleva.
            </p>
            <p>
              Con Fiscalyx tienes un asesor con nombre, una llamada antes de cada trimestre para saber lo que vas a pagar y
              respuesta en 24 horas laborables. Mira <Link href="/precios/">qué incluye cada plan</Link>.
            </p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="cambio-preguntas">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="cambio-preguntas">Preguntas frecuentes.</h2>
            </div>
            <div className="preguntas">
              {preguntas.map((q) => (
                <details key={q.p}>
                  <summary>{q.p}</summary>
                  <p>{q.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="seccion seccion-banda" id="contacto" aria-labelledby="cambio-contacto">
          <div className="contenedor contacto">
            <div>
              <h2 id="cambio-contacto">Cuéntanos cómo lo llevas ahora.</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                Qué haces, cuántas facturas tienes al trimestre y qué te gustaría que cambiara. Te respondemos en 24 horas
                laborables con un presupuesto cerrado.
              </p>
            </div>
            <FormularioContacto />
          </div>
        </section>
      </main>
      <Pie contacto="#contacto" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, howTo]) }} />
    </>
  );
}
