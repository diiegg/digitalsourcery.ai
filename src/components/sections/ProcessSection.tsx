"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

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
    <section
      id="process"
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
            Process
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em] max-w-lg"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            How We Work
          </TextScramble>
          <p
            className="text-ds-text-secondary max-w-md"
            style={{
              fontSize: "var(--text-fib-base)",
              marginTop: "var(--fib-3)",
            }}
          >
            12 weeks from audit to autonomous operations.
            No value by week 4? Walk away.
          </p>
        </motion.div>

        {/* 4-column grid — fibonacci gap between cards */}
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
              className="themed-card"
              style={{
                backgroundColor: "var(--color-ds-black)",
                padding: "var(--fib-4) var(--fib-4)",
              }}
            >
              <div
                className="font-[family-name:var(--font-mono)]"
                style={{
                  fontSize: "var(--text-fib-xs)",
                  color: "var(--color-ds-phase-num)",
                  marginBottom: "var(--fib-3)",
                }}
              >
                {step.phase}
              </div>
              <h3
                className="font-[family-name:var(--font-display)] font-semibold"
                style={{
                  fontSize: "var(--text-fib-md)",
                  marginBottom: "var(--fib-1)",
                }}
              >
                {step.title}
              </h3>
              <div
                className="text-ds-text-dim font-[family-name:var(--font-mono)]"
                style={{
                  fontSize: "var(--text-fib-xs)",
                  marginBottom: "var(--fib-2)",
                }}
              >
                {step.duration}
              </div>
              <p
                className="text-ds-text-secondary leading-relaxed"
                style={{ fontSize: "var(--text-fib-sm)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
