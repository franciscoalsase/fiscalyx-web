import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";
import plazos from "@/lib/plazos-2027.json";

export const metadata: Metadata = {
  title: "Calendario fiscal 2027 para autónomos y sociedades (descargable)",
  description:
    "Todos los plazos de 2027 de autónomos y sociedades: 303, 130, 111, 115, 390, 347, 721, 200 y 202. Descárgalo en tu calendario con aviso 5 días antes.",
  alternates: { canonical: "/guias/calendario-fiscal-autonomos-2027/" },
};

const autonomo = plazos.filter((p) => p.para.includes("autonomo"));
const sociedad = plazos.filter((p) => p.para.includes("sociedad") && !p.para.includes("autonomo"));

export default function Calendario2027() {
  return (
    <Articulo
      titulo="Calendario fiscal de 2027"
      entradilla="Todos los plazos de 2027 para autónomos y sociedades limitadas, mes a mes, y un calendario para descargar en el móvil con aviso cinco días antes de cada uno."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Que los plazos sean cosa nuestra",
        texto: "Te avisamos antes de cada uno, te llamamos para revisar las cifras y presentamos los modelos. Por una cuota fija y sin permanencia.",
        href: "/empezar/",
        boton: "Empezar",
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

      <h2>Llévalo en tu calendario</h2>
      <p>
        Descarga el calendario y ábrelo: se añade a Google Calendar, Outlook o el calendario del iPhone con cada plazo
        en su último día y un aviso cinco días antes. Si cambia alguna fecha, lo actualizamos aquí.
      </p>
      <div className="descargas-calendario">
        <a className="boton boton-principal" href="/calendario-fiscal-2027-autonomos.ics" download>
          Calendario de autónomo
        </a>
        <a className="boton boton-secundario" href="/calendario-fiscal-2027-sociedades.ics" download>
          Calendario de sociedad
        </a>
      </div>
      <p className="nota-tabla">
        En Google Calendar, desde el ordenador: Configuración, Importar y exportar, y eliges el archivo. En el iPhone y
        en Outlook basta con abrirlo.
      </p>

      <h2>Todos los plazos de 2027 para autónomos</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Plazo</th>
              <th scope="col">Qué se presenta</th>
            </tr>
          </thead>
          <tbody>
            {autonomo.map((p, i) => (
              <tr key={i}>
                <th scope="row">{p.cuando}</th>
                <td>
                  <strong>{p.titulo}.</strong> {p.texto}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        Fechas calculadas con las reglas generales. La Agencia Tributaria publica el calendario oficial de 2027 a
        finales de año: si cambia algo, actualizamos esta tabla.
      </p>

      <h2>Si tienes una sociedad limitada</h2>
      <p>
        La sociedad presenta el IVA y las retenciones en los mismos plazos que un autónomo, pero no el modelo 130. A
        cambio, tiene sus propias fechas:
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Plazo</th>
              <th scope="col">Qué se presenta</th>
            </tr>
          </thead>
          <tbody>
            {sociedad.map((p, i) => (
              <tr key={i}>
                <th scope="row">{p.cuando}</th>
                <td>
                  <strong>{p.titulo}.</strong> {p.texto}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Las fechas de las cuentas anuales, con lo que pasa si no se depositan, están en la{" "}
        <Link href="/guias/cuentas-anuales-sociedad/">guía de cuentas anuales</Link>.{" "}
        Para una pyme, el modelo 202 solo se presenta cuando sale cantidad a pagar, y eso ocurre si el último Impuesto
        sobre Sociedades salió a pagar. Una sociedad recién creada no lo paga en su primer año.
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
          formación reglada. Te lo explicamos en la <Link href="/guias/modelo-303-iva-trimestral/">guía del 303</Link>.
        </li>
        <li>
          <strong>130 (IRPF)</strong>: autónomos en estimación directa, salvo que más del 70 % de tus ingresos ya
          lleven retención, como pasa a muchos profesionales. Más en la{" "}
          <Link href="/guias/modelo-130-retenciones/">guía del 130 y las retenciones</Link>.
        </li>
        <li>
          <strong>111 y 115</strong>: solo si tienes trabajadores, pagas facturas con retención a otros profesionales
          o alquilas un local.
        </li>
        <li>
          <strong>390, 190 y 180</strong>: los resúmenes anuales de los anteriores, en enero.
        </li>
        <li>
          <strong>347</strong>: si con un mismo cliente o proveedor pasaste de 3.005,06 € en el año, en febrero. Los
          detalles, en la <Link href="/guias/modelo-347/">guía del 347</Link>.
        </li>
      </ul>
    </Articulo>
  );
}
