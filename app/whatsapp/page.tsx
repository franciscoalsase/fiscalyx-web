import type { Metadata } from "next";
import { site, whatsappDirecto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Abriendo WhatsApp",
  robots: { index: false, follow: false },
};

// Cuenta la visita (analítica sin cookies) y redirige a WhatsApp con el texto recibido en ?t=
const script = `(function(){var t=new URLSearchParams(location.search).get("t")||"Hola, vengo de la web de Fiscalyx.";
var u="https://wa.me/${site.phoneIntl}?text="+encodeURIComponent(t);var a=document.getElementById("wa-enlace");if(a)a.href=u;
setTimeout(function(){location.replace(u)},700)})();`;

export default function Whatsapp() {
  return (
    <main id="contenido" className="seccion">
      <div className="contenedor">
        <p>
          Abriendo WhatsApp… Si no se abre solo,{" "}
          <a id="wa-enlace" href={whatsappDirecto()}>
            pulsa aquí
          </a>
          .
        </p>
      </div>
      <script id="whatsapp-script" dangerouslySetInnerHTML={{ __html: script }} />
    </main>
  );
}
