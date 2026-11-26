import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("la-rioja");

export default function GestoriaLaRioja() {
  return <PaginaComunidad slug="la-rioja" />;
}
