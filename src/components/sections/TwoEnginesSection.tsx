"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

export default function TwoEnginesSection() {
  return (
    <section
      style={{
        paddingTop: "var(--fib-7)",
        paddingBottom: "var(--fib-7)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        {/* Header with line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end"
          style={{ gap: "var(--fib-3)", marginBottom: "var(--fib-6)" }}
        >
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4vw, var(--text-fib-xl))" }}
          >
            Two Engines, One Mission
          </TextScramble>
          <div className="hidden md:block h-px flex-grow mx-[var(--fib-4)]" style={{ backgroundColor: "var(--color-ds-border-light)", marginBottom: "var(--fib-2)" }} />
          <p
            className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim whitespace-nowrap"
            style={{ fontSize: "11px", marginBottom: "var(--fib-1)" }}
          >
            A Unified Approach
          </p>
        </motion.div>

        {/* Two tall cards */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2px" }}>
          {/* Digital Sourcery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden flex flex-col justify-between"
            style={{
              height: "500px",
              backgroundColor: "var(--color-ds-card)",
              border: "1px solid var(--color-ds-card-border)",
              padding: "var(--fib-5)",
            }}
          >
            {/* Top label */}
            <div>
              <span
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]"
                style={{ fontSize: "11px", color: "var(--color-ds-warm)" }}
              >
                Intelligence Layer
              </span>
              <h3
                className="font-[family-name:var(--font-display)] font-bold text-white"
                style={{ fontSize: "clamp(var(--text-fib-lg), 4vw, var(--text-fib-xl))", marginTop: "var(--fib-2)" }}
              >
                Digital Sourcery
              </h3>
            </div>

            {/* Bottom glass card */}
            <div className="prismatic-glass prismatic-edge max-w-sm" style={{ padding: "var(--fib-4)" }}>
              <p className="text-white" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
                Predictive observability, autonomous remediation,
                AI cost optimization, and LLM-driven infrastructure
                that learns and adapts.
              </p>
              <div className="flex flex-wrap" style={{ gap: "var(--fib-1)", marginTop: "var(--fib-3)" }}>
                {["AIOps", "Self-Healing", "Cost Controls", "MLOps", "Legacy Bridge"].map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-mono)] text-ds-text-dim"
                    style={{
                      fontSize: "10px",
                      border: "1px solid var(--color-ds-border-light)",
                      padding: "2px 8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BlackMagickOps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group overflow-hidden flex flex-col justify-between"
            style={{
              height: "500px",
              backgroundColor: "var(--color-ds-card)",
              border: "1px solid var(--color-ds-card-border)",
              padding: "var(--fib-5)",
            }}
          >
            <div>
              <span
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]"
                style={{ fontSize: "11px", color: "var(--color-ds-warm)" }}
              >
                Foundation Layer
              </span>
              <h3
                className="font-[family-name:var(--font-display)] font-bold text-white"
                style={{ fontSize: "clamp(var(--text-fib-lg), 4vw, var(--text-fib-xl))", marginTop: "var(--fib-2)" }}
              >
                BlackMagickOps
              </h3>
            </div>

            <div className="prismatic-glass prismatic-edge max-w-sm" style={{ padding: "var(--fib-4)" }}>
              <p className="text-white" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
                Hardened Kubernetes, internal developer platforms,
                infrastructure-as-code, and zero-trust platform
                engineering foundations.
              </p>
              <div className="flex flex-wrap" style={{ gap: "var(--fib-1)", marginTop: "var(--fib-3)" }}>
                {["Kubernetes", "IDP", "ArgoCD", "Crossplane", "FinOps"].map((tag) => (
                  <span
                    key={tag}
                    className="font-[family-name:var(--font-mono)] text-ds-text-dim"
                    style={{
                      fontSize: "10px",
                      border: "1px solid var(--color-ds-border-light)",
                      padding: "2px 8px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
