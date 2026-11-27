import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Coinbase y Hacienda: qué informa y cómo declararlo",
  description:
    "Qué sabrá Hacienda de tu cuenta de Coinbase con DAC8, por qué su informe de ganancias no sirve para España y cómo declarar tus operaciones en la Renta.",
  alternates: { canonical: "/guias/coinbase-hacienda/" },
};

export default function CoinbaseHacienda() {
  return (
    <Articulo
      titulo="Coinbase y Hacienda: qué informa y cómo declararlo"
      entradilla="Coinbase no es una empresa española, pero eso ya no significa que Hacienda no vea tus operaciones. Esto es lo que llega a la Agencia Tributaria, lo que tienes que declarar tú y cómo sacar de Coinbase los datos para hacerlo bien."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Te calculamos tu Coinbase operación por operación",
        texto: "Partimos de tu historial completo, aplicamos el método FIFO en euros y te dejamos la Renta presentada, con el informe que lo justifica si Hacienda pregunta.",
        href: "/empezar/?plan=cripto",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: preguntas frecuentes de los modelos 172 y 173", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-172-declaracion-informativa-sobre-virtuales/preguntas-frecuentes.html" },
        { nombre: "Comisión Europea: DAC8", url: "https://taxation-customs.ec.europa.eu/taxation/tax-transparency-cooperation/administrative-co-operation-and-mutual-assistance/directive-administrative-cooperation-dac/dac8_en" },
        { nombre: "Ministerio de Hacienda: proyecto de orden de los modelos 172, 175 y 721 (marzo de 2026)", url: "https://www.hacienda.gob.es/sgt/normativadoctrina/proyectos/09032026-main-proyecto-om-dac8.pdf" },
        { nombre: "Coinbase: extractos de cuenta e informe de ganancias y pérdidas", url: "https://help.coinbase.com/es-es/coinbase/taxes/tools/statements" },
      ]}
    >
      <h2>Qué sabe Hacienda de tu cuenta de Coinbase</h2>
      <p>
        Las declaraciones informativas españolas sobre criptomonedas, los modelos 172 (saldos a 31 de diciembre) y 173
        (operaciones), las presentan las plataformas residentes en España o con establecimiento permanente aquí.
        Coinbase opera en la Unión Europea desde fuera: en 2025 obtuvo su licencia europea MiCA en Luxemburgo y desde
        allí da servicio a sus clientes españoles.
      </p>
      <p>
        Eso no te deja fuera del radar. Desde el 1 de enero de 2026 se aplica la directiva DAC8: los proveedores de
        criptoactivos de toda la Unión registran la residencia fiscal de cada cliente y sus operaciones del año, y las
        comunican a la autoridad fiscal de su país, que las envía a la del país del cliente. Las operaciones de 2026 se
        intercambian como tarde el 30 de septiembre de 2027.
      </p>
      <p>
        Por eso Coinbase pide a sus clientes datos fiscales, como el país de residencia y el NIF. En la práctica, tus
        compras, ventas, cambios entre criptomonedas y transferencias de 2026 en adelante llegarán a la Agencia
        Tributaria. Lo explicamos con más detalle en{" "}
        <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
      </p>

      <h2>Qué tienes que declarar tú</h2>
      <p>Coinbase informa de movimientos, no de impuestos. La declaración sigue siendo cosa tuya:</p>
      <ul>
        <li>
          <strong>Ventas por euros o dólares.</strong> Cada venta genera una ganancia o una pérdida patrimonial que va
          a la Renta, en la base del ahorro, que tributa del 19 % al 30 %.
        </li>
        <li>
          <strong>Cambios entre criptomonedas.</strong> Cambiar bitcoin por ether también es una transmisión, aunque no
          pases por euros. Ver <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
        </li>
        <li>
          <strong>Recompensas de staking.</strong> Lo que recibes por bloquear tus criptomonedas tributa cuando lo
          recibes, por su valor en euros ese día. Ver{" "}
          <Link href="/guias/staking-defi-impuestos/">Staking y DeFi: cómo tributan</Link>.
        </li>
        <li>
          <strong>Pagos con la tarjeta.</strong> Pagar con criptomonedas es venderlas: cada pago es una pequeña
          ganancia o pérdida.
        </li>
      </ul>
      <p>
        Comprar con euros y mantener no tributa en la Renta. Y enviar criptomonedas de Coinbase a tu propia wallet
        tampoco, siempre que sigan siendo tuyas, pero conviene poder demostrarlo.
      </p>

      <h2>El informe de ganancias de Coinbase no sirve para España</h2>
      <p>
        Coinbase ofrece un informe de ganancias y pérdidas en su centro de impuestos, pero la propia Coinbase lo
        presenta como una ayuda para la declaración de Estados Unidos. En España, Hacienda exige calcular cada venta
        en euros con el método FIFO: las primeras unidades que compraste de cada criptomoneda son las primeras que
        vendes. Un informe pensado para otro país puede usar otro criterio o calcular en dólares, y el resultado no
        coincide.
      </p>
      <p>
        Lo que sí necesitas de Coinbase es el historial completo de transacciones, desde que abriste la cuenta. Con él
        se hace el cálculo español.
      </p>

      <h2>Cómo sacar tu historial de Coinbase</h2>
      <ol>
        <li>Entra en tu cuenta de Coinbase desde el navegador y ve a la página de extractos de cuenta.</li>
        <li>
          Genera el extracto de transacciones en formato CSV para todo el periodo, no solo el último año: el FIFO
          necesita tus compras antiguas.
        </li>
        <li>
          Si usaste Coinbase Pro, que Coinbase sustituyó por Advanced, guarda también aquel historial. Al juntar
          archivos, revisa que ninguna operación salga dos veces: una venta duplicada te hace pagar de más.
        </li>
        <li>Guarda los archivos: son tu justificación si Hacienda te pide explicaciones dentro de cuatro años.</li>
      </ol>

      <h2>¿Tienes que presentar el Modelo 721?</h2>
      <p>
        Coinbase custodia tus criptomonedas desde fuera de España. Si a 31 de diciembre tenías en plataformas
        extranjeras más de 50.000 € en criptomonedas, sumando todas, tienes que presentar el Modelo 721 entre el 1 de
        enero y el 31 de marzo. Es solo informativo, no se paga nada, pero no presentarlo puede costar una sanción.
        Lo contamos en <Link href="/guias/modelo-721/">Modelo 721: quién tiene que presentarlo y cuándo</Link>.
      </p>

      <h2>Si no declaraste años anteriores</h2>
      <p>
        Con DAC8 en marcha, lo más barato es regularizar antes de que llegue un requerimiento. Una declaración
        complementaria voluntaria lleva un recargo del 1 % más otro 1 % por cada mes completo de retraso, y a partir
        de los doce meses, del 15 % más intereses, pero sin sanción. Si es Hacienda quien lo detecta, la sanción
        empieza en el 50 % de lo que dejaste de pagar. Y si tuviste pérdidas, declararlas puede servirte para{" "}
        <Link href="/guias/compensar-perdidas-criptomonedas/">compensar ganancias</Link> de otros años.
      </p>
    </Articulo>
  );
}
