"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  // Removed TextScramble — restricted to one anchor per page (StackSection on home)
  return (
    <section id="contact" className="relative overflow-hidden ambient-glow" style={{ paddingTop: "var(--fib-8)", paddingBottom: "var(--fib-8)" }}>
      {/* Distilled background — one warm glow + one quiet arc + one anchor circle */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="cta-glow" cx="32%" cy="55%" r="55%">
            <stop offset="0%" stopColor="#E3CCB1" stopOpacity="0.07" />
            <stop offset="55%" stopColor="#c8d0e0" stopOpacity="0.02" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1440" height="600" fill="url(#cta-glow)" />
        <path d="M0 320 Q360 260 720 320 T1440 320" stroke="#c8d0e0" strokeWidth="0.5" opacity="0.06" fill="none" />
        <circle cx="460" cy="320" r="130" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.05" />
      </svg>

      <div className="ds-container relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="max-w-4xl">
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            Next Step
          </div>

          <h2 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", lineHeight: 1.1, marginBottom: "var(--fib-4)" }}>
            Modern infrastructure. <span style={{ color: "var(--color-ds-headline-accent)" }}>Owned by your team.</span>
          </h2>

          <p className="text-ds-text-secondary max-w-xl" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-6)" }}>
            Designed, built, and handed off. Engagements start with a Discovery — one to two weeks, scoped, written, no slides.
          </p>

          <div className="flex flex-col md:flex-row items-start" style={{ gap: "var(--fib-3)" }}>
            <a href="/contact" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}>
              <span>Talk to a senior engineer</span>
            </a>
            <a href="/stack" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200 " style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)", border: "1px solid var(--color-ds-border-light)", color: "var(--color-ds-text)" }}>
              See the reference stack
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
