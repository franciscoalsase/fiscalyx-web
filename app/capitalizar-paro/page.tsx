import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { FormularioContacto } from "@/components/FormularioContacto";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Capitalizar el paro para ser autónomo",
  description:
    "Preparamos la memoria y el plan de inversión del pago único, te decimos en qué orden hacer cada trámite y te damos de alta a tiempo.",
  alternates: { canonical: "/capitalizar-paro/" },
};

const orden = [
  {
    t: "Comprobamos que puedes pedirlo",
    d: "Que cobras una prestación contributiva con al menos tres meses pendientes, que no has pedido otro pago único en los últimos cuatro años y que no has compatibilizado el paro con ser autónomo en los últimos 24 meses.",
  },
  {
    t: "Preparamos la memoria y el plan de inversión",
    d: "El SEPE quiere saber qué vas a hacer y en qué vas a gastar el dinero. Lo escribimos contigo, con presupuestos y cifras que se sostengan.",
  },
  {
    t: "Presentas la solicitud, todavía sin darte de alta",
    d: "Es el paso que más gente hace al revés. Si ya figuras de alta como autónomo cuando lo pides, te lo deniegan.",
  },
  {
    t: "Te damos de alta en cuanto llega la resolución",
    d: "Tienes un mes para empezar la actividad. Hacemos el alta en Hacienda y en la Seguridad Social, y pedimos la tarifa plana si te corresponde.",
  },
  {
    t: "Justificamos la inversión",
    d: "Con facturas y pagos por banco a tu nombre, en el plazo que marca el SEPE. En efectivo no vale.",
  },
];

const preguntas = [
  {
    p: "¿Cuánto me pueden dar?",
    r: "Hasta el 100 % de la prestación que te queda por cobrar, si la justificas como inversión para tu actividad. El SEPE descuenta el interés legal del dinero, así que la cifra es algo menor que la suma de las mensualidades pendientes.",
  },
  {
    p: "¿Puedo usarlo para pagar la cuota de autónomos?",
    r: "Sí. Puedes pedirlo todo de una vez para la inversión, todo en abonos mensuales para pagar tus cuotas a la Seguridad Social, o una combinación de las dos cosas. Una vez empezada la actividad, no puedes pedir la modalidad que no elegiste.",
  },
  {
    p: "¿Tributa en la Renta?",
    r: "Está exento de IRPF si lo destinas a lo que pediste y mantienes la actividad cinco años. Si la dejas antes, pierdes la exención y hay que regularizarlo con intereses de demora. Lo tenemos en cuenta al planificar contigo.",
  },
  {
    p: "¿Y si quiero montar una sociedad?",
    r: "También se puede capitalizar para aportar capital a una sociedad mercantil, una cooperativa o una sociedad laboral, con requisitos propios. Te ayudamos con la sociedad y con la solicitud a la vez.",
  },
  {
    p: "¿Puedo pedirlo si ya he empezado a trabajar por mi cuenta?",
    r: "No. La solicitud tiene que ser anterior al inicio de la actividad, que cuenta desde tu alta en la Seguridad Social. Por eso conviene hablar con nosotros antes de dar ningún paso.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Capitalización del paro (pago único) para autónomos",
    provider: { "@type": "AccountingService", name: "Fiscalyx", url: site.url },
    areaServed: { "@type": "Country", name: "España" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
  },
];

export default function CapitalizarParo() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor">
            <div>
              <h1 style={{ maxWidth: "18ch" }}>Capitaliza tu paro y empieza bien desde el primer día</h1>
              <p className="entradilla">
                El pago único te adelanta la prestación que te queda para invertirla en tu negocio. Te preparamos la
                memoria, te decimos en qué orden hacer cada trámite y te damos de alta a tiempo.
              </p>
              <div className="acciones">
                <a className="boton boton-principal" href="#contacto">
                  Revisar mi caso
                </a>
                <a
                  className="enlace-sencillo"
                  href={whatsappLink("Hola, quiero capitalizar el paro para hacerme autónomo.")}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <p className="portada-condiciones">Te decimos el precio antes de empezar, y trabajamos con toda España.</p>
            </div>
            <figure className="documento documento-aviso documento-alerta">
              <div className="documento-cabeza">
                <strong>Antes de nada</strong>
                <span>El error más caro</span>
              </div>
              <p>
                No te des de alta como autónomo hasta que hayas pedido el pago único. Si ya figuras de alta cuando lo
                solicitas, <mark>el SEPE lo deniega</mark> y no hay vuelta atrás.
              </p>
              <p className="nota-ejemplo">
                Tampoco tiene derecho quien ha compatibilizado el paro con ser autónomo en los últimos 24 meses.
              </p>
            </figure>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="paro-orden">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="paro-orden">El orden en que se hace</h2>
              <p>Cinco pasos. Si uno se hace antes de tiempo, puedes perder el derecho.</p>
            </div>
            <ol className="pasos pasos-cinco">
              {orden.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seccion" aria-labelledby="paro-modalidades">
          <div className="contenedor texto-estrecho">
            <h2 id="paro-modalidades">Tres formas de cobrarlo</h2>
            <dl className="definiciones">
              <div>
                <dt>Todo de una vez</dt>
                <dd>
                  Hasta el 100 % de lo pendiente para la inversión inicial: equipos, local, vehículo, existencias o la
                  aportación a una sociedad. Tienes que justificar el gasto.
                </dd>
              </div>
              <div>
                <dt>En abonos mensuales</dt>
                <dd>
                  El SEPE te abona cada mes la cuota de autónomos hasta agotar lo pendiente. No necesitas memoria de
                  inversión.
                </dd>
              </div>
              <div>
                <dt>Las dos cosas</dt>
                <dd>Una parte para la inversión y el resto para las cuotas. Suele ser la opción más equilibrada.</dd>
              </div>
            </dl>
            <p style={{ marginTop: "1.5rem" }}>
              Elegir bien depende de cuánto necesitas invertir al principio y de si vas a tener la tarifa plana. Lo
              calculamos contigo antes de presentar nada.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="paro-incluye">
          <div className="contenedor dos-columnas">
            <div>
              <h2 id="paro-incluye">Nuestro trabajo, paso a paso</h2>
              <ul className="lista-incluye">
                <li>
                  <div>
                    <strong>Revisión de requisitos</strong>
                    <br />
                    <span>Antes de que muevas un papel, para no perder el derecho.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Memoria del proyecto y plan de inversión</strong>
                    <br />
                    <span>Con presupuestos reales y unas cifras que el SEPE pueda entender.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Alta en Hacienda y Seguridad Social</strong>
                    <br />
                    <span>Dentro del mes siguiente a la resolución, con la tarifa plana si te corresponde.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Justificación de la inversión</strong>
                    <br />
                    <span>Ordenamos tus facturas y pagos para presentarlos en plazo.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2>Y después</h2>
              <p style={{ marginTop: "1.25rem" }}>
                Si te quedas con nosotros como autónomo, seguimos con tus trimestrales y tu Renta con el mismo asesor
                que preparó tu pago único, que ya conoce tu proyecto desde el principio.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <Link href="/autonomos/">Ver el plan de autónomos</Link>
              </p>
              <p style={{ marginTop: "1rem" }}>
                ¿Vas a montar una sociedad? <Link href="/constituir-sociedad/">Te ayudamos a constituirla</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="paro-preguntas">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="paro-preguntas">Dudas sobre el pago único</h2>
            </div>
            <dl className="preguntas-abiertas">
              {preguntas.map((q) => (
                <div key={q.p}>
                  <dt>{q.p}</dt>
                  <dd>{q.r}</dd>
                </div>
              ))}
            </dl>
            <p className="nota-fuente" style={{ marginTop: "2rem" }}>
              Requisitos según la información del Servicio Público de Empleo Estatal (SEPE) sobre el pago único,
              revisada en noviembre de 2026. La exención en el IRPF está en el artículo 7.n de la Ley del IRPF.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" id="contacto" aria-labelledby="paro-contacto">
          <div className="contenedor contacto">
            <div>
              <h2 id="paro-contacto">Cuéntanos tu proyecto</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                A qué te quieres dedicar, cuánto paro te queda y si ya has hecho algún trámite. Te contestamos en 24
                horas laborables y te decimos si puedes pedirlo y cómo.
              </p>
            </div>
            <FormularioContacto temaInicial="paro" />
          </div>
        </section>
      </main>
      <Pie contacto="#contacto" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
