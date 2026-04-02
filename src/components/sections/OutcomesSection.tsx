"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

export default function OutcomesSection() {
  return (
    <section
      id="outcomes"
      style={{
        paddingTop: "var(--fib-7)",
        paddingBottom: "var(--fib-7)",
        borderTop: "1px solid var(--color-ds-border)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: "var(--fib-6)" }}
        >
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            Engineered Outcomes
          </TextScramble>
        </motion.div>

        {/* Bento grid: 1 large left, 2 stacked right */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2"
          style={{ gap: "var(--fib-2)", minHeight: "500px" }}
        >
          {/* Large card — spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 prismatic-glass prismatic-edge flex flex-col justify-end relative overflow-hidden group"
            style={{ padding: "var(--fib-5)" }}
          >
            <div style={{ marginBottom: "var(--fib-3)" }}>
              <div
                className="font-[family-name:var(--font-display)] font-bold text-white"
                style={{ fontSize: "clamp(var(--text-fib-xl), 10vw, var(--text-fib-2xl))" }}
              >
                90
              </div>
              <div
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]"
                style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-warm)" }}
              >
                Days to Production
              </div>
            </div>
            <p
              className="text-ds-text-secondary max-w-md"
              style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
            >
              From prototype to production in one quarter. Working software
              integrated with your systems, deployed to your infrastructure,
              monitored by your team. Not 12 months of planning.
            </p>
          </motion.div>

          {/* Top right card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prismatic-glass flex flex-col justify-center"
            style={{ padding: "var(--fib-4)" }}
          >
            <div
              className="font-[family-name:var(--font-display)] font-bold text-white"
              style={{ fontSize: "var(--text-fib-xl)" }}
            >
              40-60%
            </div>
            <div
              className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]"
              style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", marginTop: "var(--fib-1)" }}
            >
              AI Cost Reduction
            </div>
            <p
              className="text-ds-text-secondary"
              style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.5, marginTop: "var(--fib-2)" }}
            >
              Semantic caching, model routing, and token budgets.
              Most clients save more than our fees.
            </p>
          </motion.div>

          {/* Bottom right card — inverted colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
            style={{
              padding: "var(--fib-4)",
              backgroundColor: "var(--color-ds-warm)",
              color: "var(--color-ds-black)",
            }}
          >
            <div
              className="font-[family-name:var(--font-display)] font-bold"
              style={{ fontSize: "var(--text-fib-xl)" }}
            >
              70%+
            </div>
            <div
              className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] opacity-70"
              style={{ fontSize: "var(--text-fib-xs)", marginTop: "var(--fib-1)" }}
            >
              MTTR Reduction
            </div>
            <p
              className="opacity-60"
              style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.5, marginTop: "var(--fib-2)" }}
            >
              80%+ incidents auto-remediate. Fewer 3 AM pages.
              Engineering time back for building.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
