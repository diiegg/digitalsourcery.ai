"use client";

import { motion } from "framer-motion";
import { Radio, Layers, Cpu } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };

const services = [
  {
    num: "01",
    icon: Layers,
    title: "AI Platform Engineering",
    build: "Internal developer platforms, self-service provisioning workflows, and automated deployment pipelines that remove friction between engineering teams and infrastructure.",
    problem: "Engineers waste hours on manual provisioning, ticket-based workflows, and infrastructure bottlenecks that slow every deployment cycle.",
    outcome: "Self-service infrastructure where developers ship independently — without waiting on ops.",
    tags: ["Backstage", "Crossplane", "ArgoCD"],
  },
  {
    num: "02",
    icon: Radio,
    title: "Intelligent Observability",
    build: "Telemetry pipelines, intelligent alerting systems, and ML-powered incident detection that surfaces real signals from operational noise.",
    problem: "Teams drown in alerts, miss critical signals, and spend hours on root cause analysis because monitoring generates noise instead of insight.",
    outcome: "Earlier detection, faster resolution, and engineers focused on building — not firefighting.",
    tags: ["Grafana", "OpenTelemetry", "Loki / Tempo"],
  },
  {
    num: "03",
    icon: Cpu,
    title: "Agentic Automation",
    build: "Automated remediation workflows, self-healing infrastructure, and AI-driven decision-making that responds to incidents without human intervention.",
    problem: "Manual runbooks and on-call rotations don't scale. Repetitive incidents consume engineering time that should go toward building capabilities.",
    outcome: "Systems that diagnose, respond, and recover autonomously — reducing operational burden and improving reliability.",
    tags: ["K8s Operators", "GitOps", "n8n / Temporal"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(200, 208, 224, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 208, 224, 0.015) 1px, transparent 1px)",
          backgroundSize: "89px 89px",
        }}
        aria-hidden="true"
      />

      <div className="ds-container relative">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}>
          <div className="md:col-span-5">
            <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>
              What we build
            </span>
            <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))" }}>
              Three core systems.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:self-end">
            <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, maxWidth: "55ch" }}>
              We design, implement, and operate three core systems. Each one solves a specific infrastructure problem and delivers measurable engineering value.
            </p>
          </div>
        </div>

        {/* Stacked editorial rows — no asymmetric voids */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          className="flex flex-col"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.num}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-12 group"
                style={{
                  gap: "var(--fib-3)",
                  padding: "var(--fib-5) 0",
                  borderTop: "1px solid var(--color-ds-border)",
                }}
              >
                {/* Left column — number + title + tags */}
                <div className="md:col-span-4">
                  <div className="flex items-center justify-between" style={{ marginBottom: "var(--fib-3)" }}>
                    <span
                      className="font-[family-name:var(--font-mono)]"
                      style={{ fontSize: "11px", color: "var(--color-ds-warm)", letterSpacing: "0.1em" }}
                    >
                      {s.num}
                    </span>
                    <Icon
                      size={20}
                      style={{ color: "var(--color-ds-crystalline)", opacity: 0.4 }}
                      strokeWidth={1.5}
                      className="transition-opacity duration-500 group-hover:opacity-70"
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="font-[family-name:var(--font-display)] font-semibold text-white"
                    style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-3)", letterSpacing: "-0.01em" }}
                  >
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap" style={{ gap: "var(--fib-1)" }}>
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-[family-name:var(--font-mono)] text-ds-text-dim"
                        style={{
                          fontSize: "10px",
                          border: "1px solid var(--color-ds-border-light)",
                          padding: "2px 8px",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right column — two sub-blocks (The problem dropped — redundant with the Problem section above) */}
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--fib-4)" }}>
                  <div>
                    <span
                      className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]"
                      style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}
                    >
                      What we build
                    </span>
                    <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.6 }}>
                      {s.build}
                    </p>
                  </div>
                  <div>
                    <span
                      className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]"
                      style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}
                    >
                      The outcome
                    </span>
                    <p
                      className="font-[family-name:var(--font-display)] font-medium text-white"
                      style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.5, letterSpacing: "-0.005em" }}
                    >
                      {s.outcome}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
          <div style={{ borderTop: "1px solid var(--color-ds-border)" }} />
        </motion.div>
      </div>
    </section>
  );
}
