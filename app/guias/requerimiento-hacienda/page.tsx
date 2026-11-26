import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Requerimiento de Hacienda: qué hacer si te llega una carta",
  description:
    "Cómo saber qué tipo de carta te ha mandado Hacienda, cuántos días tienes para contestar, cómo se cuentan, cómo se responde por la sede electrónica y qué pasa si no lo haces.",
  alternates: { canonical: "/guias/requerimiento-hacienda/" },
};

export default function RequerimientoHacienda() {
  return (
    <Articulo
      titulo="Te ha llegado una carta de Hacienda: qué hacer"
      entradilla="La mayoría de cartas de la Agencia Tributaria no son una inspección: piden un papel o proponen corregir una cifra. Lo que no perdona es el plazo. Te explicamos cómo leer la carta, cuántos días tienes y cómo se contesta."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Reenvíanos la carta",
        texto: "Te decimos qué piden y qué plazo tienes en 24 horas laborables. Si hay que contestar o alegar, te damos el precio antes de empezar.",
        href: "/empezar/",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Ley 58/2003, General Tributaria (artículos 188, 203, 223 y 235)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186" },
        { nombre: "Real Decreto 1065/2007, Reglamento de gestión e inspección (artículos 87 y 91)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-15984" },
        { nombre: "Ley 39/2015, del Procedimiento Administrativo Común (artículo 43)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565" },
      ]}
    >
      <h2>Primero, mira qué tipo de carta es</h2>
      <p>
        El nombre está arriba, debajo del membrete. De él depende lo que tienes que hacer y cuánto tiempo tienes.
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Qué pone la carta</th>
              <th scope="col">Qué te piden</th>
              <th scope="col">Plazo habitual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Requerimiento</th>
              <td>Aportar documentos o datos: facturas, contratos, justificantes de un gasto o una deducción</td>
              <td>10 días hábiles</td>
            </tr>
            <tr>
              <th scope="row">Propuesta de liquidación provisional</th>
              <td>Hacienda cree que tu declaración está mal y propone otra cifra. Puedes aceptarla o alegar</td>
              <td>10 días hábiles para alegar</td>
            </tr>
            <tr>
              <th scope="row">Liquidación provisional</th>
              <td>Ya ha decidido la cifra. Pagas en el plazo que indica o la recurres</td>
              <td>Un mes para recurrir</td>
            </tr>
            <tr>
              <th scope="row">Comunicación o aviso</th>
              <td>Te recuerda una obligación o te avisa de datos que tiene. No siempre exige respuesta</td>
              <td>Lo que diga la carta</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        El plazo que manda es el que figure en la propia carta. Los de la tabla son los habituales en las que reciben
        autónomos y particulares.
      </p>

      <h2>Cómo se cuentan los días</h2>
      <p>
        Los días hábiles no incluyen sábados, domingos ni festivos, y se empiezan a contar el día siguiente a la
        notificación. Si la carta te llega el lunes, el primer día del plazo es el martes.
      </p>
      <p>
        Si recibes las notificaciones de forma electrónica (las sociedades están obligadas, y muchos autónomos también),
        la carta cuenta como notificada cuando la abres. Si no la abres, a los <strong>10 días naturales</strong> se da
        por rechazada y el procedimiento sigue como si la hubieras leído. No mirar el buzón no para el reloj.
      </p>
      <p>
        Si no llegas, puedes pedir una ampliación antes de que se acabe el plazo, explicando el motivo. Como máximo te
        darán la mitad del plazo original: cinco días hábiles más sobre diez. Y si vas a estar fuera, puedes señalar
        cada año hasta 30 días naturales en los que Hacienda no te pondrá notificaciones electrónicas.
      </p>

      <h2>Cómo se contesta</h2>
      <ul className="pasos-guia">
        <li>
          <strong>Busca la referencia de la carta.</strong> Es un código que aparece en la primera página y sirve para
          que tu respuesta llegue al expediente correcto.
        </li>
        <li>
          <strong>Entra en la sede electrónica de la Agencia Tributaria</strong>, en el trámite para contestar
          requerimientos o presentar documentación, con tu certificado digital o Cl@ve.
        </li>
        <li>
          <strong>Adjunta exactamente lo que piden</strong>, en PDF y con nombres claros. Mandar de más no ayuda: abre
          preguntas que nadie había hecho.
        </li>
        <li>
          <strong>Guarda el justificante de presentación.</strong> Es tu prueba de que contestaste a tiempo.
        </li>
      </ul>
      <p>
        Si no tienes lo que piden, también hay que contestar, explicando por qué. No responder es lo único que siempre
        sale mal.
      </p>

      <h2>Si no contestas</h2>
      <p>
        No atender un requerimiento es una infracción por sí misma, aparte de lo que Hacienda acabe corrigiendo en tu
        declaración. La multa puede llegar a 600 € si se repite. Y sin tus explicaciones, la liquidación se hace con los
        datos que tenga Hacienda, que casi nunca son los que más te favorecen.
      </p>

      <h2>Si no estás de acuerdo con la cifra</h2>
      <p>
        Ante una propuesta de liquidación, se presentan alegaciones dentro del plazo, con los documentos que prueban tu
        versión. Si aun así se confirma la liquidación, tienes un mes para presentar un recurso de reposición ante la
        propia Agencia Tributaria o una reclamación ante el Tribunal Económico-Administrativo.
      </p>
      <p>
        Si la carta trae una sanción y estás conforme con la regularización, la sanción se reduce un 30 %. Si además la
        pagas en plazo y no la recurres, se reduce otro 25 %. Conviene hacer las cuentas antes de decidir si recurrir.
      </p>

      <h2>Las cartas que más recibe un autónomo</h2>
      <ul>
        <li>
          <strong>Diferencias en el 347.</strong> Lo que declaraste con un cliente no coincide con lo que declaró él. Lo
          explicamos en la <Link href="/guias/modelo-347/">guía del modelo 347</Link>.
        </li>
        <li>
          <strong>Gastos o IVA deducido.</strong> Piden las facturas de un gasto concreto para comprobar que es de la
          actividad. Mira qué entra y qué no en los{" "}
          <Link href="/guias/gastos-deducibles-autonomos/">gastos deducibles</Link>.
        </li>
        <li>
          <strong>Criptomonedas.</strong> Hacienda ya recibe información de los exchanges y compara con tu Renta. Te
          contamos qué saben en la <Link href="/guias/dac8-criptomonedas/">guía de DAC8</Link>.
        </li>
        <li>
          <strong>Retenciones de clientes.</strong> Las que figuran en tu Renta no cuadran con las que declararon tus
          clientes en su 111. Lo vemos en la <Link href="/guias/modelo-130-retenciones/">guía del 130 y las
          retenciones</Link>.
        </li>
      </ul>
    </Articulo>
  );
}
