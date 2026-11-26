import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";
import { prices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cuánto cuesta una gestoría en 2027",
  description:
    "Precios reales de gestorías online y tradicionales para autónomos y sociedades, lo que va aparte y una calculadora del coste anual completo.",
  alternates: { canonical: "/guias/cuanto-cuesta-una-gestoria/" },
};

const script = `(function(){
  function calc(){
    var f=document.getElementById("coste-gestoria"); if(!f) return;
    var num=function(n){var v=String(f.elements[n].value).replace(/\\./g,"").replace(",",".").replace(/[^\\d.]/g,"");var x=parseFloat(v);return isFinite(x)&&x>0?x:0};
    var cuota=num("cuota")*12, renta=num("renta"), alta=num("alta"), otros=num("otros");
    var base=cuota+renta+alta+otros, total=base*1.21;
    var eur=function(n){return n.toLocaleString("es-ES",{minimumFractionDigits:0,maximumFractionDigits:0,useGrouping:"always"})+" €"};
    document.getElementById("cg-total").textContent=eur(total);
    document.getElementById("cg-mes").textContent=eur(total/12)+" al mes de media, con IVA";
    document.getElementById("cg-base").textContent=eur(base)+" sin IVA";
  }
  document.addEventListener("input",function(e){if(e.target&&e.target.closest&&e.target.closest("#coste-gestoria"))calc()});
  if(document.readyState!=="loading")calc();else document.addEventListener("DOMContentLoaded",calc);
})();`;

export default function CuantoCuestaGestoria() {
  const anualNuestra = prices.autonomoMes * 12;
  return (
    <Articulo
      titulo="Cuánto cuesta una gestoría para autónomos y sociedades"
      entradilla="Las cuotas van de 20 a más de 150 euros al mes, pero la cuota es solo una parte. Te explicamos de qué depende el precio, qué suele ir aparte y cómo calcular lo que te costará de verdad al año."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Compara con nuestra cuota",
        texto: `${prices.autonomoMes} € al mes para autónomos, con la Renta, los resúmenes anuales y el alta dentro. Sin permanencia.`,
        href: "/empezar/",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Getrenn: precios de gestorías para autónomos en 2026", url: "https://www.getrenn.com/es/blog/gestoria-autonomos-precios" },
        { nombre: "Trustlocal: precio medio de una gestoría para autónomos", url: "https://trustlocal.es/coste/asesores-fiscales-coste/gestoria-para-autonomos-precios/" },
        { nombre: "Quipu: precio de una gestoría para autónomos y pymes", url: "https://getquipu.com/blog/precios-gestoria/" },
        { nombre: "Ley General Tributaria, artículo 27: recargos por declaración extemporánea", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186" },
      ]}
    >
      <h2>La respuesta corta</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Tipo de servicio</th>
              <th scope="col">Cuota habitual, sin IVA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Autónomo, gestoría online</th>
              <td>De 20 a 65 € al mes</td>
            </tr>
            <tr>
              <th scope="row">Autónomo, despacho tradicional</th>
              <td>De 50 a 150 € al mes</td>
            </tr>
            <tr>
              <th scope="row">Sociedad limitada, gestoría online</th>
              <td>De 75 a 200 € al mes</td>
            </tr>
            <tr>
              <th scope="row">Sociedad limitada, despacho tradicional</th>
              <td>De 150 a 500 € al mes</td>
            </tr>
            <tr>
              <th scope="row">Renta con criptomonedas</th>
              <td>De 75 a 700 € por ejercicio</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        Rangos de las tarifas publicadas por gestorías online y de las guías de precios del sector en 2026. Cada
        gestoría pone el límite de facturas y lo que incluye a su manera.
      </p>

      <h2>Por qué hay tanta diferencia</h2>
      <p>
        Dos cuotas de 30 y de 60 euros pueden costar lo mismo al final del año. Lo que mueve el precio es, sobre todo,
        esto:
      </p>
      <ul>
        <li>
          <strong>Si la Renta va dentro o aparte.</strong> Muchas cuotas bajas no la incluyen, y es lo primero que
          aparece en la factura de abril.
        </li>
        <li>
          <strong>Cuántas facturas entran.</strong> Los planes baratos suelen tener un tope de facturas al trimestre y
          cobran un tramo más si lo pasas.
        </li>
        <li>
          <strong>Quién te atiende.</strong> Chat con quien esté de turno, o una persona asignada que te llama antes de
          cada trimestre. Lo segundo cuesta más, y se nota.
        </li>
        <li>
          <strong>Si eres sociedad.</strong> Una SL necesita contabilidad completa, Impuesto sobre Sociedades y cuentas
          anuales, y por eso cuesta entre dos y tres veces lo de un autónomo.
        </li>
        <li>
          <strong>Si tienes trabajadores.</strong> Las nóminas casi siempre se cobran aparte, por trabajador y mes.
        </li>
      </ul>

      <h2>Servicios que casi siempre se cobran aparte</h2>
      <p>Antes de comparar cuotas, pregunta por cada uno de estos conceptos:</p>
      <ul>
        <li>La declaración de la Renta del titular, y la de tu pareja si la hacéis juntos.</li>
        <li>El alta en Hacienda y en la Seguridad Social, o el cambio desde otra gestoría.</li>
        <li>Los resúmenes anuales: 390, 190, 180 y 347.</li>
        <li>En una sociedad: el Impuesto sobre Sociedades, las cuentas anuales y la legalización de libros.</li>
        <li>Nóminas y seguros sociales.</li>
        <li>Responder a un requerimiento o una carta de Hacienda.</li>
        <li>Criptomonedas, alquileres o inversiones en tu Renta.</li>
      </ul>

      <h2>Calcula el coste anual completo</h2>
      <p>Pon la cuota que te han dado y lo que te cobrarían aparte. Te sumamos el año completo con el IVA.</p>
      <div className="calculadora calculadora-guia">
        <form id="coste-gestoria" className="calc-formulario">
          <div className="campo">
            <label htmlFor="cuota">Cuota mensual, sin IVA</label>
            <input id="cuota" name="cuota" inputMode="decimal" defaultValue="35" />
          </div>
          <div className="campo">
            <label htmlFor="renta">Renta, si va aparte</label>
            <input id="renta" name="renta" inputMode="decimal" defaultValue="60" />
          </div>
          <div className="campo">
            <label htmlFor="alta">Alta o cambio de gestoría, si lo cobran</label>
            <input id="alta" name="alta" inputMode="decimal" defaultValue="0" />
          </div>
          <div className="campo">
            <label htmlFor="otros">Otros extras al año</label>
            <input id="otros" name="otros" inputMode="decimal" defaultValue="0" />
          </div>
        </form>
        <div className="calc-resultado" aria-live="polite">
          <p className="ayuda-campo">Lo que pagas al año</p>
          <p className="veredicto">
            <span id="cg-total">—</span>
          </p>
          <p id="cg-mes" className="ayuda-campo">
            —
          </p>
          <p id="cg-base" className="ayuda-campo">
            —
          </p>
        </div>
      </div>
      <script id="coste-script" dangerouslySetInnerHTML={{ __html: script }} />
      <p>
        Como referencia, nuestra cuota de autónomo son {prices.autonomoMes} € al mes con la Renta, el alta y los
        resúmenes anuales dentro: {anualNuestra.toLocaleString("es-ES")} € al año sin IVA, sin extras para un autónomo
        sin trabajadores.
      </p>

      <h2>Cuando lo barato sale caro</h2>
      <p>
        Un trimestre presentado tarde sin que Hacienda te lo pida tiene un recargo del 1 % más otro 1 % por cada mes
        completo de retraso. Pasados doce meses, el 15 % más intereses. Si te lo reclama Hacienda antes, ya hablamos de
        sanción.
      </p>
      <p>
        Pero lo que más dinero cuesta no se ve: gastos que no se deducen porque nadie te preguntó por ellos, una base de
        cotización mal elegida o una Renta hecha con el borrador. Una gestoría que te llama antes de cada trimestre no
        es un lujo: suele pagarse sola. Te explicamos qué puedes deducir en la guía de{" "}
        <Link href="/guias/gastos-deducibles-autonomos/">gastos deducibles de autónomos</Link>.
      </p>

      <h2>Seis preguntas antes de contratar</h2>
      <ol>
        <li>¿La Renta va incluida en la cuota?</li>
        <li>¿Cuántas facturas entran, y qué pasa si me paso?</li>
        <li>¿Tendré siempre la misma persona? ¿Puedo llamarla?</li>
        <li>¿Hay permanencia o coste de baja?</li>
        <li>¿Quién firma y responde de lo que se presenta? ¿Es un profesional colegiado?</li>
        <li>¿Me dais el precio por escrito antes de empezar?</li>
      </ol>
      <p>
        Si vienes de otra gestoría, mira también <Link href="/cambiar-de-gestoria/">cómo cambiarte sin dejar nada a medias</Link>.
      </p>
    </Articulo>
  );
}
