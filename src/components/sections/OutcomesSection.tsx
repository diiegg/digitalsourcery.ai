"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { Rocket, Percent, Zap } from "lucide-react";

export default function OutcomesSection() {
  return (
    <section id="outcomes" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            Measurable Impact
          </div>
          <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
            Engineered Outcomes
          </TextScramble>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2" style={{ gap: "var(--fib-3)", minHeight: "500px" }}>
          {/* Large card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="md:col-span-2 md:row-span-2 refractive-card flex flex-col justify-end relative overflow-hidden" style={{ padding: "var(--fib-5)" }}>
            <div className="absolute top-[var(--fib-4)] right-[var(--fib-4)]">
              <Rocket size={48} style={{ color: "var(--color-ds-crystalline)", opacity: 0.15 }} strokeWidth={1} />
            </div>
            <div style={{ marginBottom: "var(--fib-4)" }}>
              <div className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-2xl)" }}>90</div>
              <h3 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.15em]" style={{ fontSize: "var(--text-fib-md)", color: "var(--color-ds-warm)" }}>Days to Production</h3>
            </div>
            <p className="text-ds-text-secondary max-w-md" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>From prototype to production in one quarter. Working software integrated with your systems, deployed to your infrastructure, monitored by your team.</p>
          </motion.div>

          {/* Cost card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="refractive-card flex flex-col justify-center relative overflow-hidden" style={{ padding: "var(--fib-4)" }}>
            <div className="absolute top-[var(--fib-3)] right-[var(--fib-3)]">
              <Percent size={28} style={{ color: "var(--color-ds-crystalline)", opacity: 0.15 }} strokeWidth={1} />
            </div>
            <div className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-xl)" }}>40-60%</div>
            <h3 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.15em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", marginTop: "var(--fib-1)" }}>AI Cost Reduction</h3>
            <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.5, marginTop: "var(--fib-2)" }}>Semantic caching, model routing, and token budgets. Most clients save more than our fees.</p>
          </motion.div>

          {/* MTTR card — inverted */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col justify-center relative overflow-hidden" style={{ padding: "var(--fib-4)", backgroundColor: "var(--color-ds-warm)", color: "var(--color-ds-black)" }}>
            <div className="absolute top-[var(--fib-3)] right-[var(--fib-3)]">
              <Zap size={28} style={{ opacity: 0.15 }} strokeWidth={1} />
            </div>
            <div className="font-[family-name:var(--font-display)] font-bold" style={{ fontSize: "var(--text-fib-xl)" }}>70%+</div>
            <h3 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.15em] opacity-70" style={{ fontSize: "var(--text-fib-xs)", marginTop: "var(--fib-1)" }}>MTTR Reduction</h3>
            <p className="opacity-60" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.5, marginTop: "var(--fib-2)" }}>80%+ incidents auto-remediate. Fewer 3 AM pages. Engineering time back for building.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
