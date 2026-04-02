"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const stack = [
  {
    category: "AI Observability",
    tested: "Datadog vs Grafana+Prometheus vs Dynatrace",
    verdict:
      "Grafana + custom ML pipeline for cost-sensitive teams. Datadog for speed-to-value.",
    why: "Datadog catches 83% of anomalies out of the box. Grafana catches 91% with tuning at 40% lower cost. We deploy both and let the workload decide.",
  },
  {
    category: "Model Serving",
    tested: "vLLM vs TGI vs BentoML vs SageMaker",
    verdict:
      "vLLM for high-throughput inference. BentoML for multi-model orchestration.",
    why: "vLLM delivers 3x throughput vs TGI on equivalent hardware. SageMaker locks you into AWS pricing. BentoML wins when you need to route between multiple models.",
  },
  {
    category: "Cost Controls",
    tested: "Semantic caching, model routing, token budgets",
    verdict:
      "Semantic caching with pgvector saves 40-60% on repeat queries.",
    why: "Most enterprise AI workloads have 30-50% query similarity. Caching similar prompts eliminates redundant inference. Model routing drops costs another 20% by using smaller models for simple tasks.",
  },
  {
    category: "Self-Healing",
    tested: "Custom remediation vs PagerDuty AIOps vs Shoreline",
    verdict:
      "Custom runbooks on Kubernetes operators for 80%+ auto-remediation.",
    why: "Generic AIOps tools don't understand your stack. Custom operators heal OOM kills, disk pressure, and network blips in <2 minutes. Humans handle the remaining 20%.",
  },
  {
    category: "Legacy Integration",
    tested: "Event-driven bridge vs API wrapper vs data lake sync",
    verdict:
      "Event-driven bridge pattern for real-time. Data lake sync for batch analytics.",
    why: "API wrappers add latency and create single points of failure. Event bridges (Kafka/NATS) decouple the legacy system from the AI consumer. Your ERP keeps running untouched.",
  },
];

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
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "var(--fib-6)" }}
          className="max-w-2xl"
        >
          <p
            className="font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase"
            style={{
              fontSize: "var(--text-fib-xs)",
              color: "var(--color-ds-section-label)",
              marginBottom: "var(--fib-3)",
            }}
          >
            Our Stack
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            We Don&apos;t Recommend Tools We Haven&apos;t Tested
          </TextScramble>
          <p
            className="text-ds-text-secondary max-w-lg"
            style={{
              fontSize: "var(--text-fib-base)",
              lineHeight: 1.618,
              marginTop: "var(--fib-3)",
            }}
          >
            Every tool recommendation is backed by real benchmarks.
            We deploy, we measure, we form opinions.
            Then we tell you what actually works.
          </p>
        </motion.div>

        <div className="flex flex-col" style={{ gap: "var(--fib-3)" }}>
          {stack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="themed-card rounded-xl"
              style={{
                backgroundColor: "var(--color-ds-card)",
                border: "1px solid var(--color-ds-card-border)",
                padding: "var(--fib-4)",
              }}
            >
              <div
                className="grid grid-cols-1 lg:grid-cols-[200px_1fr] items-start"
                style={{ gap: "var(--fib-4)" }}
              >
                <div>
                  <h3
                    className="font-[family-name:var(--font-display)] font-semibold text-white"
                    style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-1)" }}
                  >
                    {item.category}
                  </h3>
                  <p
                    className="font-[family-name:var(--font-mono)] text-ds-text-dim"
                    style={{ fontSize: "11px" }}
                  >
                    Tested: {item.tested}
                  </p>
                </div>
                <div>
                  <p
                    className="font-[family-name:var(--font-display)] font-semibold"
                    style={{
                      fontSize: "var(--text-fib-sm)",
                      color: "var(--color-ds-headline-accent)",
                      marginBottom: "var(--fib-2)",
                    }}
                  >
                    {item.verdict}
                  </p>
                  <p
                    className="text-ds-text-secondary"
                    style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
                  >
                    {item.why}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
