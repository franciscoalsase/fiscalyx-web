import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { GuiasRelacionadas } from "@/components/GuiasRelacionadas";
import { FormularioContacto } from "@/components/FormularioContacto";
import { FichaProfesional } from "@/components/FichaProfesional";
import { ExtractoInforme } from "@/components/ExtractoInforme";
import { AvisoTrimestre, ResumenAnio } from "@/components/Documentos";
import { prices, site, whatsappLink } from "@/lib/site";

const preguntas = [
  {
    p: "Ya tengo gestoría. ¿Es complicado cambiarse?",
    r: "No. Nos autorizas y pedimos la documentación a tu gestoría actual. Lo habitual es empezar a llevarte desde el trimestre siguiente, sin dejar nada a medias.",
  },
  {
    p: "¿Tengo que ir a alguna oficina?",
    r: "No. Trabajamos por WhatsApp, correo y videollamada con autónomos de toda España. Para presentar en tu nombre basta con un apoderamiento o tu certificado digital.",
  },
  {
    p: "¿Qué programa de facturación tengo que usar?",
    r: "El que ya uses, si cumple con la normativa de facturación de Hacienda. Si no tienes ninguno, te recomendamos uno sencillo y te ayudamos a configurarlo.",
  },
  {
    p: "¿Y si Hacienda me envía un requerimiento?",
    r: "Nos lo reenvías y te explicamos qué piden. Si hay que contestar por escrito o regularizar algo, te damos un presupuesto cerrado antes de empezar.",
  },
  {
    p: "¿Hay permanencia?",
    r: "No. Pagas mes a mes y puedes darte de baja cuando quieras. Te entregamos toda tu documentación.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((q) => ({
    "@type": "Question",
    name: q.p,
    acceptedAnswer: { "@type": "Answer", text: q.r },
  })),
};

export default function Inicio() {
  return (
    <>
      <Cabecera actual="/" />
      <main id="contenido">
        <section className="portada portada-inicio">
          <div className="contenedor">
            <div>
              <h1>Tu negocio y tus criptomonedas, con el mismo economista</h1>
              <p className="entradilla">
                Somos una gestoría online para autónomos y sociedades de toda España. Llevamos tus impuestos y tu
                contabilidad por una cuota fija y, si inviertes en cripto, también tu Renta, sin cambiar de asesor.
              </p>
              <div className="acciones">
                <Link className="boton boton-principal" href="/empezar/">
                  Empezar
                </Link>
                <a className="enlace-sencillo" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Escríbenos por WhatsApp
                </a>
              </div>
              <p className="portada-condiciones">
                Sin permanencia. Respuesta en 24 horas laborables. Para toda España.
              </p>
            </div>
            <AvisoTrimestre />
          </div>
        </section>

        <section className="seccion" aria-labelledby="lineas-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="lineas-titulo">Lo que llevamos</h2>
            </div>
            <ul className="carta">
              <li>
                <div>
                  <h3>Autónomos</h3>
                  <p>Trimestrales, resúmenes anuales y tu Renta, con un asesor que conoce tu actividad.</p>
                </div>
                <p className="carta-precio">
                  {prices.autonomoMes} €<small>al mes + IVA</small>
                </p>
                <Link className="carta-enlace" href="/autonomos/">Ver el servicio</Link>
              </li>
              <li>
                <div>
                  <h3>Sociedades</h3>
                  <p>Contabilidad, impuestos, Impuesto sobre Sociedades y cuentas anuales de tu SL.</p>
                </div>
                <p className="carta-precio">
                  <span>desde </span>{prices.sociedadMes} €<small>al mes + IVA</small>
                </p>
                <Link className="carta-enlace" href="/sociedades/">Ver el servicio</Link>
              </li>
              <li>
                <div>
                  <h3>Criptomonedas</h3>
                  <p>Renta con cripto, Modelo 721 y regularizaciones, operación por operación.</p>
                </div>
                <p className="carta-precio">
                  <span>desde </span>{prices.cripto[0].tiers[0].price}
                </p>
                <Link className="carta-enlace" href="/criptomonedas/">Ver el servicio</Link>
              </li>
            </ul>
            <p className="carta-nota">
              Nóminas a {prices.nominaMes} € al mes por trabajador. Requerimientos e inspecciones, con presupuesto
              cerrado antes de empezar. <Link href="/precios/">Todos los precios</Link>
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="recibes-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="recibes-titulo">Sabes lo que vas a pagar antes de pagarlo</h2>
              <p>
                Antes de cada trimestre te mandamos las cifras y una sugerencia para pagar menos, si la hay. Al cerrar
                el año, un resumen de una página. Y si tienes cripto, cada operación justificada.
              </p>
            </div>
            <div className="documentos">
              <ResumenAnio />
              <ExtractoInforme />
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="equipo-titulo">
          <div className="contenedor equipo equipo-ficha">
            <FichaProfesional />
            <div className="carta-texto">
              <h2 id="equipo-titulo">Por qué existe Fiscalyx</h2>
              <p>
                Hay gestorías online que llevan bien tu negocio pero no saben qué hacer con un cambio de ETH por SOL.
                Y hay asesorías de cripto que hacen tu Renta pero no te llevan el IVA. Si eres autónomo y además
                inviertes, acabas con dos asesores que no se hablan.
              </p>
              <p>
                Nosotros somos economistas colegiados y hacemos las dos cosas. Trabajamos con un número limitado de
                clientes por asesor, para conocer cada caso y contestar rápido, que es justo lo que suele perderse en
                una gestoría online grande.
              </p>
              <p className="firma-carta">
                {site.owner}
                <span>Economista colegiado n.º {site.colegiado}, director de Fiscalyx</span>
              </p>
              <p>
                <Link href="/quienes-somos/">Cómo trabajamos</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="seccion seccion-tinta" aria-labelledby="cripto-titulo">
          <div className="contenedor">
            <div className="aviso-cripto">
              <div>
                <h2 id="cripto-titulo">¿Además tienes criptomonedas?</h2>
                <p>
                  Desde 2026 los exchanges europeos registran tus operaciones para Hacienda. Preparamos tu Renta con
                  cripto, el Modelo 721 y las regularizaciones, con precio cerrado antes de empezar.
                </p>
              </div>
              <Link className="boton boton-secundario" href="/criptomonedas/">
                Ver el servicio de criptomonedas
              </Link>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="herramientas-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="herramientas-titulo">Haz tus números</h2>
              <p>Gratis y sin registrarte.</p>
            </div>
            <ul className="lista-guias lista-guias-cuatro">
              <li>
                <h3>
                  <Link href="/calculadora-autonomos/">Cuánto pagarás este trimestre</Link>
                </h3>
                <p>El IVA y el IRPF de tu próximo 303 y 130.</p>
              </li>
              <li>
                <h3>
                  <Link href="/calculadora-cuota-autonomos/">Tu cuota de autónomos</Link>
                </h3>
                <p>Tu tramo según lo que ganas de verdad.</p>
              </li>
              <li>
                <h3>
                  <Link href="/calculadora-autonomo-o-sociedad/">¿Te compensa una sociedad?</Link>
                </h3>
                <p>IRPF frente a Impuesto sobre Sociedades.</p>
              </li>
              <li>
                <h3>
                  <Link href="/guias/calendario-fiscal-autonomos-2027/">Los plazos de 2027 en tu móvil</Link>
                </h3>
                <p>Con aviso cinco días antes de cada uno.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="preguntas-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="preguntas-titulo">Preguntas frecuentes</h2>
            </div>
            <div className="preguntas">
              {preguntas.map((q) => (
                <details key={q.p}>
                  <summary>{q.p}</summary>
                  <p>{q.r}</p>
                </details>
              ))}
            </div>
            <GuiasRelacionadas slugs={["gastos-deducibles-autonomos", "declarar-criptomonedas-renta", "autonomo-o-sociedad"]} />
          </div>
        </section>

        <section className="seccion" id="contacto" aria-labelledby="contacto-titulo">
          <div className="contenedor contacto">
            <div>
              <h2 id="contacto-titulo">Cuéntanos tu caso</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                Te contestamos en 24 horas laborables. La primera conversación es gratuita y sin compromiso.
              </p>
              <ul className="vias">
                <li>
                  <span className="via-nombre">WhatsApp</span>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="via-nombre">Correo</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <span className="via-nombre">Llamada de 15 minutos</span>
                  <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                    Reservar hora
                  </a>
                </li>
                <li>
                  <span className="via-nombre">Horario</span>
                  <span>{site.horario}</span>
                </li>
              </ul>
            </div>
            <FormularioContacto />
          </div>
        </section>
      </main>
      <Pie contacto="/empezar/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
