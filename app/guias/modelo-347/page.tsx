import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Modelo 347: quién lo presenta y cuándo",
  description:
    "Qué es el modelo 347, cuándo superas los 3.005,06 €, qué se declara y qué no, el plazo de 2027 y por qué conviene cuadrarlo antes con tus clientes.",
  alternates: { canonical: "/guias/modelo-347/" },
};

export default function Modelo347() {
  return (
    <Articulo
      titulo="Modelo 347: la declaración de operaciones con terceros"
      entradilla="Una vez al año le cuentas a Hacienda con quién has trabajado por más de 3.005,06 €. No se paga nada, pero Hacienda lo cruza con lo que declaran tus clientes y proveedores, y ahí empiezan muchas cartas."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Lo cuadramos por ti",
        texto: "Preparamos el 347 con tu contabilidad y lo revisamos contigo antes de presentarlo. Dentro de la cuota.",
        href: "/empezar/",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: modelo 347, declaración anual de operaciones con terceras personas", url: "https://sede.agenciatributaria.gob.es/Sede/procedimientos/GI27.shtml" },
        { nombre: "Real Decreto 1065/2007, artículos 31 a 35", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-15984" },
        { nombre: "Guía Fiscal: modelo 347 para autónomos", url: "https://guiafiscal.es/iva/modelo-347-autonomo-guia/" },
      ]}
    >
      <h2>Quién tiene que presentarlo</h2>
      <p>
        Los autónomos y las sociedades que, a lo largo del año, hayan comprado o vendido a un mismo cliente o proveedor
        por más de 3.005,06 €, IVA incluido. Se suma todo lo del año con cada uno: no importa que sean muchas facturas
        pequeñas.
      </p>
      <p>
        Si ningún cliente ni proveedor pasa de esa cifra, no tienes que presentarlo. Tampoco lo presentan quienes ya
        envían sus libros de IVA a Hacienda en tiempo real, con el Suministro Inmediato de Información (SII).
      </p>

      <h2>Qué se declara y qué no</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Va en el 347</th>
              <th scope="col">No va en el 347</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ventas y compras con factura en España</td>
              <td>Facturas con retención del IRPF: ya van en el 190 o el 180</td>
            </tr>
            <tr>
              <td>Alquileres de local sin retención</td>
              <td>Operaciones con empresas de la UE: van en el 349</td>
            </tr>
            <tr>
              <td>Cobros en efectivo de más de 6.000 € de un mismo cliente</td>
              <td>Importaciones y exportaciones</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        Por eso muchos profesionales que solo facturan a empresas, con retención, no tienen nada que declarar por sus
        ventas, aunque sí pueden tenerlo por sus compras.
      </p>

      <h2>Un ejemplo</h2>
      <p>
        Eres diseñadora y durante el año compras a la misma tienda de informática un ordenador de 1.800 € y una pantalla
        de 1.400 €, IVA incluido. En total, 3.200 €: esa tienda va en tu 347. A tu imprenta le has comprado 2.900 € en
        todo el año: no va.
      </p>
      <p>
        Tus clientes son empresas y te retienen el IRPF en cada factura. Esas ventas no van en tu 347: ya las declaran
        ellos en su modelo 190.
      </p>

      <h2>Plazo de 2027</h2>
      <p>
        Se presenta en febrero, con las operaciones del año anterior. En 2027, el 28 de febrero cae en domingo, así que
        el último día para el 347 de 2026 es el <strong>1 de marzo</strong>. Los importes se desglosan por trimestres.
      </p>

      <h2>Por qué conviene cuadrarlo antes</h2>
      <p>
        Hacienda compara lo que tú declaras con lo que declara cada cliente y cada proveedor. Si tú dices que le
        vendiste 12.000 € a una empresa y ella declara 10.500 €, a alguno de los dos le llegará una carta. Las causas
        habituales son una factura contabilizada en otro año, un abono que uno descontó y el otro no, o el IVA incluido
        en una cifra y no en la otra.
      </p>
      <p>
        Por eso, antes de presentarlo, conviene pedir a los clientes y proveedores con importes grandes que confirmen
        su cifra.
      </p>

      <h2>Si no lo presentas o lo presentas mal</h2>
      <p>
        La sanción es de 20 € por cada dato que falte o sea incorrecto, con un mínimo de 300 €. Si lo presentas tarde
        sin que Hacienda te lo pida, la sanción se reduce a la mitad. No es una gran cantidad, pero suele abrir la
        puerta a preguntas sobre el IVA de ese año.
      </p>
      <p>
        Todos los plazos del año están en el <Link href="/guias/calendario-fiscal-autonomos-2027/">calendario fiscal
        de 2027</Link>, y cómo funciona el IVA trimestral, en la <Link href="/guias/modelo-303-iva-trimestral/">guía del
        modelo 303</Link>.
      </p>
    </Articulo>
  );
}
