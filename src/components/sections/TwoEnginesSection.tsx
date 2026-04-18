"use client";

import { motion } from "framer-motion";
import { Brain, HardDrive } from "lucide-react";

export default function TwoEnginesSection() {
  return (
    <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
      <div className="ds-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            A Unified Approach
          </div>
          <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-5)" }}>
            Two Engines, One Mission
          </h2>
          <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            BlackMagickOps builds the platform. Digital Sorcery makes it intelligent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--fib-3)" }}>
          {/* Digital Sorcery — Neural network visual */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="relative group overflow-hidden flex flex-col" style={{ backgroundColor: "var(--color-ds-card)", border: "1px solid var(--color-ds-card-border)" }}>
            {/* Neural network illustration */}
            <div className="relative overflow-hidden" style={{ height: "280px", background: "linear-gradient(180deg, rgba(227, 204, 177, 0.06) 0%, rgba(8, 8, 12, 0.98) 100%)" }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 280" fill="none" preserveAspectRatio="xMidYMid slice">
                {/* Neural connections */}
                <line x1="100" y1="60" x2="180" y2="120" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.08" />
                <line x1="200" y1="40" x2="280" y2="150" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.06" />
                <line x1="320" y1="70" x2="280" y2="150" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.07" />
                <line x1="400" y1="50" x2="380" y2="130" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.05" />
                <line x1="80" y1="140" x2="150" y2="220" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.06" />
                <line x1="180" y1="120" x2="250" y2="200" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.08" />
                <line x1="280" y1="150" x2="350" y2="230" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.05" />
                <line x1="380" y1="130" x2="440" y2="210" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.06" />
                <line x1="200" y1="40" x2="180" y2="120" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.07" />
                <line x1="150" y1="220" x2="250" y2="200" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.05" />
                <line x1="250" y1="200" x2="350" y2="230" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.06" />
                <line x1="280" y1="150" x2="250" y2="200" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.07" />
                {/* Neural nodes */}
                <circle cx="100" cy="60" r="8" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.15" />
                <circle cx="100" cy="60" r="2" fill="#E3CCB1" opacity="0.3" />
                <circle cx="200" cy="40" r="5" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.2" />
                <circle cx="200" cy="40" r="2" fill="#E3CCB1" opacity="0.25" />
                <circle cx="320" cy="70" r="8" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.12" />
                <circle cx="320" cy="70" r="2" fill="#E3CCB1" opacity="0.2" />
                <circle cx="400" cy="50" r="5" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.18" />
                <circle cx="400" cy="50" r="2" fill="#E3CCB1" opacity="0.22" />
                <circle cx="80" cy="140" r="5" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.15" />
                <circle cx="80" cy="140" r="2" fill="#E3CCB1" opacity="0.2" />
                <circle cx="180" cy="120" r="8" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.2" />
                <circle cx="180" cy="120" r="2" fill="#E3CCB1" opacity="0.3" />
                <circle cx="280" cy="150" r="10" fill="none" stroke="#E3CCB1" strokeWidth="1" opacity="0.25" />
                <circle cx="280" cy="150" r="3" fill="#E3CCB1" opacity="0.35" />
                <circle cx="380" cy="130" r="5" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.15" />
                <circle cx="380" cy="130" r="2" fill="#E3CCB1" opacity="0.2" />
                <circle cx="150" cy="220" r="5" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.12" />
                <circle cx="150" cy="220" r="2" fill="#E3CCB1" opacity="0.18" />
                <circle cx="250" cy="200" r="8" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.18" />
                <circle cx="250" cy="200" r="2" fill="#E3CCB1" opacity="0.25" />
                <circle cx="350" cy="230" r="5" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.1" />
                <circle cx="350" cy="230" r="2" fill="#E3CCB1" opacity="0.15" />
                <circle cx="440" cy="210" r="8" fill="none" stroke="#E3CCB1" strokeWidth="0.8" opacity="0.12" />
                <circle cx="440" cy="210" r="2" fill="#E3CCB1" opacity="0.18" />
                {/* Center glow */}
                <circle cx="250" cy="140" r="60" fill="url(#neuralGlow)" opacity="0.5" />
                <defs>
                  <radialGradient id="neuralGlow">
                    <stop offset="0%" stopColor="#E3CCB1" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#E3CCB1" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="absolute top-0 right-0 p-[var(--fib-4)]">
                <Brain size={24} style={{ color: "var(--color-ds-warm)", opacity: 0.3 }} strokeWidth={1} />
              </div>
            </div>

            <div className="flex flex-col justify-between flex-grow" style={{ padding: "var(--fib-5)" }}>
              <div>
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "11px", color: "var(--color-ds-warm)" }}>Intelligence Layer</span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginTop: "var(--fib-2)", marginBottom: "var(--fib-3)" }}>Digital Sorcery</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>Predictive observability, autonomous remediation, AI cost optimization, and LLM-driven infrastructure.</p>
              </div>
              <div className="flex flex-wrap" style={{ gap: "var(--fib-1)", marginTop: "var(--fib-4)" }}>
                {["AIOps", "Self-Healing", "Cost Controls", "MLOps", "Legacy Bridge"].map((tag) => (
                  <span key={tag} className="font-[family-name:var(--font-mono)] text-ds-text-dim" style={{ fontSize: "10px", border: "1px solid var(--color-ds-border-light)", padding: "2px 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* BlackMagickOps — Geometric grid visual */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="relative group overflow-hidden flex flex-col" style={{ backgroundColor: "var(--color-ds-card)", border: "1px solid var(--color-ds-card-border)" }}>
            {/* Server grid illustration */}
            <div className="relative overflow-hidden" style={{ height: "280px", background: "linear-gradient(180deg, rgba(200, 208, 224, 0.04) 0%, rgba(8, 8, 12, 0.98) 100%)" }}>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 280" fill="none" preserveAspectRatio="xMidYMid slice">
                {/* Grid rectangles */}
                <rect x="60" y="30" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.06" />
                <rect x="150" y="30" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.07" />
                <rect x="240" y="30" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.08" />
                <rect x="330" y="30" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="1" opacity="0.1" />
                <rect x="420" y="30" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.05" />
                <rect x="60" y="95" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.05" />
                <rect x="150" y="95" width="70" height="50" rx="2" fill="#c8d0e0" fillOpacity="0.03" stroke="#c8d0e0" strokeWidth="1" opacity="0.12" />
                <rect x="240" y="95" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.07" />
                <rect x="330" y="95" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.06" />
                <rect x="420" y="95" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.05" />
                <rect x="60" y="160" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.04" />
                <rect x="150" y="160" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.06" />
                <rect x="240" y="160" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.05" />
                <rect x="330" y="160" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.07" />
                <rect x="420" y="160" width="70" height="50" rx="2" fill="none" stroke="#c8d0e0" strokeWidth="0.6" opacity="0.04" />
                {/* Vertical connections */}
                <line x1="95" y1="30" x2="95" y2="210" stroke="#c8d0e0" strokeWidth="0.3" opacity="0.06" strokeDasharray="4 8" />
                <line x1="185" y1="30" x2="185" y2="210" stroke="#c8d0e0" strokeWidth="0.3" opacity="0.06" strokeDasharray="4 8" />
                <line x1="275" y1="30" x2="275" y2="210" stroke="#c8d0e0" strokeWidth="0.3" opacity="0.06" strokeDasharray="4 8" />
                <line x1="365" y1="30" x2="365" y2="210" stroke="#c8d0e0" strokeWidth="0.3" opacity="0.06" strokeDasharray="4 8" />
                <line x1="455" y1="30" x2="455" y2="210" stroke="#c8d0e0" strokeWidth="0.3" opacity="0.06" strokeDasharray="4 8" />
                {/* Horizontal bus */}
                <line x1="60" y1="80" x2="490" y2="80" stroke="#c8d0e0" strokeWidth="0.4" opacity="0.05" />
                <line x1="60" y1="145" x2="490" y2="145" stroke="#c8d0e0" strokeWidth="0.4" opacity="0.05" />
                {/* Center glow */}
                <circle cx="250" cy="140" r="70" fill="url(#gridGlow2)" opacity="0.3" />
                <defs>
                  <radialGradient id="gridGlow2">
                    <stop offset="0%" stopColor="#c8d0e0" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#c8d0e0" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              <div className="absolute top-0 right-0 p-[var(--fib-4)]">
                <HardDrive size={24} style={{ color: "var(--color-ds-crystalline)", opacity: 0.3 }} strokeWidth={1} />
              </div>
            </div>

            <div className="flex flex-col justify-between flex-grow" style={{ padding: "var(--fib-5)" }}>
              <div>
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em]" style={{ fontSize: "11px", color: "var(--color-ds-warm)" }}>Foundation Layer</span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginTop: "var(--fib-2)", marginBottom: "var(--fib-3)" }}>BlackMagickOps</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>Hardened Kubernetes, internal developer platforms, infrastructure-as-code, and zero-trust platform engineering.</p>
              </div>
              <div className="flex flex-wrap" style={{ gap: "var(--fib-1)", marginTop: "var(--fib-4)" }}>
                {["Kubernetes", "IDP", "ArgoCD", "Crossplane", "FinOps"].map((tag) => (
                  <span key={tag} className="font-[family-name:var(--font-mono)] text-ds-text-dim" style={{ fontSize: "10px", border: "1px solid var(--color-ds-border-light)", padding: "2px 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
