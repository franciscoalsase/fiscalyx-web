import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";
import { prices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gestorías online para autónomos: comparativa 2026",
  description:
    "Precios publicados, Renta, permanencia y software de las gestorías online para autónomos más conocidas, con lo que conviene preguntar antes de contratar.",
  alternates: { canonical: "/guias/comparativa-gestorias-online/" },
};

const filas: { nombre: string; precio: string; renta: string; permanencia: string; software: string; fuente: string }[] = [
  {
    nombre: "Infoautónomos",
    precio: "Desde 24,95 € al mes, en su plan de inicio",
    renta: "La ofrece; según el plan",
    permanencia: "No consta",
    software: "Propio, de facturación y contabilidad",
    fuente: "https://www.infoautonomos.com/asesoria/autonomos/",
  },
  {
    nombre: "TaxDown",
    precio: "Standard, 29,90 € al mes; Premium, 59,90 €",
    renta: "Según plan y promoción",
    permanencia: "3 meses",
    software: "App propia con facturación y lector de gastos",
    fuente: "https://taxdown.es/autonomos",
  },
  {
    nombre: "Taxfix",
    precio: "Pack Pro, 39,90 € al mes; Premium, 59,90 €",
    renta: "Incluida desde el año en que te suscribes",
    permanencia: "No",
    software: "Programa propio de facturación y contabilidad",
    fuente: "https://taxfix.com/es-es/precios-gestoria-online/?type=selfEmployed",
  },
  {
    nombre: "Declarando",
    precio: "Con presentación de impuestos, desde 49,90 € al mes en plan anual",
    renta: "Según plan",
    permanencia: "Plan anual en los precios más bajos",
    software: "App propia de facturación y contabilidad",
    fuente: "https://declarando.es/precios",
  },
  {
    nombre: "Billeo",
    precio: "65 € al mes hasta 15 facturas por trimestre; 80 € hasta 100",
    renta: "Aparte, desde 40 €",
    permanencia: "No",
    software: "Incluido",
    fuente: "https://www.billeo.es/local/gestoria-agres",
  },
  {
    nombre: "Fiscalyx",
    precio: `${prices.autonomoMes} € al mes`,
    renta: "Incluida, la del titular",
    permanencia: "No",
    software: "El que ya uses; si no tienes, te recomendamos uno",
    fuente: "/precios/",
  },
];

export default function ComparativaGestorias() {
  return (
    <Articulo
      titulo="Gestorías online para autónomos: comparativa de 2026"
      entradilla="Las cuotas van de unos 25 a 80 euros al mes, pero no se pueden comparar a pelo: unas incluyen la Renta y otras no, unas tienen permanencia y otras no, y algunas anuncian el precio de un plan que no presenta tus impuestos. Esta es la comparativa con lo que cada una publica en su web."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Compara también con nosotros",
        texto: "Te decimos por escrito qué incluye tu cuota y qué va aparte, antes de que decidas.",
        href: "/empezar/?plan=autonomo",
        boton: "Empezar",
      }}
      fuentes={filas.filter((f) => f.fuente.startsWith("http")).map((f) => ({ nombre: `${f.nombre}: precios publicados`, url: f.fuente }))}
    >
      <h2>Lo que publica cada una</h2>
      <p>
        Precios sin IVA, tal como aparecen en sus webs en noviembre de 2026, sin contar promociones de los primeros meses.
        Cambian a menudo: compruébalos en su página antes de decidir. Nosotros somos una de las seis, así que tómalo como
        lo que es, una comparativa hecha por un competidor, pero con las fuentes a la vista.
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Gestoría</th>
              <th scope="col">Precio publicado</th>
              <th scope="col">Renta</th>
              <th scope="col">Permanencia</th>
              <th scope="col">Programa de facturación</th>
            </tr>
          </thead>
          <tbody>
            {filas.map((f) => (
              <tr key={f.nombre}>
                <th scope="row">{f.nombre}</th>
                <td>{f.precio}</td>
                <td>{f.renta}</td>
                <td>{f.permanencia}</td>
                <td>{f.software}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Seis preguntas antes de contratar</h2>
      <ul className="pasos-guia">
        <li>
          <strong>¿El precio incluye presentar mis impuestos?</strong> Algunas anuncian primero el plan de solo software, en
          el que los impuestos los presentas tú o tu gestor de siempre.
        </li>
        <li>
          <strong>¿La Renta va dentro?</strong> Y si va, ¿solo la parte de autónomo o también tus otros ingresos, como un
          alquiler o tus criptomonedas?
        </li>
        <li>
          <strong>¿Hay permanencia o pago anual obligatorio?</strong> Los precios más bajos suelen exigir uno de los dos.
        </li>
        <li>
          <strong>¿Quién me atiende?</strong> Un asesor asignado con nombre, un equipo rotativo o un chat. Pregunta también
          si puedes llamar por teléfono sin pagar más.
        </li>
        <li>
          <strong>¿Hay límite de facturas?</strong> Varias cuotas suben a partir de 15, 50 o 100 facturas al trimestre.
        </li>
        <li>
          <strong>¿Qué pasa si me llega una carta de Hacienda?</strong> Unas la incluyen y otras la presupuestan aparte. Te
          explicamos qué hacer en la guía de{" "}
          <Link href="/guias/requerimiento-hacienda/">cartas de Hacienda</Link>.
        </li>
      </ul>

      <h2>Cuándo compensa pagar más</h2>
      <p>
        Si facturas poco, tienes un caso sencillo y te manejas con una app, una cuota baja puede bastarte. Merece la pena
        pagar algo más cuando tu caso tiene matices: varias actividades, clientes en el extranjero, trabajadores,
        inversiones o criptomonedas que acaban en tu Renta, o cuando quieres que alguien te diga antes de cada trimestre
        cuánto vas a pagar y si hay algo que lo baje.
      </p>
      <p>
        Para comparar en euros al año, con la Renta y los extras de cada una, usa la calculadora de{" "}
        <Link href="/guias/cuanto-cuesta-una-gestoria/">cuánto cuesta una gestoría</Link>. Y si ya tienes gestoría y estás
        pensando en irte, mira <Link href="/cambiar-de-gestoria/">cómo cambiarte sin dejar nada a medias</Link>.
      </p>
    </Articulo>
  );
}
