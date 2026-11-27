import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Binance y Hacienda: qué hacer antes del cierre",
  description:
    "Binance cierra cuentas en España el 31 de diciembre de 2026. Qué tributa al sacar tu dinero, qué sabe ya Hacienda y por qué descargar ahora tu historial.",
  alternates: { canonical: "/guias/binance-hacienda/" },
};

export default function BinanceHacienda() {
  return (
    <Articulo
      titulo="Binance y Hacienda: qué declarar si cierras tu cuenta"
      entradilla="Binance no obtuvo la autorización europea para seguir operando en España y ha anunciado el cierre de las cuentas afectadas el 31 de diciembre de 2026. Antes de mover nada, conviene saber qué paga impuestos y qué no, y guardar los datos que te van a hacer falta para la Renta."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Sal de Binance sin sorpresas en la Renta",
        texto: "Calculamos lo que vas a declarar antes de que muevas nada, guardamos tu historial y, si hay años anteriores sin declarar, los regularizamos.",
        href: "/empezar/?plan=cripto",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "CNMV: MiCA, fin del periodo transitorio el 1 de julio de 2026", url: "https://www.cnmv.es/portal/mica/regulacion-criptoactivos?lang=es" },
        { nombre: "The Paypers: Binance cerrará cuentas en varios países de la UE (noviembre de 2026)", url: "https://thepaypers.com/crypto-web3-and-cbdc/news/binance-to-close-accounts-in-some-eu-countries-amid-mica-licence-gap" },
        { nombre: "Agencia Tributaria: preguntas frecuentes de los modelos 172 y 173", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-172-declaracion-informativa-sobre-virtuales/preguntas-frecuentes.html" },
        { nombre: "Ley 58/2003 General Tributaria, artículo 27 (recargos)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186" },
      ]}
    >
      <h2>Qué está pasando con Binance en España</h2>
      <p>
        El periodo transitorio del reglamento europeo MiCA terminó en España el 1 de julio de 2026: desde entonces solo
        pueden prestar servicios con criptomonedas las plataformas autorizadas por la CNMV o por otro supervisor
        europeo. Binance no consiguió esa autorización y, desde esa fecha, los usuarios españoles no pueden hacer
        depósitos ni abrir nuevas operaciones; sí pueden convertir a euros o a la stablecoin USDC y retirar.
      </p>
      <p>
        En noviembre, usuarios de España, Francia, Italia y Polonia empezaron a recibir avisos de cierre, y Binance
        confirmó que las cuentas afectadas se cerrarán con efecto el 31 de diciembre de 2026. Los avisos también
        anunciaban comisiones mensuales sobre los saldos que sigan dentro. Además, tras el ataque que sufrió el 29 de
        octubre, Binance reabrió las retiradas por fases y red a red, así que comprueba que la red que vas a usar está
        disponible antes de enviar.
      </p>
      <p>
        Esto es lo publicado a finales de noviembre de 2026. Revisa siempre el aviso que te haya llegado a ti, desde la
        propia aplicación, por si tus condiciones son distintas.
      </p>

      <h2>Lo primero: descarga tu historial completo</h2>
      <p>
        Cuando la cuenta se cierre, puede que ya no tengas acceso a tus datos. Y los vas a necesitar durante años: para
        la Renta de 2026, para calcular futuras ventas de lo que te lleves a otra plataforma y para contestar si
        Hacienda pregunta.
      </p>
      <ol>
        <li>
          Descarga desde la web el historial de operaciones, de depósitos y retiradas y de Earn, desde que abriste la
          cuenta, no solo el último año.
        </li>
        <li>Guarda también los extractos de los productos que hayas usado: P2P, Convert, staking o futuros.</li>
        <li>Haz una copia fuera del ordenador. Si algún día te piden justificar una compra de 2019, saldrá de aquí.</li>
      </ol>

      <h2>Qué paga impuestos al salir y qué no</h2>
      <ul>
        <li>
          <strong>Convertir a euros</strong>: es una venta. Genera una ganancia o una pérdida patrimonial que va a la
          Renta de 2026, en la base del ahorro, del 19 % al 30 %.
        </li>
        <li>
          <strong>Convertir a USDC u otra criptomoneda</strong>: también tributa, aunque no pases por euros, porque es
          una permuta. Ver <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
        </li>
        <li>
          <strong>Enviar tus criptomonedas a tu propia wallet o a otra plataforma</strong>: no tributa, porque siguen
          siendo tuyas. Guarda el justificante del envío para poder demostrarlo.
        </li>
        <li>
          <strong>Retirar euros al banco</strong>: no tributa por sí mismo; lo que tributa es la venta de antes. Lo
          contamos en <Link href="/guias/retirar-dinero-binance-hacienda/">Retirar dinero de Binance al banco</Link>.
        </li>
        <li>
          <strong>Recompensas de Earn o staking</strong> que te devuelvan: tributan cuando las recibes, por su valor en
          euros. Ver <Link href="/guias/staking-defi-impuestos/">Staking y DeFi: cómo tributan</Link>.
        </li>
      </ul>
      <p>
        Si vas a vender, calcula antes el resultado: según tus precios de compra, puede convenirte llevarte las
        criptomonedas a otra plataforma en vez de venderlas todas este año, o compensar ganancias con pérdidas.
      </p>

      <h2>Qué sabe ya Hacienda de tu Binance</h2>
      <p>
        Las plataformas registradas en España presentan cada año los modelos 172 y 173, con tus saldos a 31 de
        diciembre y tus operaciones, y según publicó la prensa especializada, Binance los presentó mientras operó aquí
        con su entidad española. Así que es muy probable que la Agencia Tributaria ya tenga tus
        datos de Binance de los últimos ejercicios. Si no los declaraste, mira{" "}
        <Link href="/guias/regularizar-criptomonedas/">Regularizar criptomonedas no declaradas</Link>: hacerlo antes de
        una carta cuesta un recargo, no una sanción.
      </p>

      <h2>¿Y el Modelo 721?</h2>
      <p>
        Si a 31 de diciembre de 2026 sigues teniendo criptomonedas en plataformas extranjeras por más de 50.000 € en
        total, tendrás que presentar el Modelo 721 entre el 1 de enero y el 31 de marzo de 2027. Si te queda saldo en
        Binance a esa fecha, revisa qué entidad lo custodia, porque de eso depende que cuente. Ver{" "}
        <Link href="/guias/modelo-721/">Modelo 721</Link>.
      </p>

      <h2>A dónde llevar tus criptomonedas</h2>
      <p>
        Comprueba que la plataforma nueva esté autorizada en el registro de la CNMV o de la autoridad europea ESMA. Y
        según dónde esté, cambia lo que Hacienda recibe de ti: lo explicamos para una plataforma española en{" "}
        <Link href="/guias/bit2me-hacienda/">Bit2Me y Hacienda</Link> y para otras europeas en{" "}
        <Link href="/guias/coinbase-hacienda/">Coinbase</Link>, <Link href="/guias/kraken-hacienda/">Kraken</Link> y{" "}
        <Link href="/guias/bitpanda-hacienda/">Bitpanda</Link>.
      </p>
    </Articulo>
  );
}
