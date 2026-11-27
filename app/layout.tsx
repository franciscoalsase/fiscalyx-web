import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";

const sans = localFont({
  src: "./fuentes/schibsted.woff2",
  weight: "400 900",
  variable: "--fuente-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const serif = localFont({
  src: "./fuentes/source-serif.woff2",
  weight: "200 900",
  variable: "--fuente-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  authors: [{ name: site.owner, url: `${site.url}/quienes-somos/` }],
  title: {
    default: "Gestoría y asesoría online de economistas colegiados | Fiscalyx",
    template: "%s | Fiscalyx",
  },
  description:
    "Gestoría online para autónomos y sociedades de toda España. Economistas colegiados, cuota fija, un asesor asignado y sin permanencia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gestoría y asesoría online de economistas colegiados | Fiscalyx",
    description:
      "Economistas colegiados. Impuestos y contabilidad por una cuota fija, con un asesor asignado.",
    url: site.url,
    siteName: "Fiscalyx",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fiscalyx, gestoría online para autónomos y sociedades" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Fiscalyx",
  url: site.url,
  email: site.email,
  telephone: `+${site.phoneIntl}`,
  areaServed: { "@type": "Country", name: "España" },
  priceRange: "Desde 49 € al mes",
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/og.png`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "17:30",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plaza San Cristóbal 14",
    postalCode: "03002",
    addressLocality: "Alicante",
    addressCountry: "ES",
  },
  founder: {
    "@type": "Person",
    name: site.owner,
    jobTitle: "Economista colegiado",
    url: `${site.url}/quienes-somos/`,
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Colegiación profesional",
      name: `Economista colegiado n.º ${site.colegiado}`,
      recognizedBy: { "@type": "Organization", name: site.colegio },
    },
  },
  knowsAbout: [
    "Gestoría para autónomos",
    "Gestoría para sociedades limitadas",
    "Impuesto sobre Sociedades",
    "IVA",
    "IRPF",
    "Declaración de la Renta",
    "Fiscalidad de criptomonedas",
    "Modelo 721",
  ],
};

const efectos = `document.documentElement.classList.add("js");
addEventListener("DOMContentLoaded",function(){
  var cs=document.querySelectorAll(".portada [data-contar]");
  if(cs.length&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
    var fmt=function(n){return n.toLocaleString("es-ES",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:"always"})+" \u20ac"};
    var mk=document.querySelector(".portada mark[data-contar]"); if(mk)mk.classList.add("por-subrayar");
    cs.forEach(function(el,i){var fin=parseFloat(el.getAttribute("data-contar")),t0=null,dur=900,ret=250+i*180;
      el.textContent=fmt(0);
      setTimeout(function(){requestAnimationFrame(function paso(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);
        el.textContent=fmt(fin*e);if(p<1)requestAnimationFrame(paso);else{el.textContent=fmt(fin);if(el===mk)mk.classList.add("subrayar")}})},ret)});
  }
  var els=document.querySelectorAll("[data-revelar]");
  var pa=document.querySelector(".portada .acciones"),bm=document.querySelector(".barra-movil");
  if(pa&&bm&&("IntersectionObserver" in window)){new IntersectionObserver(function(es){bm.classList.toggle("oculta",es[0].isIntersecting)}).observe(pa)}
  if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("visible")});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})},{threshold:0.35});
  els.forEach(function(e){io.observe(e)});
});`;

// Vercel Web Analytics: sin cookies y sin datos personales. Carga el script de forma diferida.
const analitica = `window.va=window.va||function(){(window.vaq=window.vaq||[]).push(arguments)};if(/fiscalyx\\.com$/.test(location.hostname)){var s=document.createElement("script");s.defer=true;s.src="/_vercel/insights/script.js";document.head.appendChild(s)}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script id="efectos" dangerouslySetInnerHTML={{ __html: efectos }} />
        <script id="analitica" dangerouslySetInnerHTML={{ __html: analitica }} />
      </head>
      <body>
        <a className="saltar" href="#contenido">
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />
      </body>
    </html>
  );
}
