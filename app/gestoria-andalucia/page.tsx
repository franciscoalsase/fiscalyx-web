import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("andalucia");

export default function GestoriaAndalucia() {
  return <PaginaComunidad slug="andalucia" />;
}
