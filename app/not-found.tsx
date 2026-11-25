import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

const destinos = [
  { href: "/autonomos/", t: "Gestoría para autónomos", d: "Trimestrales, resúmenes y tu Renta por una cuota fija." },
  { href: "/sociedades/", t: "Gestoría para sociedades", d: "Contabilidad, Impuesto sobre Sociedades y cuentas anuales." },
  { href: "/criptomonedas/", t: "Renta con criptomonedas", d: "Cada operación calculada y justificada ante Hacienda." },
  { href: "/guias/", t: "Guías y calculadoras", d: "Plazos, cuota de autónomos, gastos deducibles, cripto y más." },
];

export default function NoEncontrada() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="seccion">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h1>Esta página no existe</h1>
              <p>
                Puede que el enlace esté mal escrito o que la página haya cambiado de dirección. Esto es lo que suele
                buscar quien llega aquí:
              </p>
            </div>
            <ul className="lista-guias lista-guias-cuatro">
              {destinos.map((x) => (
                <li key={x.href}>
                  <h2 style={{ fontSize: "1.2rem" }}>
                    <Link href={x.href}>{x.t}</Link>
                  </h2>
                  <p>{x.d}</p>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "2.5rem" }}>
              ¿Buscabas otra cosa? Escríbenos a <a href="mailto:info@fiscalyx.com">info@fiscalyx.com</a> o vuelve al{" "}
              <Link href="/">inicio</Link>.
            </p>
          </div>
        </section>
      </main>
      <Pie />
    </>
  );
}
