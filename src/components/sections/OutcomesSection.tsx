"use client";

import { motion } from "framer-motion";
import { WaveStructure, GeometricGrid, ConcentricRings, CrystallineFragment, StackedDiscs } from "@/components/glyphs";

const outcomes = [
  { Glyph: WaveStructure, variant: 9, glyphLabel: "Flowing automation", title: "Reduce Manual Operations", description: "Automated provisioning, self-healing runbooks, and agentic workflows replace repetitive manual work." },
  { Glyph: GeometricGrid, variant: 3, glyphLabel: "Deployment spokes", title: "Improve Deployment Speed", description: "Self-service platforms with preview environments and progressive rollouts." },
  { Glyph: ConcentricRings, variant: 8, glyphLabel: "Anomaly ping-trail", title: "Detect Issues Earlier", description: "ML-powered anomaly detection surfaces real problems before they reach users — not after." },
  { Glyph: CrystallineFragment, variant: 0, glyphLabel: "Cost optimization", title: "Optimize Cloud Cost", description: "Right-sized infrastructure and automated scaling aligned to actual demand." },
  { Glyph: StackedDiscs, variant: 8, glyphLabel: "Antifragile dome", title: "Increase System Reliability", description: "Antifragile architecture with instant rollbacks, redundancy, and autonomous recovery." },
];

export default function OutcomesSection() {
  return (
    <section id="outcomes" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
      <div className="ds-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            What changes
          </div>
          <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-5)" }}>
            Operational outcomes, not slideware.
          </h2>
          <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618 }}>
            Every engagement is measured against real operational improvements — incidents, deployment cycles, and the spend you can attribute to a workload.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2" style={{ gap: "var(--fib-3)" }}>
          {/* Large featured card — Reduce Manual Operations (distilled: one ambient circle, no mouse-follow) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="md:col-span-2 md:row-span-2 refractive-card flex flex-col justify-between relative overflow-hidden"
            style={{ padding: "var(--fib-5)" }}
          >
            {/* Single ambient warm glow anchor — replaces the mouse-follow + grid + 3-arc decoration */}
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                top: "30%",
                left: "20%",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(227, 204, 177, 0.06) 0%, rgba(200, 208, 224, 0.02) 50%, transparent 75%)",
                filter: "blur(20px)",
              }}
            />

            {/* Large ambient glyph anchor — top-right */}
            <div className="absolute pointer-events-none z-0" style={{ top: "var(--fib-3)", right: "var(--fib-4)", opacity: 0.45 }} aria-hidden="true">
              <WaveStructure size={180} variant={9} ariaLabel="Flowing automation" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center" style={{ gap: "var(--fib-2)", marginBottom: "var(--fib-4)" }}>
                <WaveStructure size={28} variant={9} ariaLabel="Flowing automation" />
                <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)" }}>Primary Outcome</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-4)" }}>
                Reduce Manual Operations
              </h3>
              <p className="text-ds-text-secondary max-w-lg" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginBottom: "var(--fib-5)" }}>
                {outcomes[0].description}
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--fib-3)", borderTop: "1px solid rgba(200, 208, 224, 0.06)", paddingTop: "var(--fib-4)" }}>
              {[
                { label: "Provisioning", value: "Automated" },
                { label: "Incident Response", value: "Autonomous" },
                { label: "Deployments", value: "Self-Service" },
              ].map((m) => (
                <div key={m.label}>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] block" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-1)" }}>{m.label}</span>
                  <span className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "var(--text-fib-md)" }}>{m.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — stacked outcome cards */}
          {outcomes.slice(1, 3).map((o, i) => {
            const CardGlyph = o.Glyph;
            return (
              <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * (i + 1), ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="refractive-card flex flex-col justify-center relative overflow-hidden" style={{ padding: "var(--fib-4)" }}>
                <div className="absolute" style={{ top: "var(--fib-3)", right: "var(--fib-3)", opacity: 0.5 }} aria-hidden="true">
                  <CardGlyph size={72} variant={o.variant} ariaLabel={o.glyphLabel} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-white relative z-10" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)", marginTop: "var(--fib-5)" }}>{o.title}</h3>
                <p className="text-ds-text-secondary relative z-10" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618 }}>{o.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row — 9/3 asymmetric (visual delta is unmissable) with mono attribution tag on the larger card */}
        <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-3)", marginTop: "var(--fib-3)" }}>
          {outcomes.slice(3).map((o, i) => {
            const CardGlyph = o.Glyph;
            const isLarge = i === 0;
            const span = isLarge ? "md:col-span-9" : "md:col-span-3";
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 3), ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className={`${span} flex flex-col justify-center relative overflow-hidden`}
                style={{ padding: "var(--fib-4)", border: "1px solid var(--color-ds-border)" }}
              >
                <div className="absolute" style={{ top: "var(--fib-3)", right: "var(--fib-3)", opacity: isLarge ? 0.55 : 0.45 }} aria-hidden="true">
                  <CardGlyph size={isLarge ? 96 : 72} variant={o.variant} ariaLabel={o.glyphLabel} />
                </div>
                {isLarge && (
                  <span
                    className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                    style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}
                  >
                    Per-workload attribution
                  </span>
                )}
                <h3
                  className="font-[family-name:var(--font-display)] font-bold text-white"
                  style={{
                    fontSize: isLarge ? "var(--text-fib-md)" : "var(--text-fib-sm)",
                    marginBottom: "var(--fib-2)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {o.title}
                </h3>
                <p
                  className="text-ds-text-secondary"
                  style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, maxWidth: isLarge ? "60ch" : "30ch" }}
                >
                  {o.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
