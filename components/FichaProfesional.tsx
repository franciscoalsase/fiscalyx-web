import { site } from "@/lib/site";

export function FichaProfesional() {
  return (
    <div className="ficha">
      <div className="ficha-cabeza">
        <strong>Ficha profesional</strong>
        <span>Fiscalyx</span>
      </div>
      <dl>
        <div>
          <dt>Director</dt>
          <dd>{site.owner}</dd>
        </div>
        <div>
          <dt>Titulación</dt>
          <dd>Economista</dd>
        </div>
        <div>
          <dt>N.º de colegiado</dt>
          <dd>{site.colegiado}</dd>
        </div>
        <div>
          <dt>Colegio</dt>
          <dd>{site.colegio}</dd>
        </div>
        <div>
          <dt>Agencia Tributaria</dt>
          <dd>Colaborador social</dd>
        </div>
        <div>
          <dt>Seguridad Social</dt>
          <dd>Autorizado del Sistema RED</dd>
        </div>
        <div>
          <dt>Seguro</dt>
          <dd>Responsabilidad civil profesional</dd>
        </div>
        <div>
          <dt>Sede</dt>
          <dd>Alicante, para toda España</dd>
        </div>
      </dl>
    </div>
  );
}
