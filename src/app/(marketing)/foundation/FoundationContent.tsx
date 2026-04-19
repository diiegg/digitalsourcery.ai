"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { Shield } from "lucide-react";
import { StackedDiscs, WaveStructure, GeometricGrid, ConcentricRings } from "@/components/glyphs";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

const sealPoints = [
  "Hardened platform architecture",
  "Automated incident pre-emption",
  "Zero-trust security by default",
  "Infrastructure as code at every layer",
];

export default function FoundationContent() {
  return (
    <main className="relative">

      {/* === HERO === */}
      <section className="relative overflow-hidden" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200, 208, 224, 0.04) 0%, transparent 70%)", filter: "blur(80px)" }}
          aria-hidden="true"
        />
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end" style={{ gap: "var(--fib-5)" }}>
            <motion.div className="md:col-span-8" animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
              <div
                className="inline-flex items-center"
                style={{
                  gap: "var(--fib-2)",
                  padding: "var(--fib-1) var(--fib-3)",
                  marginBottom: "var(--fib-5)",
                  border: "1px solid var(--color-ds-warm-dim)",
                }}
              >
                <Shield size={14} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1.5} aria-hidden="true" />
                <span className="font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)" }}>
                  Powered by BlackMagickOps
                </span>
              </div>
              <h1
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.035em] text-white"
                style={{ fontSize: "clamp(var(--text-fib-xl), 5.5vw, var(--text-fib-2xl))", lineHeight: 0.98, marginBottom: "var(--fib-5)" }}
              >
                Platform engineering.
                <br />
                <span style={{ color: "var(--color-ds-headline-accent)" }}>Built to outlast us.</span>
              </h1>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.55, maxWidth: "65ch" }}>
                The foundation layer everything else runs on. Internal developer platforms, infrastructure as code, observability, FinOps.
              </p>
            </motion.div>

            <motion.div className="md:col-span-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
              <div style={{ borderTop: "1px solid var(--color-ds-border)", borderBottom: "1px solid var(--color-ds-border)", padding: "var(--fib-3) 0" }}>
                <div className="flex flex-col" style={{ gap: "var(--fib-2)" }}>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>
                    Engineering discipline
                  </span>
                  <span className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-sm)" }}>
                    Platform Engineering &amp; Automation
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === MODULES === */}
      <section style={{ paddingTop: "var(--fib-6)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}>
            <div className="md:col-span-7">
              <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>
                What&apos;s in the foundation
              </span>
              <h2 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.0 }}>
                Four modules. Boring on purpose.
              </h2>
            </div>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-2)" }}>

            {/* Module 01 — IDP — anchor card with refractive shimmer */}
            <motion.div variants={fadeUp} className="md:col-span-8 refractive-card flex flex-col justify-between relative overflow-hidden" style={{ padding: "var(--fib-5)", minHeight: "320px" }}>
              <div className="absolute" style={{ top: "var(--fib-4)", right: "var(--fib-4)", opacity: 0.4 }} aria-hidden="true">
                <StackedDiscs size={200} variant={6} ariaLabel="Nested platform shells" />
              </div>
              <div className="flex justify-between items-start relative z-10">
                <StackedDiscs size={56} variant={6} ariaLabel="Nested platform shells" />
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>Module 01</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-lg)", marginBottom: "var(--fib-3)", letterSpacing: "-0.01em" }}>
                  Internal Developer Platforms
                </h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, maxWidth: "55ch" }}>
                  Self-service infrastructure for your engineers. Backstage or Port, depending on whether the appetite is open-source or speed-to-value.
                </p>
              </div>
            </motion.div>

            {/* Module 02 — flat panel */}
            <motion.div variants={fadeUp} className="md:col-span-4 flex flex-col justify-between" style={{ padding: "var(--fib-4)", border: "1px solid var(--color-ds-border)" }}>
              <div className="flex items-start justify-between" style={{ marginBottom: "var(--fib-4)" }}>
                <WaveStructure size={64} variant={3} ariaLabel="Golden-path delivery packets" />
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>Module 02</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)", letterSpacing: "-0.01em" }}>
                  Platform Acceleration
                </h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                  Reusable golden paths for workloads your team ships weekly.
                </p>
              </div>
            </motion.div>

            {/* Module 03 — flat panel */}
            <motion.div variants={fadeUp} className="md:col-span-4 flex flex-col justify-between" style={{ padding: "var(--fib-4)", border: "1px solid var(--color-ds-border)" }}>
              <div className="flex items-start justify-between" style={{ marginBottom: "var(--fib-4)" }}>
                <GeometricGrid size={64} variant={8} ariaLabel="Declarative cross topology" />
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>Module 03</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)", letterSpacing: "-0.01em" }}>
                  Infrastructure as Code
                </h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                  OpenTofu modules with locked state. Reviewable, diffable, owned by your team.
                </p>
              </div>
            </motion.div>

            {/* Module 04 — observability + finops, two-column flat */}
            <motion.div variants={fadeUp} className="md:col-span-8 relative overflow-hidden" style={{ padding: "var(--fib-5)", border: "1px solid var(--color-ds-border)" }}>
              <div className="absolute" style={{ top: "var(--fib-4)", right: "var(--fib-4)", opacity: 0.35 }} aria-hidden="true">
                <ConcentricRings size={140} variant={4} ariaLabel="Bullseye observability" />
              </div>
              <div className="flex justify-between items-start relative z-10" style={{ marginBottom: "var(--fib-5)" }}>
                <ConcentricRings size={56} variant={4} ariaLabel="Bullseye observability" />
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>Module 04</span>
              </div>
              <div className="grid md:grid-cols-2 relative z-10" style={{ gap: "var(--fib-5)" }}>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)", letterSpacing: "-0.01em" }}>
                    Observability
                  </h3>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                    OpenTelemetry pipelines, Grafana dashboards, alert rules tuned per dependency.
                  </p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)", letterSpacing: "-0.01em" }}>
                    FinOps
                  </h3>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                    Cost attribution per workload. Right-sizing where waste is real, not theoretical.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === DISCIPLINE === */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-void)", borderTop: "1px solid var(--color-ds-border)", borderBottom: "1px solid var(--color-ds-border)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center" style={{ gap: "var(--fib-6)" }}>
            <motion.div className="md:col-span-5 md:col-start-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
              <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>
                Engineering practice
              </span>
              <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
                BlackMagickOps
              </TextScramble>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)", maxWidth: "55ch" }}>
                Digital Sorcery&apos;s foundation work runs on the BlackMagickOps engineering practice — platform engineering, automation, and observability. The bias is toward boring tools that hold under failure, owned by your team end-to-end.
              </p>
              <ul className="flex flex-col" style={{ gap: "var(--fib-2)", listStyle: "none", padding: 0 }}>
                {sealPoints.map((point) => (
                  <li key={point} className="flex items-baseline" style={{ gap: "var(--fib-2)", padding: "var(--fib-2) 0", borderBottom: "1px solid var(--color-ds-border)" }}>
                    <span aria-hidden="true" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-ds-warm)", letterSpacing: "0.1em" }}>+</span>
                    <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-text)" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="md:col-span-5" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease }}>
              <div className="relative w-full" style={{ aspectRatio: "1", maxWidth: "340px", margin: "0 auto" }}>
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <div className="absolute border rounded-full" style={{ width: "70%", height: "70%", borderColor: "rgba(227, 204, 177, 0.08)", animation: "spin 20s linear infinite" }} />
                  <div className="absolute border rounded-full" style={{ width: "92%", height: "92%", borderColor: "rgba(200, 208, 224, 0.04)", animation: "spin 30s linear infinite reverse" }} />
                </div>
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  <div
                    className="flex items-center justify-center"
                    style={{ width: "89px", height: "89px", border: "2px solid var(--color-ds-warm)", boxShadow: "0 0 40px rgba(227, 204, 177, 0.12)", marginBottom: "var(--fib-3)" }}
                    aria-hidden="true"
                  >
                    <Shield size={40} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1} />
                  </div>
                  <p className="font-[family-name:var(--font-display)] font-bold text-white uppercase tracking-[0.15em]" style={{ fontSize: "var(--text-fib-base)" }}>
                    BlackMagickOps
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section style={{ paddingTop: "var(--fib-6)", paddingBottom: "var(--fib-7)" }}>
        <div className="ds-container">
          <motion.div
            className="flex flex-col items-start"
            style={{ padding: "var(--fib-7) var(--fib-5)", border: "1px solid var(--color-ds-border)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <div
              className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]"
              style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}
            >
              Foundation engagement
            </div>

            <h2 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.1, marginBottom: "var(--fib-4)", maxWidth: "22ch" }}>
              Want a reading on your platform?
            </h2>

            <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-6)", maxWidth: "55ch" }}>
              Send us a sketch of what you run today. You&apos;ll get back what we&apos;d keep, what we&apos;d retire, and the rationale — in writing, in a week, no slides.
            </p>

            <div className="flex flex-col md:flex-row" style={{ gap: "var(--fib-3)" }}>
              <a
                href="/contact"
                className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn"
                style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}
              >
                <span>Start a Discovery</span>
              </a>
              <a
                href="/stack"
                className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200"
                style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)", border: "1px solid rgba(200, 208, 224, 0.1)", color: "var(--color-ds-text)" }}
              >
                See the reference stack
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
