"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const outcomes = [
  {
    metric: "90",
    unit: "days",
    label: "POC to production",
    description:
      "From prototype to production in one quarter. Working software integrated with your systems, deployed to your infrastructure, monitored by your team.",
  },
  {
    metric: "40-60",
    unit: "%",
    label: "AI cost reduction",
    description:
      "Predictable budgets. Real-time cost tracking. ROI dashboards. Most clients save more than our fees in reduced infrastructure costs.",
  },
  {
    metric: "6",
    unit: "months",
    label: "Team self-sufficiency",
    description:
      "Full knowledge transfer. Production-grade documentation. No dependency on us. No proprietary frameworks. Your team is stronger than when we started.",
  },
  {
    metric: "70",
    unit: "%+",
    label: "MTTR reduction",
    description:
      "80%+ of common incidents auto-remediate. Fewer 3 AM pages. Engineering time back for building, not firefighting.",
  },
];

export default function OutcomesSection() {
  return (
    <section
      id="outcomes"
      style={{
        paddingTop: "var(--fib-7)",
        paddingBottom: "var(--fib-7)",
        borderTop: "1px solid var(--color-ds-border)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "var(--fib-6)" }}
        >
          <p
            className="font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase"
            style={{
              fontSize: "var(--text-fib-xs)",
              color: "var(--color-ds-section-label)",
              marginBottom: "var(--fib-3)",
            }}
          >
            What Changes
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em] max-w-xl"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            Measurable Outcomes, Not Vendor Promises
          </TextScramble>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "var(--fib-6) var(--fib-7)" }}
        >
          {outcomes.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="flex items-baseline" style={{ gap: "var(--fib-1)", marginBottom: "var(--fib-2)" }}>
                <span
                  className="font-[family-name:var(--font-display)] font-bold"
                  style={{ color: "var(--color-ds-metric)", fontSize: "var(--text-fib-xl)" }}
                >
                  {item.metric}
                </span>
                <span
                  className="font-[family-name:var(--font-mono)]"
                  style={{ color: "var(--color-ds-metric)", fontSize: "var(--text-fib-base)" }}
                >
                  {item.unit}
                </span>
              </div>
              <h3
                className="font-[family-name:var(--font-display)] font-semibold"
                style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-1)" }}
              >
                {item.label}
              </h3>
              <p
                className="text-ds-text-secondary leading-relaxed max-w-sm"
                style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
