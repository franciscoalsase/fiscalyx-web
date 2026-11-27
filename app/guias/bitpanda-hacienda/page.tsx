import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Bitpanda y Hacienda: qué informa y cómo declararlo",
  description:
    "Qué sabrá Hacienda de tu cuenta de Bitpanda con DAC8, cómo declarar criptomonedas, planes de ahorro, acciones y metales, y cómo sacar tu historial.",
  alternates: { canonical: "/guias/bitpanda-hacienda/" },
};

export default function BitpandaHacienda() {
  return (
    <Articulo
      titulo="Bitpanda y Hacienda: qué informa y cómo declararlo"
      entradilla="Bitpanda es austriaca y, además de criptomonedas, vende acciones, ETF y metales. Eso la hace cómoda para invertir y algo más enrevesada para declarar: cada producto va por su lado en la Renta."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Tu Bitpanda entero, bien declarado",
        texto: "Separamos criptomonedas, acciones y metales, calculamos cada venta con el método FIFO en euros y te presentamos la Renta con el informe que lo justifica.",
        href: "/empezar/?plan=cripto",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "Bitpanda: descargar el historial de la cuenta", url: "https://support.bitpanda.com/hc/en-us/articles/360000122759" },
        { nombre: "AMF (Francia): ficha MiCA de Bitpanda GmbH, autorizada en Austria", url: "https://www.amf-france.org/en/warnings/white-lists/casp/bitpanda-gmbh" },
        { nombre: "Comisión Europea: DAC8", url: "https://taxation-customs.ec.europa.eu/taxation/tax-transparency-cooperation/administrative-co-operation-and-mutual-assistance/directive-administrative-cooperation-dac/dac8_en" },
        { nombre: "Agencia Tributaria: preguntas frecuentes de los modelos 172 y 173", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-172-declaracion-informativa-sobre-virtuales/preguntas-frecuentes.html" },
      ]}
    >
      <h2>Qué sabe Hacienda de tu cuenta de Bitpanda</h2>
      <p>
        Bitpanda GmbH tiene su licencia europea MiCA de la autoridad financiera de Austria desde abril de 2025 y desde
        allí atiende a sus clientes españoles. Como no es una plataforma residente en España, no presenta los modelos
        172 y 173 de las plataformas españolas.
      </p>
      <p>
        Tus datos llegan por la directiva DAC8: desde el 1 de enero de 2026, Bitpanda registra tu residencia fiscal y
        tus operaciones con criptomonedas y las comunica a Austria, que las envía a la Agencia Tributaria. Las de 2026,
        como tarde el 30 de septiembre de 2027. Más en{" "}
        <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
      </p>

      <h2>Criptomonedas: lo que tributa</h2>
      <ul>
        <li>
          <strong>Ventas por euros</strong>: ganancia o pérdida patrimonial en la base del ahorro, del 19 % al 30 %.
        </li>
        <li>
          <strong>Cambios entre criptomonedas</strong>, también dentro de Bitpanda: tributan aunque no pases por
          euros. Ver <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
        </li>
        <li>
          <strong>Staking y recompensas</strong>: tributan al recibirlas, por su valor en euros ese día. Ver{" "}
          <Link href="/guias/staking-defi-impuestos/">Staking y DeFi: cómo tributan</Link>.
        </li>
      </ul>

      <h2>El plan de ahorro: muchas compras pequeñas</h2>
      <p>
        Si tienes un plan de ahorro que compra cada semana o cada mes, comprar no tributa, pero cada compra es un lote
        con su propio precio. Cuando vendas, el método FIFO te obliga a ir restando de los lotes más antiguos primero,
        y con cientos de compras pequeñas el cálculo a mano se vuelve imposible. Es el caso típico en el que una venta
        modesta acaba con un resultado distinto del que muestra la aplicación.
      </p>

      <h2>Acciones, ETF y metales: van aparte</h2>
      <p>
        Lo que no son criptomonedas también se declara, pero no en el mismo sitio de la Renta ni siempre con las
        mismas reglas:
      </p>
      <ul>
        <li>
          <strong>Acciones y ETF</strong>: sus ventas son ganancias o pérdidas patrimoniales de otro tipo de activo, y
          los dividendos, rendimientos del capital. Hay normas propias, como la que impide restar una pérdida si
          recompras el mismo valor en los dos meses anteriores o posteriores.
        </li>
        <li>
          <strong>Metales preciosos</strong>: vender oro o plata también genera una ganancia o pérdida patrimonial.
        </li>
      </ul>
      <p>
        Por eso conviene que quien te haga la Renta separe bien cada producto del historial de Bitpanda antes de
        calcular nada.
      </p>

      <h2>Cómo sacar tu historial de Bitpanda</h2>
      <ol>
        <li>Entra en tu cuenta desde el navegador y abre el historial de transacciones desde el menú de tu perfil.</li>
        <li>Descárgalo en CSV para todo el periodo desde que abriste la cuenta; Bitpanda también lo ofrece en PDF.</li>
        <li>Guárdalo con los de otras plataformas por las que hayan pasado tus criptomonedas.</li>
      </ol>

      <h2>¿Tienes que presentar el Modelo 721?</h2>
      <p>
        Las criptomonedas que Bitpanda custodia están fuera de España. Si a 31 de diciembre sumabas más de 50.000 € en
        criptomonedas en plataformas extranjeras, presentas el Modelo 721 entre el 1 de enero y el 31 de marzo. Las
        acciones y los metales no cuentan para ese límite. Más en{" "}
        <Link href="/guias/modelo-721/">Modelo 721: quién tiene que presentarlo y cuándo</Link>.
      </p>

      <h2>Si hay años sin declarar</h2>
      <p>
        Regularizar por tu cuenta, antes de que Hacienda reciba los datos de DAC8, sale mucho más barato: recargo del 1 %
        más otro 1 % por mes completo de retraso, y del 15 % más intereses pasados doce meses, sin sanción. Y las
        pérdidas que no declaraste pueden servirte para{" "}
        <Link href="/guias/compensar-perdidas-criptomonedas/">compensar ganancias</Link>.
      </p>
      <p>
        ¿Usas más de una plataforma? Tienes las guías de <Link href="/guias/binance-hacienda/">Binance</Link>, <Link href="/guias/coinbase-hacienda/">Coinbase</Link>, <Link href="/guias/bit2me-hacienda/">Bit2Me</Link> y <Link href="/guias/kraken-hacienda/">Kraken</Link>, y cómo juntarlo todo en{" "}
        <Link href="/guias/declarar-criptomonedas-renta/">Cómo declarar criptomonedas en la Renta</Link>.
      </p>
    </Articulo>
  );
}
