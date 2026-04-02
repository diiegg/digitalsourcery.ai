"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const steps = [
  {
    phase: "01",
    title: "Discover",
    duration: "Week 1-2",
    description:
      "Understand your systems, constraints, and goals. Map legacy integrations. Identify high-impact, low-cost wins. Define measurable success metrics. No slide decks — technical deep dives with your team.",
  },
  {
    phase: "02",
    title: "Pilot",
    duration: "Week 3-12",
    description:
      "Build and deploy one high-impact use case. Production-grade code from day one. Integrate with existing systems. Implement cost controls. Validate ROI. Knowledge transfer starts here — pair programming, code reviews, documentation.",
  },
  {
    phase: "03",
    title: "Scale",
    duration: "Month 4-6",
    description:
      "Expand to additional use cases. Automate what was manual. Optimize costs further. Train your team to own operations. By end of month 6, you're self-sufficient. We're available for support, but you don't need us.",
  },
  {
    phase: "04",
    title: "Evolve",
    duration: "Ongoing",
    description:
      "Continuous improvement as your AI maturity grows. New use cases, performance tuning, advanced automation. Managed operations retainer for teams that want ongoing support. You decide when you need us.",
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
            How We Work
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em] max-w-lg"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            Start Small. Prove Value. Scale Fast.
          </TextScramble>
          <p
            className="text-ds-text-secondary max-w-md"
            style={{
              fontSize: "var(--text-fib-base)",
              lineHeight: 1.618,
              marginTop: "var(--fib-3)",
            }}
          >
            One high-impact use case. 90-day pilot. Measurable outcomes.
            If it works, you&apos;ve got a template for everything else.
            If it doesn&apos;t, you&apos;re out less than the cost of one failed experiment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--fib-3)" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="themed-card rounded-xl"
              style={{
                backgroundColor: "var(--color-ds-card)",
                border: "1px solid var(--color-ds-card-border)",
                padding: "var(--fib-4)",
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
                style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-1)" }}
              >
                {step.title}
              </h3>
              <div
                className="text-ds-text-dim font-[family-name:var(--font-mono)]"
                style={{ fontSize: "var(--text-fib-xs)", marginBottom: "var(--fib-2)" }}
              >
                {step.duration}
              </div>
              <p
                className="text-ds-text-secondary leading-relaxed"
                style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
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
