"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

export default function TwoEnginesSection() {
  return (
    <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            A Unified Approach
          </div>
          <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
            Two Engines, One Mission
          </TextScramble>
          <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            BlackMagickOps builds the platform. Digital Sourcery makes it intelligent. Together: production-ready AI infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2px" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="relative group overflow-hidden flex flex-col justify-between" style={{ height: "500px", backgroundColor: "var(--color-ds-card)", border: "1px solid var(--color-ds-card-border)", padding: "var(--fib-5)" }}>
            <div>
              <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "11px", color: "var(--color-ds-warm)" }}>Intelligence Layer</span>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-xl)", marginTop: "var(--fib-2)" }}>Digital Sourcery</h3>
            </div>
            <div className="refractive-card max-w-sm" style={{ padding: "var(--fib-4)" }}>
              <p className="text-white" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>Predictive observability, autonomous remediation, AI cost optimization, and LLM-driven infrastructure that learns and adapts.</p>
              <div className="flex flex-wrap" style={{ gap: "var(--fib-1)", marginTop: "var(--fib-3)" }}>
                {["AIOps", "Self-Healing", "Cost Controls", "MLOps", "Legacy Bridge"].map((tag) => (
                  <span key={tag} className="font-[family-name:var(--font-mono)] text-ds-text-dim" style={{ fontSize: "10px", border: "1px solid var(--color-ds-border-light)", padding: "2px 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="relative group overflow-hidden flex flex-col justify-between" style={{ height: "500px", backgroundColor: "var(--color-ds-card)", border: "1px solid var(--color-ds-card-border)", padding: "var(--fib-5)" }}>
            <div>
              <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "11px", color: "var(--color-ds-warm)" }}>Foundation Layer</span>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-xl)", marginTop: "var(--fib-2)" }}>BlackMagickOps</h3>
            </div>
            <div className="refractive-card max-w-sm" style={{ padding: "var(--fib-4)" }}>
              <p className="text-white" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>Hardened Kubernetes, internal developer platforms, infrastructure-as-code, and zero-trust platform engineering foundations.</p>
              <div className="flex flex-wrap" style={{ gap: "var(--fib-1)", marginTop: "var(--fib-3)" }}>
                {["Kubernetes", "IDP", "ArgoCD", "Crossplane", "FinOps"].map((tag) => (
                  <span key={tag} className="font-[family-name:var(--font-mono)] text-ds-text-dim" style={{ fontSize: "10px", border: "1px solid var(--color-ds-border-light)", padding: "2px 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
