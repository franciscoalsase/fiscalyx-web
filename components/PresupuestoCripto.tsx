import { prices } from "@/lib/site";

// Presupuesto orientativo para la Renta con criptomonedas, con los precios publicados en lib/site.ts.
// Sin React en el navegador: un script pequeño escucha los cambios del formulario.
const renta = prices.cripto[0].tiers;
const modelo721 = prices.cripto[1].tiers[0].price;
const diagnostico = prices.cripto[2].tiers[0].price;

const script = `(function(){
  var T=${JSON.stringify(renta.map((t) => ({ l: t.label, p: t.price })))};
  var P721=${JSON.stringify(modelo721)}, PDIAG=${JSON.stringify(diagnostico)};
  var set=function(id,t){var e=document.getElementById(id);if(e)e.textContent=t};
  function calc(){
    var f=document.getElementById("presupuesto-cripto"); if(!f) return;
    var ops=(f.querySelector("input[name=ops]:checked")||{}).value||"200";
    var staking=f.elements.staking.checked, avanzado=f.elements.defi.checked||f.elements.nft.checked||f.elements.futuros.checked;
    var nivel=ops==="200"?0:ops==="2000"?1:2;
    if(staking&&nivel<1)nivel=1;
    if(avanzado)nivel=2;
    var t=T[nivel];
    set("pc-precio",t.p); set("pc-plan","Renta con criptomonedas. Tu tramo: "+t.l);
    var extras=[];
    if(f.elements.m721.checked)extras.push("Modelo 721: "+P721);
    var anios=f.elements.anios.value;
    if(anios!=="0")extras.push("Años anteriores sin declarar: diagnóstico de "+PDIAG+", que te descontamos si seguimos, y presupuesto cerrado");
    var ul=document.getElementById("pc-extras"); ul.innerHTML="";
    extras.forEach(function(x){var li=document.createElement("li");li.textContent=x;ul.appendChild(li)});
    document.getElementById("pc-extras-bloque").hidden=!extras.length;
  }
  function en(e){if(e.target&&e.target.closest&&e.target.closest("#presupuesto-cripto"))calc()}
  document.addEventListener("change",en);document.addEventListener("input",en);
  if(document.readyState!=="loading")calc();else document.addEventListener("DOMContentLoaded",calc);
})();`;

export function PresupuestoCripto() {
  return (
    <div className="calculadora presupuesto-cripto">
      <form id="presupuesto-cripto" className="calc-formulario" noValidate>
        <fieldset>
          <legend>¿Cuántas operaciones hiciste en el año?</legend>
          <p className="ayuda-campo">Compras, ventas, permutas y recompensas, sumando todos los exchanges y monederos.</p>
          <div className="opciones">
            <label className="opcion">
              <input type="radio" name="ops" value="200" defaultChecked /> Hasta 200
            </label>
            <label className="opcion">
              <input type="radio" name="ops" value="2000" /> De 200 a 2.000
            </label>
            <label className="opcion">
              <input type="radio" name="ops" value="mas" /> Más de 2.000
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>¿Qué más hiciste?</legend>
          <div className="opciones opciones-columna">
            <label className="opcion">
              <input type="checkbox" name="staking" /> Staking o préstamos en un exchange
            </label>
            <label className="opcion">
              <input type="checkbox" name="defi" /> DeFi: pools de liquidez, puentes o protocolos
            </label>
            <label className="opcion">
              <input type="checkbox" name="nft" /> Compra o venta de NFT
            </label>
            <label className="opcion">
              <input type="checkbox" name="futuros" /> Futuros, margen o derivados
            </label>
            <label className="opcion">
              <input type="checkbox" name="m721" /> Más de 50.000 € en plataformas extranjeras a 31 de diciembre
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>¿Hay años anteriores sin declarar?</legend>
          <div className="campo">
            <label htmlFor="pc-anios" className="visualmente-oculto">
              Años anteriores sin declarar
            </label>
            <select id="pc-anios" name="anios" defaultValue="0">
              <option value="0">No, todo está declarado</option>
              <option value="1">Sí, uno</option>
              <option value="2">Sí, dos o más</option>
            </select>
          </div>
        </fieldset>
      </form>

      <div className="resultado calc-resultado" aria-live="polite">
        <p className="etiqueta" id="pc-plan">
          Renta con criptomonedas. Tu tramo: {renta[0].label}
        </p>
        <p className="importe-grande" id="pc-precio">
          {renta[0].price}
        </p>
        <p className="aclaracion">
          Sin IVA. Incluye el informe de trazabilidad, el cálculo de ganancias y pérdidas con FIFO, la presentación de la
          Renta y el archivo para justificarlo ante Hacienda.
        </p>
        <div id="pc-extras-bloque" hidden>
          <p className="etiqueta" style={{ marginTop: "1.25rem" }}>
            Además
          </p>
          <ul id="pc-extras" className="pc-extras"></ul>
        </div>
        <a className="boton boton-principal" href="#contacto" style={{ marginTop: "1.5rem" }}>
          Pedir este presupuesto por escrito
        </a>
      </div>
      <script id="presupuesto" dangerouslySetInnerHTML={{ __html: script }} />
    </div>
  );
}
