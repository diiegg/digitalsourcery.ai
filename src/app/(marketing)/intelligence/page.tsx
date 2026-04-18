import type { Metadata } from "next";
import IntelligenceContent from "./IntelligenceContent";

export const metadata: Metadata = {
  title: "Intelligence Layer | Digital Sorcery",
  description:
    "How we add machine intelligence to existing infrastructure: telemetry that earns its alerts back, self-healing for the failure modes worth automating, and AI cost control measured per outcome.",
};

export default function IntelligencePage() {
  return <IntelligenceContent />;
}
