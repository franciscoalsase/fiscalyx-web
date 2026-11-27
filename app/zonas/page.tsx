import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { comunidades, otrasComunidades, pct, ESTATAL_MAX } from "@/lib/comunidades";

export const metadata: Metadata = {
  title: "Gestoría online por zonas: Alicante y toda España",
  description:
    "Trabajamos online con autónomos y sociedades de toda España. Lo que cambia en cada ciudad de la provincia de Alicante y en cada comunidad autónoma.",
  alternates: { canonical: "/zonas/" },
};

// Páginas locales: cada una trata el tema fiscal que más pesa en esa zona.
const alicante = [
  { ruta: "/gestoria-alicante/", nombre: "Alicante", tema: "Nuestra sede, y las deducciones autonómicas valencianas que aplicamos en tu Renta." },
  { ruta: "/gestoria-elche/", nombre: "Elche", tema: "IVA de las ventas al extranjero y autónomos dependientes (TRADE)." },
  { ruta: "/gestoria-vega-baja/", nombre: "Vega Baja", tema: "Agricultores en módulos: la reducción de 2026 y el límite de 250.000 €." },
  { ruta: "/gestoria-orihuela/", nombre: "Orihuela y Orihuela Costa", tema: "Alquiler turístico: registro valenciano e IVA cuando das servicios de hostelería." },
  { ruta: "/gestoria-torrevieja/", nombre: "Torrevieja", tema: "Propietarios no residentes: el Modelo 210 y sus nuevos plazos." },
  { ruta: "/gestoria-benidorm/", nombre: "Benidorm", tema: "Bares, restaurantes y alojamientos: módulos o estimación directa, y contratos de temporada." },
  { ruta: "/gestoria-alcoy/", nombre: "Alcoy", tema: "Empresas industriales: cuentas abreviadas, auditoría y SII." },
  { ruta: "/gestoria-elda-petrer/", nombre: "Elda y Petrer", tema: "Calzado y comercio: el cese de actividad de los autónomos." },
  { ruta: "/gestoria-denia/", nombre: "Dénia", tema: "Cuando un no residente vende su vivienda: retención del 3 % y Modelo 210." },
  { ruta: "/gestoria-san-vicente-del-raspeig/", nombre: "San Vicente del Raspeig", tema: "Empresas emergentes: lo que da la ley de startups." },
  { ruta: "/gestoria-villena/", nombre: "Villena", tema: "Comprar una nave: IVA o transmisiones patrimoniales." },
  { ruta: "/gestoria-xabia/", nombre: "Xàbia", tema: "Herencias en la Comunitat Valenciana: bonificaciones de 2026 y 2027." },
];

export default function Zonas() {
  const todas = [
    ...comunidades.map((c) => ({ nombre: c.nombre, max: c.max, ruta: `/gestoria-${c.slug}/`, ciudades: c.ciudades })),
    ...otrasComunidades.map((c) => ({ nombre: c.nombre, max: c.max, ruta: c.pagina, ciudades: [] as string[] })),
  ].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="portada portada-corta portada-clara">
          <div className="contenedor" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h1 style={{ maxWidth: "22ch" }}>Dónde trabajamos y qué cambia en tu zona</h1>
              <p className="entradilla">
                Somos una gestoría online: llevamos autónomos y sociedades de toda España por WhatsApp, correo y
                videollamada, con la sede en Alicante. Lo que cambia de un sitio a otro son los impuestos autonómicos y
                los negocios de cada zona, y eso es lo que explicamos en cada página.
              </p>
            </div>
          </div>
        </section>

        <section className="seccion" style={{ paddingTop: 0, borderTop: "none" }} aria-labelledby="zonas-alicante">
          <div className="contenedor">
            <h2 id="zonas-alicante" className="grupo-guias">
              Provincia de Alicante
            </h2>
            <ul className="lista-guias">
              {alicante.map((z) => (
                <li key={z.ruta}>
                  <h3>
                    <Link href={z.ruta}>Gestoría en {z.nombre}</Link>
                  </h3>
                  <p>{z.tema}</p>
                </li>
              ))}
            </ul>

            <h2 id="zonas-comunidades" className="grupo-guias">
              Por comunidad autónoma
            </h2>
            <p style={{ maxWidth: "65ch" }}>
              La mitad del IRPF va con la escala de tu comunidad, que tiene sus propios tramos y deducciones. Aquí
              tienes el tipo máximo de cada una, sumado al estatal del {pct(ESTATAL_MAX)}. País Vasco, Navarra, Canarias,
              Ceuta y Melilla tienen sistemas propios y no los atendemos.
            </p>
            <ul className="lista-guias">
              {todas.map((c) => (
                <li key={c.ruta}>
                  <h3>
                    <Link href={c.ruta}>Gestoría en {c.nombre}</Link>
                  </h3>
                  <p>
                    Tipo máximo del IRPF: {pct(Math.round((c.max + ESTATAL_MAX) * 100) / 100)}
                    {c.ciudades.length ? `. ${c.ciudades.slice(0, 3).join(", ")} y el resto de la comunidad.` : "."}
                  </p>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "2rem" }}>
              Para compararlas todas, con tramos e impuesto de transmisiones, mira la guía del{" "}
              <Link href="/guias/irpf-por-comunidades-2026/">IRPF por comunidades en 2026</Link>.
            </p>
          </div>
        </section>
      </main>
      <Pie cierre />
    </>
  );
}
