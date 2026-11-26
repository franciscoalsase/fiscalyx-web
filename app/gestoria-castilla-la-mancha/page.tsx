import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("castilla-la-mancha");

export default function GestoriaCastillaLaMancha() {
  return <PaginaComunidad slug="castilla-la-mancha" />;
}
