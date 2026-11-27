import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";
import { prices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regularizar criptomonedas no declaradas",
  description:
    "Qué años puedes corregir todavía, qué recargo pagas si lo haces antes de que llegue una carta, cómo se presenta y qué pasa con las pérdidas que no declaraste.",
  alternates: { canonical: "/guias/regularizar-criptomonedas/" },
};

export default function RegularizarCripto() {
  const diagnostico = prices.cripto[2].tiers[0].price;
  return (
    <Articulo
      titulo="Regularizar criptomonedas no declaradas: cómo y cuánto cuesta"
      entradilla="Si vendiste o cambiaste criptomonedas y no lo declaraste, todavía puedes arreglarlo por tu cuenta, sin sanción. La diferencia entre hacerlo ahora o esperar a que Hacienda te escriba es grande, y con los datos de los exchanges llegando cada año, el margen se estrecha."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Te decimos qué años corregir y cuánto te costaría",
        texto: `Empezamos con un diagnóstico de ${diagnostico}, que te descontamos si seguimos: revisamos tus plataformas, calculamos cada año con el método FIFO y te damos el importe exacto antes de presentar nada.`,
        href: "/empezar/?plan=cripto",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "Ley 58/2003 General Tributaria: artículo 27 (recargos) y artículos 66 y 191", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186" },
        { nombre: "Agencia Tributaria: recargos por presentación fuera de plazo", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c18-cuota-liquida-resultante-autoliquidacion/regularizacion-situaciones-tributarias/recargos-aplicables.html" },
        { nombre: "Agencia Tributaria: la autoliquidación rectificativa del IRPF", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c18-cuota-liquida-resultante-autoliquidacion/regularizacion-situaciones-tributarias/general.html" },
      ]}
    >
      <h2>Qué años puedes corregir todavía</h2>
      <p>
        Hacienda tiene cuatro años para revisar cada declaración, contados desde que acaba el plazo de presentarla. A
        finales de 2026 siguen abiertos estos ejercicios:
      </p>
      <ul>
        <li>
          <strong>2022</strong>: hasta el 30 de junio de 2027.
        </li>
        <li>
          <strong>2023, 2024 y 2025</strong>: hasta 2028, 2029 y 2030, respectivamente.
        </li>
      </ul>
      <p>
        Lo de 2021 y antes ya ha prescrito con carácter general, aunque las criptomonedas que compraste entonces siguen
        contando: su precio de compra es el que usarás al calcular las ventas de años posteriores con el método FIFO.
      </p>

      <h2>Lo que cuesta hacerlo por tu cuenta</h2>
      <p>
        Si corriges antes de que Hacienda te requiera, no hay sanción. Pagas el impuesto que faltó más un recargo que
        depende del retraso:
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Retraso desde el fin del plazo</th>
              <th scope="col">Recargo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Menos de un mes</th>
              <td>1 %</td>
            </tr>
            <tr>
              <th scope="row">Cada mes completo más, hasta un año</th>
              <td>1 % más por mes (2 %, 3 %… hasta el 12 %)</td>
            </tr>
            <tr>
              <th scope="row">Más de un año</th>
              <td>15 %, más intereses de demora desde el mes 13</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        El recargo se reduce un 25 % si pagas todo al presentar o en el plazo que te dan, sin aplazarlo. Así, un 15 % se
        queda en un 11,25 %.
      </p>

      <h2>Lo que cuesta si te descubren</h2>
      <p>
        Si la corrección llega después de un requerimiento o una comprobación, ya no hay recargo sino sanción: entre el
        50 % y el 150 % de lo que dejaste de pagar, según la gravedad, además de la cuota y los intereses. Hay
        reducciones si aceptas la propuesta y pagas pronto, pero el resultado casi siempre supera con mucho al recargo.
      </p>
      <p>
        Y Hacienda cada vez lo tiene más fácil: las plataformas españolas le envían tus saldos y operaciones cada año, y
        con la directiva DAC8 recibe desde 2026 los de los exchanges de toda la Unión Europea. Lo contamos en{" "}
        <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
      </p>

      <h2>Cómo se presenta</h2>
      <ol>
        <li>
          <strong>Reúne el historial completo</strong> de todas las plataformas y wallets que hayas usado, desde la
          primera compra. Tienes cómo descargarlo de{" "}
          <Link href="/guias/coinbase-hacienda/">Coinbase</Link>, <Link href="/guias/bit2me-hacienda/">Bit2Me</Link>,{" "}
          <Link href="/guias/kraken-hacienda/">Kraken</Link> y <Link href="/guias/bitpanda-hacienda/">Bitpanda</Link>.
        </li>
        <li>
          <strong>Calcula cada año por separado</strong>, con el método FIFO en euros, incluidos los cambios entre
          criptomonedas, el staking y las comisiones.
        </li>
        <li>
          <strong>Corrige la declaración de cada año.</strong> Desde la Renta de 2024 se hace con una autoliquidación
          rectificativa en Renta Web; para 2023 y años anteriores, con el sistema de complementaria que había entonces.
        </li>
        <li>
          <strong>Paga o domicilia</strong> el resultado. Hacienda te enviará después la liquidación del recargo.
        </li>
        <li>
          <strong>Guarda el informe del cálculo</strong>: es lo que te pedirán si algún día preguntan.
        </li>
      </ol>

      <h2>Las pérdidas también se regularizan</h2>
      <p>
        Si en algún año perdiste dinero y no lo declaraste, también puedes corregirlo. Las pérdidas declaradas se
        compensan con ganancias del mismo año y de los cuatro siguientes, así que declarar las de 2022 o 2023 puede
        rebajar lo que pagues en 2025 o 2026. Lo explicamos en{" "}
        <Link href="/guias/compensar-perdidas-criptomonedas/">Pérdidas con criptomonedas: cómo compensarlas</Link>.
      </p>

      <h2>¿Y el Modelo 721?</h2>
      <p>
        Si tenías más de 50.000 € en criptomonedas en plataformas extranjeras a 31 de diciembre y no presentaste el
        Modelo 721, también conviene presentarlo fuera de plazo antes de que te lo pidan: la sanción es menor cuando lo
        haces por tu cuenta. Ver <Link href="/guias/modelo-721/">Modelo 721</Link>.
      </p>

      <h2>Si ya te ha llegado una carta</h2>
      <p>
        Entonces ya no es una regularización voluntaria, pero lo que contestes y cómo lo justifiques sigue marcando la
        diferencia. Lee primero{" "}
        <Link href="/guias/requerimiento-hacienda/">Te ha llegado una carta de Hacienda: qué hacer</Link> y no respondas
        sin tener el cálculo hecho.
      </p>
    </Articulo>
  );
}
