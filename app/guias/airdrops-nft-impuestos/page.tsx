import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Airdrops y NFT: cómo tributan en la Renta",
  description:
    "Un airdrop tributa al recibirlo, en la base general. Vender un NFT que compraste es una ganancia patrimonial, y si lo creas tú, puede haber IVA del 21 %.",
  alternates: { canonical: "/guias/airdrops-nft-impuestos/" },
};

export default function AirdropsNft() {
  return (
    <Articulo
      titulo="Airdrops y NFT: cómo tributan en la Renta"
      entradilla="Son de lo más confuso de la fiscalidad cripto: algo que te llega gratis tributa, y un NFT no se declara igual si lo compraste para revenderlo que si lo has creado tú. Esto es lo que ha dicho Hacienda en sus consultas."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Airdrops, NFT y DeFi bien declarados",
        texto: "Valoramos cada airdrop el día que lo recibiste, calculamos tus ventas con el método FIFO y, si creas NFT, vemos contigo el IVA y el alta.",
        href: "/empezar/?plan=cripto",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "Dirección General de Tributos: consulta vinculante V1948-21 (airdrops)", url: "https://petete.tributos.hacienda.gob.es/consultas/?num_consulta=V1948-21" },
        { nombre: "Dirección General de Tributos: consulta vinculante V0648-24 (DeFi y airdrops)", url: "https://petete.tributos.hacienda.gob.es/consultas/?num_consulta=V0648-24" },
        { nombre: "Dirección General de Tributos: consulta vinculante V0486-22 (IVA de los NFT)", url: "https://petete.tributos.hacienda.gob.es/consultas/?num_consulta=V0486-22" },
        { nombre: "Ley 35/2006 del IRPF, artículos 33, 37.1.l y 45 a 48 (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764" },
      ]}
    >
      <h2>Airdrops: tributan al recibirlos</h2>
      <p>
        Un airdrop es el reparto gratuito de tokens de un proyecto, a veces por tener otra criptomoneda y a veces por
        haber usado una aplicación. Para la Dirección General de Tributos (consulta V1948-21, confirmada después en la
        V0648-24), recibirlo es una ganancia patrimonial que no viene de vender nada.
      </p>
      <ul>
        <li>
          <strong>Cuánto</strong>: el valor de mercado en euros de los tokens el día que los recibes.
        </li>
        <li>
          <strong>Dónde</strong>: en la base general, no en la del ahorro. Tributa a tu tipo marginal, que en los
          tramos altos supera el 45 % según tu comunidad.
        </li>
        <li>
          <strong>Y después</strong>: ese valor pasa a ser el precio de compra de los tokens. Cuando los vendas o los
          cambies, la diferencia es otra ganancia o pérdida, esta vez en la base del ahorro.
        </li>
      </ul>
      <p>
        El problema práctico es valorar tokens que el día del reparto apenas cotizaban. Conviene guardar una captura del
        precio o el dato de un agregador de precios de ese día.
      </p>

      <h2>NFT que compras y vendes</h2>
      <p>
        Si compras un NFT como inversión y luego lo vendes, la venta genera una ganancia o una pérdida patrimonial,
        como cualquier otro bien: la diferencia entre lo que te costó y lo que te pagan, con las comisiones de la
        plataforma. Va a la base del ahorro.
      </p>
      <p>
        Ojo con pagar en criptomonedas: si compras un NFT con ether, estás vendiendo ese ether, y eso es una operación
        aparte que también tributa. Ver{" "}
        <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
      </p>

      <h2>NFT que creas tú</h2>
      <p>
        Si eres artista o creador y vendes tus propios NFT, Hacienda no lo ve como una inversión sino como una
        actividad. En la consulta V0486-22, la Dirección General de Tributos consideró la venta de NFT de ilustraciones
        digitales como un servicio prestado por vía electrónica, con IVA del 21 % cuando se entiende realizado en
        España.
      </p>
      <p>
        Eso implica, en general, darte de alta como autónomo, facturar con IVA y declarar los ingresos como rendimientos
        de actividad económica. Si es tu caso, mira también{" "}
        <Link href="/guias/darse-de-alta-autonomo/">cómo darse de alta como autónomo</Link>.
      </p>

      <h2>Lo que conviene guardar</h2>
      <ol>
        <li>La fecha y la cantidad de cada airdrop, con el precio en euros de ese día.</li>
        <li>Las compras y ventas de NFT, con la transacción en la cadena y las comisiones.</li>
        <li>Si pagas con criptomonedas, el valor en euros de lo que entregaste.</li>
      </ol>
      <p>
        Si tienes airdrops o NFT de años anteriores sin declarar, se pueden corregir sin sanción antes de que Hacienda
        pregunte. Lo explicamos en{" "}
        <Link href="/guias/regularizar-criptomonedas/">Regularizar criptomonedas no declaradas</Link>.
      </p>
    </Articulo>
  );
}
