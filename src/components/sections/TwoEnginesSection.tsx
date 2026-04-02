"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const foundation = [
  "Internal Developer Platforms",
  "Infrastructure Automation",
  "Platform Acceleration",
  "Observability & FinOps",
];

const intelligence = [
  "Intelligent Observability",
  "AI-Driven Platform Engineering",
  "Autonomous Infrastructure",
  "AI Platforms for Enterprises",
  "AI Cost Optimization",
  "Legacy AI Modernization",
];

export default function TwoEnginesSection() {
  return (
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "var(--fib-6)" }}
          className="text-center"
        >
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            Two Engines. One Mission.
          </TextScramble>
          <p
            className="text-ds-text-secondary mx-auto max-w-lg"
            style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginTop: "var(--fib-3)" }}
          >
            BlackMagickOps builds the platform.
            Digital Sourcery makes it intelligent.
            Together: production-ready AI infrastructure.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch"
          style={{ gap: "var(--fib-3)" }}
        >
          {/* BlackMagickOps — Foundation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="themed-card rounded-xl"
            style={{
              backgroundColor: "var(--color-ds-card)",
              border: "1px solid var(--color-ds-card-border)",
              padding: "var(--fib-4)",
            }}
          >
            <p
              className="font-[family-name:var(--font-mono)] tracking-[0.15em] uppercase"
              style={{ fontSize: "11px", color: "var(--color-ds-phase-num)", marginBottom: "var(--fib-2)" }}
            >
              The Foundation
            </p>
            <h3
              className="font-[family-name:var(--font-display)] font-bold text-white"
              style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-3)" }}
            >
              BlackMagickOps
            </h3>
            <ul>
              {foundation.map((item) => (
                <li
                  key={item}
                  className="text-ds-text-secondary"
                  style={{
                    fontSize: "var(--text-fib-sm)",
                    lineHeight: 1.618,
                    paddingLeft: "var(--fib-2)",
                    marginBottom: "var(--fib-1)",
                    position: "relative",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "var(--color-ds-text-dim)" }}>+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              className="font-[family-name:var(--font-mono)] text-ds-text-dim"
              style={{
                fontSize: "11px",
                marginTop: "var(--fib-3)",
                borderTop: "1px solid var(--color-ds-border-light)",
                paddingTop: "var(--fib-2)",
              }}
            >
              Platform engineering, automation, observability — the base layer everything runs on.
            </p>
          </motion.div>

          {/* Center connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div
              className="font-[family-name:var(--font-display)] font-bold text-white text-center"
              style={{ fontSize: "var(--text-fib-lg)", padding: "0 var(--fib-3)" }}
            >
              +
            </div>
          </motion.div>

          {/* Digital Sourcery — Intelligence */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="themed-card rounded-xl"
            style={{
              backgroundColor: "var(--color-ds-card)",
              border: "1px solid var(--color-ds-card-border)",
              padding: "var(--fib-4)",
            }}
          >
            <p
              className="font-[family-name:var(--font-mono)] tracking-[0.15em] uppercase"
              style={{ fontSize: "11px", color: "var(--color-ds-metric)", marginBottom: "var(--fib-2)" }}
            >
              The Intelligence Layer
            </p>
            <h3
              className="font-[family-name:var(--font-display)] font-bold text-white"
              style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-3)" }}
            >
              Digital Sourcery
            </h3>
            <ul>
              {intelligence.map((item) => (
                <li
                  key={item}
                  className="text-ds-text-secondary"
                  style={{
                    fontSize: "var(--text-fib-sm)",
                    lineHeight: 1.618,
                    paddingLeft: "var(--fib-2)",
                    marginBottom: "var(--fib-1)",
                    position: "relative",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "var(--color-ds-metric)" }}>+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              className="font-[family-name:var(--font-mono)] text-ds-text-dim"
              style={{
                fontSize: "11px",
                marginTop: "var(--fib-3)",
                borderTop: "1px solid var(--color-ds-border-light)",
                paddingTop: "var(--fib-2)",
              }}
            >
              AI observability, autonomous ops, cost optimization — the layer that makes infrastructure think.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
