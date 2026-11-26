// Garantía publicada: cubre recargos y sanciones causados por un error nuestro.
export function Garantia({ clase = "" }: { clase?: string }) {
  return (
    <p className={`garantia ${clase}`.trim()}>
      <strong>Si un error nuestro te cuesta un recargo o una sanción de Hacienda, lo pagamos nosotros.</strong> Cubre los
      fallos de nuestro trabajo; no los que vengan de datos o documentos que no nos llegaron a tiempo, ni el impuesto que
      ya te correspondía pagar.
    </p>
  );
}
