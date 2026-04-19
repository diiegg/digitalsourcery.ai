"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { StackedDiscs, BlobCluster, GeometricGrid, CrystallineFragment, WaveStructure, ConcentricRings } from "@/components/glyphs";

type GlyphComponent = typeof StackedDiscs;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

type Service = {
  span: string;
  Glyph: GlyphComponent;
  glyphLabel: string;
  label?: string;
  title: string;
  tagline: string;
  description: string;
  large?: boolean;
};

const services: Service[] = [
  {
    span: "lg:col-span-8",
    Glyph: BlobCluster,
    glyphLabel: "Unified intelligence",
    label: "Primary Service",
    title: "AI Platform Engineering",
    tagline: "Make machine intelligence work with what you already run.",
    description:
      "We integrate language models, autonomous operations, and intelligent tooling into existing systems without ripping and replacing. Engagements typically reach production within 90 days, scoped to one workload at a time.",
    large: true,
  },
  {
    span: "lg:col-span-4",
    Glyph: ConcentricRings,
    glyphLabel: "Telemetry signal",
    title: "Telemetry & Detection",
    tagline: "Detection calibrated against your incident history, not vendor defaults.",
    description:
      "OpenTelemetry pipelines wired to dependency graphs. Alert rules tuned per service.",
  },
  {
    span: "lg:col-span-4",
    Glyph: WaveStructure,
    glyphLabel: "Autonomous flow",
    title: "Self-healing infrastructure",
    tagline: "Operators for the recurring 80%, humans for the rest.",
    description:
      "Custom Kubernetes operators for the recurring incident types in your runbooks. If a senior engineer would not need to think, an operator can do it.",
  },
  {
    span: "lg:col-span-4",
    Glyph: StackedDiscs,
    glyphLabel: "Production AI platform",
    title: "AI Platforms",
    tagline: "Production-grade, not notebook-grade.",
    description:
      "GPU infrastructure, MLOps pipelines, model serving, and agentic workflow orchestration. Built for the engineers who will operate the system after we leave.",
  },
  {
    span: "lg:col-span-4",
    Glyph: CrystallineFragment,
    glyphLabel: "Cost optimization",
    title: "AI Cost Control",
    tagline: "Spend per outcome, not per call.",
    description:
      "Real-time token accounting, semantic caching, and routing by complexity. The first audit usually pays for itself.",
  },
];

const legacyService = {
  Glyph: GeometricGrid,
  glyphLabel: "Legacy system topology",
  title: "Legacy AI Modernization",
  tagline: "Old systems aren't dead. They need an interface.",
  description:
    "A 15-year-old ERP wasn't built for AI — but it doesn't need to be replaced. We add an event-driven interface, expose the data the model needs, and migrate incrementally.",
};

const pathDetails = [
  { title: "Seamless Injection", detail: "We add AI agents inside existing workflows so your team's velocity isn't broken by the transition." },
  { title: "Continuous Feedback", detail: "Closed-loop systems monitor each AI intervention and feed results back into the model." },
  { title: "Human-in-the-Loop", detail: "Critical decisions surface to dashboards. Senior engineers retain control over high-stakes changes." },
  { title: "Elastic Scaling", detail: "Predictive demand modeling so capacity arrives before the spike does, not after." },
];

export default function IntelligenceContent() {
  return (
    <main className="relative">
      {/* Hero */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end" style={{ gap: "var(--fib-5)" }}>
            <motion.div className="md:col-span-8" animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
              <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
                The Intelligence Layer
              </div>
              <h1 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, 80px)", lineHeight: 1.02, marginBottom: "var(--fib-5)" }}>
                Systems that adapt.
                <br />
                <span style={{ color: "var(--color-ds-headline-accent)" }}>Without surprising the on-call rotation.</span>
              </h1>
              <p className="text-ds-text-secondary max-w-2xl" style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.55 }}>
                Telemetry, remediation, AI cost control. The intelligence layer for production systems — built on what your team already runs, owned by them after we leave. What we recommend is what we&apos;ve operated.
              </p>
            </motion.div>

            {/* Right rail — what we operate today (turns the empty col-span-4 into proof) */}
            <motion.div
              className="md:col-span-3 md:col-start-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <div style={{ padding: "var(--fib-3)", border: "1px solid var(--color-ds-border)" }}>
                <span
                  className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                  style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-3)" }}
                >
                  What we operate today
                </span>
                <div className="flex flex-wrap" style={{ gap: "var(--fib-1)" }}>
                  {[
                    "Grafana",
                    "OpenTelemetry",
                    "Loki / Tempo",
                    "vLLM",
                    "BentoML",
                    "LiteLLM",
                    "Postgres + pgvector",
                    "ArgoCD",
                    "Kyverno / OPA",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-mono)] text-ds-text-secondary"
                      style={{
                        fontSize: "10px",
                        border: "1px solid var(--color-ds-border-light)",
                        padding: "2px 8px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services */}
      <section style={{ paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]" style={{ paddingTop: "var(--fib-6)" }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12" style={{ gap: "var(--fib-2)" }}>
            {services.map((s) => {
              const ServiceGlyph = s.Glyph;
              return (
                <motion.div key={s.title} variants={fadeUp} className={`${s.span} refractive-card flex flex-col justify-between relative overflow-hidden group`} style={{ padding: "var(--fib-5)", minHeight: s.large ? "380px" : "auto" }}>
                  <div className="absolute" style={{ top: "var(--fib-4)", right: "var(--fib-4)", opacity: s.large ? 0.45 : 0.5 }} aria-hidden="true">
                    <ServiceGlyph size={s.large ? 160 : 88} ariaLabel={s.glyphLabel} className="group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div>
                    {s.label && (
                      <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] block" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>{s.label}</span>
                    )}
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: s.large ? "var(--text-fib-lg)" : "var(--text-fib-md)", marginBottom: "var(--fib-2)", letterSpacing: "-0.01em" }}>{s.title}</h3>
                    <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>{s.tagline}</p>
                    <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, maxWidth: s.large ? "500px" : "none" }}>{s.description}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Legacy — full width */}
            <motion.div variants={fadeUp} className="lg:col-span-12 refractive-card flex flex-col md:flex-row items-start justify-between relative overflow-hidden group" style={{ padding: "var(--fib-5)", gap: "var(--fib-5)" }}>
              <div className="absolute" style={{ top: "var(--fib-4)", right: "var(--fib-4)", opacity: 0.45 }} aria-hidden="true">
                <legacyService.Glyph size={120} ariaLabel={legacyService.glyphLabel} className="group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div style={{ maxWidth: "640px" }}>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)", letterSpacing: "-0.01em" }}>{legacyService.title}</h3>
                <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>{legacyService.tagline}</p>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>{legacyService.description}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Intelligence Path */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-carbon)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <div className="flex flex-col md:flex-row" style={{ gap: "var(--fib-6)" }}>
            <motion.div className="md:w-1/3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
              <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
                The Intelligence Path
              </TextScramble>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
                Integration is structural, not a one-time event. Our engagement model weaves machine intelligence into the engineering lifecycle in three phases.
              </p>
              <div className="flex flex-col" style={{ gap: "var(--fib-2)" }}>
                {["01 Phase: Discovery", "02 Phase: Integration", "03 Phase: Autonomy"].map((phase) => (
                  <div key={phase} className="flex items-center" style={{ padding: "var(--fib-2) var(--fib-3)", border: "1px solid rgba(200, 208, 224, 0.08)" }}>
                    <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]" style={{ fontSize: "10px", color: "var(--color-ds-text-secondary)" }}>{phase}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ gap: "1px" }}>
              {pathDetails.map((d) => (
                <motion.div key={d.title} variants={fadeUp} style={{ padding: "var(--fib-4)", backgroundColor: "var(--color-ds-card)", border: "1px solid rgba(200, 208, 224, 0.04)" }}>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-2)" }}>{d.title}</h3>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>{d.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Antifragile Infrastructure */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--fib-6)" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
              <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
                Design Principle
              </div>
              <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-5)" }}>
                Antifragile Infrastructure
              </h2>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
                When agents and humans push changes at high frequency, infrastructure has to do more than survive — it has to absorb the change and improve. We implement systems where every failure leaves the next response stronger.
              </p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2" style={{ gap: "var(--fib-2)" }}>
              {[
                { Glyph: BlobCluster as GlyphComponent, glyphLabel: "Parallel branches", title: "Preview Environments", desc: "Every change gets an isolated full-stack replica before reaching production." },
                { Glyph: CrystallineFragment as GlyphComponent, glyphLabel: "State recovery", title: "Instant Rollbacks", desc: "Millisecond recovery by redirecting to a known-good deployment state." },
                { Glyph: WaveStructure as GlyphComponent, glyphLabel: "Autonomous remediation", title: "Autonomous Recovery", desc: "Systems detect anomalies and initiate remediation without human intervention." },
                { Glyph: ConcentricRings as GlyphComponent, glyphLabel: "Heartbeat signal", title: "Self-Healing Compute", desc: "Failed processes auto-route to healthy instances. No dropped requests." },
              ].map((item) => {
                const ItemGlyph = item.Glyph;
                return (
                  <motion.div key={item.title} variants={fadeUp} className="group relative overflow-hidden" style={{ padding: "var(--fib-4)", backgroundColor: "var(--color-ds-card)", border: "1px solid rgba(200, 208, 224, 0.04)" }}>
                    <div style={{ marginBottom: "var(--fib-3)", opacity: 0.7 }} aria-hidden="true">
                      <ItemGlyph size={48} ariaLabel={item.glyphLabel} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-2)" }}>{item.title}</h3>
                    <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618 }}>{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security & Guardrails */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-carbon)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} style={{ marginBottom: "var(--fib-6)" }}>
            <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
              Guardrails
            </div>
            <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)" }}>
              Security That Earns Speed
            </h2>
          </motion.div>

          {/* Stacked editorial — six guardrails in horizontal rows (mirrors Services / Stack / Recent Engagements rhythm) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col"
          >
            {[
              {
                Glyph: GeometricGrid as GlyphComponent,
                glyphLabel: "Policy lattice",
                title: "Policy Enforcement",
                description: "Infrastructure policies defined as code, not documentation. Every deployment validated against security, compliance, and architectural constraints before reaching production.",
                tags: ["OPA", "Kyverno", "Sentinel"],
              },
              {
                Glyph: ConcentricRings as GlyphComponent,
                glyphLabel: "Containment rings",
                title: "Blast Radius Containment",
                description: "Namespace isolation, network policies, and resource quotas so a bad deployment or misconfigured agent cannot cascade.",
                tags: ["Network Policies", "RBAC", "Resource Limits"],
              },
              {
                Glyph: StackedDiscs as GlyphComponent,
                glyphLabel: "Layered access",
                title: "Access Boundaries",
                description: "Zero-trust access for every deployment. SSO, role-based controls, and custom domains so only authorised users and agents touch the system.",
                tags: ["Zero-Trust", "SSO", "OIDC"],
              },
              {
                Glyph: BlobCluster as GlyphComponent,
                glyphLabel: "Continuous scan",
                title: "Continuous Compliance",
                description: "Automated scanning for misconfigurations, exposed secrets, and drift from desired state. Violations flagged before they become incidents.",
                tags: ["Config Scanning", "Secret Detection", "Drift Detection"],
              },
              {
                Glyph: WaveStructure as GlyphComponent,
                glyphLabel: "Bounded automation",
                title: "Agent Safety Controls",
                description: "Approval workflows, dry-run requirements, and scope restrictions so automation cannot exceed its mandate.",
                tags: ["Approval Gates", "Dry-Run", "Scope Limits"],
              },
              {
                Glyph: CrystallineFragment as GlyphComponent,
                glyphLabel: "Immutable facets",
                title: "Immutable Infrastructure",
                description: "No manual changes to running systems. Every modification flows through version-controlled pipelines with audit trails and rollback capability.",
                tags: ["GitOps", "Audit Trails", "Immutable Deploys"],
              },
            ].map((item, i) => {
              const GuardGlyph = item.Glyph;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="grid grid-cols-1 md:grid-cols-12"
                  style={{
                    gap: "var(--fib-3)",
                    padding: "var(--fib-5) 0",
                    borderTop: "1px solid var(--color-ds-border)",
                  }}
                >
                  <div className="md:col-span-4 flex items-start" style={{ gap: "var(--fib-3)" }}>
                    <GuardGlyph size={56} ariaLabel={item.glyphLabel} className="flex-shrink-0" />
                    <div className="flex flex-col" style={{ gap: "var(--fib-1)" }}>
                      <span
                        className="font-[family-name:var(--font-mono)]"
                        style={{ fontSize: "11px", color: "var(--color-ds-warm)", letterSpacing: "0.1em" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="font-[family-name:var(--font-display)] font-semibold text-white"
                        style={{ fontSize: "var(--text-fib-md)", letterSpacing: "-0.01em" }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, maxWidth: "70ch", marginBottom: "var(--fib-3)" }}>
                      {item.description}
                    </p>
                    <div className="flex flex-wrap" style={{ gap: "var(--fib-1)" }}>
                      {item.tags.map((tag) => (
                        <span key={tag} className="font-[family-name:var(--font-mono)] text-ds-text-dim" style={{ fontSize: "10px", border: "1px solid var(--color-ds-border-light)", padding: "2px 8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
            <div style={{ borderTop: "1px solid var(--color-ds-border)" }} />
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="ambient-glow" style={{ paddingTop: "var(--fib-8)", paddingBottom: "var(--fib-8)" }}>
        <div className="mx-auto max-w-4xl px-[var(--fib-5)]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
            <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
              Where to start
            </div>
            <h2 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.1, marginBottom: "var(--fib-6)" }}>
              Which capability does your infrastructure need first?
            </h2>
            <div className="flex flex-col md:flex-row items-start" style={{ gap: "var(--fib-3)" }}>
              <a href="/contact" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}>
                <span>Start a Discovery</span>
              </a>
              <a href="/stack" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200 ds-cta-prismatic" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)", border: "1px solid rgba(200, 208, 224, 0.1)", color: "var(--color-ds-text)" }}>
                See the reference stack
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
