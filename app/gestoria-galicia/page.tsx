import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("galicia");

export default function GestoriaGalicia() {
  return <PaginaComunidad slug="galicia" />;
}
