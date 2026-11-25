// Genera los calendarios descargables (.ics) a partir de lib/plazos-2027.json.
import { readFileSync, writeFileSync } from "node:fs";

const plazos = JSON.parse(readFileSync(new URL("../lib/plazos-2027.json", import.meta.url), "utf8"));
const web = "https://www.fiscalyx.com/guias/calendario-fiscal-autonomos-2027/";

const esc = (t) => t.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

// Las líneas de un .ics no deben pasar de 75 octetos; las largas se pliegan con CRLF + espacio.
function plegar(linea) {
  const bytes = Buffer.from(linea, "utf8");
  if (bytes.length <= 75) return linea;
  const partes = [];
  let actual = "";
  for (const c of linea) {
    const limite = partes.length === 0 ? 75 : 74;
    if (Buffer.byteLength(actual + c, "utf8") > limite) {
      partes.push(actual);
      actual = c;
    } else actual += c;
  }
  partes.push(actual);
  return partes.join("\r\n ");
}

const dia = (f) => f.replace(/-/g, "");
function siguiente(f) {
  const d = new Date(f + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}

function calendario(para, nombre) {
  const lineas = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Fiscalyx//Plazos fiscales 2027//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${esc(nombre)}`,
    "X-WR-TIMEZONE:Europe/Madrid",
  ];
  plazos
    .filter((p) => p.para.includes(para))
    .forEach((p, i) => {
      lineas.push(
        "BEGIN:VEVENT",
        `UID:${dia(p.fecha)}-${para}-${i}@fiscalyx.com`,
        "DTSTAMP:20261125T090000Z",
        `DTSTART;VALUE=DATE:${dia(p.fecha)}`,
        `DTEND;VALUE=DATE:${siguiente(p.fecha)}`,
        `SUMMARY:${esc("Último día: " + p.titulo)}`,
        `DESCRIPTION:${esc(p.texto + "\n\nPlazo: " + p.cuando + ".\nMás información: " + web)}`,
        `URL:${web}`,
        "TRANSP:TRANSPARENT",
        "BEGIN:VALARM",
        "ACTION:DISPLAY",
        `DESCRIPTION:${esc("Quedan 5 días: " + p.titulo)}`,
        "TRIGGER:-P5D",
        "END:VALARM",
        "END:VEVENT",
      );
    });
  lineas.push("END:VCALENDAR");
  return lineas.map(plegar).join("\r\n") + "\r\n";
}

writeFileSync(new URL("../public/calendario-fiscal-2027-autonomos.ics", import.meta.url), calendario("autonomo", "Plazos fiscales 2027 de autónomo (Fiscalyx)"));
writeFileSync(new URL("../public/calendario-fiscal-2027-sociedades.ics", import.meta.url), calendario("sociedad", "Plazos fiscales 2027 de sociedad (Fiscalyx)"));
console.log("ics: calendarios de 2027 generados");
