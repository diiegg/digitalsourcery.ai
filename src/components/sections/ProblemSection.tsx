"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, Activity } from "lucide-react";

const problems = [
  { icon: AlertTriangle, stat: "Fragile", label: "Legacy systems break under change" },
  { icon: TrendingUp, stat: "Opaque", label: "No visibility into what's failing" },
  { icon: Activity, stat: "Manual", label: "Every incident needs a human" },
];

export default function ProblemSection() {
  return (
    <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-carbon)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
      <div className="ds-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "var(--fib-6)" }}>
          {/* Left — text */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
              The Problem
            </div>
            <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-5)" }}>
              Legacy Infrastructure Breaks Under Change.
            </h2>
            <p className="text-ds-text-secondary max-w-md" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
              Most infrastructure wasn&apos;t designed for the AI era. It&apos;s fragile — every change introduces risk, every incident needs a human, and scaling means more complexity. We transform legacy systems into antifragile architecture that improves under stress.
            </p>

            {/* Compact stats row */}
            <div className="flex flex-wrap" style={{ gap: "var(--fib-4)" }}>
              {problems.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="flex items-center" style={{ gap: "var(--fib-2)" }}>
                    <Icon size={14} style={{ color: "var(--color-ds-warm)", opacity: 0.6 }} strokeWidth={1.5} />
                    <div>
                      <span className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)" }}>{p.stat}</span>
                      <p className="text-ds-text-dim" style={{ fontSize: "10px", lineHeight: 1.3 }}>{p.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — distilled abstract illustration (3 fragments + 1 fracture line + 4 dots, no inner SVG, no decorative circles) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="relative">
            <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4 / 5", maxHeight: "500px", borderRadius: "var(--fib-3)", background: "linear-gradient(160deg, rgba(227, 204, 177, 0.08) 0%, rgba(8, 8, 12, 0.95) 30%, rgba(8, 8, 12, 0.98) 70%, rgba(200, 208, 224, 0.06) 100%)" }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                  <linearGradient id="frag1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E3CCB1" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#c8d0e0" stopOpacity="0.03" />
                  </linearGradient>
                  <linearGradient id="frag2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c8d0e0" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#E3CCB1" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <polygon points="60,80 200,50 220,200 90,210" fill="url(#frag1)" stroke="rgba(200,208,224,0.08)" strokeWidth="1" />
                <polygon points="220,220 360,200 340,380 240,360" fill="url(#frag2)" stroke="rgba(200,208,224,0.05)" strokeWidth="1" />
                <polygon points="60,300 180,290 200,440 80,450" fill="url(#frag1)" stroke="rgba(200,208,224,0.04)" strokeWidth="1" />
                <line x1="200" y1="50" x2="240" y2="360" stroke="rgba(227,204,177,0.1)" strokeWidth="0.5" />
                <circle cx="140" cy="140" r="2" fill="#E3CCB1" opacity="0.18" />
                <circle cx="290" cy="280" r="1.5" fill="#c8d0e0" opacity="0.16" />
                <circle cx="120" cy="370" r="2" fill="#E3CCB1" opacity="0.12" />
                <circle cx="320" cy="120" r="1" fill="#c8d0e0" opacity="0.18" />
              </svg>

              {/* Caption overlay — text only, no inner SVG mark */}
              <div className="absolute inset-0 flex items-end" style={{ padding: "var(--fib-5)" }}>
                <div>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-1)" }}>
                    Fragmented systems
                  </span>
                  <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-text-secondary)" }}>
                    Disconnected. Expensive. Invisible drift.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
