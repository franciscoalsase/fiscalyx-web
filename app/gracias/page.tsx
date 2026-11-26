import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hemos recibido tu mensaje",
  robots: { index: false, follow: false },
  alternates: { canonical: "/gracias/" },
};

export default function Gracias() {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <section className="seccion gracias">
          <div className="contenedor">
            <div className="cabeza-seccion">
              <h1>Hemos recibido tu mensaje</h1>
              <p>
                Lo lee un economista del despacho, no un programa. Te contestamos en un plazo de 24 horas laborables, en
                el horario de {site.horario.toLowerCase()}.
              </p>
            </div>
            <ol className="cronologia gracias-pasos">
              <li>
                <span className="cronologia-cuando">En 24 horas laborables</span>
                <div>
                  <strong>Te llamamos o te escribimos</strong>
                  <p>Para entender tu actividad y lo que te preocupa. Si nos dejaste teléfono, te llamamos a ese número.</p>
                </div>
              </li>
              <li>
                <span className="cronologia-cuando">Después de hablar</span>
                <div>
                  <strong>Te mandamos el presupuesto y el contrato</strong>
                  <p>Por escrito. No pagas nada hasta que lo aceptes, y no hay permanencia.</p>
                </div>
              </li>
              <li>
                <span className="cronologia-cuando">Cuando aceptes</span>
                <div>
                  <strong>Nos autorizas ante Hacienda y la Seguridad Social</strong>
                  <p>Te guiamos paso a paso. Si vienes de otra gestoría, le pedimos nosotros tu documentación.</p>
                </div>
              </li>
            </ol>
            <p className="gracias-nota">
              ¿Es urgente, por ejemplo una carta de Hacienda con plazo? Escríbenos también por{" "}
              <a href={whatsappLink()} target="_blank" rel="nofollow noopener noreferrer">WhatsApp</a> y dinos la fecha límite.
              Mientras tanto, puedes <Link href="/guias/calendario-fiscal-autonomos-2027/">añadir los plazos de 2027 a tu
              calendario</Link> o <Link href="/guias/">leer nuestras guías</Link>.
            </p>
          </div>
        </section>
      </main>
      <Pie />
    </>
  );
}
