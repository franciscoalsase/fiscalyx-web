import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Facturar a clientes extranjeros: IVA, ROI y 349",
  description:
    "Cuándo una factura a un cliente de otro país lleva IVA y cuándo no, qué es el ROI, cuándo presentar el 349 y qué cambia en tu IRPF.",
  alternates: { canonical: "/guias/facturar-clientes-extranjeros/" },
};

const casos: [string, string, string][] = [
  ["Empresa o profesional de la UE, con NIF-IVA válido", "Sin IVA: «Inversión del sujeto pasivo»", "303 y 349"],
  ["Empresa o profesional de fuera de la UE", "Sin IVA: operación no sujeta", "303"],
  ["Particular de la UE", "IVA español, salvo servicios digitales por encima de 10.000 € al año", "303 (o 369 con OSS)"],
  ["Particular de fuera de la UE", "Depende del servicio: asesoría, publicidad o servicios informáticos van sin IVA; el resto, con IVA español", "303"],
];

export default function FacturarExtranjeros() {
  return (
    <Articulo
      titulo="Cómo facturar a clientes extranjeros siendo autónomo"
      entradilla="Una factura a un cliente de otro país casi nunca lleva IVA español, pero solo si se dan ciertas condiciones y la factura dice por qué. Te explicamos cada caso, el ROI, el modelo 349 y lo que cambia en tu IRPF."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "¿Trabajas para clientes de fuera?",
        texto: "Nos ocupamos del alta en el ROI, del 349 y de que cada factura lleve la mención correcta. Dentro de la cuota de autónomo.",
        href: "/empezar/?plan=autonomo",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Ley 37/1992 del IVA, artículos 69 y 70: lugar de prestación de los servicios", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740" },
        { nombre: "Comisión Europea: comprobar un NIF-IVA en VIES", url: "https://ec.europa.eu/taxation_customs/vies/" },
        { nombre: "TaxDown: IVA intracomunitario y modelo 349", url: "https://taxdown.es/informacion-autonomos/iva-intracomunitario" },
      ]}
    >
      <h2>El cuadro rápido, para servicios</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Tu cliente es</th>
              <th scope="col">IVA en la factura</th>
              <th scope="col">Dónde se declara</th>
            </tr>
          </thead>
          <tbody>
            {casos.map(([c, iva, mod]) => (
              <tr key={c}>
                <th scope="row">{c}</th>
                <td>{iva}</td>
                <td>{mod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        Hay servicios que siempre tributan donde se prestan, sea quien sea el cliente: los relacionados con inmuebles,
        la hostelería y la restauración, el transporte de pasajeros o la entrada a ferias y eventos.
      </p>

      <h2>Clientes empresa de la Unión Europea</h2>
      <p>
        Es el caso más habitual: diseñas, programas o asesoras para una empresa de Francia, Alemania o Portugal. El
        servicio se entiende prestado en el país del cliente, así que no lleva IVA español. Lo declara tu cliente en su
        país: es la inversión del sujeto pasivo.
      </p>
      <p>Para que funcione hacen falta tres cosas:</p>
      <ol>
        <li>
          <strong>Que estés dado de alta en el ROI</strong>, el Registro de Operadores Intracomunitarios. Se pide con el
          modelo 036 y Hacienda puede tardar unas semanas en darte de alta.
        </li>
        <li>
          <strong>Que tu cliente tenga un NIF-IVA válido.</strong> Compruébalo en VIES, la base de datos de la Comisión
          Europea, y guarda la captura con la fecha.
        </li>
        <li>
          <strong>Que la factura lo diga:</strong> el NIF-IVA del cliente, la base sin IVA y la mención «Inversión del
          sujeto pasivo».
        </li>
      </ol>
      <p>
        Si tu cliente no tiene NIF-IVA válido, para Hacienda es como un particular: la factura lleva IVA español.
      </p>

      <h2>El modelo 349</h2>
      <p>
        Es una declaración informativa con el NIF-IVA de cada cliente o proveedor de la UE y el total facturado con
        cada uno. No se paga nada, pero hay que presentarla: trimestral en general, y mensual si tus operaciones con la
        UE pasan de 50.000 € en el trimestre. Lo que declares en el 349 tiene que cuadrar con tu 303 y con lo que tu
        cliente declara en su país.
      </p>

      <h2>Clientes de fuera de la Unión Europea</h2>
      <p>
        Estados Unidos, Reino Unido, Suiza o Latinoamérica. Si el cliente es una empresa o un profesional, el servicio
        no está sujeto al IVA español: factura sin IVA indicando que es una operación no sujeta. No necesitas ROI ni 349,
        pero sí reflejarlo en tu 303.
      </p>
      <p>
        Si el cliente es un particular, depende del servicio. La asesoría, la publicidad, los servicios informáticos y
        otros parecidos tampoco llevan IVA. El resto, sí. Canarias, Ceuta y Melilla se tratan como fuera de la UE a
        efectos del IVA.
      </p>

      <h2>Clientes particulares de la UE</h2>
      <p>
        Por regla general, la factura lleva IVA español, como si el cliente estuviera aquí. La excepción son los
        servicios digitales (cursos online, descargas, software como servicio): si lo que vendes a particulares de
        otros países de la UE pasa de 10.000 € al año, aplicas el IVA del país de cada cliente y lo declaras en
        ventanilla única, el sistema OSS, con el modelo 369.
      </p>

      <h2>Y en tu IRPF, ojo con el modelo 130</h2>
      <p>
        Los clientes extranjeros no te practican retención del IRPF español. Si eres profesional y casi todo lo que
        facturas va a clientes de fuera, es probable que dejes de cumplir la regla del 70 % con retención y tengas que
        presentar el modelo 130 cada trimestre. Es un despiste habitual que acaba en recargos.
      </p>
      <p>
        Si el país de tu cliente te retiene algún impuesto, guarda el certificado: puede deducirse en tu Renta por
        doble imposición internacional, con los límites del convenio con ese país.
      </p>

      <h2>Los errores que más vemos</h2>
      <ul>
        <li>Facturar sin IVA a la UE sin estar en el ROI. Hacienda puede reclamarte el IVA que no cobraste.</li>
        <li>No comprobar el NIF-IVA del cliente en VIES antes de facturar.</li>
        <li>Olvidar el 349, o que no cuadre con el 303.</li>
        <li>Seguir sin presentar el 130 cuando ya casi ningún cliente te retiene.</li>
        <li>Facturar a un particular extranjero sin IVA porque «es del extranjero».</li>
      </ul>
      <p>
        Todos los plazos del año están en el <Link href="/guias/calendario-fiscal-autonomos-2027/">calendario fiscal de 2027</Link>.
      </p>
    </Articulo>
  );
}
