"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { Layers, Scan, CheckCircle2 } from "lucide-react";

const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } };

const benchmarks = [
  { name: "Grafana + ML Pipeline", score: 91, primary: true },
  { name: "Datadog Out-of-Box", score: 83, primary: false },
  { name: "Dynatrace Enterprise", score: 78, primary: false },
];

const metrics = [
  { value: "40k+", label: "Compute Hours Tested" },
  { value: "9", label: "Major Cloud Regions" },
  { value: "0.02%", label: "Mean Packet Loss" },
  { value: "Zero", label: "Unplanned Outages" },
];

const comparisons = [
  { req: "AI Observability", ours: "Grafana + Custom ML", alt: "Datadog (vendor lock-in)" },
  { req: "Model Serving", ours: "vLLM + BentoML", alt: "SageMaker (AWS lock-in)" },
  { req: "Cost Controls", ours: "pgvector Cache + LiteLLM", alt: "Cloud Provider FinOps" },
  { req: "Message Broker", ours: "Kafka / NATS (event bridge)", alt: "API Wrappers (fragile)" },
  { req: "Container Orchestration", ours: "Managed K8s (EKS/GKE)", alt: "Serverless Fleet" },
];

const archMetrics = [
  { value: "52%", label: "AI Cost Reduction" },
  { value: "91%", label: "Anomaly Detection" },
  { value: "<2min", label: "Auto-Heal Time" },
  { value: "3x", label: "Inference Throughput" },
];

export default function StackContent() {
  return (
    <main className="relative">
      {/* Hero */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)] w-full">
          <div className="flex flex-col md:flex-row items-end" style={{ gap: "var(--fib-5)" }}>
            <motion.div className="md:w-2/3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
              <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
                System Architecture
              </div>
              <h1 className="font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-white" style={{ fontSize: "var(--text-fib-2xl)", lineHeight: 0.95, marginBottom: "var(--fib-5)" }}>
                The Reference
                <br />
                <span style={{ color: "var(--color-ds-headline-accent)" }}>Stack</span>
              </h1>
              <p className="text-ds-text-secondary max-w-xl" style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.618 }}>
                Every tool deployed, benchmarked, and stress-tested against real workloads. We form opinions through engineering, not vendor demos.
              </p>
            </motion.div>

            <motion.div className="md:w-1/3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
              <div className="refractive-card flex flex-col justify-between" style={{ padding: "var(--fib-3)", height: "110px" }}>
                <div className="flex justify-between font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>
                  <span>Hash: 0xFD42...A1</span>
                  <span>Verified</span>
                </div>
                <div className="relative" style={{ height: "2px", backgroundColor: "rgba(200, 208, 224, 0.1)" }}>
                  <div style={{ position: "absolute", inset: 0, width: "33%", backgroundColor: "var(--color-ds-warm)" }} />
                </div>
                <div className="font-[family-name:var(--font-mono)]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-text)" }}>v4.2.0-STABLE</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Deep Dive */}
      <section style={{ paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]" style={{ paddingTop: "var(--fib-6)" }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-3)" }}>

            {/* Orchestration — 8 col with benchmarks */}
            <motion.div variants={fadeUp} className="md:col-span-8 refractive-card relative overflow-hidden group" style={{ padding: "var(--fib-5)" }}>
              <div className="absolute top-[var(--fib-4)] right-[var(--fib-4)]">
                <Layers size={80} style={{ color: "var(--color-ds-crystalline)", opacity: 0.05 }} strokeWidth={0.5} className="group-hover:opacity-[0.1] transition-opacity duration-500" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-5)" }}>Orchestration &amp; Compute</h3>
              <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--fib-5)" }}>
                <div>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] block" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}>Primary Choice</span>
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-white" style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-3)" }}>Managed Kubernetes (EKS/GKE)</h4>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-4)" }}>
                    The abstraction density and ecosystem gravity of K8s remain unmatched for high-availability distributed AI systems.
                  </p>
                  <div className="flex flex-col" style={{ gap: "var(--fib-2)" }}>
                    <div className="flex items-center" style={{ gap: "var(--fib-2)" }}>
                      <CheckCircle2 size={14} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1.5} />
                      <span className="font-[family-name:var(--font-mono)]" style={{ fontSize: "var(--text-fib-xs)" }}>Auto-scaling Latency: &lt; 450ms</span>
                    </div>
                    <div className="flex items-center" style={{ gap: "var(--fib-2)" }}>
                      <CheckCircle2 size={14} style={{ color: "var(--color-ds-warm)" }} strokeWidth={1.5} />
                      <span className="font-[family-name:var(--font-mono)]" style={{ fontSize: "var(--text-fib-xs)" }}>98% Stability Rating</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "var(--fib-4)", backgroundColor: "var(--color-ds-void)", border: "1px solid rgba(200, 208, 224, 0.06)" }}>
                  <h4 className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-3)" }}>Benchmark Comparison</h4>
                  <div className="flex flex-col" style={{ gap: "var(--fib-3)" }}>
                    {benchmarks.map((b) => (
                      <div key={b.name} style={{ gap: "var(--fib-1)" }}>
                        <div className="flex justify-between font-[family-name:var(--font-mono)]" style={{ fontSize: "10px", marginBottom: "4px" }}>
                          <span style={{ color: b.primary ? "var(--color-ds-text)" : "var(--color-ds-text-dim)" }}>{b.name}</span>
                          <span style={{ color: b.primary ? "var(--color-ds-warm)" : "var(--color-ds-text-dim)" }}>{b.score}%</span>
                        </div>
                        <div style={{ height: "3px", backgroundColor: "rgba(200, 208, 224, 0.06)" }}>
                          <div style={{ height: "100%", width: `${b.score}%`, backgroundColor: b.primary ? "var(--color-ds-warm)" : "var(--color-ds-text-dim)", transition: "width 1s ease" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Observability — 4 col with bar chart */}
            <motion.div variants={fadeUp} className="md:col-span-4 refractive-card flex flex-col justify-between" style={{ padding: "var(--fib-5)" }}>
              <div>
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.25em] block" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>Observability</span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-3)" }}>Grafana Cloud + OpenTelemetry</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-4)" }}>
                  We phased out Datadog in favor of OTEL-native pipelines to prevent vendor lock-in at the tracing layer.
                </p>
              </div>
              <div className="relative flex items-end" style={{ height: "89px", gap: "4px" }}>
                {[20, 40, 80, 60, 100, 30].map((h, i) => (
                  <div key={i} className="flex-1" style={{ height: `${h}%`, backgroundColor: `rgba(227, 204, 177, ${0.1 + (h / 200)})` }} />
                ))}
              </div>
            </motion.div>

            {/* Architecture Overview — full width */}
            <motion.div variants={fadeUp} className="md:col-span-12 refractive-card flex flex-col md:flex-row items-start" style={{ padding: "var(--fib-5)", gap: "var(--fib-5)" }}>
              <div className="md:w-1/2">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-lg)", marginBottom: "var(--fib-4)" }}>Architecture Overview</h3>
                <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
                  Our routing layer uses event-driven patterns that reduce latency and eliminate single points of failure compared to standard API gateways.
                </p>
                <div className="grid grid-cols-2" style={{ gap: "var(--fib-2)" }}>
                  {archMetrics.map((m) => (
                    <div key={m.label} style={{ padding: "var(--fib-3)", border: "1px solid rgba(200, 208, 224, 0.06)" }}>
                      <span className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)" }}>{m.value}</span>
                      <span className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginTop: "var(--fib-1)" }}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 w-full flex items-center justify-center relative" style={{ aspectRatio: "16/9", backgroundColor: "var(--color-ds-void)", border: "1px solid rgba(200, 208, 224, 0.04)" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(200, 208, 224, 0.03) 0%, transparent 70%)" }} />
                <div className="text-center" style={{ padding: "var(--fib-4)" }}>
                  <Scan size={48} style={{ color: "var(--color-ds-crystalline)", opacity: 0.2, margin: "0 auto" }} strokeWidth={0.5} />
                  <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginTop: "var(--fib-3)" }}>Architecture diagram — production reference</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Validation Methodology */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", backgroundColor: "var(--color-ds-carbon)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", borderBottom: "1px solid rgba(200, 208, 224, 0.06)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white text-center" style={{ fontSize: "var(--text-fib-xl)", marginBottom: "var(--fib-6)" }}>
              Validation Methodology
            </TextScramble>
          </motion.div>

          {/* Metrics row */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-7)" }}>
            {metrics.map((m) => (
              <motion.div key={m.label} variants={fadeUp} className="text-center">
                <div className="font-[family-name:var(--font-display)] font-bold" style={{ fontSize: "var(--text-fib-lg)", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}>{m.value}</div>
                <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}>{m.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Comparison table */}
          <div className="flex flex-col md:flex-row" style={{ gap: "var(--fib-5)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", paddingTop: "var(--fib-6)" }}>
            <div className="md:w-1/3">
              <h4 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-3)" }}>The Selection Engine</h4>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                Every component must pass our internal hardening protocol — a 48-hour stress test simulating 10x projected peak load.
              </p>
            </div>
            <div className="md:w-2/3 overflow-x-auto">
              <table className="w-full text-left" style={{ fontSize: "var(--text-fib-sm)" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(200, 208, 224, 0.08)" }}>
                    <th className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim" style={{ fontSize: "10px", paddingBottom: "var(--fib-3)", paddingRight: "var(--fib-4)" }}>Requirement</th>
                    <th className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim" style={{ fontSize: "10px", paddingBottom: "var(--fib-3)", paddingRight: "var(--fib-4)" }}>Our Choice</th>
                    <th className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim" style={{ fontSize: "10px", paddingBottom: "var(--fib-3)" }}>The Alternative</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((c) => (
                    <tr key={c.req} style={{ borderBottom: "1px solid rgba(200, 208, 224, 0.04)" }}>
                      <td className="text-white font-medium" style={{ padding: "var(--fib-3) var(--fib-4) var(--fib-3) 0" }}>{c.req}</td>
                      <td style={{ padding: "var(--fib-3) var(--fib-4) var(--fib-3) 0", color: "var(--color-ds-warm)" }}>{c.ours}</td>
                      <td className="text-ds-text-dim" style={{ padding: "var(--fib-3) 0" }}>{c.alt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
          <motion.div className="refractive-card relative overflow-hidden flex flex-col items-center text-center" style={{ padding: "var(--fib-7) var(--fib-5)" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(227, 204, 177, 0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

            <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
              Custom Configuration
            </div>

            <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)", lineHeight: 1.1, marginBottom: "var(--fib-5)" }}>
              Need a custom stack?
            </TextScramble>

            <p className="text-ds-text-secondary max-w-2xl" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-6)" }}>
              Our architects can help you port your existing systems to a high-performance reference configuration.
            </p>

            <div className="flex flex-col md:flex-row" style={{ gap: "var(--fib-3)" }}>
              <a href="mailto:hello@digitalsourcery.ai" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}>
                <span>Talk to an Architect</span>
              </a>
              <a href="/intelligence" className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200 ds-cta-prismatic" style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)", border: "1px solid rgba(200, 208, 224, 0.1)", color: "var(--color-ds-text)" }}>
                View Intelligence Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
