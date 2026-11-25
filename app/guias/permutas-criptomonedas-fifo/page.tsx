import type { Metadata } from "next";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Permutas de criptomonedas y método FIFO: cómo tributan",
  description:
    "Cambiar una criptomoneda por otra tributa aunque no pases a euros. Cómo se calcula la ganancia con el método FIFO, con un ejemplo paso a paso.",
  alternates: { canonical: "/guias/permutas-criptomonedas-fifo/" },
};

export default function PermutasFifo() {
  return (
    <Articulo
      titulo="Permutas de criptomonedas y método FIFO: el error más caro"
      entradilla="Muchos inversores creen que solo se paga cuando pasan a euros. No es así: cada cambio de una criptomoneda por otra es una venta a efectos fiscales. Y para saber cuánto ganaste, hay que aplicar el método FIFO."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Cientos de permutas no se calculan a mano",
        texto: "Reconstruimos tu historial de todos los exchanges y monederos, aplicamos FIFO operación por operación y presentamos tu Renta con el archivo que lo justifica.",
        href: "/criptomonedas/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Dirección General de Tributos: consulta vinculante V0999-18", url: "https://petete.tributos.hacienda.gob.es/consultas/?num_consulta=V0999-18" },
        { nombre: "Escala de la base del ahorro 2026", url: "https://guiafiscal.es/irpf/tramos-irpf/" },
      ]}
    >
      <h2>Una permuta es una venta</h2>
      <p>
        Para Hacienda, cambiar bitcoin por ether, o ether por una stablecoin como USDC, es una permuta. Entregas un
        bien y recibes otro, y eso genera una ganancia o una pérdida patrimonial en ese momento, aunque no hayas
        tocado un euro.
      </p>
      <p>
        La ganancia es la diferencia entre el valor de lo que entregas, en euros y en la fecha del cambio, y lo que te
        costó en su día. Esa ganancia va a la base del ahorro de tu Renta, que tributa del 19 % al 30 %.
      </p>

      <h2>Qué es FIFO y por qué importa</h2>
      <p>
        Si compraste la misma criptomoneda varias veces a precios distintos, ¿cuáles vendes primero? La Dirección
        General de Tributos aplica el método FIFO (first in, first out): se consideran vendidas primero las unidades
        compradas primero. No puedes elegir las que más te convienen.
      </p>

      <h2>Un ejemplo</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Operación</th>
              <th scope="col">Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Marzo</th>
              <td>Compras 1 ETH</td>
              <td>2.000 €</td>
            </tr>
            <tr>
              <th scope="row">Junio</th>
              <td>Compras otro ETH</td>
              <td>3.000 €</td>
            </tr>
            <tr>
              <th scope="row">Octubre</th>
              <td>Cambias 1 ETH por SOL cuando el ETH vale 3.500 €</td>
              <td>Valor de lo entregado: 3.500 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Con FIFO, el ETH que entregas es el de marzo, que costó 2.000 €. La ganancia es de 1.500 €, y tributa aunque
        no hayas pasado a euros. Si pudieras elegir el de junio, la ganancia sería de 500 €, pero no se puede.
      </p>
      <p>
        Los SOL que recibes quedan valorados en 3.500 €. Ese será su coste cuando los vendas o los cambies más
        adelante.
      </p>

      <h2>Detalles que cambian la cifra</h2>
      <ul>
        <li>
          <strong>Comisiones.</strong> Las comisiones de compra aumentan el coste y las de venta reducen el valor de
          transmisión. Las comisiones de red pagadas en cripto son, a su vez, pequeñas permutas.
        </li>
        <li>
          <strong>Varias plataformas.</strong> FIFO se aplica sobre todas tus unidades de la misma criptomoneda,
          estén donde estén. Por eso hay que juntar el historial de todos los exchanges y monederos.
        </li>
        <li>
          <strong>Transferencias entre tus cuentas.</strong> Mover cripto de un exchange a tu monedero no es una
          venta, pero hay que identificarla bien para que no se cuente como tal.
        </li>
      </ul>

      <h2>Por qué ahora es más importante</h2>
      <p>
        Desde 2026, los exchanges de la Unión Europea registran las operaciones de sus clientes para enviarlas a las
        administraciones tributarias. Las permutas que antes pasaban desapercibidas ahora quedarán registradas.
      </p>
    </Articulo>
  );
}
