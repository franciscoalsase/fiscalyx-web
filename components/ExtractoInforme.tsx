const filas = [
  { fecha: "14 feb", op: "Venta de 0,05 BTC por euros", tipo: "Ganancia patrimonial", importe: 1240.18 },
  { fecha: "3 abr", op: "Cambio de ETH por SOL", tipo: "Pérdida patrimonial", importe: -312.4 },
  { fecha: "21 jun", op: "Recompensas de staking de ETH", tipo: "Rendimiento del capital mobiliario", importe: 86.12 },
  { fecha: "30 sep", op: "Venta de SOL por USDC", tipo: "Ganancia patrimonial", importe: 518.77 },
];

const euros = (n: number) =>
  `${n > 0 ? "+" : n < 0 ? "−" : ""}${Math.abs(n).toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: "always",
  } as Intl.NumberFormatOptions)} €`;

export function ExtractoInforme() {
  const total = filas.reduce((s, f) => s + f.importe, 0);
  return (
    <figure className="informe" style={{ margin: 0 }}>
      <div className="informe-cabeza">
        <strong>Informe de trazabilidad</strong>
        <span>Ejercicio 2026</span>
      </div>
      <table>
        <caption className="saltar" style={{ position: "absolute", left: "-9999px" }}>
          Extracto de ejemplo de un informe de operaciones con criptomonedas
        </caption>
        <tbody>
          {filas.map((f) => (
            <tr key={f.op}>
              <td className="fecha">{f.fecha}</td>
              <td>
                {f.op}
                <span className="tipo">{f.tipo}</span>
              </td>
              <td className={`cifra-informe ${f.importe < 0 ? "negativa" : "positiva"}`}>{euros(f.importe)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Resultado en la base del ahorro</td>
            <td className="cifra-informe">{euros(total)}</td>
          </tr>
        </tfoot>
      </table>
      <figcaption className="nota-ejemplo">
        Ejemplo con datos ficticios. Cada operación se valora en euros en su fecha y se calcula con el método FIFO,
        el criterio de Hacienda.
      </figcaption>
    </figure>
  );
}
