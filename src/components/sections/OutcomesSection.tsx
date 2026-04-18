"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Timer, TrendingDown, Shield, Gauge, ArrowUpRight } from "lucide-react";

const outcomes = [
  { icon: Timer, title: "Reduce Manual Operations", description: "Automated provisioning, self-healing runbooks, and agentic workflows replace repetitive manual work. Engineers build instead of babysit." },
  { icon: ArrowUpRight, title: "Improve Deployment Speed", description: "Self-service platforms with preview environments and progressive rollouts. Teams ship independently with built-in safety nets." },
  { icon: Shield, title: "Detect Issues Earlier", description: "ML-powered anomaly detection and intelligent alerting surfaces real problems before they reach users — not after." },
  { icon: TrendingDown, title: "Optimize Cloud Cost", description: "Right-sized infrastructure, intelligent caching, and automated scaling aligned to actual demand. Spend follows workload, not guesswork." },
  { icon: Gauge, title: "Increase System Reliability", description: "Antifragile architecture with instant rollbacks, built-in redundancy, and autonomous recovery. Systems improve under stress." },
];

export default function OutcomesSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
    <section id="outcomes" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
      <div className="ds-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            What changes
          </div>
          <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-5)" }}>
            Operational outcomes, not slideware.
          </h2>
          <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            Every engagement is measured against real operational improvements — incidents, deployment cycles, and the spend you can attribute to a workload.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2" style={{ gap: "var(--fib-3)" }}>
          {/* Large featured card — Reduce Manual Operations */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="md:col-span-2 md:row-span-2 refractive-card flex flex-col justify-between relative overflow-hidden cursor-crosshair"
            style={{ padding: "var(--fib-5)" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Mouse-following warm glow */}
            <div
              ref={glowRef}
              className="pointer-events-none absolute"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(227, 204, 177, 0.15) 0%, rgba(227, 204, 177, 0.05) 40%, transparent 70%)",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                transition: "opacity 0.5s ease",
              }}
            />

            {/* Grid overlay pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(200, 208, 224, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 208, 224, 0.03) 1px, transparent 1px)", backgroundSize: "55px 55px" }} />

            {/* Decorative arcs */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid slice">
              <circle cx="300" cy="200" r="150" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.06" />
              <circle cx="300" cy="200" r="100" stroke="#c8d0e0" strokeWidth="0.5" opacity="0.04" />
              <circle cx="300" cy="200" r="200" stroke="#E3CCB1" strokeWidth="0.3" opacity="0.03" />
            </svg>

            <div className="relative z-10">
              <div className="flex items-center" style={{ gap: "var(--fib-2)", marginBottom: "var(--fib-4)" }}>
                <Timer size={20} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1.5} />
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)" }}>Primary Outcome</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-4)" }}>
                Reduce Manual Operations
              </h3>
              <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
                {outcomes[0].description}
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--fib-3)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", paddingTop: "var(--fib-4)" }}>
              {[
                { label: "Provisioning", value: "Automated" },
                { label: "Incident Response", value: "Autonomous" },
                { label: "Deployments", value: "Self-Service" },
              ].map((m) => (
                <div key={m.label}>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] block" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-1)" }}>{m.label}</span>
                  <span className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)" }}>{m.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — stacked outcome cards */}
          {outcomes.slice(1, 3).map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * (i + 1), ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="refractive-card flex flex-col justify-center relative overflow-hidden" style={{ padding: "var(--fib-4)" }}>
                <div className="absolute top-[var(--fib-3)] right-[var(--fib-3)]">
                  <Icon size={24} style={{ color: "var(--color-ds-crystalline)", opacity: 0.15 }} strokeWidth={1} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>{o.title}</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618 }}>{o.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row — quiet 7/5 zig-zag, no warm-inverted block */}
        <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-3)", marginTop: "var(--fib-3)" }}>
          {outcomes.slice(3).map((o, i) => {
            const Icon = o.icon;
            const span = i === 0 ? "md:col-span-7" : "md:col-span-5";
            return (
              <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: 0.1 * (i + 3), ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className={`${span} flex flex-col justify-center relative overflow-hidden`} style={{ padding: "var(--fib-4)", border: "1px solid var(--color-ds-border)" }}>
                <div className="absolute top-[var(--fib-3)] right-[var(--fib-3)]" aria-hidden="true">
                  <Icon size={24} style={{ color: "var(--color-ds-crystalline)", opacity: 0.2 }} strokeWidth={1} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)", letterSpacing: "-0.01em" }}>{o.title}</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, maxWidth: "55ch" }}>{o.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
