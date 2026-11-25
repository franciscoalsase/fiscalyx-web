import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { Check } from "@/components/Iconos";
import { prices, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Precios de gestoría online para autónomos y sociedades",
  description: `Autónomos, ${prices.autonomoMes} € al mes. Sociedades, desde ${prices.sociedadMes} € al mes. Criptomonedas, precio cerrado por caso. Todo lo que incluye cada cuota, por escrito.`,
  alternates: { canonical: "/precios/" },
};

const preguntas = [
  {
    p: "¿Por qué no sois la gestoría más barata?",
    r: "Porque cada cliente tiene un asesor asignado, economista colegiado, que le llama antes de cada trimestre. Hay gestorías online más baratas que funcionan con chat o con equipos rotativos; nosotros preferimos conocer tu caso.",
  },
  {
    p: "¿Hay costes de alta o de salida?",
    r: "No. El alta como autónomo está incluida y puedes darte de baja cuando quieras. Te entregamos toda tu documentación.",
  },
  {
    p: "¿Los precios llevan IVA?",
    r: "No. A todos los precios de esta página hay que sumarles el 21 % de IVA, que como autónomo o sociedad normalmente puedes deducirte.",
  },
  {
    p: "¿Qué pasa si tengo muchas facturas?",
    r: "La cuota de autónomo cubre la actividad habitual de un profesional o un pequeño negocio. Si tu volumen es muy alto, te lo decimos antes de empezar y te damos una cuota cerrada.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
};

export default function Precios() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "18ch" }}>Precios claros, por escrito y sin permanencia</h1>
              <p className="entradilla">
                Cuota fija mensual para autónomos y sociedades, y precio cerrado por caso para criptomonedas. Precios sin
                IVA.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion seccion-verde" aria-labelledby="planes-titulo" style={{ paddingTop: "3.5rem" }}>
          <div className="contenedor">
            <h2 id="planes-titulo" className="visualmente-oculto">
              Planes
            </h2>
            <div className="planes planes-tres">
              <div className="tarjeta-blanca plan">
                <h3>Autónomo</h3>
                <p className="plan-precio">
                  <span className="cifra-desde">cuota fija</span>
                  {prices.autonomoMes} €<small>al mes</small>
                </p>
                <ul className="plan-lista">
                  <li><Check /> Modelos 303, 130, 111 y 115</li>
                  <li><Check /> Resúmenes 390, 190, 180 y 347</li>
                  <li><Check /> Declaración de la Renta del titular</li>
                  <li><Check /> Alta en Hacienda y Seguridad Social</li>
                  <li><Check /> Asesor asignado, WhatsApp y llamada trimestral</li>
                </ul>
                <Link className="boton boton-principal" href="/empezar/?plan=autonomo">Empezar con este plan</Link>
              </div>
              <div className="tarjeta-blanca plan">
                <h3>Sociedad limitada</h3>
                <p className="plan-precio">
                  <span className="cifra-desde">desde</span>
                  {prices.sociedadMes} €<small>al mes</small>
                </p>
                <ul className="plan-lista">
                  <li><Check /> Contabilidad y libros oficiales</li>
                  <li><Check /> Modelos 303, 111, 115 y 202</li>
                  <li><Check /> Impuesto sobre Sociedades</li>
                  <li><Check /> Cuentas anuales, acta y depósito</li>
                  <li><Check /> Asesor asignado, WhatsApp y llamada trimestral</li>
                </ul>
                <Link className="boton boton-principal" href="/empezar/?plan=sociedad">Empezar con este plan</Link>
              </div>
              <div className="tarjeta-blanca plan">
                <h3>Criptomonedas</h3>
                <p className="plan-precio">
                  <span className="cifra-desde">desde</span>
                  {prices.cripto[0].tiers[0].price}
                  <small>por ejercicio</small>
                </p>
                <ul className="plan-lista">
                  {prices.cripto[0].tiers.map((t) => (
                    <li key={t.label}>
                      <Check /> Renta, {t.label.toLowerCase()}: {t.price}
                    </li>
                  ))}
                  <li>
                    <Check /> Modelo 721: {prices.cripto[1].tiers[0].price}
                  </li>
                  <li>
                    <Check /> Regularización: diagnóstico de {prices.cripto[2].tiers[0].price}, descontable
                  </li>
                </ul>
                <Link className="boton boton-principal" href="/empezar/?plan=cripto">Empezar con este plan</Link>
              </div>
            </div>
            <p className="planes-nota">
              Aparte en todos los planes: nóminas y seguros sociales a {prices.nominaMes} € al mes por trabajador, y
              requerimientos o inspecciones con presupuesto cerrado antes de empezar.
            </p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="preguntas-precios">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="preguntas-precios">Dudas sobre los precios</h2>
            </div>
            <div className="preguntas">
              {preguntas.map((q) => (
                <details key={q.p}>
                  <summary>{q.p}</summary>
                  <p>{q.r}</p>
                </details>
              ))}
            </div>
            <p style={{ marginTop: "2rem" }}>
              ¿Comparando presupuestos? Te explicamos <Link href="/guias/cuanto-cuesta-una-gestoria/">cuánto cuesta de verdad una gestoría al año</Link>, con lo que suele ir aparte.
            </p>
            <div className="acciones" style={{ marginTop: "2.5rem" }}>
              <Link className="boton boton-principal" href="/#contacto">
                Pedir presupuesto
              </Link>
              <a className="enlace-sencillo" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Pie />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
