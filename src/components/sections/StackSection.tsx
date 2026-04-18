"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const excerpts = [
  {
    n: "01",
    domain: "Orchestration & Compute",
    primary: "Managed Kubernetes — EKS / GKE / AKS.",
    why: "Control-plane and ecosystem gravity remain unmatched once a workload needs failure isolation, scheduled batching, and gradual rollouts.",
  },
  {
    n: "02",
    domain: "AI Inference & Serving",
    primary: "vLLM + BentoML, fronted by LiteLLM.",
    why: "PagedAttention throughput on open weights, production wrapping, normalised provider/self-hosted API surface.",
  },
  {
    n: "03",
    domain: "Observability",
    primary: "Grafana + OpenTelemetry.",
    why: "OTEL keeps you portable. The Grafana stack runs from laptop to multi-cluster.",
  },
];

export default function StackSection() {
  return (
    <section
      id="stack"
      style={{
        paddingTop: "var(--fib-7)",
        paddingBottom: "var(--fib-7)",
        borderTop: "1px solid var(--color-ds-border)",
      }}
    >
      <div className="ds-container">
        <div
          className="grid grid-cols-1 md:grid-cols-12"
          style={{ gap: "var(--fib-5)" }}
        >
          {/* Left — label + h2 + intro + closing link */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
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

            <TextScramble
              as="h2"
              className="font-[family-name:var(--font-display)] font-bold tracking-[-0.03em] text-white"
              style={{
                fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))",
                lineHeight: 1.0,
                marginBottom: "var(--fib-4)",
              }}
            >
              What we open with by default.
            </TextScramble>

            <p
              className="text-ds-text-secondary"
              style={{
                fontSize: "var(--text-fib-base)",
                lineHeight: 1.618,
                marginBottom: "var(--fib-5)",
                maxWidth: "32ch",
              }}
            >
              Three excerpts from our reference stack. Full list, swap conditions, and rationale on the stack page.
            </p>

            <a
              href="/stack"
              className="inline-block font-[family-name:var(--font-mono)] tracking-[0.05em] hover:opacity-70 transition-opacity duration-200"
              style={{
                fontSize: "var(--text-fib-sm)",
                color: "var(--color-ds-warm)",
              }}
            >
              See the full reference stack →
            </a>
          </motion.div>

          {/* Right — three category rows */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-8 flex flex-col"
          >
            {excerpts.map((e, i) => (
              <motion.article
                key={e.n}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-12"
                style={{
                  gap: "var(--fib-3)",
                  padding: "var(--fib-5) 0",
                  borderTop: "1px solid var(--color-ds-border)",
                  borderBottom:
                    i === excerpts.length - 1
                      ? "1px solid var(--color-ds-border)"
                      : "none",
                }}
              >
                <div
                  className="md:col-span-4 flex items-baseline"
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
                    {e.n}
                  </span>
                  <h3
                    className="font-[family-name:var(--font-display)] font-semibold text-white"
                    style={{
                      fontSize: "var(--text-fib-md)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    {e.domain}
                  </h3>
                </div>

                <div className="md:col-span-8">
                  <p
                    className="font-[family-name:var(--font-display)] font-medium text-white"
                    style={{
                      fontSize: "var(--text-fib-base)",
                      marginBottom: "var(--fib-3)",
                      letterSpacing: "-0.005em",
                      lineHeight: 1.4,
                    }}
                  >
                    {e.primary}
                  </p>
                  <p
                    className="text-ds-text-secondary"
                    style={{
                      fontSize: "var(--text-fib-sm)",
                      lineHeight: 1.65,
                      maxWidth: "55ch",
                    }}
                  >
                    {e.why}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
