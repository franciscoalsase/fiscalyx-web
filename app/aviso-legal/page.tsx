import type { Metadata } from "next";
import { PaginaTexto } from "@/components/PaginaTexto";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Datos del titular de Fiscalyx, colegiación profesional y condiciones de uso de la web.",
  alternates: { canonical: "/aviso-legal/" },
};

export default function AvisoLegal() {
  return (
    <PaginaTexto titulo="Aviso legal">
      <h2>Quién es el titular de esta web</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio
        electrónico, te informamos de que esta web pertenece a:
      </p>
      <ul>
        <li>Titular: {site.owner}, que opera con el nombre comercial Fiscalyx.</li>
        <li>NIF: {site.nif}</li>
        <li>Domicilio: {site.address}</li>
        <li>Correo electrónico: {site.email}</li>
        <li>Teléfono: {site.phoneDisplay}</li>
      </ul>

      <h2>Datos profesionales</h2>
      <ul>
        <li>Titulación: economista.</li>
        <li>
          Colegio profesional: {site.colegio}, n.º de colegiado {site.colegiado}.
        </li>
        <li>Estado en el que se obtuvo el título: España.</li>
        <li>
          Normas profesionales aplicables: el estatuto y el código deontológico de los colegios de economistas, que
          pueden consultarse en la web del Consejo General de Economistas de España.
        </li>
      </ul>

      <h2>Uso de la web</h2>
      <p>
        La información de esta web es general y no sustituye al asesoramiento sobre un caso concreto. Los cálculos
        orientativos, como el estimador de impuestos sobre criptomonedas, sirven solo como referencia y no constituyen
        una liquidación.
      </p>
      <p>
        El titular procura que los contenidos estén actualizados, pero la normativa fiscal cambia con frecuencia. No
        se responsabiliza de las decisiones tomadas solo con la información de la web, sin una consulta previa.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el diseño y la marca Fiscalyx pertenecen a su titular. No pueden reproducirse sin autorización,
        salvo para uso personal.
      </p>

      <h2>Legislación aplicable</h2>
      <p>Esta web se rige por la legislación española.</p>
    </PaginaTexto>
  );
}
