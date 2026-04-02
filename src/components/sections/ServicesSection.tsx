"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const services = [
  {
    num: "01",
    title: "AI-Driven Platform Engineering",
    description:
      "Make AI work with your existing infrastructure. We integrate LLMs, autonomous operations, and intelligent tooling into legacy systems — without ripping and replacing. Production-ready in 90 days, not 12 months.",
    examples: [
      "AI-powered observability and autonomous incident response",
      "Self-healing infrastructure and predictive scaling",
      "Integration with existing monitoring (Prometheus, Datadog, Splunk)",
      "Knowledge transfer so your team owns it",
    ],
  },
  {
    num: "02",
    title: "AI Cost Optimization",
    description:
      "Stop surprise GPU bills. We implement real-time cost tracking, intelligent caching, model rightsizing, and predictive budgeting. Clients typically reduce AI spend 40-60% within 60 days.",
    examples: [
      "Token usage dashboards and automated budget controls",
      "Cost-per-prediction tracking and ROI visibility",
      "Model selection optimization (GPT-4 only when needed)",
      "Inference cost reduction and GPU utilization tuning",
    ],
  },
  {
    num: "03",
    title: "Intelligent Observability",
    description:
      "Go beyond metrics and logs. AI-powered observability that predicts failures, auto-remediates incidents, and eliminates alert fatigue. Mean time to resolution reduced 70%+.",
    examples: [
      "Predictive alerting and anomaly detection",
      "Automated root cause analysis",
      "Self-healing runbooks and auto-remediation",
      "Reduced on-call burden for engineering teams",
    ],
  },
  {
    num: "04",
    title: "Legacy AI Modernization",
    description:
      "Your 15-year-old ERP wasn't built for AI. We don't replace it — we augment it. Data pipeline modernization, API layers for LLMs, gradual migration strategies that don't require big-bang rewrites.",
    examples: [
      "AI capabilities on legacy systems without replacing them",
      "Modern data pipelines from siloed sources",
      "Backward compatibility maintained throughout",
      "Zero downtime, incremental rollouts",
    ],
  },
  {
    num: "05",
    title: "AI Platforms for Enterprises",
    description:
      "Helping companies run AI at scale. GPU infrastructure, MLOps pipelines, model deployment, and agentic workflow orchestration — the heavy lifting that makes AI production-ready.",
    examples: [
      "GPU cluster provisioning and management",
      "MLOps pipelines (training to deployment to monitoring)",
      "Model serving at scale with cost controls",
      "Agentic workflow infrastructure",
    ],
  },
  {
    num: "06",
    title: "Autonomous Infrastructure",
    description:
      "Infrastructure that runs itself. Self-healing clusters, predictive scaling, and AI-driven chaos testing — built on top of your existing systems, not replacing them.",
    examples: [
      "Self-healing Kubernetes clusters",
      "Predictive autoscaling with ML models",
      "AI-driven chaos engineering and testing",
      "Autonomous cost optimization",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
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
            What We Build
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            Production AI for the Real World
          </TextScramble>
          <p
            className="text-ds-text-secondary max-w-lg"
            style={{
              fontSize: "var(--text-fib-base)",
              lineHeight: 1.618,
              marginTop: "var(--fib-3)",
            }}
          >
            Your legacy systems aren&apos;t dead — they need an intelligence layer.
            We build on top of what works, using 80% battle-tested tools
            and 20% custom engineering. No rip-and-replace.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "var(--fib-3)" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="themed-card text-ds-text rounded-xl"
              style={{
                backgroundColor: "var(--color-ds-card)",
                border: "1px solid var(--color-ds-card-border)",
                padding: "var(--fib-4)",
              }}
            >
              <div
                className="font-[family-name:var(--font-mono)]"
                style={{
                  fontSize: "var(--text-fib-xs)",
                  color: "var(--color-ds-phase-num)",
                  marginBottom: "var(--fib-2)",
                }}
              >
                {service.num}
              </div>

              <h3
                className="font-[family-name:var(--font-display)] font-semibold"
                style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-2)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-ds-text-secondary"
                style={{
                  fontSize: "var(--text-fib-sm)",
                  lineHeight: 1.618,
                  marginBottom: "var(--fib-3)",
                }}
              >
                {service.description}
              </p>

              <ul>
                {service.examples.map((ex) => (
                  <li
                    key={ex}
                    className="text-ds-text-secondary"
                    style={{
                      fontSize: "var(--text-fib-xs)",
                      lineHeight: 1.618,
                      paddingLeft: "var(--fib-2)",
                      marginBottom: "var(--fib-1)",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--color-ds-metric)",
                      }}
                    >
                      +
                    </span>
                    {ex}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
