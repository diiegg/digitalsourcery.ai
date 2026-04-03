"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const WireframeOwl = dynamic(() => import("@/components/WireframeOwl"), { ssr: false });
const AsciiHero = dynamic(() => import("@/components/AsciiHero"), { ssr: false });
const ShaderLines = dynamic(() => import("@/components/ShaderLines"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center ambient-glow overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)] w-full" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[var(--phi-major)_var(--phi-minor)] items-center" style={{ gap: "var(--fib-5)", minHeight: "70vh" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <AsciiHero text="Digital Sorcery" />

            <h1 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-white" style={{ fontSize: "var(--text-fib-2xl)", lineHeight: 0.95, marginBottom: "var(--fib-5)" }}>
              Make AI Work
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>in Production</span>
            </h1>

            <p className="text-ds-text-secondary max-w-md" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
              Platform engineers who integrate AI with legacy systems, control runaway costs, and build autonomous operations that actually ship. No consultants. No vendor lock-in. Just production-ready software your team owns.
            </p>

            <div className="flex flex-col sm:flex-row items-start" style={{ gap: "var(--fib-2)" }}>
              <a href="mailto:hello@digitalsourcery.ai" className="group relative inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 ds-cta-prismatic" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) var(--fib-4)" }}>
                Start a Discovery Call
                <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">&rarr;</span>
              </a>
              <a href="#process" className="text-ds-text-secondary hover:text-white transition-colors font-[family-name:var(--font-mono)] uppercase tracking-[0.1em]" style={{ fontSize: "var(--text-fib-xs)", padding: "var(--fib-2) var(--fib-3)" }}>
                See How It Works
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8, delay: 0.3 }} className="relative overflow-hidden" style={{ aspectRatio: "1 / 1.618", maxHeight: "650px" }}>
            <ShaderLines />
            <WireframeOwl />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
