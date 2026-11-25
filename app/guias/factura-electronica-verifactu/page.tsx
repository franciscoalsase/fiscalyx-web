import type { Metadata } from "next";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "VeriFactu y factura electrónica: fechas de 2027 y 2028",
  description:
    "Las dos obligaciones que cambian tu forma de facturar: VeriFactu, desde enero de 2027 para sociedades y julio de 2027 para autónomos, y la factura electrónica entre empresas.",
  alternates: { canonical: "/guias/factura-electronica-verifactu/" },
};

export default function FacturaElectronica() {
  return (
    <Articulo
      titulo="VeriFactu y factura electrónica: qué cambia y cuándo te toca"
      entradilla="Se suelen mezclar, pero son dos obligaciones distintas con fechas distintas. VeriFactu exige que el programa con el que facturas cumpla unos requisitos. La factura electrónica obliga a enviar las facturas entre empresas en un formato estructurado."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Llega a tu fecha con todo preparado.",
        texto: "Te ayudamos a elegir un programa de facturación adaptado y revisamos tus primeras facturas para que salgan bien desde el primer día.",
        href: "/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Calendario de VeriFactu tras el Real Decreto-ley 15/2025", url: "https://www.infoautonomos.com/blog/verifactu-cuando-es-obligatorio-a-quien-afecta/" },
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
              <td>1 de enero de 2027</td>
            </tr>
            <tr>
              <th scope="row">VeriFactu</th>
              <td>Autónomos y demás obligados</td>
              <td>1 de julio de 2027</td>
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

      <h3>Las fechas se han retrasado dos veces</h3>
      <p>
        El calendario inicial preveía 2026. El Real Decreto-ley 15/2025 lo llevó al 1 de enero de 2027 para las
        sociedades y al 1 de julio de 2027 para los autónomos. Son las fechas vigentes a día de hoy.
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
        afecta VeriFactu, pero no la factura electrónica entre empresas.
      </p>

      <h2>Qué hacer ahora</h2>
      <ol>
        <li>
          <strong>Elige un programa adaptado.</strong> Pregunta a tu proveedor si ya cumple el reglamento y si
          incluye la modalidad VeriFactu. Muchos programas de facturación ya lo ofrecen.
        </li>
        <li>
          <strong>Empieza antes de tu fecha.</strong> Cambiar de programa a mitad de un trimestre complica la
          numeración y los libros. Lo más limpio es empezar el 1 de enero o el 1 de julio.
        </li>
        <li>
          <strong>Revisa tus series de facturas.</strong> Facturas rectificativas, abonos y facturas simplificadas
          deben tener su propia serie bien configurada.
        </li>
        <li>
          <strong>Piensa ya en la factura electrónica.</strong> Si tu programa nuevo también emite en formato
          estructurado, te ahorrarás un segundo cambio en 2028.
        </li>
      </ol>
    </Articulo>
  );
}
