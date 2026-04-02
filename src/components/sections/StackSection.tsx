"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const verdicts = [
  { category: "AI Observability", tested: "Datadog vs Grafana+Prometheus vs Dynatrace", verdict: "Grafana + custom ML pipeline: 91% detection, 40% lower cost.", detail: "Datadog catches 83% out of the box. Grafana catches 91% with tuning. We deploy both and let the workload decide." },
  { category: "Model Serving", tested: "vLLM vs TGI vs BentoML vs SageMaker", verdict: "vLLM: 3x throughput. BentoML for multi-model routing.", detail: "SageMaker locks you into AWS pricing. BentoML wins when you need to route between multiple models intelligently." },
  { category: "Cost Controls", tested: "Semantic caching, model routing, token budgets", verdict: "Combined approach: 52% total inference cost reduction.", detail: "30-50% query similarity in enterprise workloads. Caching eliminates redundant inference. Model routing drops costs another 20%." },
  { category: "Self-Healing Infrastructure", tested: "Custom K8s operators vs PagerDuty vs Shoreline", verdict: "Custom operators: 87% auto-healed in <2 minutes.", detail: "Generic AIOps tools don't understand your stack. Custom operators heal OOM kills, disk pressure, and network blips automatically." },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

export default function StackSection() {
  return (
    <section id="stack" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            Real Benchmarks
          </div>
          <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
            The Reference Stack
          </TextScramble>
          <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            Tested tools and real-world benchmarks from our core production audits.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--fib-3)" }}>
          {verdicts.map((v) => (
            <motion.div key={v.category} variants={fadeUp} className="prismatic-glass prismatic-edge cursor-default" style={{ padding: "var(--fib-5)" }}>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-1)" }}>{v.category}</h3>
              <p className="font-[family-name:var(--font-mono)]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm-dim)", marginBottom: "var(--fib-4)" }}>Tested: {v.tested}</p>
              <p className="font-[family-name:var(--font-display)] font-semibold" style={{ fontSize: "var(--text-fib-base)", color: "var(--color-ds-warm)", lineHeight: 1.5, marginBottom: "var(--fib-3)" }}>{v.verdict}</p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>{v.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
