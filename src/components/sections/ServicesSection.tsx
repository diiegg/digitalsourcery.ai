"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Radio, Layers, Cpu } from "lucide-react";

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

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };

function ServiceCard({ service }: { service: typeof services[number] }) {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!glowRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    glowRef.current.style.left = `${e.clientX - rect.left}px`;
    glowRef.current.style.top = `${e.clientY - rect.top}px`;
    glowRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      className="refractive-card text-ds-text cursor-default relative overflow-hidden group"
      style={{ padding: "var(--fib-4)" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse-following glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(227, 204, 177, 0.1) 0%, rgba(200, 208, 224, 0.03) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Decorative corner arc */}
      <svg className="absolute top-0 right-0 pointer-events-none" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M80 0 Q80 40 40 80" stroke="#c8d0e0" strokeWidth="0.5" opacity="0.06" />
        <path d="M80 0 Q80 25 55 50" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.04" />
      </svg>

      <div className="relative z-10">
        <div className="flex items-center justify-between" style={{ marginBottom: "var(--fib-3)" }}>
          <div className="font-[family-name:var(--font-mono)]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm-dim)" }}>{service.num}</div>
          <div className="transition-transform duration-500 group-hover:scale-110">
            <Icon size={24} style={{ color: "var(--color-ds-crystalline)", opacity: 0.4, transition: "opacity 0.5s ease" }} className="group-hover:!opacity-60" strokeWidth={1} />
          </div>
        </div>
        <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-4)" }}>{service.title}</h3>

        <div style={{ marginBottom: "var(--fib-3)" }}>
          <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-1)" }}>What We Build</span>
          <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>{service.build}</p>
        </div>

        <div style={{ marginBottom: "var(--fib-3)" }}>
          <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-1)" }}>The Problem</span>
          <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>{service.problem}</p>
        </div>

        <div style={{ marginBottom: "var(--fib-3)" }}>
          <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-1)" }}>The Outcome</span>
          <p className="text-white font-[family-name:var(--font-display)] font-semibold" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.5 }}>{service.outcome}</p>
        </div>

        <div className="flex flex-wrap" style={{ gap: "var(--fib-1)", marginTop: "var(--fib-2)" }}>
          {service.tags.map((tag) => (
            <span key={tag} className="font-[family-name:var(--font-mono)] text-ds-text-dim" style={{ fontSize: "10px", border: "1px solid var(--color-ds-border-light)", padding: "2px 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(200, 208, 224, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 208, 224, 0.015) 1px, transparent 1px)", backgroundSize: "89px 89px" }} />

      <div className="ds-container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            What We Build
          </div>
          <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-5)" }}>
            What We Build
          </h2>
          <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            We design, implement, and operate three core systems. Each one solves a specific infrastructure problem and delivers measurable engineering value.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-3)" }}>
          <div className="md:col-span-8">
            <ServiceCard service={services[0]} />
          </div>
          <div className="md:col-span-4 flex flex-col" style={{ gap: "var(--fib-3)" }}>
            <ServiceCard service={services[1]} />
            <ServiceCard service={services[2]} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
