import type { Metadata } from "next";
import { PaginaComunidad, tituloComunidad } from "@/components/PaginaComunidad";

export const metadata: Metadata = tituloComunidad("cataluna");

export default function GestoriaCataluna() {
  return <PaginaComunidad slug="cataluna" />;
}
