"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { StackedDiscs, BlobCluster, GeometricGrid, CrystallineFragment, WaveStructure, ConcentricRings } from "@/components/glyphs";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

const criteria = [
  {
    n: "01",
    Glyph: StackedDiscs,
    glyphLabel: "Foundational stability",
    title: "Operate before optimize",
    body: "Tools that hold under failure beat tools that demo well — boring dependability is a feature.",
  },
  {
    n: "02",
    Glyph: BlobCluster,
    glyphLabel: "Open ecosystem",
    title: "Open by default",
    body: "We pick what your team can re-host without a procurement meeting; exit cost matters more than vendor convenience.",
  },
  {
    n: "03",
    Glyph: CrystallineFragment,
    glyphLabel: "End-to-end cost",
    title: "Cost is a system property",
    body: "Cheaper inference doesn't help if the architecture around it leaks dollars per second; we measure end-to-end.",
  },
  {
    n: "04",
    Glyph: ConcentricRings,
    glyphLabel: "Traceable signal",
    title: "Observable, not just monitored",
    body: "If you can't trace it to a line of code, it's invisible when it matters.",
  },
  {
    n: "05",
    Glyph: GeometricGrid,
    glyphLabel: "Handoff topology",
    title: "Owned by your team",
    body: 'Success isn\'t "they kept us" — it\'s "they can run this without us." Handoff is the deliverable.',
  },
];

const stack = [
  {
    n: "01",
    Glyph: GeometricGrid,
    glyphLabel: "Cluster topology",
    domain: "Orchestration & Compute",
    primary: "Managed Kubernetes — EKS, GKE, AKS",
    why: "Unmatched control-plane and ecosystem gravity for workloads that need failure isolation and gradual rollouts.",
    swap: "Nomad for teams under ~20 services with no GPU workloads. ECS or Cloud Run for single-region simplicity.",
  },
  {
    n: "02",
    Glyph: ConcentricRings,
    glyphLabel: "Inference signal",
    domain: "AI Inference & Serving",
    primary: "vLLM + BentoML, fronted by LiteLLM",
    why: "PagedAttention throughput on open weights, production wrapping via BentoML, one-call API normalisation across providers.",
    swap: "Bedrock or Vertex AI when compliance forces a managed provider, or when volume doesn't justify GPU operations.",
  },
  {
    n: "03",
    Glyph: BlobCluster,
    glyphLabel: "Unified data",
    domain: "Data Layer",
    primary: "Postgres with pgvector. Kafka or NATS for events.",
    why: "Postgres handles vector workloads to several million rows without a separate database; Kafka for durable replay, NATS for low-latency pub/sub.",
    swap: "Qdrant or Weaviate past ~50M vectors when recall outweighs transactional consistency. Pulsar or Redpanda where the team already runs them.",
  },
  {
    n: "04",
    Glyph: WaveStructure,
    glyphLabel: "Telemetry streams",
    domain: "Observability",
    primary: "Grafana + OpenTelemetry. Loki, Tempo, Mimir.",
    why: "OTEL keeps you portable; dashboards and alert rules are the deliverable, not the storage backend.",
    swap: "Datadog or Splunk where already paid for and the lock-in is acceptable. We do not migrate observability for fashion.",
  },
  {
    n: "05",
    Glyph: StackedDiscs,
    glyphLabel: "Pipeline layers",
    domain: "Delivery & GitOps",
    primary: "GitHub Actions for CI. ArgoCD for Kubernetes deploys.",
    why: "Actions sits where the code already lives; ArgoCD inverts the trust model so the cluster pulls from Git rather than CI pushing in.",
    swap: "GitLab CI when GitLab is the SCM. Flagger for progressive delivery beyond what Argo Rollouts handles cleanly.",
  },
  {
    n: "06",
    Glyph: CrystallineFragment,
    glyphLabel: "Declarative facets",
    domain: "Infrastructure as Code",
    primary: "OpenTofu — state in S3 with DynamoDB lock (or equivalent).",
    why: "Declarative, reviewable, diffable; state integrity is the load-bearing constraint, not module elegance.",
    swap: "Pulumi when the team writes infra in TypeScript or Python and wants types around it. CDK for AWS-only shops with deep CloudFormation tenure.",
  },
];

const antiDefaults = [
  { title: "Managed everything", body: "Convenience compounds into invisible cost and lock-in." },
  { title: "Custom orchestrators in greenfield", body: "The second team to inherit it loses a week." },
  { title: "Sidecar-everything service mesh", body: "Operational surface usually outgrows the value." },
  { title: '"AI-native" databases as primary stores', body: "Fast enough at small scale. Ambiguous at large." },
];

export default function StackContent() {
  return (
    <main className="relative">

      {/* === HERO === */}
      <section className="flex flex-col items-stretch" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)" }}>
            <motion.div
              className="md:col-span-8"
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              <div
                className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]"
                style={{
                  fontSize: "var(--text-fib-xs)",
                  color: "var(--color-ds-warm)",
                  border: "1px solid var(--color-ds-warm-dim)",
                  padding: "var(--fib-1) var(--fib-2)",
                  marginBottom: "var(--fib-4)",
                }}
              >
                Reference Stack
              </div>
              <h1
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white"
                style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, 80px)", lineHeight: 1.02, marginBottom: "var(--fib-5)" }}
              >
                The tools we reach for.
                <br />
                <span style={{ color: "var(--color-ds-headline-accent)" }}>The reasons we change our mind.</span>
              </h1>
              <p
                className="text-ds-text-secondary"
                style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.55, maxWidth: "65ch" }}
              >
                A consultancy doesn&apos;t sell tools. This is the box we open by default — the rationale that put each item in it, and the conditions that take it back out.
              </p>
            </motion.div>

            <motion.div
              className="md:col-span-4 md:self-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="refractive-card flex flex-col" style={{ padding: "var(--fib-4)", gap: "var(--fib-3)" }}>
                <span
                  className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]"
                  style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}
                >
                  Last reviewed
                </span>
                <span
                  className="font-[family-name:var(--font-display)] font-bold text-white"
                  style={{ fontSize: "var(--text-fib-md)" }}
                >
                  Q1 · 2026
                </span>
                <span
                  className="font-[family-name:var(--font-mono)]"
                  style={{ fontSize: "11px", color: "var(--color-ds-warm)", lineHeight: 1.5 }}
                >
                  Updated when we change our mind, not on a schedule.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === SELECTION CRITERIA === */}
      <section
        style={{
          paddingTop: "var(--fib-6)",
          paddingBottom: "var(--fib-7)",
          borderTop: "1px solid var(--color-ds-border)",
        }}
      >
        <div className="ds-container">
          <div
            className="grid grid-cols-1 md:grid-cols-12"
            style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}
          >
            <div className="md:col-span-5">
              <span
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}
              >
                How we choose
              </span>
              <TextScramble
                as="h2"
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white"
                style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.0 }}
              >
                Five filters
              </TextScramble>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:self-end">
              <p
                className="text-ds-text-secondary"
                style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, maxWidth: "55ch" }}
              >
                Every component runs through these before it earns its slot. None of them are clever. All of them are the conditions a system has to meet to still be operable in two years.
              </p>
            </div>
          </div>

          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 0, listStyle: "none", padding: 0 }}
          >
            {criteria.map((c, i) => {
              const isLastInColumn =
                i === criteria.length - 1 || (criteria.length % 2 === 0 && i === criteria.length - 2);
              const CritGlyph = c.Glyph;
              return (
                <motion.li
                  key={c.n}
                  variants={fadeUp}
                  className="flex"
                  style={{
                    gap: "var(--fib-3)",
                    padding: "var(--fib-5) var(--fib-4)",
                    borderTop: "1px solid var(--color-ds-border)",
                    borderBottom: isLastInColumn ? "1px solid var(--color-ds-border)" : "none",
                  }}
                >
                  <div className="flex flex-col items-start" style={{ gap: "var(--fib-2)", flexShrink: 0 }}>
                    <CritGlyph size={48} ariaLabel={c.glyphLabel} />
                    <span
                      className="font-[family-name:var(--font-mono)]"
                      style={{
                        fontSize: "11px",
                        color: "var(--color-ds-warm)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {c.n}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-[family-name:var(--font-display)] font-semibold text-white"
                      style={{
                        fontSize: "var(--text-fib-md)",
                        marginBottom: "var(--fib-2)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="text-ds-text-secondary"
                      style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.6, maxWidth: "55ch" }}
                    >
                      {c.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </section>

      {/* === THE STACK TODAY === */}
      <section
        style={{
          paddingTop: "var(--fib-6)",
          paddingBottom: "var(--fib-7)",
          borderTop: "1px solid var(--color-ds-border)",
          backgroundColor: "var(--color-ds-carbon)",
        }}
      >
        <div className="ds-container">
          <div
            className="grid grid-cols-1 md:grid-cols-12"
            style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}
          >
            <div className="md:col-span-7">
              <span
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}
              >
                What&apos;s in the box
              </span>
              <h2
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white"
                style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.0 }}
              >
                Defaults, with their conditions.
              </h2>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col"
          >
            {stack.map((s) => {
              const StackGlyph = s.Glyph;
              return (
              <motion.article
                key={s.n}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-12"
                style={{
                  gap: "var(--fib-3)",
                  padding: "var(--fib-5) 0",
                  borderTop: "1px solid var(--color-ds-border)",
                }}
              >
                <div
                  className="md:col-span-3 flex items-start"
                  style={{ gap: "var(--fib-3)" }}
                >
                  <StackGlyph size={56} ariaLabel={s.glyphLabel} className="flex-shrink-0" />
                  <div className="flex flex-col" style={{ gap: "var(--fib-1)" }}>
                    <span
                      className="font-[family-name:var(--font-mono)]"
                      style={{
                        fontSize: "11px",
                        color: "var(--color-ds-warm)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {s.n}
                    </span>
                    <h3
                      className="font-[family-name:var(--font-display)] font-semibold text-white"
                      style={{ fontSize: "var(--text-fib-md)", letterSpacing: "-0.01em" }}
                    >
                      {s.domain}
                    </h3>
                  </div>
                </div>

                <div
                  className="md:col-span-9 grid grid-cols-1 md:grid-cols-2"
                  style={{ gap: "var(--fib-4)" }}
                >
                  <div>
                    <span
                      className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]"
                      style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-2)" }}
                    >
                      Default
                    </span>
                    <p
                      className="font-[family-name:var(--font-display)] font-medium text-white"
                      style={{
                        fontSize: "var(--text-fib-base)",
                        marginBottom: "var(--fib-3)",
                        letterSpacing: "-0.005em",
                        lineHeight: 1.4,
                      }}
                    >
                      {s.primary}
                    </p>
                    <p
                      className="text-ds-text-secondary"
                      style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.65, maxWidth: "50ch" }}
                    >
                      {s.why}
                    </p>
                  </div>
                  <div>
                    <span
                      className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]"
                      style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}
                    >
                      Swap when
                    </span>
                    <p
                      className="text-ds-text-secondary"
                      style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.65, maxWidth: "50ch" }}
                    >
                      {s.swap}
                    </p>
                  </div>
                </div>
              </motion.article>
              );
            })}
            <div style={{ borderTop: "1px solid var(--color-ds-border)" }} />
          </motion.div>
        </div>
      </section>

      {/* === ANTI-DEFAULTS === */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)" }}>
            <div className="md:col-span-5">
              <span
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}
              >
                What we don&apos;t lead with
              </span>
              <h2
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white"
                style={{
                  fontSize: "var(--text-fib-lg)",
                  lineHeight: 1.05,
                  marginBottom: "var(--fib-4)",
                  maxWidth: "22ch",
                }}
              >
                A short list of defaults we avoid unless an explicit reason puts them on the table.
              </h2>
            </div>

            <motion.dl
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              className="md:col-span-6 md:col-start-7 flex flex-col"
              style={{ gap: 0 }}
            >
              {antiDefaults.map((a, i) => (
                <motion.div
                  key={a.title}
                  variants={fadeUp}
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{
                    gap: "var(--fib-3)",
                    padding: "var(--fib-4) 0",
                    borderTop: i === 0 ? "1px solid var(--color-ds-border)" : "none",
                    borderBottom: "1px solid var(--color-ds-border)",
                  }}
                >
                  <dt
                    className="font-[family-name:var(--font-display)] font-medium text-white"
                    style={{ fontSize: "var(--text-fib-base)", letterSpacing: "-0.005em", lineHeight: 1.35 }}
                  >
                    {a.title}
                  </dt>
                  <dd
                    className="text-ds-text-secondary"
                    style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.6 }}
                  >
                    {a.body}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section
        style={{
          paddingTop: "var(--fib-6)",
          paddingBottom: "var(--fib-7)",
          borderTop: "1px solid var(--color-ds-border)",
        }}
      >
        <div className="ds-container">
          <motion.div
            className="refractive-card relative overflow-hidden flex flex-col items-start"
            style={{ padding: "var(--fib-7) var(--fib-5)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <div
              className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(227, 204, 177, 0.06) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            <div
              className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]"
              style={{
                fontSize: "var(--text-fib-xs)",
                color: "var(--color-ds-warm)",
                border: "1px solid var(--color-ds-warm-dim)",
                padding: "var(--fib-1) var(--fib-2)",
                marginBottom: "var(--fib-4)",
              }}
            >
              Your stack, reviewed
            </div>

            <TextScramble
              as="h2"
              className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white"
              style={{
                fontSize: "var(--text-fib-xl)",
                lineHeight: 1.05,
                marginBottom: "var(--fib-4)",
                maxWidth: "22ch",
              }}
            >
              Want a reading on yours?
            </TextScramble>

            <p
              className="text-ds-text-secondary"
              style={{
                fontSize: "var(--text-fib-base)",
                lineHeight: 1.618,
                marginBottom: "var(--fib-6)",
                maxWidth: "55ch",
              }}
            >
              Send us your current architecture. You&apos;ll get back what we&apos;d keep, what we&apos;d reach for instead, and the rationale — in writing, in a week, no slides.
            </p>

            <div className="flex flex-col md:flex-row" style={{ gap: "var(--fib-3)" }}>
              <a
                href="/contact"
                className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn"
                style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}
              >
                <span>Request a stack review</span>
              </a>
              <a
                href="/intelligence"
                className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200 ds-cta-prismatic"
                style={{
                  fontSize: "var(--text-fib-sm)",
                  padding: "var(--fib-3) var(--fib-5)",
                  border: "1px solid rgba(200, 208, 224, 0.1)",
                  color: "var(--color-ds-text)",
                }}
              >
                See intelligence services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
