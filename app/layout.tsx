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
  title: {
    default: "Gestoría online para autónomos y sociedades | Fiscalyx",
    template: "%s | Fiscalyx",
  },
  description:
    "Gestoría online para autónomos y sociedades de toda España. Economistas colegiados, cuota fija, un asesor asignado y sin permanencia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gestoría online para autónomos y sociedades | Fiscalyx",
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
  var els=document.querySelectorAll("[data-revelar]");
  if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("visible")});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}})},{threshold:0.35});
  els.forEach(function(e){io.observe(e)});
});`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script id="efectos" dangerouslySetInnerHTML={{ __html: efectos }} />
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
