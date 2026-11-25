import Link from "next/link";
import { Logo } from "@/components/Logo";

const enlaces = [
  { href: "/", label: "Autónomos" },
  { href: "/sociedades/", label: "Sociedades" },
  { href: "/criptomonedas/", label: "Criptomonedas" },
  { href: "/guias/", label: "Guías" },
  { href: "/quienes-somos/", label: "Quiénes somos" },
];

export function Cabecera({ actual }: { actual?: string }) {
  return (
    <header className="cabecera">
      <div className="contenedor">
        <Link href="/" className="marca" aria-label="Fiscalyx, ir al inicio">
          <Logo />
        </Link>

        <nav className="navegacion" aria-label="Principal">
          {enlaces.map((e) => (
            <Link key={e.href} href={e.href} aria-current={actual === e.href ? "page" : undefined}>
              {e.label}
            </Link>
          ))}
          <Link href="/empezar/" className="boton boton-principal boton-pequeno">
            Empezar
          </Link>
        </nav>

        <details className="menu-movil">
          <summary>Menú</summary>
          <nav aria-label="Principal en móvil">
            {enlaces.map((e) => (
              <Link key={e.href} href={e.href} aria-current={actual === e.href ? "page" : undefined}>
                {e.label}
              </Link>
            ))}
            <Link href="/empezar/">Empezar</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
