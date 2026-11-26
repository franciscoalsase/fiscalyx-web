import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría en Torrevieja para autónomos y sociedades",
  description:
    "Gestoría online para autónomos y sociedades de Torrevieja: negocios de temporada, autónomos extranjeros, residencia fiscal y modelo 720. Economistas colegiados y cuota fija.",
  alternates: { canonical: "/gestoria-torrevieja/" },
};

export default function GestoriaTorrevieja() {
  return (
    <PaginaLocal
      zona="Torrevieja"
      titulo="Gestoría en Torrevieja para autónomos y sociedades"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos y sociedades de Torrevieja, vengan de donde vengan: negocios de temporada, profesionales extranjeros que trabajan aquí y empresas de la costa. Online, con cuota fija y el mismo asesor todo el año."
      municipios={["La Mata", "Los Balcones", "Rojales", "Guardamar del Segura", "Los Montesinos", "San Miguel de Salinas", "Pilar de la Horadada"]}
      areaServida={["Torrevieja", "Vega Baja del Segura", "Provincia de Alicante"]}
      intro={
        <>
          <h2>La ciudad con más vecinos de fuera de España</h2>
          <p>
            Torrevieja pasó de los 113.000 empadronados en el primer trimestre de 2026, y más de la mitad son
            extranjeros, de unas 120 nacionalidades. La comunidad más numerosa ya no es la británica sino la ucraniana. Es,
            además, la ciudad española que más creció en 2025.
          </p>
          <p>
            Para una gestoría eso significa clientes con preguntas que en otras ciudades casi no aparecen: si eres
            residente fiscal aquí o en tu país, qué pasa con la cuenta que dejaste allí, cómo se declara una pensión
            extranjera o qué papeles necesitas para darte de alta como autónomo. Y, a la vez, los problemas de siempre en
            la costa: negocios que facturan en cuatro meses lo que en otro sitio se factura en doce.
          </p>
          <p>
            La sede de Fiscalyx está en Alicante y trabajamos en remoto con clientes de Torrevieja, La Mata y toda la
            costa sur. Si hace falta vernos, lo concertamos.
          </p>
        </>
      }
      fiscalTitulo="Si vienes de otro país y trabajas aquí"
      fiscalFilas={[
        ["Residencia fiscal", "Si pasas más de 183 días al año en España, o aquí está tu actividad o tu familia, tributas en España por todo lo que ganas en el mundo"],
        ["Alta como autónomo", "Necesitas NIE y, si no eres de la UE, una autorización que te permita trabajar por cuenta propia. Con ellos, el alta en Hacienda y en la Seguridad Social es igual que la de un español"],
        ["Cuentas e inmuebles en tu país", "Si pasan de 50.000 €, se informan cada año en el modelo 720, del 1 de enero al 31 de marzo"],
        ["Criptomonedas en exchanges extranjeros", "Modelo 721, con el mismo umbral de 50.000 € y el mismo plazo"],
        ["Pensiones o alquileres del extranjero", "Se declaran en tu Renta española. El convenio de doble imposición con tu país dice dónde se pagan y cómo se evita pagar dos veces"],
      ]}
      fiscalNota={
        <p>
          Torrevieja está en la Comunitat Valenciana, así que tu IRPF lleva la escala y las deducciones valencianas; las
          explicamos en la página de <Link href="/gestoria-alicante/">gestoría en Alicante</Link>. Si tienes
          criptomonedas, mira cómo funciona el <Link href="/guias/modelo-721/">modelo 721</Link>.
        </p>
      }
      fuentes={[
        { nombre: "Torrevieja supera los 113.000 habitantes (Alicante Plaza, 2026)", url: "https://alicanteplaza.es/alicanteplaza/orihuela1/torrevieja-supera-los-113000-habitantes-un-57-son-extranjeros-de-hasta-120-nacionalidades-diferentes" },
        { nombre: "Torrevieja lidera el crecimiento de población en España en 2025 (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/orihuela1/torrevieja-lidera-el-crecimiento-de-poblacion-en-espana-en-2025-con-un-aumento-del-45" },
        { nombre: "Ley 35/2006 del IRPF (artículo 9, residencia fiscal)", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2006-20764" },
      ]}
      preguntas={[
        {
          p: "Soy extranjero y quiero darme de alta como autónomo. ¿Por dónde empiezo?",
          r: "Por comprobar que tienes NIE y, si no eres de la UE, una autorización para trabajar por cuenta propia. Con eso te damos de alta en Hacienda y en la Seguridad Social, pedimos la tarifa plana si te corresponde y te explicamos qué tienes que facturar desde el primer día.",
        },
        {
          p: "Tengo una cuenta en mi país con más de 50.000 €. ¿Tengo que declararla?",
          r: "Si eres residente fiscal en España, sí: se informa en el modelo 720, que no supone pagar nada por sí mismo. Los intereses o rendimientos de esa cuenta, en cambio, sí van a tu Renta española.",
        },
        {
          p: "Mi negocio factura casi todo en verano. ¿Cómo lo hacemos con los trimestres?",
          r: "Ajustamos tu base de cotización a los meses de más y menos actividad, y te avisamos antes de cada trimestre de lo que vas a pagar, para que en invierno no te llegue un 303 que no esperabas.",
        },
        {
          p: "¿Tenéis oficina en Torrevieja?",
          r: "No. La sede está en Alicante y trabajamos en remoto, por WhatsApp, teléfono, correo y videollamada, que es lo que prefiere la mayoría de clientes de la costa. Si necesitas que nos veamos, lo concertamos.",
        },
      ]}
    />
  );
}
