# Impeccable Audit Remediation — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Apply all P0/P1/P2/P3 recommendations from the impeccable audit (2026-04-18, score 13/20 → target 18+/20) so the whole site holds the "Precise · Quiet · Arcane" voice and meets WCAG 2.2 AA.

**Architecture:** Twelve discrete tasks, ordered P0 → P1 → P2 → P3. Each task = one focused edit + verification (typecheck, dev-server curl, manual eyeball where motion/voice matters). Voice tasks first because the new /stack page already contradicts the older sections — the longer this gap stays, the more it erodes trust.

**Tech Stack:** Next.js 15 (App Router), React 19, Tailwind CSS 4, Framer Motion 12, React Three Fiber. No test runner installed (`package.json` has no `test` script) — verification is `npx tsc --noEmit` + dev-server route checks + eyeballing in Chrome.

**Conventions:**
- All design/voice changes must respect `.impeccable.md` (project root) — anti-patterns + Precise/Quiet/Arcane brand voice.
- Never reintroduce: gradient text, `border-left/right` >1px, purple/indigo gradients, fake-precise sourceless metrics, "Acme/Nexus" placeholder names, `h-screen`, Inter/Space Grotesk/Outfit/Plus Jakarta.
- Honor the WCAG dim grays we set (`#8a8a8a` mono, `#8e93a0` accent).
- Honor `prefers-reduced-motion` everywhere new motion is added.
- One commit per task. Conventional commit prefixes: `feat:`, `fix:`, `refactor:`, `chore:`, `style:`.

**Verification baseline (run after every task):**
```bash
npx tsc --noEmit
# expect: silent (no errors)
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/{,stack,foundation,intelligence,about}
# expect: 200 200 200 200 200
```

---

## Task 1: Rewrite Home StackSection to consultancy voice [P0]

**Why:** Home `StackSection` currently shows "Real Benchmarks" tag + radar chart with fabricated scores (0.91, 0.85, 0.52, …) + "verdicts" that contradict the rewritten /stack page. CTOs clicking through see two different consultancies. Fix this first — biggest credibility risk.

**Files:**
- Modify: `src/components/sections/StackSection.tsx` (full rewrite)

**Voice & content target:**
- Mirror the tone of `src/app/(marketing)/stack/StackContent.tsx`: "Default / Why / Swap when" framing.
- Show only 3 categories on the home teaser (it's a section, not the full page) — Orchestration, Inference, Observability.
- No fake percentages. No radar chart. End with a "See the full stack →" link to `/stack`.

**Step 1: Read the current `StackContent.tsx` for tone calibration.**
```bash
sed -n '1,80p' src/app/(marketing)/stack/StackContent.tsx
```

**Step 2: Rewrite `StackSection.tsx` with this content shape:**

Header tag: `Reference Stack` (NOT "Real Benchmarks").
H2: `What we open with by default.` (TextScramble OK here — last allowed instance, see Task 6.)
Body: "Three excerpts from our reference stack. Full list, swap conditions, and rationale on the stack page."

Three category rows (stacked, not 3-equal-card grid):
1. **Orchestration & Compute** — Default: Managed Kubernetes — EKS / GKE / AKS. Why: control-plane and ecosystem gravity remain unmatched once a workload needs failure isolation, scheduled batching, and gradual rollouts.
2. **AI Inference & Serving** — Default: vLLM + BentoML, fronted by LiteLLM. Why: PagedAttention throughput on open weights, production wrapping, normalised provider/self-hosted API surface.
3. **Observability** — Default: Grafana + OpenTelemetry. Why: OTEL keeps you portable. The Grafana stack runs from laptop to multi-cluster.

Closing CTA: text link `See the full reference stack →` to `/stack`.

Layout: `grid grid-cols-1 md:grid-cols-12`, 4-col left = label/H2, 8-col right = three stacked category rows separated by `border-top: 1px solid var(--color-ds-border)`. No `refractive-card`. No SVG radar. No mouse-follow glows.

**Step 3: Verify**
```bash
npx tsc --noEmit
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```
Expected: silent + 200. Visit / in Chrome, check the new section reads consistently with /stack.

**Step 4: Commit**
```bash
git add src/components/sections/StackSection.tsx
git commit -m "refactor(home): rewrite StackSection to consultancy voice (drop fake metrics)"
```

---

## Task 2: Rewrite IntelligenceContent voice [P0]

**Why:** Same fake-precise pattern across 5 service cards: "91% detection, 40% lower cost", "52% total cost reduction", "87% auto-healed", "MTTR reduced 70%+", "73% of companies exceed AI budgets". Sourceless precision is anti-precise — destroys "Precise" personality.

**Files:**
- Modify: `src/app/(marketing)/intelligence/IntelligenceContent.tsx`

**Strategy:** Keep the bento layout (it works). Replace each card's `tested` + `verdict` block with an honest "We pick X when Y, Z when not" framing. Remove all percentages without sources.

**Specific edits:**

For each entry in the `services` array (lines 10–62) and `legacyService` (lines 65–73):
- Drop the `tested:` and `verdict:` keys entirely (and the rendering of them at lines 142–146 + 168–171).
- Replace `description` content with concrete consultancy framing: what we build, who it's for, where it doesn't apply.
- Remove all percentage claims unless paired with conditions ("when …", "in our last 3 engagements at scale X").
- Replace `outcomes` checkboxes if any contain percentages — describe behavior, not numbers.

**Specific replacements (use exactly these or close):**
- `tagline: "Make AI work with your existing infrastructure."` — keep.
- `description` for "AI-Driven Platform Engineering": *"We integrate LLMs, autonomous operations, and intelligent tooling into existing systems without ripping and replacing. Engagements typically reach production within 90 days, scoped to one workload at a time."* (remove "12 months" comparative).
- "Intelligent Observability" tagline: *"Detection that earns alert fatigue back."* description: *"Telemetry pipelines that respect dependency graphs. Alert rules calibrated against your actual incident history, not a vendor's defaults."*
- "Autonomous Infrastructure": *"Self-healing for the failure modes worth automating. We do not automate ambiguity."*
- "AI Platforms for Enterprises": *"GPU infrastructure, MLOps pipelines, model deployment, and agentic workflow orchestration. Production-grade rather than notebook-grade."*
- "AI Cost Optimization": *"Real-time token accounting, semantic caching, and routing by complexity. We measure spend per outcome — not per call."*
- "Legacy AI Modernization": keep description, remove "73%" stat from anywhere it appears in the file.

**Also remove:** the path-detail "phase" rows at line 191 — they look clickable (`cursor-pointer`, `+` indicator) but do nothing. See Task 7 for full false-affordance removal; here just delete the `cursor-pointer` class and the `+` glyph if you don't implement expansion.

**Step 3: Verify**
```bash
npx tsc --noEmit
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/intelligence
```

**Step 4: Commit**
```bash
git add src/app/(marketing)/intelligence/IntelligenceContent.tsx
git commit -m "refactor(intelligence): rewrite to consultancy voice; drop fake-precise metrics"
```

---

## Task 3: Add global :focus-visible ring [P1]

**Why:** No global focus style. Keyboard users (and a11y auditors) can't see what's focused. Hard fail WCAG 2.4.7. `.impeccable.md` requires "Visible focus rings."

**Files:**
- Modify: `src/app/globals.css` (add rule near the body styles section)

**Step 1: Add this rule after the existing `::selection` rule (around line 197):**

```css
/* === FOCUS VISIBLE — WCAG 2.4.7 === */
*:focus {
  outline: none;
}
*:focus-visible {
  outline: 2px solid var(--color-ds-crystalline);
  outline-offset: 2px;
  border-radius: 2px;
}
/* Ring on the rotating-gradient CTA — outline can be hidden by the conic mask, use box-shadow */
.rotating-gradient-btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ds-black), 0 0 0 4px var(--color-ds-crystalline);
}
```

**Step 2: Verify**
Run dev server, tab through home page, confirm visible silver ring appears around each focusable element (links, buttons, the rotating-gradient CTA).

**Step 3: Commit**
```bash
git add src/app/globals.css
git commit -m "feat(a11y): add global :focus-visible ring (WCAG 2.4.7)"
```

---

## Task 4: Reduced-motion CSS guards [P1]

**Why:** Three CSS animations ignore `prefers-reduced-motion`: `refractive-shimmer` (every prismatic card), `spin-gradient` (rotating CTA border), `flow-line` (ProcessSection dashed path). JS animations honor it; CSS doesn't.

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/sections/ProcessSection.tsx` (the `<style jsx>` block at the bottom)

**Step 1: Add to `globals.css` (place after the keyframes definitions, near line 320):**

```css
/* === REDUCED MOTION — WCAG 2.3.3 === */
@media (prefers-reduced-motion: reduce) {
  .prismatic-glass::before,
  .refractive-card::before,
  .rotating-gradient-btn {
    animation: none !important;
  }
  /* Static accent for the rotating CTA so it remains visually distinct */
  .rotating-gradient-btn {
    background: var(--color-ds-warm-dim);
  }
}
```

**Step 2: Update `ProcessSection.tsx` `<style jsx>` block (lines 110-119):**

```jsx
<style jsx>{`
  .flow-line {
    animation: flowDash 3s linear infinite;
  }
  @keyframes flowDash {
    to { stroke-dashoffset: -32; }
  }
  @media (prefers-reduced-motion: reduce) {
    .flow-line { animation: none; }
  }
`}</style>
```

**Step 3: Verify**
In Chrome DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`. Reload home — confirm the rotating CTA stops, refractive cards stop shimmering, ProcessSection dashed line stops.

**Step 4: Commit**
```bash
git add src/app/globals.css src/components/sections/ProcessSection.tsx
git commit -m "feat(a11y): honor prefers-reduced-motion in CSS animations"
```

---

## Task 5: Hero min-h-screen → min-h-[100dvh] + R3F reduced-motion gate [P1]

**Why:** `min-h-screen` causes iOS Safari layout jump when the address bar shows/hides. The R3F WireframeOwl + ShaderLines run continuously even with reduced-motion preference — wasted GPU + ignores the user's stated preference.

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

**Step 1: Change `min-h-screen` → `min-h-[100dvh]`** (line 11).

**Step 2: Add reduced-motion gate around the R3F components.** Replace lines 35-38 with:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.8, delay: 0.3 }}
  className="relative overflow-hidden"
  style={{ aspectRatio: "1 / 1.618", maxHeight: "650px" }}
>
  {!prefersReducedMotion && (
    <>
      <ShaderLines />
      <WireframeOwl />
    </>
  )}
  {prefersReducedMotion && (
    <div
      className="w-full h-full"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, rgba(200,208,224,0.12) 0%, rgba(227,204,177,0.04) 35%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  )}
</motion.div>
```

And import the Framer Motion hook at the top:
```tsx
import { motion, useReducedMotion } from "framer-motion";
```

Then inside the component, before `return`:
```tsx
const prefersReducedMotion = useReducedMotion();
```

**Step 3: Verify**
- DevTools → Rendering → Emulate `prefers-reduced-motion: reduce` → reload `/` → R3F scene replaced by static gradient.
- Resize Safari dev tools or check on mobile preview — no viewport jump.

**Step 4: Commit**
```bash
git add src/components/sections/HeroSection.tsx
git commit -m "fix(hero): use 100dvh and gate R3F behind prefers-reduced-motion"
```

---

## Task 6: Tame TextScramble (one anchor per page + a11y) [P1+P2]

**Why:** TextScramble is on virtually every `<h2>` site-wide. Used everywhere, it stops being an effect and screen readers may re-announce each frame as a heading change. Quiet brand uses it once.

**Files:**
- Modify: `src/components/TextScramble.tsx` (a11y fix — add `aria-live="off"` and a static screen-reader mirror)
- Modify (remove the effect, replace with a plain `<h2>`): `src/components/sections/ProblemSection.tsx`, `TwoEnginesSection.tsx`, `ServicesSection.tsx`, `AntifragileSection.tsx`, `OutcomesSection.tsx`, `ProcessSection.tsx`, `CTASection.tsx`, `src/app/(marketing)/intelligence/IntelligenceContent.tsx` (multiple), `src/app/(marketing)/foundation/FoundationContent.tsx`, `src/app/(marketing)/about/AboutContent.tsx`
- Keep TextScramble on: `HeroSection.tsx` only doesn't use it currently — leave hero alone. Allow ONE TextScramble per page on the most anchor section. **Decision per page:**
  - `/` (home): keep TextScramble on `StackSection` H2 only (rewritten in Task 1).
  - `/stack`: keep on the "Five filters" h2 (already there).
  - `/intelligence`: keep on the hero-adjacent "The Intelligence Path" h2 only.
  - `/foundation`: pick the most anchor h2 (read the file to decide).
  - `/about`: same.

**Step 1: Update `TextScramble.tsx` to expose a static `aria-label` to AT and hide the animated string from screen readers.** Open the file, find the rendered output, wrap the animated text in `aria-hidden="true"` and add a `<span className="sr-only">{originalText}</span>` sibling.

If `sr-only` class doesn't exist in Tailwind v4 setup, add this utility to `globals.css`:
```css
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
  white-space: nowrap; border: 0;
}
```

**Step 2: Replace TextScramble with `<h2>` (or `<h3>`) in every section listed above EXCEPT the one anchor per page.** For each replacement:
- Drop the `import TextScramble from "@/components/TextScramble";` if no other usage in file.
- Convert `<TextScramble as="h2" className="…" style={{…}}>Text</TextScramble>` → `<h2 className="…" style={{…}}>Text</h2>`.

**Step 3: Verify**
```bash
npx tsc --noEmit
```
Visit each route. Confirm only one decoded reveal per page.

**Step 4: Commit**
```bash
git add src/components/TextScramble.tsx src/app/globals.css src/components/sections/ src/app/\(marketing\)/
git commit -m "refactor(motion): restrict TextScramble to one anchor per page; add sr-only mirror"
```

---

## Task 7: Touch targets + false-affordance cleanup [P1+P2]

**Why:** Footer links and Header hamburger are <44×44px (WCAG 2.5.5). Phase rows in `ProcessSection` and `IntelligenceContent` look clickable but do nothing — false affordance erodes trust.

**Files:**
- Modify: `src/components/Footer.tsx` (link padding)
- Modify: `src/components/Header.tsx` (hamburger size)
- Modify: `src/components/sections/ProcessSection.tsx` (remove `cursor-pointer` and unmet expand affordance from phase items if present)
- Modify: `src/app/(marketing)/intelligence/IntelligenceContent.tsx:191` (already partial via Task 2 — finish here if not done)

**Step 1: Footer link padding.** In `Footer.tsx`, change every link `style` that contains `padding: var(--fib-2) 0` (lines ~57, 77, 97) to:
```tsx
style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-2) 0", lineHeight: 1.618, display: "block", minHeight: "44px" }}
```
(Adds `minHeight: "44px"` so the tap target hits target size while preserving the dense visual rhythm.)

**Step 2: Header hamburger.** In `Header.tsx:91`, change `w-10 h-10` → `w-11 h-11`.

**Step 3: Verify**
Inspect in DevTools mobile emulation; confirm tap targets ≥44px.

**Step 4: Commit**
```bash
git add src/components/Footer.tsx src/components/Header.tsx src/app/\(marketing\)/intelligence/IntelligenceContent.tsx
git commit -m "fix(a11y): bump touch targets to 44x44 (WCAG 2.5.5); remove false-affordance cursor"
```

---

## Task 8: Restructure ServicesSection (no more 3-equal-card row) [P2]

**Why:** Current `ServicesSection` is `md:grid-cols-3` with three identical refractive cards — exactly the AI-default pattern banned by design-taste-frontend.

**Files:**
- Modify: `src/components/sections/ServicesSection.tsx`

**Strategy:** Switch to an asymmetric `md:grid-cols-12` split with one larger feature card (8 col) + two stacked smaller cards (4 col). OR a stacked editorial list (matching new /stack rhythm) — recommended.

**Step 1: Replace the `<motion.div … grid grid-cols-1 md:grid-cols-3 …>` (line 141) with:**

```tsx
<motion.div
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  className="grid grid-cols-1 md:grid-cols-12"
  style={{ gap: "var(--fib-3)" }}
>
  {/* Feature: AI Platform Engineering — 8 col */}
  <div className="md:col-span-8">
    <ServiceCard service={services[0]} />
  </div>
  {/* Two stacked smaller cards — 4 col column */}
  <div className="md:col-span-4 flex flex-col" style={{ gap: "var(--fib-3)" }}>
    <ServiceCard service={services[1]} />
    <ServiceCard service={services[2]} />
  </div>
</motion.div>
```

This preserves the existing `ServiceCard` component but breaks the three-equal-card monoculture.

**Step 2: Verify**
```bash
npx tsc --noEmit
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```
Eyeball: confirm the layout reads as feature + 2 stacked, not 3 identical.

**Step 3: Commit**
```bash
git add src/components/sections/ServicesSection.tsx
git commit -m "refactor(services): break 3-equal-card grid into asymmetric 8/4 layout"
```

---

## Task 9: Remove ThemeSwitcher + dead [data-theme="mono"] [P2]

**Why:** `CLAUDE.md` says "no theme switcher — dark only." `ThemeSwitcher.tsx` exists but isn't mounted; the `[data-theme="mono"]` block in `globals.css` is dead code. Carrying both signals confused intent and bloats CSS.

**Files:**
- Delete: `src/components/ThemeSwitcher.tsx`
- Modify: `src/app/globals.css` (remove the entire `[data-theme="mono"] { … }` block, lines 56–77)
- Audit: confirm no component imports `ThemeSwitcher` before deleting.

**Step 1:**
```bash
grep -r "ThemeSwitcher" src/
```
Expected: only `src/components/ThemeSwitcher.tsx` itself (no imports). If imports exist, remove them first.

**Step 2:** Delete `src/components/ThemeSwitcher.tsx`.

**Step 3:** Edit `globals.css` — remove the `[data-theme="mono"] { … }` block. Keep the `[data-theme="accent"]` block (that's the live theme).

**Step 4: Verify**
```bash
npx tsc --noEmit
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```

**Step 5: Commit**
```bash
git add -A
git commit -m "chore: remove orphan ThemeSwitcher and dead [data-theme=mono] CSS"
```

---

## Task 10: Distill CTASection background SVG [P2]

**Why:** ~40 SVG primitives (arcs, circles, scatter dots) compete with the actual CTA. Quiet brand uses fewer marks with more intent.

**Files:**
- Modify: `src/components/sections/CTASection.tsx` (lines 10–49)

**Step 1: Replace the dense SVG with a simpler composition:**

```tsx
<svg
  className="absolute inset-0 w-full h-full pointer-events-none"
  viewBox="0 0 1440 600"
  fill="none"
  preserveAspectRatio="xMidYMid slice"
  aria-hidden="true"
>
  <defs>
    <radialGradient id="cta-glow" cx="32%" cy="55%" r="55%">
      <stop offset="0%" stopColor="#E3CCB1" stopOpacity="0.07" />
      <stop offset="55%" stopColor="#c8d0e0" stopOpacity="0.02" />
      <stop offset="100%" stopColor="transparent" stopOpacity="0" />
    </radialGradient>
  </defs>
  <rect width="1440" height="600" fill="url(#cta-glow)" />
  <path
    d="M0 320 Q360 260 720 320 T1440 320"
    stroke="#c8d0e0"
    strokeWidth="0.5"
    opacity="0.06"
    fill="none"
  />
  <circle cx="460" cy="320" r="130" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.05" />
</svg>
```

Three marks: warm radial glow + one quiet horizontal arc + one concentric circle near the CTA anchor. Scatter dots removed (decorative noise).

**Step 2: Verify** — visit `/` (CTA at bottom), confirm the section feels calmer without losing atmosphere.

**Step 3: Commit**
```bash
git add src/components/sections/CTASection.tsx
git commit -m "refactor(cta): distill background SVG to one glow + one arc + one circle"
```

---

## Task 11: Mobile menu — focus trap + ESC close [P3]

**Why:** Mobile menu opens but doesn't trap focus or close on ESC. Minor a11y polish.

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1:** Add a `useEffect` that listens for `keydown` ESC when `mobileOpen` is true and closes the menu. Add `role="dialog"` + `aria-modal="true"` on the mobile dropdown wrapper. Add `aria-expanded={mobileOpen}` and `aria-controls="mobile-menu"` on the hamburger button. Give the dropdown `id="mobile-menu"`.

```tsx
useEffect(() => {
  if (!mobileOpen) return;
  const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
  document.addEventListener("keydown", onKey);
  return () => document.removeEventListener("keydown", onKey);
}, [mobileOpen]);
```

**Step 2: Verify** Open mobile menu in DevTools mobile preview; press ESC; menu closes.

**Step 3: Commit**
```bash
git add src/components/Header.tsx
git commit -m "feat(a11y): mobile menu ESC close + dialog semantics"
```

---

## Task 12: Polish sweep — aria-hidden decorative SVGs + metadata [P3]

**Why:** Final cleanup. Decorative SVGs without `aria-hidden` count as content to assistive tech. Some page metadata still uses old "tested benchmarks" / "AI-powered" phrasing.

**Files:**
- Audit-and-modify: every `<svg …>` in section components that is purely decorative — add `aria-hidden="true"` (already done on the new CTASection in Task 10).
- Modify: `src/app/(marketing)/intelligence/page.tsx`, `src/app/(marketing)/foundation/page.tsx`, `src/app/(marketing)/about/page.tsx` — review `metadata.description`; rewrite any that contain unsourced metrics or "AI-powered/AI-driven" framing into the consultancy voice.

**Step 1: Find SVG candidates lacking aria-hidden:**
```bash
grep -rn "<svg " src/components/sections/ src/app/\(marketing\)/ | grep -v "aria-hidden"
```
Expected output lists files+lines. For each one that's purely decorative (no semantic meaning, e.g. background patterns, shimmer, fragment art), add `aria-hidden="true"`.

**Step 2: Sweep page.tsx metadata:**
```bash
grep -rn "description:" src/app/\(marketing\)/*/page.tsx
```
Rewrite any descriptions containing "AI-powered", "tested benchmarks", or precise sourceless numbers.

**Step 3: Verify**
```bash
npx tsc --noEmit
```

**Step 4: Commit**
```bash
git add -A
git commit -m "polish(a11y): aria-hidden on decorative SVGs; consultancy-voice metadata sweep"
```

---

## Final verification

After all 12 tasks:

```bash
npx tsc --noEmit
# expect: silent
curl -s -o /dev/null -w "/ %{http_code}\n" http://localhost:3000/
curl -s -o /dev/null -w "/stack %{http_code}\n" http://localhost:3000/stack
curl -s -o /dev/null -w "/foundation %{http_code}\n" http://localhost:3000/foundation
curl -s -o /dev/null -w "/intelligence %{http_code}\n" http://localhost:3000/intelligence
curl -s -o /dev/null -w "/about %{http_code}\n" http://localhost:3000/about
# expect: all 200
```

Then re-run `/audit` to confirm score improved.

---

## Out of scope

- Replacing `refractive-card` shimmer with something else — current implementation is on-brief.
- Migrating away from Tailwind v4 / Next.js 15 / React 19.
- Implementing a CMS or i18n.
- Adding analytics or A/B testing infrastructure.
