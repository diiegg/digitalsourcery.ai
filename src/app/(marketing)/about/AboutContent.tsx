"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { StackedDiscs, BlobCluster, GeometricGrid, CrystallineFragment, WaveStructure, ConcentricRings } from "@/components/glyphs";

type GlyphComponent = typeof StackedDiscs;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };

const principles: { Glyph: GlyphComponent; variant: number; glyphLabel: string; title: string; detail: string }[] = [
  {
    Glyph: WaveStructure,
    variant: 1, // cosine
    glyphLabel: "Cosine shipping cadence",
    title: "Engineers Who Ship",
    detail: "We commit code to your repo, join your standups, and ship working software — senior engineers only, no offshore handoff.",
  },
  {
    Glyph: ConcentricRings,
    variant: 7, // single spiral
    glyphLabel: "Spiral testing path",
    title: "Opinions Backed by Testing",
    detail: "We don't recommend tools from vendor demos; we deploy them, benchmark them, and break them first.",
  },
  {
    Glyph: GeometricGrid,
    variant: 7, // asymmetric
    glyphLabel: "Asymmetric handoff topology",
    title: "Your Team Owns Everything",
    detail: "No proprietary frameworks, no vendor dependencies, no black boxes — after six months, you don't need us.",
  },
  {
    Glyph: BlobCluster,
    variant: 5, // vesica
    glyphLabel: "Legacy + new vesica",
    title: "Legacy Is Reality, Not a Problem",
    detail: "Your 15-year-old ERP runs the business; we integrate AI using event bridges and incremental patterns that don't risk production.",
  },
  {
    Glyph: CrystallineFragment,
    variant: 5, // growing
    glyphLabel: "Cost shards from corner",
    title: "AI Is Expensive. We Fix That First.",
    detail: "Cost controls from day one — semantic caching, model routing, token budgets. The first audit usually pays for itself.",
  },
  {
    Glyph: StackedDiscs,
    variant: 3, // spiraling
    glyphLabel: "Spiraling platform discs",
    title: "Platform as a Product",
    detail: "Internal platforms are products your developers consume — we treat them that way, with user research and iterative improvement.",
  },
];

const team = [
  {
    initials: "DQ",
    name: "Diego Quiroga",
    role: "Principal · Founder",
    bg: "Platform engineering since 2014. Distributed systems, multi-cloud Kubernetes. Madrid.",
  },
  {
    initials: "AH",
    name: "Anders Holm",
    role: "Principal Platform Engineer",
    bg: "GitOps, ArgoCD, internal developer platforms. Ex-Trustpilot. Copenhagen.",
  },
  {
    initials: "LJ",
    name: "Léa Janssen",
    role: "Senior SRE",
    bg: "Observability, incident response, OpenTelemetry. Ex-Booking.com. Amsterdam.",
  },
  {
    initials: "MR",
    name: "Mateo Ruiz",
    role: "Senior MLOps Engineer",
    bg: "vLLM, BentoML, GPU infrastructure, cost control. Ex-Cabify. Madrid.",
  },
  {
    initials: "SB",
    name: "Søren Bergmann",
    role: "Senior Infrastructure Engineer",
    bg: "OpenTofu, multi-cloud, FinOps. Ex-Delivery Hero. Berlin.",
  },
  {
    initials: "MC",
    name: "Mei Chen",
    role: "Senior Data Engineer",
    bg: "Streaming pipelines, Kafka, real-time feature stores. Ex-Zalando. Berlin.",
  },
];

const engagements: { n: string; Glyph: GlyphComponent; variant: number; glyphLabel: string; type: string; duration: string; price: string; output: string }[] = [
  {
    n: "01",
    Glyph: BlobCluster,
    variant: 7, // droplet-trail
    glyphLabel: "Discovery droplet-trail",
    type: "Discovery",
    duration: "1–2 weeks",
    price: "from €18,000",
    output: "Written assessment, ranked priorities, scoped remediation plan. Delivered as a document, not a deck.",
  },
  {
    n: "02",
    Glyph: ConcentricRings,
    variant: 1, // target
    glyphLabel: "Pilot target",
    type: "Pilot",
    duration: "4–6 weeks",
    price: "from €55,000",
    output: "One high-impact workload taken to production. Knowledge transfer to your team starts in week one.",
  },
  {
    n: "03",
    Glyph: StackedDiscs,
    variant: 2, // fanned-arc
    glyphLabel: "Engagement fanned-arc",
    type: "Engagement",
    duration: "8–12 weeks",
    price: "from €140,000",
    output: "Multi-workload modernisation. Your team owns the system end-to-end before we leave.",
  },
];

const recentEngagements: { Glyph: GlyphComponent; variant: number; glyphLabel: string; sector: string; title: string; result: string }[] = [
  {
    Glyph: WaveStructure,
    variant: 4, // spiral
    glyphLabel: "Telemetry spiral migration",
    sector: "Nordic insurance · ~2,000 employees",
    title: "Observability migration off Datadog",
    result: "Grafana + OpenTelemetry stack delivered in nine weeks; 40% reduction in observability spend, owned end-to-end by their SRE team.",
  },
  {
    Glyph: GeometricGrid,
    variant: 5, // sparse-mesh
    glyphLabel: "Sparse GPU mesh",
    sector: "Spanish marketplace · ~600 employees",
    title: "GPU infrastructure for AI features",
    result: "vLLM on EKS with horizontal autoscaling; handled Black Friday peak without manual intervention, cost-per-inference attributed per workload.",
  },
  {
    Glyph: CrystallineFragment,
    variant: 4, // cracked
    glyphLabel: "Cracked legacy → templates",
    sector: "German B2B SaaS · ~400 employees",
    title: "Internal developer platform on Backstage",
    result: "Provisioning days → minutes, twelve self-service service templates, three-week residency to hand off to their platform team.",
  },
];

export default function AboutContent() {
  return (
    <main className="relative">
      {/* Hero — left-aligned, mirrors /foundation hero pattern (no Medium-blog centering) */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12 items-end" style={{ gap: "var(--fib-5)" }}>
            <motion.div className="md:col-span-8" animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
              <h1
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.035em] text-white"
                style={{ fontSize: "clamp(var(--text-fib-xl), 5.5vw, var(--text-fib-2xl))", lineHeight: 0.98, marginBottom: "var(--fib-4)" }}
              >
                Engineering
                <br />
                <span style={{ color: "var(--color-ds-headline-accent)" }}>With intention.</span>
              </h1>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.55, marginBottom: "var(--fib-4)", maxWidth: "60ch" }}>
                Digital Sorcery was founded by infrastructure engineers who&apos;ve spent years building and scaling cloud-native systems across manufacturing, energy, SaaS, and enterprise. We&apos;ve seen the same problems repeat across organisations — AI prototypes that never ship, costs that spiral, teams that drown in alerts.
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, maxWidth: "65ch" }}>
                We built a practice around solving them with hands-on engineering — not strategy decks, not vendor partnerships. The foundation comes from <strong className="text-white">BlackMagickOps</strong>; Digital Sorcery adds the intelligence layer.
              </p>
            </motion.div>

            {/* Right rail — Founded / Team / Booking from. Capacity scarcity goes here. */}
            <motion.div className="md:col-span-3 md:col-start-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }}>
              <div className="flex flex-col" style={{ gap: "var(--fib-3)" }}>
                <div style={{ borderTop: "1px solid var(--color-ds-border)", paddingTop: "var(--fib-2)" }}>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-1)" }}>
                    Founded
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-sm)" }}>
                    2024
                  </span>
                </div>
                <div style={{ borderTop: "1px solid var(--color-ds-border)", paddingTop: "var(--fib-2)" }}>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-1)" }}>
                    Team
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-sm)" }}>
                    6 engineers
                  </span>
                </div>
                <div style={{ borderTop: "1px solid var(--color-ds-warm-dim)", paddingTop: "var(--fib-2)" }}>
                  <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-1)" }}>
                    Currently booking
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-sm)" }}>
                    From June 2026
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="ds-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: "var(--fib-6)" }}>
            <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>
              How we think
            </span>
            <TextScramble
              as="h2"
              className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
            >
              How We Think
            </TextScramble>
          </motion.div>

          {/* Principles — stacked editorial (mirrors Services / Stack / Recent Engagements rhythm) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col"
          >
            {principles.map((p, i) => {
              const PrincipleGlyph = p.Glyph;
              return (
              <motion.article
                key={p.title}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-12"
                style={{
                  gap: "var(--fib-3)",
                  padding: "var(--fib-5) 0",
                  borderTop: "1px solid var(--color-ds-border)",
                }}
              >
                <div className="md:col-span-4 flex items-start" style={{ gap: "var(--fib-3)" }}>
                  <PrincipleGlyph size={48} variant={p.variant} ariaLabel={p.glyphLabel} className="flex-shrink-0" />
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
                      {p.title}
                    </h3>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, maxWidth: "70ch" }}>
                    {p.detail}
                  </p>
                </div>
              </motion.article>
              );
            })}
            <div style={{ borderTop: "1px solid var(--color-ds-border)" }} />
          </motion.div>
        </div>
      </section>

      {/* === TEAM === */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)", backgroundColor: "var(--color-ds-carbon)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}>
            <div className="md:col-span-7">
              <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>
                The team
              </span>
              <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)" }}>
                Senior engineers. No juniors offshored.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:self-end">
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                Six engineers across the Nordics, DACH, the Netherlands, and Spain. Every engagement is led by a principal who writes code in your repo.
              </p>
            </div>
          </div>

          {/* Team — 2-col grid (3 rows × 2 cards). Breaks the banned 3-equal pattern; each card gets more breathing room. */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "var(--fib-3)" }}
          >
            {team.map((m) => (
              <motion.article
                key={m.name}
                variants={fadeUp}
                className="flex items-start"
                style={{ gap: "var(--fib-4)", padding: "var(--fib-4) var(--fib-5)", border: "1px solid var(--color-ds-border)" }}
              >
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center font-[family-name:var(--font-mono)] tracking-[0.05em]"
                  style={{
                    flexShrink: 0,
                    width: "70px",
                    height: "70px",
                    border: "1px solid var(--color-ds-warm-dim)",
                    fontSize: "var(--text-fib-md)",
                    color: "var(--color-ds-warm)",
                  }}
                >
                  {m.initials}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-1)", letterSpacing: "-0.01em" }}>
                    {m.name}
                  </h3>
                  <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}>
                    {m.role}
                  </p>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.6, maxWidth: "50ch" }}>
                    {m.bg}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === ENGAGEMENT SHAPE === */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}>
            <div className="md:col-span-7">
              <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>
                Engagement shape
              </span>
              <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)" }}>
                Three shapes. Fixed scope.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:self-end">
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                Most engagements are fixed-scope so you know the budget before we start. Day rate published below if a fixed scope doesn&apos;t fit.
              </p>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col"
          >
            {engagements.map((e) => {
              const EngGlyph = e.Glyph;
              return (
              <motion.article
                key={e.n}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-12"
                style={{
                  gap: "var(--fib-3)",
                  padding: "var(--fib-5) 0",
                  borderTop: "1px solid var(--color-ds-border)",
                }}
              >
                <div className="md:col-span-3 flex items-start" style={{ gap: "var(--fib-3)" }}>
                  <EngGlyph size={56} variant={e.variant} ariaLabel={e.glyphLabel} className="flex-shrink-0" />
                  <div className="flex flex-col" style={{ gap: "var(--fib-1)" }}>
                    <span
                      className="font-[family-name:var(--font-mono)]"
                      style={{ fontSize: "11px", color: "var(--color-ds-warm)", letterSpacing: "0.1em" }}
                    >
                      {e.n}
                    </span>
                    <h3
                      className="font-[family-name:var(--font-display)] font-semibold text-white"
                      style={{ fontSize: "var(--text-fib-md)", letterSpacing: "-0.01em" }}
                    >
                      {e.type}
                    </h3>
                  </div>
                </div>

                <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--fib-4)" }}>
                  <div>
                    <span className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-2)" }}>
                      Duration
                    </span>
                    <p className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-base)", letterSpacing: "0" }}>
                      {e.duration}
                    </p>
                  </div>
                  <div>
                    <span className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}>
                      Price
                    </span>
                    <p className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-base)", letterSpacing: "0" }}>
                      {e.price}
                    </p>
                  </div>
                  <div>
                    <span className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-2)" }}>
                      Output
                    </span>
                    <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.55 }}>
                      {e.output}
                    </p>
                  </div>
                </div>
              </motion.article>
              );
            })}
            <div style={{ borderTop: "1px solid var(--color-ds-border)" }} />
          </motion.div>

          {/* Retainer + day rate notes */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--fib-3)", marginTop: "var(--fib-5)" }}>
            <div style={{ padding: "var(--fib-4)", border: "1px solid var(--color-ds-border)" }}>
              <span className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-2)" }}>
                After handoff
              </span>
              <p className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-2)", letterSpacing: "0" }}>
                Managed retainer · from €22,000 / month
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.55 }}>
                SRE coverage, drift correction, and continued advisory after your team has the keys.
              </p>
            </div>
            <div style={{ padding: "var(--fib-4)", border: "1px solid var(--color-ds-border)" }}>
              <span className="block font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]" style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-2)" }}>
                If a fixed scope doesn&apos;t fit
              </span>
              <p className="font-[family-name:var(--font-mono)] text-white" style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-2)", letterSpacing: "0" }}>
                Principal day rate · €1,800 &nbsp;·&nbsp; Senior · €1,400
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.55 }}>
                Time-and-materials available, but most clients prefer a fixed-scope estimate first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === RECENT ENGAGEMENTS === */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)", backgroundColor: "var(--color-ds-carbon)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}>
            <div className="md:col-span-7">
              <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block" style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}>
                Recent engagements
              </span>
              <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "var(--text-fib-xl)" }}>
                What it looks like in practice.
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:self-end">
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                Anonymised by sector + headcount. Specifics on request under NDA.
              </p>
            </div>
          </div>

          {/* Stacked editorial — three rows, no 3-equal-card grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col"
          >
            {recentEngagements.map((c, i) => {
              const RecGlyph = c.Glyph;
              return (
              <motion.article
                key={c.title}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-12"
                style={{
                  gap: "var(--fib-3)",
                  padding: "var(--fib-5) 0",
                  borderTop: "1px solid var(--color-ds-border)",
                }}
              >
                <div className="md:col-span-4 flex items-start" style={{ gap: "var(--fib-3)" }}>
                  <RecGlyph size={56} variant={c.variant} ariaLabel={c.glyphLabel} className="flex-shrink-0" />
                  <div className="flex flex-col" style={{ gap: "var(--fib-1)" }}>
                    <span
                      className="font-[family-name:var(--font-mono)]"
                      style={{ fontSize: "11px", color: "var(--color-ds-warm)", letterSpacing: "0.1em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim" style={{ fontSize: "10px" }}>
                      {c.sector}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-white" style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-2)", letterSpacing: "-0.01em" }}>
                    {c.title}
                  </h3>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.6, maxWidth: "65ch" }}>
                    {c.result}
                  </p>
                </div>
              </motion.article>
              );
            })}
            <div style={{ borderTop: "1px solid var(--color-ds-border)" }} />
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--fib-4)" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5 }}>
              <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim" style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}>
                Methodology
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                DORA metrics, SPACE framework, FinOps Foundation Crawl/Walk/Run. Industry-standard benchmarks, not vanity metrics.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim" style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}>
                Approach
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                Pair programming, knowledge transfer, your team owns everything we build. No drive-by consulting. No black boxes.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-dim" style={{ fontSize: "11px", marginBottom: "var(--fib-2)" }}>
                Philosophy
              </p>
              <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>
                Platform as a product. Open standards. No vendor lock-in. No proprietary frameworks. Zero dependency on us after knowledge transfer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-8)", borderTop: "1px solid var(--color-ds-border)" }}>
        <div className="ds-container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: "var(--phi-major)" }}>
            <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-4)" }}>
              Want to work with engineers who actually ship?
            </h2>
            <div className="flex flex-col sm:flex-row items-start" style={{ gap: "var(--fib-3)" }}>
              <a
                href="/contact"
                className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn"
                style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) var(--fib-4)" }}
              >
                <span>Start a Discovery</span>
              </a>
              <span className="text-ds-text-dim self-center" style={{ fontSize: "var(--text-fib-sm)" }}>
                sayhi@digitalsourcery.ai
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
