import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Retirar dinero de Binance al banco: qué ve Hacienda",
  description:
    "Pasar tus euros de Binance al banco no tributa, pero la venta que hay detrás sí. Qué declarar, qué puede pedirte el banco y cómo regularizar.",
  alternates: { canonical: "/guias/retirar-dinero-binance-hacienda/" },
};

export default function RetirarBinance() {
  return (
    <Articulo
      titulo="Retirar dinero de Binance al banco: qué ve Hacienda"
      entradilla="Mover tus euros de un exchange a tu cuenta bancaria no es lo que paga impuestos. Lo que tributa es haber vendido tus criptomonedas, y eso hay que declararlo lo retires o no. Esto es lo que conviene saber antes de hacer la transferencia."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Antes de retirar una cantidad grande, háblalo con nosotros",
        texto: "Calculamos lo que debes declarar, te preparamos el informe de origen de fondos que suele pedir el banco y, si hay años sin declarar, te decimos cómo regularizarlos.",
        href: "/empezar/?plan=cripto",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Ley 10/2010 de prevención del blanqueo de capitales", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2010-6737" },
        { nombre: "Ley 58/2003 General Tributaria, artículo 27: recargos por presentar fuera de plazo", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186" },
      ]}
    >
      <h2>La transferencia no tributa; la venta, sí</h2>
      <p>
        Cuando vendes bitcoin por euros dentro de Binance, en ese momento tienes una ganancia o una pérdida
        patrimonial: la diferencia entre lo que recibes y lo que te costó. Esa operación es la que va a la Renta, en
        la base del ahorro, que tributa del 19 % al 30 %.
      </p>
      <p>
        Después, pasar esos euros a tu banco es mover tu propio dinero de una cuenta a otra. No genera impuestos por
        sí mismo. Por eso da igual, a efectos fiscales, que dejes los euros en el exchange o los retires: la venta
        hay que declararla el año en que se hizo.
      </p>
      <p>
        Lo mismo ocurre al revés. Si nunca retiras, pero has cambiado unas criptomonedas por otras, esas permutas
        también tributan. Lo explicamos en{" "}
        <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
      </p>

      <h2>Qué puede pedirte el banco</h2>
      <p>
        Los bancos están obligados por la ley de prevención del blanqueo de capitales a conocer el origen del dinero
        que reciben sus clientes. Una transferencia importante desde un exchange suele activar una pregunta: ¿de
        dónde sale este dinero?
      </p>
      <p>No es una inspección de Hacienda, pero conviene tener a mano:</p>
      <ul>
        <li>El historial de operaciones del exchange, con tus compras y la venta que origina el dinero.</li>
        <li>Los justificantes de las transferencias con las que compraste en su día.</li>
        <li>Un informe que relacione las compras, las ventas y el resultado fiscal de cada año.</li>
        <li>Si ya lo declaraste, la Renta del año en que vendiste.</li>
      </ul>
      <p>
        Si no puedes justificar el origen, el banco puede retener o rechazar la operación. Con la documentación
        preparada, normalmente se resuelve en pocos días.
      </p>

      <h2>Qué sabe ya Hacienda</h2>
      <p>Hacienda recibe información de varias fuentes, y cada año más:</p>
      <ul>
        <li>
          <strong>Tu propio banco</strong> informa de los movimientos y saldos de tus cuentas.
        </li>
        <li>
          <strong>Las plataformas que operan en España</strong> presentan declaraciones informativas sobre los
          saldos y las operaciones de sus clientes.
        </li>
        <li>
          <strong>Desde 2026</strong>, con la directiva DAC8, los exchanges de toda la Unión Europea registran las
          operaciones de sus clientes para enviarlas a la administración de su país de residencia. Lo contamos en{" "}
          <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
        </li>
        <li>
          <strong>Tú mismo</strong>, si presentas el Modelo 721 porque tienes más de 50.000 € en criptomonedas
          custodiadas fuera de España. Ver <Link href="/guias/modelo-721/">Modelo 721</Link>.
        </li>
      </ul>

      <h2>Si hay años sin declarar</h2>
      <p>
        Si vendiste o permutaste en años anteriores y no lo declaraste, lo recomendable es regularizar antes de que
        Hacienda te lo requiera. Se hace presentando una declaración complementaria de cada año afectado.
      </p>
      <p>
        Si lo haces por tu cuenta, sin requerimiento previo, no hay sanción. Pagas un recargo del 1 % más otro 1 % por
        cada mes completo de retraso. Pasados doce meses, el recargo es del 15 % más intereses de demora. Si es
        Hacienda quien lo detecta, en cambio, a la cuota se suma una sanción que puede ir del 50 % al 150 %.
      </p>
      <p>
        Las pérdidas también cuentan. Si en algún año perdiste dinero, declararlo puede permitirte compensar
        ganancias posteriores. Lo explicamos en{" "}
        <Link href="/guias/compensar-perdidas-criptomonedas/">Pérdidas con criptomonedas: cómo compensarlas</Link>.
      </p>

      <h2>Antes de retirar, en resumen</h2>
      <ol>
        <li>Calcula la ganancia o la pérdida de lo que vas a vender, con el método FIFO.</li>
        <li>Guarda el historial completo de la plataforma, no solo el del año.</li>
        <li>Prepara la documentación de origen de fondos antes de transferir.</li>
        <li>Si hay ejercicios sin declarar, regulariza antes de que llegue un requerimiento.</li>
      </ol>
    </Articulo>
  );
}
