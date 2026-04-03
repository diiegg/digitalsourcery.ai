"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { AlertTriangle, TrendingUp, Activity } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Operational Friction", detail: "70% of engineering time is lost to keeping the lights on rather than feature innovation. AI experiments never leave the notebook." },
  { icon: TrendingUp, title: "Compounding Costs", detail: "Cloud waste hits $26B annually. Add GPU costs, token spend, and agentic workflows — your AI budget is a black box the CFO wants opened." },
  { icon: Activity, title: "The Production Gap", detail: "Models with 94% accuracy in the lab drift to 67% in production. Nobody monitors. Nobody notices until customers complain." },
];

export default function ProblemSection() {
  return (
    <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-carbon)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
      <div className="ds-container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center" style={{ gap: "var(--fib-6)" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
              The Systemic Crisis
            </div>
            <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-5)" }}>
              Complexity Is the Silent Killer.
            </TextScramble>
            <p className="text-ds-text-secondary max-w-md" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
              Legacy cloud operations are brittle. Manual toil scales linearly with infrastructure, while AI experiments die between notebook and production. Your engineering talent is wasted on maintenance.
            </p>
          </motion.div>

          <div className="flex flex-col" style={{ gap: "var(--fib-3)" }}>
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }} className="refractive-card accent-border-card flex items-start" style={{ padding: "var(--fib-4)", gap: "var(--fib-3)" }}>
                  <div className="shrink-0" style={{ marginTop: "2px" }}>
                    <Icon size={20} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)" }}>{p.title}</h3>
                    <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginTop: "var(--fib-2)" }}>{p.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
