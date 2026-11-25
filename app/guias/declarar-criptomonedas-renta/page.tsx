import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Cómo declarar criptomonedas en la Renta: guía completa",
  description:
    "Qué operaciones con criptomonedas tributan, cómo se calcula la ganancia con FIFO, cuánto se paga, cómo compensar pérdidas y qué documentación guardar. Con ejemplos.",
  alternates: { canonical: "/guias/declarar-criptomonedas-renta/" },
};

const tramos: [string, string][] = [
  ["Hasta 6.000 €", "19 %"],
  ["De 6.000 a 50.000 €", "21 %"],
  ["De 50.000 a 200.000 €", "23 %"],
  ["De 200.000 a 300.000 €", "27 %"],
  ["Más de 300.000 €", "30 %"],
];

const operaciones: [string, string, string][] = [
  ["Comprar con euros", "No", "Fija el coste de lo que compras"],
  ["Mantener sin vender", "No", "Solo el Modelo 721 si superas 50.000 € fuera de España"],
  ["Vender por euros", "Sí", "Ganancia o pérdida patrimonial, base del ahorro"],
  ["Cambiar una cripto por otra (permuta)", "Sí", "Ganancia o pérdida, como si vendieras"],
  ["Pagar con cripto un bien o servicio", "Sí", "Ganancia o pérdida, como si vendieras"],
  ["Recompensas de staking o préstamos", "Sí", "Rendimiento del capital mobiliario al recibirlas"],
  ["Promociones o recompensas del exchange", "Sí", "Ganancia que no viene de una venta, base general"],
  ["Mover entre tus propios monederos", "No", "Guarda el rastro para poder justificarlo"],
];

export default function DeclararCriptoRenta() {
  return (
    <Articulo
      titulo="Cómo declarar criptomonedas en la Renta"
      entradilla="Si en el año vendiste, cambiaste o recibiste criptomonedas, casi seguro tienes algo que declarar, aunque no hayas sacado ni un euro del exchange. Te explicamos qué tributa, cómo se calcula, cuánto se paga y cómo dejarlo todo justificado."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "¿Muchas operaciones o varios exchanges?",
        texto: "Calculamos tus ganancias y pérdidas operación por operación, presentamos tu Renta y te entregamos un informe que la justifica ante Hacienda.",
        href: "/criptomonedas/#presupuesto",
        boton: "Calcular mi precio",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: Manual práctico de Renta, ganancias y pérdidas patrimoniales", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos.html" },
        { nombre: "Ley 35/2006 del IRPF (escala del ahorro, artículos 66 y 76)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764" },
        { nombre: "PwC: la Agencia Tributaria y la fiscalidad de las criptomonedas (recompras y pérdidas)", url: "https://periscopiofiscalylegal.pwc.es/wp-content/uploads/2022/02/La-Agencia-Tributaria-y-la-fiscalidad-de-las-criptomonedas-1.pdf" },
        { nombre: "Dirección General de Tributos: consulta V1766-22 sobre staking", url: "https://www.cuatrecasas.com/es/spain/articulo/tributacion-del-staking-en-irpf" },
      ]}
    >
      <h2>Qué operaciones tributan</h2>
      <p>
        La regla de fondo es sencilla: tributa cada vez que una criptomoneda sale de tu patrimonio a cambio de otra cosa,
        y cada vez que recibes una nueva sin haberla comprado. Comprar y mantener no tributa.
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Operación</th>
              <th scope="col">¿Tributa?</th>
              <th scope="col">Cómo</th>
            </tr>
          </thead>
          <tbody>
            {operaciones.map(([o, t, c]) => (
              <tr key={o}>
                <th scope="row">{o}</th>
                <td>{t}</td>
                <td>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        El error más común es pensar que, mientras no se pase el dinero al banco, no hay nada que declarar. Cambiar
        bitcoin por una stablecoin dentro del exchange ya es una permuta, y tributa ese año. Lo explicamos en detalle en{" "}
        <Link href="/guias/permutas-criptomonedas-fifo/">Permutas de criptomonedas y método FIFO</Link>.
      </p>

      <h2>Cómo se calcula la ganancia</h2>
      <p>
        La ganancia o pérdida es la diferencia entre lo que recibes al vender o permutar y lo que te costó lo que
        entregas, con las comisiones sumadas al coste o restadas de lo recibido. Si has comprado la misma criptomoneda
        varias veces a precios distintos, Hacienda exige el método FIFO: se entienden vendidas primero las unidades que
        compraste antes.
      </p>
      <h3>Un ejemplo con FIFO</h3>
      <p>
        Compras 1 ETH en marzo por 2.000 € y otro en septiembre por 3.000 €. En diciembre vendes 1 ETH por 3.500 €. Con
        FIFO, el que vendes es el de marzo: tu ganancia es de 1.500 €, no de 500 €. El ETH de septiembre sigue en tu poder
        con su coste de 3.000 €.
      </p>
      <p>
        Cuando se mezclan varios exchanges, transferencias entre monederos y cientos de operaciones, el cálculo a mano es
        inviable. Hace falta reconstruir el historial completo, con cada compra en su orden, para que el FIFO salga bien.
      </p>

      <h2>Cuánto se paga</h2>
      <p>
        Las ganancias por vender o permutar criptomonedas van a la base del ahorro, junto con los intereses, los
        dividendos y las ganancias de acciones o fondos. Tributan por tramos:
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Base del ahorro</th>
              <th scope="col">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {tramos.map(([b, t]) => (
              <tr key={b}>
                <th scope="row">{b}</th>
                <td>{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Los tipos se aplican por tramos, no a toda la ganancia. Con 10.000 € de ganancia pagas el 19 % de los primeros
        6.000 € y el 21 % de los 4.000 € restantes: 1.980 € en total. Puedes hacer tu cuenta con el estimador de{" "}
        <Link href="/criptomonedas/">nuestra página de criptomonedas</Link>.
      </p>

      <h2>Staking, préstamos y recompensas</h2>
      <p>
        Las recompensas de staking y los intereses por prestar tus criptomonedas son rendimientos del capital mobiliario:
        tributan el día que los recibes, por su valor en euros, también en la base del ahorro. Cuando después vendas esas
        criptomonedas, su coste será el valor que declaraste al recibirlas.
      </p>
      <p>
        Las criptomonedas que te regala una plataforma por promociones o por invitar a otros usuarios tienen otro
        tratamiento: son ganancias que no vienen de una venta y van a la base general, donde el tipo puede ser más alto.
        Lo contamos en <Link href="/guias/staking-defi-impuestos/">Staking y DeFi: cómo tributan las recompensas</Link>.
      </p>

      <h2>Si has perdido dinero</h2>
      <p>
        Las pérdidas también se declaran, y conviene hacerlo. Las pérdidas por vender o permutar se compensan con las
        ganancias del mismo tipo del año, también con las de acciones o fondos. Si sobran, puedes compensar hasta un 25 %
        con los rendimientos del capital mobiliario, como los intereses o el staking, y lo que quede se arrastra cuatro
        años.
      </p>
      <p>
        Ojo con una duda frecuente: la regla de los dos meses que impide computar una pérdida si recompras las mismas
        acciones no se aplica a las criptomonedas, según el criterio de Hacienda, porque no son valores negociados. Pero
        parte de los expertos entiende que sí se aplica otra norma, la que impide computar la pérdida si recompras el
        mismo elemento dentro del año siguiente. Es un punto discutido: si vas a vender con pérdidas para volver a
        comprar, háblalo antes con tu asesor. Lo explicamos en{" "}
        <Link href="/guias/compensar-perdidas-criptomonedas/">Pérdidas con criptomonedas: cómo compensarlas</Link>.
      </p>

      <h2>Qué documentación guardar</h2>
      <ol>
        <li>El historial completo de operaciones de cada exchange, desde la primera compra, no solo el del año.</li>
        <li>Los movimientos de tus monederos propios, con las direcciones y las transacciones en la cadena.</li>
        <li>Los justificantes bancarios de las transferencias con las que compraste y de los retiros a tu cuenta.</li>
        <li>El informe con el cálculo FIFO de cada venta y permuta, y el valor de cada recompensa al recibirla.</li>
        <li>Los saldos a 31 de diciembre de cada plataforma, para la Renta y para el Modelo 721.</li>
      </ol>
      <p>
        Hacienda puede revisar tu declaración durante cuatro años desde el fin del plazo. Si no puedes demostrar lo que te
        costaron tus criptomonedas, el riesgo es que te consideren como ganancia todo lo que recibiste.
      </p>

      <h2>Qué sabe Hacienda</h2>
      <p>
        Cada año más. Las plataformas que operan en España ya informan de los saldos y las operaciones de sus clientes, tu
        banco informa de tus transferencias, y desde 2026 los exchanges de toda la Unión Europea registran las operaciones
        para enviarlas a la administración de cada país. Si además tienes más de 50.000 € en plataformas extranjeras, el{" "}
        <Link href="/guias/modelo-721/">Modelo 721</Link> les da tus saldos. Lo resumimos en{" "}
        <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
      </p>

      <h2>Si hay años sin declarar</h2>
      <p>
        Lo recomendable es regularizar antes de que llegue una carta. Presentar por tu cuenta una declaración
        complementaria de cada año afectado evita la sanción: pagas un recargo del 1 % más otro 1 % por cada mes completo
        de retraso, y del 15 % más intereses pasados doce meses. Si lo detecta Hacienda, a la cuota se suma una sanción que
        puede ir del 50 % al 150 %.
      </p>
      <p>
        Y si en esos años tuviste pérdidas, declararlas puede permitirte compensar ganancias posteriores. Si te preocupa
        retirar dinero al banco, mira también{" "}
        <Link href="/guias/retirar-dinero-binance-hacienda/">Retirar dinero de Binance al banco: qué ve Hacienda</Link>.
      </p>

      <h2>Cuándo se presenta</h2>
      <p>
        Las operaciones de 2026 se declaran en la campaña de la Renta de 2027, que normalmente va de principios de abril
        al 30 de junio. Si tienes muchas operaciones, no lo dejes para junio: reconstruir el historial y revisar las
        transferencias entre plataformas lleva tiempo.
      </p>
    </Articulo>
  );
}
