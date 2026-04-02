"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { Search, Rocket, Scale, RefreshCw } from "lucide-react";

const steps = [
  { num: "01", label: "DISCOVER", icon: Search, detail: "Deep-dive technical audit of current debt, bottlenecks, and AI readiness gaps. Map your legacy integrations." },
  { num: "02", label: "PILOT", icon: Rocket, detail: "Proof-of-concept deployment on one high-impact AI workload. Production-grade code from day one." },
  { num: "03", label: "SCALE", icon: Scale, detail: "Expansion across your production footprint. Knowledge transfer, team upskilling, documentation." },
  { num: "04", label: "EVOLVE", icon: RefreshCw, detail: "Continuous improvement through feedback loops. Managed operations retainer. Your team owns everything." },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-carbon)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            How We Work
          </div>
          <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
            The Engagement Cycle
          </TextScramble>
          <p className="text-ds-text-secondary max-w-md" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            From initial discovery to self-evolving infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4" style={{ gap: "var(--fib-4)" }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === activeStep;

            return (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <div className="flex items-center justify-between" style={{ marginBottom: "var(--fib-3)" }}>
                  <div className="font-[family-name:var(--font-mono)] tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)" }}>
                    {step.num} / {step.label}
                  </div>
                  <Icon size={18} style={{ color: "var(--color-ds-crystalline)", opacity: 0.3 }} strokeWidth={1.5} />
                </div>
                <div className="relative" style={{ height: "2px", backgroundColor: "var(--color-ds-border-light)", marginBottom: "var(--fib-3)" }}>
                  {/* The square — prismatic glow when active */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "10px",
                      height: "10px",
                      backgroundColor: isActive ? "var(--color-ds-warm)" : "var(--color-ds-text-dim)",
                      boxShadow: isActive
                        ? "0 0 12px rgba(227, 204, 177, 0.6), 0 0 30px rgba(200, 208, 224, 0.3), 0 0 50px rgba(200, 208, 224, 0.15)"
                        : "none",
                      transition: "all 0.6s ease",
                    }}
                  />
                </div>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, paddingRight: "var(--fib-3)" }}>{step.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
