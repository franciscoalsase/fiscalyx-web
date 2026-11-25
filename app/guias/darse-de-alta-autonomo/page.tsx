import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Cómo darse de alta como autónomo en 2027, paso a paso",
  description:
    "El orden correcto para hacerte autónomo: paro, modelo 036 en Hacienda, alta en la Seguridad Social, tarifa plana, licencias y primera factura. Con los errores que más caros salen.",
  alternates: { canonical: "/guias/darse-de-alta-autonomo/" },
};

const pasos: { t: string; d: React.ReactNode }[] = [
  {
    t: "Si cobras el paro, decide antes qué haces con él",
    d: (
      <>
        Si quieres capitalizarlo, tienes que pedir el pago único <strong>antes</strong> de darte de alta. Si te das de
        alta primero, lo pierdes. Te lo contamos en <Link href="/capitalizar-paro/">capitalizar el paro</Link>.
      </>
    ),
  },
  {
    t: "Alta en Hacienda con el modelo 036",
    d: (
      <>
        Eliges tu actividad (el epígrafe del IAE), el régimen de IVA y cómo tributarás en el IRPF, que para casi
        todos es la estimación directa simplificada. El antiguo modelo 037 ya no existe: desde febrero de 2025 todo se
        hace con el 036.
      </>
    ),
  },
  {
    t: "Alta en la Seguridad Social",
    d: (
      <>
        En el Régimen Especial de Trabajadores Autónomos, desde Import@ss. Puedes pedirla hasta 60 días antes de
        empezar, y como tarde el mismo día. Aquí eliges tu base de cotización según lo que prevés ganar.
      </>
    ),
  },
  {
    t: "Pide la tarifa plana en el mismo momento",
    d: <>Si te corresponde, se solicita con el alta. Si no la marcas entonces, después no puedes pedirla.</>,
  },
  {
    t: "Licencias, si tienes local",
    d: (
      <>
        La licencia de actividad o la declaración responsable se piden en tu ayuntamiento antes de abrir. Si trabajas
        desde casa o con el ordenador, normalmente no hace falta.
      </>
    ),
  },
  {
    t: "Tu primera factura",
    d: (
      <>
        Con número, fecha, tus datos y los del cliente, la base, el IVA y, si eres profesional y facturas a empresas,
        la retención del IRPF. Guarda todas las facturas de gastos desde el primer día.
      </>
    ),
  },
];

export default function AltaAutonomo() {
  return (
    <Articulo
      titulo="Cómo darse de alta como autónomo, paso a paso"
      entradilla="Darse de alta es gratis y se hace en una mañana. Lo difícil es hacerlo en el orden correcto: un paso fuera de sitio te puede costar el paro capitalizado o la tarifa plana."
      tema="Autónomos"
      fecha="noviembre de 2026"
      cta={{
        titulo: "Te damos de alta nosotros",
        texto: "El alta en Hacienda y en la Seguridad Social va incluida en nuestra cuota de autónomo. Te ayudamos a elegir epígrafe, base de cotización y la tarifa plana.",
        href: "/empezar/?plan=autonomo",
        boton: "Empezar",
      }}
      fuentes={[
        { nombre: "Orden HAC/1526/2024, que suprime el modelo 037 (BOE)", url: "https://www.boe.es/boe/dias/2025/01/09/pdfs/BOE-A-2025-410.pdf" },
        { nombre: "Seguridad Social: Import@ss, alta de autónomos", url: "https://portal.seg-social.gob.es/wps/portal/importass/importass/" },
        { nombre: "Ley 20/2007 del Estatuto del Trabajo Autónomo, artículo 38 ter: tarifa plana", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2007-13409" },
        { nombre: "Declarando: tarifa plana para autónomos en 2026", url: "https://declarando.es/tarifa-plana-autonomos" },
      ]}
    >
      <h2>El orden correcto</h2>
      <ol className="pasos-guia">
        {pasos.map((p) => (
          <li key={p.t}>
            <strong>{p.t}</strong>
            <span>{p.d}</span>
          </li>
        ))}
      </ol>

      <h2>La tarifa plana</h2>
      <p>
        Durante los primeros doce meses pagas una cuota reducida de 80 € al mes, más el Mecanismo de Equidad
        Intergeneracional: 88,64 € al mes en 2026. En 2027 subirá un poco porque sube el MEI; la cifra exacta
        depende de la orden de cotización, que aún no se ha publicado.
      </p>
      <p>
        Si en ese primer año tus rendimientos netos quedan por debajo del salario mínimo, puedes pedir otros doce meses
        con la misma cuota. Para tener derecho, no puedes haber estado de alta como autónomo en los dos años anteriores,
        o en los tres anteriores si ya disfrutaste antes de la tarifa plana.
      </p>
      <p>
        Pasado ese tiempo, pagas según tus rendimientos. Puedes calcular tu tramo con nuestra{" "}
        <Link href="/calculadora-cuota-autonomos/">calculadora de cuota de autónomos</Link>.
      </p>

      <h2>Los errores que más caros salen</h2>
      <ul>
        <li>
          <strong>Darse de alta antes de pedir el pago único del paro.</strong> No tiene arreglo.
        </li>
        <li>
          <strong>No marcar la tarifa plana en el alta.</strong> Un año pagando la cuota completa.
        </li>
        <li>
          <strong>Elegir mal el epígrafe.</strong> Cambia si tienes que retener en tus facturas, qué IVA aplicas y,
          en algunas actividades, si estás en recargo de equivalencia.
        </li>
        <li>
          <strong>Empezar a trabajar sin estar de alta.</strong> La Seguridad Social puede reclamarte las cuotas con
          recargo desde el día en que empezaste.
        </li>
        <li>
          <strong>No guardar las facturas de los primeros gastos.</strong> El ordenador, el móvil o la web del primer
          mes también se deducen si están a tu nombre y son para la actividad.
        </li>
      </ul>

      <h2>¿Autónomo o sociedad desde el principio?</h2>
      <p>
        Para casi todos los que empiezan, autónomo: es más barato de mantener y más sencillo. La sociedad empieza a
        compensar cuando el beneficio es alto y no necesitas sacarlo todo para vivir. Hazte una idea con la{" "}
        <Link href="/calculadora-autonomo-o-sociedad/">calculadora de autónomo o sociedad</Link>.
      </p>

      <h2>Y desde el primer trimestre</h2>
      <p>
        A partir del alta, cada trimestre presentarás el IVA (modelo 303) y, si te toca, el pago a cuenta del IRPF
        (modelo 130). El primer plazo llega antes de lo que parece. Tienes todas las fechas en el{" "}
        <Link href="/guias/calendario-fiscal-autonomos-2027/">calendario fiscal de 2027</Link>.
      </p>
    </Articulo>
  );
}
