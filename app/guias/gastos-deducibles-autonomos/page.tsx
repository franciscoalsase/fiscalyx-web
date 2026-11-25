import type { Metadata } from "next";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Gastos deducibles de autónomos en 2026: lista y límites",
  description:
    "Qué gastos puede deducirse un autónomo en el IRPF y en el IVA en 2026: suministros, dietas, vehículo, seguro médico y el 5 % de difícil justificación.",
  alternates: { canonical: "/guias/gastos-deducibles-autonomos/" },
};

const gastos = [
  { g: "Cuota de autónomos", irpf: "Sí, entera", iva: "No lleva IVA", nota: "Incluida la de tarifa plana" },
  { g: "Alquiler de local u oficina", irpf: "Sí", iva: "Sí", nota: "Normalmente debes retener el 19 % al arrendador e ingresarlo con el modelo 115" },
  { g: "Material, software y suscripciones", irpf: "Sí", iva: "Sí", nota: "Si se usan en la actividad" },
  { g: "Ordenador, móvil y equipos", irpf: "Sí, amortizando", iva: "Sí", nota: "Los de menos de 300 € pueden deducirse en el año, con límites" },
  { g: "Suministros de tu vivienda", irpf: "30 % de la parte afecta", iva: "Mismo criterio", nota: "Hay que declarar la parte de la vivienda en el censo" },
  { g: "Comidas y dietas", irpf: "Hasta 26,67 €/día en España", iva: "Normalmente no", nota: "48,08 € en el extranjero; el doble si pernoctas" },
  { g: "Seguro médico", irpf: "Hasta 500 € por persona", iva: "Exento", nota: "Tú, tu cónyuge e hijos menores de 25 que convivan" },
  { g: "Gestoría y asesoría", irpf: "Sí", iva: "Sí", nota: "También los colegios profesionales" },
  { g: "Formación", irpf: "Sí", iva: "Sí", nota: "Relacionada con tu actividad" },
  { g: "Vehículo", irpf: "Solo si es de uso exclusivo", iva: "Normalmente el 50 %", nota: "Salvo taxis, transportistas, comerciales y otros casos" },
];

export default function GastosDeducibles() {
  return (
    <Articulo
      titulo="Gastos deducibles de autónomos en 2026: qué sí, qué no y con qué límites"
      entradilla="Un gasto es deducible si está relacionado con tu actividad, tienes factura a tu nombre y lo has anotado en tus libros. Esta es la lista práctica, con los límites que fija la norma."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Que no se te escape ningún gasto.",
        texto: "En la llamada antes de cada trimestre repasamos tus gastos contigo y te decimos cuáles entran. Desde 49 € al mes, sin permanencia.",
        href: "/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: estimación directa simplificada y difícil justificación", url: "https://sede.agenciatributaria.gob.es/Sede/Ayuda/25Presentacion/100/7_4_2.html" },
        { nombre: "Agencia Tributaria: gastos del titular de la actividad (dietas)", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2022/c07-rendimientos-actividades-economicas-estimacion-directa/fase-1-determinacion-rendimiento-neto/gastos-fiscalmente-deducibles/gastos-titular-actividad.html" },
        { nombre: "La Moncloa: novedades de la Ley de reformas urgentes del trabajo autónomo", url: "https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/minhap/Paginas/2017/021117-autonomos.aspx" },
      ]}
    >
      <h2>Las tres condiciones</h2>
      <ol>
        <li>
          <strong>Relación con la actividad.</strong> El gasto tiene que servir para obtener tus ingresos. Lo personal
          no entra, aunque lo pagues con la cuenta del negocio.
        </li>
        <li>
          <strong>Factura completa a tu nombre</strong>, con tu NIF. Un tique simplificado no sirve para deducir el
          IVA.
        </li>
        <li>
          <strong>Registro en tus libros</strong> de gastos, en el trimestre que corresponde.
        </li>
      </ol>

      <h2>La lista, con sus límites</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Gasto</th>
              <th scope="col">IRPF</th>
              <th scope="col">IVA</th>
              <th scope="col">A tener en cuenta</th>
            </tr>
          </thead>
          <tbody>
            {gastos.map((g) => (
              <tr key={g.g}>
                <th scope="row">{g.g}</th>
                <td>{g.irpf}</td>
                <td>{g.iva}</td>
                <td>{g.nota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Si trabajas desde casa</h2>
      <p>
        Puedes deducir una parte de la luz, el agua, el gas, la calefacción, el teléfono e internet. La cuenta es el
        30 % de la proporción de la vivienda que usas para trabajar, salvo que puedas probar un porcentaje distinto.
      </p>
      <p>
        Ejemplo: tu piso mide 100 m² y trabajas en un despacho de 20 m². La parte afecta es el 20 %, y lo deducible es
        el 30 % de ese 20 %: un 6 % de cada factura. De una factura de luz de 100 €, deduces 6 €. Para aplicarlo,
        tienes que haber comunicado a Hacienda la parte de la vivienda que destinas a la actividad.
      </p>

      <h2>Comidas: lo que más se pregunta</h2>
      <p>
        Las comidas de trabajo se pueden deducir si se hacen en un restaurante o similar, se pagan con medios
        electrónicos (tarjeta, transferencia o móvil) y tienen relación con la actividad. El límite es de 26,67 € al
        día en España y 48,08 € en el extranjero. Si el desplazamiento obliga a pernoctar en otro municipio, los
        límites pasan a 53,34 € y 91,35 €.
      </p>

      <h2>El 5 % que se deduce sin factura</h2>
      <p>
        Si tributas en estimación directa simplificada, que es lo habitual, puedes restar un 5 % de tu rendimiento
        neto como gastos de difícil justificación, con un máximo de 2.000 € al año. No necesitas ningún justificante:
        se aplica al calcular la declaración. En 2023 el porcentaje fue del 7 %; desde 2024 vuelve a ser del 5 %.
      </p>

      <h2>Errores que vemos a menudo</h2>
      <ul>
        <li>Deducir el coche entero sin usarlo en exclusiva para la actividad.</li>
        <li>Guardar tiques en lugar de pedir factura completa.</li>
        <li>Deducir el 100 % de los suministros de casa.</li>
        <li>Comidas pagadas en efectivo o sin relación clara con un cliente o un desplazamiento.</li>
        <li>Olvidar la cuota de autónomos o el seguro médico, que sí son deducibles.</li>
      </ul>
    </Articulo>
  );
}
