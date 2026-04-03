# Product Strategy Analysis: BlackMagickOps vs Digital Sourcery
**Author**: Senior Product Manager
**Date**: 2026-03-28
**Question**: Should two sibling brands MERGE or STAY SEPARATE?

---

## 1. Executive Summary

**VERDICT: MERGE UNDER DIGITAL SOURCERY WITH BLACKMAGICKOPS AS A SERVICE LINE**

The current positioning creates unnecessary friction for a solo founder while confusing buyers who don't understand where one ends and the other begins. The "foundation vs intelligence layer" distinction is architecturally correct but commercially unviable—enterprise buyers don't purchase infrastructure and AI separately, they buy outcomes. Digital Sourcery should be the primary brand with BlackMagickOps repositioned as "Platform Foundations" or absorbed into the core service catalog. This eliminates split messaging, reduces operational overhead, and presents a unified full-stack offering that matches how customers actually buy: they want AI-capable infrastructure, not infrastructure THEN AI.

---

## 2. Option A: Two Separate Brands

### Pros
- **Clear specialization**: BlackMagickOps = proven infra, Digital Sourcery = cutting-edge AI
- **Different buyer personas**: Infrastructure teams vs AI/ML teams
- **Risk isolation**: If AI hype crashes, BlackMagickOps remains viable
- **Pricing flexibility**: Can charge differently for commodity infra vs premium AI services
- **Land-and-expand**: Start with BlackMagickOps foundation, upsell Digital Sourcery intelligence

### Cons
- **Solo founder tax**: Two websites, two marketing funnels, two pitch decks, two brand identities—unsustainable for one person
- **Customer confusion**: "Do I need both? Which do I start with? Are these bundled?"
- **Artificial separation**: Buyers don't think "I need Kubernetes then AI"—they think "make my platform intelligent"
- **Weak cross-sell**: Cross-selling requires existing customer base; bootstrapped solo founder has ZERO customers to cross-sell to
- **Diluted authority**: Splitting content/marketing effort means neither brand gains SEO/thought leadership traction
- **Sales complexity**: Every pitch becomes "let me explain our two companies"—instant credibility loss

### Viability Assessment
**NOT VIABLE FOR SOLO FOUNDER**. Cross-sell strategies assume you have customers to cross-sell to. A solo founder needs laser focus on ONE brand, ONE message, ONE funnel. Separate brands only work with:
- Established customer base (don't have)
- Dedicated sales/marketing per brand (don't have)
- Clear non-overlapping buyer orgs (don't have—platform teams DO AI now)

The "foundation + intelligence" split assumes 2015 org structures where infra and ML were separate. In 2026, platform engineering teams OWN AI infrastructure. You're selling to the same person.

---

## 3. Option B: Merge Into One Brand

### Primary Brand: DIGITAL SOURCERY
**Rationale**:
- AI is the market differentiator and premium positioning
- "Digital Sourcery" captures transformation, intelligence, modern stack
- Platform engineering is TABLE STAKES—everyone does Kubernetes. AI-native platform engineering is RARE.
- Higher perceived value and pricing power

### How BlackMagickOps Fits:
**Option B1: Absorb completely** — BlackMagickOps services become "Platform Foundations" tier within Digital Sourcery
**Option B2: Keep as sub-brand** — "Digital Sourcery Platform Foundations, powered by BlackMagickOps" (still maintains heritage but subordinate)

### Recommended Structure
```
DIGITAL SOURCERY
├─ Platform Foundations (fka BlackMagickOps)
│  ├─ Platform Engineering
│  ├─ Infrastructure Automation
│  ├─ Observability & FinOps
│  └─ Platform Acceleration
└─ Intelligence Services (AI layer)
   ├─ Intelligent Observability
   ├─ AI-Driven Platform Engineering
   ├─ AI Platforms for Enterprises
   └─ Autonomous Infrastructure
```

### Pros
- **One website, one funnel, one pitch**: Operational efficiency for solo founder
- **Full-stack positioning**: "We build AI-native infrastructure from day one"
- **Clearer buyer journey**: Start with foundations or intelligence based on maturity, not brand confusion
- **Unified case studies**: Every engagement demonstrates both layers
- **SEO consolidation**: All content builds authority for ONE brand
- **Simpler pricing**: Tiered service packages, not separate brand negotiations

### Cons
- **Loss of BlackMagickOps brand equity**: If it has existing recognition (unlikely as new brand)
- **Positioning risk**: May seem "too broad" without clear ICP focus
- **Harder to pivot**: If AI bubble pops, harder to separate out commodity infra services

### Risk Mitigation
- Keep BlackMagickOps GitHub org and technical brand alive (engineering identity)
- Use "powered by BlackMagickOps" in technical docs/case studies
- Maintain blackmagickops.com as technical blog/redirect to Digital Sourcery

---

## 4. Option C: Alternative Structures

### C1: Digital Sourcery as Umbrella, Two Product Lines
- **Digital Sourcery Platform** (infra)
- **Digital Sourcery Intelligence** (AI)
- Same brand, clear product segmentation
- **Assessment**: Better than separate brands, but still creates unnecessary SKU complexity for solo founder

### C2: BlackMagickOps as Primary, AI as Service Add-On
- Platform engineering first, AI as premium tier
- **Assessment**: WRONG—commoditizes the differentiator. AI should lead positioning.

### C3: Completely New Brand
- Merge both under new identity
- **Assessment**: WASTEFUL—throws away existing work, resets SEO/content, extends time-to-market

### C4: Digital Sourcery Only, Retire BlackMagickOps
- Full absorption, no sub-branding
- **Assessment**: VIABLE—cleanest path, but loses any existing BlackMagickOps equity

**Recommendation**: Stick with Option B (merge under Digital Sourcery, absorb BlackMagickOps as foundational service tier)

---

## 5. Service Validation: Are the 4 Digital Sourcery Services Right?

### Current Services
1. **Intelligent Observability** — AI anomaly detection, predictive incidents, automated remediation
2. **AI-Driven Platform Engineering** — LLM developer portals, natural language provisioning, automated golden paths
3. **AI Platforms for Enterprises** — GPU clusters, MLOps pipelines, model deployment, agentic workflows
4. **Autonomous Infrastructure** — self-healing clusters, predictive scaling, AI chaos testing

### Analysis

**Service 1: Intelligent Observability**
✅ **KEEP** — Clear pain point (alert fatigue), clear AI value-add (anomaly detection), clear ROI (reduced MTTR). Overlaps with BlackMagickOps observability but adds AI layer. Strong market demand (AIOps $19B market).

**Service 2: AI-Driven Platform Engineering**
⚠️ **RENAME/REPOSITION** — "LLM developer portals" is too narrow and gimmicky. Natural language provisioning is cool but not a core pain. Golden paths are valuable but that's baseline platform engineering, not AI-native.

**REVISED**: "AI-Native Developer Platforms" — Intelligent IDPs that learn from usage patterns, auto-generate golden paths from actual dev behavior, predict bottlenecks, suggest architecture improvements. Focus on INTELLIGENCE applied to platform engineering, not chatbots.

**Service 3: AI Platforms for Enterprises**
✅ **KEEP BUT NARROW** — This is the biggest market (companies building AI products) but also most competitive (AWS, GCP, Azure all have MLOps). Your wedge is INTEGRATION WITH LEGACY SYSTEMS—not greenfield GPU clusters (that's commodity). Reframe as "Enterprise AI Infrastructure" with focus on:
- Making legacy systems AI-capable (API wrappers, event streaming, data pipelines)
- Cost-optimized GPU orchestration (FinOps for AI—huge pain point)
- Agentic workflow infrastructure (the new frontier, less competition)

**Service 4: Autonomous Infrastructure**
⚠️ **MERGE WITH SERVICE 1** — "Autonomous Infrastructure" and "Intelligent Observability" are the same thing from different angles. Self-healing IS automated remediation. Predictive scaling IS anomaly detection applied to capacity. AI chaos testing is interesting but niche.

**REVISED**: "Autonomous Operations" — Combines observability, remediation, scaling, resilience testing into one cohesive service. Self-driving infrastructure that predicts, prevents, and heals.

---

### REVISED SERVICE CATALOG

#### TIER 1: Platform Foundations (fka BlackMagickOps)
- Platform Engineering (IDP, golden paths, CI/CD)
- Infrastructure Automation (IaC, multi-cloud, Kubernetes)
- Cloud FinOps & Optimization
- Observability Stack (Prometheus, Grafana, ELK, etc.)

#### TIER 2: Intelligence Services (AI Layer)
1. **Autonomous Operations** — AI-driven observability, self-healing, predictive scaling, automated remediation
2. **AI-Native Developer Platforms** — Intelligent IDPs that learn and optimize, auto-generated golden paths, predictive bottleneck analysis
3. **Enterprise AI Infrastructure** — Legacy system AI integration, cost-optimized GPU/LLM infrastructure, agentic workflow platforms

**3 services, not 4**. Cleaner, less overlap, clearer differentiation.

---

## 6. MVP Service: What to Sell FIRST?

### The Solo Founder Reality
You can't deliver all 6 services (3 foundation + 3 intelligence) alone. You need ONE service to:
- Prove market demand
- Generate cash flow
- Build case studies
- Establish authority

### Evaluation Criteria
1. **Time-to-value**: How fast can you deliver results?
2. **Repeatability**: Can you productize or is every engagement custom?
3. **Market pain**: How urgent is the problem?
4. **Competition**: Can you differentiate?
5. **Solo deliverability**: Can ONE person do this or does it need a team?

### Service Comparison

| Service | Time-to-Value | Repeatability | Market Pain | Competition | Solo Viable? |
|---------|---------------|---------------|-------------|-------------|--------------|
| **Platform Foundations** | Medium (8-12 wks) | High (IaC templates) | High (tech debt) | Very High (every consultancy) | YES (proven skills) |
| **Autonomous Operations** | Medium (6-10 wks) | Medium (need custom models) | Very High (alert fatigue) | Medium (Datadog/New Relic have AI but expensive) | MAYBE (need AI expertise + infra) |
| **AI-Native Dev Platforms** | Long (12+ wks) | Low (highly custom) | Medium (nice-to-have) | Low (niche) | NO (too complex, unclear ROI) |
| **Enterprise AI Infrastructure** | Long (12-20 wks) | Low (every legacy system different) | Very High (AI adoption blocked) | High (SIs, cloud vendors) | NO (needs team, deep integrations) |

### RECOMMENDATION: Start with **Autonomous Operations** (revised Service 1)

**Why?**
- **Strongest pain point**: Every company drowns in alerts, outages cost millions, manual remediation doesn't scale
- **Clear AI differentiator**: Traditional observability = dashboards. Autonomous = AI predicts, prevents, heals automatically
- **Faster than full AI platforms**: You're augmenting existing observability (Datadog, Grafana), not building from scratch
- **Repeatable framework**: Pattern detection models, remediation playbooks, scaling algorithms can be reused across clients
- **Solo viable**: One engagement at a time, MVP can use existing AI APIs (OpenAI, Anthropic) + custom fine-tuning vs building models from scratch
- **Natural upsell**: Once autonomous ops work, client trusts you for AI-native platforms and enterprise AI infra

**MVP Deliverable** (6-8 weeks):
1. **Week 1-2**: Integrate with existing observability stack (Prometheus, Datadog, etc.)
2. **Week 3-4**: Deploy AI anomaly detection models (start with pre-trained, customize as needed)
3. **Week 5-6**: Build automated remediation playbooks (restart services, scale resources, rollback deploys)
4. **Week 7-8**: Predictive alerting (warn BEFORE incidents, not after) + ROI report (hours saved, incidents prevented)

**Pricing**: $25K-50K for MVP, $5K-15K/month managed service after (see pricing section below)

**Why NOT Platform Foundations first?**
- Zero differentiation—every dev shop does Kubernetes consulting
- Lowest pricing power—commodity work = commodity rates
- Doesn't establish AI expertise—you look like every other infra consultant

Start with the hardest problem (autonomous ops), prove you can solve it, THEN offer foundations as natural prerequisite for clients who lack basic infra.

---

## 7. Pricing Reality: What Do Companies Actually Pay?

### Context: Market Rates by Industry & Service

**Platform Foundations (fka BlackMagickOps)**

| Service | Small Co (<50 eng) | Mid-Market (50-500) | Enterprise (500+) |
|---------|---------------------|---------------------|-------------------|
| Platform Engineering (IDP buildout) | $30K-60K project | $75K-150K project | $200K-500K+ (annual retainer) |
| Infrastructure Automation (IaC, Kubernetes) | $20K-40K | $50K-100K | $150K-300K |
| Cloud FinOps Optimization | $15K-30K + 20% of savings | $40K-80K + 15% of savings | $100K+ + 10-15% of savings |
| Observability Stack | $15K-35K setup + $2K-5K/mo | $40K-80K + $5K-15K/mo | $100K+ + $15K-50K/mo |

**Intelligence Services (AI Layer)**

| Service | Small Co | Mid-Market | Enterprise |
|---------|----------|------------|------------|
| **Autonomous Operations** | $25K-50K MVP + $5K-10K/mo | $60K-120K + $10K-25K/mo | $150K-300K + $25K-75K/mo |
| **AI-Native Dev Platforms** | $50K-100K | $100K-250K | $300K-750K+ |
| **Enterprise AI Infrastructure** | N/A (too small) | $150K-400K project | $500K-2M+ (annual contracts) |

### Pricing by Industry Vertical

**Manufacturing/Energy/Logistics** (legacy-heavy, cost-conscious):
- Lower willingness to pay for "innovation"
- Higher willingness for clear ROI (downtime cost savings, efficiency gains)
- Expect long pilot phases (3-6 months) before full contracts
- Typical: $30K-80K pilots, $150K-500K annual if proven

**SaaS/Tech** (cloud-native, AI-forward):
- Higher willingness for cutting-edge (competitive advantage)
- Faster decision cycles (weeks not months)
- Expect equity/rev-share options for startups
- Typical: $50K-150K projects, $200K-1M annual for scale-ups

**Finance/Healthcare** (regulated, security-critical):
- Highest willingness to pay BUT longest sales cycles (9-18 months)
- Require extensive compliance (SOC2, HIPAA, etc.)—overhead kills solo founder margins
- Typical: $100K-500K pilots, $1M+ annual contracts but NOT accessible to solo founder without team/certifications

**Retail/E-commerce** (tight margins, seasonal):
- Moderate willingness, must tie to revenue impact (conversion, uptime during Black Friday)
- Project-based, less recurring revenue
- Typical: $25K-100K projects, $50K-200K annual

### Solo Founder Pricing Strategy

**AVOID**: Hourly/daily rates (caps your income, signals "contractor" not "expert")

**TARGET**: Value-based project pricing + managed service retainers

**Tier 1: Platform Foundations**
- **Setup projects**: $30K-80K (8-12 weeks)
- **Managed service**: $3K-10K/month (ongoing infra management)
- **Target market**: Series A-C startups (50-200 engineers), mid-market companies starting platform engineering

**Tier 2: Autonomous Operations (MVP service)**
- **Pilot/MVP**: $40K-75K (6-8 weeks, single service/team)
- **Production rollout**: $80K-150K (3-6 months, company-wide)
- **Managed AI Ops**: $8K-20K/month (ongoing model tuning, new playbooks, incident analysis)
- **Target market**: Series B+ startups, mid-market with existing observability spend $50K+/year (you replace/augment Datadog/New Relic)

**Tier 3: Enterprise AI Infrastructure**
- **Phase 1 (architecture/pilot)**: $100K-200K (3-4 months)
- **Phase 2 (production)**: $200K-500K (6-12 months)
- **Ongoing optimization**: $15K-40K/month
- **Target market**: Enterprise only, NOT viable until you have team (too complex for solo delivery)

### Revenue Model for Solo Founder (Year 1)

**Conservative** (2 clients):
- 2x Autonomous Operations pilots @ $50K = $100K
- 1x converts to managed service @ $10K/mo x 6 months = $60K
- 1x Platform Foundations project @ $40K = $40K
- **Total Year 1**: $200K revenue

**Realistic** (3-4 clients):
- 3x Autonomous Operations @ $60K avg = $180K
- 2x convert to managed @ $12K/mo x 6 months avg = $144K
- 1x Platform Foundations @ $50K = $50K
- **Total Year 1**: $374K revenue

**Aggressive** (5-6 clients, requires subcontractors):
- 5x Autonomous Operations @ $70K avg = $350K
- 3x managed @ $15K/mo x 8 months avg = $360K
- 2x Platform Foundations @ $60K = $120K
- **Total Year 1**: $830K revenue (but need to pay subcontractors 40-50%, net $415K-500K)

**Reality check**: Solo founder likely caps at $300K-400K revenue without burning out or sacrificing delivery quality. Need to hire/subcontract to scale beyond.

---

## 8. Solo Founder Assessment: Can One Person Deliver These?

### Skills Required by Service

**Platform Foundations**
- ✅ Kubernetes, Terraform, CI/CD (standard platform engineering—one person can do)
- ✅ Cloud platforms (AWS/GCP/Azure—specialize in 1-2, subcontract others)
- ✅ Observability tools (Prometheus, Grafana—commodity skills)
- ⚠️ FinOps (need financial analysis chops, can partner with FinOps platforms like Vantage/CloudZero)

**Autonomous Operations**
- ⚠️ ML/AI expertise (anomaly detection models—can use pre-trained + fine-tuning, don't need to build from scratch)
- ✅ Observability platforms (integrate with existing tools)
- ✅ Automation/scripting (Python, Go for remediation playbooks)
- ⚠️ 24/7 on-call expectations (managed service means incidents happen anytime—need SLA boundaries or partner for follow-the-sun support)

**AI-Native Dev Platforms**
- ❌ Full IDP buildout (Backstage customization, plugin dev—takes team of 3-5 engineers for enterprise)
- ⚠️ LLM integration (can use APIs, but UX design + prompt engineering non-trivial)
- ❌ Ongoing feature dev (clients expect roadmap, iterations—solo can't sustain)

**Enterprise AI Infrastructure**
- ❌ GPU cluster management (Kubernetes + NVIDIA drivers + multi-tenancy = full-time job)
- ❌ MLOps pipelines (Kubeflow, MLflow, custom workflows—too many moving parts)
- ❌ Legacy system integration (every enterprise has different legacy stack—needs team with varied expertise)
- ❌ Security/compliance (SOC2, ISO, HIPAA—requires dedicated resources)

### What One Person CAN Deliver

**YES (solo viable)**:
1. Platform Foundations for small-mid companies (up to 200 engineers)
2. Autonomous Operations MVP + managed service (with clear SLA boundaries—e.g., business hours support, 4-hour response time)
3. Consulting/advisory for AI strategy (workshops, architecture reviews—high-margin, low-delivery overhead)

**MAYBE (solo with subcontractors/partners)**:
1. Platform Foundations for enterprise (subcontract infra work, you do architecture/strategy)
2. Autonomous Operations at scale (partner with MSP for 24/7 coverage, you do AI models/playbooks)
3. AI-Native Dev Platforms (partner with IDP vendors like Humanitec/Port, you do AI layer)

**NO (requires team)**:
1. Enterprise AI Infrastructure (too broad, too complex, too many unknowns)
2. Full-stack AI platform buildouts (need frontend, backend, ML, infra specialists)
3. Multi-year enterprise contracts with SLAs (legal/compliance overhead + delivery guarantees need team bandwidth)

### The Solo Founder Trap

**Common mistake**: Try to deliver everything to justify "full-stack" positioning.

**Reality**: Clients hire you for EXPERTISE in one thing, not mediocrity in six things.

**Strategy**:
- **Sell**: Full-stack vision (Digital Sourcery does foundations + intelligence)
- **Deliver**: Focused MVP (Autonomous Operations) + subcontract/partner for everything else
- **Scale**: Hire specialists as revenue proves demand (first hire: senior platform engineer to handle foundations while you focus on AI)

### When to Hire (Revenue Milestones)

- **$0-200K revenue**: Stay solo, subcontract overflow, focus on Autonomous Operations MVP
- **$200K-400K**: Hire first engineer (senior platform eng to own Foundations, you own AI services)
- **$400K-750K**: Hire second engineer (ML/AI specialist to scale Autonomous Ops) + part-time sales/marketing
- **$750K-1.5M**: Hire PM + third engineer (start Enterprise AI Infrastructure practice) + full-time sales
- **$1.5M+**: Build teams per service line, you transition to CEO/strategy

---

## 9. Final Verdict: MERGE / SEPARATE / OTHER

### DECISION: MERGE UNDER DIGITAL SOURCERY

**Rationale**:
1. **Solo founder efficiency**: One brand = one website, one funnel, one message, one pitch deck. You cannot sustain two brands alone.
2. **Market alignment**: Buyers don't separate "infrastructure" and "AI" purchases—they buy AI-capable infrastructure as one solution.
3. **Pricing power**: AI positioning commands 2-3x higher rates than commodity platform engineering. Lead with intelligence, include foundations as prerequisite.
4. **Differentiation**: "Platform engineering consultancy" = saturated market. "AI-native infrastructure consultancy" = emerging category.
5. **Strategic clarity**: BlackMagickOps as a separate brand suggests you're hedging—clients want commitment to AI-first approach.

### Implementation Plan

**Phase 1: Brand Consolidation (Month 1-2)**
- ✅ Merge under digitalsourcery.ai (keep as primary domain)
- ✅ Redirect blackmagickops.com to digitalsourcery.ai/platform-foundations
- ✅ Rebrand service catalog: 3 intelligence services (Tier 2) + platform foundations (Tier 1)
- ✅ Single pitch deck, single website, unified case study format

**Phase 2: Service Productization (Month 2-4)**
- ✅ Build Autonomous Operations MVP offering (6-8 week engagement, fixed scope, $40K-75K)
- ✅ Create repeatable delivery framework (observability integration playbooks, AI model templates, remediation libraries)
- ✅ Develop ROI calculator (hours saved, incidents prevented, cost reduction)
- ⚠️ Deprioritize AI-Native Dev Platforms and Enterprise AI Infrastructure until Year 2 (after first hires)

**Phase 3: Go-to-Market (Month 3-6)**
- ✅ Target ICP: Series B-D startups (50-500 engineers) with existing observability spend $50K+/year
- ✅ Lead gen: LinkedIn thought leadership (AI + platform engineering), case studies, open-source tools (GitHub presence under Digital Sourcery org)
- ✅ Sales strategy: Consultative, pilot-first (low-risk entry), expand to managed service
- ✅ Pricing: $50K-80K pilots, $10K-20K/month managed service

**Phase 4: Scale Preparation (Month 6-12)**
- ⚠️ Revenue target: $250K-400K Year 1 (2-4 Autonomous Operations clients + 1-2 Platform Foundations projects)
- ⚠️ Hire Trigger: At $200K revenue or 3+ concurrent clients, hire senior platform engineer
- ⚠️ Expand services: Only add AI-Native Dev Platforms or Enterprise AI Infrastructure after first hire and proven client demand

### What Happens to BlackMagickOps?

**Keep the name alive in three places**:
1. **GitHub org**: Technical identity, open-source tools, engineering blog (blackmagickops.github.io)
2. **Service tier branding**: "Platform Foundations powered by BlackMagickOps" (maintains heritage)
3. **Personal brand**: Your engineering identity on LinkedIn/Twitter can still reference BlackMagickOps as the technical foundation

**Retire as separate commercial brand**: No separate website, no separate sales funnel, no separate pitch.

---

## Conclusion: The Path Forward

**MERGE UNDER DIGITAL SOURCERY** with this structure:

```
DIGITAL SOURCERY
"AI-Native Infrastructure for Modern Enterprises"

SERVICES:
├─ Tier 1: Platform Foundations (powered by BlackMagickOps)
│  └─ Platform Engineering, IaC, Cloud FinOps, Observability
│
└─ Tier 2: Intelligence Services
   ├─ 1. Autonomous Operations (MVP SERVICE—START HERE)
   ├─ 2. AI-Native Developer Platforms (Year 2+)
   └─ 3. Enterprise AI Infrastructure (Year 2+)

PRICING:
- Platform Foundations: $30K-80K projects + $3K-10K/mo managed
- Autonomous Operations: $50K-80K pilots + $10K-20K/mo managed
- Target Year 1 Revenue: $250K-400K (solo), hire at $200K

TARGET MARKET:
- ICP: Series B-D startups (50-500 engineers)
- Verticals: SaaS/Tech first, Manufacturing/Logistics second, avoid Finance/Healthcare until you have team
- Pain point: Alert fatigue, manual ops don't scale, AI adoption blocked by infra complexity

GO-TO-MARKET:
- Lead with Autonomous Operations (clearest ROI, fastest time-to-value)
- Upsell Platform Foundations to clients who lack baseline infra
- Defer AI platforms and enterprise AI until Year 2 / after first hire
```

**The brutal truth**: Two brands only work if you have two teams. You have one person. One brand. One focus. One MVP service. Execute that, prove demand, hire, THEN expand.

Stop hedging. Merge the brands. Ship Autonomous Operations. Get paid.
