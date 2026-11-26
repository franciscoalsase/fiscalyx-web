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

// Logotipo: la palabra subrayada a mano con el mismo amarillo con el que marcamos
// la cifra que importa en cada documento. El símbolo cuadrado queda para el favicon.
export function Logo() {
  return (
    <span className="logo">
      <span className="logo-texto">
        Fiscalyx
        <svg className="logo-trazo" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <path d="M1.2 4.6C18 3.1 41 4.2 63 3.3S92 3.6 99 4.4l-.6 6.3C79 11.6 52 10.2 31 11.1S7 11.4 1.6 10.9Z" fill="#ffe86e" />
        </svg>
      </span>
    </span>
  );
}
