import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "¿Autónomo o sociedad limitada? Cuándo compensa en 2026",
  description:
    "Comparamos el IRPF del autónomo con el Impuesto sobre Sociedades de 2026 (19 % y 21 % para microempresas) y lo que de verdad decide si te conviene una SL.",
  alternates: { canonical: "/guias/autonomo-o-sociedad/" },
};

export default function AutonomoOSociedad() {
  return (
    <Articulo
      titulo="¿Autónomo o sociedad limitada? Cuándo compensa de verdad"
      entradilla="No hay una cifra mágica. Una SL empieza a compensar cuando ganas bastante más de lo que necesitas para vivir y puedes dejar parte del beneficio dentro de la sociedad. Te explicamos por qué, con los tipos de 2026."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Hagamos la cuenta con tus números.",
        texto: "Comparamos lo que pagas hoy como autónomo con lo que pagarías con una sociedad, incluidos los costes de la SL. Si compensa, te ayudamos a crearla.",
        href: "/constituir-sociedad/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: tipos de gravamen del Impuesto sobre Sociedades 2025 y siguientes", url: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-sociedades-2025/principales-novedades-impuesto-sobre-sociedades-2025/tipos-gravamen.html" },
        { nombre: "Wolters Kluwer: tipos del Impuesto sobre Sociedades por período", url: "https://www.wolterskluwer.com/es-es/expert-insights/impuesto-sociedades-2023-2024-novedades" },
        { nombre: "Tramos del IRPF y de la base del ahorro 2026", url: "https://guiafiscal.es/irpf/tramos-irpf/" },
      ]}
    >
      <h2>La diferencia de fondo</h2>
      <p>
        Como autónomo, todo tu beneficio tributa en el IRPF con una escala que sube a medida que ganas más: con
        variaciones según la comunidad autónoma, el tipo marginal ronda el 37 % a partir de unos 35.000 € y llega al
        45 % por encima de 60.000 €.
      </p>
      <p>
        Una sociedad paga el Impuesto sobre Sociedades sobre su beneficio, a un tipo mucho más estable. Pero ese
        dinero es de la sociedad, no tuyo. Para usarlo tienes que cobrar un sueldo (que tributa en tu IRPF) o repartir
        dividendos (que tributan en la base del ahorro, del 19 % al 30 %).
      </p>

      <h2>Los tipos del Impuesto sobre Sociedades</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Tipo de sociedad</th>
              <th scope="col">2026</th>
              <th scope="col">2027</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Microempresa (cifra de negocios menor de 1 millón): primeros 50.000 €</th>
              <td>19 %</td>
              <td>17 %</td>
            </tr>
            <tr>
              <th scope="row">Microempresa: resto de la base</th>
              <td>21 %</td>
              <td>20 %</td>
            </tr>
            <tr>
              <th scope="row">Empresa de reducida dimensión (menos de 10 millones)</th>
              <td>23 %</td>
              <td>22 %</td>
            </tr>
            <tr>
              <th scope="row">Tipo general</th>
              <td>25 %</td>
              <td>25 %</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        Las sociedades de nueva creación pueden tributar al 15 % en el primer ejercicio con beneficio y en el
        siguiente, con requisitos. Las sociedades patrimoniales tienen un régimen distinto.
      </p>

      <h2>Cuándo suele compensar</h2>
      <ul>
        <li>
          <strong>Ganas claramente más de lo que gastas para vivir.</strong> El ahorro está en el beneficio que se
          queda en la sociedad, tributando al 19 % o 21 % en vez de a tu tipo marginal del IRPF.
        </li>
        <li>
          <strong>Quieres reinvertir</strong>: equipos, local, contratar a alguien o crecer.
        </li>
        <li>
          <strong>Tu actividad tiene riesgo</strong> y quieres separar tu patrimonio personal del del negocio.
        </li>
        <li>
          <strong>Necesitas imagen de empresa</strong> ante clientes grandes o licitaciones.
        </li>
      </ul>

      <h2>Cuándo no</h2>
      <ul>
        <li>Si necesitas sacar casi todo el beneficio cada año para vivir: el ahorro fiscal se diluye.</li>
        <li>Si tus ingresos son bajos o irregulares.</li>
        <li>
          Si no cuentas con los costes de la sociedad: gestoría más cara, cuentas anuales, Registro Mercantil y una
          cuota de autónomo societario más alta para el administrador.
        </li>
      </ul>

      <h2>Cómo decidir</h2>
      <p>
        La única forma fiable es hacer la cuenta completa con tus números: beneficio previsto, lo que necesitas sacar
        cada año, tu comunidad autónoma y los costes de la SL. Si la diferencia a favor de la sociedad no compensa con
        claridad esos costes y la complejidad, lo sensato es seguir como autónomo un año más y volver a revisarlo.
      </p>
      <p>
        Para una primera idea, prueba tu caso en nuestra{" "}
        <Link href="/calculadora-autonomo-o-sociedad/">calculadora de autónomo o sociedad</Link>: compara IRPF,
        Impuesto sobre Sociedades y Seguridad Social con las cifras de 2026.
      </p>
    </Articulo>
  );
}
