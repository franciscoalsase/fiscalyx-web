// Documentos de ejemplo: lo que recibe un cliente durante el año. Datos ficticios.

const eur = (n: number) =>
  `${n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: "always" } as Intl.NumberFormatOptions)} €`;

export function AvisoTrimestre() {
  const iva = 3484.6;
  const irpf = 612.3;
  return (
    <figure className="documento documento-aviso">
      <div className="documento-cabeza">
        <strong>Tu 3.er trimestre de 2027</strong>
        <span>Ejemplo</span>
      </div>
      <p className="documento-para">Diseño web, estimación directa</p>
      <table>
        <caption className="visualmente-oculto">Importes del trimestre en un aviso de ejemplo</caption>
        <tbody>
          <tr>
            <th scope="row">
              Modelo 303<span>IVA del trimestre</span>
            </th>
            <td>{eur(iva)}</td>
          </tr>
          <tr>
            <th scope="row">
              Modelo 130<span>Pago a cuenta del IRPF</span>
            </th>
            <td>{eur(irpf)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">A pagar el 20 de octubre</th>
            <td>
              <mark>{eur(iva + irpf)}</mark>
            </td>
          </tr>
        </tfoot>
      </table>
      <p className="documento-nota">
        Si nos pasas antes del día 15 la factura de la impresora (290 € más IVA), el 303 baja {eur(290 * 0.21)}.
      </p>
      <figcaption className="nota-ejemplo">
        Así es el aviso que mandamos antes de cada trimestre, con datos ficticios. Lo presentamos con tu visto bueno.
      </figcaption>
    </figure>
  );
}

export function ResumenAnio() {
  const ingresos = 58400;
  const gastos = 14250;
  return (
    <figure className="documento">
      <div className="documento-cabeza">
        <strong>Tu año 2026 en una página</strong>
        <span>Ejemplo</span>
      </div>
      <table>
        <caption className="visualmente-oculto">Resumen anual de ejemplo de un autónomo</caption>
        <tbody>
          <tr>
            <th scope="row">Ingresos</th>
            <td>{eur(ingresos)}</td>
          </tr>
          <tr>
            <th scope="row">Gastos deducibles</th>
            <td>−{eur(gastos)}</td>
          </tr>
          <tr>
            <th scope="row">Rendimiento neto</th>
            <td>{eur(ingresos - gastos)}</td>
          </tr>
          <tr>
            <th scope="row">
              Ya pagado a cuenta<span>Modelos 130 y retenciones de tus clientes</span>
            </th>
            <td>{eur(6830)}</td>
          </tr>
          <tr>
            <th scope="row">
              Tu cuota de autónomos para 2027<span>Tramo General 9, según lo que has ganado</span>
            </th>
            <td>{eur(478.68)} al mes</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Renta prevista</th>
            <td>
              <mark>{eur(412)} a devolver</mark>
            </td>
          </tr>
        </tfoot>
      </table>
      <figcaption className="nota-ejemplo">
        Así es el resumen que mandamos al cerrar el año, antes de la Renta, con datos ficticios.
      </figcaption>
    </figure>
  );
}

export function PrevisionSociedades() {
  const ingresos = 310000;
  const gastos = 248000;
  const resultado = ingresos - gastos;
  const ajuste = 600;
  const base = resultado + ajuste;
  const cuota = Math.min(base, 50000) * 0.19 + Math.max(base - 50000, 0) * 0.21;
  const pagado = 3100;
  return (
    <figure className="documento">
      <div className="documento-cabeza">
        <strong>Previsión del Impuesto sobre Sociedades de 2026</strong>
        <span>Ejemplo</span>
      </div>
      <p className="documento-para">Microempresa, cifra de negocios inferior a 1 millón de euros</p>
      <table>
        <caption className="visualmente-oculto">Previsión de ejemplo del Impuesto sobre Sociedades</caption>
        <tbody>
          <tr>
            <th scope="row">Ingresos previstos del año</th>
            <td>{eur(ingresos)}</td>
          </tr>
          <tr>
            <th scope="row">Gastos previstos</th>
            <td>−{eur(gastos)}</td>
          </tr>
          <tr>
            <th scope="row">Resultado antes de impuestos</th>
            <td>{eur(resultado)}</td>
          </tr>
          <tr>
            <th scope="row">
              Gastos no deducibles<span>Una sanción de tráfico pagada por la sociedad</span>
            </th>
            <td>+{eur(ajuste)}</td>
          </tr>
          <tr>
            <th scope="row">
              Impuesto<span>19 % hasta 50.000 € y 21 % el resto</span>
            </th>
            <td>{eur(cuota)}</td>
          </tr>
          <tr>
            <th scope="row">
              Ya pagado a cuenta<span>Modelos 202 de abril y octubre</span>
            </th>
            <td>−{eur(pagado)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">A pagar en julio de 2027</th>
            <td>
              <mark>{eur(cuota - pagado)}</mark>
            </td>
          </tr>
        </tfoot>
      </table>
      <p className="documento-nota">
        Nos faltan 1.800 € en facturas de proveedores de este año. Si nos las pasas antes del cierre, el impuesto baja{" "}
        {eur(1800 * 0.21)}.
      </p>
      <figcaption className="nota-ejemplo">
        Así es la previsión que mandamos en noviembre, antes de cerrar el año, con datos ficticios.
      </figcaption>
    </figure>
  );
}
