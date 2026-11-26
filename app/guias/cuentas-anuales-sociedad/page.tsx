import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Cuentas anuales de una SL: plazos de 2027",
  description:
    "Formular, legalizar libros, aprobar en junta y depositar en el Registro: las fechas de 2027 para una SL y qué pasa si no depositas.",
  alternates: { canonical: "/guias/cuentas-anuales-sociedad/" },
};

const pasos: [string, string, string][] = [
  ["31 de marzo", "Formular las cuentas", "El órgano de administración prepara y firma el balance, la cuenta de pérdidas y ganancias y la memoria. Tres meses desde el cierre."],
  ["30 de abril", "Legalizar los libros", "Libro diario, de inventarios y cuentas anuales y de actas, por vía telemática en el Registro Mercantil. Cuatro meses desde el cierre."],
  ["30 de junio", "Aprobar en junta", "Los socios aprueban las cuentas y deciden qué hacer con el resultado. Seis meses desde el cierre."],
  ["26 de julio", "Impuesto sobre Sociedades", "El modelo 200, con el resultado ya aprobado. En 2027 el 25 de julio cae en domingo."],
  ["30 de julio", "Depositar las cuentas", "En el Registro Mercantil del domicilio social, dentro del mes siguiente a la aprobación."],
];

export default function CuentasAnuales() {
  return (
    <Articulo
      titulo="Cuentas anuales de una sociedad limitada: plazos y depósito"
      entradilla="Toda SL tiene que formular, aprobar y depositar sus cuentas cada año, aunque no haya tenido actividad. Estas son las fechas de 2027 para una sociedad que cierra el 31 de diciembre y lo que pasa si te saltas el depósito."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "El cierre, dentro de la cuota",
        texto: "Formulamos las cuentas, preparamos el acta de la junta, legalizamos los libros y las depositamos. Solo pagas aparte las tasas del Registro.",
        href: "/empezar/?plan=sociedad",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Ley de Sociedades de Capital, artículos 253, 279, 282 y 283", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2010-10544" },
        { nombre: "Ley 14/2013, artículo 18: legalización telemática de libros", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074" },
        { nombre: "Sage: consecuencias de no depositar las cuentas anuales", url: "https://www.sage.com/es-es/blog/siete-consecuencias-de-no-presentar-las-cuentas-anuales-o-hacerlo-tarde/" },
      ]}
    >
      <h2>Las fechas de 2027</h2>
      <ol className="pasos-guia">
        {pasos.map(([f, t, d]) => (
          <li key={t}>
            <strong>
              {f}: {t}
            </strong>
            <span>{d}</span>
          </li>
        ))}
      </ol>
      <p>
        Son los plazos para las cuentas de 2026 de una sociedad cuyo ejercicio coincide con el año natural. Si la junta
        aprueba antes, el depósito vence antes: siempre un mes después de la aprobación.
      </p>

      <h2>Qué son las cuentas anuales</h2>
      <p>
        El balance (lo que tiene y lo que debe la sociedad), la cuenta de pérdidas y ganancias (el resultado del año) y
        la memoria (las explicaciones). Las sociedades más grandes añaden el estado de cambios en el patrimonio neto,
        el de flujos de efectivo y, en su caso, el informe de auditoría. La mayoría de las pymes pueden usar los
        modelos abreviados o el de pymes.
      </p>

      <h2>Qué decide la junta</h2>
      <p>
        Además de aprobar las cuentas, los socios deciden el destino del resultado: dotar la reserva legal si aún no
        está completa, compensar pérdidas de años anteriores, repartir dividendos o dejar el beneficio en reservas. Es
        el momento de decidir con números si conviene repartir o no, y lo preparamos contigo antes de la junta.
      </p>
      <p>
        En una sociedad de un solo socio, la junta es ese socio, y basta con un acta firmada por él.
      </p>

      <h2>Si no depositas las cuentas</h2>
      <ul>
        <li>
          <strong>Cierre de la hoja registral.</strong> Pasado un año desde el cierre del ejercicio sin depositar, el
          Registro no inscribe casi nada de la sociedad: ni cambios de administrador, ni ampliaciones de capital, ni
          cambios de domicilio.
        </li>
        <li>
          <strong>Multa del ICAC</strong>, el Instituto de Contabilidad y Auditoría de Cuentas: de 1.200 a 60.000 € por
          cada año de retraso, y hasta 300.000 € si la sociedad factura más de 6 millones. Si depositas antes de que
          empiece el expediente, la multa se reduce.
        </li>
        <li>
          <strong>Mala imagen ante bancos y clientes.</strong> Las cuentas depositadas son públicas: es lo primero que
          miran un banco, un proveedor que te da crédito o una administración en una licitación.
        </li>
      </ul>
      <p>
        Si la sociedad lleva años sin depositar, se puede regularizar depositando las cuentas pendientes, de la más
        antigua a la más reciente.
      </p>

      <h2>Sin actividad también</h2>
      <p>
        Una sociedad sin actividad sigue obligada a formular, aprobar y depositar sus cuentas, a legalizar sus libros y a
        presentar el Impuesto sobre Sociedades. Si no la vas a usar, puede salir más barato disolverla que mantenerla.
      </p>
      <p>
        ¿Te planteas si te compensa tener una SL? Lo comparamos en <Link href="/guias/autonomo-o-sociedad/">autónomo
        o sociedad limitada</Link>, y todo lo que incluye nuestra cuota está en la página de{" "}
        <Link href="/sociedades/">gestoría para sociedades</Link>.
      </p>
    </Articulo>
  );
}
