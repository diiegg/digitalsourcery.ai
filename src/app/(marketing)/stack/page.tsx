import type { Metadata } from "next";
import StackContent from "./StackContent";

export const metadata: Metadata = {
  title: "Our Stack — Tested Tools & Reference Architecture | Digital Sourcery",
  description:
    "Every recommendation backed by real benchmarks. AI Observability, Model Serving, Cost Controls, Self-Healing, Legacy Integration — tested, measured, opinionated.",
};

export default function StackPage() {
  return <StackContent />;
}
