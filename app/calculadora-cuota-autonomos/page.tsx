import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";

export const metadata: Metadata = {
  title: "Calculadora de la cuota de autónomos",
  description:
    "Calcula tu tramo y tu cuota de autónomos según tus rendimientos netos, con la tabla de 2026. También para societarios y tarifa plana.",
  alternates: { canonical: "/calculadora-cuota-autonomos/" },
};

// Tabla de 2026 (Orden PJC/297/2026): límite superior de rendimientos netos mensuales y base mínima.
const TRAMOS: [number, number, string][] = [
  [670, 653.59, "Reducida 1"],
  [900, 718.95, "Reducida 2"],
  [1166.7, 849.67, "Reducida 3"],
  [1300, 950.98, "General 1"],
  [1500, 960.78, "General 2"],
  [1700, 960.78, "General 3"],
  [1850, 1143.79, "General 4"],
  [2030, 1209.15, "General 5"],
  [2330, 1274.51, "General 6"],
  [2760, 1356.21, "General 7"],
  [3190, 1437.91, "General 8"],
  [3620, 1519.61, "General 9"],
  [4050, 1601.31, "General 10"],
  [6000, 1732.03, "General 11"],
  [1e15, 1928.1, "General 12"],
];

const script = `(function(){
  var T=${JSON.stringify(TRAMOS)};
  var TIPO=0.315, SOCIETARIO=1424.40, PLANA=88.64;
  var eur=function(n,d){return n.toLocaleString("es-ES",{style:"currency",currency:"EUR",minimumFractionDigits:d,maximumFractionDigits:d,useGrouping:"always"})};
  var set=function(id,t){var e=document.getElementById(id);if(e)e.textContent=t};
  function calc(){
    var f=document.getElementById("cuota-forma"); if(!f) return;
    var num=function(n){var v=String(f.elements[n].value).replace(/\\./g,"").replace(",",".").replace(/[^\\d.]/g,"");var x=parseFloat(v);return isFinite(x)&&x>0?x:0};
    var ingresos=num("ingresos"), gastos=num("gastos"), tipo=f.elements.tipo.value;
    var neto=Math.max(0,ingresos-gastos);
    var computable=neto*(tipo==="societario"?0.97:0.93)/12;
    var t=T.find(function(r){return computable<=r[0]})||T[T.length-1];
    var base=tipo==="societario"?Math.max(SOCIETARIO,t[1]):t[1];
    var cuota=tipo==="plana"?PLANA:base*TIPO;
    set("cu-mes",eur(cuota,2));
    set("cu-anio",eur(cuota*12,0));
    set("cu-rend",eur(computable,0));
    set("cu-tramo",tipo==="plana"?"Tarifa plana (primer año)":t[2]);
    set("cu-base",tipo==="plana"?"—":eur(base,2));
    var nota=document.getElementById("cu-nota");
    nota.textContent=tipo==="plana"?"Durante los primeros doce meses pagas la tarifa plana. Si en ese año tus rendimientos netos quedan por debajo del salario mínimo, puedes pedir doce meses más.":tipo==="societario"?"Como socio y administrador de tu sociedad, tu base no puede bajar de 1.424,40 € al mes, ganes lo que ganes.":"Es la cuota mínima de tu tramo. Puedes elegir una base más alta para mejorar tus prestaciones.";
  }
  function en(e){if(e.target&&e.target.closest&&e.target.closest("#cuota-forma"))calc()}
  document.addEventListener("input",en);document.addEventListener("change",en);
  document.addEventListener("submit",function(e){if(e.target&&e.target.id==="cuota-forma")e.preventDefault()});
  if(document.readyState!=="loading")calc();else document.addEventListener("DOMContentLoaded",calc);
})();`;

export default function CalculadoraCuota() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "20ch" }}>¿Cuánto pagarás de cuota de autónomos?</h1>
              <p className="entradilla">
                Escribe lo que facturas y lo que gastas en un año. Te decimos en qué tramo estás y cuál es tu cuota mínima
                con la tabla vigente, la de 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" style={{ paddingTop: 0, borderTop: "none" }}>
          <div className="contenedor calculadora">
            <form id="cuota-forma" className="calc-formulario" noValidate>
              <fieldset>
                <legend>Tu actividad en un año</legend>
                <div className="campo">
                  <label htmlFor="ingresos">Ingresos (€, sin IVA)</label>
                  <input id="ingresos" name="ingresos" inputMode="decimal" defaultValue="36.000" />
                </div>
                <div className="campo">
                  <label htmlFor="gastos">
                    Gastos deducibles (€){" "}
                    <span className="ayuda">sin contar la propia cuota de autónomos</span>
                  </label>
                  <input id="gastos" name="gastos" inputMode="decimal" defaultValue="6.000" />
                </div>
              </fieldset>
              <fieldset>
                <legend>Tu situación</legend>
                <div className="opciones opciones-columna">
                  <label className="opcion">
                    <input type="radio" name="tipo" value="general" defaultChecked /> Autónomo
                  </label>
                  <label className="opcion">
                    <input type="radio" name="tipo" value="societario" /> Socio y administrador de una sociedad
                  </label>
                  <label className="opcion">
                    <input type="radio" name="tipo" value="plana" /> Me doy de alta por primera vez (tarifa plana)
                  </label>
                </div>
              </fieldset>
            </form>

            <div className="resultado calc-resultado" aria-live="polite">
              <p className="etiqueta">Cuota mínima al mes</p>
              <p className="importe-grande" id="cu-mes">
                —
              </p>
              <table className="tabla desglose">
                <tbody>
                  <tr>
                    <th scope="row">Al año</th>
                    <td className="importe" id="cu-anio">
                      —
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Rendimiento neto mensual</th>
                    <td className="importe" id="cu-rend">
                      —
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Tu tramo</th>
                    <td className="importe" id="cu-tramo">
                      —
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Base mínima</th>
                    <td className="importe" id="cu-base">
                      —
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="aclaracion" id="cu-nota"></p>
              <p className="aclaracion">
                Cálculo orientativo con la tabla de 2026, que seguirá de referencia hasta que se publiquen las bases de
                2027: rendimiento neto menos un 7 % de gastos genéricos (un 3 % si eres societario), dividido entre doce,
                y cuota del 31,50 % de la base.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="cuota-como">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="cuota-como">Cómo hace la cuenta la calculadora</h2>
            <p>
              Parte de tus ingresos menos tus gastos del año, que es tu rendimiento neto. A esa cifra le resta un 7&nbsp;%
              de gastos genéricos, o un 3&nbsp;% si eres autónomo societario, y la divide entre doce. El resultado es tu
              rendimiento mensual, y según en qué tramo caiga te corresponde una base mínima de cotización. Tu cuota es
              el 31,5&nbsp;% de esa base.
            </p>
            <div className="tabla-scroll" style={{ marginTop: "1.25rem" }}>
              <table className="tabla">
                <caption>Tramos de 2026: rendimiento neto mensual, base mínima y cuota mínima</caption>
                <thead>
                  <tr>
                    <th scope="col">Tramo</th>
                    <th scope="col">Rendimiento mensual hasta</th>
                    <th scope="col">Base mínima</th>
                    <th scope="col">Cuota mínima al mes</th>
                  </tr>
                </thead>
                <tbody>
                  {TRAMOS.map(([hasta, base, nombre]) => (
                    <tr key={nombre}>
                      <th scope="row">{nombre}</th>
                      <td>{hasta > 1e12 ? "Más de 6.000 €" : `${hasta.toLocaleString("es-ES", { minimumFractionDigits: hasta % 1 ? 2 : 0, maximumFractionDigits: 2 })} €`}</td>
                      <td>{base.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</td>
                      <td>{(Math.round(base * 0.315 * 100) / 100).toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="nota-tabla">
              Fuente: Orden PJC/297/2026, de cotización a la Seguridad Social para 2026. Si eres socio y administrador de
              tu sociedad, tu base no baja de 1.424,40&nbsp;€ al mes; en tu primer año puedes pagar la tarifa plana de
              88,64&nbsp;€.
            </p>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="cuota-saber">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="cuota-saber">La cuota se regulariza con tu Renta</h2>
            <p>
              La cuota se ajusta a lo que ganas en realidad. Durante el año cotizas por una previsión y, cuando Hacienda tiene
              tu Renta, la Seguridad Social regulariza: te devuelve si pagaste de más y te reclama si pagaste de menos.
              Puedes cambiar de base hasta seis veces al año para que no haya sorpresas.
            </p>
            <p>
              Lo explicamos tramo a tramo en{" "}
              <Link href="/guias/cuota-autonomos-2027/">Cuota de autónomos en 2027: tramos y cómo se calcula</Link>. Y si
              estás pensando en crear una sociedad, compara antes con la{" "}
              <Link href="/calculadora-autonomo-o-sociedad/">calculadora de autónomo o sociedad</Link>.
            </p>
          </div>
        </section>
      </main>
      <Pie cierre />
      <script id="cuota" dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
