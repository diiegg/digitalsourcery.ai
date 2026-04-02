"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const problems = [
  {
    icon: "Your AI prototype works in a notebook.",
    punchline: "Production is a different planet.",
    detail:
      "Integration with legacy systems breaks everything. Your 15-year-old ERP wasn't built for LLMs. Every deployment is duct tape and prayer.",
  },
  {
    icon: "Your GPU bill tripled last quarter.",
    punchline: "Nobody can explain why.",
    detail:
      "Token costs are unpredictable. Agentic workflows burn 5-30x more than chatbots. Your FinOps tools don't track AI spend. The CFO wants answers.",
  },
  {
    icon: "You hired data scientists.",
    punchline: "They can't deploy anything.",
    detail:
      "Models with 94% accuracy in the lab drift to 67% in production. Nobody monitors. Nobody notices until customers complain.",
  },
];

export default function ProblemSection() {
  return (
    <section
      style={{
        paddingTop: "var(--fib-7)",
        paddingBottom: "var(--fib-7)",
        backgroundColor: "var(--color-ds-card)",
        borderTop: "1px solid var(--color-ds-border)",
        borderBottom: "1px solid var(--color-ds-border)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "var(--fib-6)" }}>
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]"
              style={{
                fontSize: "var(--text-fib-xs)",
                color: "var(--color-ds-warm)",
                border: "1px solid var(--color-ds-border-light)",
                padding: "var(--fib-1) var(--fib-2)",
                marginBottom: "var(--fib-4)",
              }}
            >
              The Systemic Crisis
            </div>
            <TextScramble
              as="h2"
              className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))", marginBottom: "var(--fib-3)" }}
            >
              AI Adoption Is Hard. Most Companies Are Stuck.
            </TextScramble>
            <p
              className="text-ds-text-secondary max-w-md"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}
            >
              Legacy cloud operations are brittle. Manual toil scales linearly
              with infrastructure, while AI experiments die between notebook and production.
              Your engineering talent is wasted on maintenance.
            </p>
          </motion.div>

          {/* Right — accent-border cards */}
          <div className="flex flex-col" style={{ gap: "var(--fib-3)" }}>
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="prismatic-glass accent-border-card"
                style={{ padding: "var(--fib-4)" }}
              >
                <h3
                  className="font-[family-name:var(--font-display)] font-bold text-white"
                  style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-1)" }}
                >
                  {p.icon}
                </h3>
                <p
                  className="font-[family-name:var(--font-display)] font-semibold"
                  style={{
                    fontSize: "var(--text-fib-base)",
                    color: "var(--color-ds-warm)",
                    marginBottom: "var(--fib-2)",
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
      </div>
    </section>
  );
}
