import type { Metadata } from "next";
import { PaginaTexto } from "@/components/PaginaTexto";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "La web de Fiscalyx no instala cookies propias ni de terceros, y mide las visitas sin cookies. Te explicamos por qué no ves ningún aviso.",
  alternates: { canonical: "/cookies/" },
};

export default function Cookies() {
  return (
    <PaginaTexto titulo="Política de cookies">
      <h2>Esta web no usa cookies</h2>
      <p>
        No instalamos cookies propias ni de terceros, ni usamos herramientas de publicidad. Por eso no te mostramos
        ningún aviso de cookies.
      </p>
      <p>
        Las tipografías se sirven desde nuestro propio servidor, sin conectar con servicios externos.
      </p>

      <h2>Cómo medimos las visitas</h2>
      <p>
        Para saber cuántas personas visitan la web y qué páginas leen, usamos Vercel Web Analytics, el servicio de
        estadísticas de nuestro proveedor de alojamiento. No instala cookies, no guarda datos que te identifiquen y no te
        sigue entre webs: cuenta visitas de forma agregada.
      </p>

      <h2>Enlaces a otros servicios</h2>
      <p>
        Si pulsas un enlace a WhatsApp o a nuestra agenda de reservas, sales de esta web y se aplican las políticas de
        cookies de esos servicios.
      </p>

      <h2>Si esto cambia</h2>
      <p>
        Si en el futuro añadimos cookies que no sean necesarias, te pediremos permiso antes de instalarlas y
        actualizaremos esta página.
      </p>
    </PaginaTexto>
  );
}
