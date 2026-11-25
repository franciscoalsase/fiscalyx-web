const pasos = [
  { fecha: "31 mar", que: "Formular las cuentas anuales" },
  { fecha: "30 abr", que: "Legalizar los libros oficiales" },
  { fecha: "30 jun", que: "Aprobar las cuentas en junta" },
  { fecha: "1–25 jul", que: "Presentar el Impuesto sobre Sociedades (modelo 200)" },
  { fecha: "30 jul", que: "Depositar las cuentas en el Registro Mercantil" },
];

export function CierreEjercicio() {
  return (
    <figure className="informe" style={{ margin: 0 }}>
      <div className="informe-cabeza">
        <strong>Cierre del ejercicio 2026</strong>
        <span>Tu sociedad</span>
      </div>
      <table>
        <caption className="visualmente-oculto">Pasos del cierre anual de una sociedad limitada</caption>
        <tbody>
          {pasos.map((p) => (
            <tr key={p.fecha}>
              <td className="fecha">{p.fecha}</td>
              <td>{p.que}</td>
              <td className="cifra-informe positiva">Incluido</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="nota-ejemplo">
        Fechas para una sociedad cuyo ejercicio va de enero a diciembre de 2026. Los plazos se cuentan desde el cierre
        del ejercicio y desde la aprobación de las cuentas.
      </figcaption>
    </figure>
  );
}
