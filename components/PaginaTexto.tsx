import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";

export function PaginaTexto({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <>
      <Cabecera />
      <main id="contenido">
        <div className="contenedor">
          <article className="texto-legal">
            <h1>{titulo}</h1>
            <p className="actualizado">Última actualización: noviembre de 2026</p>
            {children}
          </article>
        </div>
      </main>
      <Pie />
    </>
  );
}
