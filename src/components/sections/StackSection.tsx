"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const stackItems = [
  { name: "Kubernetes", category: "Container Orch" },
  { name: "Terraform", category: "Infrastructure" },
  { name: "ArgoCD", category: "GitOps Engine" },
  { name: "Prometheus", category: "Metrics Core" },
  { name: "Grafana", category: "Observability" },
  { name: "vLLM", category: "Model Serving" },
  { name: "BentoML", category: "ML Orchestration" },
  { name: "LangChain", category: "LLM Framework" },
  { name: "pgvector", category: "Semantic Cache" },
  { name: "Kafka", category: "Event Bridge" },
];

const verdicts = [
  {
    category: "AI Observability",
    tested: "Datadog vs Grafana+Prometheus vs Dynatrace",
    verdict: "Grafana + custom ML pipeline: 91% detection, 40% lower cost.",
  },
  {
    category: "Model Serving",
    tested: "vLLM vs TGI vs BentoML vs SageMaker",
    verdict: "vLLM: 3x throughput. BentoML for multi-model routing.",
  },
  {
    category: "Cost Controls",
    tested: "Semantic caching, model routing, token budgets",
    verdict: "Combined approach: 52% total inference cost reduction.",
  },
  {
    category: "Self-Healing",
    tested: "Custom K8s operators vs PagerDuty vs Shoreline",
    verdict: "Custom operators: 87% auto-healed in <2 minutes.",
  },
  {
    category: "Legacy Integration",
    tested: "Event bridge vs API wrapper vs data lake sync",
    verdict: "Event bridge: <100ms latency. No legacy system changes.",
  },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      style={{
        paddingTop: "var(--fib-7)",
        paddingBottom: "var(--fib-7)",
        backgroundColor: "var(--color-ds-void)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: "var(--fib-6)" }}
        >
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4vw, var(--text-fib-xl))", marginBottom: "var(--fib-2)" }}
          >
            The Reference Stack
          </TextScramble>
          <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)" }}>
            Tested tools and real-world benchmarks from our core production audits.
          </p>
        </motion.div>

        {/* Tool grid — grayscale hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5"
          style={{
            border: "1px solid var(--color-ds-border-light)",
            marginBottom: "var(--fib-6)",
          }}
        >
          {stackItems.map((item) => (
            <div
              key={item.name}
              className="stack-item flex flex-col items-center justify-center cursor-default group"
              style={{
                padding: "var(--fib-4) var(--fib-3)",
                borderRight: "1px solid var(--color-ds-border-light)",
                borderBottom: "1px solid var(--color-ds-border-light)",
              }}
            >
              <span
                className="font-[family-name:var(--font-display)] font-bold text-white group-hover:text-[var(--color-ds-headline-accent)] transition-colors"
                style={{ fontSize: "var(--text-fib-sm)" }}
              >
                {item.name}
              </span>
              <span
                className="font-[family-name:var(--font-mono)] text-ds-text-dim uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.05em", marginTop: "var(--fib-1)" }}
              >
                {item.category}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Verdict cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--fib-2)" }}>
          {verdicts.map((v, i) => (
            <motion.div
              key={v.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card"
              style={{ padding: "var(--fib-3)" }}
            >
              <p
                className="font-[family-name:var(--font-display)] font-semibold text-white"
                style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-1)" }}
              >
                {v.category}
              </p>
              <p
                className="font-[family-name:var(--font-mono)] text-ds-text-dim"
                style={{ fontSize: "10px", marginBottom: "var(--fib-2)" }}
              >
                Tested: {v.tested}
              </p>
              <p
                style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-headline-accent)", lineHeight: 1.5 }}
              >
                {v.verdict}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
