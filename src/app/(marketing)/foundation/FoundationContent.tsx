"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { LayoutDashboard, Zap, Code2, BarChart3, CheckCircle2, Shield } from "lucide-react";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };

const specs = [
  { label: "Provisioning Speed", value: "0.04s" },
  { label: "Service Discovery", value: "Instant", accent: true },
  { label: "State Management", value: "Atomic" },
  { label: "Compliance Drift", value: "Zero" },
];

const sealPoints = [
  "Hardened Platform Architecture",
  "Automated Incident Pre-emption",
  "Zero-Trust Security by Default",
  "Infrastructure-as-Code at Every Layer",
];

export default function FoundationContent() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(200, 208, 224, 0.04) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)] w-full">
          <div className="flex flex-col md:flex-row items-end" style={{ gap: "var(--fib-6)" }}>
            <motion.div className="w-full md:w-2/3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
              <div className="inline-flex items-center refractive-card" style={{ gap: "var(--fib-2)", padding: "var(--fib-1) var(--fib-3)", marginBottom: "var(--fib-5)" }}>
                <Shield size={14} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1.5} />
                <span className="font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)" }}>Powered by BlackMagickOps</span>
              </div>
              <h1 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-white" style={{ fontSize: "var(--text-fib-2xl)", lineHeight: 0.95, marginBottom: "var(--fib-5)" }}>
                CORE INFRASTRUCTURE
                <br />
                <span style={{ color: "var(--color-ds-headline-accent)" }}>ENGINEERING.</span>
              </h1>
              <p className="text-ds-text-secondary max-w-xl" style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.618 }}>
                Forging the obsidian foundation for autonomous systems. We engineer resilient, low-level architecture that accelerates innovation without technical debt.
              </p>
            </motion.div>

            <motion.div className="w-full md:w-1/3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
              <div style={{ borderTop: "1px solid rgba(200, 208, 224, 0.08)", borderBottom: "1px solid rgba(200, 208, 224, 0.08)", padding: "var(--fib-3) 0" }}>
                <div className="flex justify-between items-center">
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>System Status</span>
                  <span className="flex items-center font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)", gap: "var(--fib-1)" }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-ds-warm)" }} />
                    Operational
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section style={{ paddingTop: "var(--fib-6)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-2)" }}>

            {/* IDP — 8 col */}
            <motion.div variants={fadeUp} className="md:col-span-8 refractive-card flex flex-col justify-between relative overflow-hidden group" style={{ padding: "var(--fib-5)", minHeight: "400px" }}>
              <div className="absolute top-[var(--fib-4)] right-[var(--fib-4)]">
                <LayoutDashboard size={120} style={{ color: "var(--color-ds-crystalline)", opacity: 0.05 }} strokeWidth={0.5} className="group-hover:opacity-[0.1] transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div className="flex items-center justify-center" style={{ width: "55px", height: "55px", border: "1px solid rgba(200, 208, 224, 0.1)" }}>
                  <LayoutDashboard size={24} style={{ color: "var(--color-ds-crystalline)" }} strokeWidth={1} />
                </div>
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>Module 01</span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-lg)", marginBottom: "var(--fib-3)" }}>Internal Developer Platforms</h3>
                <p className="text-ds-text-secondary max-w-md" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>Empower engineering teams with self-service infrastructure. We build unified portals that abstract cloud complexity into developer-centric workflows.</p>
              </div>
            </motion.div>

            {/* Platform Acceleration — 4 col */}
            <motion.div variants={fadeUp} className="md:col-span-4 refractive-card accent-border-card flex flex-col justify-between group" style={{ padding: "var(--fib-4)" }}>
              <div className="flex items-center justify-center" style={{ width: "44px", height: "44px", border: "1px solid rgba(200, 208, 224, 0.1)", marginBottom: "var(--fib-5)" }}>
                <Zap size={20} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>Platform Acceleration</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>Rapid deployment cycles powered by specialized engineering sprints and automated delivery pipelines.</p>
              </div>
            </motion.div>

            {/* Infrastructure Automation — 4 col */}
            <motion.div variants={fadeUp} className="md:col-span-4 refractive-card accent-border-card flex flex-col justify-between group" style={{ padding: "var(--fib-4)" }}>
              <div className="flex items-center justify-center" style={{ width: "44px", height: "44px", border: "1px solid rgba(200, 208, 224, 0.1)", marginBottom: "var(--fib-5)" }}>
                <Code2 size={20} style={{ color: "var(--color-ds-crystalline)" }} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>Infrastructure Automation</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>Terraform and OpenTofu blueprints designed for scale, security, and immutable state management.</p>
              </div>
            </motion.div>

            {/* Observability & FinOps — 8 col */}
            <motion.div variants={fadeUp} className="md:col-span-8 refractive-card flex flex-col justify-between relative overflow-hidden group" style={{ padding: "var(--fib-5)" }}>
              <div className="absolute top-[var(--fib-4)] right-[var(--fib-4)]">
                <BarChart3 size={80} style={{ color: "var(--color-ds-crystalline)", opacity: 0.05 }} strokeWidth={0.5} className="group-hover:opacity-[0.1] transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start" style={{ marginBottom: "var(--fib-5)" }}>
                <div className="flex items-center justify-center" style={{ width: "55px", height: "55px", border: "1px solid rgba(200, 208, 224, 0.1)" }}>
                  <BarChart3 size={24} style={{ color: "var(--color-ds-crystalline)" }} strokeWidth={1} />
                </div>
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>Module 04</span>
              </div>
              <div className="grid md:grid-cols-2" style={{ gap: "var(--fib-5)" }}>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>Observability</h3>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>Go beyond logs. Full-stack telemetry pipelines that provide real-time insights into system health and user behavior.</p>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>FinOps</h3>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>Algorithmic cost optimization. Eliminate waste and align cloud spend directly with business value generation.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BlackMagickOps Seal */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-void)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <div className="flex flex-col md:flex-row items-center" style={{ gap: "var(--fib-6)" }}>
            {/* Left — decorative */}
            <motion.div className="w-full md:w-1/2 flex justify-center" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
              <div className="relative refractive-card flex items-center justify-center" style={{ width: "340px", height: "340px" }}>
                {/* Rotating rings */}
                <div className="absolute border rounded-full" style={{ width: "200px", height: "200px", borderColor: "rgba(227, 204, 177, 0.08)", animation: "spin 20s linear infinite" }} />
                <div className="absolute border rounded-full" style={{ width: "260px", height: "260px", borderColor: "rgba(200, 208, 224, 0.04)", animation: "spin 30s linear infinite reverse" }} />
                {/* Center mark */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center justify-center" style={{ width: "89px", height: "89px", border: "2px solid var(--color-ds-warm)", boxShadow: "0 0 40px rgba(227, 204, 177, 0.12)", marginBottom: "var(--fib-3)" }}>
                    <Shield size={40} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1} />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white uppercase tracking-[0.15em]" style={{ fontSize: "var(--text-fib-base)" }}>BlackMagickOps</h3>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginTop: "var(--fib-1)" }}>Production-Grade Reliability</span>
                </div>
              </div>
            </motion.div>

            {/* Right — description */}
            <motion.div className="w-full md:w-1/2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
              <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
                The BlackMagickOps Seal
              </TextScramble>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
                Digital Sourcery&apos;s Foundation services are powered by the BlackMagickOps engineering discipline. Platform engineering, automation, and observability built for precision and reliability.
              </p>
              <ul className="flex flex-col" style={{ gap: "var(--fib-3)" }}>
                {sealPoints.map((point) => (
                  <li key={point} className="flex items-center" style={{ gap: "var(--fib-2)" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1.5} />
                    <span className="font-[family-name:var(--font-display)] uppercase tracking-[0.1em]" style={{ fontSize: "var(--text-fib-xs)" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specs Row */}
      <section style={{ paddingTop: "var(--fib-6)", paddingBottom: "var(--fib-6)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <div className="flex flex-col md:flex-row items-center" style={{ gap: "var(--fib-5)" }}>
            <div className="shrink-0">
              <h4 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)" }}>Technical
                <br />Resonance</h4>
            </div>
            <div className="flex-grow flex flex-wrap" style={{ gap: "var(--fib-6)" }}>
              {specs.map((s) => (
                <motion.div key={s.label} className="flex flex-col" style={{ gap: "var(--fib-1)" }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>{s.label}</span>
                  <span className="font-[family-name:var(--font-display)] font-light" style={{ fontSize: "var(--text-fib-lg)", color: s.accent ? "var(--color-ds-warm)" : "var(--color-ds-text)" }}>{s.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <motion.div className="refractive-card relative overflow-hidden flex flex-col items-center text-center" style={{ padding: "var(--fib-7) var(--fib-5)" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(227, 204, 177, 0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

            <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
              Build on Obsidian
            </div>

            <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.1, marginBottom: "var(--fib-5)" }}>
              Ready to stabilize your digital foundation?
            </TextScramble>

            <p className="text-ds-text-secondary max-w-2xl" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-6)" }}>
              Consult with our foundation architects to deploy a BlackMagickOps-grade infrastructure.
            </p>

            <div className="flex flex-col md:flex-row" style={{ gap: "var(--fib-3)" }}>
              <a href="mailto:hello@digitalsourcery.ai" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 ds-cta-prismatic" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}>
                Initiate Migration
              </a>
              <a href="/stack" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200 ds-cta-prismatic" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)", border: "1px solid rgba(200, 208, 224, 0.1)", color: "var(--color-ds-text)" }}>
                View Technical Docs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
