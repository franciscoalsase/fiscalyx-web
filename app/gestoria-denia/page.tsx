import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en Dénia: autónomos y extranjeros",
  description:
    "Gestoría online en Dénia y la Marina Alta: autónomos, negocios de temporada y propietarios extranjeros que compran, alquilan o venden su casa.",
  alternates: { canonical: "/gestoria-denia/" },
};

export default function GestoriaDenia() {
  return (
    <PaginaLocal
      zona="Dénia"
      titulo="Gestoría en Dénia para autónomos, negocios de temporada y extranjeros"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos y sociedades de Dénia y la Marina Alta, y los impuestos de los propietarios extranjeros que viven aquí o pasan aquí parte del año. Online, con cuota fija y el mismo asesor."
      municipios={["Xàbia", "Pedreguer", "Ondara", "El Verger", "Els Poblets", "Benissa", "Calp"]}
      areaServida={["Dénia", "Marina Alta", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Turismo, temporada y vecinos de muchos países</h2>
          <p>
            Dénia vive del turismo, de la restauración y de los servicios a una población que se multiplica en verano.
            Una parte grande de sus vecinos ha llegado de otros países, y el departamento municipal de relaciones
            internacionales atiende a más de 2.000 personas al año en sus trámites.
          </p>
          <p>
            Eso trae a una gestoría consultas que en el interior casi no aparecen: el propietario que vive en Alemania y
            tiene que declarar su casa de aquí, el británico que vende el chalé para volver a su país, el restaurante que
            factura en cuatro meses lo de todo el año o la familia que alquilaba a turistas y ahora tiene que ponerse al
            día con el registro de la Generalitat.
          </p>
          <p>
            La sede de Fiscalyx está en Alicante. Trabajamos en remoto, también con clientes que viven fuera de España,
            por correo, WhatsApp y videollamada.
          </p>
        </>
      }
      fiscalTitulo="Si eres extranjero y vendes tu casa en Dénia"
      fiscalFilas={[
        ["La retención del 3 %", "Si no eres residente fiscal en España, el comprador retiene el 3 % del precio y lo ingresa en Hacienda con el modelo 211"],
        ["El impuesto por la ganancia", "Pagas un 19 % sobre la diferencia entre lo que te costó la casa y lo que te pagan, con el modelo 210 en los cuatro meses siguientes a la venta"],
        ["Si la retención fue de más", "Si el 3 % supera tu impuesto real, por ejemplo porque vendes con poca ganancia, puedes pedir que te devuelvan la diferencia en el mismo modelo 210"],
        ["La plusvalía municipal", "Es otro impuesto, del ayuntamiento, sobre el valor del suelo. Lo pagas tú como vendedor, y lo que pagues cuenta como gasto en el cálculo de tu ganancia"],
      ]}
      fiscalNota={
        <p>
          Para calcular bien la ganancia hacen falta las escrituras, los gastos de la compra y las facturas de las obras
          de mejora; con ellos la retención suele devolverse en parte. Si tienes la casa y no vives en España, mira
          también lo que hay que pagar cada año aunque no la alquiles en nuestra página de{" "}
          <Link href="/gestoria-torrevieja/">Torrevieja</Link>, y si la alquilas a turistas, lo que exige ahora la
          Generalitat en la de <Link href="/gestoria-orihuela/">Orihuela Costa</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Agencia Tributaria: ganancias patrimoniales de no residentes por la venta de inmuebles", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/capitulo-03-tributacion-rentas-comunes-nr/ganancias-patrimoniales/ganancias-patrimoniales-derivadas-venta-inmuebles.html" },
        { nombre: "Ayuntamiento de Dénia: relaciones internacionales atiende a más de 2.000 personas al año (El Periòdic)", url: "https://www.elperiodic.com/denia/departamento-relaciones-internacionales-denia-atiende-2000-personas_1041601" },
        { nombre: "Texto refundido de la Ley del IRNR (artículos 24, 25 y 28)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2004-4527" },
      ]}
      preguntas={[
        {
          p: "Vivo en el Reino Unido y voy a vender mi casa de Dénia. ¿Cuánto me retienen?",
          r: "El comprador retiene el 3 % del precio y lo ingresa en Hacienda. Después presentas el modelo 210 con tu ganancia real, al 19 %, y si te retuvieron de más, pides la devolución. Lo preparamos con tus escrituras y facturas para que no pagues de más.",
        },
        {
          p: "Tengo un restaurante que abre en temporada. ¿Cómo organizo los impuestos?",
          r: "Ajustamos tu cuota de autónomo a lo que ganas de verdad, te avisamos antes de cada trimestre de lo que vas a pagar y, si contratas personal para el verano, te preparamos los contratos fijos discontinuos y las nóminas.",
        },
        {
          p: "No hablo bien español. ¿Podéis atenderme igualmente?",
          r: "Te lo explicamos todo por escrito, con calma y en un lenguaje claro, para que puedas traducirlo si lo necesitas. Trabajamos por correo y WhatsApp, así que todo queda por escrito.",
        },
        {
          p: "¿Tenéis oficina en Dénia?",
          r: "No. La sede está en Alicante y trabajamos en remoto, también con clientes que viven fuera de España. Si necesitas que nos veamos, lo concertamos.",
        },
      ]}
    />
  );
}
