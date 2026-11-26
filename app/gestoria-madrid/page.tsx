import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("madrid");

export default function GestoriaMadrid() {
  return <PaginaComunidad slug="madrid" />;
}
