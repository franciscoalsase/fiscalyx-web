import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("cantabria");

export default function GestoriaCantabria() {
  return <PaginaComunidad slug="cantabria" />;
}
