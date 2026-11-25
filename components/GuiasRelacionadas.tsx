import Link from "next/link";
import { guias } from "@/lib/guias";

export function GuiasRelacionadas({ slugs, titulo = "Guías relacionadas" }: { slugs: string[]; titulo?: string }) {
  const lista = slugs.map((s) => guias.find((g) => g.slug === s)).filter(Boolean);
  return (
    <aside className="relacionadas" aria-label={titulo}>
      <h3>{titulo}</h3>
      <ul>
        {lista.map((g) => (
          <li key={g!.slug}>
            <Link href={`/guias/${g!.slug}/`}>{g!.titulo}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
