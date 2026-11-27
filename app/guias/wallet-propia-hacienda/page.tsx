import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Wallet propia y Hacienda: qué ve y qué declarar",
  description:
    "MetaMask, Ledger o Trezor: si guardas tú las claves, no presentas el Modelo 721, pero Hacienda sí ve lo que entra y sale de los exchanges. Qué declarar.",
  alternates: { canonical: "/guias/wallet-propia-hacienda/" },
};

export default function WalletPropia() {
  return (
    <Articulo
      titulo="Wallet propia (MetaMask, Ledger) y Hacienda: qué ve y qué declarar"
      entradilla="Guardar tus criptomonedas en tu propio monedero tiene una ventaja fiscal clara: no cuentan para el Modelo 721. Pero no las hace invisibles. Esto es lo que Hacienda puede saber, lo que tienes que declarar tú y cómo demostrar que lo que mueves sigue siendo tuyo."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Wallets, exchanges y DeFi en un solo cálculo",
        texto: "Unimos tus exchanges y tus wallets, seguimos cada envío hasta su compra de origen y te presentamos la Renta con el informe que lo justifica.",
        href: "/empezar/?plan=cripto",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: preguntas frecuentes del Modelo 721", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-721-decla-sobre-monedas-extranjero/preguntas-frecuentes-sobre-modelo-721.html" },
        { nombre: "Agencia Tributaria: preguntas frecuentes de los modelos 172 y 173", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-172-declaracion-informativa-sobre-virtuales/preguntas-frecuentes.html" },
        { nombre: "Comisión Europea: DAC8", url: "https://taxation-customs.ec.europa.eu/taxation/tax-transparency-cooperation/administrative-co-operation-and-mutual-assistance/directive-administrative-cooperation-dac/dac8_en" },
        { nombre: "Uría Menéndez: consultas de la DGT sobre criptoactivos (pérdidas por robo o quiebra)", url: "https://www.uria.com/es/publicaciones/newsletter/1794-tributario" },
      ]}
    >
      <h2>Wallet propia y Modelo 721: no cuenta</h2>
      <p>
        El Modelo 721 es para las criptomonedas que custodia por ti una plataforma de fuera de España. La Agencia
        Tributaria aclara en sus preguntas frecuentes que, sea un monedero conectado a internet o uno físico, las
        criptomonedas de un monedero cuyas claves privadas controlas tú no se incluyen. Así que lo que tengas en
        MetaMask, Ledger, Trezor o cualquier wallet en la que solo tú tengas la frase de recuperación no suma para el
        límite de 50.000 €.
      </p>
      <p>
        Lo que sí cuenta son los saldos en exchanges extranjeros. Lo explicamos en{" "}
        <Link href="/guias/modelo-721/">Modelo 721: quién tiene que presentarlo y cuándo</Link>.
      </p>

      <h2>Lo que Hacienda sí puede ver</h2>
      <p>Tu wallet no informa a nadie, pero las plataformas por las que pasan tus criptomonedas sí:</p>
      <ul>
        <li>
          <strong>Las plataformas españolas</strong> informan cada año, en el modelo 173, de las operaciones de sus
          clientes, incluidos los envíos a direcciones externas y las recepciones desde ellas.
        </li>
        <li>
          <strong>Las plataformas europeas</strong>, desde 2026, comunican con la directiva DAC8 las transferencias de
          sus clientes, también las que van a una wallet propia. Ver{" "}
          <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
        </li>
      </ul>
      <p>
        En la práctica, Hacienda puede saber que sacaste 2 bitcoins de un exchange hacia una dirección, aunque no sepa
        qué pasó después dentro de la cadena.
      </p>

      <h2>Qué tienes que declarar</h2>
      <p>Mover criptomonedas entre tus propias wallets y exchanges no tributa. Lo que tributa es lo que haces con ellas:</p>
      <ul>
        <li>
          <strong>Cambiarlas por otra criptomoneda</strong> en un exchange descentralizado, como Uniswap: es una
          permuta y tributa igual que en un exchange. Ver{" "}
          <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
        </li>
        <li>
          <strong>Venderlas o pagar con ellas</strong>: ganancia o pérdida patrimonial en la base del ahorro.
        </li>
        <li>
          <strong>Staking, préstamos o pools de liquidez</strong> desde tu wallet. Ver{" "}
          <Link href="/guias/staking-defi-impuestos/">Staking y DeFi: cómo tributan</Link>.
        </li>
        <li>
          <strong>Airdrops</strong> que te lleguen a la wallet. Ver{" "}
          <Link href="/guias/airdrops-nft-impuestos/">Airdrops y NFT: cómo tributan</Link>.
        </li>
      </ul>

      <h2>Cómo demostrar que los envíos son tuyos</h2>
      <p>
        El riesgo de una wallet propia no es que Hacienda la vea, sino no poder explicar los movimientos. Si sacas
        criptomonedas de un exchange y meses después vuelven a otro, tienes que poder enseñar que son las mismas y
        cuánto te costaron al principio. Si no, Hacienda puede tratar la entrada como una ganancia sin coste.
      </p>
      <ol>
        <li>Apunta las direcciones de todas tus wallets.</li>
        <li>Guarda los justificantes de cada envío y recepción: fecha, importe y el identificador de la transacción.</li>
        <li>Descarga el historial de la wallet o de un explorador de bloques, una vez al año.</li>
        <li>Conserva el historial de los exchanges desde la primera compra, que es lo que fija tu precio de coste.</li>
      </ol>

      <h2>Si pierdes el acceso o te roban</h2>
      <p>
        Perder la frase de recuperación o sufrir un robo no se convierte automáticamente en una pérdida que puedas
        restar en la Renta. La Dirección General de Tributos ha admitido pérdidas por robo o por quiebra de una
        plataforma, que van a la base general, pero exige poder justificarlas: denuncia, pruebas de la operación y, en
        la quiebra, que el crédito pueda darse por incobrable. Sin pruebas, lo normal es que no se admita.
      </p>
    </Articulo>
  );
}
