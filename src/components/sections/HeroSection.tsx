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
          <motion.div animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            {/* Hero headline — calibrated scale (within Vercel/Anthropic editorial range, not Klim type-foundry range) */}
            <h1
              className="font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-white"
              style={{
                fontSize: "clamp(var(--text-fib-xl), 7vw, 128px)",
                lineHeight: 0.95,
                marginBottom: "var(--fib-5)",
              }}
            >
              Infrastructure
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>That Thinks</span>
            </h1>

            <p className="text-ds-text-secondary max-w-xl" style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.5, marginBottom: "var(--fib-5)" }}>
              The intelligence layer for production systems. Predictive observability, autonomous remediation, cost control.
            </p>

            <div className="flex flex-col sm:flex-row items-start" style={{ gap: "var(--fib-2)", marginBottom: "var(--fib-5)" }}>
              <a href="/contact" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) var(--fib-4)" }}>
                <span>Talk to a senior engineer</span>
              </a>
              <a href="/stack" className="text-ds-text-secondary hover:text-white transition-colors font-[family-name:var(--font-mono)] uppercase tracking-[0.1em]" style={{ fontSize: "var(--text-fib-xs)", padding: "var(--fib-2) var(--fib-3)" }}>
                See the reference stack
              </a>
            </div>

            {/* Credibility metadata strip — published scarcity / team / day rate up front. Confident transparency. */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap"
              style={{
                gap: "var(--fib-3) var(--fib-5)",
                paddingTop: "var(--fib-4)",
                borderTop: "1px solid var(--color-ds-border)",
                maxWidth: "560px",
              }}
            >
              <div>
                <dt className="font-[family-name:var(--font-mono)] uppercase tracking-[0.18em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)" }}>
                  Currently booking
                </dt>
                <dd className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-sm)", marginTop: "4px" }}>
                  From June 2026
                </dd>
              </div>
              <div>
                <dt className="font-[family-name:var(--font-mono)] uppercase tracking-[0.18em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>
                  Team
                </dt>
                <dd className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-sm)", marginTop: "4px" }}>
                  6 senior engineers
                </dd>
              </div>
              <div>
                <dt className="font-[family-name:var(--font-mono)] uppercase tracking-[0.18em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>
                  Principal day rate
                </dt>
                <dd className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-sm)", marginTop: "4px" }}>
                  €1,800
                </dd>
              </div>
            </motion.dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.3 }}
            className="relative overflow-hidden"
            style={{
              aspectRatio: "1 / 1.618",
              maxHeight: "650px",
              opacity: prefersReducedMotion ? 1 : 0.55,
              filter: prefersReducedMotion ? "none" : "saturate(0.7)",
            }}
            aria-hidden="true"
          >
            {!prefersReducedMotion && (
              <>
                <ShaderLines />
                <WireframeOwl />
              </>
            )}
            {prefersReducedMotion && (
              <div
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
