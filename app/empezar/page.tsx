import type { Metadata } from "next";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { prices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Empieza con Fiscalyx: alta online en dos minutos",
  description:
    "Elige tu plan, cuéntanos tu situación y te llamamos en 24 horas laborables con el presupuesto cerrado. Sin compromiso y sin pagar nada hasta que aceptes.",
  alternates: { canonical: "/empezar/" },
};

const planes = [
  { v: "autonomo", t: "Autónomo", p: `${prices.autonomoMes} € al mes + IVA`, d: "Trimestrales, anuales y tu Renta, con un asesor asignado." },
  { v: "sociedad", t: "Sociedad limitada", p: `desde ${prices.sociedadMes} € al mes + IVA`, d: "Contabilidad, impuestos, Impuesto sobre Sociedades y cuentas anuales." },
  { v: "cripto", t: "Renta con criptomonedas", p: `desde ${prices.cripto[0].tiers[0].price}`, d: "Cálculo con FIFO, presentación y un informe que lo justifica." },
];

const script = `(function(){
  var P=${JSON.stringify(Object.fromEntries(planes.map((p) => [p.v, { t: p.t, p: p.p }])))};
  var set=function(id,t){var e=document.getElementById(id);if(e)e.textContent=t};
  function resumen(){
    var f=document.getElementById("alta"); if(!f) return;
    var v=(f.querySelector("input[name=plan]:checked")||{}).value||"autonomo", p=P[v];
    set("alta-plan",p.t); set("alta-precio",p.p);
    var extra=f.elements.tambien_cripto&&f.elements.tambien_cripto.checked&&v!=="cripto";
    document.getElementById("alta-extra").hidden=!extra;
    document.getElementById("fila-cripto").hidden=v==="cripto";
    document.getElementById("fila-facturas").hidden=v==="cripto";
  }
  document.addEventListener("change",function(e){if(e.target&&e.target.closest&&e.target.closest("#alta"))resumen()});
  document.addEventListener("submit",function(e){
    var f=e.target; if(!f||f.id!=="alta") return;
    e.preventDefault();
    if(f.elements._gotcha&&f.elements._gotcha.value) return;
    var b=f.querySelector("button[type=submit]"), err=f.querySelector(".estado-error");
    b.disabled=true; b.textContent="Enviando…"; err.hidden=true;
    fetch(f.action,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}})
      .then(function(r){ if(!r.ok) throw new Error();
        var ok=document.createElement("div"); ok.className="enviado"; ok.setAttribute("role","status");
        ok.innerHTML="<h2>Solicitud recibida</h2><p>Te llamamos en un plazo de 24 horas laborables, en la franja que nos has dicho, con tu presupuesto cerrado. Mientras tanto no tienes que hacer nada.</p>";
        f.replaceWith(ok); window.scrollTo({top:0,behavior:"smooth"}); })
      .catch(function(){ b.disabled=false; b.textContent="Enviar solicitud"; err.hidden=false; });
  });
  function inicio(){
    var q=(location.search.match(/[?&]plan=(autonomo|sociedad|cripto)/)||[])[1];
    var r=q&&document.querySelector("#alta input[name=plan][value="+q+"]"); if(r) r.checked=true;
    resumen();
  }
  if(document.readyState!=="loading")inicio();else document.addEventListener("DOMContentLoaded",inicio);
})();`;

export default function Empezar() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "18ch" }}>Empieza con Fiscalyx.</h1>
              <p className="entradilla">
                Tres pasos y dos minutos. Te llamamos en 24 horas laborables con tu presupuesto cerrado, y no pagas nada
                hasta que lo aceptes.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" style={{ paddingTop: 0, borderTop: "none" }}>
          <div className="contenedor calculadora alta">
            <form id="alta" className="calc-formulario" action={`https://formspree.io/f/${site.formspreeId}`} method="POST">
              <fieldset>
                <legend>1. ¿Qué necesitas?</legend>
                <div className="opciones opciones-columna">
                  {planes.map((p, i) => (
                    <label className="opcion opcion-plan" key={p.v}>
                      <input type="radio" name="plan" value={p.v} defaultChecked={i === 0} />
                      <span>
                        <strong>{p.t}</strong> <span className="opcion-precio">{p.p}</span>
                        <br />
                        <span className="opcion-detalle">{p.d}</span>
                      </span>
                    </label>
                  ))}
                </div>
                <div id="fila-cripto" style={{ marginTop: "0.75rem" }}>
                  <label className="opcion">
                    <input type="checkbox" name="tambien_cripto" value="sí" /> Además tengo criptomonedas que declarar
                  </label>
                </div>
              </fieldset>

              <fieldset>
                <legend>2. Tu situación</legend>
                <div className="campo">
                  <label htmlFor="situacion">Ahora mismo…</label>
                  <select id="situacion" name="situacion" defaultValue="cambiar">
                    <option value="cambiar">Tengo gestoría y quiero cambiarme</option>
                    <option value="yo">Lo llevo yo y quiero delegarlo</option>
                    <option value="alta">Voy a darme de alta o a crear la sociedad</option>
                    <option value="otro">Otra situación</option>
                  </select>
                </div>
                <div className="campo" id="fila-facturas">
                  <label htmlFor="facturas">Facturas emitidas y recibidas al trimestre</label>
                  <select id="facturas" name="facturas" defaultValue="hasta30">
                    <option value="hasta30">Hasta 30</option>
                    <option value="30a100">De 30 a 100</option>
                    <option value="mas100">Más de 100</option>
                    <option value="nose">No lo sé todavía</option>
                  </select>
                </div>
                <div className="campo">
                  <label htmlFor="actividad">
                    ¿A qué te dedicas? <span className="ayuda">(opcional)</span>
                  </label>
                  <input id="actividad" name="actividad" placeholder="Por ejemplo, diseño web para empresas" />
                </div>
              </fieldset>

              <fieldset>
                <legend>3. Tus datos</legend>
                <div className="fila-campos">
                  <div className="campo">
                    <label htmlFor="alta-nombre">Nombre</label>
                    <input id="alta-nombre" name="nombre" autoComplete="name" required />
                  </div>
                  <div className="campo">
                    <label htmlFor="alta-telefono">Teléfono</label>
                    <input id="alta-telefono" name="telefono" type="tel" autoComplete="tel" required />
                  </div>
                </div>
                <div className="campo">
                  <label htmlFor="alta-email">Correo electrónico</label>
                  <input id="alta-email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="campo">
                  <label htmlFor="franja">¿Cuándo te llamamos?</label>
                  <select id="franja" name="franja" defaultValue="manana">
                    <option value="manana">Por la mañana (8:30 a 14:00)</option>
                    <option value="tarde">Por la tarde (14:00 a 17:30)</option>
                    <option value="whatsapp">Prefiero WhatsApp</option>
                  </select>
                </div>
              </fieldset>

              <div className="trampa" aria-hidden="true">
                <label htmlFor="alta-gotcha">No rellenes este campo</label>
                <input id="alta-gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>
              <input type="hidden" name="_subject" value="Nueva solicitud de alta desde fiscalyx.com" />
              <input type="hidden" name="tema" value="alta" />

              <label className="consentimiento">
                <input type="checkbox" name="acepto_privacidad" value="sí" required />
                <span>
                  He leído la <a href="/privacidad/">política de privacidad</a> y acepto que Fiscalyx use estos datos para
                  prepararme un presupuesto.
                </span>
              </label>

              <p className="estado estado-error" role="alert" hidden>
                No se ha podido enviar. Revisa tu conexión y vuelve a intentarlo, o escríbenos a{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>

              <div>
                <button className="boton boton-principal" type="submit">
                  Enviar solicitud
                </button>
              </div>
            </form>

            <aside className="resultado calc-resultado" aria-live="polite">
              <p className="etiqueta">Has elegido</p>
              <p className="alta-plan" id="alta-plan">
                {planes[0].t}
              </p>
              <p className="alta-precio" id="alta-precio">
                {planes[0].p}
              </p>
              <p className="aclaracion" id="alta-extra" hidden>
                Y tu Renta con criptomonedas, con el mismo asesor. Te lo presupuestamos junto.
              </p>
              <h2 className="alta-subtitulo">Lo que pasa después</h2>
              <ol className="alta-pasos">
                <li>Te llamamos en 24 horas laborables para conocer tu caso.</li>
                <li>Te enviamos el presupuesto cerrado y el contrato por escrito.</li>
                <li>Nos autorizas ante Hacienda y la Seguridad Social; te guiamos.</li>
                <li>Si vienes de otra gestoría, pedimos nosotros tu documentación.</li>
              </ol>
              <p className="aclaracion">Sin permanencia. No pagas nada hasta que aceptes el presupuesto.</p>
            </aside>
          </div>
        </section>
      </main>
      <Pie contacto="#alta" />
      <script id="alta-script" dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
