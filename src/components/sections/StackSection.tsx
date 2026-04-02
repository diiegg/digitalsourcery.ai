"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const verdicts = [
  {
    category: "AI Observability",
    tested: "Datadog vs Grafana+Prometheus vs Dynatrace",
    verdict: "Grafana + custom ML pipeline: 91% detection, 40% lower cost.",
    detail: "Datadog catches 83% out of the box. Grafana catches 91% with tuning. We deploy both and let the workload decide.",
  },
  {
    category: "Model Serving",
    tested: "vLLM vs TGI vs BentoML vs SageMaker",
    verdict: "vLLM: 3x throughput. BentoML for multi-model routing.",
    detail: "SageMaker locks you into AWS pricing. BentoML wins when you need to route between multiple models intelligently.",
  },
  {
    category: "Cost Controls",
    tested: "Semantic caching, model routing, token budgets",
    verdict: "Combined approach: 52% total inference cost reduction.",
    detail: "30-50% query similarity in enterprise workloads. Caching eliminates redundant inference. Model routing drops costs another 20%.",
  },
  {
    category: "Self-Healing",
    tested: "Custom K8s operators vs PagerDuty vs Shoreline",
    verdict: "Custom operators: 87% auto-healed in <2 minutes.",
    detail: "Generic AIOps tools don't understand your stack. Custom operators heal OOM kills, disk pressure, and network blips automatically.",
  },
  {
    category: "Legacy Integration",
    tested: "Event bridge vs API wrapper vs data lake sync",
    verdict: "Event bridge: <100ms latency. No legacy system changes.",
    detail: "API wrappers add latency and create single points of failure. Kafka/NATS event bridges decouple without touching your ERP.",
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function StackSection() {
  return (
    <section
      id="stack"
      style={{
        paddingTop: "var(--fib-7)",
        paddingBottom: "var(--fib-7)",
        borderTop: "1px solid var(--color-ds-border)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-end"
          style={{ gap: "var(--fib-3)", marginBottom: "var(--fib-6)" }}
        >
          <div>
            <p
              className="font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase"
              style={{
                fontSize: "var(--text-fib-xs)",
                color: "var(--color-ds-warm)",
                marginBottom: "var(--fib-3)",
              }}
            >
              Our Stack
            </p>
            <TextScramble
              as="h2"
              className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(var(--text-fib-lg), 4vw, var(--text-fib-xl))" }}
            >
              Tested. Measured. Opinionated.
            </TextScramble>
          </div>
          <div className="hidden md:block h-px flex-grow mx-[var(--fib-4)]" style={{ backgroundColor: "var(--color-ds-border-light)", marginBottom: "var(--fib-2)" }} />
          <p
            className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] whitespace-nowrap"
            style={{ fontSize: "11px", color: "var(--color-ds-warm-dim)", marginBottom: "var(--fib-1)" }}
          >
            Real Benchmarks
          </p>
        </motion.div>

        {/* Bento layout: 2 large on top, 3 on bottom — no orphan gap */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
          style={{ gap: "var(--fib-2)" }}
        >
          {/* Row 1: 2 cards — golden ratio split */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[var(--phi-major)_var(--phi-minor)]"
            style={{ gap: "var(--fib-2)" }}
          >
            {verdicts.slice(0, 2).map((v) => (
              <motion.div
                key={v.category}
                variants={fadeUp}
                className="prismatic-glass prismatic-edge cursor-default"
                style={{ padding: "var(--fib-4)" }}
              >
                <h3
                  className="font-[family-name:var(--font-display)] font-semibold text-white"
                  style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-1)" }}
                >
                  {v.category}
                </h3>
                <p
                  className="font-[family-name:var(--font-mono)]"
                  style={{ fontSize: "10px", color: "var(--color-ds-warm-dim)", marginBottom: "var(--fib-3)" }}
                >
                  Tested: {v.tested}
                </p>
                <p
                  className="font-[family-name:var(--font-display)] font-medium"
                  style={{
                    fontSize: "var(--text-fib-sm)",
                    color: "var(--color-ds-warm)",
                    lineHeight: 1.5,
                    marginBottom: "var(--fib-2)",
                  }}
                >
                  {v.verdict}
                </p>
                <p
                  className="text-ds-text-secondary"
                  style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618 }}
                >
                  {v.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 3 equal cards — fills perfectly */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "var(--fib-2)" }}
          >
            {verdicts.slice(2).map((v) => (
              <motion.div
                key={v.category}
                variants={fadeUp}
                className="prismatic-glass prismatic-edge cursor-default"
                style={{ padding: "var(--fib-4)" }}
              >
                <h3
                  className="font-[family-name:var(--font-display)] font-semibold text-white"
                  style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-1)" }}
                >
                  {v.category}
                </h3>
                <p
                  className="font-[family-name:var(--font-mono)]"
                  style={{ fontSize: "10px", color: "var(--color-ds-warm-dim)", marginBottom: "var(--fib-3)" }}
                >
                  Tested: {v.tested}
                </p>
                <p
                  className="font-[family-name:var(--font-display)] font-medium"
                  style={{
                    fontSize: "var(--text-fib-sm)",
                    color: "var(--color-ds-warm)",
                    lineHeight: 1.5,
                    marginBottom: "var(--fib-2)",
                  }}
                >
                  {v.verdict}
                </p>
                <p
                  className="text-ds-text-secondary"
                  style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618 }}
                >
                  {v.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
