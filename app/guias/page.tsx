import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { guias } from "@/lib/guias";

export const metadata: Metadata = {
  title: "Guías para autónomos e inversores",
  description: "Guías claras y revisadas por economistas colegiados sobre impuestos de autónomos y criptomonedas.",
  alternates: { canonical: "/guias/" },
};

export default function Guias() {
  return (
    <>
      <Cabecera actual="/guias/" />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "20ch" }}>Guías para entender tus impuestos.</h1>
              <p className="entradilla">
                Escritas y revisadas por economistas colegiados, con las fuentes oficiales al final de cada una.
              </p>
            </div>
          </div>
        </section>
        <section className="seccion" style={{ paddingTop: 0, borderTop: "none" }}>
          <div className="contenedor">
            <ul className="lista-guias">
              {guias.map((g) => (
                <li key={g.slug}>
                  <span className="guia-tema">{g.tema}</span>
                  <h2>
                    <Link href={`/guias/${g.slug}/`}>{g.titulo}</Link>
                  </h2>
                  <p>{g.resumen}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Pie />
    </>
  );
}
