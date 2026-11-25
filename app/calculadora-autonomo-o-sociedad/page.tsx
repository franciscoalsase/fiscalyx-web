import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { prices } from "@/lib/site";

export const metadata: Metadata = {
  title: "¿Autónomo o sociedad limitada? Calculadora 2026",
  description:
    "Compara cuánto pagarías de IRPF, Impuesto sobre Sociedades y Seguridad Social como autónomo o con una SL, con las cifras de 2026. Gratis y sin registrarte.",
  alternates: { canonical: "/calculadora-autonomo-o-sociedad/" },
};

const extraGestoria = (prices.sociedadMes - prices.autonomoMes) * 12;

// Cifras de 2026. Escala general del IRPF (estatal más autonómica de referencia),
// tramos de cotización por rendimientos y tipos de microempresa del Impuesto sobre Sociedades.
const script = `(function(){
  var EXTRA=${extraGestoria};
  var eur=function(n){return Math.round(n).toLocaleString("es-ES",{style:"currency",currency:"EUR",maximumFractionDigits:0,useGrouping:"always"})};
  var set=function(id,t){var e=document.getElementById(id);if(e)e.textContent=t};
  function escala(b,tr){var t=0,prev=0;for(var i=0;i<tr.length;i++){var lim=tr[i][0],tipo=tr[i][1];if(b>prev){t+=(Math.min(b,lim)-prev)*tipo}prev=lim}return t}
  var GENERAL=[[12450,.19],[20200,.24],[35200,.30],[60000,.37],[300000,.45],[1e15,.47]];
  var AHORRO=[[6000,.19],[50000,.21],[200000,.23],[300000,.27],[1e15,.30]];
  var IS=[[50000,.19],[1e15,.21]];
  var TRAMOS=[[670,653.59],[900,718.95],[1166.7,849.67],[1300,950.98],[1500,960.78],[1700,960.78],[1850,1143.79],[2030,1209.15],[2330,1274.51],[2760,1356.21],[3190,1437.91],[3620,1519.61],[4050,1601.31],[6000,1732.03],[1e15,1928.10]];
  function baseMin(mes){for(var i=0;i<TRAMOS.length;i++){if(mes<=TRAMOS[i][0])return TRAMOS[i][1]}return 1928.10}
  function irpf(base){base=Math.max(0,base);return Math.max(0,escala(base,GENERAL)-escala(5550,GENERAL))}
  function calc(){
    var f=document.getElementById("calc-forma"); if(!f) return;
    var num=function(id){var v=String(f.elements[id].value).replace(/\\./g,"").replace(",",".").replace(/[^\\d.]/g,"");var n=parseFloat(v);return isFinite(n)&&n>0?n:0};
    var benef=num("beneficio"), sueldo=Math.min(num("sueldo"),benef), reparte=f.elements.reparto.value==="si";
    // Autónomo persona física
    var ssA=baseMin(benef*0.93/12)*0.315*12;
    var rn=Math.max(0,benef-ssA);
    var irpfA=irpf(rn-Math.min(rn*0.05,2000));
    var netoA=benef-ssA-irpfA;
    // Sociedad: socio administrador con sueldo
    var ssS=Math.max(1424.40,baseMin(sueldo*0.97/12))*0.315*12;
    var irpfS=irpf(sueldo-ssS-2000);
    var bSL=Math.max(0,benef-sueldo-EXTRA);
    var isS=escala(bSL,IS);
    var queda=bSL-isS;
    var divS=reparte?escala(queda,AHORRO):0;
    var personal=sueldo-ssS-irpfS+(reparte?queda-divS:0);
    var enSL=reparte?0:queda;
    var totA=ssA+irpfA, totS=ssS+irpfS+isS+divS+EXTRA;
    set("a-ss",eur(ssA)); set("a-irpf",eur(irpfA)); set("a-is","—"); set("a-div","—"); set("a-ges","—");
    set("a-total",eur(totA)); set("a-bolsillo",eur(netoA)); set("a-sl","—");
    set("s-ss",eur(ssS)); set("s-irpf",eur(irpfS)); set("s-is",eur(isS)); set("s-div",reparte?eur(divS):"—"); set("s-ges",eur(EXTRA));
    set("s-total",eur(totS)); set("s-bolsillo",eur(personal)); set("s-sl",reparte?"—":eur(enSL));
    var dif=totA-totS, v=document.getElementById("veredicto"), d=document.getElementById("veredicto-detalle");
    if(benef<=0){v.textContent="Escribe tu beneficio anual";d.textContent="";return}
    if(Math.abs(dif)<600){v.textContent="Prácticamente lo mismo";d.textContent="La diferencia es de "+eur(Math.abs(dif))+" al año. Con estos números, el resto de factores pesan más que el impuesto."}
    else if(dif>0){v.textContent="La sociedad te ahorra "+eur(dif)+" al año";d.textContent=reparte?"Aun repartiendo todo el beneficio como dividendos.":"Siempre que dejes "+eur(enSL)+" dentro de la sociedad. Si lo repartes, cambia el resultado: prueba la otra opción."}
    else{v.textContent="Como autónomo pagas "+eur(-dif)+" menos al año";d.textContent="Con este beneficio, el coste de la sociedad y la cuota del autónomo societario pesan más que el ahorro en impuestos."}
  }
  function en(e){if(e.target&&e.target.closest&&e.target.closest("#calc-forma"))calc()}
  document.addEventListener("input",en); document.addEventListener("change",en);
  document.addEventListener("submit",function(e){if(e.target&&e.target.id==="calc-forma")e.preventDefault()});
  if(document.readyState!=="loading")calc();else document.addEventListener("DOMContentLoaded",calc);
})();`;

const filas: [string, string, string][] = [
  ["Seguridad Social", "a-ss", "s-ss"],
  ["IRPF", "a-irpf", "s-irpf"],
  ["Impuesto sobre Sociedades", "a-is", "s-is"],
  ["Impuesto sobre los dividendos", "a-div", "s-div"],
  ["Gestoría (diferencia)", "a-ges", "s-ges"],
];

export default function CalculadoraForma() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "22ch" }}>¿Autónomo o sociedad limitada?</h1>
              <p className="entradilla">
                Escribe lo que gana tu negocio en un año y el sueldo que te pagarías. Te enseñamos cuánto se va en
                impuestos y cotizaciones en cada caso, con las cifras de 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" style={{ paddingTop: 0, borderTop: "none" }}>
          <div className="contenedor calculadora">
            <form id="calc-forma" className="calc-formulario" noValidate>
              <fieldset>
                <legend>Tu negocio</legend>
                <div className="campo">
                  <label htmlFor="beneficio">
                    Beneficio anual (€){" "}
                    <span className="ayuda">lo que facturas menos tus gastos, antes de impuestos y de tu cuota</span>
                  </label>
                  <input id="beneficio" name="beneficio" inputMode="decimal" defaultValue="60.000" />
                </div>
              </fieldset>

              <fieldset>
                <legend>Si tuvieras una sociedad</legend>
                <div className="campo">
                  <label htmlFor="sueldo">
                    Sueldo anual que te pagarías (€){" "}
                    <span className="ayuda">lo que necesitas para vivir; el resto se queda en la sociedad</span>
                  </label>
                  <input id="sueldo" name="sueldo" inputMode="decimal" defaultValue="30.000" />
                </div>
                <div className="campo">
                  <label htmlFor="reparto">¿Qué haces con el beneficio que queda?</label>
                  <select id="reparto" name="reparto" defaultValue="no">
                    <option value="no">Lo dejo en la sociedad</option>
                    <option value="si">Lo reparto como dividendos</option>
                  </select>
                </div>
              </fieldset>
            </form>

            <div className="resultado calc-resultado" aria-live="polite">
              <p className="veredicto" id="veredicto">
                La sociedad te ahorra 4.474 € al año
              </p>
              <p className="aclaracion" id="veredicto-detalle" style={{ marginTop: "0.4rem" }}>
                Siempre que dejes 23.522 € dentro de la sociedad.
              </p>

              <div className="tabla-scroll">
                <table className="tabla desglose comparativa">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span className="visualmente-oculto">Concepto</span>
                      </th>
                      <th scope="col">Autónomo</th>
                      <th scope="col">Sociedad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filas.map(([n, a, s]) => (
                      <tr key={a}>
                        <th scope="row">{n}</th>
                        <td className="importe" id={a}>
                          —
                        </td>
                        <td className="importe" id={s}>
                          —
                        </td>
                      </tr>
                    ))}
                    <tr className="calc-subtotal">
                      <th scope="row">Total al año</th>
                      <td className="importe" id="a-total">
                        —
                      </td>
                      <td className="importe" id="s-total">
                        —
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Te llega a ti</th>
                      <td className="importe" id="a-bolsillo">
                        —
                      </td>
                      <td className="importe" id="s-bolsillo">
                        —
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Queda en la sociedad</th>
                      <td className="importe" id="a-sl">
                        —
                      </td>
                      <td className="importe" id="s-sl">
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="aclaracion">
                Estimación orientativa con las cifras de 2026: escala general del IRPF con el mínimo personal,
                cotización por la base mínima de tu tramo (y la del autónomo societario, 1.424,40 € al mes), tipos de
                microempresa del Impuesto sobre Sociedades (19 % y 21 %) y la diferencia entre nuestras cuotas de
                gestoría. No incluye deducciones personales ni la escala propia de tu comunidad autónoma.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="forma-claves">
          <div className="contenedor texto-estrecho">
            <h2 id="forma-claves">Lo que la calculadora no ve</h2>
            <p>
              El impuesto es solo una parte de la decisión. Una sociedad limita tu responsabilidad a lo que aportes,
              da otra imagen ante clientes grandes y facilita entrar con socios. A cambio, exige contabilidad
              completa, cuentas anuales en el Registro Mercantil y separar siempre tu dinero del de la empresa.
            </p>
            <p>
              Lo explicamos con detalle en{" "}
              <Link href="/guias/autonomo-o-sociedad/">¿Autónomo o sociedad limitada? Cuándo compensa</Link>, y si
              decides dar el paso, en <Link href="/constituir-sociedad/">cómo constituir una SL</Link>.
            </p>
          </div>
        </section>

        <section className="seccion seccion-verde" aria-labelledby="forma-cta">
          <div className="contenedor calc-cta">
            <div>
              <h2 id="forma-cta">Hagamos la cuenta con tus números reales.</h2>
              <p className="precio-nota" style={{ maxWidth: "36rem" }}>
                En una llamada revisamos tu facturación, tus gastos y tus planes, y te decimos si te compensa la
                sociedad y desde cuándo. Sin compromiso.
              </p>
            </div>
            <Link className="boton boton-claro" href="/sociedades/#contacto">
              Pedir presupuesto
            </Link>
          </div>
        </section>
      </main>
      <Pie />
      <script id="comparador" dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
