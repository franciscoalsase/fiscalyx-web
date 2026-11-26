import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Modelo 130 y retenciones del autónomo",
  description:
    "Cómo adelanta el IRPF un autónomo: retención del 15 % o del 7 % y modelo 130 trimestral. Cuándo no se presenta y cómo se calcula.",
  alternates: { canonical: "/guias/modelo-130-retenciones/" },
};

export default function Modelo130() {
  return (
    <Articulo
      titulo="Modelo 130 y retenciones: cómo adelanta el IRPF un autónomo"
      entradilla="Un autónomo no espera a la Renta para pagar su IRPF: lo va adelantando durante el año, con las retenciones de sus facturas o con el modelo 130 cada trimestre. Te explicamos cuál te toca y cómo se calcula."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Que tu Renta no te pille por sorpresa",
        texto: "Cada trimestre revisamos si te toca el 130, aplicamos las deducciones y te decimos cómo va tu IRPF del año antes de llegar a la Renta.",
        href: "/empezar/?plan=autonomo",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: instrucciones del modelo 130", url: "https://sede.agenciatributaria.gob.es/Sede/impuestos-tasas/impuesto-sobre-renta-personas-fisicas/modelo-130-irpf______esionales-estimacion-directa-fraccionado_/instrucciones.html" },
        { nombre: "Agencia Tributaria: cuadro de tipos de retención del IRPF de 2026", url: "https://sede.agenciatributaria.gob.es/static_files/Sede/Programas_ayuda/Retenciones/2026/CUADRO_TIPOS_RETENCION_IRPF_2026.pdf" },
        { nombre: "Reglamento del IRPF, artículos 95, 109 y 110", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-6820" },
      ]}
    >
      <h2>Dos formas de adelantar el mismo impuesto</h2>
      <p>
        Si eres profesional y facturas a empresas u otros autónomos, ellos te retienen una parte de cada factura y la
        ingresan en Hacienda por ti. Si vendes a particulares o tu actividad es empresarial, nadie te retiene, y eres tú
        quien adelanta el impuesto con el modelo 130.
      </p>
      <p>
        Las dos cosas son pagos a cuenta: en la Renta se suman y se restan de lo que te toque pagar. Si adelantaste de
        más, te lo devuelven.
      </p>

      <h2>La retención en tus facturas: 15 % o 7 %</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Caso</th>
              <th scope="col">Retención</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Profesional, factura a una empresa o a otro autónomo</th>
              <td>15 %</td>
            </tr>
            <tr>
              <th scope="row">Profesional que empieza: el año del alta y los dos siguientes</th>
              <td>7 %</td>
            </tr>
            <tr>
              <th scope="row">Factura a un particular</th>
              <td>Sin retención</td>
            </tr>
            <tr>
              <th scope="row">Actividad empresarial: comercio, hostelería, construcción</th>
              <td>Sin retención, en general</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Para aplicar el 7 % no puedes haber tenido ninguna actividad profesional en el año anterior al alta, y tienes que
        comunicárselo por escrito a tus clientes. Retener menos mejora tu liquidez, pero no reduce el impuesto: lo que
        no se retiene ahora se paga en la Renta.
      </p>

      <h2>Cuándo no tienes que presentar el 130</h2>
      <p>
        Si en el año anterior al menos el 70 % de los ingresos de tu actividad llevaron retención, no tienes que
        presentarlo. Es lo habitual en profesionales que trabajan solo para empresas. En el año del alta se mira el
        tiempo transcurrido de ese mismo año.
      </p>
      <p>
        Esto cambia con los años. Si empiezas a tener clientes particulares o del extranjero, que no retienen, puedes
        dejar de llegar al 70 % y pasar a estar obligado. Pasa a menudo a quien empieza a trabajar para clientes de
        fuera: lo explicamos en <Link href="/guias/facturar-clientes-extranjeros/">cómo facturar a clientes
        extranjeros</Link>.
      </p>

      <h2>Cómo se calcula el 130</h2>
      <p>
        Es el 20 % del rendimiento neto acumulado desde el 1 de enero, menos lo que ya pagaste en los 130 anteriores del
        año y las retenciones que te practicaron. Un ejemplo de segundo trimestre:
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">De enero a junio</th>
              <th scope="col">Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Ingresos</th>
              <td>24.000 €</td>
            </tr>
            <tr>
              <th scope="row">Gastos deducibles, incluida la cuota de autónomo</th>
              <td>−6.000 €</td>
            </tr>
            <tr>
              <th scope="row">Rendimiento neto acumulado</th>
              <td>18.000 €</td>
            </tr>
            <tr>
              <th scope="row">El 20 %</th>
              <td>3.600 €</td>
            </tr>
            <tr>
              <th scope="row">Pagado en el 130 del primer trimestre</th>
              <td>−1.500 €</td>
            </tr>
            <tr>
              <th scope="row">Retenciones de tus clientes en el semestre</th>
              <td>−600 €</td>
            </tr>
            <tr>
              <th scope="row">A pagar en el 130 del segundo trimestre</th>
              <td>
                <strong>1.500 €</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Si el resultado sale negativo, se presenta a cero: el 130 no se devuelve durante el año, pero tampoco se pierde,
        porque todo se ajusta en la Renta. Puedes calcular el tuyo con la{" "}
        <Link href="/calculadora-autonomos/">calculadora trimestral</Link>.
      </p>

      <h2>La deducción de hasta 100 € por trimestre</h2>
      <p>
        Si tus rendimientos netos del año anterior fueron bajos, puedes restar una cantidad fija en cada 130. Se aplica
        también el primer año, porque el año anterior cuentan como cero:
      </p>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Rendimiento neto del año anterior</th>
              <th scope="col">Deducción por trimestre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Hasta 9.000 €</th>
              <td>100 €</td>
            </tr>
            <tr>
              <th scope="row">De 9.000 a 10.000 €</th>
              <td>75 €</td>
            </tr>
            <tr>
              <th scope="row">De 10.000 a 11.000 €</th>
              <td>50 €</td>
            </tr>
            <tr>
              <th scope="row">De 11.000 a 12.000 €</th>
              <td>25 €</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Plazos</h2>
      <p>
        Los mismos que el IVA: del 1 al 20 de abril, julio y octubre, y hasta el 30 de enero el del cuarto trimestre.
        En 2027 ese último pasa al 1 de febrero, porque el 30 de enero cae en sábado. Todas las fechas, en el{" "}
        <Link href="/guias/calendario-fiscal-autonomos-2027/">calendario fiscal de 2027</Link>.
      </p>

      <h2>Los errores que más vemos</h2>
      <ul>
        <li>No restar en el 130 las retenciones que te practicaron tus clientes.</li>
        <li>Calcular cada trimestre por separado en vez de con el acumulado del año.</li>
        <li>Seguir aplicando el 7 % pasados los tres años, o aplicarlo sin cumplir el requisito.</li>
        <li>Dejar de presentar el 130 al bajar del 70 % de ingresos con retención.</li>
        <li>Olvidar la cuota de autónomo entre los gastos: es deducible.</li>
      </ul>
    </Articulo>
  );
}
