import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Staking y DeFi: cómo tributan en la Renta",
  description:
    "Cómo declarar el staking, los préstamos y los pools de liquidez: qué dice Hacienda, dónde van en la Renta y qué pasa al vender lo recibido.",
  alternates: { canonical: "/guias/staking-defi-impuestos/" },
};

export default function StakingDefi() {
  return (
    <Articulo
      titulo="Staking y DeFi: cómo tributan las recompensas"
      entradilla="Las recompensas de staking tributan el día que las recibes, aunque no las vendas. Te explicamos el criterio de Hacienda, cómo se valoran y por qué cada recompensa abre una nueva compra a efectos de FIFO."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Cientos de recompensas pequeñas, una sola Renta",
        texto: "Recogemos cada recompensa de tus plataformas y monederos, la valoramos en euros a su fecha y la integramos con tus compras y ventas.",
        href: "/empezar/?plan=cripto",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Dirección General de Tributos: consulta vinculante V1766-22 sobre staking", url: "https://www.cuatrecasas.com/es/spain/articulo/tributacion-del-staking-en-irpf" },
        { nombre: "Dirección General de Tributos: consulta vinculante V0648-24 sobre DeFi", url: "https://www.cuatrecasas.com/es/spain/fiscalidad/art/defi-dgt-analiza-diversas-cuestiones" },
        { nombre: "Consulta vinculante V1551-25: permutas y staking", url: "https://www.supercontable.com/boletin/H/articulos/tributacion_irpf_perdidas_intercambio_criptomonedas_operaciones_de_staking.html" },
      ]}
    >
      <h2>Qué dice Hacienda del staking</h2>
      <p>
        La Dirección General de Tributos fijó su criterio en la consulta vinculante V1766-22 y lo ha repetido
        después en otras, como la V1551-25. Las recompensas que recibes por bloquear tus criptomonedas son{" "}
        <strong>rendimientos del capital mobiliario</strong>, igual que los intereses de un depósito: estás cediendo
        tus activos a cambio de una rentabilidad.
      </p>
      <p>Las consecuencias prácticas son tres:</p>
      <ul>
        <li>
          <strong>Tributan al recibirlas</strong>, no cuando las vendes. Cada recompensa se valora por su precio de
          mercado en euros el día en que llega a tu cuenta.
        </li>
        <li>
          <strong>Van a la base del ahorro</strong> de la Renta, que tributa del 19 % al 30 % según el importe.
        </li>
        <li>
          <strong>Nadie te practica retención.</strong> A diferencia de un banco, la plataforma no adelanta nada a
          Hacienda, así que todo se paga en la declaración.
        </li>
      </ul>
      <p>
        Hacienda descarta que el staking sea una actividad económica para un particular, aunque actúes como
        validador con tu propio equipo, porque no hay una organización de medios propia de un negocio.
      </p>

      <h2>Un ejemplo con números</h2>
      <p>
        En mayo recibes 0,5 ETH de recompensas de staking, cuando el ETH cotiza a 3.000 €. Ese día obtienes un
        rendimiento del capital mobiliario de 1.500 €, que declararás en la Renta.
      </p>
      <p>
        Esos 0,5 ETH quedan con un coste de 1.500 €. Si en noviembre los vendes a 3.600 € cada uno, recibes 1.800 € y
        tienes una ganancia patrimonial de 300 €. Si el precio hubiera caído y los vendieras por 1.200 €, tendrías
        una pérdida de 300 € que podrías compensar.
      </p>
      <p>
        Cada recompensa es, a efectos de FIFO, una compra nueva con su fecha y su coste. Con recompensas diarias, eso
        son cientos de entradas al año. Lo explicamos en{" "}
        <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
      </p>

      <h2>Préstamos, pools de liquidez y otras operaciones DeFi</h2>
      <p>
        En la consulta V0648-24, Hacienda aplicó el mismo criterio a los rendimientos de los pools de liquidez y de
        las plataformas que optimizan rendimientos: son rendimientos del capital mobiliario, se valoran en euros el
        día que los recibes y van a la base del ahorro. Lo mismo ocurre con los intereses de prestar tus
        criptomonedas en una plataforma.
      </p>
      <p>Hay zonas que Hacienda todavía no ha aclarado, y conviene saberlo:</p>
      <ul>
        <li>
          <strong>Los tokens que recibes al aportar liquidez.</strong> La consulta no dice si recibir esos tokens a
          cambio de tus criptomonedas es una permuta. Hay argumentos para las dos posturas.
        </li>
        <li>
          <strong>La pérdida impermanente.</strong> Cuando retiras tu liquidez y recibes una proporción distinta de
          activos, hay que valorar lo que entregas y lo que recibes con un criterio coherente y documentado.
        </li>
      </ul>
      <p>
        En estos casos no hay una respuesta única. Lo importante es elegir un criterio razonable, aplicarlo siempre
        igual y poder justificarlo si Hacienda pregunta.
      </p>

      <h2>Recompensas que no son staking</h2>
      <p>
        No todo lo que te regala una plataforma es staking. Las criptomonedas que recibes por promociones, por invitar
        a otros usuarios o por participar en campañas del exchange no son una cesión de capital: Hacienda las ha
        tratado como ganancias patrimoniales que no vienen de una venta, y van a la base general, donde el tipo puede
        ser más alto.
      </p>

      <h2>Qué tener preparado</h2>
      <ol>
        <li>El historial de recompensas de cada plataforma, con fecha y cantidad.</li>
        <li>El precio en euros de cada recompensa el día que la recibiste.</li>
        <li>Las direcciones de tus monederos si haces staking fuera de un exchange.</li>
        <li>Las comisiones que cobra la plataforma o el validador, que reducen el rendimiento.</li>
      </ol>
      <p>
        Desde 2026, los exchanges de la Unión Europea registran estas operaciones para enviarlas a las
        administraciones tributarias. Lo contamos en{" "}
        <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
      </p>
    </Articulo>
  );
}
