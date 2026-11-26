import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Modelo 303: el IVA trimestral del autónomo",
  description:
    "Qué es el modelo 303, cómo se calcula con un ejemplo, qué IVA puedes deducir, los plazos de 2027 y los errores más habituales.",
  alternates: { canonical: "/guias/modelo-303-iva-trimestral/" },
};

export default function Modelo303() {
  return (
    <Articulo
      titulo="Modelo 303: el IVA trimestral, explicado"
      entradilla="Cada trimestre le pagas a Hacienda el IVA que has cobrado a tus clientes menos el que has pagado en tus gastos. Así se calcula, qué IVA te puedes deducir y qué hacer si sale a devolver."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Te decimos la cifra antes de presentarlo",
        texto: "Preparamos tu 303 con tus facturas, te enseñamos el resultado antes del día 20 y revisamos qué IVA puedes deducir. Dentro de la cuota de autónomo.",
        href: "/empezar/?plan=autonomo",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: modelo 303, autoliquidación del IVA", url: "https://sede.agenciatributaria.gob.es/Sede/iva.html" },
        { nombre: "Ley 37/1992 del IVA, artículos 92 a 114: deducciones", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740" },
      ]}
    >
      <h2>Qué es y quién lo presenta</h2>
      <p>
        El 303 es la declaración trimestral del IVA. La presentan casi todos los autónomos y todas las sociedades, aunque
        el trimestre haya salido a cero o no hayas facturado nada.
      </p>
      <p>
        No lo presentan quienes solo hacen actividades exentas de IVA (algunos servicios sanitarios, la formación
        reglada o los seguros) ni los comercios minoristas en recargo de equivalencia, que pagan el IVA a través de sus
        proveedores.
      </p>

      <h2>Cómo se calcula, con un ejemplo</h2>
      <p>La cuenta es sencilla: el IVA que cobras menos el IVA que pagas.</p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">En el trimestre</th>
              <th scope="col">Base</th>
              <th scope="col">IVA al 21 %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Facturas a tus clientes</th>
              <td>20.000 €</td>
              <td>4.200 €</td>
            </tr>
            <tr>
              <th scope="row">Facturas de tus gastos</th>
              <td>3.000 €</td>
              <td>−630 €</td>
            </tr>
            <tr>
              <th scope="row">A pagar en el 303</th>
              <td />
              <td>
                <strong>3.570 €</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ese IVA nunca fue tuyo: lo cobraste por cuenta de Hacienda. Por eso conviene apartarlo cada vez que te pagan una
        factura, y no gastarlo. Puedes calcular el tuyo con la{" "}
        <Link href="/calculadora-autonomos/">calculadora trimestral</Link>.
      </p>

      <h2>Qué IVA te puedes deducir</h2>
      <p>Para restar el IVA de un gasto se tienen que cumplir tres condiciones:</p>
      <ol>
        <li>
          <strong>Factura completa a tu nombre</strong>, con tu NIF. Un ticket no sirve.
        </li>
        <li>
          <strong>Gasto de la actividad.</strong> El ordenador, el software, la gestoría, el alquiler del local, la
          publicidad.
        </li>
        <li>
          <strong>Registrado en tus libros</strong> y deducido como mucho en los cuatro años siguientes.
        </li>
      </ol>
      <p>
        Con el coche, Hacienda presume que lo usas a medias: puedes deducir el 50 % del IVA, salvo que demuestres un uso
        exclusivo profesional o seas, por ejemplo, transportista o comercial. Las comidas, regalos y gastos personales,
        en general, no dan derecho a deducir IVA.
      </p>

      <h2>Plazos de 2027</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Trimestre</th>
              <th scope="col">Último día</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">4.º de 2026</th>
              <td>1 de febrero, junto con el resumen anual 390</td>
            </tr>
            <tr>
              <th scope="row">1.º de 2027</th>
              <td>20 de abril</td>
            </tr>
            <tr>
              <th scope="row">2.º de 2027</th>
              <td>20 de julio</td>
            </tr>
            <tr>
              <th scope="row">3.º de 2027</th>
              <td>20 de octubre</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        Si lo pagas domiciliado, el plazo para presentarlo termina unos días antes, normalmente el día 15. Todas las
        fechas, en el <Link href="/guias/calendario-fiscal-autonomos-2027/">calendario fiscal de 2027</Link>.
      </p>

      <h2>Si sale a devolver o a cero</h2>
      <p>
        Si en un trimestre pagas más IVA del que cobras, el resultado sale negativo. En los tres primeros trimestres no
        te lo devuelven: queda a compensar en los siguientes. En el cuarto puedes elegir entre compensarlo o pedir la
        devolución.
      </p>
      <p>
        Solo quien está inscrito en el registro de devolución mensual (REDEME) puede pedir el IVA cada mes, y eso obliga
        a presentar el 303 mensualmente.
      </p>
      <p>
        Si no has tenido ningún movimiento, el 303 se presenta igual, con resultado cero. No presentarlo puede acabar
        en una sanción aunque no debieras nada.
      </p>

      <h2>Si no puedes pagarlo</h2>
      <p>
        Preséntalo igualmente en plazo y pide el aplazamiento o el fraccionamiento en la misma declaración. Presentarlo
        tarde sale más caro: un 1 % de recargo más otro 1 % por cada mes completo de retraso, y si Hacienda te lo
        reclama antes, sanción.
      </p>

      <h2>Los errores que más vemos</h2>
      <ul>
        <li>Deducir el IVA de un ticket o de una factura que no está a tu nombre.</li>
        <li>Deducir el 100 % del IVA del coche sin poder demostrar el uso exclusivo.</li>
        <li>Olvidar las facturas de proveedores extranjeros, como la publicidad en redes o el software.</li>
        <li>Facturar sin IVA a un cliente de otro país sin cumplir los requisitos.</li>
        <li>Dejar de presentarlo un trimestre sin actividad.</li>
      </ul>
      <p>
        Si tienes clientes fuera de España, lee también <Link href="/guias/facturar-clientes-extranjeros/">cómo
        facturar a clientes extranjeros</Link>.
      </p>
    </Articulo>
  );
}
