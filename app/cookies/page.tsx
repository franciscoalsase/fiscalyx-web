import type { Metadata } from "next";
import { PaginaTexto } from "@/components/PaginaTexto";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "La web de Fiscalyx no instala cookies propias ni de terceros. Te explicamos por qué no ves ningún aviso.",
  alternates: { canonical: "/cookies/" },
};

export default function Cookies() {
  return (
    <PaginaTexto titulo="Política de cookies">
      <h2>Esta web no usa cookies</h2>
      <p>
        No instalamos cookies propias ni de terceros, ni usamos herramientas de analítica o publicidad. Por eso no te
        mostramos ningún aviso de cookies.
      </p>
      <p>
        Las tipografías se sirven desde nuestro propio servidor, sin conectar con servicios externos.
      </p>

      <h2>Enlaces a otros servicios</h2>
      <p>
        Si pulsas un enlace a WhatsApp o a nuestra agenda de reservas, sales de esta web y se aplican las políticas de
        cookies de esos servicios.
      </p>

      <h2>Si esto cambia</h2>
      <p>
        Si en el futuro añadimos analítica u otras cookies no necesarias, te pediremos permiso antes de instalarlas y
        actualizaremos esta página.
      </p>
    </PaginaTexto>
  );
}
