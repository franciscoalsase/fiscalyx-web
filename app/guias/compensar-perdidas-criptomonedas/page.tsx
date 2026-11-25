import type { Metadata } from "next";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Pérdidas con criptomonedas: cómo compensarlas en la Renta",
  description:
    "Las pérdidas con criptomonedas reducen lo que pagas por tus ganancias, este año y los cuatro siguientes. Cómo funciona la compensación, con un ejemplo.",
  alternates: { canonical: "/guias/compensar-perdidas-criptomonedas/" },
};

export default function CompensarPerdidas() {
  return (
    <Articulo
      titulo="Pérdidas con criptomonedas: cómo usarlas para pagar menos"
      entradilla="Si vendiste o cambiaste criptomonedas con pérdidas, esas pérdidas no se pierden: se restan de tus ganancias de este año y, si sobran, de las de los cuatro años siguientes. Pero solo si las declaras."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Revisa tu año antes del 31 de diciembre.",
        texto: "Calculamos dónde estás este año, qué pérdidas tienes pendientes de años anteriores y cómo encajarlo todo en tu Renta.",
        href: "/criptomonedas/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Ley del IRPF, artículo 49 (integración y compensación en la base del ahorro)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764" },
        { nombre: "Escala de la base del ahorro 2026", url: "https://guiafiscal.es/irpf/tramos-irpf/" },
      ]}
    >
      <h2>Cómo funciona la compensación</h2>
      <p>
        Las ganancias y pérdidas por vender o cambiar criptomonedas van a la base del ahorro de tu Renta, junto con
        las de acciones o fondos. Dentro de ese bloque se compensan así:
      </p>
      <ol>
        <li>
          <strong>Entre ganancias y pérdidas del mismo año.</strong> Si ganaste 8.000 € con unas criptomonedas y
          perdiste 3.000 € con otras, tributas por 5.000 €.
        </li>
        <li>
          <strong>Con intereses, dividendos o recompensas de staking.</strong> Si el saldo de ganancias y pérdidas
          es negativo, puede restarse de esos rendimientos del capital mobiliario, con un límite del 25 % de su importe.
          Y también al revés.
        </li>
        <li>
          <strong>En los cuatro años siguientes.</strong> Lo que no se haya podido compensar se arrastra y se resta
          de las ganancias de los próximos cuatro ejercicios.
        </li>
      </ol>

      <h2>Un ejemplo</h2>
      <p>
        En 2026 cambias tus tokens de un proyecto que se hundió y pierdes 6.000 €. Ese año no tienes ganancias, solo
        200 € de recompensas de staking. Puedes compensar 50 € con el staking (el 25 % de 200 €) y te quedan 5.950 €
        de pérdidas pendientes.
      </p>
      <p>
        En 2027 vendes bitcoin con 4.000 € de ganancia. Restas 4.000 € de las pérdidas pendientes y no pagas nada por
        esa venta. Aún te quedan 1.950 € para los años siguientes, hasta 2030.
      </p>

      <h2>Lo que hay que tener en cuenta</h2>
      <ul>
        <li>
          <strong>Hay que declararlas.</strong> Si no presentas la pérdida en la Renta del año en que se produce, no
          podrás usarla después.
        </li>
        <li>
          <strong>Tiene que haber una venta o un cambio.</strong> Que una criptomoneda baje de precio no genera una
          pérdida fiscal mientras la conserves.
        </li>
        <li>
          <strong>Los casos de plataformas en quiebra o fondos bloqueados</strong> tienen un tratamiento distinto y
          hay que analizarlos uno a uno.
        </li>
        <li>
          <strong>Vender y volver a comprar enseguida</strong> para generar una pérdida puede tener limitaciones.
          Consúltanos antes de hacerlo.
        </li>
      </ul>

      <h2>Diciembre es el momento de mirarlo</h2>
      <p>
        Si este año tienes ganancias, quizá te convenga materializar alguna pérdida antes del 31 de diciembre para
        compensarlas. Y si tienes pérdidas pendientes de años anteriores, conviene saber cuánto te queda y hasta
        cuándo, porque caducan a los cuatro años.
      </p>
    </Articulo>
  );
}
