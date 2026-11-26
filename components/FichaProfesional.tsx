import Link from "next/link";
import { site } from "@/lib/site";

// Credencial del director: quién firma, con qué colegiación y ante quién puede presentar en tu nombre.
export function FichaProfesional() {
  return (
    <div className="ficha">
      <p className="ficha-rol">Economista colegiado, director de Fiscalyx</p>
      <p className="ficha-nombre">{site.owner}</p>
      <p className="ficha-colegio">
        <mark>N.º {site.colegiado}</mark> del {site.colegio}
      </p>
      <p className="ficha-sub">Presenta en tu nombre ante</p>
      <ul className="ficha-habilitaciones">
        <li>
          <strong>Agencia Tributaria</strong>
          <span>Colaborador social</span>
        </li>
        <li>
          <strong>Seguridad Social</strong>
          <span>Autorizado del Sistema RED</span>
        </li>
        <li>
          <strong>Haciendas autonómicas</strong>
          <span>Colaborador en varias comunidades</span>
        </li>
      </ul>
      <p className="ficha-pie">
        Con seguro de responsabilidad civil profesional. Sede en {site.city}, para toda España.{" "}
        <Link href="/quienes-somos/#comprobar-titulo">Cómo comprobarlo</Link>
      </p>
    </div>
  );
}
