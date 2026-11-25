// Estimador de la cuota del ahorro, con JavaScript mínimo (sin React en el navegador).
// Escala de la base del ahorro (estatal + autonómica) vigente en 2025 y 2026.
const script = `(function(){
  var tramos=[[6000,.19],[50000,.21],[200000,.23],[300000,.27],[Infinity,.3]];
  var num=function(s){var v=parseFloat(String(s).replace(/\\./g,"").replace(",",".").replace(/[^\\d.]/g,""));return isFinite(v)&&v>0?v:0};
  var eur=function(x){return x.toLocaleString("es-ES",{style:"currency",currency:"EUR",maximumFractionDigits:0,useGrouping:"always"})};
  function calc(){
    var g=document.getElementById("est-ganancias"),p=document.getElementById("est-perdidas"); if(!g) return;
    var base=Math.max(0,num(g.value)-num(p.value)),resto=base,desde=0,total=0;
    for(var i=0;i<tramos.length&&resto>0;i++){var q=Math.min(resto,tramos[i][0]-desde);total+=q*tramos[i][1];resto-=q;desde=tramos[i][0]}
    document.getElementById("est-total").textContent=eur(total);
    document.getElementById("est-base").textContent=eur(base);
    document.getElementById("est-medio").textContent=(base?total/base*100:0).toLocaleString("es-ES",{maximumFractionDigits:1})+" %";
  }
  document.addEventListener("input",function(e){if(e.target&&e.target.closest&&e.target.closest(".estimador"))calc()});
})();`;

export function Estimador() {
  return (
    <div className="estimador">
      <div className="calc-formulario">
        <div className="campo">
          <label htmlFor="est-ganancias">Ganancias con criptomonedas en el año (€)</label>
          <input id="est-ganancias" inputMode="decimal" placeholder="Por ejemplo, 15.000" />
        </div>
        <div className="campo">
          <label htmlFor="est-perdidas">Pérdidas del mismo año (€)</label>
          <input id="est-perdidas" inputMode="decimal" placeholder="Por ejemplo, 2.000" />
        </div>
      </div>

      <div className="resultado" aria-live="polite">
        <p className="etiqueta">Impuesto aproximado</p>
        <p className="importe-grande" id="est-total">
          0 €
        </p>
        <table className="tabla desglose">
          <tbody>
            <tr>
              <th scope="row">Ganancia neta</th>
              <td className="importe" id="est-base">
                0 €
              </td>
            </tr>
            <tr>
              <th scope="row">Tipo medio</th>
              <td className="importe" id="est-medio">
                0 %
              </td>
            </tr>
          </tbody>
        </table>
        <p className="aclaracion">
          Cálculo orientativo con la escala del ahorro de 2025 y 2026 (del 19&nbsp;% al 30&nbsp;%). No tiene en cuenta
          otros rendimientos del ahorro, como intereses o dividendos, ni pérdidas de años anteriores. Para una cifra
          exacta hay que calcular cada operación.
        </p>
      </div>
      <script id="estimador" dangerouslySetInnerHTML={{ __html: script }} />
    </div>
  );
}
