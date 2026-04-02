"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const steps = [
  { num: "01", label: "DISCOVER", detail: "Deep-dive technical audit of current debt, bottlenecks, and AI readiness gaps. Map your legacy integrations." },
  { num: "02", label: "PILOT", detail: "Proof-of-concept deployment on one high-impact AI workload. Production-grade code from day one." },
  { num: "03", label: "SCALE", detail: "Expansion across your production footprint. Knowledge transfer, team upskilling, documentation." },
  { num: "04", label: "EVOLVE", detail: "Continuous improvement through feedback loops. Managed operations retainer. Your team owns everything." },
];

export default function ProcessSection() {
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
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
              <div className="font-[family-name:var(--font-mono)] tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>
                {step.num} / {step.label}
              </div>
              <div className="relative" style={{ height: "2px", backgroundColor: "var(--color-ds-border-light)", marginBottom: "var(--fib-3)" }}>
                <div className={i === 0 ? "step-dot" : "step-dot-dim"} style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }} />
              </div>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, paddingRight: "var(--fib-3)" }}>{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
