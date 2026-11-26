import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("extremadura");

export default function GestoriaExtremadura() {
  return <PaginaComunidad slug="extremadura" />;
}
