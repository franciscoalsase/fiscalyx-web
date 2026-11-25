import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { GuiasRelacionadas } from "@/components/GuiasRelacionadas";
import { ProximoPlazo } from "@/components/ProximoPlazo";
import { FormularioContacto } from "@/components/FormularioContacto";
import { FichaProfesional } from "@/components/FichaProfesional";
import { Check } from "@/components/Iconos";
import { LineaAnio, type MesAnio } from "@/components/LineaAnio";
import { prices, site, whatsappLink } from "@/lib/site";

const anio: MesAnio[] = [
  { mes: "Ene", hito: { t: "4.º trimestre", d: "303, 130 y resumen anual del IVA" } },
  { mes: "Feb" },
  { mes: "Mar" },
  { mes: "Abr", hito: { t: "1.er trimestre", d: "303 y 130. Empieza la campaña de la Renta" } },
  { mes: "May" },
  { mes: "Jun", hito: { t: "Renta", d: "Cierra la campaña a finales de mes", renta: true } },
  { mes: "Jul", hito: { t: "2.º trimestre", d: "303 y 130" } },
  { mes: "Ago" },
  { mes: "Sep" },
  { mes: "Oct", hito: { t: "3.er trimestre", d: "303 y 130" } },
  { mes: "Nov" },
  { mes: "Dic" },
];

const impuestos = [
  { t: "IVA e IRPF de cada trimestre", d: "Modelos 303 y 130, y 111 o 115 si tienes trabajadores o alquilas un local." },
  { t: "Resúmenes anuales", d: "Modelos 390, 190, 180 y 347 cuando te correspondan." },
  { t: "Tu declaración de la Renta", d: "Con todo el año ya revisado, sin prisas de última hora." },
  { t: "Alta o cambio de gestoría", d: "Te damos de alta en Hacienda y la Seguridad Social, o recogemos tu documentación de la gestoría anterior." },
];

const trato = [
  { t: "Un asesor asignado", d: "Siempre la misma persona, que conoce tu actividad y tus números." },
  { t: "WhatsApp directo", d: "Respuesta en 24 horas laborables, sin centralitas ni tickets." },
  { t: "Una llamada antes de cada trimestre", d: "Quince minutos para revisar gastos y saber cuánto vas a pagar antes de pagarlo." },
  { t: "Cartas de Hacienda", d: "Nos la reenvías y te explicamos qué significa y qué hay que hacer." },
];

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
    p: "¿Lleváis también sociedades?",
    r: `Sí. Llevamos la contabilidad, los impuestos, el Impuesto sobre Sociedades y las cuentas anuales de sociedades limitadas, desde ${prices.sociedadMes} € al mes.`,
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

function ListaConCheck({ items }: { items: { t: string; d: string }[] }) {
  return (
    <ul className="lista-incluye">
      {items.map((i) => (
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
  );
}

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
        <section className="portada">
          <div className="contenedor">
            <div>
              <h1>Tu negocio y tus criptomonedas, con el mismo economista.</h1>
              <p className="entradilla">
                Somos una gestoría online para autónomos y sociedades de toda España. Te llevamos los impuestos y la
                contabilidad con una cuota fija, y si inviertes en cripto, también tu Renta, sin cambiar de asesor.
              </p>
              <div className="acciones">
                <a className="boton boton-principal" href="#contacto">
                  Pedir presupuesto
                </a>
                <a className="enlace-sencillo" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Escríbenos por WhatsApp
                </a>
              </div>
              <ul className="garantias">
                <li>
                  <Check /> Sin permanencia
                </li>
                <li>
                  <Check /> Respuesta en 24 h laborables
                </li>
                <li>
                  <Check /> Para toda España
                </li>
              </ul>
            </div>
            <ProximoPlazo />
          </div>
        </section>

        <section className="seccion" aria-labelledby="lineas-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="lineas-titulo">Tres servicios, un mismo equipo.</h2>
            </div>
            <ul className="carta">
              <li>
                <div>
                  <h3>Autónomos</h3>
                  <p>Trimestrales, anuales y Renta, con un asesor que conoce tu actividad.</p>
                </div>
                <p className="carta-precio">
                  {prices.autonomoMes} €<small>al mes + IVA</small>
                </p>
                <a className="carta-enlace" href="#incluye">Qué incluye</a>
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
          </div>
        </section>


        <section className="seccion seccion-banda" aria-labelledby="porque-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="porque-titulo">Lo que nos diferencia.</h2>
              <p>
                Hay gestorías online que no entienden de criptomonedas y asesorías cripto que no llevan tu negocio.
                Nosotros hacemos las dos cosas, con la misma persona.
              </p>
            </div>
            <div className="tabla-scroll">
              <table className="tabla comparar">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="visualmente-oculto">Qué comparamos</span>
                    </th>
                    <th scope="col">Gestoría online habitual</th>
                    <th scope="col">Asesoría solo de cripto</th>
                    <th scope="col" className="comparar-nos">Fiscalyx</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Quién te atiende</th>
                    <td>Un gestor, a menudo por chat; las llamadas, solo en los planes altos</td>
                    <td>Un especialista en cripto</td>
                    <td className="comparar-nos">Un economista colegiado, por WhatsApp y por teléfono</td>
                  </tr>
                  <tr>
                    <th scope="row">Autónomos y sociedades</th>
                    <td>Sí</td>
                    <td>Casi nunca</td>
                    <td className="comparar-nos">Sí</td>
                  </tr>
                  <tr>
                    <th scope="row">Criptomonedas</th>
                    <td>Pocas veces, y sin servicio especializado</td>
                    <td>Sí, pero solo eso</td>
                    <td className="comparar-nos">Sí, con el mismo asesor que lleva tu negocio</td>
                  </tr>
                  <tr>
                    <th scope="row">Declaración de la Renta</th>
                    <td>Incluida en unos planes y aparte en otros</td>
                    <td>Es su servicio principal</td>
                    <td className="comparar-nos">Incluida en la cuota del autónomo</td>
                  </tr>
                  <tr>
                    <th scope="row">Precio</th>
                    <td>De 20 a 65 € al mes, con extras según el plan</td>
                    <td>De 75 a 700 € por campaña</td>
                    <td className="comparar-nos">Publicado y cerrado antes de empezar</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="nota-fuente">
              Comparación con las tarifas y condiciones publicadas por gestorías online y asesorías cripto en noviembre de
              2026.
            </p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="anio-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="anio-titulo">Un año de impuestos, sin tener que acordarte de nada.</h2>
              <p>
                Estos son los plazos de un autónomo en estimación directa. Te avisamos antes de cada uno y lo presentamos
                nosotros.
              </p>
            </div>
            <LineaAnio
              meses={anio}
              leyenda={["Trimestres: del 1 al 20 del mes (en enero, hasta el 30)", "Declaración de la Renta"]}
            />
            <p style={{ marginTop: "1.25rem", fontSize: "1rem" }}>
              ¿Tienes una sociedad? <Link href="/sociedades/#calendario">Mira su calendario</Link>.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" id="incluye" aria-labelledby="incluye-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="incluye-titulo">Si eres autónomo, todo dentro de la cuota.</h2>
              <p>Sin extras por cada modelo ni sorpresas en abril. Y una persona que te atiende de verdad.</p>
            </div>
            <div className="dos-columnas">
              <div>
                <h3>Tus impuestos</h3>
                <ListaConCheck items={impuestos} />
              </div>
              <div>
                <h3>Cómo te atendemos</h3>
                <ListaConCheck items={trato} />
              </div>
            </div>
          </div>
        </section>

        <section className="seccion seccion-verde" id="precio" aria-labelledby="precio-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="precio-titulo">Un precio, sin letra pequeña.</h2>
              <p className="precio-nota">Cuota mensual fija, sin permanencia. Te devolvemos toda tu documentación si te vas.</p>
            </div>
            <div className="planes">
              <div className="tarjeta-blanca plan">
                <h3>Autónomo</h3>
                <p className="plan-precio">
                  <span className="cifra-desde">cuota fija</span>
                  {prices.autonomoMes} €<small>al mes + IVA</small>
                </p>
                <ul className="plan-lista">
                  <li><Check /> Trimestrales y resúmenes anuales</li>
                  <li><Check /> Declaración de la Renta del titular</li>
                  <li><Check /> Alta en Hacienda y Seguridad Social</li>
                  <li><Check /> Asesor asignado, WhatsApp y llamada trimestral</li>
                </ul>
                <a className="boton boton-principal" href="#contacto">Pedir presupuesto</a>
              </div>
              <div className="tarjeta-blanca plan">
                <h3>Sociedad limitada</h3>
                <p className="plan-precio">
                  <span className="cifra-desde">desde</span>
                  {prices.sociedadMes} €<small>al mes + IVA</small>
                </p>
                <ul className="plan-lista">
                  <li><Check /> Contabilidad, trimestrales y resúmenes anuales</li>
                  <li><Check /> Impuesto sobre Sociedades</li>
                  <li><Check /> Cuentas anuales y depósito en el Registro</li>
                  <li><Check /> Asesor asignado, WhatsApp y llamada trimestral</li>
                </ul>
                <Link className="boton boton-secundario" href="/sociedades/">Ver el plan de sociedades</Link>
              </div>
            </div>
            <p className="planes-nota">
              Aparte: nóminas a {prices.nominaMes} € al mes por trabajador, y requerimientos o regularizaciones con
              presupuesto cerrado antes de empezar.
            </p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="calc-titulo">
          <div className="contenedor">
            <div className="banda-calculadora">
              <div>
                <h2 id="calc-titulo">¿Cuánto pagarás este trimestre?</h2>
                <p>Mete tus ingresos y gastos y te calculamos el IVA y el IRPF en un minuto. Gratis y sin registrarte.</p>
              </div>
              <Link className="boton boton-principal" href="/calculadora-autonomos/">
                Abrir la calculadora
              </Link>
            </div>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="equipo-titulo">
          <div className="contenedor equipo equipo-ficha">
            <FichaProfesional />
            <div className="equipo-texto">
              <h2 id="equipo-titulo">Quién está detrás.</h2>
              <p style={{ marginTop: "1.25rem" }}>
                Fiscalyx está dirigida por {site.owner}, economista colegiado. El equipo viene del trabajo diario en
                asesoría fiscal y contable, con autónomos y pequeñas empresas de todo tipo de actividad.
              </p>
              <p>
                Trabajamos con un número limitado de clientes por asesor. Así es posible conocer cada caso y responder
                rápido, que es justo lo que suele perderse en una gestoría online grande.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <Link href="/quienes-somos/">Conoce cómo trabajamos</Link>
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

        <section className="seccion" aria-labelledby="preguntas-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="preguntas-titulo">Preguntas frecuentes.</h2>
            </div>
            <div className="preguntas">
              {preguntas.map((q) => (
                <details key={q.p}>
                  <summary>{q.p}</summary>
                  <p>{q.r}</p>
                </details>
              ))}
            </div>
            <GuiasRelacionadas slugs={["gastos-deducibles-autonomos", "calendario-fiscal-autonomos-2027", "autonomo-o-sociedad"]} />
          </div>
        </section>

        <section className="seccion seccion-banda" id="contacto" aria-labelledby="contacto-titulo">
          <div className="contenedor contacto">
            <div>
              <h2 id="contacto-titulo">Cuéntanos tu caso.</h2>
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
      <Pie contacto="#contacto" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
