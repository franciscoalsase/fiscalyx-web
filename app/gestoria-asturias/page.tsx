import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("asturias");

export default function GestoriaAsturias() {
  return <PaginaComunidad slug="asturias" />;
}
