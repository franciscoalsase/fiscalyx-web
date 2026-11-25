import type { Metadata } from "next";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "DAC8: qué sabrá Hacienda de tus criptomonedas y desde cuándo",
  description:
    "La directiva DAC8 obliga a los exchanges a informar de saldos y operaciones desde 2026. Qué datos llegan a Hacienda, cuándo y qué conviene revisar.",
  alternates: { canonical: "/guias/dac8-criptomonedas/" },
};

export default function Dac8() {
  return (
    <Articulo
      titulo="DAC8: qué sabrá Hacienda de tus criptomonedas y desde cuándo"
      entradilla="Desde enero de 2026, los exchanges y custodios que operan en la Unión Europea registran los saldos y operaciones de sus clientes para enviarlos a las administraciones tributarias. La Renta de 2026 será la primera que Hacienda podrá comparar con esos datos."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Revisa tus operaciones antes de que lo haga Hacienda.",
        texto: "Reconstruimos tu historial, calculamos cada operación y presentamos tu Renta y el Modelo 721. Si hay años anteriores mal declarados, te decimos cómo regularizarlos y cuánto costaría.",
        href: "/criptomonedas/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Comisión Europea: DAC8", url: "https://taxation-customs.ec.europa.eu/taxation/tax-transparency-cooperation/administrative-co-operation-and-mutual-assistance/directive-administrative-cooperation-dac/dac8_en" },
        { nombre: "BOE: directrices del Plan Anual de Control Tributario 2026", url: "https://www.boe.es/boe/dias/2026/03/12/pdfs/BOE-A-2026-5843.pdf" },
        { nombre: "Ministerio de Hacienda: proyecto de orden de los modelos 172, 175 y 721", url: "https://www.hacienda.gob.es/sgt/normativadoctrina/proyectos/09032026-main-proyecto-om-dac8.pdf" },
        { nombre: "Ley General Tributaria, artículo 27 (recargos)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186" },
      ]}
    >
      <h2>Qué es DAC8</h2>
      <p>
        Es la octava modificación de la directiva europea de cooperación administrativa en materia fiscal. Extiende a
        las criptomonedas el intercambio automático de información que ya existía para las cuentas bancarias.
      </p>
      <p>
        Obliga a los proveedores de servicios de criptoactivos, como exchanges y custodios, a identificar a sus clientes
        y a comunicar sus datos a la administración tributaria. No obliga al inversor a presentar ninguna declaración
        nueva.
      </p>

      <h2>Qué datos llegan a Hacienda</h2>
      <ul>
        <li>Tus datos de identificación y tu residencia fiscal.</li>
        <li>Las operaciones del año: compras y ventas por euros, cambios entre criptomonedas y transferencias.</li>
        <li>Los importes de cada tipo de operación.</li>
      </ul>
      <p>
        El exchange no calcula tu ganancia ni tu impuesto. Hacienda recibe los movimientos y los compara con lo que
        declaras. Si no cuadran, puede pedirte explicaciones.
      </p>

      <h2>El calendario</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <tbody>
            <tr>
              <th scope="row">1 de enero de 2026</th>
              <td>Empieza la obligación. Las operaciones de 2026 son las primeras que se registran.</td>
            </tr>
            <tr>
              <th scope="row">Primavera de 2027</th>
              <td>Presentas la Renta de 2026, la primera que cubren estos datos.</td>
            </tr>
            <tr>
              <th scope="row">30 de septiembre de 2027</th>
              <td>Fecha límite para que los países de la UE se intercambien la información de 2026.</td>
            </tr>
            <tr>
              <th scope="row">Mediados de 2031</th>
              <td>Hacienda tiene cuatro años desde el fin del plazo de la Renta para revisarla.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        En España, los proveedores informarán con un nuevo modelo, el 175, cuyo plazo de presentación aún no está
        confirmado oficialmente.
      </p>

      <h2>Qué conviene hacer ahora</h2>
      <ol>
        <li>
          <strong>Descarga el historial completo</strong> de cada exchange que hayas usado, también de los que ya no
          uses. Algunos solo guardan los datos unos años.
        </li>
        <li>
          <strong>Calcula cada operación en euros</strong>, incluidos los cambios entre criptomonedas: también generan
          ganancia o pérdida.
        </li>
        <li>
          <strong>Revisa los años anteriores.</strong> Si no declaraste bien, regularizar antes de que Hacienda
          pregunte sale mucho más barato. Con una complementaria voluntaria pagas un recargo del 1 % más un 1 % por
          cada mes completo de retraso, hasta un máximo del 15 % más intereses a partir del año. Si Hacienda te
          descubre, la sanción parte del 50 % de lo que dejaste de ingresar.
        </li>
      </ol>
    </Articulo>
  );
}
