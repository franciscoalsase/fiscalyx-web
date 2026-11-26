import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("aragon");

export default function GestoriaAragon() {
  return <PaginaComunidad slug="aragon" />;
}
