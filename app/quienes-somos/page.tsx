import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { site } from "@/lib/site";
import { FichaProfesional } from "@/components/FichaProfesional";

export const metadata: Metadata = {
  title: "Quiénes somos: economistas colegiados",
  description: `Fiscalyx es una gestoría online dirigida por ${site.owner}, economista colegiado. Trabajamos con autónomos e inversores de toda España desde Alicante.`,
  alternates: { canonical: "/quienes-somos/" },
};

const pasos = [
  { t: "Nos escribes", d: "Nos cuentas a qué te dedicas y cómo facturas. En una llamada corta vemos si podemos ayudarte." },
  { t: "Te damos de alta", d: "O pedimos tu documentación a la gestoría que tengas ahora. Empiezas el trimestre siguiente sin perder nada." },
  { t: "Cada trimestre", d: "Nos mandas facturas y gastos en foto o PDF. Tu asesor te llama, revisáis las cifras y presentamos los modelos." },
  { t: "Al cierre del año", d: "Preparamos la Renta o el Impuesto sobre Sociedades con todo el año ya ordenado, y te enviamos los justificantes." },
];

const principios = [
  {
    t: "Pocas cosas, bien hechas",
    d: "Autónomos, sociedades limitadas e inversores con criptomonedas. No hacemos de todo un poco.",
  },
  {
    t: "Una persona, no una centralita",
    d: "Cada cliente tiene un asesor asignado que conoce su actividad. Limitamos los clientes por asesor para que siga siendo así.",
  },
  {
    t: "Precios cerrados y por escrito",
    d: "Lo que incluye la cuota está publicado. Lo que va aparte, te lo presupuestamos antes de empezar.",
  },
  {
    t: "Nada que no podamos demostrar",
    d: "No publicamos opiniones inventadas ni promesas de ahorro. Te explicamos lo que dice la norma y lo que conviene en tu caso.",
  },
];

export default function QuienesSomos() {
  return (
    <>
      <Cabecera actual="/quienes-somos/" />
      <main id="contenido">
        <section className="portada">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "16ch" }}>Una gestoría online con el oficio de un despacho.</h1>
              <p className="entradilla">
                Fiscalyx nace para que autónomos y pequeñas empresas tengan un asesor de verdad sin pagar lo que cuesta un
                despacho tradicional ni conformarse con una aplicación.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="direccion-titulo">
          <div className="contenedor equipo equipo-ficha">
            <FichaProfesional />
            <div className="equipo-texto">
              <h2 id="direccion-titulo">{site.owner}</h2>
              <p style={{ marginTop: "0.35rem", color: "var(--grafito)", fontFamily: "var(--sans)" }}>
                Director de Fiscalyx. Economista colegiado n.º {site.colegiado}.
              </p>
              <p style={{ marginTop: "1.25rem" }}>
                Francisco ha desarrollado su carrera en la asesoría fiscal y contable de autónomos y pequeñas empresas
                en la provincia de Alicante. En los últimos años se ha especializado en la fiscalidad de las
                criptomonedas y de las inversiones en plataformas extranjeras.
              </p>
              <p>
                Dirige el equipo y revisa personalmente los casos más complejos: regularizaciones, requerimientos y
                declaraciones con criptomonedas.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" aria-labelledby="pasos-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="pasos-titulo">Así trabajamos contigo.</h2>
            </div>
            <ol className="pasos">
              {pasos.map((p) => (
                <li key={p.t}>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="principios-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="principios-titulo">Cómo entendemos el trabajo.</h2>
            </div>
            <div className="dos-columnas">
              {principios.map((p) => (
                <div key={p.t} style={{ borderTop: "2px solid var(--tinta)", paddingTop: "1.1rem" }}>
                  <h3>{p.t}</h3>
                  <p style={{ marginTop: "0.5rem", color: "var(--grafito)" }}>{p.d}</p>
                </div>
              ))}
            </div>
            <div className="acciones" style={{ marginTop: "3rem" }}>
              <Link className="boton boton-principal" href="/#contacto">
                Pedir presupuesto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Pie />
    </>
  );
}
