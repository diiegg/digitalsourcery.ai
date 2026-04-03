"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden ambient-glow" style={{ paddingTop: "var(--fib-8)", paddingBottom: "var(--fib-8)" }}>
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="max-w-4xl">
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            Let&apos;s Talk
          </div>

          <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.1, marginBottom: "var(--fib-6)" }}>
            Ready to Build the Autonomous Future?
          </TextScramble>

          <div className="flex flex-col md:flex-row items-start" style={{ gap: "var(--fib-3)" }}>
            <a href="mailto:hello@digitalsourcery.ai" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}>
              <span>Start a Discovery Call</span>
            </a>
            <a href="/stack" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200 " style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)", border: "1px solid var(--color-ds-border-light)", color: "var(--color-ds-text)" }}>
              View Our Stack
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
