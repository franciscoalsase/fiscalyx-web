import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { FormularioContacto } from "@/components/FormularioContacto";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Licitaciones públicas: solvencia y documentación",
  description:
    "Preparamos la parte económica de tu licitación: solvencia, cuentas, certificados y DEUC. Calcula el volumen de negocios que te pueden pedir.",
  alternates: { canonical: "/licitaciones-publicas/" },
};

const script = `(function(){
  function calc(){
    var f=document.getElementById("solvencia"); if(!f) return;
    var num=function(n){var v=String(f.elements[n].value).replace(/\\./g,"").replace(",",".").replace(/[^\\d.]/g,"");var x=parseFloat(v);return isFinite(x)&&x>0?x:0};
    var valor=num("valor"), anios=num("anios")||1;
    var base=anios>1?valor/anios:valor, minimo=base*1.5;
    var eur=function(n){return n.toLocaleString("es-ES",{maximumFractionDigits:0,useGrouping:"always"})+" €"};
    document.getElementById("so-minimo").textContent=valor?eur(minimo):"—";
    document.getElementById("so-base").textContent=valor?(anios>1?"Una vez y media el valor anual medio ("+eur(base)+" al año)":"Una vez y media el valor estimado del contrato"):"Introduce el valor estimado del contrato";
  }
  document.addEventListener("input",function(e){if(e.target&&e.target.closest&&e.target.closest("#solvencia"))calc()});
  if(document.readyState!=="loading")calc();else document.addEventListener("DOMContentLoaded",calc);
})();`;

const preguntas = [
  {
    p: "¿Preparáis la oferta técnica o los recursos?",
    r: "No. Nos ocupamos de la parte económica y fiscal: solvencia, cuentas, certificados y declaraciones. La memoria técnica la preparas tú o tu equipo, y los recursos contra una adjudicación son trabajo de un despacho jurídico.",
  },
  {
    p: "Soy autónomo. ¿Cómo acredito mi volumen de negocios?",
    r: "Si no estás inscrito en el Registro Mercantil, con tus libros de inventarios y cuentas anuales legalizados por el Registro Mercantil. Es el punto en el que más autónomos se quedan fuera, y lo preparamos nosotros.",
  },
  {
    p: "Mi empresa es nueva y no tiene tres años de cuentas. ¿Puedo presentarme?",
    r: "Depende del pliego. La ley permite otros medios, como un seguro de responsabilidad por riesgos profesionales o el patrimonio neto, si el pliego los admite. Y en los contratos pequeños a veces no se exige solvencia. Revisamos el tuyo y te lo decimos.",
  },
  {
    p: "¿Qué es el DEUC?",
    r: "El Documento Europeo Único de Contratación: una declaración responsable en la que dices que cumples los requisitos. Al principio basta con él; la documentación completa se pide normalmente solo a quien va a resultar adjudicatario.",
  },
  {
    p: "¿Me conviene inscribirme en el ROLECE?",
    r: "Si vas a licitar con frecuencia, sí. El Registro Oficial de Licitadores y Empresas Clasificadas del Sector Público guarda tus datos y te evita presentar la misma documentación en cada licitación.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Documentación económica para licitaciones públicas",
    provider: { "@type": "AccountingService", name: "Fiscalyx", url: site.url },
    areaServed: { "@type": "Country", name: "España" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
  },
];

export default function Licitaciones() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor">
            <div>
              <h1 style={{ maxWidth: "20ch" }}>Que tu licitación no se caiga por un papel económico</h1>
              <p className="entradilla">
                Preparamos la parte económica: la solvencia que pide el pliego, tus cuentas anuales o libros
                legalizados, los certificados de Hacienda y la Seguridad Social y la declaración responsable. Para
                autónomos y sociedades.
              </p>
              <div className="acciones">
                <a className="boton boton-principal" href="#contacto">
                  Enviar mi pliego
                </a>
                <a
                  className="enlace-sencillo"
                  href={whatsappLink("Hola, me quiero presentar a una licitación.")}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <p className="portada-condiciones">Te decimos el precio antes de empezar, y trabajamos con toda España.</p>
            </div>
            <figure className="documento documento-aviso">
              <div className="documento-cabeza">
                <strong>Si te proponen como adjudicatario</strong>
                <span>Lo habitual</span>
              </div>
              <table>
                <caption className="visualmente-oculto">Documentación que suele pedirse al adjudicatario</caption>
                <tbody>
                  <tr>
                    <th scope="row">
                      Solvencia económica<span>Cuentas anuales depositadas o libros legalizados</span>
                    </th>
                    <td>Nosotros</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Al corriente con Hacienda<span>Certificado de la Agencia Tributaria</span>
                    </th>
                    <td>Nosotros</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Al corriente con la Seguridad Social<span>Certificado de la Tesorería</span>
                    </th>
                    <td>Nosotros</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Garantía definitiva<span>El 5 % del precio de adjudicación, sin IVA</span>
                    </th>
                    <td>Te avisamos</td>
                  </tr>
                </tbody>
              </table>
              <p className="nota-ejemplo">
                Normalmente hay diez días hábiles para presentarlo desde que te lo piden. Si algo falla, la oferta pasa
                al siguiente.
              </p>
            </figure>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="solvencia-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="solvencia-titulo">¿Cuánto tienes que facturar para presentarte?</h2>
              <p>
                Lo más habitual es que el pliego pida un volumen de negocios, en el mejor de tus tres últimos años
                cerrados, de una vez y media el valor estimado del contrato. Calcúlalo con el tuyo.
              </p>
            </div>
            <div className="calculadora">
              <form id="solvencia" className="calc-formulario">
                <div className="campo">
                  <label htmlFor="valor">Valor estimado del contrato, sin IVA</label>
                  <input id="valor" name="valor" inputMode="decimal" placeholder="Por ejemplo, 120.000" defaultValue="120.000" />
                </div>
                <div className="campo">
                  <label htmlFor="anios">Duración del contrato, en años</label>
                  <input id="anios" name="anios" inputMode="decimal" defaultValue="2" />
                </div>
              </form>
              <div className="calc-resultado" aria-live="polite">
                <p className="ayuda-campo">Volumen anual de negocios que te pueden pedir</p>
                <p className="veredicto">
                  <span id="so-minimo">—</span>
                </p>
                <p id="so-base" className="ayuda-campo">
                  —
                </p>
                <p className="nota-ejemplo" style={{ marginTop: "1rem" }}>
                  Es el máximo general que permite la ley y el criterio por defecto. El pliego puede pedir menos, otro
                  medio o, en casos justificados, más. Manda siempre lo que diga tu pliego.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="licit-incluye">
          <div className="contenedor dos-columnas">
            <div>
              <h2 id="licit-incluye">Qué preparamos para tu oferta</h2>
              <ul className="lista-incluye">
                <li>
                  <div>
                    <strong>Lectura económica del pliego</strong>
                    <br />
                    <span>Qué solvencia piden, con qué medio se acredita y si llegas.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Cuentas anuales o libros legalizados</strong>
                    <br />
                    <span>
                      Las sociedades acreditan su volumen con las cuentas depositadas en el Registro Mercantil. Los
                      autónomos, con sus libros de inventarios y cuentas anuales legalizados.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Certificados de estar al corriente</strong>
                    <br />
                    <span>Con Hacienda y con la Seguridad Social, y lo que haya que regularizar antes para obtenerlos.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Declaración responsable y DEUC</strong>
                    <br />
                    <span>Rellenados con tus datos económicos y revisados antes de que los firmes.</span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Inscripción en el ROLECE</strong>
                    <br />
                    <span>Si vas a licitar a menudo, para no repetir papeles en cada expediente.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2>Fuera de nuestro trabajo</h2>
              <p style={{ marginTop: "1.25rem" }}>
                La memoria técnica y la propuesta de precio son tuyas: tú conoces tu trabajo. Tampoco llevamos
                recursos ni reclamaciones contra una adjudicación.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Lo que sí hacemos es que, cuando la mesa de contratación pida tu documentación económica, esté
                completa, cuadre con lo que declaraste y llegue en plazo.
              </p>
              <p style={{ marginTop: "1rem" }}>
                Si ya llevamos tu gestoría, tus cuentas y certificados están al día y esto va mucho más rápido.{" "}
                <Link href="/sociedades/">Ver el plan de sociedades</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="licit-preguntas">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="licit-preguntas">Dudas sobre la licitación</h2>
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
              Solvencia económica y financiera según el artículo 87 de la Ley 9/2017, de Contratos del Sector Público.
            </p>
          </div>
        </section>

        <section className="seccion" id="contacto" aria-labelledby="licit-contacto">
          <div className="contenedor contacto">
            <div>
              <h2 id="licit-contacto">Mándanos el pliego</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                Dinos qué contrato es, el plazo de presentación y si eres autónomo o sociedad. Te contestamos en 24
                horas laborables con lo que te falta y lo que costaría.
              </p>
            </div>
            <FormularioContacto temaInicial="licitacion" />
          </div>
        </section>
      </main>
      <Pie contacto="#contacto" />
      <script id="solvencia-script" dangerouslySetInnerHTML={{ __html: script }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
