"use client";

import { motion } from "framer-motion";

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
    <section id="outcomes" className="py-32 lg:py-44" style={{ borderTop: "1px solid var(--color-ds-border)" }}>
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p
            className="text-xs font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase mb-5"
            style={{ color: "var(--color-ds-section-label)" }}
          >
            Outcomes
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] max-w-xl">
            Measurable Impact,
            <br />
            Not Promises
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="font-[family-name:var(--font-display)] text-5xl lg:text-6xl font-bold mb-3"
                style={{ color: "var(--color-ds-metric)" }}
              >
                {item.metric}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2">
                {item.label}
              </h3>
              <p className="text-ds-text-secondary text-sm leading-relaxed max-w-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
