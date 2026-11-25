import type { Metadata } from "next";
import Link from "next/link";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { guias } from "@/lib/guias";

export const metadata: Metadata = {
  title: "Guías de impuestos para autónomos, sociedades y cripto",
  description: "Guías y calculadoras revisadas por economistas colegiados: cuota de autónomos, gastos deducibles, autónomo o SL, Renta con criptomonedas, Modelo 721 y más.",
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
        <section className="seccion" style={{ paddingTop: 0, borderTop: "none" }} aria-labelledby="guias-autonomos">
          <div className="contenedor">
            <h2 id="guias-autonomos" className="grupo-guias">Autónomos y sociedades</h2>
            <ul className="lista-guias">
              {guias
                .filter((g) => g.tema !== "Criptomonedas")
                .map((g) => (
                  <li key={g.slug}>
                    <h3>
                      <Link href={`/guias/${g.slug}/`}>{g.titulo}</Link>
                    </h3>
                    <p>{g.resumen}</p>
                  </li>
                ))}
            </ul>

            <h2 id="guias-cripto" className="grupo-guias">Criptomonedas</h2>
            <ul className="lista-guias">
              {guias
                .filter((g) => g.tema === "Criptomonedas")
                .sort((a, b) => Number(b.slug === "declarar-criptomonedas-renta") - Number(a.slug === "declarar-criptomonedas-renta"))
                .map((g) => (
                  <li key={g.slug}>
                    <h3>
                      <Link href={`/guias/${g.slug}/`}>{g.titulo}</Link>
                    </h3>
                    <p>{g.resumen}</p>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        <section className="seccion seccion-banda" aria-labelledby="herramientas">
          <div className="contenedor">
            <h2 id="herramientas" className="grupo-guias">Calculadoras y herramientas</h2>
            <ul className="lista-guias">
              <li>
                <h3>
                  <Link href="/calculadora-cuota-autonomos/">Calculadora de la cuota de autónomos</Link>
                </h3>
                <p>Tu tramo y tu cuota mínima según lo que ganas de verdad, con la tabla vigente.</p>
              </li>
              <li>
                <h3>
                  <Link href="/calculadora-autonomos/">Calculadora de IVA e IRPF trimestral</Link>
                </h3>
                <p>Cuánto pagarás en el próximo modelo 303 y 130 con tus ingresos y gastos.</p>
              </li>
              <li>
                <h3>
                  <Link href="/calculadora-autonomo-o-sociedad/">¿Autónomo o sociedad limitada?</Link>
                </h3>
                <p>Compara IRPF, Impuesto sobre Sociedades y Seguridad Social con tus números.</p>
              </li>
              <li>
                <h3>
                  <Link href="/criptomonedas/#presupuesto">Presupuesto de la Renta con criptomonedas</Link>
                </h3>
                <p>Tu precio en tres preguntas: operaciones, tipo de inversiones y años pendientes.</p>
              </li>
              <li>
                <h3>
                  <Link href="/guias/calendario-fiscal-autonomos-2027/">Calendario fiscal de 2027 para tu móvil</Link>
                </h3>
                <p>Todos los plazos del año en Google Calendar, Outlook o el iPhone, con aviso cinco días antes.</p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Pie />
    </>
  );
}
