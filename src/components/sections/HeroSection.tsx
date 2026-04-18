"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const WireframeOwl = dynamic(() => import("@/components/WireframeOwl"), { ssr: false });
const ShaderLines = dynamic(() => import("@/components/ShaderLines"), { ssr: false });

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="relative min-h-[100dvh] flex items-center ambient-glow overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)] w-full" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[var(--phi-major)_var(--phi-minor)] items-center" style={{ gap: "var(--fib-5)", minHeight: "70vh" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <h1 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-white" style={{ fontSize: "var(--text-fib-2xl)", lineHeight: 0.95, marginBottom: "var(--fib-5)" }}>
              Infrastructure
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>That Thinks</span>
            </h1>

            <p className="text-ds-text-secondary max-w-md" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
              We design, build, and implement AI-powered infrastructure for your team. System architecture, automation, and operational improvements — engineered for production, owned by you.
            </p>

            <div className="flex flex-col sm:flex-row items-start" style={{ gap: "var(--fib-2)" }}>
              <a href="mailto:hello@digitalsourcery.ai" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) var(--fib-4)" }}>
                <span>Start a Discovery Call</span>
              </a>
              <a href="#process" className="text-ds-text-secondary hover:text-white transition-colors font-[family-name:var(--font-mono)] uppercase tracking-[0.1em]" style={{ fontSize: "var(--text-fib-xs)", padding: "var(--fib-2) var(--fib-3)" }}>
                See How It Works
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8, delay: 0.3 }} className="relative overflow-hidden" style={{ aspectRatio: "1 / 1.618", maxHeight: "650px" }}>
            {!prefersReducedMotion && (
              <>
                <ShaderLines />
                <WireframeOwl />
              </>
            )}
            {prefersReducedMotion && (
              <div
                aria-hidden="true"
                className="w-full h-full"
                style={{ background: "radial-gradient(circle at 50% 45%, rgba(200,208,224,0.12) 0%, rgba(227,204,177,0.04) 35%, transparent 70%)" }}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
