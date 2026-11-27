// Conversor mínimo de HTML a Markdown para las copias que leen los agentes de IA (sin dependencias).
const ent = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'", "&#39;": "'", "&nbsp;": " ", "&#x2F;": "/" };
const des = (t) => t.replace(/&(?:amp|lt|gt|quot|#x27|#39|nbsp|#x2F);/g, (m) => ent[m]).replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
const limpio = (t) => des(t.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

function enLinea(h, base) {
  return limpio(
    h
      .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, txt) => {
        const t = limpio(txt);
        if (!t) return "";
        const url = href.startsWith("/") ? base + href : href;
        return `[${t}](${url})`;
      })
      .replace(/<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/g, (_, __, t) => `**${limpio(t)}**`)
      .replace(/<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/g, (_, __, t) => `*${limpio(t)}*`)
      .replace(/<br\s*\/?>/g, " ")
      .replace(/<(small|span)\b/g, " <$1"),
  );
}

export function aMarkdown(html, base) {
  let m = /<main\b[^>]*>([\s\S]*?)<\/main>/.exec(html)?.[1] ?? "";
  m = m
    .replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<svg\b[\s\S]*?<\/svg>|<form\b[\s\S]*?<\/form>|<button\b[\s\S]*?<\/button>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "");
  const out = [];
  const re = /<(h[1-4]|p|li|tr|dt|dd|caption|blockquote|figcaption)\b[^>]*>([\s\S]*?)<\/\1>/g;
  let x;
  let enTabla = false;
  while ((x = re.exec(m))) {
    const [, tag, cont] = x;
    if (tag === "tr") {
      const celdas = [...cont.matchAll(/<(t[hd])\b[^>]*>([\s\S]*?)<\/\1>/g)].map((c) => enLinea(c[2], base).replace(/\|/g, "/"));
      if (!celdas.length) continue;
      if (!enTabla) {
        out.push("", `| ${celdas.join(" | ")} |`, `|${celdas.map(() => " --- ").join("|")}|`);
        enTabla = true;
      } else out.push(`| ${celdas.join(" | ")} |`);
      continue;
    }
    if (enTabla) { out.push(""); enTabla = false; }
    // no repetir el texto de un <li> o <p> que contiene a su vez otros bloques
    // (se salta solo la etiqueta de apertura para que sí se lean los bloques de dentro)
    if (/<(p|li|h[1-4])\b/.test(cont)) { re.lastIndex = x.index + x[0].indexOf(">") + 1; continue; }
    const t = enLinea(cont, base);
    if (!t) continue;
    if (tag[0] === "h") out.push("", `${"#".repeat(+tag[1])} ${t}`, "");
    else if (tag === "li") out.push(`- ${t}`);
    else if (tag === "dt") out.push("", `**${t}**`);
    else if (tag === "caption") out.push("", `*${t}*`);
    else out.push(t, "");
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
