"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const outcomes = [
  {
    metric: "60%",
    label: "Faster incident response",
    description:
      "AI-driven anomaly detection catches issues before they cascade. MTTR drops from hours to minutes.",
  },
  {
    metric: "3 min",
    label: "Infrastructure provisioning",
    description:
      "Natural language requests become production-ready deployments with automatic guardrails.",
  },
  {
    metric: "40–60%",
    label: "Cloud cost reduction",
    description:
      "Predictive autoscaling and carbon-aware scheduling optimize spend without sacrificing uptime.",
  },
  {
    metric: "10x",
    label: "Deployment acceleration",
    description:
      "AI-augmented CI/CD with intelligent test selection and predictive quality gates.",
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
            Outcomes
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em] max-w-xl"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            Measurable Impact, Not Promises
          </TextScramble>
        </motion.div>

        {/* 2-column grid with golden ratio gap */}
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
              <div
                className="font-[family-name:var(--font-display)] font-bold"
                style={{
                  color: "var(--color-ds-metric)",
                  fontSize: "var(--text-fib-xl)",
                  marginBottom: "var(--fib-2)",
                }}
              >
                {item.metric}
              </div>
              <h3
                className="font-[family-name:var(--font-display)] font-semibold"
                style={{
                  fontSize: "var(--text-fib-base)",
                  marginBottom: "var(--fib-1)",
                }}
              >
                {item.label}
              </h3>
              <p
                className="text-ds-text-secondary leading-relaxed max-w-sm"
                style={{ fontSize: "var(--text-fib-sm)" }}
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
