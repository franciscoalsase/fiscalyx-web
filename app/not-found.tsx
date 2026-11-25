import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NoEncontrada() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <div className="contenedor">
          <div className="texto-legal">
            <h1>Esta página no existe</h1>
            <p>Puede que el enlace esté mal escrito o que la página se haya movido.</p>
            <p style={{ marginTop: "1.5rem" }}>
              <Link className="boton boton-principal" href="/">
                Ir al inicio
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Pie />
    </>
  );
}
