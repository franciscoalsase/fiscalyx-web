import type { Metadata } from "next";
import Link from "next/link";
import { PaginaLocal } from "@/components/PaginaLocal";

export const metadata: Metadata = {
  title: "Gestoría en Orihuela y Orihuela Costa",
  description:
    "Gestoría online para autónomos y sociedades de Orihuela y Orihuela Costa: régimen agrario del IVA, negocios de costa y residentes extranjeros.",
  alternates: { canonical: "/gestoria-orihuela/" },
};

export default function GestoriaOrihuela() {
  return (
    <PaginaLocal
      zona="Orihuela"
      titulo="Gestoría en Orihuela, de la huerta a la costa"
      entradilla="Llevamos los impuestos y la contabilidad de autónomos, agricultores y sociedades de Orihuela, sus pedanías y Orihuela Costa. Online, con cuota fija y el mismo asesor todo el año."
      municipios={["Orihuela Costa", "La Murada", "La Aparecida", "Desamparados", "Bigastro", "Jacarilla", "Redován", "Callosa de Segura"]}
      areaServida={["Orihuela", "Orihuela Costa", "Vega Baja del Segura"]}
      intro={
        <>
          <h2>Dos Orihuelas con impuestos distintos</h2>
          <p>
            Orihuela cerró 2025 cerca de los 89.000 habitantes, y casi todo el crecimiento vino de la costa, que sumó un
            7,7 % en un año. En la ciudad y las pedanías pesan la huerta, el comercio y los oficios; en Orihuela Costa, la
            hostelería, las reformas, el alquiler y una población extranjera muy grande, con los británicos a la cabeza.
          </p>
          <p>
            Son negocios con problemas fiscales distintos. Un agricultor de La Murada tiene un régimen de IVA que no se
            parece al de nadie. Un bar de Playa Flamenca vive de cuatro meses fuertes y ocho flojos, y su cuota de
            autónomo debería seguir ese ritmo. Un electricista británico que vive aquí todo el año tributa en España por
            todo lo que gana, también lo que le llegue del Reino Unido.
          </p>
          <p>
            Detrás de Fiscalyx hay economistas que llevan más de 25 años trabajando con negocios de la Vega Baja. La sede
            está en Alicante; trabajamos en remoto y, cuando hace falta, nos vemos.
          </p>
        </>
      }
      fiscalTitulo="Si tu actividad es agrícola"
      fiscalFilas={[
        ["Cómo funciona el régimen especial", "No cobras IVA en tus ventas ni te deduces el de tus compras. Se aplica solo, sin pedirlo"],
        ["La compensación", "El comprador empresario te paga un 12 % sobre el precio en productos agrícolas y forestales, y un 10,5 % en ganadería y pesca"],
        ["Quién queda fuera", "Las sociedades mercantiles, y quien supere 250.000 € en el resto de sus operaciones del año anterior"],
        ["Si renuncias", "Pasas al régimen general del IVA y también dejas los módulos del IRPF, durante al menos tres años"],
      ]}
      fiscalNota={
        <p>
          Renunciar compensa cuando vas a invertir mucho (un invernadero, un tractor, una nave) y te interesa
          deducirte el IVA de esa compra. Hacemos las cuentas contigo antes de decidirlo. Si además estás pensando en
          crecer, mira cuándo te conviene <Link href="/calculadora-autonomo-o-sociedad/">pasar a sociedad</Link>; ten en
          cuenta que una sociedad mercantil no puede estar en el régimen especial.
        </p>
      }
      fuentes={[
        { nombre: "Agencia Tributaria: régimen especial de la agricultura, ganadería y pesca", url: "https://sede.agenciatributaria.gob.es/Sede/iva/regimenes-tributacion-iva/regimen-especial-agricultura-ganaderia-pesca.html" },
        { nombre: "Agencia Tributaria: cálculo de la compensación, manual de IVA 2026", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2026/capitulo-06-regimenes-especiales-iva/regimen-especial-agricultura-ganaderia-pesca/calculo-reintegro-compensacion.html" },
        { nombre: "Generalitat Valenciana: preguntas frecuentes sobre viviendas de uso turístico (octubre de 2025)", url: "https://www.gva.es/descarregues/2025/10/124825-Preguntas_frecuentes_(FAQs)_viviendas_de_uso_turistico_16_10_2025_ultima_version.pdf" },
        { nombre: "Tribunal Supremo: sentencia 620/2026 que anula el registro único de arrendamientos (BOE)", url: "https://www.boe.es/boe/dias/2026/06/08/pdfs/BOE-A-2026-12300.pdf" },
        { nombre: "Orihuela cierra 2025 rozando los 89.000 habitantes (Alicante Plaza)", url: "https://alicanteplaza.es/alicanteplaza/orihuela1/orihuela-cierra-2025-rozando-los-89000-habitantes-crece-un-37-con-la-costa-como-motor" },
      ]}
      extra={
        <>
        <section className="seccion" aria-labelledby="orihuela-costa">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="orihuela-costa">Si vives en Orihuela Costa y vienes de otro país</h2>
            <p>
              Si pasas en España más de 183 días al año, o aquí está el centro de tu actividad, eres residente fiscal
              español y declaras aquí lo que ganas en cualquier país: tu negocio, una pensión británica o el alquiler de
              tu casa de origen. El convenio de doble imposición evita que pagues dos veces por lo mismo, pero hay que
              aplicarlo bien en la Renta.
            </p>
            <p>
              Y si tienes cuentas, inmuebles o inversiones fuera de España por más de 50.000 €, hay que informarlo cada
              año en el modelo 720, o en el <Link href="/guias/modelo-721/">modelo 721</Link> si son criptomonedas en
              plataformas extranjeras. No se paga nada por presentarlo, pero no hacerlo tiene sanción.
            </p>
          </div>
        </section>
        <section className="seccion seccion-banda" aria-labelledby="orihuela-turistico">
          <div className="contenedor texto-estrecho local-texto">
            <h2 id="orihuela-turistico">Si alquilas tu casa de Orihuela Costa a turistas</h2>
            <p>
              En la Comunitat Valenciana, una vivienda de uso turístico es una casa entera que se alquila por estancias
              de 10 días o menos. Para anunciarla hay que inscribirla en el Registro de Turismo de la Comunitat
              Valenciana, con una declaración responsable que se presenta por internet y un informe de compatibilidad
              urbanística del ayuntamiento. La inscripción dura cinco años y el número tiene que aparecer en todos los
              anuncios.
            </p>
            <p>
              El registro estatal que exigían Airbnb y Booking desde julio de 2025 ya no hace falta: el Tribunal Supremo lo
              anuló en mayo de 2026. El registro autonómico, en cambio, sigue siendo obligatorio.
            </p>
            <p>
              En impuestos, si vives en España, lo que cobras va a tu Renta como rendimiento del capital inmobiliario,
              con sus gastos deducibles, pero sin la reducción que tiene el alquiler de vivienda habitual. Si das
              servicios de hotel, como limpieza durante la estancia, cambio de ropa o recepción, el alquiler deja de
              estar exento de IVA y pasa a llevar el 10&nbsp;%. Si vives fuera, se declara en el modelo 210.
            </p>
          </div>
        </section>
        </>
      }
      preguntas={[
        {
          p: "¿Sigo necesitando el número de registro único para anunciar mi casa en Airbnb?",
          r: "El número del registro estatal ya no es obligatorio: el Tribunal Supremo anuló ese registro en mayo de 2026. Lo que sí necesitas es la inscripción en el Registro de Turismo de la Comunitat Valenciana, y su número tiene que aparecer en el anuncio.",
        },
        {
          p: "¿Atendéis en Orihuela Costa?",
          r: "Sí. Trabajamos en remoto con toda Orihuela, sus pedanías y la costa, por WhatsApp, teléfono, correo y videollamada. Si necesitas que nos veamos, lo concertamos.",
        },
        {
          p: "Soy agricultor. ¿Me conviene salir del régimen especial del IVA?",
          r: "Depende de lo que vayas a invertir. Si vas a hacer una compra grande, deducirte su IVA puede compensar los tres años en régimen general. Hacemos las cuentas con tus números antes de decidir.",
        },
        {
          p: "Tengo un negocio en la costa que trabaja sobre todo en verano. ¿Me podéis llevar?",
          r: "Sí. Ajustamos tu base de cotización a los meses de más y menos actividad para que la cuota de autónomo no te ahogue en invierno, y planificamos los pagos a cuenta para que la Renta no te sorprenda.",
        },
        {
          p: "Ya tengo gestoría en Orihuela. ¿Cómo me cambio?",
          r: "Nos autorizas y pedimos nosotros la documentación a tu gestoría, sin coste para ti. Empezamos a llevarte desde el trimestre siguiente, sin dejar nada a medias.",
        },
      ]}
    />
  );
}
