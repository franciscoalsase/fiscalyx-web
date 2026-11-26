import type { Metadata } from "next";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { prices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calcula tu cuota y empieza con Fiscalyx",
  description:
    "Contesta tres preguntas y mira al momento lo que pagarías al mes y al año, con IVA. Si te encaja, te llamamos en 24 horas laborables.",
  alternates: { canonical: "/empezar/" },
};

const planes = [
  { v: "autonomo", t: "Autónomo", p: `${prices.autonomoMes} € al mes + IVA`, d: "Trimestrales, anuales y tu Renta, con un asesor asignado." },
  { v: "sociedad", t: "Sociedad limitada", p: `desde ${prices.sociedadMes} € al mes + IVA`, d: "Contabilidad, impuestos, Impuesto sobre Sociedades y cuentas anuales." },
  { v: "cripto", t: "Renta con criptomonedas", p: `desde ${prices.cripto[0].tiers[0].price}`, d: "Cálculo con FIFO, presentación y un informe que lo justifica." },
];

const datos = {
  autonomo: prices.autonomoMes,
  sociedad: prices.sociedadMes,
  nomina: prices.nominaMes,
  cripto: prices.cripto[0].tiers.map((t) => ({ l: t.label, p: parseInt(t.price.replace(/\D/g, ""), 10), desde: t.price.startsWith("desde") })),
};

const script = `(function(){
  var D=${JSON.stringify(datos)};
  var eur=function(n,dec){return n.toLocaleString("es-ES",{minimumFractionDigits:dec?2:0,maximumFractionDigits:dec?2:0,useGrouping:true})+" €"};
  function fila(t,v,c){return '<li'+(c?' class="'+c+'"':'')+'><span>'+t+'</span><span class="presu-puntos" aria-hidden="true"></span><strong>'+v+'</strong></li>'}
  function calcula(){
    var f=document.getElementById("alta"); if(!f) return;
    var plan=(f.querySelector("input[name=plan]:checked")||{}).value||"autonomo";
    var periodico=plan!=="cripto";
    var cripto=plan==="cripto"||(f.elements.tambien_cripto&&f.elements.tambien_cripto.checked);
    document.getElementById("fila-cripto").hidden=!periodico;
    document.getElementById("fila-facturas").hidden=!periodico;
    document.getElementById("fila-trabajadores").hidden=!periodico;
    document.getElementById("fila-operaciones").hidden=!cripto;
    var trab=Math.max(0,Math.min(99,parseInt(f.elements.trabajadores&&f.elements.trabajadores.value,10)||0));
    var muchas=f.elements.facturas&&f.elements.facturas.value==="mas100";
    var tier=D.cripto[parseInt((f.elements.operaciones||{}).value||"0",10)]||D.cripto[0];
    var h="", mes=0, notas=[];
    if(periodico){
      var base=plan==="sociedad"?D.sociedad:D.autonomo;
      h+=fila(plan==="sociedad"?"Cuota de tu sociedad":"Cuota de autónomo, con la Renta",(plan==="sociedad"?"desde ":"")+eur(base)+" al mes");
      mes+=base;
      if(trab>0){h+=fila("Nóminas de "+trab+(trab===1?" trabajador":" trabajadores"),eur(trab*D.nomina)+" al mes");mes+=trab*D.nomina;}
      h+=fila("Total al mes, sin IVA",(plan==="sociedad"?"desde ":"")+eur(mes),"presu-total");
      var d=plan==="sociedad"?"desde ":"";
      h+=fila("Con el 21 % de IVA",d+eur(mes*1.21,true)+" al mes");
      h+=fila("Al año, sin IVA",d+eur(mes*12));
      if(plan==="sociedad") notas.push("La cuota de una SL depende de su volumen; te la confirmamos por escrito antes de empezar.");
      if(muchas) notas.push("Con más de 100 facturas al trimestre te damos una cuota cerrada antes de empezar.");
    }
    if(cripto){
      h+=fila("Renta con criptomonedas, "+tier.l.toLowerCase(),(tier.desde?"desde ":"")+eur(tier.p)+(periodico?" al año":""),periodico?"":"presu-total");
      notas.push("La Renta con criptomonedas se paga una vez por ejercicio, más IVA.");
    }
    document.getElementById("presu-lineas").innerHTML=h;
    document.getElementById("presu-notas").textContent=notas.join(" ");
    var txt=[].map.call(document.querySelectorAll("#presu-lineas li"),function(li){return li.firstChild.textContent+": "+li.lastChild.textContent}).join(" | ");
    f.elements.presupuesto.value=txt;
  }
  document.addEventListener("input",function(e){if(e.target&&e.target.closest&&e.target.closest("#alta"))calcula()});
  document.addEventListener("change",function(e){if(e.target&&e.target.closest&&e.target.closest("#alta"))calcula()});
  document.addEventListener("submit",function(e){
    var f=e.target; if(!f||f.id!=="alta") return;
    e.preventDefault();
    if(f.elements._gotcha&&f.elements._gotcha.value) return;
    var b=f.querySelector("button[type=submit]"), err=f.querySelector(".estado-error");
    b.disabled=true; b.textContent="Enviando…"; err.hidden=true;
    fetch(f.action,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}})
      .then(function(r){ if(!r.ok) throw new Error();
        location.href="/gracias/?desde=alta"; })
      .catch(function(){ b.disabled=false; b.textContent="Quiero este presupuesto"; err.hidden=false; });
  });
  function inicio(){
    var q=(location.search.match(/[?&]plan=(autonomo|sociedad|cripto)/)||[])[1];
    var r=q&&document.querySelector("#alta input[name=plan][value="+q+"]"); if(r) r.checked=true;
    calcula();
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
              <h1 style={{ maxWidth: "18ch" }}>Calcula tu cuota y empieza</h1>
              <p className="entradilla">
                Contesta tres preguntas y verás al momento lo que pagarías, al mes y al año. Si te encaja, nos dejas
                tus datos y te llamamos en 24 horas laborables. No pagas nada hasta que aceptes.
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
                <div className="campo" id="fila-operaciones" hidden style={{ marginTop: "0.9rem" }}>
                  <label htmlFor="operaciones">Operaciones con cripto en el año</label>
                  <select id="operaciones" name="operaciones" defaultValue="0">
                    {prices.cripto[0].tiers.map((t, i) => (
                      <option value={i} key={t.label}>
                        {t.label}
                      </option>
                    ))}
                  </select>
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
                <div className="campo" id="fila-trabajadores">
                  <label htmlFor="trabajadores">¿Cuántos trabajadores tienes?</label>
                  <input id="trabajadores" name="trabajadores" type="number" min={0} max={99} defaultValue={0} inputMode="numeric" />
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
              <input type="hidden" name="presupuesto" defaultValue="" />

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
                  Quiero este presupuesto
                </button>
              </div>
            </form>

            <aside className="resultado calc-resultado presupuesto" aria-live="polite">
              <div className="presu-cabeza">
                <p className="presu-titulo">Tu presupuesto</p>
                <p>Precios sin permanencia</p>
              </div>
              <ul className="presu-lineas" id="presu-lineas">
                <li className="presu-total">
                  <span>Cuota de autónomo, con la Renta</span>
                  <span className="presu-puntos" aria-hidden="true" />
                  <strong>{prices.autonomoMes} € al mes</strong>
                </li>
              </ul>
              <p className="presu-notas" id="presu-notas" />
              <h2 className="alta-subtitulo">Si te encaja</h2>
              <ol className="alta-pasos">
                <li>Nos dejas tus datos abajo y te llamamos en 24 horas laborables.</li>
                <li>Te enviamos el presupuesto y el contrato por escrito.</li>
                <li>Nos autorizas ante Hacienda y la Seguridad Social; te guiamos.</li>
                <li>Si vienes de otra gestoría, pedimos nosotros tu documentación.</li>
              </ol>
              <p className="aclaracion">No pagas nada hasta que aceptes el presupuesto.</p>
            </aside>
          </div>
        </section>
      </main>
      <Pie contacto="#alta" />
      <script id="alta-script" dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
