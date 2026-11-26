import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("castilla-y-leon");

export default function GestoriaCastillaYLeon() {
  return <PaginaComunidad slug="castilla-y-leon" />;
}
