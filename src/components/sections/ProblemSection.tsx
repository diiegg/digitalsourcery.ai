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

          {/* Right — abstract gradient illustration */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="relative">
            <div className="relative overflow-hidden w-full" style={{ aspectRatio: "4 / 5", maxHeight: "500px", borderRadius: "var(--fib-3)", background: "linear-gradient(160deg, rgba(227, 204, 177, 0.08) 0%, rgba(8, 8, 12, 0.95) 30%, rgba(8, 8, 12, 0.98) 70%, rgba(200, 208, 224, 0.06) 100%)" }}>
              {/* Abstract fragmentation SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice">
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
                {/* Shattered fragments */}
                <polygon points="50,80 180,40 200,180 80,200" fill="url(#frag1)" stroke="rgba(200,208,224,0.08)" strokeWidth="1" />
                <polygon points="200,60 350,100 320,220 180,180" fill="url(#frag2)" stroke="rgba(200,208,224,0.06)" strokeWidth="1" />
                <polygon points="100,220 250,200 280,350 120,380" fill="url(#frag1)" stroke="rgba(227,204,177,0.06)" strokeWidth="1" />
                <polygon points="260,240 380,200 370,360 300,380" fill="url(#frag2)" stroke="rgba(200,208,224,0.05)" strokeWidth="1" />
                <polygon points="40,300 130,280 160,420 60,450" fill="url(#frag1)" stroke="rgba(200,208,224,0.04)" strokeWidth="1" />
                {/* Fracture lines */}
                <line x1="180" y1="40" x2="250" y2="200" stroke="rgba(227,204,177,0.12)" strokeWidth="0.5" />
                <line x1="200" y1="180" x2="120" y2="380" stroke="rgba(200,208,224,0.08)" strokeWidth="0.5" />
                <line x1="320" y1="220" x2="300" y2="380" stroke="rgba(227,204,177,0.06)" strokeWidth="0.5" />
                <line x1="80" y1="200" x2="40" y2="300" stroke="rgba(200,208,224,0.06)" strokeWidth="0.5" />
                {/* Scatter dots */}
                <circle cx="120" cy="120" r="2" fill="#E3CCB1" opacity="0.2" />
                <circle cx="240" cy="150" r="1.5" fill="#c8d0e0" opacity="0.15" />
                <circle cx="160" cy="280" r="2.5" fill="#E3CCB1" opacity="0.12" />
                <circle cx="300" cy="300" r="1" fill="#c8d0e0" opacity="0.18" />
                <circle cx="80" cy="350" r="2" fill="#E3CCB1" opacity="0.1" />
                <circle cx="340" cy="160" r="1.5" fill="#c8d0e0" opacity="0.13" />
                <circle cx="200" cy="400" r="2" fill="#E3CCB1" opacity="0.08" />
                <circle cx="60" cy="160" r="1" fill="#c8d0e0" opacity="0.2" />
                <circle cx="280" cy="260" r="2.5" fill="#E3CCB1" opacity="0.1" />
                <circle cx="180" cy="340" r="1.5" fill="#c8d0e0" opacity="0.14" />
              </svg>

              {/* Central text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center" style={{ padding: "var(--fib-4)" }}>
                  <div className="mx-auto flex items-center justify-center" style={{ width: "89px", height: "89px", border: "1px solid rgba(227, 204, 177, 0.15)", marginBottom: "var(--fib-4)" }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="#E3CCB1" strokeWidth="1" opacity="0.5" />
                      <circle cx="28" cy="12" r="3" stroke="#c8d0e0" strokeWidth="1" opacity="0.3" />
                      <circle cx="20" cy="28" r="3" stroke="#E3CCB1" strokeWidth="1" opacity="0.4" />
                      <line x1="15" y1="12" x2="25" y2="12" stroke="#c8d0e0" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 3" />
                      <line x1="13" y1="15" x2="18" y2="25" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 3" />
                      <line x1="27" y1="15" x2="22" y2="25" stroke="#c8d0e0" strokeWidth="0.5" opacity="0.15" strokeDasharray="2 3" />
                    </svg>
                  </div>
                  <p className="font-[family-name:var(--font-display)] font-light tracking-[0.1em]" style={{ fontSize: "var(--text-fib-md)", color: "var(--color-ds-warm)" }}>Fragmented Systems</p>
                  <p className="text-ds-text-dim" style={{ fontSize: "var(--text-fib-xs)", marginTop: "var(--fib-1)" }}>Disconnected. Expensive. Invisible drift.</p>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute rounded-full" style={{ top: "var(--fib-4)", left: "var(--fib-4)", width: "55px", height: "55px", border: "1px solid rgba(227, 204, 177, 0.06)" }} />
              <div className="absolute rounded-full" style={{ bottom: "var(--fib-5)", right: "var(--fib-4)", width: "89px", height: "89px", border: "1px solid rgba(200, 208, 224, 0.04)" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
