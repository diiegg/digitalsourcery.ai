"use client";

import { motion } from "framer-motion";

const steps = [
  {
    phase: "01",
    title: "Assess",
    duration: "Weeks 1–2",
    description:
      "Deep audit of your infrastructure, observability gaps, and AI readiness. We map the landscape before designing the solution.",
  },
  {
    phase: "02",
    title: "Architect",
    duration: "Weeks 3–5",
    description:
      "Design the intelligence layer: AIOps pipelines, autonomous platform topology, and ML integration points for your stack.",
  },
  {
    phase: "03",
    title: "Implement",
    duration: "Weeks 6–10",
    description:
      "Build and deploy iteratively. Each sprint delivers working autonomous capabilities — self-healing, predictive scaling, intelligent routing.",
  },
  {
    phase: "04",
    title: "Operationalize",
    duration: "Weeks 11+",
    description:
      "Continuous tuning, model retraining, and knowledge transfer. Your team operates independently with systems that keep improving.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 lg:py-44" style={{ borderTop: "1px solid var(--color-ds-border)" }}>
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
            Process
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] max-w-lg">
            How We Work
          </h2>
          <p className="text-ds-text-secondary text-base mt-5 max-w-md">
            12 weeks from audit to autonomous operations.
            No value by week 4? Walk away.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px]"
          style={{ backgroundColor: "var(--color-ds-card-border)" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="themed-card p-8 lg:p-10"
              style={{ backgroundColor: "var(--color-ds-black)" }}
            >
              <div
                className="text-xs font-[family-name:var(--font-mono)] mb-6"
                style={{ color: "var(--color-ds-phase-num)" }}
              >
                {step.phase}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-1">
                {step.title}
              </h3>
              <div className="text-ds-text-dim text-xs font-[family-name:var(--font-mono)] mb-4">
                {step.duration}
              </div>
              <p className="text-ds-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
