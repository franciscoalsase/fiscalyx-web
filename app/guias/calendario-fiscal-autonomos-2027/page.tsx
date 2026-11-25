import type { Metadata } from "next";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Calendario fiscal del autónomo en 2027: todos los plazos",
  description:
    "Plazos de 2027 para autónomos en estimación directa: modelos 303, 130, 111, 115, 390, 190, 180 y la Renta, mes a mes.",
  alternates: { canonical: "/guias/calendario-fiscal-autonomos-2027/" },
};

const plazos = [
  { cuando: "1 al 20 de enero", que: "Modelos 111 y 115 del cuarto trimestre de 2026, si tienes trabajadores, pagas a profesionales o alquilas un local." },
  { cuando: "1 de enero al 1 de febrero", que: "Modelos 303 y 130 del cuarto trimestre de 2026 y modelo 390, el resumen anual del IVA. El día 30 cae en sábado y el plazo pasa al lunes." },
  { cuando: "1 de enero al 1 de febrero", que: "Modelos 190 y 180, resúmenes anuales de retenciones, si presentas 111 o 115. El día 31 cae en domingo." },
  { cuando: "Hasta el 1 de marzo", que: "Modelo 347, si tus operaciones con un mismo cliente o proveedor superaron 3.005,06 € en 2026." },
  { cuando: "1 de enero al 31 de marzo", que: "Modelos 720 y 721, solo si tienes bienes o criptomonedas en el extranjero por encima de los umbrales." },
  { cuando: "1 al 20 de abril", que: "Modelos 303 y 130 (y 111 o 115) del primer trimestre de 2027." },
  { cuando: "Abril a finales de junio", que: "Declaración de la Renta de 2026. La Agencia Tributaria fija las fechas exactas cada primavera." },
  { cuando: "1 al 20 de julio", que: "Modelos 303 y 130 (y 111 o 115) del segundo trimestre." },
  { cuando: "1 al 20 de octubre", que: "Modelos 303 y 130 (y 111 o 115) del tercer trimestre." },
];

export default function Calendario2027() {
  return (
    <Articulo
      titulo="Calendario fiscal del autónomo en 2027"
      entradilla="Un autónomo en estimación directa presenta impuestos cuatro veces al año y hace la Renta en primavera. Estos son los plazos de 2027, mes a mes."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Que los plazos sean cosa nuestra.",
        texto: "Te avisamos antes de cada uno, te llamamos para revisar las cifras y presentamos los modelos. Por una cuota fija y sin permanencia.",
        href: "/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: calendario del contribuyente", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/calendario-contribuyente.html" },
        { nombre: "Holded: calendario fiscal para autónomos y pymes", url: "https://www.holded.com/es/blog/calendario-fiscal" },
        { nombre: "Sage: obligaciones fiscales de enero", url: "https://www.sage.com/es-es/blog/obligaciones-fiscales-enero/" },
      ]}
    >
      <h2>La regla general</h2>
      <p>
        Los trimestrales se presentan del 1 al 20 del mes siguiente al trimestre: abril, julio y octubre. El cuarto
        trimestre es la excepción: se presenta en enero y el plazo llega hasta el día 30.
      </p>
      <p>
        Cuando el último día cae en sábado, domingo o festivo, el plazo se alarga al siguiente día hábil. En 2027 pasa
        justo en enero: el 30 es sábado y el 31 es domingo, así que los modelos 303, 130, 390, 190 y 180 pueden
        presentarse hasta el lunes 1 de febrero.
      </p>

      <h2>Todos los plazos de 2027</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Plazo</th>
              <th scope="col">Qué se presenta</th>
            </tr>
          </thead>
          <tbody>
            {plazos.map((p, i) => (
              <tr key={i}>
                <th scope="row">{p.cuando}</th>
                <td>{p.que}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        Fechas calculadas con las reglas generales. La Agencia Tributaria publica el calendario oficial de 2027 a
        finales de año: si cambia algo, actualizamos esta tabla.
      </p>

      <h2>Si pagas por domiciliación</h2>
      <p>
        Si quieres que el pago se cargue en tu cuenta el último día, la declaración se presenta unos días antes del
        final del plazo. En los trimestres ordinarios suele ser hasta el día 15. Si no domicilias, puedes presentar
        hasta el último día y pagar con el número de referencia del banco.
      </p>

      <h2>Qué modelos te tocan</h2>
      <ul>
        <li>
          <strong>303 (IVA)</strong>: casi todos los autónomos, salvo actividades exentas como la sanidad o la
          formación reglada.
        </li>
        <li>
          <strong>130 (IRPF)</strong>: autónomos en estimación directa, salvo que más del 70 % de tus ingresos ya
          lleven retención, como pasa a muchos profesionales.
        </li>
        <li>
          <strong>111 y 115</strong>: solo si tienes trabajadores, pagas facturas con retención a otros profesionales
          o alquilas un local.
        </li>
        <li>
          <strong>390, 190 y 180</strong>: los resúmenes anuales de los anteriores, en enero.
        </li>
      </ul>
    </Articulo>
  );
}
