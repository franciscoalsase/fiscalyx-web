import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Cuota de autónomos 2027: tramos y tabla",
  description:
    "Cuánto pagarás de cuota de autónomos en 2027: los 15 tramos por rendimientos, la tarifa plana, la cuota del autónomo societario y la regularización anual.",
  alternates: { canonical: "/guias/cuota-autonomos-2027/" },
};

const tramos: [string, string, string, string][] = [
  ["Reducida 1", "Hasta 670 €", "653,59 €", "205,88 €"],
  ["Reducida 2", "670 € a 900 €", "718,95 €", "226,47 €"],
  ["Reducida 3", "900 € a 1.166,70 €", "849,67 €", "267,65 €"],
  ["General 1", "1.166,70 € a 1.300 €", "950,98 €", "299,56 €"],
  ["General 2", "1.300 € a 1.500 €", "960,78 €", "302,65 €"],
  ["General 3", "1.500 € a 1.700 €", "960,78 €", "302,65 €"],
  ["General 4", "1.700 € a 1.850 €", "1.143,79 €", "360,29 €"],
  ["General 5", "1.850 € a 2.030 €", "1.209,15 €", "380,88 €"],
  ["General 6", "2.030 € a 2.330 €", "1.274,51 €", "401,47 €"],
  ["General 7", "2.330 € a 2.760 €", "1.356,21 €", "427,21 €"],
  ["General 8", "2.760 € a 3.190 €", "1.437,91 €", "452,94 €"],
  ["General 9", "3.190 € a 3.620 €", "1.519,61 €", "478,68 €"],
  ["General 10", "3.620 € a 4.050 €", "1.601,31 €", "504,41 €"],
  ["General 11", "4.050 € a 6.000 €", "1.732,03 €", "545,59 €"],
  ["General 12", "Más de 6.000 €", "1.928,10 €", "607,35 €"],
];

export default function CuotaAutonomos2027() {
  return (
    <Articulo
      titulo="Cuota de autónomos en 2027: tramos y cómo se calcula"
      entradilla="Desde 2023 la cuota depende de lo que ganas de verdad. Te explicamos qué tabla se aplica, cómo saber en qué tramo estás, cuánto pagan los autónomos societarios y qué pasa cuando la Seguridad Social regulariza el año."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "¿Estás en el tramo que te toca?",
        texto: "Revisamos tus rendimientos cada trimestre y te avisamos de cuándo conviene cambiar de base, para que la regularización no te pille por sorpresa.",
        href: "/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Seguridad Social: simulador de cuotas de autónomos", url: "https://portal.seg-social.gob.es/wps/portal/importass/importass/tramites/simuladorRETAPublico/inicio/" },
        { nombre: "Tabla de tramos y cuotas de 2026 (Orden PJC/297/2026)", url: "https://www.cuestioneslaborales.es/cuota-autonomos-2026/" },
        { nombre: "Base mínima del autónomo societario en 2026", url: "https://taxdown.es/informacion-autonomos/autonomo-societario" },
      ]}
    >
      <h2>Qué tabla se aplica en 2027</h2>
      <p>
        A finales de noviembre de 2026 todavía no se han publicado las bases de cotización de 2027. El Gobierno
        planteó subidas para el periodo 2026 a 2028, pero las cuotas de 2026 acabaron congeladas para los autónomos
        persona física y, sin unos presupuestos nuevos, lo previsible es que la tabla de 2027 se parezca mucho a la
        actual.
      </p>
      <p>
        Por eso, mientras no haya orden de cotización para 2027, la referencia es la tabla de 2026. En cuanto se
        publique la nueva, actualizaremos esta guía.
      </p>

      <h2>Cómo saber en qué tramo estás</h2>
      <p>
        El tramo depende de tus <strong>rendimientos netos mensuales</strong>, que no son lo mismo que lo que
        facturas. Se calculan así:
      </p>
      <ol>
        <li>Tomas tus ingresos del año y restas tus gastos deducibles, sin contar la propia cuota de autónomos.</li>
        <li>
          A esa cifra le restas un 7 % en concepto de gastos genéricos. Si eres autónomo societario, el descuento es
          del 3 %.
        </li>
        <li>Divides el resultado entre doce.</li>
      </ol>
      <p>
        Por ejemplo, si facturas 40.000 € al año y tienes 8.000 € de gastos, tu rendimiento es de 32.000 €. Tras el
        7 %, quedan 29.760 €, es decir, 2.480 € al mes. Estarías en el tramo 7 de la tabla general.
      </p>

      <h2>La tabla de 2026, tramo a tramo</h2>
      <p>
        En cada tramo eliges una base entre la mínima y la máxima. La cuota es el 31,50 % de esa base: un 28,30 % de
        contingencias comunes, un 1,30 % de contingencias profesionales, un 0,90 % de cese de actividad, un 0,10 % de
        formación profesional y un 0,90 % del mecanismo de equidad intergeneracional.
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Tramo</th>
              <th scope="col">Rendimientos al mes</th>
              <th scope="col">Base mínima</th>
              <th scope="col">Cuota mínima</th>
            </tr>
          </thead>
          <tbody>
            {tramos.map(([t, r, b, c]) => (
              <tr key={t}>
                <th scope="row">{t}</th>
                <td>{r}</td>
                <td>{b}</td>
                <td>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Cotizar por encima de la base mínima cuesta más cada mes, pero mejora tus prestaciones: la baja por
        enfermedad, el cese de actividad y, sobre todo, la jubilación. Es una decisión que merece pensarse.
      </p>

      <h2>Si te das de alta por primera vez: la tarifa plana</h2>
      <p>
        Los nuevos autónomos pagan una cuota reducida de 80 € al mes durante los primeros doce meses. Con el
        mecanismo de equidad intergeneracional, en 2026 son 88,64 €. Si en el primer año tus rendimientos netos
        quedan por debajo del salario mínimo interprofesional, puedes pedir que se prorrogue doce meses más.
      </p>
      <p>
        No puedes acogerte si has estado de alta como autónomo en los dos años anteriores, o en los tres anteriores
        si ya disfrutaste de una bonificación.
      </p>

      <h2>El autónomo societario paga más</h2>
      <p>
        Si eres socio y administrador de tu propia sociedad, eres autónomo societario. Desde 2026, tu base no puede
        bajar de la base mínima del grupo 7 del régimen general, que es de 1.424,40 € al mes. Eso supone una cuota
        mínima de 448,69 € al mes, unos 5.384 € al año, ganes lo que ganes.
      </p>
      <p>
        Es uno de los costes que hay que tener en cuenta antes de pasar de autónomo a sociedad. Lo explicamos con
        números en{" "}
        <Link href="/guias/autonomo-o-sociedad/">¿Autónomo o sociedad limitada?</Link> y puedes probar tu caso en
        nuestra <Link href="/calculadora-autonomo-o-sociedad/">calculadora de autónomo o sociedad</Link>.
      </p>

      <h2>La regularización: cuándo te devuelven o te reclaman</h2>
      <p>
        Durante el año cotizas por una previsión. Cuando Hacienda tiene tu Renta, la Seguridad Social compara lo que
        cotizaste con lo que te correspondía según tus rendimientos reales:
      </p>
      <ul>
        <li>
          <strong>Si cotizaste de menos</strong>, te reclama la diferencia. Si la pagas en plazo, no hay recargo.
        </li>
        <li>
          <strong>Si cotizaste de más</strong>, te devuelve la diferencia de oficio, normalmente en la primavera
          del segundo año.
        </li>
      </ul>
      <p>
        Puedes cambiar de base hasta seis veces al año. Si ves a mitad de año que vas a ganar mucho más o mucho menos
        de lo previsto, cambiarla a tiempo evita un pago grande de golpe.
      </p>

      <h2>La cuota es gasto deducible</h2>
      <p>
        Lo que pagas a la Seguridad Social como autónomo resta en tu IRPF como gasto de la actividad. Por eso, en el
        pago trimestral del Modelo 130 y en la Renta, la cuota reduce lo que pagas de impuesto.
      </p>
    </Articulo>
  );
}
