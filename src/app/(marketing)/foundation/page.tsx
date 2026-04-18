import type { Metadata } from "next";
import FoundationContent from "./FoundationContent";

export const metadata: Metadata = {
  title: "Platform Foundations | Digital Sorcery",
  description:
    "Internal developer platforms, infrastructure automation, observability, and FinOps — the foundation layer everything else runs on. Built on the BlackMagickOps engineering discipline.",
};

export default function FoundationPage() {
  return <FoundationContent />;
}
