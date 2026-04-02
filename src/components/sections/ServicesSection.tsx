"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { Eye, DollarSign, Radio, Layers, Cpu, Shield } from "lucide-react";

const services = [
  { num: "01", icon: Eye, title: "AI-Driven Platform Engineering", description: "Make AI work with your existing infrastructure. We integrate LLMs, autonomous operations, and intelligent tooling into legacy systems — without ripping and replacing.", examples: ["AI-powered observability and autonomous incident response", "Self-healing infrastructure and predictive scaling", "Integration with existing monitoring (Prometheus, Datadog, Splunk)", "Knowledge transfer so your team owns it"] },
  { num: "02", icon: DollarSign, title: "AI Cost Optimization", description: "Stop surprise GPU bills. We implement real-time cost tracking, intelligent caching, model rightsizing, and predictive budgeting. Clients typically reduce AI spend 40-60% within 60 days.", examples: ["Token usage dashboards and automated budget controls", "Cost-per-prediction tracking and ROI visibility", "Model selection optimization (GPT-4 only when needed)", "Inference cost reduction and GPU utilization tuning"] },
  { num: "03", icon: Radio, title: "Intelligent Observability", description: "Go beyond metrics and logs. AI-powered observability that predicts failures, auto-remediates incidents, and eliminates alert fatigue. Mean time to resolution reduced 70%+.", examples: ["Predictive alerting and anomaly detection", "Automated root cause analysis", "Self-healing runbooks and auto-remediation", "Reduced on-call burden for engineering teams"] },
  { num: "04", icon: Layers, title: "Legacy AI Modernization", description: "Your 15-year-old ERP wasn't built for AI. We don't replace it — we augment it. Data pipeline modernization, API layers for LLMs, gradual migration strategies.", examples: ["AI capabilities on legacy systems without replacing them", "Modern data pipelines from siloed sources", "Backward compatibility maintained throughout", "Zero downtime, incremental rollouts"] },
  { num: "05", icon: Cpu, title: "AI Platforms for Enterprises", description: "Helping companies run AI at scale. GPU infrastructure, MLOps pipelines, model deployment, and agentic workflow orchestration.", examples: ["GPU cluster provisioning and management", "MLOps pipelines (training to deployment to monitoring)", "Model serving at scale with cost controls", "Agentic workflow infrastructure"] },
  { num: "06", icon: Shield, title: "Autonomous Infrastructure", description: "Infrastructure that runs itself. Self-healing clusters, predictive scaling, and AI-driven chaos testing — built on top of your existing systems.", examples: ["Self-healing Kubernetes clusters", "Predictive autoscaling with ML models", "AI-driven chaos engineering and testing", "Autonomous cost optimization"] },
];

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

export default function ServicesSection() {
  return (
    <section id="services" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            What We Build
          </div>
          <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
            Production AI for the Real World
          </TextScramble>
          <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            Your legacy systems aren&apos;t dead — they need an intelligence layer. We build on top of what works, using 80% battle-tested tools and 20% custom engineering.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--fib-3)" }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.num} variants={fadeUp} className="refractive-card text-ds-text cursor-default" style={{ padding: "var(--fib-4)" }}>
                <div className="flex items-center justify-between" style={{ marginBottom: "var(--fib-3)" }}>
                  <div className="font-[family-name:var(--font-mono)]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm-dim)" }}>{service.num}</div>
                  <Icon size={24} style={{ color: "var(--color-ds-crystalline)", opacity: 0.4 }} strokeWidth={1} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>{service.title}</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-3)" }}>{service.description}</p>
                <ul>
                  {service.examples.map((ex) => (
                    <li key={ex} className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618, paddingLeft: "var(--fib-2)", marginBottom: "var(--fib-1)", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--color-ds-warm)" }}>+</span>{ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
