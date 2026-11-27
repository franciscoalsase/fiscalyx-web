import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Kraken y Hacienda: qué informa y cómo declararlo",
  description:
    "Qué sabrá Hacienda de tu cuenta de Kraken con DAC8, qué archivos descargar (operaciones y libro mayor) y cómo declarar ventas, staking y futuros.",
  alternates: { canonical: "/guias/kraken-hacienda/" },
};

export default function KrakenHacienda() {
  return (
    <Articulo
      titulo="Kraken y Hacienda: qué informa y cómo declararlo"
      entradilla="Kraken da servicio a sus clientes europeos desde Irlanda. Desde 2026 tus operaciones llegan a Hacienda por la vía europea, y declararlas bien empieza por descargar los dos archivos correctos."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Te pasamos tu Kraken a la Renta, operación por operación",
        texto: "Cruzamos operaciones y libro mayor, aplicamos el método FIFO en euros, incluimos staking y futuros, y te dejamos el informe que lo justifica.",
        href: "/empezar/?plan=cripto",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "Kraken: cómo exportar el historial de tu cuenta", url: "https://support.kraken.com/hc/en-us/articles/208267878-How-to-export-your-account-history" },
        { nombre: "Kraken: licencia MiCA del Banco Central de Irlanda", url: "https://blog.kraken.com/news/mica-license-central-bank-of-ireland" },
        { nombre: "Comisión Europea: DAC8", url: "https://taxation-customs.ec.europa.eu/taxation/tax-transparency-cooperation/administrative-co-operation-and-mutual-assistance/directive-administrative-cooperation-dac/dac8_en" },
        { nombre: "Agencia Tributaria: preguntas frecuentes de los modelos 172 y 173", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-172-declaracion-informativa-sobre-virtuales/preguntas-frecuentes.html" },
      ]}
    >
      <h2>Qué sabe Hacienda de tu cuenta de Kraken</h2>
      <p>
        En junio de 2025 Kraken obtuvo su licencia europea MiCA del Banco Central de Irlanda, y desde esa entidad
        atiende a sus clientes de toda Europa, también a los españoles. No es una plataforma residente en España, así
        que los modelos 172 y 173, que presentan las plataformas españolas, no son la vía por la que llegan tus datos.
      </p>
      <p>
        La vía es la directiva DAC8. Desde el 1 de enero de 2026, Kraken registra la residencia fiscal de cada cliente y
        sus operaciones, las comunica a Irlanda, e Irlanda las envía a la Agencia Tributaria. Las de 2026 se
        intercambian como tarde el 30 de septiembre de 2027, a tiempo para revisar la Renta de 2026. Lo explicamos en{" "}
        <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
      </p>

      <h2>Qué tienes que declarar</h2>
      <ul>
        <li>
          <strong>Ventas por euros o dólares</strong>: ganancia o pérdida patrimonial en la base del ahorro, del 19 % al
          30 %.
        </li>
        <li>
          <strong>Cambios entre criptomonedas</strong>, incluidas las conversiones a stablecoins: también tributan. Ver{" "}
          <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
        </li>
        <li>
          <strong>Recompensas de staking</strong>: tributan cuando las recibes, por su valor en euros ese día. Ver{" "}
          <Link href="/guias/staking-defi-impuestos/">Staking y DeFi: cómo tributan</Link>.
        </li>
        <li>
          <strong>Margen y futuros</strong>: cada posición que cierras deja una ganancia o una pérdida que también va a
          la Renta. Son operaciones que conviene revisar una a una, porque el archivo de Kraken las separa en varios
          movimientos.
        </li>
      </ul>

      <h2>Los dos archivos que necesitas</h2>
      <p>
        Kraken permite exportar varios tipos de historial, y para la Renta hacen falta dos, porque cada uno cuenta una
        parte:
      </p>
      <ul>
        <li>
          <strong>Operaciones (Trades)</strong>: cada compra y venta ejecutada, con su precio y su comisión.
        </li>
        <li>
          <strong>Libro mayor (Ledgers)</strong>: todos los cambios de saldo, es decir, depósitos, retiradas,
          comisiones, recompensas de staking y movimientos entre tus cuentas.
        </li>
      </ul>
      <p>
        Con solo las operaciones te faltan el staking y las transferencias; con solo el libro mayor, el detalle de
        cada venta. El cálculo bueno cruza los dos.
      </p>
      <ol>
        <li>Inicia sesión, pulsa el icono de tu perfil y entra en Documentos (o Extractos, según la versión).</li>
        <li>Crea una exportación de Operaciones y otra de Libro mayor, en CSV.</li>
        <li>
          Pon como fecha de inicio el día que abriste la cuenta, no el 1 de enero: el método FIFO necesita tus compras
          más antiguas.
        </li>
        <li>Descarga los archivos cuando estén listos y guárdalos junto con los de otras plataformas.</li>
      </ol>

      <h2>¿Tienes que presentar el Modelo 721?</h2>
      <p>
        Kraken custodia tus criptomonedas desde fuera de España. Si a 31 de diciembre sumabas más de 50.000 € en
        criptomonedas en plataformas extranjeras, presentas el Modelo 721 entre el 1 de enero y el 31 de marzo. No se
        paga nada, pero es obligatorio. Más en{" "}
        <Link href="/guias/modelo-721/">Modelo 721: quién tiene que presentarlo y cuándo</Link>.
      </p>

      <h2>Si hay años sin declarar</h2>
      <p>
        Lo que no declaraste de 2022 en adelante puede regularizarse con complementarias voluntarias: recargo del 1 %
        más otro 1 % por mes completo de retraso, y del 15 % más intereses pasados doce meses, sin sanción. Hacerlo
        antes de que lleguen los primeros datos de DAC8 es lo más barato. Si ya tienes una carta, mira{" "}
        <Link href="/guias/requerimiento-hacienda/">Te ha llegado una carta de Hacienda: qué hacer</Link>.
      </p>
      <p>
        ¿Usas más de una plataforma? Tienes las guías de <Link href="/guias/binance-hacienda/">Binance</Link>, <Link href="/guias/coinbase-hacienda/">Coinbase</Link>, <Link href="/guias/bit2me-hacienda/">Bit2Me</Link> y <Link href="/guias/bitpanda-hacienda/">Bitpanda</Link>, y cómo juntarlo todo en{" "}
        <Link href="/guias/declarar-criptomonedas-renta/">Cómo declarar criptomonedas en la Renta</Link>.
      </p>
    </Articulo>
  );
}
