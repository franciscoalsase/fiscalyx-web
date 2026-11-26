import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calculadora de impuestos de criptomonedas con FIFO",
  description:
    "Apunta tus compras y ventas de criptomonedas y calcula la ganancia de cada venta con el método FIFO de Hacienda y lo que pagarías en la Renta.",
  alternates: { canonical: "/calculadora-criptomonedas/" },
};

// Escala del ahorro vigente (estatal + autonómica), desde 2025.
const TRAMOS: [number, number][] = [
  [6000, 0.19],
  [50000, 0.21],
  [200000, 0.23],
  [300000, 0.27],
  [1e15, 0.3],
];

const EJEMPLO = [
  ["2025-02-10", "compra", "BTC", "0,10", "8.900"],
  ["2025-06-03", "compra", "BTC", "0,05", "4.800"],
  ["2026-01-15", "compra", "ETH", "2", "6.200"],
  ["2026-03-20", "venta", "BTC", "0,12", "11.400"],
  ["2026-09-08", "venta", "ETH", "1", "2.700"],
];

const script = `(function(){
  var T=${JSON.stringify(TRAMOS)}, EJ=${JSON.stringify(EJEMPLO)};
  var lista, plantilla;
  var num=function(v){v=String(v||"").trim().replace(/[\\s€]/g,"");if(v.indexOf(",")>-1){v=v.replace(/\\./g,"").replace(",",".")}else if(/^\\d{1,3}(\\.\\d{3})+$/.test(v)){v=v.replace(/\\./g,"")}var x=parseFloat(v);return isFinite(x)&&x>0?x:0};
  var eur=function(n){return n.toLocaleString("es-ES",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:"always"})};
  var cant=function(n){return n.toLocaleString("es-ES",{maximumFractionDigits:8,useGrouping:"always"})};
  var fecha=function(f){var p=f.split("-");return p.length===3?p[2]+"/"+p[1]+"/"+p[0]:f};
  function fila(d){
    var n=plantilla.content.firstElementChild.cloneNode(true);
    if(d){var c=n.querySelectorAll("input,select");c[0].value=d[0];c[1].value=d[1];c[2].value=d[2];c[3].value=d[3];c[4].value=d[4]}
    lista.appendChild(n);return n;
  }
  function cuota(b){var r=0,ant=0;for(var i=0;i<T.length;i++){var tope=T[i][0];if(b>ant){r+=(Math.min(b,tope)-ant)*T[i][1]}ant=tope}return r}
  function calc(){
    var anio=document.getElementById("fifo-anio").value, ops=[];
    lista.querySelectorAll(".fifo-fila").forEach(function(r,i){
      var c=r.querySelectorAll("input,select");
      var o={f:c[0].value,t:c[1].value,m:c[2].value.trim().toUpperCase(),q:num(c[3].value),e:num(c[4].value),i:i};
      if(o.f&&o.m&&o.q&&o.e)ops.push(o);
    });
    ops.sort(function(a,b){return a.f<b.f?-1:a.f>b.f?1:a.i-b.i});
    var colas={},ventas=[],avisos={};
    ops.forEach(function(o){
      var q=colas[o.m]||(colas[o.m]=[]);
      if(o.t==="compra"){q.push({q:o.q,c:o.e/o.q});return}
      var resta=o.q,coste=0;
      while(resta>1e-12&&q.length){var l=q[0],usa=Math.min(l.q,resta);coste+=usa*l.c;l.q-=usa;resta-=usa;if(l.q<=1e-12)q.shift()}
      if(resta>1e-12)avisos[o.m]=1;
      if(o.f.slice(0,4)===anio)ventas.push({f:o.f,m:o.m,q:o.q,v:o.e,c:coste,r:o.e-coste,falta:resta>1e-12});
    });
    var tb=document.getElementById("fifo-ventas");tb.innerHTML="";
    var g=0,p=0;
    ventas.forEach(function(v){
      if(v.r>=0)g+=v.r;else p+=-v.r;
      var tr=document.createElement("tr");
      tr.innerHTML="<th scope='row'>"+fecha(v.f)+"</th><td>"+cant(v.q)+" "+v.m+(v.falta?" *":"")+"</td><td>"+eur(v.v)+"</td><td>"+eur(v.c)+"</td><td class='"+(v.r>=0?"positivo":"negativo")+"'>"+(v.r>=0?"+":"")+eur(v.r)+"</td>";
      tb.appendChild(tr);
    });
    document.getElementById("fifo-vacio").hidden=ventas.length>0;
    document.getElementById("fifo-tabla-ventas").hidden=ventas.length===0;
    var neto=g-p;
    document.getElementById("fifo-ganancias").textContent=eur(g);
    document.getElementById("fifo-perdidas").textContent=p?eur(-p):eur(0);
    document.getElementById("fifo-neto").textContent=(neto>=0?"+":"")+eur(neto);
    document.getElementById("fifo-cuota").textContent=neto>0?eur(cuota(neto)):eur(0);
    document.getElementById("fifo-nota-cuota").textContent=neto>0?"Con la escala del ahorro, si no tienes otras ganancias ni rendimientos del ahorro en "+anio+".":"Hay pérdida neta: puedes compensarla con ganancias de los cuatro años siguientes.";
    var a=Object.keys(avisos);
    var av=document.getElementById("fifo-aviso");av.hidden=a.length===0;
    av.textContent=a.length?"* Vendes más "+a.join(", ")+" del que tienes apuntado. Añade las compras anteriores, aunque sean de otros años o de otros exchanges: sin ellas, el coste sale más bajo y la ganancia, más alta.":"";
  }
  function inicio(){
    lista=document.getElementById("fifo-lista");plantilla=document.getElementById("fifo-plantilla");
    if(!lista||!plantilla)return;
    EJ.forEach(fila);calc();
    document.getElementById("fifo-anadir").addEventListener("click",function(){var n=fila();n.querySelector("input").focus();calc()});
    document.getElementById("fifo-vaciar").addEventListener("click",function(){lista.innerHTML="";fila();calc()});
    lista.addEventListener("click",function(e){var b=e.target.closest(".fifo-quitar");if(b){b.closest(".fifo-fila").remove();if(!lista.children.length)fila();calc()}});
    document.getElementById("fifo").addEventListener("input",calc);
    document.getElementById("fifo").addEventListener("change",calc);
    document.getElementById("fifo-anio").addEventListener("change",calc);
  }
  if(document.readyState!=="loading")inicio();else document.addEventListener("DOMContentLoaded",inicio);
})();`;

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de impuestos de criptomonedas con FIFO",
  url: `${site.url}/calculadora-criptomonedas/`,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  provider: { "@type": "AccountingService", name: "Fiscalyx", url: site.url },
};

export default function CalculadoraCripto() {
  return (
    <>
      <Cabecera actual="/criptomonedas/" />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ display: "block" }}>
            <h1 style={{ maxWidth: "20ch" }}>Calcula tus impuestos de criptomonedas con FIFO</h1>
            <p className="entradilla">
              Apunta tus compras y ventas en euros. Te calculamos la ganancia o la pérdida de cada venta como lo hace
              Hacienda: lo primero que compraste es lo primero que vendes. Todo se queda en tu navegador.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="fifo-titulo">
          <div className="contenedor">
            <h2 id="fifo-titulo" className="visualmente-oculto">
              Tus operaciones
            </h2>
            <form id="fifo" className="fifo">
              <div className="fifo-cabecera" aria-hidden="true">
                <span>Fecha</span>
                <span>Operación</span>
                <span>Moneda</span>
                <span>Cantidad</span>
                <span>Importe en €, con comisiones</span>
                <span />
              </div>
              <div id="fifo-lista" className="fifo-lista" />
              <template id="fifo-plantilla">
                <div className="fifo-fila">
                  <label>
                    <span className="fifo-etiqueta">Fecha</span>
                    <input type="date" required />
                  </label>
                  <label>
                    <span className="fifo-etiqueta">Operación</span>
                    <select defaultValue="compra">
                      <option value="compra">Compra</option>
                      <option value="venta">Venta</option>
                    </select>
                  </label>
                  <label>
                    <span className="fifo-etiqueta">Moneda</span>
                    <input type="text" placeholder="BTC" autoCapitalize="characters" spellCheck={false} />
                  </label>
                  <label>
                    <span className="fifo-etiqueta">Cantidad</span>
                    <input type="text" inputMode="decimal" placeholder="0,5" />
                  </label>
                  <label>
                    <span className="fifo-etiqueta">Importe en €, con comisiones</span>
                    <input type="text" inputMode="decimal" placeholder="1.200" />
                  </label>
                  <button type="button" className="fifo-quitar" aria-label="Quitar esta operación">
                    ×
                  </button>
                </div>
              </template>
              <div className="fifo-acciones">
                <button type="button" id="fifo-anadir" className="boton boton-secundario">
                  Añadir operación
                </button>
                <button type="button" id="fifo-vaciar" className="enlace-sencillo">
                  Empezar de cero
                </button>
              </div>
            </form>
            <p className="ayuda-campo" style={{ marginTop: "1rem" }}>
              ¿Cambiaste una cripto por otra? Hacienda lo trata como una venta y una compra: apunta la venta de la que
              entregas y la compra de la que recibes, por su valor en euros ese día.
            </p>
          </div>
        </section>

        <section className="seccion" aria-labelledby="fifo-resultado-titulo">
          <div className="contenedor">
            <div className="fifo-resultado-cabeza">
              <h2 id="fifo-resultado-titulo">Tu resultado</h2>
              <label className="fifo-anio">
                Ejercicio{" "}
                <select id="fifo-anio" defaultValue="2026">
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </label>
            </div>
            <div className="fifo-resumen" aria-live="polite">
              <div>
                <p className="ayuda-campo">Ganancias</p>
                <p id="fifo-ganancias" className="fifo-cifra">—</p>
              </div>
              <div>
                <p className="ayuda-campo">Pérdidas</p>
                <p id="fifo-perdidas" className="fifo-cifra">—</p>
              </div>
              <div>
                <p className="ayuda-campo">Resultado neto</p>
                <p id="fifo-neto" className="fifo-cifra">—</p>
              </div>
              <div className="fifo-resumen-cuota">
                <p className="ayuda-campo">Cuota estimada en la Renta</p>
                <p className="fifo-cifra">
                  <mark id="fifo-cuota">—</mark>
                </p>
                <p id="fifo-nota-cuota" className="ayuda-campo" />
              </div>
            </div>
            <p id="fifo-aviso" className="fifo-aviso" hidden />
            <p id="fifo-vacio" className="ayuda-campo" hidden>
              No hay ventas en este ejercicio. Las compras solas no tributan.
            </p>
            <div className="tabla-scroll" id="fifo-tabla-ventas">
              <table className="tabla tabla-guia fifo-ventas">
                <caption className="visualmente-oculto">Resultado de cada venta</caption>
                <thead>
                  <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Venta</th>
                    <th scope="col">Valor de venta</th>
                    <th scope="col">Coste según FIFO</th>
                    <th scope="col">Resultado</th>
                  </tr>
                </thead>
                <tbody id="fifo-ventas" />
              </table>
            </div>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="fifo-limites">
          <div className="contenedor dos-columnas">
            <div>
              <h2 id="fifo-limites">Límites de esta calculadora</h2>
              <ul className="lista-incluye">
                <li>
                  <div>
                    <strong>El staking y las recompensas</strong>
                    <br />
                    <span>
                      Tributan como rendimiento del capital mobiliario cuando las recibes. Apúntalas aquí como compra
                      a su valor de ese día para que su coste cuente cuando las vendas.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Tus otras ganancias del ahorro</strong>
                    <br />
                    <span>
                      Acciones, fondos o dividendos suman en la misma base y pueden subir el tramo o compensar
                      pérdidas.
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <strong>Las comisiones pagadas en cripto</strong>
                    <br />
                    <span>Súmalas al importe en euros de la operación en la que las pagaste.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2>Con cientos de operaciones</h2>
              <p style={{ marginTop: "1.25rem" }}>
                A mano no hay forma. Importamos el historial de tus exchanges y carteras, calculamos cada operación y
                te entregamos el informe que justifica tu Renta ante Hacienda. El precio te lo damos antes de empezar.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                <Link className="boton boton-principal" href="/criptomonedas/#presupuesto">
                  Ver tu precio
                </Link>
              </p>
              <p style={{ marginTop: "1.25rem" }}>
                Cómo funciona todo esto, en la <Link href="/guias/declarar-criptomonedas-renta/">guía para declarar criptomonedas</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion">
          <div className="contenedor texto-estrecho">
            <p className="nota-fuente">
              Método FIFO del artículo 37.2 de la Ley del IRPF, que Hacienda aplica a las criptomonedas. Escala del ahorro vigente: 19 % hasta 6.000 €, 21 % hasta
              50.000 €, 23 % hasta 200.000 €, 27 % hasta 300.000 € y 30 % a partir de ahí. Es una estimación: no
              sustituye a revisar tu caso.
            </p>
          </div>
        </section>
      </main>
      <Pie cierre contacto="/empezar/?plan=cripto" />
      <script id="fifo-script" dangerouslySetInnerHTML={{ __html: script }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
