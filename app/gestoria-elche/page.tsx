import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en Elche para autónomos y empresas",
  description:
    "Gestoría online para autónomos y empresas de Elche que venden fuera: IVA intracomunitario, modelo 349, exportaciones y ventas por internet.",
  alternates: { canonical: "/gestoria-elche/" },
};

export default function GestoriaElche() {
  return (
    <PaginaLocal
      zona="Elche"
      titulo="Gestoría en Elche para autónomos y empresas"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos y sociedades de Elche, también de los que venden fuera de España: calzado, componentes, textil o comercio por internet. Online, con cuota fija y el mismo asesor todo el año."
      municipios={["Torrellano", "El Altet", "Santa Pola", "Crevillent", "Aspe", "Elda", "Petrer"]}
      areaServida={["Elche", "Baix Vinalopó", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Una ciudad que vende fuera</h2>
          <p>
            Elche sigue siendo la capital del calzado: según el Ayuntamiento, concentra cerca de la mitad de la producción
            nacional. Pero el sector ha cambiado. Desde 2020 han cerrado más de mil fábricas de calzado en España, y muchas
            de las que siguen son talleres pequeños, diseñadores que fabrican por encargo o marcas que venden por internet
            a toda Europa.
          </p>
          <p>
            Eso tiene consecuencias en los impuestos que no aparecen en una gestoría de cuota baja. Vender a una tienda de
            Francia no lleva el IVA español, pero obliga a estar dado de alta en un registro concreto y a presentar un
            modelo más. Vender a particulares de otros países por internet tiene sus propias reglas. Y un error en una
            factura al extranjero se descubre meses después, cuando Hacienda cruza datos con el otro país.
          </p>
          <p>
            Nuestra sede está en Alicante, a veinte minutos. Trabajamos en remoto con clientes de Elche, Torrellano, El
            Altet y todo el Baix Vinalopó, y cuando hace falta revisar algo en persona, lo concertamos.
          </p>
        </>
      }
      fiscalTitulo="Si vendes fuera de España"
      fiscalFilas={[
        ["A una empresa de otro país de la UE", "Sin IVA español si el cliente tiene NIF-IVA válido. Tienes que estar en el Registro de Operadores Intracomunitarios y presentar el modelo 349"],
        ["A particulares de la UE por internet", "IVA español hasta 10.000 € al año de ventas a distancia en toda la UE; por encima, el IVA del país del cliente, con la ventanilla única (OSS)"],
        ["Fuera de la UE", "Exportación exenta de IVA, con el documento aduanero que prueba que la mercancía salió"],
        ["Compras a proveedores de la UE", "Te autorrepercutes y deduces el IVA en el mismo 303, y la compra también va en el 349"],
        ["Más de 6 millones de facturación", "Suministro Inmediato de Información: los libros de IVA se envían a Hacienda en cuatro días"],
      ]}
      fiscalNota={
        <p>
          Lo explicamos paso a paso, con ejemplos de facturas, en la guía de{" "}
          <Link href="/guias/facturar-clientes-extranjeros/">cómo facturar a clientes extranjeros</Link>. Y como Elche
          está en la Comunitat Valenciana, tu IRPF lleva la escala y las deducciones valencianas; las tienes en nuestra
          página de <Link href="/gestoria-alicante/">gestoría en Alicante</Link>.{" "}
          Y si tu taller atraviesa un mal año, mira el paro de los autónomos en la página de{" "}
          <Link href="/gestoria-elda-petrer/">Elda y Petrer</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Ley 37/1992 del IVA (artículos 21, 25 y 73)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740" },
        { nombre: "Ley 20/2007 del Estatuto del trabajo autónomo (artículos 11 a 16, TRADE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-13409" },
        { nombre: "Real Decreto 197/2009: contrato del TRADE y su registro", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2009-3673" },
        { nombre: "Elche y su peso en la producción de calzado (Esdiario, septiembre de 2026)", url: "https://www.esdiario.com/comunidad-valenciana/alicante/260915/197795/elche-ve-signos-recuperacion-calzado-temporadas-capa-caida.html" },
        { nombre: "AEC: empresas de fabricación de calzado de 2020 a 2025 (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/elcheplaza/aec-alerta-del-deterioro-del-sector-del-calzado-y-sus-componentes-y-exige-un-plan-industrial-urgente" },
      ]}
      extra={
        <section className="seccion seccion-banda" aria-labelledby="elche-trade">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="elche-trade">Si trabajas casi solo para una fábrica</h2>
            <p>
              En el calzado de Elche es habitual el taller o el profesional que hace el aparado, el corte o el diseño
              para una sola marca. Si al menos el 75&nbsp;% de tus ingresos viene de un único cliente, la ley te
              considera trabajador autónomo económicamente dependiente, lo que se conoce como TRADE.
            </p>
            <p>
              Ser TRADE no cambia tus impuestos, pero sí tus derechos: tienes al menos 18 días hábiles de descanso al
              año y una indemnización si el cliente rompe el contrato sin causa. Para tenerlos, el contrato tiene que
              estar por escrito y registrado en el SEPE en los 10 días hábiles siguientes a firmarlo.
            </p>
            <p>
              Y hay una línea que conviene no cruzar: si trabajas con los medios de la fábrica, en su horario y bajo
              sus órdenes, como un empleado más, no eres TRADE sino un falso autónomo. Revisamos tu caso antes de
              firmar.
            </p>
          </div>
        </section>
      }
      preguntas={[
        {
          p: "¿Tenéis oficina en Elche?",
          r: "No. La sede está en Alicante y trabajamos en remoto, por WhatsApp, teléfono, correo y videollamada. Si necesitas que nos veamos para empezar o para revisar algo importante, lo concertamos.",
        },
        {
          p: "Vendo zapatos a tiendas de Francia y Alemania. ¿Qué tengo que presentar?",
          r: "Tienes que estar dado de alta en el Registro de Operadores Intracomunitarios, emitir las facturas sin IVA con el NIF-IVA del cliente y presentar el modelo 349 con esas ventas, además del 303. Lo dejamos todo preparado desde el primer trimestre.",
        },
        {
          p: "Tengo una tienda online y vendo a particulares de otros países. ¿Cobro IVA español?",
          r: "Hasta 10.000 € al año de ventas a distancia en toda la UE, sí. A partir de ahí, cobras el IVA de cada país y lo declaras en un único modelo trimestral, la ventanilla única. Te avisamos antes de que llegues a la cifra.",
        },
        {
          p: "Hago aparado para una sola fábrica. ¿Soy autónomo normal o TRADE?",
          r: "Si al menos el 75 % de tus ingresos viene de esa fábrica, puedes ser TRADE: tienes derecho a un mínimo de 18 días hábiles de descanso y a indemnización si rompen el contrato sin causa. El contrato tiene que registrarse en el SEPE en 10 días hábiles. Lo revisamos contigo.",
        },
        {
          p: "Llevo años con una gestoría de Elche. ¿Es complicado cambiarse?",
          r: "No. Nos autorizas y pedimos nosotros la documentación a tu gestoría, sin coste para ti. Lo habitual es empezar en el trimestre siguiente para no dejar nada a medias.",
        },
      ]}
    />
  );
}
