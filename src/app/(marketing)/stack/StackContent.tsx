"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const categories = [
  {
    title: "AI Observability",
    description: "Monitoring AI workloads is different from monitoring traditional infrastructure. Models drift, inference latency spikes under load, and token costs are invisible to standard tools.",
    tools: [
      { name: "Datadog", score: "8/10", pros: "Out-of-box AI monitors, Bits AI assistant, fast setup", cons: "Expensive at scale, vendor lock-in, limited custom ML models" },
      { name: "Grafana + Prometheus", score: "9/10", pros: "Open-source, fully customizable, 40% cheaper, works with custom ML pipelines", cons: "Requires engineering to set up, steeper learning curve" },
      { name: "Dynatrace", score: "7/10", pros: "Davis AI for root cause, enterprise support, auto-discovery", cons: "Heaviest pricing, complex licensing, overkill for mid-market" },
    ],
    verdict: "Grafana + custom ML pipeline for teams with engineering capacity. Datadog for speed-to-value when budget allows. Dynatrace only for enterprise with existing contracts.",
    metric: "91% anomaly detection rate with Grafana custom pipeline vs 83% with Datadog out-of-box.",
  },
  {
    title: "Model Serving & Inference",
    description: "Getting models from notebooks to production at scale with acceptable latency, cost, and reliability. The last mile that most teams struggle with.",
    tools: [
      { name: "vLLM", score: "9/10", pros: "3x throughput vs TGI, PagedAttention, OpenAI-compatible API, open-source", cons: "Self-managed, requires GPU expertise, no built-in monitoring" },
      { name: "BentoML", score: "8/10", pros: "Multi-model orchestration, model routing, great for composition", cons: "Smaller community, less raw throughput than vLLM" },
      { name: "TGI (HuggingFace)", score: "7/10", pros: "HuggingFace ecosystem, easy model loading, good defaults", cons: "Lower throughput than vLLM, limited routing capabilities" },
      { name: "SageMaker", score: "6/10", pros: "Fully managed, AWS integration, auto-scaling", cons: "AWS lock-in, opaque pricing, limited model flexibility" },
    ],
    verdict: "vLLM for high-throughput single-model serving. BentoML when routing between multiple models. Avoid SageMaker unless you're committed to AWS and value convenience over cost.",
    metric: "vLLM: 3x throughput vs TGI on equivalent H100 hardware. BentoML routing saves 20% by matching query complexity to model size.",
  },
  {
    title: "AI Cost Controls",
    description: "73% of companies exceed AI budgets. Tokens, GPU hours, and inference costs are fundamentally different from traditional cloud billing. Standard FinOps tools don't track them.",
    tools: [
      { name: "Semantic Caching (pgvector)", score: "9/10", pros: "40-60% cost reduction on similar queries, simple to implement, works with any LLM", cons: "Requires embedding pipeline, cache invalidation needs thought" },
      { name: "LiteLLM (Model Routing)", score: "8/10", pros: "Route to cheapest capable model per query, OpenAI-compatible proxy, open-source", cons: "Adds latency hop, requires quality thresholds per model" },
      { name: "Token Budgets (Custom)", score: "8/10", pros: "Hard spending limits per team/service/user, real-time enforcement", cons: "Custom build required, needs integration with billing" },
      { name: "Cloud Provider FinOps", score: "5/10", pros: "Existing tooling (AWS Cost Explorer, Azure Advisor)", cons: "Don't understand token pricing, no model-level attribution" },
    ],
    verdict: "Layer all three: semantic caching first (biggest impact), then model routing (easy 20% savings), then token budgets for governance. Cloud provider tools are table stakes, not sufficient.",
    metric: "Combined approach: 52% total cost reduction in testing. Semantic caching alone: 40-60%. Model routing alone: 15-25%.",
  },
  {
    title: "Self-Healing Infrastructure",
    description: "Kubernetes fails in predictable patterns — OOM kills, disk pressure, network partitions, pod evictions. 80% of 3 AM pages are problems the system could fix itself.",
    tools: [
      { name: "Custom K8s Operators", score: "9/10", pros: "Tailored to YOUR failure modes, instant remediation, learns from your stack", cons: "Build cost, requires deep K8s expertise, maintenance" },
      { name: "PagerDuty AIOps", score: "6/10", pros: "Integrates with existing alerting, ML-based grouping, reduces noise", cons: "Generic — doesn't understand your stack, remediation requires external tooling" },
      { name: "Shoreline", score: "7/10", pros: "Runbook automation, fleet-wide remediation, good debugging tools", cons: "Additional platform cost, limited AI capabilities" },
    ],
    verdict: "Custom operators for the 80% of failures that follow patterns (OOM, disk, network). PagerDuty for alert routing and the 20% that need humans. Shoreline for fleet-wide ops if you have 100+ nodes.",
    metric: "Custom operators: 87% of incidents auto-healed in <2 minutes. PagerDuty alone: 0% auto-healed (it's alerting, not remediation).",
  },
  {
    title: "Legacy System Integration",
    description: "Most enterprises don't have greenfield AI infrastructure. They have 15-year-old ERPs, batch-processing mainframes, and data silos that predate APIs. AI needs their data in real-time.",
    tools: [
      { name: "Event Bridge (Kafka/NATS)", score: "9/10", pros: "Real-time streaming, decouples legacy from AI, legacy system untouched", cons: "Requires event schema design, operational overhead" },
      { name: "API Wrapper Layer", score: "6/10", pros: "Simple to implement, familiar pattern, works for low-throughput", cons: "Adds latency, single point of failure, tightly couples systems" },
      { name: "Data Lake Sync (Batch)", score: "8/10", pros: "Good for analytics/training, handles messy data, mature tooling", cons: "Not real-time, stale data, complex ETL pipelines" },
    ],
    verdict: "Event-driven bridge for anything that needs real-time data (inference, monitoring, alerting). Data lake sync for training data and batch analytics. Never use API wrappers for critical paths — they create fragile coupling.",
    metric: "Event bridge: <100ms data latency from legacy to AI consumer. API wrapper: 200-500ms + failure cascade risk.",
  },
];

export default function StackContent() {
  return (
    <main className="relative">
      {/* Hero */}
      <section
        className="flex items-center"
        style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-6)" }}
      >
        <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)] w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p
              className="font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase"
              style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-section-label)", marginBottom: "var(--fib-3)" }}
            >
              Reference Architecture
            </p>
            <h1
              className="font-[family-name:var(--font-display)] font-bold leading-[1.0] tracking-[-0.03em] text-white max-w-3xl"
              style={{ fontSize: "clamp(var(--text-fib-lg), 6vw, var(--text-fib-2xl))", marginBottom: "var(--fib-4)" }}
            >
              We Don&apos;t Recommend Tools
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>
                We Haven&apos;t Tested
              </span>
            </h1>
            <p
              className="text-ds-text-secondary max-w-lg"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}
            >
              Every tool on this page has been deployed, benchmarked, and stress-tested
              against real workloads. We form opinions through engineering, not vendor demos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section
        style={{ paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)", paddingTop: "var(--fib-6)" }}
      >
        <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
          <div className="flex flex-col" style={{ gap: "var(--fib-6)" }}>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <h2
                  className="font-[family-name:var(--font-display)] font-bold text-white"
                  style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}
                >
                  {cat.title}
                </h2>
                <p
                  className="text-ds-text-secondary max-w-2xl"
                  style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-4)" }}
                >
                  {cat.description}
                </p>

                {/* Tool comparison cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--fib-2)", marginBottom: "var(--fib-4)" }}>
                  {cat.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="themed-card rounded-lg"
                      style={{
                        backgroundColor: "var(--color-ds-card)",
                        border: "1px solid var(--color-ds-card-border)",
                        padding: "var(--fib-3)",
                      }}
                    >
                      <div className="flex items-baseline justify-between" style={{ marginBottom: "var(--fib-2)" }}>
                        <h4 className="font-[family-name:var(--font-display)] font-semibold text-white" style={{ fontSize: "var(--text-fib-sm)" }}>
                          {tool.name}
                        </h4>
                        <span className="font-[family-name:var(--font-mono)]" style={{ fontSize: "11px", color: "var(--color-ds-headline-accent)" }}>
                          {tool.score}
                        </span>
                      </div>
                      <p className="text-ds-text-secondary" style={{ fontSize: "12px", lineHeight: 1.5, marginBottom: "var(--fib-1)" }}>
                        <span className="text-ds-text-dim">+</span> {tool.pros}
                      </p>
                      <p className="text-ds-text-secondary" style={{ fontSize: "12px", lineHeight: 1.5 }}>
                        <span className="text-ds-text-dim">-</span> {tool.cons}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Verdict */}
                <div
                  className="rounded-lg"
                  style={{
                    backgroundColor: "var(--color-ds-card)",
                    border: "1px solid var(--color-ds-card-border)",
                    padding: "var(--fib-3)",
                  }}
                >
                  <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim" style={{ fontSize: "11px", marginBottom: "var(--fib-1)" }}>
                    Verdict
                  </p>
                  <p className="text-white" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-2)" }}>
                    {cat.verdict}
                  </p>
                  <p className="font-[family-name:var(--font-mono)]" style={{ fontSize: "12px", color: "var(--color-ds-headline-accent)" }}>
                    {cat.metric}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
