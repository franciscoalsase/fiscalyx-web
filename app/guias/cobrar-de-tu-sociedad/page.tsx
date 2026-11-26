import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Cómo cobrar de tu sociedad limitada: sueldo de administrador o dividendos",
  description:
    "Las tres formas de sacar dinero de tu SL: retribución como administrador (retención del 35 % o 19 %), sueldo por tu trabajo o dividendos. Qué tributa cada una, qué dicen los estatutos y la cuota de autónomo societario.",
  alternates: { canonical: "/guias/cobrar-de-tu-sociedad/" },
};

export default function CobrarSociedad() {
  return (
    <Articulo
      titulo="Cómo cobrar de tu sociedad limitada"
      entradilla="El dinero de la sociedad no es tuyo hasta que lo sacas de una forma válida: como administrador, como trabajador o como socio. Cada una tributa distinto y tiene sus requisitos. Te explicamos las tres."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Decidimos contigo cuánto y cómo cobrar",
        texto: "Cada año calculamos qué combinación de sueldo y dividendos te deja más dinero neto, y preparamos las nóminas, el acta y las retenciones.",
        href: "/empezar/?plan=sociedad",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: cuadro de tipos de retención del IRPF de 2026", url: "https://sede.agenciatributaria.gob.es/static_files/Sede/Programas_ayuda/Retenciones/2026/CUADRO_TIPOS_RETENCION_IRPF_2026.pdf" },
        { nombre: "Dirección General de Tributos: consulta V0977-26, de 4 de mayo de 2026", url: "https://www.fiscal-impuestos.com/sites/fiscal-impuestos.com/files/V0977-26.pdf" },
        { nombre: "Ley de Sociedades de Capital, artículos 217 y 273", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2010-10544" },
        { nombre: "Ley General de la Seguridad Social, artículo 305", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724" },
      ]}
    >
      <h2>Las tres formas, de un vistazo</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Cobras como</th>
              <th scope="col">Retención</th>
              <th scope="col">¿Gasto para la sociedad?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Administrador, por el cargo</th>
              <td>35 %, o 19 % si la sociedad facturó menos de 100.000 € el año anterior</td>
              <td>Sí, si los estatutos lo prevén</td>
            </tr>
            <tr>
              <th scope="row">Trabajador, por otras funciones</th>
              <td>La general de una nómina, según tus ingresos</td>
              <td>Sí</td>
            </tr>
            <tr>
              <th scope="row">Socio, con dividendos</th>
              <td>19 %, y en la Renta del 19 % al 30 %</td>
              <td>No: se pagan con el beneficio ya tributado</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Como administrador</h2>
      <p>
        Es lo que cobras por dirigir la sociedad. Para que sea válido y deducible, los estatutos tienen que decir que el
        cargo es retribuido y cómo (una cantidad fija, un porcentaje de beneficios…), y la junta tiene que fijar el
        importe máximo anual. Si los estatutos dicen que el cargo es gratuito, cualquier pago por el cargo es un
        problema.
      </p>
      <p>
        En tu IRPF es un rendimiento del trabajo, con una retención fija del 35 %, o del 19 % si la cifra de negocios
        de la sociedad en el último ejercicio cerrado fue inferior a 100.000 €. Para quien gana poco, esa retención es
        alta y se recupera en la Renta; conviene saberlo para no llevarse un susto con la liquidez.
      </p>

      <h2>Como trabajador de tu propia sociedad</h2>
      <p>
        Si además de administrar haces el trabajo del día a día (programas, vendes, llevas el almacén), puedes cobrar
        un sueldo por esas funciones. Hacienda lo confirmó en mayo de 2026 con un administrador único que trabajaba
        como jefe de almacén: ese sueldo es rendimiento del trabajo con la retención general de una nómina, no la fija
        del 35 %.
      </p>
      <p>
        Lo importante es que esté documentado (nómina mensual) y que el importe sea razonable para el trabajo que
        haces: Hacienda revisa que no sea un modo de vaciar la sociedad sin tributar. En las sociedades profesionales,
        con ciertos requisitos, el socio puede facturar a la sociedad como profesional con retención del 15 %.
      </p>

      <h2>Como socio, con dividendos</h2>
      <p>
        Los dividendos salen del beneficio que ya pagó el Impuesto sobre Sociedades. Los aprueba la junta al aprobar
        las cuentas, siempre que la reserva legal esté dotada y no haya pérdidas pendientes que la impidan. La sociedad
        retiene el 19 % y tú los declaras en la base del ahorro, del 19 % al 30 %.
      </p>
      <p>
        No son gasto de la sociedad, así que ese dinero tributa dos veces: en Sociedades y en tu Renta. Por eso, para
        cantidades moderadas, suele salir mejor cobrar parte como sueldo. Para cantidades altas, el equilibrio cambia.
      </p>

      <h2>Y la cuota de autónomo</h2>
      <p>
        Si tienes el control efectivo de la sociedad, tienes que estar de alta como autónomo societario. Se entiende que
        lo tienes si posees al menos el 50 % del capital, el 33 % si además trabajas en ella, o el 25 % si haces
        funciones de dirección y gerencia, contando también las participaciones de familiares que convivan contigo.
      </p>
      <p>
        La base mínima del autónomo societario en 2026 es de 1.424,40 € al mes, lo que da una cuota de unos 449 €. Si la
        paga la sociedad, para ti es retribución en especie y tiene que figurar como tal. Puedes ver tu tramo en la{" "}
        <Link href="/calculadora-cuota-autonomos/">calculadora de cuota de autónomos</Link>.
      </p>

      <h2>Los errores que más vemos</h2>
      <ul>
        <li>Cobrar por el cargo de administrador con unos estatutos que dicen que es gratuito.</li>
        <li>Sacar dinero de la cuenta de la sociedad sin nómina ni acuerdo de dividendos.</li>
        <li>Repartir dividendos sin haber aprobado las cuentas ni dotado la reserva legal.</li>
        <li>Pagar la cuota de autónomo desde la sociedad sin tratarla como retribución.</li>
        <li>Aplicar la retención del 35 % a un sueldo por funciones que no son de administrador.</li>
      </ul>
      <p>
        Si todavía no tienes la sociedad, compara antes en <Link href="/guias/autonomo-o-sociedad/">autónomo o
        sociedad limitada</Link>. Y para las fechas de la junta y el depósito, mira la{" "}
        <Link href="/guias/cuentas-anuales-sociedad/">guía de cuentas anuales</Link>.
      </p>
    </Articulo>
  );
}
