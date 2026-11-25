export type MesAnio = { mes: string; hito?: { t: string; d: string; renta?: boolean } };

export function LineaAnio({ meses, leyenda }: { meses: MesAnio[]; leyenda: [string, string] }) {
  return (
    <>
      <ol
        className="anio"
        data-revelar=""
        style={{ "--columnas": meses.map((m) => (m.hito ? "minmax(0, 2.6fr)" : "minmax(0, 1fr)")).join(" ") } as React.CSSProperties}
      >
        {meses.map((m, i) => (
          <li
            key={m.mes}
            className={m.hito ? `con-hito${m.hito.renta ? " renta" : ""}` : undefined}
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className="mes">{m.mes}</span>
            {m.hito && (
              <p className="hito">
                <strong>{m.hito.t}</strong>
                {m.hito.d}
              </p>
            )}
          </li>
        ))}
      </ol>
      <p className="leyenda-anio">
        <span>{leyenda[0]}</span>
        <span className="renta">{leyenda[1]}</span>
      </p>
    </>
  );
}
