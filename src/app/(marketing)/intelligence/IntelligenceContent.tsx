"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { Eye, DollarSign, Radio, Layers, Cpu, Shield } from "lucide-react";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

const services = [
  {
    span: "lg:col-span-8",
    icon: Eye,
    label: "Primary Service",
    title: "AI-Driven Platform Engineering",
    tagline: "Make AI work with your existing infrastructure.",
    description: "We integrate LLMs, autonomous operations, and intelligent tooling into legacy systems — without ripping and replacing. Production-ready in 90 days, not 12 months.",
    outcomes: ["AI-powered observability and autonomous incident response", "Self-healing infrastructure and predictive scaling", "Integration with existing monitoring (Prometheus, Datadog, Splunk)", "Knowledge transfer so your team owns it"],
    tested: "Backstage vs Port vs Cortex vs custom",
    verdict: "Backstage with custom AI plugins for enterprise. Port for speed-to-value.",
    large: true,
  },
  {
    span: "lg:col-span-4",
    icon: Radio,
    title: "Intelligent Observability",
    tagline: "AI detecting problems before humans do.",
    description: "Go beyond metrics and logs. AI-powered observability that predicts failures, auto-remediates incidents, and eliminates alert fatigue. MTTR reduced 70%+.",
    outcomes: ["Predictive alerting and anomaly detection", "Automated root cause analysis", "Self-healing runbooks", "Reduced on-call burden"],
    tested: "Datadog vs Grafana+Prometheus vs Dynatrace",
    verdict: "Grafana + custom ML pipeline: 91% detection, 40% lower cost.",
  },
  {
    span: "lg:col-span-4",
    icon: Shield,
    title: "Autonomous Infrastructure",
    tagline: "Infrastructure that runs itself.",
    description: "Self-healing clusters, predictive scaling, and AI-driven chaos testing — built on top of your existing systems, not replacing them.",
    outcomes: ["Self-healing Kubernetes clusters", "Predictive autoscaling with ML", "AI-driven chaos engineering", "Autonomous cost optimization"],
    tested: "Custom K8s operators vs PagerDuty vs Shoreline",
    verdict: "Custom operators: 87% auto-healed in <2 minutes.",
  },
  {
    span: "lg:col-span-4",
    icon: Cpu,
    title: "AI Platforms for Enterprises",
    tagline: "Run AI at scale. Not just prototypes.",
    description: "GPU infrastructure, MLOps pipelines, model deployment, and agentic workflow orchestration — the heavy lifting that makes AI production-ready.",
    outcomes: ["GPU cluster provisioning and management", "MLOps pipelines end-to-end", "Model serving with cost controls", "Agentic workflow infrastructure"],
    tested: "vLLM vs TGI vs BentoML vs SageMaker",
    verdict: "vLLM: 3x throughput. BentoML for multi-model routing.",
  },
  {
    span: "lg:col-span-4",
    icon: DollarSign,
    title: "AI Cost Optimization",
    tagline: "Stop the GPU bill from killing your AI initiative.",
    description: "Real-time token tracking, semantic caching, intelligent model routing, and budget enforcement. 73% of companies exceed AI budgets — we fix that.",
    outcomes: ["40-60% inference cost reduction", "Real-time cost-per-prediction dashboards", "Automatic budget alerts", "Model routing by complexity"],
    tested: "Semantic caching, model routing, token budgets",
    verdict: "Combined approach: 52% total cost reduction.",
  },
];

const legacyService = {
  icon: Layers,
  title: "Legacy AI Modernization",
  tagline: "Your old systems aren't dead. They need an intelligence layer.",
  description: "Your 15-year-old ERP wasn't built for AI. We don't replace it — we augment it. Data pipeline modernization, API layers for LLMs, gradual migration strategies that don't require big-bang rewrites.",
  outcomes: ["AI capabilities on systems that predate Docker", "Zero disruption to existing operations", "Real-time data flowing from legacy to AI", "Incremental modernization — no big-bang risk"],
  tested: "Event bridge vs API wrapper vs data lake sync",
  verdict: "Event bridges for real-time. Data lake sync for batch. Never API wrappers for critical paths.",
};

const pathDetails = [
  { title: "Seamless Injection", detail: "We inject AI agents directly into existing workflows, ensuring your team's velocity isn't compromised by the transition to autonomous operations." },
  { title: "Continuous Feedback", detail: "Closed-loop systems monitor the impact of AI interventions in real-time, feeding results back into the model for perpetual refinement." },
  { title: "Human-in-the-Loop", detail: "Critical decisions are surfaced via dashboards, allowing senior engineers to supervise high-stakes changes in strategy." },
  { title: "Elastic Scaling", detail: "Infrastructure that breathes with your traffic, using predictive demand modeling to scale before the spike hits." },
];

export default function IntelligenceContent() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="flex items-end" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end" style={{ gap: "var(--fib-5)" }}>
            <motion.div className="md:col-span-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
                The Intelligence Layer
              </div>
              <h1 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-white" style={{ fontSize: "var(--text-fib-2xl)", lineHeight: 0.95, marginBottom: "var(--fib-5)" }}>
                Make AI Work
                <br />
                <span style={{ color: "var(--color-ds-headline-accent)" }}>in Production</span>
              </h1>
              <p className="text-ds-text-secondary max-w-2xl" style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.618 }}>
                Six capabilities that turn your infrastructure from passive to intelligent. Every recommendation backed by real testing. Every tool deployed before we recommend it.
              </p>
            </motion.div>
            <motion.div className="md:col-span-4 hidden md:flex justify-end" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }}>
              <div className="flex items-center justify-center" style={{ width: "89px", height: "89px", border: "1px solid rgba(200, 208, 224, 0.15)" }}>
                <div className="animate-pulse" style={{ width: "55px", height: "55px", border: "1px solid var(--color-ds-warm-dim)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section style={{ paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]" style={{ paddingTop: "var(--fib-6)" }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12" style={{ gap: "var(--fib-2)" }}>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={fadeUp} className={`${s.span} refractive-card flex flex-col justify-between relative overflow-hidden group`} style={{ padding: "var(--fib-5)", minHeight: s.large ? "380px" : "auto" }}>
                  {/* Decorative icon */}
                  <div className="absolute top-[var(--fib-4)] right-[var(--fib-4)]">
                    <Icon size={s.large ? 64 : 32} style={{ color: "var(--color-ds-crystalline)", opacity: 0.08 }} strokeWidth={1} className="group-hover:opacity-[0.15] transition-opacity duration-500" />
                  </div>

                  <div>
                    {s.label && (
                      <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] block" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>{s.label}</span>
                    )}
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: s.large ? "var(--text-fib-lg)" : "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>{s.title}</h3>
                    <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>{s.tagline}</p>
                    <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-4)", maxWidth: s.large ? "500px" : "none" }}>{s.description}</p>

                    {/* Outcomes */}
                    <ul style={{ marginBottom: "var(--fib-4)" }}>
                      {s.outcomes.map((o) => (
                        <li key={o} className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618, paddingLeft: "var(--fib-2)", marginBottom: "var(--fib-1)", position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: "var(--color-ds-warm)" }}>+</span>{o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tested/Verdict footer */}
                  <div style={{ borderTop: "1px solid rgba(200, 208, 224, 0.06)", paddingTop: "var(--fib-3)" }}>
                    <p className="font-[family-name:var(--font-mono)]" style={{ fontSize: "10px", color: "var(--color-ds-warm-dim)", marginBottom: "var(--fib-1)" }}>Tested: {s.tested}</p>
                    <p className="font-[family-name:var(--font-display)] font-medium" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)" }}>{s.verdict}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Legacy — full width */}
            <motion.div variants={fadeUp} className="lg:col-span-12 refractive-card flex flex-col md:flex-row items-start justify-between relative overflow-hidden group" style={{ padding: "var(--fib-5)", gap: "var(--fib-5)" }}>
              <div className="absolute top-[var(--fib-4)] right-[var(--fib-4)]">
                <Layers size={48} style={{ color: "var(--color-ds-crystalline)", opacity: 0.08 }} strokeWidth={1} className="group-hover:opacity-[0.15] transition-opacity duration-500" />
              </div>
              <div style={{ maxWidth: "600px" }}>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)" }}>{legacyService.title}</h3>
                <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>{legacyService.tagline}</p>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-4)" }}>{legacyService.description}</p>
                <ul>
                  {legacyService.outcomes.map((o) => (
                    <li key={o} className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618, paddingLeft: "var(--fib-2)", marginBottom: "var(--fib-1)", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--color-ds-warm)" }}>+</span>{o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0" style={{ borderLeft: "1px solid rgba(200, 208, 224, 0.06)", paddingLeft: "var(--fib-4)" }}>
                <p className="font-[family-name:var(--font-mono)]" style={{ fontSize: "10px", color: "var(--color-ds-warm-dim)", marginBottom: "var(--fib-1)" }}>Tested: {legacyService.tested}</p>
                <p className="font-[family-name:var(--font-display)] font-medium" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)" }}>{legacyService.verdict}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Intelligence Path */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-carbon)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <div className="flex flex-col md:flex-row" style={{ gap: "var(--fib-6)" }}>
            {/* Left — heading + phase list */}
            <motion.div className="md:w-1/3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
                The Intelligence Path
              </TextScramble>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
                Integration isn&apos;t an event — it&apos;s a structural evolution. Our methodology weaves AI into the fabric of your engineering lifecycle.
              </p>
              <div className="flex flex-col" style={{ gap: "var(--fib-2)" }}>
                {["01 Phase: Discovery", "02 Phase: Integration", "03 Phase: Autonomy"].map((phase) => (
                  <div key={phase} className="flex items-center justify-between cursor-pointer group" style={{ padding: "var(--fib-2) var(--fib-3)", border: "1px solid rgba(200, 208, 224, 0.08)", transition: "border-color 0.3s ease" }}>
                    <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]" style={{ fontSize: "10px", color: "var(--color-ds-text-secondary)" }}>{phase}</span>
                    <span className="text-ds-text-dim group-hover:text-[var(--color-ds-warm)] transition-colors" style={{ fontSize: "14px" }}>+</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — detail cards */}
            <motion.div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ gap: "1px" }}>
              {pathDetails.map((d) => (
                <motion.div key={d.title} variants={fadeUp} style={{ padding: "var(--fib-4)", backgroundColor: "var(--color-ds-card)", border: "1px solid rgba(200, 208, 224, 0.04)" }}>
                  <h4 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-2)" }}>{d.title}</h4>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>{d.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ambient-glow" style={{ paddingTop: "var(--fib-8)", paddingBottom: "var(--fib-8)" }}>
        <div className="mx-auto max-w-4xl px-[var(--fib-5)]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
              Ready for the Shift?
            </div>
            <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.1, marginBottom: "var(--fib-6)" }}>
              Which capability does your infrastructure need first?
            </TextScramble>
            <div className="flex flex-col md:flex-row items-start" style={{ gap: "var(--fib-3)" }}>
              <a href="mailto:hello@digitalsourcery.ai" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 ds-cta-prismatic" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}>
                Schedule a Discovery Call
              </a>
              <a href="/stack" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200 ds-cta-prismatic" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)", border: "1px solid rgba(200, 208, 224, 0.1)", color: "var(--color-ds-text)" }}>
                View Our Stack
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
