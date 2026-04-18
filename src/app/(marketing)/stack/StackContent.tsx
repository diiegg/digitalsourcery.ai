"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

const criteria = [
  {
    n: "01",
    title: "Operate before optimize",
    body: "Tools that hold under failure beat tools that demo well. Boring dependability is a feature, not a compromise.",
  },
  {
    n: "02",
    title: "Open by default",
    body: "Exit cost matters more than vendor convenience. We pick what your team can re-host without a procurement meeting.",
  },
  {
    n: "03",
    title: "Cost is a system property",
    body: "A cheaper inference call doesn't help if the architecture around it leaks dollars per second. We measure end-to-end.",
  },
  {
    n: "04",
    title: "Observable, not just monitored",
    body: "If you can't trace it to a line of code, it's invisible when it matters. Every layer instrumented at install time.",
  },
  {
    n: "05",
    title: "Owned by your team",
    body: 'The success metric isn\'t "they kept us." It\'s "they can run this without us." Handoff is the deliverable.',
  },
];

const stack = [
  {
    n: "01",
    domain: "Orchestration & Compute",
    primary: "Managed Kubernetes — EKS, GKE, AKS",
    why: "Control-plane and ecosystem gravity remain unmatched once a workload needs failure isolation, scheduled batching, and gradual rollouts.",
    swap: "Nomad for teams under ~20 services with no GPU workloads. ECS or Cloud Run for single-region simplicity.",
  },
  {
    n: "02",
    domain: "AI Inference & Serving",
    primary: "vLLM + BentoML, fronted by LiteLLM",
    why: "vLLM gives PagedAttention throughput on open weights. BentoML wraps it for production. LiteLLM normalises self-hosted and provider APIs behind one call.",
    swap: "Bedrock or Vertex AI when compliance forces a managed provider, or when volume doesn't justify GPU operations.",
  },
  {
    n: "03",
    domain: "Data Layer",
    primary: "Postgres with pgvector. Kafka or NATS for events.",
    why: "Postgres handles vector workloads to several million rows without a separate database. Kafka for durable replay, NATS for low-latency pub/sub.",
    swap: "Qdrant or Weaviate past ~50M vectors when recall outweighs transactional consistency. Pulsar or Redpanda where the team already runs them.",
  },
  {
    n: "04",
    domain: "Observability",
    primary: "Grafana + OpenTelemetry. Loki, Tempo, Mimir.",
    why: "OTEL keeps you portable. The Grafana stack runs from laptop to multi-cluster. Dashboards and alert rules are the deliverable, not the storage backend.",
    swap: "Datadog or Splunk where already paid for and the lock-in is acceptable. We do not migrate observability for fashion.",
  },
  {
    n: "05",
    domain: "Delivery & GitOps",
    primary: "GitHub Actions for CI. ArgoCD for Kubernetes deploys.",
    why: "Actions sits where the code already lives. ArgoCD inverts the trust model — the cluster pulls from Git instead of CI pushing into the cluster.",
    swap: "GitLab CI when GitLab is the SCM. Flagger for progressive delivery beyond what Argo Rollouts handles cleanly.",
  },
  {
    n: "06",
    domain: "Infrastructure as Code",
    primary: "OpenTofu — state in S3 with DynamoDB lock (or equivalent).",
    why: "Declarative, reviewable, diffable. State integrity is the load-bearing constraint, not module elegance.",
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
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)" }}>
            <motion.div
              className="md:col-span-8"
              initial={{ opacity: 0, y: 20 }}
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
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-white"
                style={{ fontSize: "var(--text-fib-2xl)", lineHeight: 0.95, marginBottom: "var(--fib-5)" }}
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
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 0, listStyle: "none", padding: 0 }}
          >
            {criteria.map((c, i) => {
              const isLastInColumn =
                i === criteria.length - 1 || (criteria.length % 2 === 0 && i === criteria.length - 2);
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
                  <span
                    className="font-[family-name:var(--font-mono)]"
                    style={{
                      fontSize: "11px",
                      color: "var(--color-ds-warm)",
                      paddingTop: "6px",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                    }}
                  >
                    {c.n}
                  </span>
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
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col"
          >
            {stack.map((s) => (
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
                  className="md:col-span-3 flex items-baseline"
                  style={{ gap: "var(--fib-2)" }}
                >
                  <span
                    className="font-[family-name:var(--font-mono)]"
                    style={{
                      fontSize: "11px",
                      color: "var(--color-ds-warm)",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
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
            ))}
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
              viewport={{ once: true, margin: "-60px" }}
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
                href="mailto:hello@digitalsourcery.ai"
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
