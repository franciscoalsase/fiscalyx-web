import type { Metadata } from "next";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "VeriFactu: 2027 o 2028, qué fecha te toca",
  description:
    "Un real decreto-ley retrasa VeriFactu al 6 de octubre de 2028, pendiente de convalidación. Las dos fechas posibles para sociedades y autónomos y qué hacer ya.",
  alternates: { canonical: "/guias/factura-electronica-verifactu/" },
};

export default function FacturaElectronica() {
  return (
    <Articulo
      titulo="VeriFactu y factura electrónica: qué cambia y cuándo te toca"
      entradilla="Un real decreto-ley publicado el 25 de noviembre de 2026 retrasa VeriFactu al 6 de octubre de 2028. Ya está en vigor, pero tiene que convalidarse en los próximos 30 días: si no se convalida, vuelven las fechas de 2027. Te contamos las dos posibilidades y qué conviene hacer mientras tanto."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Llega a tu fecha con todo preparado",
        texto: "Te ayudamos a elegir un programa de facturación adaptado y revisamos tus primeras facturas para que salgan bien desde el primer día.",
        href: "/empezar/?plan=autonomo",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Real Decreto-ley 43/2026, de 24 de noviembre (BOE 25/11/2026)", url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-24701" },
        { nombre: "Agencia Tributaria: medidas del Real Decreto-ley 43/2026", url: "https://sede.agenciatributaria.gob.es/Sede/todas-noticias/2026/noviembre/25/medidas-tributarias-introducidas-real-decreto-432026.html" },
        { nombre: "Nota de Hacienda del 5 de octubre de 2026 y calendario anterior", url: "https://www.infoautonomos.com/blog/retraso-verifactu/" },
        { nombre: "Facturación electrónica obligatoria B2B: Orden HAC/1028/2026 y plazos", url: "https://www.cuatrecasas.com/es/spain/fiscalidad/art/facturacion-electronica-obligatoria-b2b" },
        { nombre: "Reglamento de facturación electrónica B2B (Real Decreto 238/2026)", url: "https://www.cuatrecasas.com/es/global/fiscalidad/art/reglamento-facturacion-electronica-obligatorio-operaciones" },
      ]}
    >
      <h2>Las fechas, de un vistazo</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Obligación</th>
              <th scope="col">A quién</th>
              <th scope="col">Desde</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">VeriFactu</th>
              <td>Sociedades (Impuesto sobre Sociedades)</td>
              <td>6 de octubre de 2028 si se convalida el decreto; si no, 1 de enero de 2027</td>
            </tr>
            <tr>
              <th scope="row">VeriFactu</th>
              <td>Autónomos y demás obligados</td>
              <td>6 de octubre de 2028 si se convalida el decreto; si no, 1 de julio de 2027</td>
            </tr>
            <tr>
              <th scope="row">Factura electrónica</th>
              <td>Empresas con más de 8 millones de facturación</td>
              <td>6 de octubre de 2027</td>
            </tr>
            <tr>
              <th scope="row">Factura electrónica</th>
              <td>Resto de empresas y autónomos</td>
              <td>6 de octubre de 2028</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>VeriFactu: el programa con el que facturas</h2>
      <p>
        VeriFactu es el nombre popular del reglamento que regula los sistemas informáticos de facturación. No cambia
        lo que tiene que decir una factura, sino cómo se genera: el programa debe guardar cada factura de forma que
        no se pueda alterar ni borrar sin dejar rastro, encadenarla con la anterior y añadir un código QR que
        cualquier cliente puede comprobar.
      </p>
      <p>
        El programa puede funcionar de dos maneras. En la modalidad VeriFactu, envía cada factura a la Agencia
        Tributaria en el momento en que se emite. En la otra modalidad, guarda los registros con firma electrónica y
        los pone a disposición de Hacienda si los pide. La primera es la más sencilla para un autónomo.
      </p>

      <h3>A quién afecta</h3>
      <p>
        A los contribuyentes del Impuesto sobre Sociedades, a los autónomos en el IRPF que facturan con un programa y
        a los no residentes con establecimiento permanente. Quedan fuera quienes ya llevan sus libros de IVA por el
        Suministro Inmediato de Información, el SII.
      </p>
      <p>
        Si hoy facturas con una hoja de cálculo o un procesador de texto, conviene que te cambies antes de tu fecha:
        no generan los registros que exige el reglamento.
      </p>

      <h3>El retraso a 2028 está en vigor, pero pendiente de convalidación</h3>
      <p>
        El calendario inicial preveía 2026. El Real Decreto-ley 15/2025 lo llevó al 1 de enero de 2027 para las
        sociedades y al 1 de julio de 2027 para los autónomos. El Real Decreto-ley 43/2026, de 24 de noviembre,
        publicado en el BOE el 25 de noviembre y en vigor desde el día siguiente, fija una sola fecha para todos: los
        programas de facturación tienen que cumplir el reglamento antes del 6 de octubre de 2028.
      </p>
      <p>
        Un real decreto-ley es provisional: el Congreso tiene 30 días para convalidarlo o derogarlo. Con las Cortes
        disueltas por las elecciones generales, esa votación corresponde a la Diputación Permanente, que vota el
        decreto entero, sin separar medidas. Si se convalida, la fecha de 2028 queda firme. Si se deroga, vuelven las
        fechas anteriores: el 1 de enero de 2027 para las sociedades y el 1 de julio de 2027 para los autónomos.
      </p>
      <p>
        Hasta que se vote, lo prudente, sobre todo si tienes una sociedad, es no parar la adaptación: elegir ya el
        programa de facturación y tenerlo listo para enero. Actualizaremos esta guía en cuanto haya votación.
      </p>

      <h2>Factura electrónica entre empresas: la Ley Crea y Crece</h2>
      <p>
        La segunda obligación viene de la Ley 18/2022, conocida como Ley Crea y Crece. Cuando vendes a otra empresa
        o a otro autónomo, la factura deberá emitirse y recibirse en un formato electrónico estructurado, no en PDF.
        Además, habrá que informar de cuándo se paga cada factura, para medir los plazos de pago y combatir la
        morosidad.
      </p>
      <p>
        El reglamento se aprobó con el Real Decreto 238/2026. La orden ministerial que fija los detalles técnicos se
        publicó en el BOE el 5 de octubre de 2026 y entró en vigor al día siguiente. Desde ahí cuentan los plazos:
      </p>
      <ul>
        <li>
          <strong>Empresas con más de 8 millones de euros</strong> de volumen de operaciones: 6 de octubre de 2027.
        </li>
        <li>
          <strong>El resto de empresas y los autónomos</strong>: 6 de octubre de 2028.
        </li>
        <li>
          <strong>Informar del estado de las facturas</strong>, para personas físicas con menos de 8 millones: 6 de
          octubre de 2029.
        </li>
      </ul>
      <p>
        Las facturas a particulares no entran en esta obligación. Si solo trabajas con consumidores finales, te
        afecta VeriFactu, pero no la factura electrónica entre empresas. Si el aplazamiento se convalida, para la
        mayoría de autónomos y pymes las dos obligaciones llegarán a la vez, en octubre de 2028.
      </p>

      <h2>Qué hacer ahora</h2>
      <ol>
        <li>
          <strong>Elige un programa adaptado.</strong> Pregunta a tu proveedor si ya cumple el reglamento y si
          incluye la modalidad VeriFactu. Muchos programas de facturación ya lo ofrecen.
        </li>
        <li>
          <strong>No cuentes todavía con 2028.</strong> Hasta que se convalide el decreto, la fecha segura es la
          de 2027. Además, cambiar de programa a mitad de un trimestre complica la numeración y los libros. Lo más limpio es empezar un 1 de enero o al
          comienzo de un trimestre.
        </li>
        <li>
          <strong>Revisa tus series de facturas.</strong> Facturas rectificativas, abonos y facturas simplificadas
          deben tener su propia serie bien configurada.
        </li>
        <li>
          <strong>Piensa ya en la factura electrónica.</strong> Si tu programa nuevo también emite en formato
          estructurado, harás un solo cambio para las dos obligaciones.
        </li>
      </ol>
    </Articulo>
  );
}
