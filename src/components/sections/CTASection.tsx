"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

export default function CTASection() {
  return (
    <section
      id="contact"
      style={{
        /* Cathedral nave rhythm: largest section gets fib-8 padding */
        paddingTop: "var(--fib-8)",
        paddingBottom: "var(--fib-8)",
        borderTop: "1px solid var(--color-ds-border)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          /* Content width = 61.8% of container */
          style={{ maxWidth: "var(--phi-major)" }}
        >
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em]"
            style={{
              fontSize: "clamp(var(--text-fib-lg), 5.5vw, var(--text-fib-2xl))",
              marginBottom: "var(--fib-4)",
            }}
          >
            Build the intelligence layer for your infrastructure
          </TextScramble>

          <p
            className="text-ds-text-secondary max-w-lg"
            style={{
              fontSize: "var(--text-fib-base)",
              lineHeight: 1.618, /* golden ratio line-height */
              marginBottom: "var(--fib-5)",
            }}
          >
            Free assessment. No commitment.
            If we can&apos;t show you the path to value, we&apos;ll tell you.
          </p>

          <div
            className="flex flex-col sm:flex-row items-start"
            style={{ gap: "var(--fib-3)" }}
          >
            <a
              href="mailto:hello@digitalsourcery.ai"
              className="ds-cta inline-block"
              style={{
                fontSize: "var(--text-fib-sm)",
                padding: "var(--fib-2) var(--fib-4)",
              }}
            >
              Book a Free Assessment
            </a>
            <span
              className="text-ds-text-dim self-center"
              style={{ fontSize: "var(--text-fib-sm)" }}
            >
              hello@digitalsourcery.ai
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
