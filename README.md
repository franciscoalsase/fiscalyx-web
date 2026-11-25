# Fiscalyx

Web de Fiscalyx: gestoría online de economistas colegiados para autónomos, sociedades y criptomonedas.

- Next.js (App Router) con exportación estática. `npm run build` genera `out/` y `scripts/postbuild.mjs`
  quita el JavaScript de React: lo que se publica es HTML y CSS, con unos pocos scripts propios.
- Datos de la empresa, precios y contacto: `lib/site.ts`.
- Plazos fiscales de la agenda: `lib/plazo.ts`.
- Guías: `app/guias/*` y la lista en `lib/guias.ts`.
- Redirecciones y cabeceras: `vercel.json` (Vercel: sin framework, build `npm run build`, salida `out`).

```bash
npm install
npm run dev     # desarrollo
npm run build   # versión estática en out/
```
