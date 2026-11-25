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
        Lo que te mandamos antes de cada trimestre. Datos ficticios. Lo presentamos con tu visto bueno.
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
        Lo que te mandamos al cerrar el año, antes de la Renta. Datos ficticios.
      </figcaption>
    </figure>
  );
}
