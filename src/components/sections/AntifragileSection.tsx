"use client";

import { motion } from "framer-motion";
import { GitBranch, RotateCcw, Flag, HeartPulse, Bot, Lock, Layers } from "lucide-react";

const principles = [
  {
    num: "01",
    icon: GitBranch,
    title: "Preview Environments",
    description: "Every change gets its own isolated environment — a full-stack replica with staging databases. Code review shifts from static analysis to testing real functionality in production-like conditions.",
  },
  {
    num: "02",
    icon: RotateCcw,
    title: "Instant Rollbacks",
    description: "Each deployment defines its entire universe — CDN, routing, cache partitions. Rollbacks redirect a pointer to a known-good state in milliseconds, not minutes.",
  },
  {
    num: "03",
    icon: Flag,
    title: "Progressive Rollouts",
    description: "Feature flags decouple deployment from release. Capabilities ship to specific cohorts first, scale gradually, and roll back independently — without redeploying.",
  },
  {
    num: "04",
    icon: HeartPulse,
    title: "Self-Healing Compute",
    description: "When a function crashes, the next request routes to a healthy instance. Concurrency adjusts dynamically. No single-node failures, no manual recovery, no wasted compute.",
  },
  {
    num: "05",
    icon: Bot,
    title: "Autonomous Operations",
    description: "Anomaly detection on error rates, traffic, and resource usage — without manual alert wiring. Systems investigate root causes and initiate remediation autonomously.",
  },
  {
    num: "06",
    icon: Lock,
    title: "Secure Boundaries",
    description: "Every deployment is access-controlled by default. Custom deployment domains, SSO integration, and isolated environments ensure agents and engineers operate within safe boundaries.",
  },
  {
    num: "07",
    icon: Layers,
    title: "Built-in Redundancy",
    description: "Network-level, region-level, availability-zone, cluster-level, and machine-level redundancy. Systems stay online through infrastructure failures, human errors, and agent mistakes — by default.",
  },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };

export default function AntifragileSection() {
  return (
    <section id="antifragile" className="relative" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-carbon)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
      <div className="ds-container">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end" style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
              Design Philosophy
            </div>
            <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))" }}>
              Antifragile by Design
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
              Fragile systems break under stress. Resilient systems survive it. Antifragile systems get stronger. We build infrastructure that improves every time something goes wrong — whether caused by humans, agents, or external failures.
            </p>
          </motion.div>
        </div>

        {/* Principles grid — 3+4 layout */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
          {/* Top row — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--fib-3)", marginBottom: "var(--fib-3)" }}>
            {principles.slice(0, 3).map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.num} variants={fadeUp} className="relative group" style={{ padding: "var(--fib-4)", border: "1px solid rgba(200, 208, 224, 0.06)", transition: "border-color 0.5s ease" }}>
                  {/* Hover border glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(227, 204, 177, 0.1)" }} />

                  <div className="flex items-center justify-between" style={{ marginBottom: "var(--fib-3)" }}>
                    <span className="font-[family-name:var(--font-mono)] tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm-dim)" }}>{p.num}</span>
                    <Icon size={20} style={{ color: "var(--color-ds-crystalline)", opacity: 0.3 }} strokeWidth={1.5} className="transition-opacity duration-500 group-hover:opacity-60" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>{p.title}</h3>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>{p.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row — 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--fib-3)" }}>
            {principles.slice(3).map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.num} variants={fadeUp} className="relative group" style={{ padding: "var(--fib-4)", border: "1px solid rgba(200, 208, 224, 0.06)", transition: "border-color 0.5s ease" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(227, 204, 177, 0.1)" }} />

                  <div className="flex items-center justify-between" style={{ marginBottom: "var(--fib-3)" }}>
                    <span className="font-[family-name:var(--font-mono)] tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm-dim)" }}>{p.num}</span>
                    <Icon size={20} style={{ color: "var(--color-ds-crystalline)", opacity: 0.3 }} strokeWidth={1.5} className="transition-opacity duration-500 group-hover:opacity-60" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>{p.title}</h3>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="text-center" style={{ marginTop: "var(--fib-6)", paddingTop: "var(--fib-5)", borderTop: "1px solid rgba(200, 208, 224, 0.06)" }}>
          <p className="font-[family-name:var(--font-display)] font-semibold text-white max-w-2xl mx-auto" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            We implement these principles into your infrastructure — turning brittle legacy systems into adaptive platforms that handle the speed and unpredictability of the AI era.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
