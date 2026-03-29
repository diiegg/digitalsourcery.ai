"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const WireframeOwl = dynamic(
  () => import("@/components/WireframeOwl"),
  { ssr: false }
);

const AsciiHero = dynamic(
  () => import("@/components/AsciiHero"),
  { ssr: false }
);

const ShaderLines = dynamic(
  () => import("@/components/ShaderLines"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "var(--fib-6)", paddingBottom: "var(--fib-7)" }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)] w-full">
        {/* Golden ratio grid: 38.2% / 61.8% */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[var(--phi-major)_var(--phi-minor)] items-center min-h-[80vh]"
          style={{ gap: "var(--fib-5)" }}
        >
          {/* Left — Text (major portion: 61.8%) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <AsciiHero text="Digital Sourcery" />

            <h1
              className="font-[family-name:var(--font-display)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
              style={{
                fontSize: "clamp(var(--text-fib-lg), 7vw, var(--text-fib-2xl))",
                marginBottom: "var(--fib-4)",
              }}
            >
              Infrastructure
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>
                That Thinks
              </span>
            </h1>

            <p
              className="text-ds-text-secondary leading-relaxed max-w-md"
              style={{
                fontSize: "var(--text-fib-base)",
                marginBottom: "var(--fib-5)",
              }}
            >
              AI-native platform engineering, intelligent observability,
              and autonomous infrastructure for teams building at scale.
            </p>

            <a
              href="#contact"
              className="ds-cta inline-block"
              style={{
                fontSize: "var(--text-fib-sm)",
                padding: "var(--fib-2) var(--fib-3)",
              }}
            >
              Get Started
            </a>
          </motion.div>

          {/* Right — Owl with shader (minor portion: 38.2%) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl"
            style={{
              /* Golden rectangle: height = width × φ */
              aspectRatio: "1 / 1.618",
              maxHeight: "650px",
            }}
          >
            <ShaderLines />
            <WireframeOwl />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
