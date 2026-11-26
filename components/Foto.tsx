// Fotos de Alicante de Unsplash (licencia Unsplash: uso comercial gratuito). Sin personas.
const fotos = {
  "castillo-atardecer": { w: 1600, h: 1066, autor: "Dean Milenkovic", alt: "El castillo de Santa Bárbara sobre los tejados de Alicante al atardecer" },
  puerto: { w: 1600, h: 902, autor: "Etienne Dayer", alt: "El puerto de Alicante con el monte Benacantil al fondo" },
  "santa-cruz": { w: 1600, h: 1062, autor: "Joseph Corl", alt: "Una calle del barrio de Santa Cruz de Alicante con macetas en las fachadas" },
  "arco-castillo": { w: 1600, h: 2400, autor: "Alpha Perspective", alt: "Un arco del castillo de Santa Bárbara con el mar de Alicante al fondo" },
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
