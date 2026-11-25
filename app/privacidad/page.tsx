import type { Metadata } from "next";
import { PaginaTexto } from "@/components/PaginaTexto";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo trata Fiscalyx los datos que nos envías, con qué base legal, durante cuánto tiempo y cómo ejercer tus derechos.",
  alternates: { canonical: "/privacidad/" },
};

export default function Privacidad() {
  return (
    <PaginaTexto titulo="Política de privacidad">
      <h2>Responsable del tratamiento</h2>
      <p>
        {site.owner} (Fiscalyx), NIF {site.nif}, {site.address}. Puedes escribir a {site.email} para cualquier
        cuestión sobre tus datos.
      </p>

      <h2>Qué datos tratamos y para qué</h2>
      <ul>
        <li>
          Los que nos envías en el formulario de contacto, por correo o por WhatsApp (nombre, correo, teléfono y tu
          consulta), para responderte y, si lo pides, enviarte un presupuesto.
        </li>
        <li>
          Si te haces cliente, los datos fiscales y económicos necesarios para prestarte el servicio y presentar tus
          declaraciones.
        </li>
      </ul>

      <h2>Base legal</h2>
      <p>
        Tu consentimiento, para contestar a las consultas. La relación contractual, cuando eres cliente. Las
        obligaciones legales que nos afectan como asesores, por ejemplo en materia fiscal o de prevención del blanqueo
        de capitales.
      </p>

      <h2>Cuánto tiempo los conservamos</h2>
      <p>
        Las consultas que no terminan en contratación, un máximo de un año. Los datos de clientes, mientras dure la
        relación y después durante los plazos que exige la ley.
      </p>

      <h2>Con quién los compartimos</h2>
      <p>
        Con la Agencia Tributaria y otras administraciones cuando presentamos algo en tu nombre. El formulario de
        contacto lo gestiona Formspree, Inc., un proveedor con sede en Estados Unidos que actúa como encargado del
        tratamiento. Si nos escribes por WhatsApp, se aplica también la política de privacidad de WhatsApp.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad de tus datos escribiendo a{" "}
        {site.email}. Si crees que no los tratamos bien, puedes reclamar ante la Agencia Española de Protección de Datos
        (aepd.es).
      </p>
    </PaginaTexto>
  );
}
