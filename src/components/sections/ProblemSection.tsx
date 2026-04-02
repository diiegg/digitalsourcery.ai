"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const problems = [
  {
    hook: "Your AI prototype works in a notebook.",
    punchline: "Production is a different planet.",
    detail:
      "Integration with legacy systems breaks everything. Your 15-year-old ERP wasn't built for LLMs. Every deployment is duct tape and prayer.",
  },
  {
    hook: "Your GPU bill tripled last quarter.",
    punchline: "Nobody can explain why.",
    detail:
      "Token costs are unpredictable. Agentic workflows burn 5-30x more than chatbots. Your FinOps tools don't track AI spend. The CFO wants answers.",
  },
  {
    hook: "You hired data scientists.",
    punchline: "They can't deploy anything.",
    detail:
      "Models with 94% accuracy in the lab drift to 67% in production. Nobody monitors. Nobody notices until customers complain. The ops team blames the ML team. The ML team blames the ops team.",
  },
];

export default function ProblemSection() {
  return (
    <section
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
            Sound Familiar?
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em] max-w-2xl"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            AI Adoption Is Hard. Most Companies Are Stuck.
          </TextScramble>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "var(--fib-3)" }}>
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="themed-card rounded-xl"
              style={{
                backgroundColor: "var(--color-ds-card)",
                border: "1px solid var(--color-ds-card-border)",
                padding: "var(--fib-4)",
              }}
            >
              <p
                className="font-[family-name:var(--font-display)] font-semibold text-white"
                style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-1)" }}
              >
                {p.hook}
              </p>
              <p
                className="font-[family-name:var(--font-display)] font-bold"
                style={{
                  fontSize: "var(--text-fib-md)",
                  color: "var(--color-ds-metric)",
                  marginBottom: "var(--fib-3)",
                }}
              >
                {p.punchline}
              </p>
              <p
                className="text-ds-text-secondary"
                style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
              >
                {p.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
