import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { Check } from "@/components/Iconos";
import { prices, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: `Tarifas de la gestoría: autónomos a ${prices.autonomoMes} € al mes`,
  description: `Autónomos, ${prices.autonomoMes} € al mes. Sociedades, desde ${prices.sociedadMes} € al mes. Criptomonedas, precio por caso antes de empezar. Todo lo que incluye cada cuota, por escrito.`,
  alternates: { canonical: "/precios/" },
};

const preguntas = [
  {
    p: "¿Por qué no sois la gestoría más barata?",
    r: "Porque cada cliente tiene un asesor asignado, economista colegiado, que le llama antes de cada trimestre. Hay gestorías online más baratas que atienden sobre todo por chat; nosotros preferimos conocer tu caso y hablar contigo.",
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

const eur = (n: number) =>
  `${n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: "always" } as Intl.NumberFormatOptions)} €`;

const detalle: [string, string, string][] = [
  ["IVA y retenciones trimestrales", "303, 111 y 115", "303, 111 y 115"],
  ["Pago a cuenta trimestral", "130, si te toca", "202, si te toca"],
  ["Resúmenes anuales", "390, 190, 180 y 347", "390, 190, 180 y 347"],
  ["Contabilidad", "Libros de ingresos y gastos", "Contabilidad completa y libros oficiales"],
  ["Impuesto anual", "Tu declaración de la Renta", "Impuesto sobre Sociedades"],
  ["Cuentas anuales", "No aplica", "Formulación, acta de la junta y depósito"],
  ["Altas y cambios", "Alta, cambios y baja en Hacienda y Seguridad Social", "Cambios censales en Hacienda"],
  ["Cuota de autónomos", "Revisión de tu base de cotización", "Revisión de la base del administrador"],
  ["Antes de pagar", "Aviso con las cifras antes de cada trimestre", "Aviso trimestral y previsión del impuesto en noviembre"],
  ["Tu asesor", "Economista colegiado asignado, WhatsApp y llamada trimestral", "Economista colegiado asignado, WhatsApp y llamada trimestral"],
  ["Cartas de Hacienda", "Te explicamos qué piden; la respuesta, con presupuesto cerrado", "Te explicamos qué piden; la respuesta, con presupuesto cerrado"],
  ["Nóminas", `${prices.nominaMes} € al mes por trabajador`, `${prices.nominaMes} € al mes por trabajador`],
];

const puntuales: [string, string, string][] = [
  ["Cambiarte desde otra gestoría", "/cambiar-de-gestoria/", "Sin coste si contratas una cuota"],
  ["Renta con criptomonedas", "/criptomonedas/", `Desde ${prices.cripto[0].tiers[0].price}`],
  ["Modelo 721", "/guias/modelo-721/", prices.cripto[1].tiers[0].price.replace(/^d/, "D")],
  ["Regularizar años anteriores de cripto", "/criptomonedas/", `Diagnóstico de ${prices.cripto[2].tiers[0].price}, descontable`],
  ["Capitalizar el paro", "/capitalizar-paro/", "Presupuesto cerrado"],
  ["Documentación económica para una licitación", "/licitaciones-publicas/", "Presupuesto cerrado"],
  ["Constituir una sociedad limitada", "/constituir-sociedad/", "Presupuesto cerrado; notaría y Registro aparte"],
  ["Responder a un requerimiento de Hacienda", "/guias/requerimiento-hacienda/", "Presupuesto cerrado"],
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
              <h1 style={{ maxWidth: "20ch" }}>Precios de la gestoría, por escrito y sin permanencia</h1>
              <p className="entradilla">
                Cuota fija mensual para autónomos y sociedades, y un precio por caso para criptomonedas, que te damos antes de empezar. Precios sin IVA.
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
                <p className="plan-diferencia">La Renta va dentro. En muchas gestorías online se cobra aparte, desde unos 40 €.</p>
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
                <p className="plan-diferencia">Las cuentas anuales van dentro, y en noviembre te decimos cuánto saldrá el impuesto.</p>
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
                <p className="plan-diferencia">Con el informe que justifica cada operación ante Hacienda.</p>
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
              requerimientos o inspecciones, con el precio por escrito antes de empezar.
            </p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="detalle-precios">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="detalle-precios">Qué entra en cada cuota, línea a línea</h2>
              <p>Para que compares con cualquier otro presupuesto sin letra pequeña.</p>
            </div>
            <div className="tabla-scroll">
              <table className="tabla comparar tabla-planes">
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="visualmente-oculto">Concepto</span>
                    </th>
                    <th scope="col">Autónomo</th>
                    <th scope="col">Sociedad limitada</th>
                  </tr>
                </thead>
                <tbody>
                  {detalle.map(([c, a, sl]) => (
                    <tr key={c}>
                      <th scope="row">{c}</th>
                      <td>{a}</td>
                      <td>{sl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="anual-precios">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="anual-precios">Cuánto pagas en un año completo</h2>
              <p>Sin extras en abril ni en julio. El IVA, como autónomo o sociedad, normalmente te lo deduces.</p>
            </div>
            <div className="anual">
              <div>
                <p className="ayuda-campo">Autónomo</p>
                <p className="anual-cifra">
                  <mark>{eur(prices.autonomoMes * 12)}</mark>
                </p>
                <p className="ayuda-campo">al año sin IVA; {eur(prices.autonomoMes * 12 * 1.21)} con IVA</p>
              </div>
              <div>
                <p className="ayuda-campo">Sociedad limitada</p>
                <p className="anual-cifra">
                  <span className="anual-desde">desde </span>
                  <mark>{eur(prices.sociedadMes * 12)}</mark>
                </p>
                <p className="ayuda-campo">
                  al año sin IVA; {eur(prices.sociedadMes * 12 * 1.21)} con IVA, más las tasas del Registro
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="puntuales-precios">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="puntuales-precios">Trámites sueltos</h2>
              <p>Si no necesitas una cuota mensual, o además de ella.</p>
            </div>
            <div className="tabla-scroll">
              <table className="tabla tabla-guia">
                <thead>
                  <tr>
                    <th scope="col">Trámite</th>
                    <th scope="col">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {puntuales.map(([t, href, pr]) => (
                    <tr key={t}>
                      <th scope="row">
                        <Link href={href}>{t}</Link>
                      </th>
                      <td>{pr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="nota-tabla">
              «Presupuesto cerrado» quiere decir que te damos el precio por escrito antes de empezar, y no cambia.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="preguntas-precios">
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
              ¿Comparando presupuestos? Te explicamos <Link href="/guias/cuanto-cuesta-una-gestoria/">cuánto cuesta una gestoría en un año completo</Link>, con lo que suele ir aparte.
            </p>
            <div className="acciones" style={{ marginTop: "2.5rem" }}>
              <Link className="boton boton-principal" href="/empezar/">
                Empezar
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
