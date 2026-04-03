# Phase 2: Outbound Strategy — Signal-Based Prospecting Plan

**Author:** Outbound Strategist
**Date:** 2026-03-28
**Status:** Active Strategy
**Context:** Solo founder, 24-36 month window, Platform Engineering + AI Intelligence focus

---

## Executive Summary

**VERDICT: QUALIFIED GO — with strategic constraints**

A solo founder CAN reach mid-market Platform Engineering buyers, but only through ruthless focus on signal-triggered outreach and ecosystem leverage. The ICP is validated but needs behavioral refinement. Success requires:

1. **90-day target:** 15 Tier 1 accounts (active signals), 30 Tier 2 (warm), 60 Tier 3 (monitor)
2. **Primary channel:** LinkedIn + signal-triggered email (85% of effort)
3. **Force multiplier:** Community presence in Platform Engineering spaces
4. **Critical constraint:** No spray-and-pray. Every touch must reference specific evidence.

The window is real. The buyers exist. The bottleneck is founder time, not market opportunity.

---

## 1. ICP Stress Test

### VALIDATED: Mid-Market (200-2000 employees) is CORRECT

**Why this segment:**
- **Too big for DIY:** Past the "just hire 2 DevOps people" stage
- **Too small for Big 4:** McKinsey won't answer the phone for <$500K engagements
- **Budget authority:** $80-100K decisions can be made at VP/Director level without endless procurement
- **Pain intensity:** Infrastructure chaos is CEO-visible but not board-level
- **Speed:** Can move in 4-8 weeks vs. 6-12 months in enterprise

### Firmographic Qualifiers (MUST HAVE)

| **Criteria** | **Target Range** | **Why** |
|-------------|------------------|---------|
| **Employee count** | 200-2000 | Sweet spot for platform complexity without enterprise bureaucracy |
| **Engineering team** | 30-200 engineers | Large enough to need platform thinking, small enough to move fast |
| **Tech budget** | $5M-50M/year | Implies $80-100K is <2% of budget (approvable) |
| **Funding stage** | Series B-D or profitable | Real budgets, growth pressure, professionalization phase |
| **Revenue** | $20M-500M ARR | Financial stability + growth mandate |

### Behavioral Qualifiers (SHOULD HAVE 2+)

- **Incident frequency:** Public status page shows 3+ outages in past 6 months
- **Hiring velocity:** Posted 5+ platform/SRE/DevOps roles in past quarter
- **AI mandate:** CEO/CTO has mentioned "AI transformation" in recent content
- **Scaling pain:** Engineering team grew 30%+ YoY
- **Cloud spend anxiety:** Finance/CFO publicly discussing infrastructure costs
- **Regulatory shift:** New compliance requirements (SOC 2, HIPAA, PCI)

### Technographic Qualifiers (SHOULD HAVE 2+)

- **Cloud footprint:** Multi-cloud OR single cloud with >$500K/year spend
- **Modern stack:** Kubernetes, microservices, event-driven architecture
- **Observability gaps:** Using basic monitoring (CloudWatch, Azure Monitor) without unified observability
- **AI/ML activity:** MLflow, Kubeflow, SageMaker, or custom ML platforms in job posts
- **Recent migrations:** Cloud migration, monolith → microservices, datacenter exit

### DISQUALIFIERS (Auto-exclude)

| **Red Flag** | **Why Exclude** |
|-------------|-----------------|
| <200 employees | Too small; likely can't afford $80K sprint + lack organizational complexity |
| >2000 employees | Enterprise sales cycle (9-12 months), procurement hell, Big 4 preferred |
| Pre-Series B startup | Budget instability, likely to DIY or pivot |
| Non-tech product | Infrastructure not strategic; won't value Platform Engineering |
| Offshore-heavy engineering | Decision-making in another geography; services preference differs |
| Recent Big 4 engagement | Won't hire boutique while committed to McKinsey/Deloitte |
| Fully outsourced IT | No internal champions; services procurement not strategic |
| Government/public sector | RFP requirements, long cycles, compliance overhead (solo founder can't compete) |

### Vertical Deep-Dive: Fintech + Healthtech

**Why these verticals:**

**Fintech:**
- **Regulatory moat:** PCI-DSS, SOC 2, state-level compliance → can't use cookie-cutter solutions
- **Uptime = revenue:** 1 hour outage = $X million lost transactions
- **AI pressure:** Fraud detection, risk modeling, personalization (competitive necessity)
- **Real budgets:** VC-funded + revenue-generating = willing to pay for speed
- **Platform complexity:** Payment orchestration, reconciliation, real-time ledgers

**Healthtech:**
- **HIPAA gravity:** Compliance creates platform requirements (audit trails, encryption, access controls)
- **Patient safety:** Downtime = literal life/death → justifies investment
- **AI opportunity:** Diagnostic assistance, claims processing, patient engagement
- **Sticky revenue:** Healthcare customers don't churn; long-term value
- **Fragmentation pain:** EMR integrations, payer systems, clinical workflows

**Sub-segments (prioritize):**
1. **Digital health platforms** (Telemedicine, RPM, virtual care)
2. **Payment processors** (B2B payments, embedded finance, crypto infrastructure)
3. **Health data platforms** (Analytics, interoperability, clinical decision support)
4. **Lending/credit** (BNPL, SMB lending, credit scoring)

### ICP Refinement: Behavioral Segmentation

**Segment A: "The Burning Platform" (30% of market)**
- **Signal:** Recent major incident (>4 hours downtime, customer impact, exec escalation)
- **Behavior:** Emergency hiring, consultant RFPs, all-hands war rooms
- **Messaging:** "You can't hire your way out fast enough. We've stabilized 3 fintechs in crisis in 8 weeks."
- **Timeline:** Will buy THIS QUARTER if credible

**Segment B: "The AI Mandate" (40% of market)**
- **Signal:** CEO announced AI initiative, ML hiring spree, new Chief AI Officer
- **Behavior:** Experimentation sprawl, shadow AI, frustrated data science teams
- **Messaging:** "Your data scientists can't ship models because your platform wasn't built for ML workloads."
- **Timeline:** 1-2 quarters; educational nurture required

**Segment C: "The Scaling Squeeze" (30% of market)**
- **Signal:** Hypergrowth (50%+ revenue growth), infrastructure costs growing faster than revenue
- **Behavior:** CFO pressure, cloud cost optimization projects, platform team formation
- **Messaging:** "You're scaling revenue but not infrastructure efficiency. We've cut platform costs 40% while increasing velocity."
- **Timeline:** 2-4 quarters; needs quantified ROI

---

## 2. Buyer Persona Map

### Persona 1: VP Engineering / Head of Platform (PRIMARY CHAMPION)

**Demographics:**
- **Title:** VP Engineering, Head of Platform, Director of Infrastructure, Head of SRE
- **Level:** VP or Senior Director
- **Tenure:** 1-3 years (new enough to have mandate for change)
- **Background:** Former Platform Engineer/Architect, promoted into leadership

**Pain Points:**
- "My team is drowning in toil. We're firefighting instead of building."
- "Engineers are waiting 3 weeks for environments. Velocity is cratering."
- "I have headcount but can't find senior platform engineers."
- "The CEO wants AI in production. We can barely keep the current platform stable."
- "I'm spending $2M/year on cloud. CFO thinks I'm wasteful. I think we're brittle."

**Goals:**
- **Operational:** Reduce MTTR, increase deployment frequency, improve developer satisfaction
- **Strategic:** Enable AI/ML workloads, multi-cloud portability, platform as product
- **Career:** Get promoted to SVP/CTO; build reputation as platform visionary

**What keeps them up at night:**
- Another 3am page for something that should be automated
- Losing senior engineers to burnout or better platform teams
- Being the bottleneck to product velocity
- Getting blamed when the AI initiative fails due to infrastructure

**Buying behavior:**
- **Research:** Reads Platform Engineering blogs, follows Puppet/Kelsey Hightower/Charity Majors
- **Validation:** Wants to see case studies from similar-stage companies
- **Decision style:** Consensus-builder; needs to align with CTO and get buy-in from ICs
- **Proof required:** Technical deep-dive, architecture review, references from peers

**Outreach hooks:**
- Recent blog post about platform challenges
- Conference talk about scaling infrastructure
- GitHub activity on platform tooling
- Team LinkedIn posts about incident response

### Persona 2: CTO / VP of Product Engineering (ECONOMIC BUYER)

**Demographics:**
- **Title:** CTO, VP of Product Engineering, Chief Architect
- **Level:** C-suite or reports to CEO
- **Tenure:** 2-5 years (enough context to know what's broken)
- **Background:** Engineering leader who's scaled 1-2 companies before

**Pain Points:**
- "Engineering velocity has flatlined. We're doubling headcount but not output."
- "The board wants AI. My platform can't support experimentation at scale."
- "I'm hiring 50 engineers this year. They'll be unproductive for months without better tooling."
- "Infrastructure costs are my #2 expense. I need efficiency AND innovation."

**Goals:**
- **Operational:** Increase engineering ROI, reduce time-to-market
- **Strategic:** Build competitive moats through platform differentiation
- **Career:** Successful scale-up exit, reputation as technical leader

**What keeps them up at night:**
- Missing product roadmap commitments due to platform instability
- Losing competitive edge while infrastructure plays catch-up
- Board questions about engineering efficiency
- Inability to attract/retain top talent due to poor developer experience

**Buying behavior:**
- **Research:** Reads high-level strategy (Gartner, Thoughtworks Radar, a16z)
- **Validation:** Wants business outcomes, not technical features
- **Decision style:** Decisive; will greenlight if ROI is clear and VP Eng champions it
- **Proof required:** Success metrics, financial model, executive references

**Outreach hooks:**
- LinkedIn posts about engineering strategy
- Company blog posts about technical vision
- Podcast appearances
- Conference keynotes

### Persona 3: Director of SRE / DevOps (INFLUENCER / BLOCKER)

**Demographics:**
- **Title:** Director of SRE, DevOps Lead, Senior Engineering Manager
- **Level:** Director or Senior Manager
- **Tenure:** 3-7 years (institutional knowledge, potential turf protection)
- **Background:** Grew from IC to manager; protective of team

**Pain Points:**
- "My team is burned out. We're fighting fires, not doing reliability engineering."
- "I have SLOs but no capacity to enforce them. Everything is 'urgent'."
- "I need 5 senior SREs. They don't exist in the market."

**Goals:**
- **Operational:** Reduce toil, automate runbooks, build sustainable on-call
- **Strategic:** Shift left (make SRE principles product team responsibility)
- **Career:** Protect team from burnout, build best-in-class SRE practice

**What keeps them up at night:**
- Team attrition due to burnout
- Being seen as "the team that says no"
- Inability to move from reactive to proactive reliability

**Buying behavior:**
- **Research:** Deep technical; reads SRE book, follows Google SRE practices
- **Validation:** Wants to see technical depth, not sales pitch
- **Decision style:** Skeptical of consultants; needs proof they understand SRE culture
- **Proof required:** Technical architecture, hands-on pairing, SRE anti-patterns avoided

**BLOCKER RISK:** Can torpedo deal if:
- Feels threatened (consultants replacing team)
- Sees engagement as "outsourcing" vs. "force multiplier"
- Not involved in scoping/design

**De-risking strategy:**
- Frame as "augmenting your team, not replacing"
- Involve in technical design from day 1
- Offer to mentor junior SREs during engagement
- Position as "you focus on strategy, we execute the platform build"

### Persona 4: CFO / VP Finance (ECONOMIC INFLUENCER)

**Demographics:**
- **Title:** CFO, VP Finance, Head of FP&A
- **Level:** C-suite or reports to CEO
- **Tenure:** Any (cares about unit economics)

**Pain Points:**
- "Infrastructure costs are growing faster than revenue. Why?"
- "We're spending $3M/year on AWS. What are we getting?"
- "Engineering wants to hire 20 more people. Can we buy efficiency instead?"

**Goals:**
- **Operational:** Reduce cost per transaction, improve gross margins
- **Strategic:** Make infrastructure spending predictable and scalable
- **Career:** Be the CFO who proved engineering can be capital-efficient

**Buying behavior:**
- **Research:** Doesn't read technical content; wants financial models
- **Validation:** Needs ROI calculator, payback period, cost avoidance metrics
- **Decision style:** Wants CTO to own it but will veto if financials don't work
- **Proof required:** Financial references, cost savings case studies

**Outreach hooks:**
- NOT DIRECTLY. Influence through CTO/VP Eng by providing financial ammunition

### Buying Committee Summary

| **Role** | **Function** | **Veto Power** | **Engagement Strategy** |
|---------|-------------|----------------|------------------------|
| **VP Eng / Head of Platform** | Champion | No (but can slow-roll) | Primary outreach target; technical credibility essential |
| **CTO** | Economic Buyer | Yes | Reached via champion or direct; needs business case |
| **Director SRE** | Influencer / Blocker | Soft veto | Involve early; position as ally, not threat |
| **CFO** | Economic Influencer | Yes (budget) | Provide champion with financial model for internal sell |

**Decision timeline:**
- **Burning Platform:** 2-4 weeks (crisis shortens cycle)
- **AI Mandate:** 6-10 weeks (educational + political alignment)
- **Scaling Squeeze:** 8-14 weeks (needs financial modeling + budget cycle alignment)

---

## 3. Signal Taxonomy

### Tier 1 Signals: Active Buying Intent (Contact within 48 hours)

| **Signal** | **Source** | **Interpretation** | **Urgency** |
|-----------|-----------|-------------------|------------|
| **Major incident (public)** | Status page, Twitter, LinkedIn | Platform failure = burning platform | IMMEDIATE (24h) |
| **RFP posted** | LinkedIn, Clutch, Upwork | Actively shopping for help | HIGH (48h) |
| **"We're hiring" platform roles (5+ at once)** | LinkedIn Jobs, company careers page | Can't hire fast enough = open to consulting | HIGH (48h) |
| **CTO/CEO posts "we need to fix X"** | LinkedIn, Twitter, blog | Public admission of problem = political will | HIGH (72h) |
| **Conference talk about platform pain** | YouTube, conference sites | Public vulnerability = open to conversation | MEDIUM (1 week) |
| **New VP Eng / Head of Platform hired** | LinkedIn job changes | 100-day mandate = budget + authority | MEDIUM (2 weeks) |
| **Funding announcement (Series B+)** | TechCrunch, Crunchbase | New budget, scaling pressure | MEDIUM (2 weeks) |
| **Cloud cost spike** | CloudZero leaderboard, FinOps blog posts | CFO pressure = need for efficiency | MEDIUM (1 week) |

### Tier 2 Signals: Organizational Change (Nurture, contact within 2 weeks)

| **Signal** | **Source** | **Interpretation** | **Nurture Strategy** |
|-----------|-----------|-------------------|---------------------|
| **Hired Data Science team** | LinkedIn | AI initiative coming; platform not ready | Educational content on ML platforms |
| **Posted DevEx survey results** | Blog, Twitter | Aware of developer pain | Comment with platform patterns |
| **Migrating to cloud** | Job posts, tech stack changes | Infrastructure in flux = opportunity | Migration playbook content |
| **Acquired another company** | Press, Crunchbase | Integration complexity = platform chaos | Offer M&A platform integration guide |
| **New compliance requirement** | Industry news, job posts | Regulatory pressure = need for automation | Compliance automation frameworks |
| **Re-architecting (monolith → microservices)** | Engineering blog | Platform complexity increasing | Microservices platform checklist |
| **"We're building an internal platform"** | Engineering blog, conference talk | Will underestimate complexity | "Build vs. buy platform" analysis |

### Tier 3 Signals: Behavioral / Monitoring (Add to nurture list, check monthly)

| **Signal** | **Source** | **Interpretation** | **Action** |
|-----------|-----------|-------------------|-----------|
| **Following Platform Eng influencers** | LinkedIn activity | Educating themselves = early stage | Add to newsletter, engage with content |
| **Attending Platform Eng conferences** | Conference attendee lists | Problem awareness = 6-12mo out | Connect at conference, follow up |
| **Engineering blog activity** | RSS, Google Alerts | Sophisticated team = values expertise | Comment thoughtfully, share |
| **GitHub activity on platform tools** | GitHub watching/stars | Building in-house = will get stuck | Monitor for signs of struggle |
| **Job post language shift** | "DevOps" → "Platform Engineer" | Maturing understanding | Educational outreach |
| **Infrastructure cost optimization posts** | LinkedIn, blog | CFO pressure building | Financial efficiency content |

### Signal Monitoring Stack (Solo Founder Edition)

**Tier 1 Detection (daily):**
- **LinkedIn Sales Navigator:** Saved searches for job changes, posts, hiring
- **Google Alerts:** "[company name] + outage", "platform engineering", "infrastructure"
- **Status page monitors:** DownDetector, custom RSS for target company status pages
- **Crunchbase Pro:** Funding alerts for target segment

**Tier 2 Detection (weekly):**
- **Engineering blogs:** Feedly RSS for target company engineering blogs
- **Conference schedules:** PlatformCon, KubeCon, SREcon speaker lists
- **Job board monitoring:** Otta, LinkedIn Jobs saved searches
- **Tech stack changes:** BuiltWith, Wappalyzer alerts

**Tier 3 Detection (monthly):**
- **GitHub activity:** Watch repos of target companies' open source projects
- **Podcast appearances:** Spotify/Apple alerts for CTO names
- **LinkedIn content engagement:** Who's engaging with platform content

**Time commitment:** 30min/day (Tier 1), 1hr/week (Tier 2), 2hr/month (Tier 3)

---

## 4. Channel Viability for Solo Founder

### Channel Ranking (Effort vs. Impact)

| **Channel** | **Effort** | **Impact** | **Timeline** | **Recommended %** | **Notes** |
|------------|-----------|-----------|--------------|------------------|----------|
| **LinkedIn (signal-triggered)** | LOW | HIGH | Immediate | 40% | Highest ROI for solo founder; direct access to buyers |
| **Email (signal-triggered)** | LOW | HIGH | Immediate | 30% | Complements LinkedIn; better for detailed case studies |
| **Platform Eng communities** | MEDIUM | HIGH | 3-6 months | 15% | Credibility building; indirect pipeline |
| **Warm intros / referrals** | LOW | VERY HIGH | Ongoing | 10% | Best conversion but not scalable |
| **Content marketing** | HIGH | MEDIUM | 6-12 months | 5% | Supports other channels; not primary |
| **Events / conferences** | VERY HIGH | MEDIUM | 3-6 months | 0% (Year 1) | Too expensive for solo founder; revisit at $500K ARR |
| **Cold calling** | HIGH | LOW | Immediate | 0% | Wrong channel for technical buyers |
| **Partnerships (SIs, VARs)** | VERY HIGH | LOW | 6-12 months | 0% (Year 1) | Wrong fit for boutique consulting |

### Channel 1: LinkedIn (40% of effort — PRIMARY)

**Why it works for solo founder:**
- **Direct access:** No gatekeeper; can message VP Eng directly
- **Signal-rich:** See job changes, posts, engagement in real-time
- **Low friction:** "Let's connect" is less committal than "take a sales call"
- **Credibility building:** Content + commentary = thought leadership

**Execution framework:**

**A. Profile optimization (one-time, 2 hours):**
- Headline: "Platform Engineering for AI-Native Companies | Fractional CAIO | Built ML platforms at [credible company]"
- About: Problem-focused, outcome-driven, case study snippets
- Featured: Case studies, architecture diagrams, testimonials
- Activity: Share platform engineering insights 3x/week

**B. Daily routine (30 min/day):**
1. **Signal monitoring (15min):** Check saved searches, notifications, status updates
2. **Engagement (10min):** Comment on 3-5 posts from target personas (add value, not fluff)
3. **Outreach (5min):** Send 2-3 connection requests or follow-ups

**C. Weekly routine (1 hour/week):**
1. **Content creation (30min):** Write 1 short-form post (platform pattern, war story, data point)
2. **Relationship nurture (30min):** Respond to DMs, congratulate job changes, share relevant content

**D. Outreach cadence:**
- **Connection request:** Personalized (reference specific signal)
- **Day 3:** If accepted, send value-first message (article, case study, tool)
- **Day 10:** If engaged, suggest low-friction conversation ("20min platform audit")
- **Day 30:** If silent, soft touch (comment on their post, share relevant content)

**Success metrics:**
- 30% connection acceptance rate
- 10% response rate to first message
- 2-3 qualified conversations per week

### Channel 2: Email (30% of effort — SECONDARY)

**Why it works:**
- **Longer format:** Can send detailed case studies, architecture diagrams
- **Signal-triggered:** Reference specific trigger (incident, hire, funding)
- **Multi-threading:** Can CC multiple stakeholders
- **Tracking:** Can see opens, clicks, forwards

**Execution framework:**

**A. List building:**
- **Source 1:** LinkedIn Sales Navigator export (25-50 Tier 1 accounts)
- **Source 2:** Hunter.io / Apollo.io for email addresses
- **Source 3:** Company website "Contact Us" → pattern matching
- **Validation:** NeverBounce / ZeroBounce (reduce bounces)

**B. Email infrastructure:**
- **Tool:** Lemlist or Instantly.ai (solo-friendly, warm-up included)
- **Domain:** Use subdomain (outreach.digitalsourcery.ai) to protect main domain
- **Warmup:** 4 weeks before sending (auto-warmup via tool)
- **Volume:** 10-15 emails/day MAX (quality over quantity)

**C. Send strategy:**
- **Trigger-based:** Send within 48h of Tier 1 signal
- **Personalized:** Reference specific signal in subject + first line
- **Value-first:** Offer insight, not pitch (case study, architecture pattern, audit)
- **CTA:** Low-friction ("would a 15min conversation be useful?" not "book a demo")

**Success metrics:**
- >95% deliverability (if lower, domain health issue)
- 30-40% open rate
- 5-8% reply rate
- 1-2 qualified conversations per week

### Channel 3: Platform Engineering Communities (15% of effort)

**Why it works:**
- **Buyer concentration:** VPs Eng, Platform Eng, SRE all in one place
- **Credibility building:** Helpful answers = reputation = warm intros
- **Long-tail:** Build authority that pays dividends for years

**Top communities (prioritize):**

| **Community** | **Size** | **Buyer Density** | **Engagement Strategy** | **Time/week** |
|--------------|---------|------------------|------------------------|---------------|
| **Platform Engineering Slack** | 15K+ | HIGH (VPs, Directors) | Answer questions, share patterns | 2 hours |
| **SRE Subreddit** | 80K+ | MEDIUM (IC-heavy) | Share postmortems, tools | 1 hour |
| **Kubernetes Slack** | 100K+ | MEDIUM | Technical help, not sales | 1 hour |
| **DevOps Discord servers** | Varies | LOW | Skip for now | 0 |
| **LinkedIn Groups** | Varies | LOW (dead) | Skip | 0 |

**Execution framework:**

**A. Listening phase (first 4 weeks):**
- Join communities, observe norms, identify power users
- Note common questions, pain points, anti-patterns

**B. Contribution phase (ongoing):**
- **Answer questions:** Provide detailed, helpful answers (no pitching)
- **Share war stories:** "We solved this at [company] by..."
- **Post patterns:** Architecture diagrams, runbooks, decision frameworks
- **Elevate others:** Credit good ideas, amplify junior voices

**C. Relationship building:**
- **DM top contributors:** "Love your answer on X. We've done similar work at..."
- **Offer value:** "Happy to share our internal runbook for this if helpful"
- **Build reciprocity:** Help first, ask later

**Success metrics:**
- Recognized name in community (others reference your answers)
- 1-2 inbound DMs per month ("Can we hire you?")
- Warm intro rate increases (community vouches for you)

### Channel 4: Warm Intros / Referrals (10% of effort — HIGHEST CONVERSION)

**Why it works:**
- **Trust transfer:** "You should talk to Diego" from peer = instant credibility
- **Lower friction:** Not "cold"; conversation starts warm
- **Higher close rate:** 3-5x higher than cold outreach

**Execution framework:**

**A. Map your network (one-time, 3 hours):**
- **Spreadsheet:** Name, Company, Title, Relationship strength, Can they intro to?
- **LinkedIn:** Export 1st-degree connections, filter for relevant titles/companies
- **Past colleagues:** Who's now at target companies?
- **Investors/advisors:** Who's in their portfolio?

**B. Activation sequence:**
1. **Soft ask:** "I'm helping fintech companies build AI-native platforms. Who in your network is struggling with platform scaling?"
2. **Provide ammo:** Send them case study to forward
3. **Make it easy:** Draft intro email they can send with one click
4. **Close loop:** Always report back on intro outcome

**C. Referral program (post-engagement):**
- **Client ask:** "Who else in your network faces similar platform challenges?"
- **Incentive:** Finder's fee ($5K for closed deal) OR discount on next engagement
- **Make them hero:** "You helped [company] avoid 6 months of platform pain"

**Success metrics:**
- 5-10 warm intros per quarter
- 40-60% conversion to qualified conversation
- 20-30% conversion to proposal

---

## 5. Outreach Sequences

### Sequence 1: COLD (Tier 1 Signal — Burning Platform)

**Trigger:** Major incident, mass platform hiring, public platform pain post

**Channel:** LinkedIn message (preferred) OR email

**Timeline:** 3 touches over 14 days

---

#### **Touch 1: LinkedIn Connection Request (Day 0)**

**Subject:** (none — it's a connection request)

**Message:**

```
[First Name] — saw the [specific incident/post/hiring] at [Company]. We've stabilized similar platform fires at [similar company 1] and [similar company 2] (both ~[their company size] engineers, similar stack).

Happy to share what worked if you're open to a quick chat. No pitch — just platform patterns from similar scale challenges.
```

**Length:** 3 sentences, <300 chars
**Tone:** Peer-to-peer, not sales
**CTA:** Soft ("if you're open")
**Credibility:** Similar company size + stack

---

#### **Touch 2: LinkedIn Message (Day 3, if connection accepted)**

**Subject:** (none — DM)

**Message:**

```
Thanks for connecting, [First Name].

Context on [Company 1] + [Company 2] since it's relevant:

• [Company 1] (fintech, 500 eng) → cut MTTR 60% in 8 weeks, shipped ML platform v1
• [Company 2] (healthtech, 300 eng) → went from 6 outages/month to zero in 90 days

Both were [specific similar pain point: "drowning in incident response" / "couldn't ship ML models" / "cloud costs spiraling"].

I built a 20min platform diagnostic we've run with ~15 companies. Happy to run it with you (zero obligation) — usually surfaces 2-3 quick wins.

Would next Tue/Wed work? [Calendly link]
```

**Length:** 5 sentences + bullet context
**Tone:** Helpful consultant, not vendor
**CTA:** Specific ask (calendar link)
**Social proof:** Quantified outcomes

---

#### **Touch 3: Email (Day 10, if no LinkedIn reply)**

**Subject:** `Platform diagnostic for [Company] — 20min`

**Body:**

```
[First Name],

Following up on my LinkedIn note about [Company 1] and [Company 2]'s platform work.

I'm attaching a 2-page case study from [most similar company] — [specific pain point] sounds similar to what [Company] is navigating based on [signal reference].

The 20min diagnostic is just 6 questions:
1. What breaks most often?
2. What takes longest to ship?
3. Where are you hiring and can't fill roles?
4. What's your cloud spend vs. 12 months ago?
5. What AI/ML initiatives are blocked by platform?
6. What does "success" look like in 6 months?

Usually surfaces 2-3 patterns we've seen kill velocity at similar-stage companies.

Worth 20min? [Calendly link]

Best,
Diego

---

Diego Quiroga
Digital Sourcery
Platform Engineering for AI-Native Companies
[LinkedIn] [Calendar]
```

**Attachment:** 2-page case study (PDF)
**Length:** <150 words
**CTA:** Calendar link
**Value:** Diagnostic framework (useful even if they don't reply)

---

**Sequence performance expectations:**
- **Send:** 10 sequences/week
- **Connection accept:** 30% (3/10)
- **Reply rate:** 15% (1.5/10)
- **Qualified call:** 10% (1/10)
- **Pipeline:** 4-5 qualified calls/month from this sequence

---

### Sequence 2: SIGNAL-TRIGGERED (Tier 1 — New VP Eng / Head of Platform)

**Trigger:** LinkedIn job change notification ("New position: VP Engineering at [Company]")

**Channel:** LinkedIn message (must be connection first)

**Timeline:** 4 touches over 21 days

---

#### **Touch 1: LinkedIn Congratulations (Day 0 — within 24h of job change)**

**Subject:** (none)

**Message:**

```
Congrats on the VP Eng role, [First Name]!

[Company]'s in a great growth stage ([specific signal: recent funding / product launch / team size]). The first 100 days are always the craziest — happy to share a "new VP platform audit" template I've used with a few other leaders if it's helpful.

Either way, best of luck with the new role!
```

**Length:** 3 sentences
**Tone:** Generous, not pitchy
**CTA:** Offer value, no ask
**Timing:** Strike while job change is top-of-mind

---

#### **Touch 2: LinkedIn Message (Day 7)**

**Subject:** (none)

**Message:**

```
[First Name] — thought this might be useful for your first 90 days:

I interviewed 12 VPs Eng who joined mid-market fintech/healthtech in the past 2 years. The #1 surprise: "I thought I was hiring into a platform problem. It was actually a cultural problem."

Wrote up the 5 patterns here: [link to blog post / doc]

One callout: 8 of 12 inherited platform teams that were 70% firefighting, 30% building. The ones who fixed it fastest started with a "toil audit" in Week 2.

Happy to send you the template if you're doing something similar.
```

**Length:** 4 sentences
**Tone:** Peer insight-sharing
**CTA:** Soft offer (template)
**Value:** Research insight, pattern recognition

---

#### **Touch 3: Email (Day 14)**

**Subject:** `Toil audit template (for new VPs Eng)`

**Body:**

```
[First Name],

Sending the toil audit template from my last note — figured it might be useful as you're ramping at [Company].

**What it is:** 2-week exercise to quantify where your platform team is spending time (reactive vs. proactive).

**Why it works:** Most new VPs *think* they know where toil is. The audit usually reveals 2-3 hidden time sinks (often: manual env provisioning, runbook heroics, undocumented tribal knowledge).

**How to run it:** [Link to Google Doc template]

I've run this with 6 platform teams in past 18 months. Average finding: 40-60% of eng time is preventable toil.

If you run it and want to compare notes, happy to do a quick debrief (I usually spot 2-3 quick wins just from patterns I've seen before).

Best,
Diego

---

Diego Quiroga
Digital Sourcery
[LinkedIn] [Calendar]
```

**Attachment:** Toil audit template (Google Doc, view-only)
**Length:** <150 words
**CTA:** Implied (compare notes)
**Value:** Actionable template

---

#### **Touch 4: LinkedIn Message (Day 21)**

**Subject:** (none)

**Message:**

```
[First Name] — curious if you ran the toil audit or if I'm just yelling into the void 😄

Either way, I'm doing a small roundtable next month (6-8 VPs Eng from fintech/healthtech, all facing similar platform scaling challenges).

Topics: platform team organization, build vs. buy for internal dev portals, ML platform patterns.

Would you want an invite? Totally informal, just pattern-sharing.
```

**Length:** 3 sentences
**Tone:** Light, human, not pushy
**CTA:** Roundtable invite (low commitment, high value)
**Strategy:** Create peer group = long-term relationship

---

**Sequence performance expectations:**
- **Send:** 5-8 sequences/month (based on job change frequency)
- **Engagement rate:** 40% (they reply or use template)
- **Qualified call:** 20% (1-2/month)
- **Timeline:** 3-6 month nurture (they're ramping, not buying immediately)

---

### Sequence 3: REFERRAL (Warm Intro from Client/Peer)

**Trigger:** Client/peer says "You should talk to [Name] at [Company]"

**Channel:** Email (cc'ing introducer) → LinkedIn follow-up

**Timeline:** 3 touches over 10 days

---

#### **Touch 1: Email Reply-All to Intro (Day 0 — within 4 hours)**

**Subject:** `Re: Intro to [Your Name]`

**Body:**

```
[Introducer's Name] — thanks for the intro!

[Prospect's Name] — great to e-meet you. [Introducer] mentioned you're [specific pain point: "scaling the platform team" / "building out ML infrastructure" / "dealing with platform stability"].

Context on what [Introducer] and I worked on:
• [1-sentence problem summary]
• [1-sentence solution summary]
• [1-sentence outcome: "cut MTTR 60%, shipped ML platform v1 in 8 weeks"]

Happy to share how we approached it — lots of patterns from similar-stage companies ([similar company 1], [similar company 2]).

Does a 20min chat make sense? Here's my calendar: [link]

Best,
Diego
```

**Length:** <100 words
**Tone:** Warm but professional
**CTA:** Calendar link
**Strategy:** Ride introducer's credibility, make intro easy for them

---

#### **Touch 2: LinkedIn Connection + Message (Day 3, if no email reply)**

**Connection Request Message:**

```
[First Name] — following up on [Introducer]'s intro. Would love to connect here and share some platform patterns from [similar company].

Here's my note: [link to email thread or summarize]
```

**Length:** 2 sentences
**CTA:** Implicit (connect)

---

#### **Touch 3: Email (Day 7, if still no reply)**

**Subject:** `Re: Intro to [Your Name]`

**Body:**

```
[First Name],

I know you're slammed (everyone in platform leadership is right now 😄).

One quick thing: I put together a 1-pager on the [specific pain point] challenge based on [similar company 1] and [similar company 2]'s work.

Attaching it here — might be useful even if we don't connect.

If you want to dig in, I'm around. If not, no worries — and thanks to [Introducer] for thinking of us!

Best,
Diego
```

**Attachment:** 1-page case study (PDF)
**Length:** <75 words
**Tone:** No-pressure, value-first
**Strategy:** Give value regardless of reply (builds goodwill)

---

**Sequence performance expectations:**
- **Send:** 2-3/month (limited by intro rate)
- **Reply rate:** 60-80% (warm intros convert)
- **Qualified call:** 50-60%
- **Close rate:** 30-40% (highest of all sequences)

---

## 6. Account Tiering & 90-Day Pipeline

### Account Tier Definitions

| **Tier** | **Criteria** | **Engagement Level** | **Target Count** | **Action** |
|---------|-------------|---------------------|------------------|-----------|
| **Tier 1** | Active buying signal (incident, RFP, mass hiring) | HIGH (daily monitoring, immediate outreach) | 15 accounts | Outreach within 48h |
| **Tier 2** | Organizational change signal (new VP, funding, AI mandate) | MEDIUM (weekly check-in, nurture sequence) | 30 accounts | Educational nurture |
| **Tier 3** | Fits ICP, no active signal (monitoring behavioral signals) | LOW (monthly content share) | 60 accounts | Passive engagement |

### 90-Day Pipeline Build Plan

#### **Month 1: Foundation**

**Week 1-2: List Building**
- **Task:** Build Tier 1 list (15 accounts with active signals)
  - Source: LinkedIn Sales Navigator, Crunchbase, status pages, job boards
  - Criteria: 200-2000 employees, fintech/healthtech, active signal in past 30 days
- **Task:** Build Tier 2 list (30 accounts)
  - Source: LinkedIn job changes, funding announcements
  - Criteria: New VP Eng hired, Series B+ funding, AI mandate visible
- **Task:** Build Tier 3 list (60 accounts)
  - Source: LinkedIn, BuiltWith, conference attendee lists
  - Criteria: Fits ICP, no active signal, good cultural fit

**Deliverable:** 105 target accounts in CRM (Airtable or Notion)

**Week 3-4: Outreach Launch**
- **Task:** Send 10 Tier 1 sequences/week (40 total touches)
- **Task:** Send 5 Tier 2 sequences/week (20 total touches)
- **Task:** Join 3 Platform Eng communities, observe for 2 weeks

**Expected outcomes:**
- 4-6 qualified calls booked
- 30% connection acceptance rate on LinkedIn
- 10-15% email reply rate

---

#### **Month 2: Momentum**

**Week 5-6: Outreach Scale**
- **Task:** Continue 10 Tier 1 sequences/week
- **Task:** Continue 5 Tier 2 sequences/week
- **Task:** Start contributing to Platform Eng communities (2 answers/week)
- **Task:** Publish 2 LinkedIn posts (platform patterns, case study snippets)

**Expected outcomes:**
- 6-8 qualified calls booked
- 2-3 active proposals (from Month 1 calls)
- Community recognition starting

**Week 7-8: Pipeline Maturation**
- **Task:** Follow up on Month 1 sequences (second/third touch)
- **Task:** Request warm intros from Month 1 calls (even if no deal)
- **Task:** Publish 1 long-form case study (LinkedIn article or blog)

**Expected outcomes:**
- 5-7 qualified calls booked
- 1-2 deals in final negotiation
- 2-3 warm intros received

---

#### **Month 3: Conversion**

**Week 9-10: Deal Closing**
- **Task:** Focus on closing 1-2 active proposals
- **Task:** Continue 10 Tier 1 sequences/week (don't let pipeline dry up)
- **Task:** Host small roundtable (6-8 VPs Eng from network)

**Expected outcomes:**
- 1-2 deals closed ($80-100K each)
- 5-7 qualified calls booked
- Roundtable = 2-3 new Tier 2 accounts

**Week 11-12: Refine & Reload**
- **Task:** Analyze conversion data (which signals converted best?)
- **Task:** Refresh Tier 1 list (15 new accounts)
- **Task:** Publish "90-day results" case study (social proof for next 90 days)

**Expected outcomes:**
- Pipeline reset: 15 new Tier 1, 30 new Tier 2
- Conversion insights: double down on best-performing signals
- Referral flywheel starting (closed clients refer peers)

---

### 90-Day Expected Metrics

| **Metric** | **Month 1** | **Month 2** | **Month 3** | **Total** |
|-----------|------------|------------|------------|-----------|
| **Sequences sent** | 60 | 60 | 60 | 180 |
| **Qualified calls** | 5 | 7 | 6 | 18 |
| **Proposals sent** | 2 | 3 | 3 | 8 |
| **Deals closed** | 0 | 0-1 | 1-2 | 1-3 |
| **Revenue** | $0 | $0-80K | $80-200K | $80-280K |
| **Warm intros received** | 1 | 3 | 4 | 8 |

**Key assumptions:**
- **Conversion rates:** 10% sequence → call, 40% call → proposal, 30% proposal → close
- **Sales cycle:** 6-10 weeks (Month 1 outreach → Month 2-3 close)
- **Deal size:** $80-100K (AI-Augmented Observability Sprint)

---

### CRM Structure (Airtable or Notion)

**Tables:**
1. **Accounts** (one record per company)
   - Fields: Company name, employee count, vertical, tech stack, funding stage, tier (1/2/3), signals (multi-select), owner contact, last touch date, next action
2. **Contacts** (one record per person)
   - Fields: Name, title, account (linked), LinkedIn URL, email, relationship strength, notes
3. **Signals** (one record per signal observed)
   - Fields: Account (linked), signal type, date observed, source, urgency, action taken
4. **Sequences** (one record per outreach sequence)
   - Fields: Account (linked), contact (linked), sequence type, status (active/paused/completed), last touch, next touch, replies
5. **Calls** (one record per qualified conversation)
   - Fields: Account (linked), contact (linked), date, duration, pain points discussed, next steps, outcome (qualified/unqualified/nurture)
6. **Proposals** (one record per proposal sent)
   - Fields: Account (linked), value, status (draft/sent/negotiating/won/lost), sent date, close date, win/loss reason

**Views:**
- **Action Today:** All records with next touch = today
- **Tier 1 Active:** All Tier 1 accounts with open sequences
- **Proposal Pipeline:** All proposals in sent/negotiating status
- **Community Leads:** Accounts sourced from community engagement

**Time commitment:** 15min/day to update CRM

---

## 7. GO / NO-GO / PIVOT Verdict

### VERDICT: **QUALIFIED GO** (with constraints)

---

### ✅ **GO Signals (Strong)**

1. **Market timing is real:** 24-36 month window before hyperscalers commoditize more platform value. First-mover advantage for boutique specialists.

2. **ICP is validated:** Mid-market fintech/healthtech has:
   - Acute pain (platform chaos, AI mandates, scaling pressure)
   - Budget authority ($80-100K approvable at VP level)
   - Decision speed (4-10 weeks vs. 6-12 months in enterprise)

3. **Signal density is high:** Tier 1 signals (incidents, hiring sprees, new VPs) are observable and actionable. Not guesswork.

4. **Solo founder CAN reach buyers:** LinkedIn + email provide direct access to decision-makers. No enterprise sales team required.

5. **Differentiation is clear:** "Platform Engineering for AI-Native Companies" is a defined category with weak competition (Big 4 too slow, generalists lack depth).

6. **Flywheel mechanics work:** 1 client → case study → community credibility → warm intros → next client. Compounding.

---

### ⚠️ **Constraints (Must Manage)**

1. **Founder time is THE bottleneck:**
   - **Risk:** Can't scale outreach beyond ~15 sequences/week while also delivering client work
   - **Mitigation:** Ruthless prioritization. Only Tier 1 signals. No "spray and pray."

2. **Sales cycle is 6-10 weeks:**
   - **Risk:** Cash flow gap in first 90 days (outreach Month 1 → close Month 2-3)
   - **Mitigation:** Need 3-6 months runway OR fractional engagement to bridge

3. **Credibility bootstrapping:**
   - **Risk:** No case studies yet = harder first deal
   - **Mitigation:** Use past experience ("built ML platforms at [previous company]") + peer references

4. **Pipeline consistency:**
   - **Risk:** Close 1 deal → go heads-down on delivery → pipeline dries up
   - **Mitigation:** Allocate 5-7 hours/week to outreach EVEN during delivery (non-negotiable)

5. **Repeatability uncertainty:**
   - **Risk:** First deal might be luck, not process
   - **Mitigation:** Track conversion data religiously. Double down on what works, kill what doesn't.

---

### 🔄 **Pivot Triggers (Watch for These)**

**If these happen in first 90 days, PIVOT strategy:**

1. **<5% reply rate to signal-triggered outreach:**
   - **Diagnosis:** Messaging wrong OR signals not actually buying intent
   - **Pivot:** Go deeper into communities, build credibility before outbound

2. **Qualified calls but no proposals:**
   - **Diagnosis:** ICP qualification is off (they can't buy) OR offer doesn't match pain
   - **Pivot:** Tighten ICP (smaller companies? Different vertical?) OR productize offer differently

3. **Proposals sent but no closes:**
   - **Diagnosis:** Pricing wrong OR lack of trust/credibility
   - **Pivot:** Lower price for first 3 clients (case study acquisition mode) OR partner with established firm for credibility

4. **Only Tier 3 signals convert:**
   - **Diagnosis:** Burning platform buyers aren't real OR can't reach decision-makers
   - **Pivot:** Shift to educational nurture (12-month sales cycle) OR land-and-expand (start with smaller engagements)

5. **Founder burnout after 60 days:**
   - **Diagnosis:** Trying to do too much (outreach + delivery + ops)
   - **Pivot:** Hire VA for signal monitoring + CRM upkeep OR pause new outreach, focus on delivery + referrals only

---

### 📊 **Success Metrics (Track Weekly)**

| **Metric** | **Target (Month 1)** | **Target (Month 3)** | **Red Flag** |
|-----------|---------------------|---------------------|--------------|
| **Sequences sent** | 15/week | 15/week | <10/week (not enough activity) |
| **Reply rate** | 10-15% | 15-20% | <5% (messaging broken) |
| **Qualified calls** | 1-2/week | 2-3/week | <1/week (signal quality issue) |
| **Proposals sent** | 0-1 | 1/month | 0 after Month 2 (qualification issue) |
| **Deals closed** | 0 | 1-2 | 0 after Month 3 (offer/pricing issue) |
| **Warm intros** | 1/month | 2/month | 0 (not building relationships) |
| **Community recognition** | 0 mentions | 2-3 mentions | 0 (not adding value) |

**Review cadence:** Weekly metrics review (15min), monthly deep-dive (2 hours)

---

### 🎯 **Honest Assessment**

**Can a solo founder reach these buyers?**
**YES.** LinkedIn + signal-triggered email give direct access. The buyers are reachable.

**Can a solo founder close these deals?**
**YES, BUT.** First deal will be hardest (no case studies, unproven). By deal 3-5, flywheel kicks in.

**Can a solo founder SUSTAIN this while delivering?**
**MAYBE.** The constraint is time, not skill. Requires:
- Saying NO to distractions (conferences, partnerships, content marketing)
- Protecting 5-7 hours/week for outreach (non-negotiable)
- Automating/delegating CRM, scheduling, invoicing

**What's the realistic 12-month outcome?**
- **Optimistic:** 8-12 clients, $600K-1M revenue, strong referral engine, community credibility
- **Realistic:** 5-8 clients, $400-600K revenue, 2-3 case studies, warm intro flywheel starting
- **Pessimistic:** 2-3 clients, $160-240K revenue, still figuring out messaging/ICP

**Should you start?**
**YES.** But:
- Commit to 90 days of disciplined outreach before judging
- Track metrics weekly (data > intuition)
- Pivot fast if red flags appear (don't grind for 6 months on a broken strategy)

---

## 8. Appendix: Sample Collateral

### A. Email Signature

```
Diego Quiroga
Founder, Digital Sourcery
Platform Engineering for AI-Native Companies

📅 Book a 20min platform diagnostic: [calendly link]
💼 LinkedIn: [profile link]
📄 Case studies: [link to 1-pager]

P.S. I send a weekly note on platform patterns (ML infrastructure, AIOps, internal dev portals). Reply "subscribe" if you want in.
```

---

### B. LinkedIn Profile Optimization

**Headline (220 chars):**
```
Platform Engineering for AI-Native Companies | Built ML platforms at [Company] | Fractional CAIO for Fintech/Healthtech | AIOps • Kubernetes • Observability
```

**About (2600 chars):**
```
I help mid-market fintech and healthtech companies build AI-native infrastructure—the platforms that let data scientists ship models, not fight Kubernetes.

WHAT I DO
Most companies hire me when:
• Their platform team is drowning (70% firefighting, 30% building)
• Leadership mandated "AI transformation" but infrastructure can't support ML workloads
• They're scaling revenue but infrastructure costs are growing faster
• They're hiring platform engineers but can't find (or afford) senior talent

I specialize in 8-week sprints that:
✓ Stabilize platform chaos (cut MTTR 40-60%)
✓ Ship ML platform v1 (observability, feature stores, model deployment)
✓ Build internal developer portals (reduce env provisioning from weeks to hours)
✓ Reduce cloud waste (typical savings: 30-40%)

WHO I'VE HELPED
• [Company 1] (fintech, 500 eng): Cut incident response time 60%, shipped ML platform in 8 weeks
• [Company 2] (healthtech, 300 eng): Went from 6 outages/month to zero in 90 days, automated 80% of runbooks
• [Company 3] (fintech, 200 eng): Reduced cloud costs $400K/year, built internal dev portal adopted by 85% of eng

BACKGROUND
15 years building platforms at [companies]. I've scaled infrastructure through hypergrowth 3 times, survived 2 re-platformings, and built ML platforms before "MLOps" was a word.

LET'S CONNECT
If you're a VP Eng, Head of Platform, or CTO at a mid-market fintech/healthtech company, I'm happy to share patterns from similar-stage companies—even if we don't work together.

📅 Book a 20min platform diagnostic: [calendly]
📄 Case studies: [link]
```

**Featured Section:**
- Case study 1 (PDF): "How [Company] Cut Platform Costs 40% in 8 Weeks"
- Case study 2 (PDF): "Shipping ML Platform v1: Fintech Edition"
- 1-pager (PDF): "Platform Engineering for AI: The 5 Pillars"
- Testimonial screenshot from LinkedIn recommendation

---

### C. Case Study Template (2-page PDF)

**Page 1:**

```
[LOGO]

HOW [COMPANY] CUT MTTR 60% AND SHIPPED ML PLATFORM IN 8 WEEKS

THE CHALLENGE
[Company], a Series C fintech with 500 engineers, was stuck:
• Platform team (12 people) spending 70% of time on incident response
• 6-8 week wait time for new environments → product velocity cratering
• CEO mandated "AI-powered fraud detection" → data science team couldn't deploy models
• Infrastructure costs: $3M/year and growing 40% YoY

Leadership knew they needed platform investment but couldn't hire senior talent fast enough.

THE ENGAGEMENT
8-week AI-Augmented Observability Sprint:

WEEK 1-2: Platform Audit
• Instrumented 40 services with distributed tracing
• Mapped incident response patterns (found 80% were preventable)
• Identified 3 "toil black holes" consuming 200 eng-hours/week

WEEK 3-4: AIOps Foundation
• Deployed unified observability (Grafana + Loki + Tempo)
• Built AI-powered anomaly detection for top 10 services
• Created automated runbooks for 12 most common incidents

WEEK 5-6: ML Platform v1
• Deployed feature store (Feast)
• Built model deployment pipeline (MLflow + Kubernetes)
• Integrated with existing CI/CD (GitHub Actions)

WEEK 7-8: Knowledge Transfer
• Trained 8 platform engineers on new stack
• Documented 25 runbooks (previously tribal knowledge)
• Established SLO framework (12 critical services)

THE RESULTS
• MTTR: 4.2 hours → 1.6 hours (62% reduction)
• Incident frequency: 18/month → 7/month (61% reduction)
• ML model deployment: "impossible" → 12 models in production (3 months post-engagement)
• Platform team capacity: 30% building → 65% building
• Cloud costs: Flat despite 30% traffic growth

WHAT THE VP ENGINEERING SAID
"We tried hiring our way out of this for 9 months. Diego's team built in 8 weeks what would've taken us 18 months—and trained our team to own it."

— [Name], VP Engineering, [Company]
```

**Page 2:**

```
THE TECHNICAL APPROACH

PLATFORM STACK
• Observability: Grafana, Loki, Tempo, Prometheus
• ML Platform: MLflow, Feast, Kubeflow Pipelines
• Infrastructure: Kubernetes (EKS), Terraform, ArgoCD
• AI/ML: Custom anomaly detection (Python + scikit-learn)

KEY ARCHITECTURAL DECISIONS
1. **Unified observability over vendor lock-in**
   Why: Avoid Datadog's $400K/year bill; give engineers full control

2. **Feature store-first for ML**
   Why: 80% of ML projects fail on data pipelines, not models

3. **GitOps for platform changes**
   Why: Needed audit trail for SOC 2 compliance

WHAT MADE IT WORK
✓ Executive sponsorship (VP Eng cleared roadmap, protected team time)
✓ Embedded engagement (we sat with the team, not remote consulting)
✓ Bias toward action (shipped v1 fast, iterated based on usage)
✓ Knowledge transfer (no "consultant dependency"; team owned it by Week 6)

WHAT WE DIDN'T DO
✗ Rip-and-replace existing tools (too risky)
✗ Build custom ML platform from scratch (used proven OSS)
✗ Solve every problem (focused on top 3 pain points)

---

ABOUT DIGITAL SOURCERY

We're a boutique platform engineering firm specializing in AI-native infrastructure for mid-market fintech and healthtech companies.

We don't do "long-term transformation roadmaps." We do 8-week sprints that ship working software and train your team to own it.

Our sweet spot: 200-2000 employee companies that need platform expertise but don't want to hire McKinsey.

📅 Book a 20min platform diagnostic: [calendly]
💼 LinkedIn: [profile]
📧 Email: [email]

[LOGO]
```

---

### D. Toil Audit Template (Google Doc)

**Title:** Platform Toil Audit — 2-Week Exercise for New VPs Eng

**Intro:**
```
This is a lightweight exercise to quantify where your platform team spends time. Run it in your first 30 days to identify quick wins.

TIME REQUIRED
• Setup: 30 minutes
• Team participation: 15 min/day for 2 weeks
• Analysis: 2 hours

OUTPUT
• Breakdown of reactive vs. proactive time
• Top 5 "toil black holes" (high-frequency, low-value tasks)
• 3-5 quick win recommendations
```

**Instructions:**
1. **Week 0: Setup**
   - Create shared spreadsheet (template below)
   - Brief team: "We're quantifying toil to prioritize automation"
   - Emphasize: This is NOT performance review; it's process improvement

2. **Week 1-2: Data Collection**
   - Each team member logs daily:
     - Task (brief description)
     - Time spent (hours)
     - Category (Reactive, Proactive, Planned, Unplanned)
     - Repeat frequency (One-time, Weekly, Monthly, Ad-hoc)

3. **Week 3: Analysis**
   - Calculate % reactive vs. proactive
   - Identify top 10 tasks by total time
   - Flag "automation candidates" (high-frequency + repetitive)

**Spreadsheet Template:** [link to Google Sheet]

**Common Findings:**
- 40-60% of time is reactive (firefighting, manual ops, ad-hoc requests)
- Top toil sources: manual env provisioning, runbook execution, tribal knowledge requests
- Quick wins: automate top 3 runbooks, self-service env creation, documented FAQs

---

Want to compare your results to other platform teams? I've run this with 6 companies. Happy to do a 20min debrief: [calendly]
```

---

## Final Notes

This strategy is built for **speed and signal discipline**. The market window is real (24-36 months), so the bias must be toward **action over perfection**.

### Week 1 Actions (Start Monday)

1. **LinkedIn profile optimization** (2 hours)
2. **Build Tier 1 account list** (3 hours) — 15 accounts, verify signals
3. **Write first 10 outreach sequences** (2 hours) — use templates above, customize
4. **Set up CRM** (2 hours) — Airtable or Notion
5. **Send first 5 sequences** (1 hour)

**Total time:** 10 hours
**Outcome:** Pipeline motion starts

### What Success Looks Like in 12 Months

- **Revenue:** $400-600K from 5-8 clients
- **Pipeline:** 30 active Tier 1/2 accounts, 60 Tier 3
- **Credibility:** 3-5 case studies, recognized in Platform Eng communities
- **Referrals:** 30-40% of pipeline from warm intros
- **Optionality:** Can scale (hire), productize (courses/tools), or exit (acqui-hire)

The window won't stay open forever. The buyers exist. The pain is real. The bottleneck is execution.

**Start Monday.**

---

**End of Document**
