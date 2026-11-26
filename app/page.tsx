import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { Garantia } from "@/components/Garantia";
import { GuiasRelacionadas } from "@/components/GuiasRelacionadas";
import { FormularioContacto } from "@/components/FormularioContacto";
import { FichaProfesional } from "@/components/FichaProfesional";
import { AvisoTrimestre, ResumenAnio } from "@/components/Documentos";
import { MapaIrpf } from "@/components/MapaIrpf";
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
    r: "Nos lo reenvías y te explicamos qué piden. Si hay que contestar por escrito o regularizar algo, te decimos el precio por escrito antes de empezar.",
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
            <div className="portada-texto">
              <h1>Tu gestoría online, llevada por economistas colegiados</h1>
              <p className="entradilla">
                Llevamos los impuestos y la contabilidad de autónomos y sociedades de toda España por una cuota fija,
                con un asesor asignado que te contesta en 24 horas laborables. Si inviertes en cripto, también tu Renta.
              </p>
            </div>
            <AvisoTrimestre />
            <div className="portada-acciones">
              <div className="acciones">
                <Link className="boton boton-principal" href="/empezar/">
                  Empezar<span className="visualmente-oculto"> con Fiscalyx</span>
                </Link>
                <a className="enlace-sencillo" href={whatsappLink()} target="_blank" rel="nofollow noopener noreferrer">
                  Escríbenos por WhatsApp
                </a>
              </div>
              <p className="portada-condiciones">Pagas mes a mes y te puedes ir cuando quieras.</p>
            </div>
          </div>
          <div className="contenedor">
            <ul className="confianza" aria-label="Por qué fiarte de nosotros">
              <li>
                <strong>Más de 25 años</strong>
                <span>llevando impuestos de autónomos y empresas</span>
              </li>
              <li>
                <strong>Colaboradores sociales</strong>
                <span>de la Agencia Tributaria y de varias haciendas autonómicas</span>
              </li>
              <li>
                <strong>Autorizados RED</strong>
                <span>para tus altas y cotizaciones en la Seguridad Social</span>
              </li>
              <li>
                <strong>Garantía</strong>
                <span>si un error nuestro te cuesta un recargo, lo pagamos</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="trimestre-titulo">
          <div className="contenedor trimestre">
            <div>
              <h2 id="trimestre-titulo">Un trimestre con nosotros</h2>
              <p className="trimestre-intro">
                Con el ejemplo de arriba: una diseñadora web en estimación directa, tercer trimestre de 2027. Puedes{" "}
                <a href="/ejemplos/aviso-trimestral-ejemplo.pdf">descargar el aviso completo en PDF</a>, tal como lo
                recibiría, con datos ficticios.
              </p>
              <ol className="cronologia">
                <li>
                  <span className="cronologia-cuando">Julio a septiembre</span>
                  <div>
                    <strong>Nos reenvías facturas y tickets cuando los tengas</strong>
                    <p>Por WhatsApp o por correo, una foto o el PDF. No hace falta ordenarlos ni esperar a fin de mes.</p>
                  </div>
                </li>
                <li>
                  <span className="cronologia-cuando">Primeros de octubre</span>
                  <div>
                    <strong>Cerramos tus números</strong>
                    <p>Cuadramos ingresos y gastos, y te pedimos lo que falte con nombre y fecha, no un «mándame todo».</p>
                  </div>
                </li>
                <li>
                  <span className="cronologia-cuando">Antes del día 15</span>
                  <div>
                    <strong>Te mandamos el aviso con los importes</strong>
                    <p>
                      Lo que vas a pagar de IVA y de IRPF, y si hay algo que lo baje legalmente, como esa factura de la
                      impresora que aún no nos habías pasado.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="cronologia-cuando">Hasta el 20 de octubre</span>
                  <div>
                    <strong>Presentamos con tu visto bueno</strong>
                    <p>Y te mandamos el justificante de Hacienda, con su código seguro de verificación para que lo compruebes.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="trimestre-anio">
              <ResumenAnio />
              <p>
                Al cerrar el año hacemos lo mismo en una página: lo que has ganado, lo que ya has pagado y cómo saldrá tu
                Renta, que también presentamos nosotros.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="lineas-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="lineas-titulo">Servicios y precios</h2>
            </div>
            <ul className="tarifas">
              <li className="tarifa tarifa-destacada">
                <h3>Autónomos</h3>
                <p className="tarifa-precio">
                  {prices.autonomoMes} €<small>al mes + IVA</small>
                </p>
                <p>Trimestrales, resúmenes anuales y tu Renta, con un asesor que conoce tu actividad.</p>
                <p className="tarifa-incluye">La Renta va dentro de la cuota; en muchas gestorías se cobra aparte.</p>
                <Link className="tarifa-enlace" href="/autonomos/">Ver el servicio de autónomos</Link>
              </li>
              <li className="tarifa">
                <h3>Sociedades</h3>
                <p className="tarifa-precio">
                  <span>desde </span>{prices.sociedadMes} €<small>al mes + IVA</small>
                </p>
                <p>Contabilidad, impuestos, Impuesto sobre Sociedades y cuentas anuales de tu SL.</p>
                <p className="tarifa-incluye">En noviembre te decimos cuánto saldrá el Impuesto sobre Sociedades.</p>
                <Link className="tarifa-enlace" href="/sociedades/">Ver el servicio de sociedades</Link>
              </li>
              <li className="tarifa">
                <h3>Criptomonedas</h3>
                <p className="tarifa-precio">
                  <span>desde </span>{prices.cripto[0].tiers[0].price}<small>Renta con hasta 200 operaciones</small>
                </p>
                <p>Renta con cripto, Modelo 721 y regularizaciones, operación por operación.</p>
                <p className="tarifa-incluye">Con el informe que justifica cada operación si Hacienda pregunta.</p>
                <Link className="tarifa-enlace" href="/criptomonedas/">Ver el servicio de cripto</Link>
              </li>
            </ul>
            <p className="carta-nota">
              Nóminas a {prices.nominaMes} € al mes por trabajador. También te ayudamos a{" "}
              <Link href="/capitalizar-paro/">capitalizar el paro</Link> y con la parte económica de las{" "}
              <Link href="/licitaciones-publicas/">licitaciones públicas</Link>. <Link href="/precios/">Todos los precios</Link>
            </p>
            <Garantia clase="garantia-destacada" />
            <p className="carta-nota">
              Antes de escribirnos puedes calcular{" "}
              <Link href="/calculadora-autonomos/">cuánto pagarás este trimestre</Link>,{" "}
              <Link href="/calculadora-cuota-autonomos/">tu cuota de autónomos</Link>,{" "}
              <Link href="/calculadora-autonomo-o-sociedad/">si te compensa una sociedad</Link> o{" "}
              <Link href="/calculadora-criptomonedas/">tus ganancias con cripto por FIFO</Link>, y añadir{" "}
              <Link href="/guias/calendario-fiscal-autonomos-2027/">los plazos de 2027 a tu calendario</Link>. Sin
              registrarte.
            </p>
            <div className="donde">
              <MapaIrpf compacto />
              <div>
                <h3>Para casi toda España</h3>
                <p>
                  Trabajamos en remoto con autónomos y sociedades de todas las comunidades de régimen común. Lo que cambia
                  según dónde vivas es la mitad de tu IRPF: el tipo máximo va del 45&nbsp;% de Madrid al 53,85&nbsp;% de la
                  Comunitat Valenciana, y cada comunidad tiene sus propias deducciones.
                </p>
                <p>
                  <Link href="/guias/irpf-por-comunidades-2026/">Compara tu comunidad</Link>
                </p>
              </div>
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
                Nosotros somos economistas colegiados, con más de 25 años llevando los impuestos de autónomos y empresas, y hacemos las dos cosas. Cada cliente tiene un asesor asignado,
                de modo que quien te contesta es siempre la misma persona y no tienes que explicar tu caso dos veces.
              </p>
              <p className="firma-carta">{site.owner}</p>
              <p className="posdata">
                <span>P. D.</span> Desde 2026 los exchanges europeos informan a Hacienda de tus operaciones. Si tienes
                cripto sin declarar de otros años, <Link href="/criptomonedas/">mira cómo lo regularizamos</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="preguntas-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="preguntas-titulo">Preguntas antes de empezar</h2>
            </div>
            <dl className="preguntas-abiertas">
              {preguntas.map((q) => (
                <div key={q.p}>
                  <dt>{q.p}</dt>
                  <dd>{q.r}</dd>
                </div>
              ))}
            </dl>
            <GuiasRelacionadas slugs={["gastos-deducibles-autonomos", "renta-autonomos", "requerimiento-hacienda", "declarar-criptomonedas-renta", "autonomo-o-sociedad"]} />
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
                  <span className="via-nombre">Teléfono y WhatsApp</span>
                  <a href={`tel:+${site.phoneIntl}`}>{site.phoneDisplay}</a>
                  <span className="via-extra">
                    o <a href={whatsappLink()} target="_blank" rel="nofollow noopener noreferrer">escríbenos por WhatsApp</a>
                  </span>
                </li>
                <li>
                  <span className="via-nombre">Correo</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
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
