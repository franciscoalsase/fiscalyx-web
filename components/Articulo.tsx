import Link from "next/link";
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { site, whatsappLink } from "@/lib/site";

type Fuente = { nombre: string; url: string };

// Texto plano de un trozo de JSX, para el índice y el tiempo de lectura.
function texto(n: ReactNode): string {
  if (typeof n === "string" || typeof n === "number") return String(n);
  if (Array.isArray(n)) return n.map(texto).join(" ");
  if (isValidElement(n)) return texto((n.props as { children?: ReactNode }).children);
  return "";
}

const slug = (t: string) =>
  t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function Articulo({
  titulo,
  entradilla,
  tema,
  fecha,
  fuentes,
  cta,
  children,
}: {
  titulo: string;
  entradilla: string;
  tema: string;
  fecha: string;
  fuentes: Fuente[];
  cta: { titulo: string; texto: string; href: string; boton: string };
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: titulo,
    description: entradilla,
    inLanguage: "es-ES",
    dateModified: "2026-11-25",
    author: {
      "@type": "Person",
      name: site.owner,
      jobTitle: "Economista colegiado",
      url: `${site.url}/quienes-somos/`,
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Colegiación profesional",
        name: `Economista colegiado n.º ${site.colegiado}`,
        recognizedBy: { "@type": "Organization", name: site.colegio },
      },
    },
    reviewedBy: { "@type": "Person", name: site.owner, url: `${site.url}/quienes-somos/` },
    publisher: { "@type": "Organization", name: "Fiscalyx", url: site.url, logo: `${site.url}/icon.svg` },
    citation: fuentes.map((f) => f.url),
  };
  const migas = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Guías", item: `${site.url}/guias/` },
      { "@type": "ListItem", position: 3, name: titulo },
    ],
  };

  // Cada h2 del cuerpo recibe un id y entra en el índice.
  const indice: { id: string; t: string }[] = [];
  const cuerpo = Children.toArray(children).map((n) => {
    if (isValidElement(n) && n.type === "h2") {
      const t = texto(n);
      const id = slug(t);
      indice.push({ id, t });
      return cloneElement(n as ReactElement<{ id?: string }>, { id });
    }
    return n;
  });
  const minutos = Math.max(2, Math.round(texto(children).split(/\s+/).filter(Boolean).length / 220));

  return (
    <>
      <Cabecera actual="/guias/" />
      <main id="contenido">
        <article className="articulo">
          <div className="contenedor">
            <header className="articulo-cabeza">
              <p className="miga">
                <Link href="/guias/">Guías</Link> <span aria-hidden="true">/</span> {tema}
              </p>
              <h1>{titulo}</h1>
              <p className="entradilla">{entradilla}</p>
              <p className="firma">
                Revisado por <Link href="/quienes-somos/">{site.owner}</Link>, economista colegiado n.º {site.colegiado}.
                Actualizado en {fecha}. {minutos} minutos de lectura.
              </p>
            </header>

            <div className="articulo-rejilla">
            {indice.length >= 4 && (
              <nav className="indice" aria-label="En esta guía">
                <p className="indice-titulo">En esta guía</p>
                <ol>
                  {indice.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{h.t}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="articulo-principal">
            <div className="articulo-cuerpo">{cuerpo}</div>

            <aside className="articulo-cta" aria-label="Contacto">
              <h2>{cta.titulo}</h2>
              <p>{cta.texto}</p>
              <div className="acciones">
                <Link className="boton boton-principal" href={cta.href}>
                  {cta.boton}
                  {cta.boton === "Empezar" && <span className="visualmente-oculto"> con Fiscalyx</span>}
                </Link>
                <a className="enlace-sencillo" href={whatsappLink()} target="_blank" rel="nofollow noopener noreferrer">
                  Escríbenos por WhatsApp
                </a>
              </div>
            </aside>

            <section className="fuentes" aria-labelledby="fuentes-titulo">
              <h2 id="fuentes-titulo">Fuentes</h2>
              <ul>
                {fuentes.map((f) => (
                  <li key={f.url}>
                    <a href={f.url} target="_blank" rel="noopener noreferrer">
                      {f.nombre}
                    </a>
                  </li>
                ))}
              </ul>
              <p>
                Esta guía es información general y no sustituye al análisis de tu caso. La normativa cambia: revisamos
                las guías cada vez que hay novedades.
              </p>
            </section>
            </div>
            </div>
          </div>
        </article>
      </main>
      <Pie cierre />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, migas]) }} />
    </>
  );
}
