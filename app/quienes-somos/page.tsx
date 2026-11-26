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
    t: "Precios por escrito, que no cambian a mitad del año",
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
              <h1 style={{ maxWidth: "16ch" }}>Una gestoría online con el oficio de un despacho</h1>
              <p className="entradilla">
                Fiscalyx nace para que autónomos y pequeñas empresas tengan un economista que les conozca sin pagar lo que cuesta un
                despacho tradicional ni conformarse con una aplicación. Detrás hay economistas colegiados con más de 25 años
                de oficio.
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
              <h2 id="pasos-titulo">Así trabajamos contigo</h2>
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

        <section className="seccion seccion-banda" aria-labelledby="comprobar-titulo">
          <div className="contenedor texto-estrecho">
            <h2 id="comprobar-titulo">Cómo comprobar quiénes somos</h2>
            <p style={{ marginTop: "1rem" }}>
              Antes de darle a alguien acceso a tus impuestos, conviene verificar quién es. Esto no tienes que creértelo:
              puedes comprobarlo.
            </p>
            <dl className="definiciones">
              <div>
                <dt>La colegiación</dt>
                <dd>
                  Todo colegio profesional debe ofrecer en su web un registro público de colegiados. Busca a{" "}
                  {site.owner} y verás el número {site.colegiado}.
                </dd>
              </div>
              <div>
                <dt>La colaboración con Hacienda</dt>
                <dd>
                  Somos colaboradores sociales de la Agencia Tributaria y de varias haciendas autonómicas, y autorizados
                  del Sistema RED de la Seguridad Social. Con tu autorización, presentamos en tu nombre impuestos, altas y
                  cotizaciones sin que tengas que hacer nada.
                </dd>
              </div>
              <div>
                <dt>Lo que presentamos</dt>
                <dd>
                  Cada justificante de Hacienda que te mandamos lleva un código seguro de verificación. Puedes
                  contrastarlo en la sede electrónica de la Agencia Tributaria y ver que se presentó lo que te dijimos.
                </dd>
              </div>
              <div>
                <dt>Lo que cobramos</dt>
                <dd>
                  Los precios están publicados en <Link href="/precios/">nuestra página de precios</Link> y tu cuota
                  va por escrito antes de empezar. Sin permanencia.
                </dd>
              </div>
              <div>
                <dt>Lo que sabemos</dt>
                <dd>
                  Nuestras <Link href="/guias/">guías</Link> citan la norma y las consultas de Hacienda en las que se
                  basan. Si algo cambia, las actualizamos y lo decimos.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="seccion" aria-labelledby="principios-titulo">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="principios-titulo">Cómo entendemos el trabajo</h2>
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
              <Link className="boton boton-principal" href="/empezar/">
                Empezar<span className="visualmente-oculto"> con Fiscalyx</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Pie cierre />
    </>
  );
}
