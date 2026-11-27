import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Deducciones valencianas en la Renta 2026",
  description:
    "Las deducciones autonómicas valencianas del ejercicio 2026: hijos, alquiler, vivienda, salud, deporte, música y donativos, con importes, límites y requisitos.",
  alternates: { canonical: "/guias/deducciones-comunitat-valenciana-renta/" },
};

const filas: [string, string, string][] = [
  ["Nacimiento o adopción", "600 €, 750 € o 900 € por el primer, segundo o tercer hijo y siguientes", "4.Uno.a"],
  ["Familia numerosa o monoparental", "330 € o 660 €, según la categoría", "4.Uno.d"],
  ["Guardería de menores de 3 años", "15 % del gasto, hasta 297 € por hijo", "4.Uno.e"],
  ["Hijos de 3 y 4 años (conciliación)", "460 € por hijo", "4.Uno.f"],
  ["Material escolar", "110 € por hijo en primaria, ESO o educación especial", "4.Uno.v"],
  ["Alquiler de la vivienda habitual", "20 %, hasta 800 €; 25 % hasta 950 € o 30 % hasta 1.100 € si cumples dos o más condiciones", "4.Uno.n"],
  ["Primera vivienda, hasta 35 años", "5 % de lo pagado, sin intereses", "4.Uno.k"],
  ["Placas solares y renovables", "40 % en la vivienda habitual, 20 % en la segunda; base máxima de 8.800 €", "4.Uno.o"],
  ["Obras de mejora de la vivienda", "20 %, o 50 % si son de accesibilidad; base máxima de 5.500 €", "4.Uno.w"],
  ["Dentista no estético", "30 %, hasta 150 €", "4.Uno.ac"],
  ["Salud mental", "30 %, hasta 150 €", "4.Uno.ac"],
  ["Gafas y lentillas graduadas", "30 %, hasta 100 €", "4.Uno.ac"],
  ["Deporte y actividades saludables", "30 %, hasta 150 €; 50 % desde los 65 años y 100 % desde los 75", "4.Uno.ad"],
  ["Formación musical", "Hasta 150 €", "4.Uno.ae"],
  ["Invertir en una empresa nueva", "30 %, hasta 6.600 €; 45 % hasta 15.000 € en algunos casos", "4.Uno.z"],
];

export default function DeduccionesValencianas() {
  return (
    <Articulo
      titulo="Deducciones de la Comunitat Valenciana en la Renta 2026"
      entradilla="La Comunitat Valenciana es la que más deducciones propias tiene en el IRPF, y muchas se quedan sin aplicar porque el borrador de Hacienda no tiene los datos para aplicarlas: hay que meterlos a mano. Estas son las del ejercicio 2026, el que declaras en la primavera de 2027, con sus importes y lo que piden."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Que no se te quede ninguna deducción sin aplicar",
        texto: "Revisamos tu Renta con las deducciones valencianas que te corresponden y te decimos antes de presentarla cuánto te devuelven o cuánto pagas.",
        href: "/empezar/",
        boton: "Calcular mi presupuesto",
      }}
      fuentes={[
        { nombre: "Generalitat Valenciana: beneficios fiscales 2026", url: "https://hisenda.gva.es/es/web/tributos/beneficis-fiscals-2026" },
        { nombre: "Ley 13/1997 de la Generalitat, artículo 4 (texto consolidado, BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1998-8202" },
        { nombre: "Decreto-ley 1/2026 de la Generalitat (DOGV 3 de marzo de 2026)", url: "https://dogv.gva.es/datos/2026/03/03/pdf/2026_6554_es.pdf" },
        { nombre: "Ministerio de Hacienda: Tributación autonómica, medidas 2026", url: "https://www.hacienda.gob.es/sgfal/financiacionterritorial/autonomica/capitulo-i-tributacion-autonomica-2026.pdf" },
      ]}
    >
      <h2>Antes de nada: el límite de renta</h2>
      <p>
        Casi todas las deducciones valencianas tienen un tope de ingresos. Se mira la suma de la base liquidable
        general y la del ahorro, las casillas 0500 y 0510 de tu Renta: con carácter general, hasta 27.000 € en
        declaración individual (44.000 € en conjunta) te aplicas la deducción entera; entre esa cifra y 30.000 € (47.000 €
        en conjunta), una parte; y por encima, nada.
      </p>
      <p>
        Hay excepciones. Las de salud y deporte tienen un límite mucho más alto, de 60.000 €, tras el Decreto-ley 1/2026
        de la Generalitat. Otras tienen requisitos propios de renta, de edad o de convivencia, así que conviene
        revisarlas una a una.
      </p>

      <h2>Las más habituales, con sus importes</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Deducción</th>
              <th scope="col">Cuánto</th>
              <th scope="col">Artículo</th>
            </tr>
          </thead>
          <tbody>
            {filas.map(([d, c, a]) => (
              <tr key={d}>
                <th scope="row">{d}</th>
                <td>{c}</td>
                <td>{a}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        El artículo es el de la Ley 13/1997 de la Generalitat, que regula el tramo autonómico del IRPF. Te sirve para
        localizar cada deducción en el programa Renta Web.
      </p>

      <h2>Familia e hijos</h2>
      <p>
        Por cada hijo nacido o adoptado en el año te aplicas 600 €, 750 € o 900 €, según sea el primero, el segundo o el
        tercero y siguientes. Se suman 246 € si el parto o la adopción son múltiples, y hay otra deducción por hijos con
        discapacidad. Si tienes título de familia numerosa o monoparental, 330 € o 660 € según la categoría.
      </p>
      <p>
        La guardería de menores de 3 años da un 15 %, hasta 297 € por hijo; los hijos de 3 y 4 años, 460 € por
        conciliación; y el material escolar, 110 € por hijo en primaria, ESO o educación especial. Si contratas de forma
        indefinida a una empleada del hogar para cuidar a un menor de 5 años o a un ascendiente, te deduces la mitad de
        las cotizaciones, con un tope que va de 330 € a 1.100 € según el caso.
      </p>

      <h2>Vivienda</h2>
      <ul>
        <li>
          <strong>Alquiler de tu vivienda habitual</strong>: el 20 % de lo que pagas, con un máximo de 800 €. Sube al
          25 % (hasta 950 €) o al 30 % (hasta 1.100 €) si reúnes dos o más de estas condiciones: tener 35 años o menos,
          tener reconocida una discapacidad o ser víctima de violencia de género.
        </li>
        <li>
          <strong>Si alquilas por trabajo</strong> una vivienda en otro municipio, el 10 % de lo pagado, hasta 224 €.
        </li>
        <li>
          <strong>Si eres casero</strong> y cobras por debajo del precio de referencia de la Comunitat, el 5 % de las
          rentas, con una base máxima de 3.300 €.
        </li>
        <li>
          <strong>Primera vivienda habitual</strong>, si tienes 35 años o menos: el 5 % de lo que pagas, sin contar
          intereses.
        </li>
        <li>
          <strong>Placas solares y renovables</strong>: el 40 % de la inversión en tu vivienda habitual o en el
          edificio, y el 20 % en una segunda residencia, con una base máxima de 8.800 € al año.
        </li>
        <li>
          <strong>Obras de mejora</strong> de conservación, sostenibilidad o accesibilidad: el 20 %, o el 50 % si son
          de accesibilidad para una persona con discapacidad, con una base máxima de 5.500 €.
        </li>
      </ul>

      <h2>Salud, deporte y música</h2>
      <p>
        Son las que más se olvidan, porque dependen de facturas que nadie te pide. Necesitas conservarlas y que el pago
        no sea en efectivo.
      </p>
      <ul>
        <li>Dentista no estético: el 30 %, hasta 150 €.</li>
        <li>Salud mental: el 30 %, hasta 150 €.</li>
        <li>Gafas, lentillas graduadas y sus líquidos: el 30 %, hasta 100 €.</li>
        <li>
          Enfermedades raras o crónicas de alta complejidad, daño cerebral o alzhéimer: hasta 100 € cada una, 150 € en
          familia numerosa o monoparental.
        </li>
        <li>
          Gimnasio, cuotas deportivas y actividades saludables: el 30 %, hasta 150 €; el 50 % si tienes 65 años o más o
          una discapacidad del 33 %, y el 100 % desde los 75 años o con una discapacidad del 65 %.
        </li>
        <li>Tratamientos de fertilidad de mujeres de 40 a 45 años en centros autorizados: 100 €.</li>
        <li>Formación musical: hasta 150 €.</li>
        <li>Abonos culturales: el 21 %, con una base máxima de 165 €.</li>
      </ul>

      <h2>Si eres autónomo o inviertes en una empresa</h2>
      <p>
        Si suscribes acciones o participaciones en la constitución o la ampliación de capital de una sociedad, te
        deduces el 30 % de lo invertido, hasta 6.600 €, siempre que se cumplan los requisitos de permanencia y
        participación. Sube al 45 %, hasta 15.000 €, si la empresa es una pyme innovadora, está en un municipio en riesgo
        de despoblamiento o es una empresa emergente de la Comunitat Valenciana. Lo explicamos para San Vicente en{" "}
        <Link href="/gestoria-san-vicente-del-raspeig/">nuestra página de San Vicente del Raspeig</Link>.
      </p>
      <p>
        Además, si vives en un municipio en riesgo de despoblamiento, te deduces 330 €, más una cantidad por cada hijo.
      </p>

      <h2>Los tipos del IRPF valenciano en 2026</h2>
      <p>
        La Ley 5/2026 de la Generalitat bajó la escala autonómica para 2026: va del 8,8 % al 29,35 %, en once tramos.
        Sumada a la estatal, el tipo máximo queda en el 53,85 %, el más alto de las comunidades de régimen común. Lo
        comparamos con el resto en{" "}
        <Link href="/guias/irpf-por-comunidades-2026/">el IRPF por comunidades en 2026</Link>. El mínimo personal
        valenciano también es más alto que el estatal: 6.105 € en general.
      </p>

      <h2>Cómo no dejarte ninguna</h2>
      <ol>
        <li>Junta durante el año las facturas de dentista, óptica, gimnasio, guardería y material escolar.</li>
        <li>Paga con tarjeta o transferencia: en muchas deducciones el pago en efectivo no vale.</li>
        <li>En Renta Web, revisa el apartado de deducciones autonómicas antes de presentar: el borrador no las marca solo.</li>
        <li>Si declaras con tu pareja, compara individual y conjunta: los límites de renta cambian.</li>
      </ol>
    </Articulo>
  );
}
