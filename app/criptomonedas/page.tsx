import type { Metadata } from "next";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { GuiasRelacionadas } from "@/components/GuiasRelacionadas";
import { FormularioContacto } from "@/components/FormularioContacto";
import { Estimador } from "@/components/Estimador";
import { PresupuestoCripto } from "@/components/PresupuestoCripto";
import { Check } from "@/components/Iconos";
import { ExtractoInforme } from "@/components/ExtractoInforme";
import { prices, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Asesoría fiscal de criptomonedas: Renta y Modelo 721",
  description:
    "Calculamos tus ganancias con criptomonedas operación por operación y presentamos tu Renta y el Modelo 721. Economistas colegiados y precio cerrado.",
  alternates: { canonical: "/criptomonedas/" },
};

const calendario = [
  {
    cuando: "Enero de 2026",
    que: "Entra en vigor la directiva europea DAC8. Los exchanges de la UE empiezan a registrar saldos y operaciones de sus clientes.",
  },
  {
    cuando: "Primavera de 2027",
    que: "Presentas la Renta de 2026: la primera que cubren esos datos.",
    destacado: true,
  },
  {
    cuando: "Septiembre de 2027",
    que: "Fecha límite para que los países de la UE se intercambien la información de 2026.",
  },
  {
    cuando: "Hasta 2031",
    que: "Hacienda dispone de cuatro años para revisar esa declaración y compararla con lo que le han enviado.",
  },
];

const preguntas = [
  {
    p: "¿Tributa cambiar una criptomoneda por otra?",
    r: "Sí. Para Hacienda, cambiar bitcoin por ether es una permuta: hay ganancia o pérdida aunque no pases a euros. Por eso hay que calcular cada operación, no solo las retiradas al banco.",
  },
  {
    p: "¿Cómo se declara el staking?",
    r: "Las recompensas se consideran rendimientos del capital mobiliario y se valoran en euros el día en que las recibes. Cuando después las vendes o las cambias, generan además su propia ganancia o pérdida.",
  },
  {
    p: "¿Quién tiene que presentar el Modelo 721?",
    r: "Quien a 31 de diciembre tenga más de 50.000 € en criptomonedas custodiadas por plataformas en el extranjero. Lo que guardas en tu propio monedero, sin custodio, no entra en este modelo.",
  },
  {
    p: "¿Sirven de algo las pérdidas?",
    r: "Sí. Se compensan con las ganancias del mismo año y, si sobran, durante los cuatro años siguientes. Pero hay que declararlas para poder usarlas.",
  },
  {
    p: "No declaré bien años anteriores. ¿Qué hago?",
    r: "Lo más barato suele ser regularizar antes de que Hacienda pregunte, con declaraciones complementarias. Revisamos tu caso y te decimos qué conviene y cuánto costaría, antes de hacer nada.",
  },
  {
    p: "¿Qué necesitáis para empezar?",
    r: "Los historiales de tus exchanges en CSV, o un acceso de solo lectura, y las direcciones públicas de tus monederos. Nunca te pediremos claves privadas ni frases de recuperación.",
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

export default function Criptomonedas() {
  return (
    <>
      <Cabecera actual="/criptomonedas/" />
      <main id="contenido">
        <section className="portada portada-cripto">
          <div className="contenedor">
            <div>
              <h1 style={{ maxWidth: "18ch" }}>Tus criptomonedas, declaradas operación por operación</h1>
              <p className="entradilla">
                Calculamos tus ganancias y pérdidas, presentamos tu Renta y el Modelo 721 y te entregamos el archivo
                para justificarlo si Hacienda pregunta. Con precio cerrado antes de empezar.
              </p>
              <div className="acciones">
                <a className="boton boton-principal" href="#contacto">
                  Pedir presupuesto
                </a>
                <a
                  className="enlace-sencillo"
                  href={whatsappLink("Hola, tengo una consulta sobre criptomonedas.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <ul className="garantias">
                <li>
                  <Check /> Economistas colegiados
                </li>
                <li>
                  <Check /> Exchanges, DeFi, staking y NFT
                </li>
                <li>
                  <Check /> Nunca pedimos tus claves
                </li>
              </ul>
            </div>
            <ExtractoInforme />
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="dac8-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="dac8-titulo">Por qué la Renta de 2026 es distinta</h2>
              <p>
                Hasta ahora, Hacienda dependía en gran parte de lo que tú declarabas. Con la directiva DAC8 recibirá
                los datos directamente de las plataformas.
              </p>
            </div>
            <ol className="linea-tiempo">
              {calendario.map((h) => (
                <li key={h.cuando} className={h.destacado ? "destacado" : undefined}>
                  <span className="cuando">{h.cuando}</span>
                  <p>{h.que}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seccion" aria-labelledby="servicios-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="servicios-titulo">Qué hacemos y cuánto cuesta</h2>
              <p>El precio depende del número de operaciones. Te lo confirmamos por escrito antes de empezar.</p>
            </div>
            <div className="servicios">
              {prices.cripto.map((s) => (
                <div className="servicio" key={s.name}>
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.detail}</p>
                  </div>
                  <table className="tabla">
                    <tbody>
                      {s.tiers.map((t) => (
                        <tr key={t.label}>
                          <th scope="row">{t.label}</th>
                          <td className="importe">{t.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "1.25rem", color: "var(--grafito)", fontSize: "1rem" }}>
              Precios sin IVA. Si además eres cliente de nuestra gestoría de autónomos, te aplicamos un descuento.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" id="presupuesto" aria-labelledby="presupuesto-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="presupuesto-titulo">Tu precio en tres preguntas</h2>
              <p>Marca lo que hiciste el año pasado y te decimos qué plan te corresponde. Sin dejar tus datos.</p>
            </div>
            <PresupuestoCripto />
          </div>
        </section>

        <section className="seccion" aria-labelledby="estimador-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="estimador-titulo">¿Cuánto podrías pagar?</h2>
              <p>Una primera cifra orientativa con los tipos actuales. No guardamos ningún dato de los que escribas.</p>
            </div>
            <Estimador />
          </div>
        </section>

        <section className="seccion" aria-labelledby="preguntas-cripto">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="preguntas-cripto">Dudas frecuentes</h2>
            </div>
            <div className="preguntas">
              {preguntas.map((q) => (
                <details key={q.p}>
                  <summary>{q.p}</summary>
                  <p>{q.r}</p>
                </details>
              ))}
            </div>
            <GuiasRelacionadas slugs={["declarar-criptomonedas-renta", "dac8-criptomonedas", "permutas-criptomonedas-fifo", "compensar-perdidas-criptomonedas", "modelo-721", "staking-defi-impuestos", "retirar-dinero-binance-hacienda"]} />
          </div>
        </section>

        <section className="seccion seccion-banda" id="contacto" aria-labelledby="contacto-cripto">
          <div className="contenedor contacto">
            <div>
              <h2 id="contacto-cripto">Cuéntanos qué tienes</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                Qué exchanges usas, cuántas operaciones haces más o menos y de qué años. Te respondemos con un
                presupuesto cerrado en 24 horas laborables.
              </p>
            </div>
            <FormularioContacto temaInicial="cripto" />
          </div>
        </section>
      </main>
      <Pie contacto="#contacto" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
