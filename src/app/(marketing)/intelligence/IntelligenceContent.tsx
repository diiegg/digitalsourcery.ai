"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const services = [
  {
    num: "01",
    title: "Intelligent Observability",
    tagline: "AI detecting problems before humans do.",
    problem:
      "Your monitoring shows CPU and memory. It doesn't tell you why the model's accuracy dropped 12% last Tuesday or why inference latency spiked during shift changes. Datadog sends 500 alerts a day. Your team ignores 490 of them.",
    approach:
      "ML-driven anomaly detection that understands YOUR workload patterns. Predictive alerting that warns before incidents, not after. Automated remediation that handles the 80% of incidents that follow known patterns. Root cause analysis in seconds.",
    outcomes: [
      "70%+ reduction in mean time to resolution",
      "80% of incidents auto-remediated without human intervention",
      "Alert noise reduced by 90% (signal, not spam)",
      "Model drift detected in hours, not weeks",
    ],
    tested: "Datadog vs Grafana+Prometheus vs Dynatrace",
    verdict: "Grafana + custom ML pipeline at 40% lower cost, 91% detection rate",
  },
  {
    num: "02",
    title: "AI-Driven Platform Engineering",
    tagline: "Infrastructure built and operated WITH AI.",
    problem:
      "Your IDP is a portal nobody uses. 10% adoption rate. Developers still file tickets. Your platform team drowns in maintenance instead of building features that matter. Golden paths exist on paper but not in production.",
    approach:
      "Platforms that learn from usage. Natural language provisioning — 'Deploy a staging environment with GPU for model testing' and it happens. Golden paths that generate themselves from actual developer behavior, not assumptions.",
    outcomes: [
      "Provisioning time: days to minutes",
      "Developer satisfaction jumps 40+ NPS points",
      "Platform team becomes a force multiplier",
      "Infrastructure tickets reduced 80-95%",
    ],
    tested: "Backstage vs Port vs Cortex vs custom",
    verdict: "Backstage with custom AI plugins for enterprise. Port for speed-to-value.",
  },
  {
    num: "03",
    title: "Autonomous Infrastructure",
    tagline: "Infrastructure that runs itself.",
    problem:
      "3 AM PagerDuty alert. Disk full on node-7. Your engineer SSHs in, clears logs, goes back to sleep. Same thing next week. And the week after. Meanwhile, your Kubernetes cluster doesn't know how to scale for the batch ML job that runs every Tuesday at 2 AM.",
    approach:
      "Self-healing clusters that remediate disk pressure, OOM kills, and network blips automatically. Predictive autoscaling that knows your Tuesday ML batch job is coming. AI-driven chaos testing that finds weaknesses before production does.",
    outcomes: [
      "Auto-healed 80%+ of incidents in under 2 minutes",
      "Predictive scaling prevents outages before they happen",
      "On-call burden reduced — your team sleeps through alerts",
      "Chaos testing proves resilience before customers find gaps",
    ],
    tested: "Custom K8s operators vs PagerDuty AIOps vs Shoreline",
    verdict: "Custom operators for your stack. Generic tools don't know your failure modes.",
  },
  {
    num: "04",
    title: "AI Platforms for Enterprises",
    tagline: "Run AI at scale. Not just prototypes.",
    problem:
      "Your data scientists built a model with 94% accuracy. It's been in a Jupyter notebook for 6 months. Nobody can deploy it. Nobody monitors it in production. GPU costs are a black box. The business is waiting.",
    approach:
      "End-to-end: GPU cluster provisioning, MLOps pipelines from training to deployment to monitoring, model serving with A/B testing and rollback, agentic workflow orchestration. All production-grade from day one.",
    outcomes: [
      "Model deployment time: notebooks to production in hours",
      "GPU utilization optimized (no idle $40K/month clusters)",
      "Model drift detected and retraining triggered automatically",
      "Agentic workflows running in production with guardrails",
    ],
    tested: "vLLM vs TGI vs BentoML vs SageMaker",
    verdict: "vLLM for throughput. BentoML for multi-model routing. Avoid SageMaker lock-in.",
  },
  {
    num: "05",
    title: "AI Cost Optimization",
    tagline: "Stop the GPU bill from killing your AI initiative.",
    problem:
      "73% of companies exceed their AI budget projections. Tokens are unpredictable. Agentic workflows burn 5-30x more than chatbots. Your CFO is asking why the cloud bill jumped 60% and nobody has an answer.",
    approach:
      "Cost controls from day one. Real-time token tracking, semantic caching that eliminates 40-60% of redundant queries, intelligent model routing (GPT-4 only when needed, smaller models for simple tasks), and budget enforcement that prevents runaway spend.",
    outcomes: [
      "40-60% reduction in AI inference costs",
      "Real-time cost-per-prediction dashboards",
      "Automatic budget alerts before overruns",
      "Model routing saves 20%+ by matching complexity to model size",
    ],
    tested: "Semantic caching, model routing, token budgets",
    verdict: "pgvector semantic caching + LiteLLM routing = 52% cost reduction in testing.",
  },
  {
    num: "06",
    title: "Legacy AI Modernization",
    tagline: "Your old systems aren't dead. They need an intelligence layer.",
    problem:
      "Your 15-year-old ERP runs the business. It can't be replaced — too risky, too expensive, too many dependencies. But the AI models need real-time data from it. Every integration is fragile, custom, and terrifying to touch.",
    approach:
      "Event-driven bridge patterns that decouple the legacy system from AI consumers. Your ERP keeps running untouched. Kafka/NATS event bridges stream data to AI pipelines in real-time. API wrappers where bridges aren't possible. Incremental, zero-downtime, no big-bang rewrites.",
    outcomes: [
      "AI capabilities on systems that predate Docker",
      "Zero disruption to existing operations",
      "Real-time data flowing from legacy to AI pipelines",
      "Incremental modernization — no big-bang risk",
    ],
    tested: "Event-driven bridge vs API wrapper vs data lake sync",
    verdict: "Event bridges for real-time. Data lake sync for batch. Never API wrappers for critical paths.",
  },
];

export default function IntelligenceContent() {
  return (
    <main className="relative">
      {/* Hero */}
      <section
        className="flex items-center"
        style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}
      >
        <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)] w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p
              className="font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase"
              style={{
                fontSize: "var(--text-fib-xs)",
                color: "var(--color-ds-section-label)",
                marginBottom: "var(--fib-3)",
              }}
            >
              The Intelligence Layer
            </p>
            <h1
              className="font-[family-name:var(--font-display)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
              style={{
                fontSize: "clamp(var(--text-fib-lg), 6vw, var(--text-fib-2xl))",
                marginBottom: "var(--fib-4)",
              }}
            >
              Make AI Work
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>
                in Production
              </span>
            </h1>
            <p
              className="text-ds-text-secondary max-w-lg"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}
            >
              Six capabilities that turn your infrastructure from passive to intelligent.
              Every recommendation backed by real testing. Every tool deployed before
              we recommend it. Every engagement leaves your team stronger.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section
        style={{
          paddingTop: "var(--fib-6)",
          paddingBottom: "var(--fib-7)",
          borderTop: "1px solid var(--color-ds-border)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
          <div className="flex flex-col" style={{ gap: "var(--fib-5)" }}>
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="themed-card rounded-xl"
                style={{
                  backgroundColor: "var(--color-ds-card)",
                  border: "1px solid var(--color-ds-card-border)",
                  padding: "var(--fib-5)",
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]" style={{ gap: "var(--fib-5)" }}>
                  {/* Left — Problem + Approach */}
                  <div>
                    <div
                      className="font-[family-name:var(--font-mono)]"
                      style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-phase-num)", marginBottom: "var(--fib-2)" }}
                    >
                      {service.num}
                    </div>
                    <h3
                      className="font-[family-name:var(--font-display)] font-bold text-white"
                      style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-1)" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{ color: "var(--color-ds-headline-accent)", fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-4)" }}
                    >
                      {service.tagline}
                    </p>

                    <p
                      className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                      style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
                    >
                      The Problem
                    </p>
                    <p
                      className="text-ds-text-secondary"
                      style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-4)" }}
                    >
                      {service.problem}
                    </p>

                    <p
                      className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                      style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
                    >
                      Our Approach
                    </p>
                    <p
                      className="text-ds-text-secondary"
                      style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
                    >
                      {service.approach}
                    </p>
                  </div>

                  {/* Right — Outcomes + Tested */}
                  <div>
                    <p
                      className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                      style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
                    >
                      What Changes
                    </p>
                    <ul style={{ marginBottom: "var(--fib-4)" }}>
                      {service.outcomes.map((o) => (
                        <li
                          key={o}
                          className="text-ds-text-secondary"
                          style={{
                            fontSize: "var(--text-fib-sm)",
                            lineHeight: 1.618,
                            paddingLeft: "var(--fib-2)",
                            marginBottom: "var(--fib-1)",
                            position: "relative",
                          }}
                        >
                          <span style={{ position: "absolute", left: 0, color: "var(--color-ds-headline-accent)" }}>+</span>
                          {o}
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        borderTop: "1px solid var(--color-ds-border-light)",
                        paddingTop: "var(--fib-3)",
                      }}
                    >
                      <p
                        className="font-[family-name:var(--font-mono)] text-ds-text-dim"
                        style={{ fontSize: "11px", marginBottom: "var(--fib-1)" }}
                      >
                        Tested: {service.tested}
                      </p>
                      <p
                        className="font-[family-name:var(--font-display)] font-semibold"
                        style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-headline-accent)" }}
                      >
                        {service.verdict}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingTop: "var(--fib-7)",
          paddingBottom: "var(--fib-8)",
          borderTop: "1px solid var(--color-ds-border)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: "var(--phi-major)" }}
          >
            <TextScramble
              as="h2"
              className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))",
                marginBottom: "var(--fib-4)",
              }}
            >
              Which capability does your infrastructure need first?
            </TextScramble>
            <p
              className="text-ds-text-secondary max-w-lg"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}
            >
              Start with a discovery call. We&apos;ll map your current stack,
              identify the highest-impact capability, and scope a 90-day pilot.
            </p>
            <a
              href="mailto:hello@digitalsourcery.ai"
              className="ds-cta inline-block"
              style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) var(--fib-4)" }}
            >
              Schedule a Discovery Call
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
