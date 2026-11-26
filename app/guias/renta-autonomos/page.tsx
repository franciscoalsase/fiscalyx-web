import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "La Renta del autónomo: qué cambia, cómo se calcula y qué revisar",
  description:
    "Cómo hace la declaración de la Renta un autónomo: rendimiento de la actividad, pagos a cuenta del 130 y retenciones, deducciones que se suelen olvidar, plan de pensiones de autónomos y pago en dos plazos.",
  alternates: { canonical: "/guias/renta-autonomos/" },
};

export default function RentaAutonomos() {
  return (
    <Articulo
      titulo="La Renta del autónomo: qué cambia y qué revisar"
      entradilla="La declaración de un autónomo no se puede confirmar con el borrador: Hacienda no conoce tus ingresos y gastos de la actividad. Te explicamos cómo se calcula, qué se descuenta y lo que más se olvida."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Tu Renta, dentro de la cuota",
        texto: "Hacemos la declaración del titular con el año ya revisado trimestre a trimestre, sin factura aparte en abril.",
        href: "/empezar/?plan=autonomo",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Ley 35/2006 del IRPF, artículos 28 a 32 y 96", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764" },
        { nombre: "Ley 12/2022, de planes de pensiones de empleo: límite adicional para autónomos", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-10852" },
      ]}
    >
      <h2>Qué cambia respecto a un asalariado</h2>
      <p>
        A un asalariado, Hacienda le prepara un borrador con los datos de su empresa. A un autónomo, no: la Agencia
        Tributaria no sabe cuánto has facturado ni qué gastos tienes, así que hay que añadir el rendimiento de la
        actividad a mano. Por eso nunca hay que confirmar el borrador sin más.
      </p>
      <p>
        Además, si has tenido actividad durante el año, casi seguro estás obligado a declarar, aunque hayas ganado poco.
      </p>

      <h2>Cómo se calcula el rendimiento de la actividad</h2>
      <ol>
        <li>
          <strong>Ingresos del año</strong>, sin IVA.
        </li>
        <li>
          <strong>Menos los gastos deducibles</strong>: cuota de autónomo, gestoría, suministros, alquiler, amortización
          de equipos y el resto de gastos de la actividad.
        </li>
        <li>
          <strong>Menos los gastos de difícil justificación</strong>, un porcentaje fijo que se aplica en estimación
          directa simplificada, con un tope de 2.000 € al año.
        </li>
        <li>
          <strong>Menos, en su caso, la reducción por rendimientos bajos</strong>, que se aplica sola si tus rentas no
          superan ciertos límites.
        </li>
      </ol>
      <p>
        Si has llevado bien los trimestres, esta cuenta ya está hecha: es el acumulado del cuarto trimestre del modelo
        130. Lo que pueden cambiar son ajustes de última hora, como una amortización o una factura que llegó tarde. Qué
        puedes deducir, en la guía de <Link href="/guias/gastos-deducibles-autonomos/">gastos deducibles</Link>.
      </p>

      <h2>Los 130 y las retenciones se restan</h2>
      <p>
        Todo lo que adelantaste durante el año se resta del resultado: los modelos 130 que presentaste y las retenciones
        que te practicaron tus clientes en las facturas. Si adelantaste de más, la Renta sale a devolver. Te lo
        explicamos en la guía del <Link href="/guias/modelo-130-retenciones/">130 y las retenciones</Link>.
      </p>

      <h2>Cinco descuidos que hacen pagar de más</h2>
      <ul>
        <li>
          <strong>El plan de pensiones de autónomos.</strong> Además de los 1.500 € de un plan individual, un autónomo
          puede aportar hasta 4.250 € más a un plan de empleo simplificado para autónomos y reducir su base imponible.
        </li>
        <li>
          <strong>Las retenciones de todos tus clientes.</strong> Comprueba que coinciden con lo que te comunican; si
          falta alguna, pagas de más.
        </li>
        <li>
          <strong>Las deducciones autonómicas.</strong> En la Comunitat Valenciana y en la Región de Murcia hay
          deducciones por alquiler de vivienda, nacimiento, guardería o donativos que no aparecen solas.
        </li>
        <li>
          <strong>Las criptomonedas y otras inversiones.</strong> Van en la base del ahorro, aparte de la actividad.
          Mira la <Link href="/guias/declarar-criptomonedas-renta/">guía de cripto en la Renta</Link>.
        </li>
        <li>
          <strong>La declaración conjunta.</strong> A veces sale mejor con tu pareja, sobre todo si uno de los dos gana
          poco. Hay que calcular las dos opciones.
        </li>
      </ul>

      <h2>Si sale a pagar</h2>
      <p>
        Puedes pagarlo en dos plazos sin intereses: el 60 % al presentar la declaración y el 40 % restante a principios
        de noviembre. Si lo domicilias, la presentación tiene que hacerse unos días antes del final de la campaña.
      </p>
      <p>
        La campaña suele ir de abril a finales de junio. Las fechas exactas de la Renta de 2026 las publica Hacienda en
        primavera; estarán en el <Link href="/guias/calendario-fiscal-autonomos-2027/">calendario fiscal de 2027</Link>.
      </p>

      <h2>Si te equivocaste en una Renta anterior</h2>
      <p>
        Si pagaste de menos, presenta una complementaria antes de que Hacienda te escriba: el recargo es del 1 % más
        otro 1 % por mes completo, sin sanción. Si pagaste de más, puedes rectificarla y pedir la devolución durante
        cuatro años.
      </p>
    </Articulo>
  );
}
