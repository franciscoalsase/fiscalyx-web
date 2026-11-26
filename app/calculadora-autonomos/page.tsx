import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { prices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Calculadora de IVA e IRPF trimestral para autónomos",
  description:
    "Calcula en un minuto el Modelo 303 (IVA) y el Modelo 130 (IRPF) de tu trimestre como autónomo en estimación directa. Gratis y sin registrarte.",
  alternates: { canonical: "/calculadora-autonomos/" },
};

// Lógica en JavaScript sencillo para que funcione igual en la web y en cualquier vista previa.
const script = `(function(){
  var eur=function(n){return (n<0?"−":"")+Math.abs(n).toLocaleString("es-ES",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:"always"})};
  var set=function(id,t){var e=document.getElementById(id);if(e)e.textContent=t};
  var ver=function(id,v){var e=document.getElementById(id);if(e)e.hidden=!v};
  function calc(){
    var f=document.getElementById("calc-autonomo"); if(!f) return;
    var num=function(id){var v=String(f.elements[id].value).replace(/\\./g,"").replace(",",".").replace(/[^\\d.]/g,"");var n=parseFloat(v);return isFinite(n)&&n>0?n:0};
    var ingresos=num("ingresos"), tipo=parseFloat(f.elements.tipo.value);
    var gIva=num("gastosIva"), gSin=num("gastosSin");
    var ret=parseFloat(f.elements.retencion.value);
    var repercutido=ingresos*tipo, soportado=gIva*0.21, iva=repercutido-soportado;
    var rendimiento=ingresos-gIva-gSin, exento130=ret>0;
    var irpf=exento130?0:Math.max(0,rendimiento*0.2);
    set("r-repercutido",eur(repercutido)); set("r-soportado","− "+eur(soportado));
    set("r-303",iva<0?eur(iva)+" a compensar":eur(iva));
    set("r-rendimiento",eur(rendimiento)); set("r-130",eur(irpf));
    set("r-retenciones",eur(ingresos*ret));
    set("r-total",eur(Math.max(0,iva)+irpf));
    ver("n-130",exento130); ver("fila-retenciones",exento130); ver("n-negativo",iva<0);
  }
  function enCalc(e){if(e.target&&e.target.closest&&e.target.closest("#calc-autonomo"))calc()}
  document.addEventListener("input",enCalc); document.addEventListener("change",enCalc);
  document.addEventListener("submit",function(e){if(e.target&&e.target.id==="calc-autonomo")e.preventDefault()});
})();`;

export default function Calculadora() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "20ch" }}>¿Cuánto pagarás este trimestre?</h1>
              <p className="entradilla">
                Una estimación del IVA (Modelo 303) y del pago a cuenta del IRPF (Modelo 130) para autónomos en
                estimación directa. Sin registrarte y sin guardar nada de lo que escribas.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" style={{ paddingTop: 0, borderTop: "none" }}>
          <div className="contenedor calculadora">
            <form id="calc-autonomo" className="calc-formulario" noValidate>
              <fieldset>
                <legend>Lo que has facturado</legend>
                <div className="campo">
                  <label htmlFor="ingresos">Ingresos del trimestre, sin IVA (€)</label>
                  <input id="ingresos" name="ingresos" inputMode="decimal" placeholder="Por ejemplo, 9.000" />
                </div>
                <div className="campo">
                  <label htmlFor="tipo">IVA de tus facturas</label>
                  <select id="tipo" name="tipo" defaultValue="0.21">
                    <option value="0.21">21 % (general)</option>
                    <option value="0.10">10 % (reducido)</option>
                    <option value="0.04">4 % (superreducido)</option>
                    <option value="0">Sin IVA (actividad exenta o clientes fuera de España)</option>
                  </select>
                </div>
                <div className="campo">
                  <label htmlFor="retencion">¿Tus facturas llevan retención de IRPF?</label>
                  <select id="retencion" name="retencion" defaultValue="0">
                    <option value="0">No, o menos del 70 % de lo que facturo</option>
                    <option value="0.15">Sí, el 15 %, en más del 70 % de lo que facturo</option>
                    <option value="0.07">Sí, el 7 % (nuevo autónomo), en más del 70 %</option>
                  </select>
                </div>
              </fieldset>

              <fieldset>
                <legend>Lo que has gastado</legend>
                <div className="campo">
                  <label htmlFor="gastosIva">
                    Gastos con IVA, sin contar el IVA (€) <span className="ayuda">material, software, gestoría, alquiler</span>
                  </label>
                  <input id="gastosIva" name="gastosIva" inputMode="decimal" placeholder="Por ejemplo, 1.500" />
                </div>
                <div className="campo">
                  <label htmlFor="gastosSin">
                    Gastos sin IVA (€) <span className="ayuda">cuota de autónomos, seguros, intereses</span>
                  </label>
                  <input id="gastosSin" name="gastosSin" inputMode="decimal" placeholder="Por ejemplo, 900" />
                </div>
              </fieldset>
            </form>

            <div className="resultado calc-resultado" aria-live="polite">
              <p className="etiqueta">Total a pagar este trimestre</p>
              <p className="importe-grande" id="r-total">0,00 €</p>

              <table className="tabla desglose">
                <tbody>
                  <tr className="calc-grupo">
                    <th scope="rowgroup" colSpan={2}>
                      Modelo 303, IVA
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">IVA de tus facturas</th>
                    <td className="importe" id="r-repercutido">
                      0,00 €
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">IVA de tus gastos</th>
                    <td className="importe" id="r-soportado">
                      − 0,00 €
                    </td>
                  </tr>
                  <tr className="calc-subtotal">
                    <th scope="row">Resultado del 303</th>
                    <td className="importe" id="r-303">
                      0,00 €
                    </td>
                  </tr>
                  <tr className="calc-grupo">
                    <th scope="rowgroup" colSpan={2}>
                      Modelo 130, IRPF
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Rendimiento (ingresos menos gastos)</th>
                    <td className="importe" id="r-rendimiento">
                      0,00 €
                    </td>
                  </tr>
                  <tr id="fila-retenciones" hidden>
                    <th scope="row">Retenciones que ya te han hecho</th>
                    <td className="importe" id="r-retenciones">
                      0,00 €
                    </td>
                  </tr>
                  <tr className="calc-subtotal">
                    <th scope="row">Pago del 130 (20 %)</th>
                    <td className="importe" id="r-130">
                      0,00 €
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="aclaracion" id="n-130" hidden>
                Si más del 70 % de lo que facturas lleva retención, no tienes que presentar el 130: tus clientes ya
                adelantan el IRPF por ti.
              </p>
              <p className="aclaracion" id="n-negativo" hidden>
                Si el IVA de tus gastos supera al de tus facturas, ese saldo se compensa en los trimestres siguientes
                o se pide su devolución en el último.
              </p>
              <p className="aclaracion">
                Estimación para un trimestre, en estimación directa y régimen general del IVA, con gastos al 21 %. El
                130 real se calcula con lo acumulado en el año y resta los pagos anteriores. Para una cifra exacta,
                hay que revisar cada factura.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion seccion-verde" aria-labelledby="calc-cta">
          <div className="contenedor calc-cta">
            <div>
              <h2 id="calc-cta">¿Prefieres que lo calculemos nosotros?</h2>
              <p className="precio-nota" style={{ maxWidth: "34rem" }}>
                Por {prices.autonomoMes} € al mes revisamos cada factura, te llamamos antes de presentar y nos ocupamos
                del 303, el 130 y tu Renta.
              </p>
            </div>
            <Link className="boton boton-claro" href="/empezar/?plan=autonomo">
              Empezar<span className="visualmente-oculto"> como autónomo</span>
            </Link>
          </div>
        </section>
      </main>
      <Pie />
      <script id="calculadora" dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
