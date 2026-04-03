import type { Metadata } from "next";
import FoundationContent from "./FoundationContent";

export const metadata: Metadata = {
  title: "Platform Foundations — Powered by BlackMagickOps | Digital Sourcery",
  description:
    "Internal Developer Platforms, Infrastructure Automation, Platform Acceleration, and Observability. The foundation layer that everything runs on.",
};

export default function FoundationPage() {
  return <FoundationContent />;
}
