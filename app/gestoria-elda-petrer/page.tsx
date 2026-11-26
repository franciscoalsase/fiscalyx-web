import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en Elda y Petrer para autónomos",
  description:
    "Gestoría online para autónomos, talleres y empresas del calzado de Elda y Petrer: impuestos, contabilidad y qué hacer si tienes que cerrar o reducir.",
  alternates: { canonical: "/gestoria-elda-petrer/" },
};

export default function GestoriaEldaPetrer() {
  return (
    <PaginaLocal
      zona="Elda y Petrer"
      titulo="Gestoría en Elda y Petrer para el calzado y el comercio"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos, talleres y empresas de Elda, Petrer y el Vinalopó Mitjà. Online, con cuota fija y el mismo asesor todo el año."
      municipios={["Monóvar", "Sax", "Novelda", "Villena", "Pinoso", "Salinas"]}
      areaServida={["Elda", "Petrer", "Vinalopó Mitjà", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Dos ciudades que hacen zapatos</h2>
          <p>
            Elda es la segunda ciudad de España en trabajadores del cuero y el calzado, con más de 3.000 afiliados a la
            Seguridad Social en el sector, y la vecina Petrer suma otros 2.000. Junto con Elche, Arnedo y Almansa
            concentran más del 40&nbsp;% del empleo del calzado en España.
          </p>
          <p>
            Son años difíciles para el sector: según la asociación de fabricantes de componentes, entre 2020 y 2025
            cerraron más de 1.100 fábricas de calzado en España. Para muchos talleres y autónomos de la zona, la
            pregunta ya no es solo cuánto pagar este trimestre, sino qué pasa si hay que reducir la actividad o cerrar.
          </p>
          <p>
            La sede de Fiscalyx está en Alicante. Trabajamos en remoto con autónomos y empresas de toda la provincia y,
            cuando hace falta revisar algo en persona, lo concertamos.
          </p>
        </>
      }
      fiscalTitulo="Si tienes que cerrar tu taller: el paro de los autónomos"
      fiscalFilas={[
        ["Qué es", "La prestación por cese de actividad: una cantidad mensual mientras no tienes actividad, gestionada por tu mutua"],
        ["Cotización mínima", "12 meses cotizados por cese de actividad, seguidos e inmediatamente anteriores al cierre"],
        ["Causa más habitual", "Pérdidas de más del 10 % de los ingresos en un año completo, sin contar el primer año de actividad"],
        ["Cuánto cobras", "El 70 % de la media de tus bases de cotización de los últimos 12 meses"],
        ["Cuánto dura", "De 4 a 24 meses, según los meses que hayas cotizado por cese en los últimos 48"],
      ]}
      fiscalNota={
        <p>
          Las pérdidas hay que poder demostrarlas con la contabilidad y las declaraciones, y ahí es donde se deniegan
          muchas solicitudes. Si trabajas casi solo para una fábrica, mira también lo que cambia si eres{" "}
          <Link href="/gestoria-elche/">autónomo TRADE</Link>, y si vas a empezar de nuevo con otro negocio, cómo{" "}
          <Link href="/capitalizar-paro/">capitalizar el paro</Link>.{" "}
          Si tu empresa sigue creciendo, mira qué cambia al pasar ciertas cifras en la página de{" "}
          <Link href="/gestoria-alcoy/">Alcoy</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Elche, Elda y Arnedo concentran uno de cada tres empleos en calzado (Modaes)", url: "https://www.modaes.com/empresas/elche-elda-y-arnedo-concentran-uno-de-cada-tres-empleos-en-calzado-en-espana" },
        { nombre: "AEC alerta del deterioro del sector del calzado (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/elcheplaza/aec-alerta-del-deterioro-del-sector-del-calzado-y-sus-componentes-y-exige-un-plan-industrial-urgente" },
        { nombre: "Ley General de la Seguridad Social (artículos 327 a 350, cese de actividad)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724" },
      ]}
      preguntas={[
        {
          p: "Mi taller lleva un año perdiendo dinero. ¿Puedo pedir el paro de autónomos?",
          r: "Si has cotizado por cese de actividad los últimos 12 meses seguidos y tus pérdidas superan el 10 % de los ingresos de un año completo, puedes. Lo que más se mira es que las pérdidas estén bien documentadas en tu contabilidad y tus declaraciones; lo revisamos antes de pedirlo para que no te lo denieguen.",
        },
        {
          p: "¿Cuánto cobraría y durante cuánto tiempo?",
          r: "El 70 % de la media de tus bases de cotización de los últimos 12 meses, durante entre 4 y 24 meses según lo que hayas cotizado por cese en los últimos cuatro años.",
        },
        {
          p: "Hago trabajos para varias fábricas. ¿Me conviene ser sociedad?",
          r: "Depende de cuánto ganes y de si quieres separar tu patrimonio del negocio. Por debajo de ciertos beneficios, seguir como autónomo suele salir más barato. Lo calculamos con tus cifras; puedes hacer una primera estimación con nuestra calculadora de autónomo o sociedad.",
        },
        {
          p: "¿Tenéis oficina en Elda?",
          r: "No. La sede está en Alicante y trabajamos en remoto, por WhatsApp, teléfono, correo y videollamada. Si prefieres que nos veamos, lo concertamos.",
        },
      ]}
    />
  );
}
