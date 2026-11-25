import { agendaEnServidor, PLAZO_CLIENTE } from "@/lib/plazo";

export function ProximoPlazo() {
  const a = agendaEnServidor(new Date());
  return (
    <>
      <aside
        id="agenda-plazo"
        className="agenda"
        data-clave={a.clave}
        aria-label={a.etiqueta}
        dangerouslySetInnerHTML={{ __html: a.html }}
      />
      <script id="plazo" dangerouslySetInnerHTML={{ __html: PLAZO_CLIENTE }} />
    </>
  );
}
