import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Pie({ contacto = "/empezar/" }: { contacto?: string }) {
  return (
    <>
    <nav className="barra-movil" aria-label="Contacto rápido">
      <a className="boton boton-principal" href={contacto}>
        {contacto.startsWith("/empezar") || contacto === "#alta" ? "Empezar ahora" : "Pedir presupuesto"}
      </a>
      <a className="boton boton-secundario" href={whatsappLink()} target="_blank" rel="nofollow noopener noreferrer">
        WhatsApp
      </a>
    </nav>
    <footer className="pie">
      <div className="contenedor">
        <div>
          <Link href="/" className="marca" aria-label="Fiscalyx, ir al inicio">
            <Logo />
          </Link>
          <p>
            Gestoría online para autónomos y sociedades, y fiscalidad de criptomonedas. Economistas colegiados, con sede
            en {site.city}.
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <a href={`tel:+${site.phoneIntl}`}>{site.phoneDisplay}</a>, también por{" "}
            <a href={whatsappLink()} target="_blank" rel="nofollow noopener noreferrer">
              WhatsApp
            </a>
            <br />
            {site.horario}
            <br />
            {site.address}
          </p>
        </div>

        <div>
          <h2>Servicios</h2>
          <ul>
            <li>
              <Link href="/autonomos/">Gestoría para autónomos</Link>
            </li>
            <li>
              <Link href="/sociedades/">Gestoría para sociedades</Link>
            </li>
            <li>
              <Link href="/criptomonedas/">Criptomonedas</Link>
            </li>
            <li>
              <Link href="/precios/">Precios</Link>
            </li>
            <li>
              <Link href="/constituir-sociedad/">Constituir una SL</Link>
            </li>
            <li>
              <Link href="/cambiar-de-gestoria/">Cambiar de gestoría</Link>
            </li>
            <li>
              <Link href="/capitalizar-paro/">Capitalizar el paro</Link>
            </li>
            <li>
              <Link href="/licitaciones-publicas/">Licitaciones públicas</Link>
            </li>
            <li>
              <Link href="/gestoria-alicante/">Gestoría en Alicante</Link>
            </li>
            <li>
              <Link href="/gestoria-vega-baja/">Gestoría en la Vega Baja</Link>
            </li>
            <li>
              <Link href="/gestoria-elche/">Gestoría en Elche</Link>
            </li>
            <li>
              <Link href="/gestoria-orihuela/">Gestoría en Orihuela</Link>
            </li>
            <li>
              <Link href="/gestoria-torrevieja/">Gestoría en Torrevieja</Link>
            </li>
            <li>
              <Link href="/gestoria-murcia/">Gestoría en Murcia</Link>
            </li>
            <li>
              <Link href="/guias/irpf-por-comunidades-2026/">Gestoría en otras comunidades</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Recursos</h2>
          <ul>
            <li>
              <Link href="/calculadora-autonomos/">Calculadora trimestral</Link>
            </li>
            <li>
              <Link href="/calculadora-autonomo-o-sociedad/">¿Autónomo o sociedad?</Link>
            </li>
            <li>
              <Link href="/calculadora-cuota-autonomos/">Calculadora de cuota de autónomos</Link>
            </li>
            <li>
              <Link href="/calculadora-criptomonedas/">Calculadora de criptomonedas</Link>
            </li>
            <li>
              <Link href="/guias/">Guías</Link>
            </li>
            <li>
              <Link href="/guias/calendario-fiscal-autonomos-2027/">Calendario fiscal 2027</Link>
            </li>
            <li>
              <Link href="/quienes-somos/">Quiénes somos</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Legal</h2>
          <ul>
            <li>
              <Link href="/aviso-legal/">Aviso legal</Link>
            </li>
            <li>
              <Link href="/privacidad/">Privacidad</Link>
            </li>
            <li>
              <Link href="/cookies/">Cookies</Link>
            </li>
          </ul>
        </div>

        <p className="legal">
          © {new Date().getFullYear()} Fiscalyx. Titular: {site.owner}, economista colegiado n.º {site.colegiado}.
        </p>
      </div>
    </footer>
    </>
  );
}
