// Símbolo de Fiscalyx: una F cuyo brazo central termina en una casilla marcada,
// como la de un impreso de Hacienda ya revisado.
export function Simbolo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <rect width="40" height="40" rx="9" fill="#1b2a41" />
      <rect x="11.5" y="9.5" width="5.5" height="21" rx="0.6" fill="#fcfcfa" />
      <rect x="11.5" y="9.5" width="17" height="5" rx="0.6" fill="#fcfcfa" />
      <rect x="11.5" y="18" width="9.5" height="4.6" rx="0.6" fill="#fcfcfa" />
      <rect x="23.2" y="18" width="4.6" height="4.6" rx="0.8" fill="#ffe86e" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <Simbolo />
      <span className="logo-texto">Fiscalyx</span>
    </span>
  );
}
