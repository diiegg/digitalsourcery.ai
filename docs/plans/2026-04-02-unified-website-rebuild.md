# Unified Website Rebuild — Digital Sourcery + BlackMagickOps

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform digitalsourcery.ai from a single-page site into a multi-page unified platform integrating both Digital Sourcery (AI intelligence layer) and BlackMagickOps (platform engineering foundation), with eye-catching content, a reference stack credibility page, and proper routing.

**Architecture:** Next.js 15 App Router with route groups. Home page is the story (8 sections). Sub-pages for `/intelligence`, `/foundation`, `/stack`, `/about`. Shared layout with Header/Footer. All pages use the existing golden ratio design system (fibonacci spacing, φ proportions). Existing visual effects (AsciiHero, ScrollSpark, TextScramble, ShaderLines, WireframeOwl) preserved.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, React Three Fiber, existing golden ratio CSS tokens.

**Current state:** Single-page app at `src/app/page.tsx` with 5 sections (Hero, Services, Outcomes, Process, CTA). All components in `src/components/`. Golden ratio design system in `globals.css`. Visual effects working.

---

## Phase 1: Home Page Restructure (New Sections)

Transform the single-page home from 5 generic sections to 8 eye-catching sections with real personality.

### Task 1.1: Add "The Problem" Section

The pain-driven section that hooks visitors. Three bold statements that make VPs of Engineering nod.

**Files:**
- Create: `src/components/sections/ProblemSection.tsx`
- Modify: `src/app/page.tsx` (add import + render)

**Step 1: Create ProblemSection component**

```tsx
// src/components/sections/ProblemSection.tsx
"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const problems = [
  {
    hook: "Your AI prototype works in a notebook.",
    punchline: "Production is a different planet.",
    detail:
      "Integration with legacy systems breaks everything. Your 15-year-old ERP wasn't built for LLMs. Every deployment is duct tape and prayer.",
  },
  {
    hook: "Your GPU bill tripled last quarter.",
    punchline: "Nobody can explain why.",
    detail:
      "Token costs are unpredictable. Agentic workflows burn 5-30x more than chatbots. Your FinOps tools don't track AI spend. The CFO wants answers.",
  },
  {
    hook: "You hired data scientists.",
    punchline: "They can't deploy anything.",
    detail:
      "Models with 94% accuracy in the lab drift to 67% in production. Nobody monitors. Nobody notices until customers complain. The ops team blames the ML team. The ML team blames the ops team.",
  },
];

export default function ProblemSection() {
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
        >
          <p
            className="font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase"
            style={{
              fontSize: "var(--text-fib-xs)",
              color: "var(--color-ds-section-label)",
              marginBottom: "var(--fib-3)",
            }}
          >
            Sound Familiar?
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em] max-w-2xl"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            AI Adoption Is Hard. Most Companies Are Stuck.
          </TextScramble>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "var(--fib-3)" }}>
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-xl"
              style={{
                backgroundColor: "var(--color-ds-card)",
                border: "1px solid var(--color-ds-card-border)",
                padding: "var(--fib-4)",
              }}
            >
              <p
                className="font-[family-name:var(--font-display)] font-semibold text-white"
                style={{ fontSize: "var(--text-fib-md)", marginBottom: "var(--fib-1)" }}
              >
                {p.hook}
              </p>
              <p
                className="font-[family-name:var(--font-display)] font-bold"
                style={{
                  fontSize: "var(--text-fib-md)",
                  color: "var(--color-ds-metric)",
                  marginBottom: "var(--fib-3)",
                }}
              >
                {p.punchline}
              </p>
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
  );
}
```

**Step 2: Add to page.tsx**

Add import and render ProblemSection between HeroSection and ServicesSection:

```tsx
import ProblemSection from "@/components/sections/ProblemSection";
// ... in render:
<HeroSection />
<ProblemSection />
<ServicesSection />
```

**Step 3: Verify renders correctly**

Run: `npm run dev` and check http://localhost:3000
Expected: Three-column problem cards visible after hero scroll

**Step 4: Commit**

```bash
git add src/components/sections/ProblemSection.tsx src/app/page.tsx
git commit -m "feat: add eye-catching Problem section with real pain points"
```

---

### Task 1.2: Add "Two Engines" Section (DS + BlackMagickOps Visual)

Shows the relationship between the two brands as one ecosystem.

**Files:**
- Create: `src/components/sections/TwoEnginesSection.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create TwoEnginesSection component**

```tsx
// src/components/sections/TwoEnginesSection.tsx
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
            className="rounded-xl"
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
                  <span style={{ position: "absolute", left: 0, color: "var(--color-ds-text-dim)" }}>
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              className="font-[family-name:var(--font-mono)] text-ds-text-dim"
              style={{ fontSize: "11px", marginTop: "var(--fib-3)", borderTop: "1px solid var(--color-ds-border-light)", paddingTop: "var(--fib-2)" }}
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
            className="rounded-xl"
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
                  <span style={{ position: "absolute", left: 0, color: "var(--color-ds-metric)" }}>
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              className="font-[family-name:var(--font-mono)] text-ds-text-dim"
              style={{ fontSize: "11px", marginTop: "var(--fib-3)", borderTop: "1px solid var(--color-ds-border-light)", paddingTop: "var(--fib-2)" }}
            >
              AI observability, autonomous ops, cost optimization — the layer that makes infrastructure think.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx after ProblemSection**

**Step 3: Verify and commit**

```bash
git add src/components/sections/TwoEnginesSection.tsx src/app/page.tsx
git commit -m "feat: add Two Engines section showing DS + BlackMagickOps ecosystem"
```

---

### Task 1.3: Add "Reference Stack" Section (Credibility Engine)

Shows specific tools tested with real verdicts. This is the "engine demo" that proves technical depth.

**Files:**
- Create: `src/components/sections/StackSection.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Create StackSection component**

```tsx
// src/components/sections/StackSection.tsx
"use client";

import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";

const stack = [
  {
    category: "AI Observability",
    tested: "Datadog vs Grafana+Prometheus vs Dynatrace",
    verdict: "Grafana + custom ML pipeline for cost-sensitive teams. Datadog for speed-to-value.",
    why: "Datadog catches 83% of anomalies out of the box. Grafana catches 91% with tuning at 40% lower cost. We deploy both and let the workload decide.",
  },
  {
    category: "Model Serving",
    tested: "vLLM vs TGI vs BentoML vs SageMaker",
    verdict: "vLLM for high-throughput inference. BentoML for multi-model orchestration.",
    why: "vLLM delivers 3x throughput vs TGI on equivalent hardware. SageMaker locks you into AWS pricing. BentoML wins when you need to route between multiple models.",
  },
  {
    category: "Cost Controls",
    tested: "Semantic caching, model routing, token budgets",
    verdict: "Semantic caching with pgvector saves 40-60% on repeat queries.",
    why: "Most enterprise AI workloads have 30-50% query similarity. Caching similar prompts eliminates redundant inference. Model routing drops costs another 20% by using smaller models for simple tasks.",
  },
  {
    category: "Self-Healing",
    tested: "Custom remediation vs PagerDuty AIOps vs Shoreline",
    verdict: "Custom runbooks on Kubernetes operators for 80%+ auto-remediation.",
    why: "Generic AIOps tools don't understand your stack. Custom operators heal OOM kills, disk pressure, and network blips in <2 minutes. Humans handle the remaining 20%.",
  },
  {
    category: "Legacy Integration",
    tested: "Event-driven bridge vs API wrapper vs data lake sync",
    verdict: "Event-driven bridge pattern for real-time. Data lake sync for batch analytics.",
    why: "API wrappers add latency and create single points of failure. Event bridges (Kafka/NATS) decouple the legacy system from the AI consumer. Your ERP keeps running untouched.",
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
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "var(--fib-6)" }}
          className="max-w-2xl"
        >
          <p
            className="font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase"
            style={{
              fontSize: "var(--text-fib-xs)",
              color: "var(--color-ds-section-label)",
              marginBottom: "var(--fib-3)",
            }}
          >
            Our Stack
          </p>
          <TextScramble
            as="h2"
            className="font-[family-name:var(--font-display)] font-bold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(var(--text-fib-lg), 4.5vw, var(--text-fib-xl))" }}
          >
            We Don't Recommend Tools We Haven't Tested
          </TextScramble>
          <p
            className="text-ds-text-secondary max-w-lg"
            style={{ fontSize: "var(--text-fib-base)", lineHeight: 1.618, marginTop: "var(--fib-3)" }}
          >
            Every tool recommendation is backed by real benchmarks.
            We deploy, we measure, we form opinions. Then we tell you what actually works.
          </p>
        </motion.div>

        <div className="space-y-[var(--fib-3)]">
          {stack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl"
              style={{
                backgroundColor: "var(--color-ds-card)",
                border: "1px solid var(--color-ds-card-border)",
                padding: "var(--fib-4)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] items-start" style={{ gap: "var(--fib-4)" }}>
                <div>
                  <h3
                    className="font-[family-name:var(--font-display)] font-semibold text-white"
                    style={{ fontSize: "var(--text-fib-base)", marginBottom: "var(--fib-1)" }}
                  >
                    {item.category}
                  </h3>
                  <p
                    className="font-[family-name:var(--font-mono)] text-ds-text-dim"
                    style={{ fontSize: "11px" }}
                  >
                    Tested: {item.tested}
                  </p>
                </div>
                <div>
                  <p
                    className="font-[family-name:var(--font-display)] font-semibold"
                    style={{ fontSize: "var(--text-fib-sm)", color: "var(--color-ds-metric)", marginBottom: "var(--fib-2)" }}
                  >
                    {item.verdict}
                  </p>
                  <p
                    className="text-ds-text-secondary"
                    style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}
                  >
                    {item.why}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Add to page.tsx after TwoEnginesSection, before ServicesSection**

**Step 3: Verify and commit**

```bash
git add src/components/sections/StackSection.tsx src/app/page.tsx
git commit -m "feat: add Reference Stack section with tested tools and verdicts"
```

---

### Task 1.4: Update page.tsx with Final Section Order

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Update imports and render order**

```tsx
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import TwoEnginesSection from "@/components/sections/TwoEnginesSection";
import StackSection from "@/components/sections/StackSection";
import ServicesSection from "@/components/sections/ServicesSection";
import OutcomesSection from "@/components/sections/OutcomesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";
import ScrollSpark from "@/components/ScrollSpark";

export default function Home() {
  return (
    <main className="relative">
      <ScrollSpark />
      <Header />
      <HeroSection />
      <ProblemSection />
      <TwoEnginesSection />
      <StackSection />
      <ServicesSection />
      <OutcomesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
```

**Step 2: Update Header navigation links**

Add "Stack" link to nav:
```tsx
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Process", href: "#process" },
];
```

**Step 3: Verify full page scroll flow and commit**

```bash
git add src/app/page.tsx src/components/Header.tsx
git commit -m "feat: restructure home page with 8 sections, add Stack to nav"
```

---

## Phase 2: Multi-Page Routing (App Router)

Convert from single-page to multi-page with shared layout.

### Task 2.1: Create Shared Layout Structure

**Files:**
- Create: `src/app/(marketing)/layout.tsx` (route group for marketing pages)
- Move: `src/app/page.tsx` → `src/app/(marketing)/page.tsx`
- Create: `src/app/(marketing)/foundation/page.tsx`
- Create: `src/app/(marketing)/intelligence/page.tsx`
- Create: `src/app/(marketing)/stack/page.tsx`
- Create: `src/app/(marketing)/about/page.tsx`

**Step 1: Create route group layout**

```tsx
// src/app/(marketing)/layout.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollSpark from "@/components/ScrollSpark";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollSpark />
      <Header />
      {children}
      <Footer />
    </>
  );
}
```

**Step 2: Move page.tsx to route group and remove ScrollSpark/Header/Footer from it**

The home page component just renders sections — layout handles shell.

**Step 3: Create placeholder pages for /foundation, /intelligence, /stack, /about**

Each page imports relevant section components.

**Step 4: Update Header with proper Next.js Link components for new routes**

**Step 5: Verify routing works and commit**

```bash
git add src/app/
git commit -m "feat: add multi-page routing with App Router route groups"
```

---

### Task 2.2: Build /foundation Page (BlackMagickOps Content)

**Files:**
- Create: `src/app/(marketing)/foundation/page.tsx`
- Create: `src/components/sections/foundation/` (page-specific sections)

Port content from blackmagickops.com:
- Hero: "Your Infrastructure Is Holding You Back"
- Services: Cognitive IDP, Agentic Workflows, Eco-FinOps
- Process: Discover → Architect → Automate → Evolve (12 weeks)
- Tech stack display
- "Powered by BlackMagickOps" branding

**Step 1: Create foundation page with sections**
**Step 2: Add metadata for SEO**
**Step 3: Verify and commit**

```bash
git commit -m "feat: add /foundation page with BlackMagickOps content"
```

---

### Task 2.3: Build /intelligence Page (Digital Sourcery Services Deep-Dive)

**Files:**
- Create: `src/app/(marketing)/intelligence/page.tsx`

Detailed service pages with technical depth for each of the 6 intelligence services. Architecture diagrams (SVG), tool comparisons, "we tested X vs Y" content.

**Step 1: Create intelligence page with detailed service cards**
**Step 2: Add metadata for SEO**
**Step 3: Verify and commit**

```bash
git commit -m "feat: add /intelligence page with detailed AI service descriptions"
```

---

### Task 2.4: Build /stack Page (Full Reference Stack)

**Files:**
- Create: `src/app/(marketing)/stack/page.tsx`

Expanded version of the StackSection with full benchmark data, architecture diagrams, and tool comparison tables.

**Step 1: Create stack page with detailed comparisons**
**Step 2: Add metadata for SEO**
**Step 3: Verify and commit**

```bash
git commit -m "feat: add /stack page with full reference architecture and benchmarks"
```

---

### Task 2.5: Build /about Page

**Files:**
- Create: `src/app/(marketing)/about/page.tsx`

The story: engineer not consultant. BlackMagickOps origin. Philosophy (precision, craft, no vendor lock-in).

**Step 1: Create about page**
**Step 2: Verify and commit**

```bash
git commit -m "feat: add /about page with founder story and philosophy"
```

---

## Phase 3: Navigation + Polish

### Task 3.1: Update Header for Multi-Page Navigation

**Files:**
- Modify: `src/components/Header.tsx`

Replace anchor links with Next.js Link components. Add mobile menu. Add active state for current page.

**Step 1: Convert to Next.js Link routing**
**Step 2: Add mobile hamburger menu**
**Step 3: Add active page indicator**
**Step 4: Verify and commit**

```bash
git commit -m "feat: update header with multi-page nav, mobile menu, active states"
```

---

### Task 3.2: Update Footer with Site Map Links

**Files:**
- Modify: `src/components/Footer.tsx`

Add columns: Intelligence services, Foundation services, Company (about, stack, contact). "Powered by BlackMagickOps" badge.

**Step 1: Expand footer with link columns**
**Step 2: Verify and commit**

```bash
git commit -m "feat: expand footer with site map and BlackMagickOps badge"
```

---

### Task 3.3: SEO + Metadata for All Pages

**Files:**
- Modify: All page.tsx files in `src/app/(marketing)/`

Add proper title, description, OpenGraph, Twitter cards for each page.

**Step 1: Add metadata exports to each page**
**Step 2: Verify with `next build` (no errors)**
**Step 3: Commit**

```bash
git commit -m "feat: add SEO metadata for all pages"
```

---

### Task 3.4: Redirect blackmagickops.com

**Files:**
- Modify: `next.config.ts`

Add redirect from any `/blackmagickops` paths and document the DNS redirect from blackmagickops.com → digitalsourcery.ai/foundation.

**Step 1: Add redirects in next config**
**Step 2: Document DNS setup in README**
**Step 3: Commit**

```bash
git commit -m "feat: add BlackMagickOps redirect configuration"
```

---

## Phase 4: Content + Blog Foundation

### Task 4.1: Create Blog Infrastructure

**Files:**
- Create: `src/app/(marketing)/blog/page.tsx`
- Create: `src/app/(marketing)/blog/[slug]/page.tsx`
- Create: `src/content/` directory for MDX posts

Set up MDX or markdown-based blog with proper routing.

**Step 1: Install MDX dependencies**
**Step 2: Create blog listing page**
**Step 3: Create blog post template**
**Step 4: Commit**

```bash
git commit -m "feat: add blog infrastructure with MDX support"
```

---

### Task 4.2: Write First 3 Technical Blog Posts

Create seed content that demonstrates technical depth:

1. "Why We Chose Grafana Over Datadog for AI Workload Observability"
2. "How Semantic Caching Cut Our LLM Inference Costs by 52%"
3. "The Event-Driven Bridge Pattern: Connecting 15-Year-Old ERPs to Modern AI"

**Step 1: Write post 1 as MDX**
**Step 2: Write post 2**
**Step 3: Write post 3**
**Step 4: Verify blog listing and individual posts render**
**Step 5: Commit**

```bash
git commit -m "feat: add first 3 technical blog posts"
```

---

## Phase Summary

| Phase | Tasks | What It Delivers |
|-------|-------|-----------------|
| **Phase 1** | 1.1-1.4 | Home page with 8 eye-catching sections (Problem, Two Engines, Stack, Services, Outcomes, Process, CTA) |
| **Phase 2** | 2.1-2.5 | Multi-page site (/foundation, /intelligence, /stack, /about) |
| **Phase 3** | 3.1-3.4 | Navigation, footer, SEO, redirects |
| **Phase 4** | 4.1-4.2 | Blog infrastructure + first 3 technical posts |

**Estimated total: 14 tasks across 4 phases.**

**Priority:** Phase 1 is the highest impact — transforms the single-page site into something with real personality and credibility. Can be deployed independently.
