"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden ambient-glow"
      style={{
        paddingTop: "var(--fib-8)",
        paddingBottom: "var(--fib-8)",
      }}
    >
      <div className="mx-auto max-w-4xl px-[var(--fib-4)] lg:px-[var(--fib-5)] text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white"
            style={{
              fontSize: "clamp(var(--text-fib-lg), 5.5vw, var(--text-fib-2xl))",
              lineHeight: 1.05,
              marginBottom: "var(--fib-5)",
            }}
          >
            Ready to Build the Autonomous Future?
          </TextScramble>

          <div className="flex flex-col md:flex-row justify-center items-center" style={{ gap: "var(--fib-3)" }}>
            <a
              href="mailto:hello@digitalsourcery.ai"
              className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[1.03] transition-transform duration-200"
              style={{ fontSize: "var(--text-fib-base)", padding: "var(--fib-3) var(--fib-5)" }}
            >
              Start a Discovery Call
            </a>
            <a
              href="/stack"
              className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors"
              style={{
                fontSize: "var(--text-fib-base)",
                padding: "var(--fib-3) var(--fib-5)",
                border: "1px solid var(--color-ds-border-light)",
                color: "var(--color-ds-text)",
              }}
            >
              View Our Stack
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
