"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const principles = [
  {
    title: "Engineers Who Ship",
    detail: "We commit code to your repo, join your standups, and ship working software. No PowerPoints. No transformation frameworks. No junior offshore teams. Senior engineers, production code, knowledge transfer.",
  },
  {
    title: "Opinions Backed by Testing",
    detail: "We don't recommend tools from vendor demos. We deploy them, benchmark them, and break them. Then we tell you what works. Every recommendation on our Stack page has real data behind it.",
  },
  {
    title: "Your Team Owns Everything",
    detail: "No proprietary frameworks. No vendor dependencies. No black boxes. Everything we build, you own. Full knowledge transfer, documentation, and pair programming. After 6 months, you don't need us.",
  },
  {
    title: "Legacy Is Reality, Not a Problem",
    detail: "Your 15-year-old ERP runs the business. We don't pretend you'll replace it. We integrate AI with what you have, using event bridges and incremental patterns that don't risk production.",
  },
  {
    title: "AI Is Expensive. We Fix That First.",
    detail: "We implement cost controls from day one — semantic caching, model routing, token budgets. The first audit usually pays for itself by tightening what's already running.",
  },
  {
    title: "Platform as a Product",
    detail: "Internal platforms are products your developers consume. We treat them that way — with user research, adoption metrics, and iterative improvement. Not projects that launch and rot.",
  },
];

export default function AboutContent() {
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
            className="max-w-2xl"
          >
            <h1
              className="font-[family-name:var(--font-display)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(var(--text-fib-lg), 6vw, var(--text-fib-2xl))", marginBottom: "var(--fib-4)" }}
            >
              Engineers,
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>
                Not Consultants
              </span>
            </h1>
            <p
              className="text-ds-text-secondary"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-4)" }}
            >
              Digital Sorcery was founded by infrastructure engineers who&apos;ve spent years
              building and scaling cloud-native systems across manufacturing, energy, SaaS,
              and enterprise. We&apos;ve seen the same problems repeat across organizations —
              AI prototypes that never ship, costs that spiral, teams that drown in alerts.
            </p>
            <p
              className="text-ds-text-secondary"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-4)" }}
            >
              We built a practice around solving them with hands-on engineering.
              Not strategy decks. Not vendor partnerships. Production code that ships.
            </p>
            <p
              className="text-ds-text-secondary"
              style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}
            >
              The foundation — platform engineering, automation, observability —
              comes from <strong className="text-white">BlackMagickOps</strong>,
              our engineering practice built on the belief that precision is discipline
              and automation is leverage. Digital Sorcery adds the intelligence layer:
              AI that makes infrastructure predict, heal, and optimize itself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
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
              How We Think
            </TextScramble>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--fib-3)" }}>
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="themed-card rounded-xl"
                style={{
                  backgroundColor: "var(--color-ds-card)",
                  border: "1px solid var(--color-ds-card-border)",
                  padding: "var(--fib-4)",
                }}
              >
                <h3
                  className="font-[family-name:var(--font-display)] font-semibold text-white"
                  style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-2)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-ds-text-secondary"
                  style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
                >
                  {p.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section
        style={{
          paddingTop: "var(--fib-7)",
          paddingBottom: "var(--fib-7)",
          borderTop: "1px solid var(--color-ds-border)",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "var(--fib-4)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
              >
                Methodology
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                DORA metrics, SPACE framework, FinOps Foundation Crawl/Walk/Run.
                Industry-standard benchmarks, not vanity metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
              >
                Approach
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                Pair programming, knowledge transfer, your team owns everything we build.
                No drive-by consulting. No black boxes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim"
                style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}
              >
                Philosophy
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                Platform as a Product. Open standards. No vendor lock-in. No proprietary
                frameworks. Zero dependency on us after knowledge transfer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          paddingTop: "var(--fib-7)",
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
              style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-4)" }}
            >
              Want to work with engineers who actually ship?
            </h2>
            <div className="flex flex-col sm:flex-row items-start" style={{ gap: "var(--fib-3)" }}>
              <a
                href="mailto:hello@digitalsourcery.ai"
                className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn"
                style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) var(--fib-4)" }}
              >
                <span>Start a Conversation</span>
              </a>
              <span className="text-ds-text-dim self-center" style={{ fontSize: "var(--text-fib-sm)" }}>
                hello@digitalsourcery.ai
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
