"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const services = [
  {
    title: "Cognitive IDP",
    subtitle: "Your developers' time back. Instantly.",
    problem:
      "Your developers waste 40% of their sprint wrestling with YAML configs, hunting down microservice owners, and waiting 3 days for infrastructure tickets.",
    solution:
      "Ask your IDP: 'Deploy a Python API with Redis caching and PostgreSQL on production-similar staging.' Three minutes later, it's live — with golden-path guardrails, automatic SBOM generation, and SLO dashboards configured.",
    outcomes: [
      "MTTR drops from days to minutes",
      "Developer NPS jumps 40+ points",
      "Platform teams become force multipliers, not bottlenecks",
      "Infrastructure ticket volume: 80-95% reduction",
    ],
    stack: "Backstage, Kubernetes, ArgoCD, Crossplane, Pulumi",
  },
  {
    title: "Agentic Workflows",
    subtitle: "Infrastructure that responds before you notice.",
    problem:
      "Your on-call engineers get paged at 3 AM for the same issues every week. Manual runbooks, tribal knowledge, and copy-paste remediation. Alert fatigue is burning out your team.",
    solution:
      "AI-driven incident response that detects anomalies, diagnoses root causes, and executes remediation automatically. Your engineers sleep through alerts because the system handles 80% of incidents without human intervention.",
    outcomes: [
      "80%+ incidents auto-remediated",
      "Mean time to resolution: minutes, not hours",
      "On-call burden reduced dramatically",
      "System learns from every incident",
    ],
    stack: "LangChain, OpenAI/Anthropic, Vector DB, Kubernetes Operators",
  },
  {
    title: "Eco-FinOps",
    subtitle: "Cut cloud costs 40-60% without sacrificing performance.",
    problem:
      "Your cloud bill grows faster than your revenue. Nobody knows which team, service, or environment is burning money. The CFO wants answers you can't give.",
    solution:
      "Automated cost attribution, predictive budgeting, and intelligent resource optimization. Every dollar traced to a team, service, and business outcome. Spot waste before it compounds.",
    outcomes: [
      "40-60% cloud cost reduction",
      "Real-time cost attribution per team and service",
      "Predictive budget alerts before overruns",
      "Carbon-aware scheduling for sustainability goals",
    ],
    stack: "Prometheus, Grafana, OpenCost, Kubecost, Custom Controllers",
  },
];

const process = [
  {
    phase: "01",
    title: "Discover",
    duration: "Week 1-2",
    detail:
      "Deep system audit. We map dependencies, bottlenecks, and failure modes. Train context models on your architecture. Identify the top 3 automation opportunities with ROI projections.",
  },
  {
    phase: "02",
    title: "Architect",
    duration: "Week 3-5",
    detail:
      "Design self-healing topologies, agentic workflows, and platform interfaces. Your team reviews architecture decisions with us — no black boxes.",
  },
  {
    phase: "03",
    title: "Automate",
    duration: "Week 6-10",
    detail:
      "Deploy autonomous pipelines, LLM-powered IDPs, and agentic guardrails. We pair-program with your engineers — this is knowledge transfer, not gatekeeping.",
  },
  {
    phase: "04",
    title: "Evolve",
    duration: "Week 11+",
    detail:
      "Continuous model tuning, system optimization, and monitoring. Your infrastructure learns from incidents and patches itself before you wake up.",
  },
];

export default function FoundationContent() {
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
              Powered by BlackMagickOps
            </p>
            <h1
              className="font-[family-name:var(--font-display)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
              style={{
                fontSize: "clamp(var(--text-fib-lg), 6vw, var(--text-fib-2xl))",
                marginBottom: "var(--fib-4)",
              }}
            >
              Your Infrastructure
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>
                Is Holding You Back.
              </span>
            </h1>
            <p
              className="text-ds-text-secondary max-w-lg"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}
            >
              Slow deploys. Runaway cloud costs. Engineers stuck writing YAML instead of features.
              We build internal platforms that fix all three — with self-healing infrastructure,
              developer self-service, and FinOps automation. Delivered in 12 weeks.
            </p>
            <a
              href="#contact"
              className="ds-cta inline-block"
              style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) var(--fib-3)" }}
            >
              Free Infrastructure Assessment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "var(--fib-6)" }}
          >
            <TextScramble
              as="h2"
              className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
            >
              What We Actually Do
            </TextScramble>
          </motion.div>

          <div className="flex flex-col" style={{ gap: "var(--fib-5)" }}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="themed-card rounded-xl"
                style={{
                  backgroundColor: "var(--color-ds-card)",
                  border: "1px solid var(--color-ds-card-border)",
                  padding: "var(--fib-5)",
                }}
              >
                <h3
                  className="font-[family-name:var(--font-display)] font-bold text-white"
                  style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-1)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-[family-name:var(--font-display)]"
                  style={{
                    fontSize: "var(--text-fib-base)",
                    color: "var(--color-ds-headline-accent)",
                    marginBottom: "var(--fib-4)",
                  }}
                >
                  {service.subtitle}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--fib-4)" }}>
                  <div>
                    <p
                      className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                      style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
                    >
                      The Hard Way
                    </p>
                    <p
                      className="text-ds-text-secondary"
                      style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-3)" }}
                    >
                      {service.problem}
                    </p>

                    <p
                      className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                      style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
                    >
                      The BlackMagickOps Way
                    </p>
                    <p
                      className="text-ds-text-secondary"
                      style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
                    >
                      {service.solution}
                    </p>
                  </div>

                  <div>
                    <p
                      className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                      style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
                    >
                      What Changes
                    </p>
                    <ul style={{ marginBottom: "var(--fib-3)" }}>
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

                    <p
                      className="font-[family-name:var(--font-mono)] text-ds-text-dim"
                      style={{
                        fontSize: "11px",
                        borderTop: "1px solid var(--color-ds-border-light)",
                        paddingTop: "var(--fib-2)",
                      }}
                    >
                      Stack: {service.stack}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
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
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "var(--fib-6)" }}
          >
            <TextScramble
              as="h2"
              className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
            >
              How We Work
            </TextScramble>
            <p
              className="text-ds-text-secondary max-w-md"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginTop: "var(--fib-3)" }}
            >
              No 200-page docs. No drive-by consulting. We pair-program with your team
              through every phase until your infrastructure runs itself.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--fib-3)" }}>
            {process.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="themed-card rounded-xl"
                style={{
                  backgroundColor: "var(--color-ds-card)",
                  border: "1px solid var(--color-ds-card-border)",
                  padding: "var(--fib-4)",
                }}
              >
                <div
                  className="font-[family-name:var(--font-mono)]"
                  style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-phase-num)", marginBottom: "var(--fib-3)" }}
                >
                  {step.phase}
                </div>
                <h3
                  className="font-[family-name:var(--font-display)] font-semibold"
                  style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-1)" }}
                >
                  {step.title}
                </h3>
                <div
                  className="text-ds-text-dim font-[family-name:var(--font-mono)]"
                  style={{ fontSize: "var(--text-fib-xs)", marginBottom: "var(--fib-2)" }}
                >
                  {step.duration}
                </div>
                <p
                  className="text-ds-text-secondary"
                  style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
                >
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        style={{
          paddingTop: "var(--fib-8)",
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
            <h2
              className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))",
                marginBottom: "var(--fib-4)",
              }}
            >
              Ready to make your infrastructure a competitive advantage?
            </h2>
            <p
              className="text-ds-text-secondary max-w-lg"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}
            >
              Free infrastructure assessment. We&apos;ll map your bottlenecks,
              identify the top 3 automation opportunities, and give you a
              clear ROI projection. No commitment.
            </p>
            <a
              href="mailto:hello@digitalsourcery.ai"
              className="ds-cta inline-block"
              style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) var(--fib-4)" }}
            >
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
