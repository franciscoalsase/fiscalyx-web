import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría online en San Vicente del Raspeig",
  description:
    "Gestoría online para autónomos, profesionales y empresas de base tecnológica de San Vicente del Raspeig: impuestos, sociedades y la ley de empresas emergentes.",
  alternates: { canonical: "/gestoria-san-vicente-del-raspeig/" },
};

export default function GestoriaSanVicente() {
  return (
    <PaginaLocal
      zona="San Vicente del Raspeig"
      titulo="Gestoría en San Vicente del Raspeig para autónomos y empresas"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos, profesionales y sociedades de San Vicente del Raspeig, también de las empresas que nacen alrededor de la universidad. Online, con cuota fija y el mismo asesor todo el año."
      municipios={["Alicante", "Sant Joan d'Alacant", "Mutxamel", "El Campello", "Agost", "Tibi"]}
      areaServida={["San Vicente del Raspeig", "L'Alacantí", "Provincia de Alicante"]}
      intro={
        <>
          <h2>Una ciudad universitaria que también hace empresas</h2>
          <p>
            San Vicente del Raspeig tiene algo más de 60.000 habitantes empadronados y alberga desde 1979 el campus de la
            Universidad de Alicante. Cuenta con unas 2.000 empresas de la industria, el comercio, la hostelería y los
            servicios, y con alrededor de 40 empresas de investigación, desarrollo e innovación vinculadas a la
            universidad.
          </p>
          <p>
            Eso da un perfil de cliente muy concreto: el profesional que empieza por su cuenta al terminar la carrera,
            el investigador que monta una empresa para llevar al mercado lo que ha desarrollado y el comercio de toda la
            vida que necesita a alguien que le lleve los papeles sin sustos.
          </p>
          <p>
            Nuestra sede está al lado, en el centro de Alicante. Trabajamos en remoto y, cuando hace falta, nos vemos.
          </p>
        </>
      }
      fiscalTitulo="Si montas una empresa emergente: lo que te da la ley de startups"
      fiscalFilas={[
        ["Impuesto sobre Sociedades al 15 %", "En lugar del 25 %, durante los cuatro primeros ejercicios desde que la base imponible es positiva, mientras sigas siendo empresa emergente"],
        ["Aplazar el impuesto sin avales", "En los dos primeros ejercicios con beneficio puedes aplazar el Impuesto sobre Sociedades 12 y 6 meses, sin garantías"],
        ["Quién certifica", "ENISA, la empresa pública del Ministerio de Industria, que valora si tu modelo de negocio es innovador y escalable. El trámite es gratuito"],
        ["Antes de pedirlo", "La sociedad tiene que ser nueva o tener menos de cinco años (siete en biotecnología, energía o industria) y no repartir dividendos"],
      ]}
      fiscalNota={
        <p>
          Te ayudamos a preparar la solicitud a ENISA, a constituir la sociedad y a llevar la contabilidad desde el primer
          día, que es lo que te pedirán los inversores. Si aún dudas entre empezar como autónomo o como sociedad, haz
          primero la cuenta con la <Link href="/calculadora-autonomo-o-sociedad/">calculadora de autónomo o sociedad</Link>{" "}
          y mira cómo <Link href="/constituir-sociedad/">constituir tu sociedad</Link>.
        </p>
      }
      fuentes={[
        { nombre: "San Vicente supera por primera vez los 60.000 habitantes empadronados (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/san-vicente-supera-por-primera-vez-los-60000-habitantes-empadronados-segun-el-ine" },
        { nombre: "San Vicente se presenta como ciudad de oportunidades, conocimiento e innovación (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/alacanti/san-vicente-se-presenta-en-china-como-una-ciudad-de-oportunidades-conocimiento-e-innovacion" },
        { nombre: "Agencia Tributaria: novedades de la Ley 28/2022 de empresas emergentes", url: "https://sede.agenciatributaria.gob.es/Sede/impuesto-sobre-sociedades/novedades-impuesto-sobre-sociedades/novedades-normativa________.html" },
        { nombre: "Ley 28/2022, de fomento del ecosistema de las empresas emergentes (BOE)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2022-21739" },
      ]}
      preguntas={[
        {
          p: "Acabo de terminar la carrera y voy a trabajar por mi cuenta. ¿Por dónde empiezo?",
          r: "Por darte de alta en Hacienda y en la Seguridad Social antes de emitir tu primera factura. El primer año puedes pagar la tarifa plana de autónomos. Te damos de alta nosotros y te explicamos qué impuestos vas a presentar cada trimestre.",
        },
        {
          p: "Queremos crear una startup con un proyecto de la universidad. ¿Qué ventajas fiscales hay?",
          r: "Si ENISA os certifica como empresa emergente, pagáis el Impuesto sobre Sociedades al 15 % en lugar del 25 % durante los cuatro primeros años con beneficios, y podéis aplazar el impuesto de los dos primeros sin avales. Os ayudamos con la sociedad, la solicitud y la contabilidad.",
        },
        {
          p: "Tengo un comercio en San Vicente. ¿Me lleváis también la contabilidad?",
          r: "Sí. Impuestos trimestrales, contabilidad y, si tienes empleados, las nóminas. Con una cuota fija que te damos por escrito antes de empezar.",
        },
        {
          p: "¿Tenéis oficina en San Vicente?",
          r: "No, nuestra sede está en el centro de Alicante, a pocos minutos. Trabajamos en remoto por WhatsApp, teléfono y correo, y si prefieres que nos veamos, lo concertamos.",
        },
      ]}
    />
  );
}
