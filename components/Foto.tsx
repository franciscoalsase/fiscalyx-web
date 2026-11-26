// Fotos de Unsplash (licencia Unsplash: uso comercial gratuito), solo en páginas locales. Sin personas.
const fotos = {
  puerto: { w: 1600, h: 902, autor: "Etienne Dayer", alt: "El puerto de Alicante con el monte Benacantil al fondo" },
} as const;

export type NombreFoto = keyof typeof fotos;

export function Foto({
  nombre,
  pie,
  clase = "",
  prioridad = false,
  tamanos = "(max-width: 860px) 100vw, 1200px",
}: {
  nombre: NombreFoto;
  pie?: string;
  clase?: string;
  prioridad?: boolean;
  tamanos?: string;
}) {
  const f = fotos[nombre];
  return (
    <figure className={`foto ${clase}`.trim()}>
      <img
        src={`/fotos/alicante-${nombre}-1600.webp`}
        srcSet={`/fotos/alicante-${nombre}-800.webp 800w, /fotos/alicante-${nombre}-1600.webp 1600w`}
        sizes={tamanos}
        width={f.w}
        height={f.h}
        alt={f.alt}
        loading={prioridad ? "eager" : "lazy"}
        decoding="async"
      />
      <figcaption>
        {pie ? <span>{pie}</span> : null}
        <span className="foto-credito">Foto: {f.autor} en Unsplash</span>
      </figcaption>
    </figure>
  );
}
