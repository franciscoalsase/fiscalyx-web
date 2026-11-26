import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("baleares");

export default function GestoriaBaleares() {
  return <PaginaComunidad slug="baleares" />;
}
