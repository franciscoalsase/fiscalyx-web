import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Bit2Me y Hacienda: qué informa y cómo declararlo",
  description:
    "Bit2Me es española e informa cada año a Hacienda de tus saldos y operaciones. Qué datos tiene ya la Agencia Tributaria y qué tienes que declarar tú.",
  alternates: { canonical: "/guias/bit2me-hacienda/" },
};

export default function Bit2meHacienda() {
  return (
    <Articulo
      titulo="Bit2Me y Hacienda: qué informa y cómo declararlo"
      entradilla="Bit2Me es una plataforma española, y eso cambia las cosas: cada año envía a la Agencia Tributaria tus saldos y tus operaciones. Hacienda ya tiene los datos; lo que falta es que tu declaración cuadre con ellos."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Que tu Renta cuadre con lo que Bit2Me ya ha enviado",
        texto: "Calculamos tus operaciones de Bit2Me y de cualquier otra plataforma con el método FIFO en euros, presentamos tu Renta y, si hay años sin declarar, los regularizamos antes de que Hacienda pregunte.",
        href: "/empezar/?plan=cripto",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "Orden HFP/887/2023, que aprueba los modelos 172 y 173 (BOE)", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2023-17430" },
        { nombre: "Agencia Tributaria: preguntas frecuentes de los modelos 172 y 173", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-172-declaracion-informativa-sobre-virtuales/preguntas-frecuentes.html" },
        { nombre: "Ministerio de Hacienda: proyecto de orden de los modelos 172, 175 y 721 (marzo de 2026)", url: "https://www.hacienda.gob.es/sgt/normativadoctrina/proyectos/09032026-main-proyecto-om-dac8.pdf" },
        { nombre: "Bit2Me: ¿tengo que presentar los modelos 172 o 173?", url: "https://support.bit2me.com/en/support/solutions/articles/35000236348" },
      ]}
    >
      <h2>Qué envía Bit2Me a Hacienda</h2>
      <p>
        Las plataformas de criptomonedas residentes en España están obligadas a presentar dos declaraciones
        informativas sobre sus clientes, aprobadas por la Orden HFP/887/2023:
      </p>
      <ul>
        <li>
          <strong>Modelo 172</strong>, en enero: el saldo que tenía cada cliente a 31 de diciembre, criptomoneda por
          criptomoneda y con su valor en euros.
        </li>
        <li>
          <strong>Modelo 173</strong>: las operaciones del año, es decir, compras, ventas, cambios entre criptomonedas y
          envíos y recepciones desde otras wallets.
        </li>
      </ul>
      <p>
        Bit2Me es una empresa española, autorizada por la CNMV como proveedor de servicios de criptoactivos, así que
        tus datos llevan años llegando a la Agencia Tributaria. Desde las operaciones de 2026, el proyecto de orden que
        adapta España a la directiva europea DAC8 sustituye el modelo 173 por uno nuevo, el 175, con más detalle. Lo
        explicamos en <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
      </p>
      <p>
        Tú no presentas esos modelos: los presenta Bit2Me. Lo que haces tú es declarar el resultado en tu Renta, y
        Hacienda lo compara con lo que le ha llegado.
      </p>

      <h2>Qué tienes que declarar tú</h2>
      <ul>
        <li>
          <strong>Ventas por euros</strong>: cada una es una ganancia o pérdida patrimonial, en la base del ahorro, que
          tributa del 19 % al 30 %.
        </li>
        <li>
          <strong>Cambios entre criptomonedas</strong>: también tributan, aunque no pases por euros. Ver{" "}
          <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
        </li>
        <li>
          <strong>Lo que generas en Earn</strong>: los rendimientos que recibes por dejar tus criptomonedas en
          productos de rentabilidad tributan cuando los recibes, por su valor en euros. Ver{" "}
          <Link href="/guias/staking-defi-impuestos/">Staking y DeFi: cómo tributan</Link>.
        </li>
        <li>
          <strong>Pagos con la tarjeta</strong>: si pagas con criptomonedas, cada pago es una venta.
        </li>
      </ul>
      <p>
        El modelo 173 no le dice a Hacienda cuánto ganaste: informa de cada operación y su valor, pero no de lo que te
        costaron las criptomonedas que vendiste, sobre todo si las compraste en otra plataforma. Ese cálculo, con el
        método FIFO en euros, es el que tienes que hacer tú.
      </p>

      <h2>Por qué no cuadra a mucha gente</h2>
      <p>
        El caso típico: compraste en otra plataforma, enviaste las criptomonedas a Bit2Me y las vendiste allí. Hacienda
        ve una venta en Bit2Me, pero Bit2Me no sabe cuánto pagaste por ellas. Si no lo declaras con tu precio de compra
        bien justificado, Hacienda puede tomar como ganancia el importe entero de la venta.
      </p>
      <p>
        Por eso conviene tener el historial de todas las plataformas que hayas usado, no solo el de Bit2Me, y poder
        enlazar cada envío con su compra de origen.
      </p>

      <h2>Cómo sacar tu historial de Bit2Me</h2>
      <ol>
        <li>Descarga desde tu cuenta el historial de movimientos de cada producto que hayas usado: el monedero, Pro y Earn.</li>
        <li>Pide el periodo completo desde que abriste la cuenta: el FIFO necesita tus compras más antiguas.</li>
        <li>Junta los historiales de las demás plataformas y wallets por las que hayan pasado esas criptomonedas.</li>
      </ol>

      <h2>Bit2Me y el Modelo 721</h2>
      <p>
        El Modelo 721 es para criptomonedas custodiadas por plataformas extranjeras. Lo que tienes en Bit2Me ya lo
        informa Bit2Me en el modelo 172, así que no cuenta para el límite de 50.000 € del 721. Si además tienes saldo en
        exchanges de fuera, como Coinbase o Kraken, ese sí cuenta. Lo explicamos en{" "}
        <Link href="/guias/modelo-721/">Modelo 721: quién tiene que presentarlo y cuándo</Link>.
      </p>

      <h2>Si hay años sin declarar</h2>
      <p>
        Con plataformas españolas, Hacienda no tiene que esperar a DAC8: ya tiene los datos. Si no declaraste bien,
        regularizar por tu cuenta sale mucho más barato que esperar una carta. Una complementaria voluntaria lleva un
        recargo del 1 % más otro 1 % por mes completo de retraso, y del 15 % más intereses a partir del año, sin
        sanción. Si llega antes un requerimiento, mira{" "}
        <Link href="/guias/requerimiento-hacienda/">Te ha llegado una carta de Hacienda: qué hacer</Link>.
      </p>
    </Articulo>
  );
}
