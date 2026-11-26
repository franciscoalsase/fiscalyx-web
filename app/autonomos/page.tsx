import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { Garantia } from "@/components/Garantia";
import { GuiasRelacionadas } from "@/components/GuiasRelacionadas";
import { FormularioContacto } from "@/components/FormularioContacto";
import { ProximoPlazo } from "@/components/ProximoPlazo";
import { Check } from "@/components/Iconos";
import { prices, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gestoría online para autónomos, Renta incluida",
  description: `Trimestrales, resúmenes anuales y tu Renta por ${prices.autonomoMes} € al mes, con un economista colegiado asignado y sin permanencia.`,
  alternates: { canonical: "/autonomos/" },
};

const modelos = [
  { t: "IVA trimestral (modelo 303)", d: "Lo preparamos con tus facturas, te enseñamos la cifra antes de presentarlo y lo presentamos en plazo." },
  { t: "Pago fraccionado del IRPF (modelo 130)", d: "Si te toca. Si más del 70 % de tus ingresos ya llevan retención, no lo presentas y te lo decimos." },
  { t: "Retenciones (modelos 111 y 115)", d: "Si tienes trabajadores, pagas a otros profesionales o alquilas un local." },
  { t: "Resúmenes anuales (390, 190, 180 y 347)", d: "En enero y febrero, con los datos de todo el año ya cuadrados." },
  { t: "Tu declaración de la Renta", d: "La del titular va en la cuota. La preparamos con el año revisado, no con el borrador." },
  { t: "Alta, cambios y baja", d: "Alta en Hacienda (modelo 036) y en la Seguridad Social, cambios de actividad o de domicilio, y la baja si llega el día." },
];

const trato = [
  { t: "Revisamos tu cuota de autónomo", d: "Con tu rendimiento real, para que no pagues de más ni te llegue una regularización de golpe." },
  { t: "Una llamada antes de cada trimestre", d: "Quince minutos para revisar gastos y saber cuánto vas a pagar antes de pagarlo." },
  { t: "WhatsApp con tu asesor", d: "La misma persona todo el año. Respuesta en 24 horas laborables." },
  { t: "Cartas de Hacienda explicadas", d: "Nos reenvías la notificación y te decimos qué piden y qué hay que hacer." },
];

const perfiles = [
  {
    t: "Si acabas de empezar",
    d: "Te damos de alta, pedimos la tarifa plana si te corresponde y te explicamos qué facturar y qué guardar desde el primer día. Si cobras el paro, te ayudamos a capitalizarlo antes del alta.",
  },
  {
    t: "Si trabajas para empresas",
    d: "Diseño, consultoría, programación, formación. Facturas con retención, el 130 a veces no te toca y los gastos deducibles marcan la diferencia.",
  },
  {
    t: "Si tienes un negocio con local",
    d: "Comercio, hostelería o taller: alquiler con retención, trabajadores, IVA de compras y ventas, y en su caso recargo de equivalencia.",
  },
  {
    t: "Si además inviertes en cripto",
    d: "Tu Renta con criptomonedas la hace el mismo asesor que lleva tu actividad, con su propio presupuesto.",
  },
];

const preguntas = [
  {
    p: `¿Qué incluye exactamente la cuota de ${prices.autonomoMes} €?`,
    r: "Los modelos trimestrales (303, 130, 111 y 115 si te tocan), los resúmenes anuales (390, 190, 180 y 347), tu declaración de la Renta, el alta o los cambios en Hacienda y la Seguridad Social, y la atención de tu asesor por WhatsApp y teléfono. Aparte van las nóminas de tus trabajadores y la respuesta a requerimientos, siempre con precio cerrado antes.",
  },
  {
    p: "¿Tengo que estar en Alicante o en Murcia?",
    r: "No. Todo se hace en remoto, por WhatsApp, teléfono, correo y videollamada, y atendemos a toda España salvo el País Vasco y Navarra, que tienen haciendas forales propias, y Canarias, Ceuta y Melilla, que tienen otro sistema de impuestos indirectos. Para presentar en tu nombre basta con que nos autorices ante Hacienda y la Seguridad Social, y te guiamos para hacerlo.",
  },
  {
    p: "Me he retrasado con un trimestre. ¿Qué hago?",
    r: "Presentarlo cuanto antes, sin esperar a que Hacienda te escriba. Si lo presentas por tu cuenta antes de un requerimiento, no hay sanción: hay un recargo del 1 % más otro 1 % por cada mes completo de retraso. A partir de doce meses, el recargo es del 15 % más intereses. Lo revisamos contigo y lo presentamos.",
  },
  {
    p: "¿Me ayudáis a elegir la base de cotización?",
    r: "Sí. Desde 2023 la cuota depende de tus rendimientos netos, y puedes cambiar de base hasta seis veces al año. Cada trimestre comparamos tu base con lo que vas ganando, para que la regularización de la Seguridad Social no te pille por sorpresa.",
  },
  {
    p: "¿Qué programa de facturación tengo que usar?",
    r: "El que ya uses, si cumple la normativa. Si no tienes ninguno, te recomendamos uno sencillo y te ayudamos a configurarlo. Lo importante es que nos llegue cada trimestre sin que tengas que pensar en ello.",
  },
  {
    p: "¿Y la Renta de mi pareja?",
    r: "La del titular va en la cuota. Si queréis que hagamos también la de tu pareja, o la conjunta, te damos el precio por adelantado.",
  },
  {
    p: "¿Hay permanencia?",
    r: "No. Pagas mes a mes y puedes irte cuando quieras. Te entregamos toda tu documentación.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gestoría online para autónomos",
    serviceType: "Asesoría fiscal y contable para autónomos",
    provider: { "@type": "AccountingService", name: "Fiscalyx", url: site.url },
    areaServed: { "@type": "Country", name: "España" },
    offers: {
      "@type": "Offer",
      price: String(prices.autonomoMes),
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(prices.autonomoMes),
        priceCurrency: "EUR",
        unitText: "MONTH",
        valueAddedTaxIncluded: false,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site.url + "/" },
      { "@type": "ListItem", position: 2, name: "Autónomos", item: site.url + "/autonomos/" },
    ],
  },
];

function Lista({ items }: { items: { t: string; d: string }[] }) {
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

export default function Autonomos() {
  return (
    <>
      <Cabecera actual="/autonomos/" />
      <main id="contenido">
        <section className="portada portada-oscura">
          <div className="contenedor">
            <div>
              <h1 style={{ maxWidth: "16ch" }}>Tus impuestos de autónomo, presentados y explicados</h1>
              <p className="entradilla">
                Trimestrales, resúmenes anuales y tu declaración de la Renta por {prices.autonomoMes} € al mes. Con un
                economista colegiado que conoce tu actividad y te dice cuánto vas a pagar antes de pagarlo.
              </p>
              <div className="acciones">
                <Link className="boton boton-principal" href="/empezar/?plan=autonomo">
                  Empezar<span className="visualmente-oculto"> como autónomo</span>
                </Link>
                <a
                  className="enlace-sencillo"
                  href={whatsappLink("Hola, soy autónomo y quería información.")}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <p className="portada-condiciones">La Renta va dentro de la cuota, no hay permanencia y trabajamos con autónomos de toda España.</p>
            </div>
            <ProximoPlazo />
          </div>
        </section>

        <section className="seccion seccion-banda" id="incluye" aria-labelledby="incluye-aut">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="incluye-aut">Todo lo que presenta un autónomo, dentro de la cuota</h2>
              <p>Sin un precio por cada modelo ni una factura aparte en abril por la Renta.</p>
            </div>
            <div className="dos-columnas">
              <div>
                <h3>Modelos que presentamos</h3>
                <Lista items={modelos} />
                <p className="ayuda-campo" style={{ marginTop: "1rem" }}>
                  Cada modelo, explicado: <Link href="/guias/modelo-303-iva-trimestral/">el 303</Link>,{" "}
                  <Link href="/guias/modelo-130-retenciones/">el 130 y las retenciones</Link> y{" "}
                  <Link href="/guias/modelo-347/">el 347</Link>.
                </p>
              </div>
              <div>
                <h3>Además de los modelos</h3>
                <Lista items={trato} />
              </div>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="comparar-aut">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="comparar-aut">Incluido aquí, cobrado aparte en otras gestorías</h2>
              <p>
                Las cuotas bajas suelen dejar fuera la Renta, las llamadas o la atención de una persona concreta. Aquí
                está lo que entra en la nuestra.
              </p>
            </div>
            <div className="tabla-scroll">
              <table className="tabla comparar">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="visualmente-oculto">Concepto</span>
                    </th>
                    <th scope="col">Gestoría online habitual</th>
                    <th scope="col" className="comparar-nos">Fiscalyx</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Trimestrales y resúmenes anuales</th>
                    <td>En la cuota</td>
                    <td className="comparar-nos">En la cuota</td>
                  </tr>
                  <tr>
                    <th scope="row">Declaración de la Renta</th>
                    <td>Incluida en unos planes y aparte en otros</td>
                    <td className="comparar-nos">En la cuota</td>
                  </tr>
                  <tr>
                    <th scope="row">Llamadas con tu asesor</th>
                    <td>Solo en los planes altos, o por chat</td>
                    <td className="comparar-nos">Una antes de cada trimestre y cuando la necesites</td>
                  </tr>
                  <tr>
                    <th scope="row">Quién te atiende</th>
                    <td>Depende del plan</td>
                    <td className="comparar-nos">Un economista colegiado asignado</td>
                  </tr>
                  <tr>
                    <th scope="row">Precio</th>
                    <td>De 20 a 65 € al mes, según lo que incluya</td>
                    <td className="comparar-nos">{prices.autonomoMes} € al mes, con todo lo anterior</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="nota-fuente">
              Comparación con las tarifas y condiciones publicadas por gestorías online para autónomos en noviembre de
              2026.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="perfiles-aut">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="perfiles-aut">Autónomos de todo tipo</h2>
              <p>Lo que cambia de un caso a otro son los modelos que te tocan y los gastos que puedes deducir.</p>
            </div>
            <ul className="lista-incluye lista-incluye-doble">
              {perfiles.map((i) => (
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

        <section className="seccion" aria-labelledby="empezar-aut">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="empezar-aut">Cómo empezamos</h2>
            </div>
            <ol className="cronologia cronologia-ancha">
              <li>
                <span className="cronologia-cuando">Hoy</span>
                <div>
                  <strong>Nos cuentas tu caso</strong>
                  <p>En el formulario de alta o por WhatsApp. Son dos minutos.</p>
                </div>
              </li>
              <li>
                <span className="cronologia-cuando">En 24 horas laborables</span>
                <div>
                  <strong>Te llamamos</strong>
                  <p>Para conocer tu actividad y confirmarte la cuota por escrito.</p>
                </div>
              </li>
              <li>
                <span className="cronologia-cuando">Cuando aceptas</span>
                <div>
                  <strong>Nos autorizas ante Hacienda y la Seguridad Social</strong>
                  <p>Te guiamos paso a paso. Si vienes de otra gestoría, le pedimos nosotros tu documentación.</p>
                </div>
              </li>
              <li>
                <span className="cronologia-cuando">Desde el siguiente plazo</span>
                <div>
                  <strong>Llevamos tus impuestos</strong>
                  <p>Con el aviso de importes antes de cada trimestre y tu Renta en primavera.</p>
                </div>
              </li>
            </ol>
            <p style={{ marginTop: "2rem" }}>
              ¿Ya tienes gestoría? Te explicamos <Link href="/cambiar-de-gestoria/">cómo cambiarte sin dejar nada a medias</Link>.
              ¿Cobras el paro? <Link href="/capitalizar-paro/">Puedes capitalizarlo para empezar</Link>.
            </p>
            <p className="carta-nota">
              Antes de escribirnos puedes calcular{" "}
              <Link href="/calculadora-autonomos/">cuánto pagarás este trimestre</Link>,{" "}
              <Link href="/calculadora-cuota-autonomos/">tu cuota de autónomos</Link> o{" "}
              <Link href="/calculadora-autonomo-o-sociedad/">si te compensa una sociedad</Link>, y añadir{" "}
              <Link href="/guias/calendario-fiscal-autonomos-2027/">los plazos de 2027 a tu calendario</Link>.
            </p>
          </div>
        </section>

        <section className="seccion seccion-verde" aria-labelledby="precio-aut">
          <div className="contenedor precio">
            <div>
              <h2 id="precio-aut">Una cuota, sin letra pequeña</h2>
              <p className="cifra" aria-label={`${prices.autonomoMes} euros al mes más IVA`}>
                {prices.autonomoMes} €<small>al mes + IVA</small>
              </p>
              <p className="precio-nota">Sin permanencia. Si te vas, te entregamos toda tu documentación.</p>
              <Garantia clase="garantia-destacada" />
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="boton boton-claro" href="/empezar/?plan=autonomo">
                  Empezar con este plan
                </Link>
              </p>
            </div>
            <div className="tarjeta-blanca">
              <table className="tabla">
                <caption>Qué entra y qué va aparte</caption>
                <tbody>
                  <tr>
                    <th scope="row">Trimestrales y resúmenes anuales</th>
                    <td className="importe incluido">Incluido</td>
                  </tr>
                  <tr>
                    <th scope="row">Declaración de la Renta del titular</th>
                    <td className="importe incluido">Incluido</td>
                  </tr>
                  <tr>
                    <th scope="row">Alta, cambios y baja en Hacienda y Seguridad Social</th>
                    <td className="importe incluido">Incluido</td>
                  </tr>
                  <tr>
                    <th scope="row">Nóminas y seguros sociales, por trabajador</th>
                    <td className="importe">{prices.nominaMes} € al mes</td>
                  </tr>
                  <tr>
                    <th scope="row">Renta con criptomonedas</th>
                    <td className="importe">Desde {prices.cripto[0].tiers[0].price}</td>
                  </tr>
                  <tr>
                    <th scope="row">Requerimientos e inspecciones</th>
                    <td className="importe">Presupuesto cerrado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="preguntas-aut">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="preguntas-aut">Dudas de autónomos antes de empezar</h2>
            </div>
            <dl className="preguntas-abiertas">
              {preguntas.map((q) => (
                <div key={q.p}>
                  <dt>{q.p}</dt>
                  <dd>{q.r}</dd>
                </div>
              ))}
            </dl>
            <GuiasRelacionadas slugs={["darse-de-alta-autonomo", "renta-autonomos", "requerimiento-hacienda", "gastos-deducibles-autonomos", "cuota-autonomos-2027", "factura-electronica-verifactu"]} />
            <p style={{ marginTop: "2rem" }}>
              ¿Tienes una sociedad? <Link href="/sociedades/">Mira el plan de sociedades</Link>.
            </p>
          </div>
        </section>

        <section className="seccion" id="contacto" aria-labelledby="contacto-aut">
          <div className="contenedor contacto">
            <div>
              <h2 id="contacto-aut">¿Prefieres preguntar primero?</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                Cuéntanos a qué te dedicas y qué te preocupa. Te contestamos en 24 horas laborables, y la primera
                conversación es gratuita.
              </p>
            </div>
            <FormularioContacto temaInicial="autonomo" />
          </div>
        </section>
      </main>
      <Pie contacto="/empezar/?plan=autonomo" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
