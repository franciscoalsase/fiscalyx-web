import Link from "next/link";
import { Foto, type NombreFoto } from "@/components/Foto";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { FormularioContacto } from "@/components/FormularioContacto";
import { prices, site, whatsappLink } from "@/lib/site";

type Pregunta = { p: string; r: string };

// Plantilla de las páginas locales. Cada página aporta su propio contenido: zona, particularidades
// fiscales de su comunidad, municipios y preguntas. Nada de copias con el nombre de la ciudad cambiado.
export function PaginaLocal({
  zona,
  titulo,
  entradilla,
  municipios,
  intro,
  fiscalTitulo,
  fiscalFilas,
  fiscalNota,
  fuentes,
  extra,
  preguntas,
  areaServida,
  foto,
  fotoPie,
  servicios = true,
}: {
  zona: string;
  titulo: string;
  entradilla: string;
  municipios: string[];
  intro: React.ReactNode;
  fiscalTitulo: string;
  fiscalFilas: [string, string][];
  fiscalNota: React.ReactNode;
  fuentes: { nombre: string; url: string }[];
  extra?: React.ReactNode;
  preguntas: Pregunta[];
  areaServida: string[];
  servicios?: boolean;
  foto?: NombreFoto;
  fotoPie?: string;
}) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "AccountingService",
      name: `Fiscalyx en ${zona}`,
      url: site.url,
      telephone: `+${site.phoneIntl}`,
      email: site.email,
      areaServed: areaServida.map((n) => ({ "@type": "AdministrativeArea", name: n })),
      parentOrganization: { "@type": "AccountingService", name: "Fiscalyx", url: site.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: preguntas.map((q) => ({ "@type": "Question", name: q.p, acceptedAnswer: { "@type": "Answer", text: q.r } })),
    },
  ];

  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta">
          <div className="contenedor portada-local">
            <div>
              <h1 style={{ maxWidth: "20ch" }}>{titulo}</h1>
              <p className="entradilla">{entradilla}</p>
              <div className="acciones">
                <a className="boton boton-principal" href="/empezar/">
                  Empezar<span className="visualmente-oculto"> con Fiscalyx</span>
                </a>
                <a
                  className="enlace-sencillo"
                  href={whatsappLink(`Hola, os escribo desde ${zona}.`)}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
              <p className="portada-condiciones">Autónomos desde {prices.autonomoMes} € al mes y sociedades desde {prices.sociedadMes} €. También hacemos la Renta con criptomonedas.</p>
            </div>
            <aside className="documento ficha-local" aria-label={`Lo que revisamos en ${zona}`}>
              <p className="ficha-local-titulo">Lo que revisamos en {zona}</p>
              <p className="ficha-local-tema">{fiscalTitulo}</p>
              <ul>
                {fiscalFilas.slice(0, 5).map(([c]) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <a className="ficha-local-enlace" href="#local-fiscal">
                Ver el detalle
              </a>
            </aside>
          </div>
        </section>

        {foto ? (
          <div className="contenedor foto-tras-portada">
            <Foto nombre={foto} pie={fotoPie} prioridad />
          </div>
        ) : null}
        <section className="seccion seccion-banda">
          <div className="contenedor texto-estrecho local-texto">{intro}</div>
        </section>

        <section className="seccion" aria-labelledby="local-fiscal">
          <div className="contenedor texto-estrecho">
            <h2 id="local-fiscal">{fiscalTitulo}</h2>
            <div className="tabla-scroll" style={{ marginTop: "1.25rem" }}>
              <table className="tabla">
                <tbody>
                  {fiscalFilas.map(([c, d]) => (
                    <tr key={c}>
                      <th scope="row">{c}</th>
                      <td>{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="local-texto" style={{ marginTop: "1.25rem" }}>
              {fiscalNota}
            </div>
            <p className="nota-fuente">
              Fuentes:{" "}
              {fuentes.map((f, i) => (
                <span key={f.url}>
                  {i > 0 ? ", " : ""}
                  <a href={f.url} target="_blank" rel="noopener noreferrer">
                    {f.nombre}
                  </a>
                </span>
              ))}
              .
            </p>
          </div>
        </section>

        {extra}

        {servicios && (
        <section className="seccion seccion-banda" aria-labelledby="local-servicios">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="local-servicios">Servicios y cuotas</h2>
            </div>
            <ul className="carta">
              <li>
                <div>
                  <h3>Autónomos</h3>
                  <p>Trimestrales, anuales y Renta, con un asesor que conoce tu actividad.</p>
                </div>
                <p className="carta-precio">
                  {prices.autonomoMes} €<small>al mes + IVA</small>
                </p>
                <Link className="carta-enlace" href="/autonomos/">
                  Ver el servicio
                </Link>
              </li>
              <li>
                <div>
                  <h3>Sociedades</h3>
                  <p>Contabilidad, impuestos, Impuesto sobre Sociedades y cuentas anuales de tu SL.</p>
                </div>
                <p className="carta-precio">
                  <span>desde </span>
                  {prices.sociedadMes} €<small>al mes + IVA</small>
                </p>
                <Link className="carta-enlace" href="/sociedades/">
                  Ver el servicio
                </Link>
              </li>
              <li>
                <div>
                  <h3>Criptomonedas</h3>
                  <p>Renta con cripto, Modelo 721 y regularizaciones, operación por operación.</p>
                </div>
                <p className="carta-precio">
                  <span>desde </span>
                  {prices.cripto[0].tiers[0].price}
                </p>
                <Link className="carta-enlace" href="/criptomonedas/">
                  Ver el servicio
                </Link>
              </li>
            </ul>
            <p className="nota-fuente" style={{ marginTop: "1.5rem" }}>
              También trabajamos con clientes de {municipios.join(", ")}.
            </p>
          </div>
        </section>
        )}

        <section className="seccion" aria-labelledby="local-preguntas">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h2 id="local-preguntas">Preguntas desde {zona}</h2>
            </div>
            <dl className="preguntas-abiertas">
              {preguntas.map((q) => (
                <div key={q.p}>
                  <dt>{q.p}</dt>
                  <dd>{q.r}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="seccion seccion-banda" id="contacto" aria-labelledby="local-contacto">
          <div className="contenedor contacto">
            <div>
              <h2 id="local-contacto">Cuéntanos tu caso</h2>
              <p style={{ marginTop: "1rem", color: "var(--grafito)" }}>
                Te respondemos en 24 horas laborables. La primera conversación es gratuita.
              </p>
            </div>
            <FormularioContacto />
          </div>
        </section>
      </main>
      <Pie />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
