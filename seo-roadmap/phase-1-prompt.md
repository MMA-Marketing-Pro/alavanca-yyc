# Phase 1 Prompt — Foundation (25 pages)

> **Target ship date:** _________
> **Paste this entire file into a fresh Claude Code session inside the `client-redesign-kit` repo root to execute Phase 1.**

---

## Context you must load before building

Read these files in order — they define the standards every new page must meet:

1. `.agent/skills/site-redesign/SKILL.md` — quality bar, component library, lead-modal + booking flow requirements (every new page must include the lead modal and the "Powered by MMA Marketing Pro" footer attribution, no exceptions)
2. `.agent/skills/taste-skill/SKILL.md` — 8-point grid, typography, color calibration, performance guardrails
3. `.agent/skills/performance-athletic-skill/SKILL.md` — the locked visual language for Alavanca (performance-athletic style)
4. `.agent/skills/seo-audit/SKILL.md` — post-build audit checklist (run after Phase 1 builds)
5. `.agent/skills/programmatic-seo/SKILL.md` — playbooks + uniqueness rules
6. `sites/alavanca-yyc/brand-kit.json` — locked palette + fonts (amber `#F59E0B` accent + navy `#223855` identity, Archivo Black / Bebas Neue display + Manrope body, dark mode)
7. `sites/alavanca-yyc/seo-roadmap/roadmap.md` — full 6-month plan and uniqueness rules (Section 7)
8. `sites/alavanca-yyc/seo-roadmap/keywords.json` — structured keyword inventory
9. `sites/alavanca-yyc/content-profile.json` — real business content (testimonials, programs, addresses) to draw from
10. `sites/alavanca-yyc/styles.css` and `scripts.js` — reuse the existing design system. New pages must link to these; do NOT duplicate or rewrite.

---

## Phase 1 objective

Ship **25 foundation pages** that claim the closest-to-anchor neighborhoods around Calgary HQ and Shawnessy, plus the 5 most-searched glossary terms. This is the foundation layer — pages most likely to rank quickly because they're closest (physically + semantically) to Alavanca's three existing location pages.

**Mix:**
- **20 location pages** — `{service} in {neighborhood}` around HQ and Shawnessy
- **5 glossary pages** — top-of-funnel "what is X" terms

---

## Global requirements for every Phase 1 page

1. **Reuse the existing design system.** Link `styles.css` and `scripts.js`. Reuse the shared `<header class="nav">`, the lead modal markup, and the main footer markup from `sites/alavanca-yyc/index.html`. **Do not** restyle anything.
2. **Include the lead modal on every new page.** Every CTA button uses `data-cta="lead-modal"`. No mailto / tel / external-form CTAs.
3. **Include the "Powered by MMA Marketing Pro" footer attribution on every new page**, linked to `https://www.mmamarketingpro.com` with `target="_blank"` and `rel="noopener"`. This matches the existing site — never drop or alter it. The `/seo-audit` step will verify and auto-fix any page missing it.
4. **Every page must include:**
   - Self-referencing `<link rel="canonical">`
   - Open Graph + Twitter Card tags (reuse the pattern from existing pages)
   - One JSON-LD `BreadcrumbList` + the page-type-specific schema from roadmap Section 6
   - Favicon link
   - `<html lang="en">` + viewport meta
5. **Add each new URL to `sites/alavanca-yyc/sitemap.xml`.** Do not skip this.
6. **Update the relevant hub page's internal-link section** (see "Hub updates at end of phase" below).
7. **Respect the uniqueness rules** in `roadmap.md` Section 7 — every location page needs a neighborhood landmark, commute time, parking note, and competitive context. Every glossary page needs an answer block, coach quote, related terms, and a "see at Alavanca" CTA.

---

## Pages to build (25)

### Location pages (20) — NE Calgary + SW Calgary core

| # | URL | Anchor loc | Title (≤60 chars) | Meta (≤160 chars) | H1 | Unique angle to weave in |
|---|---|---|---|---|---|---|
| 1 | `/locations/calgary/bridgeland/brazilian-jiu-jitsu.html` | HQ | Brazilian Jiu-Jitsu in Bridgeland Calgary \| Alavanca | BJJ classes in Bridgeland at Alavanca HQ — 5 min from General Ave. White belt to black belt, Gi and No-Gi. Free trial. | Brazilian Jiu-Jitsu in Bridgeland | Bridgeland-to-HQ is a 4-minute walk — mention Edmonton Trail access; Bridgeland Riverside Park as landmark |
| 2 | `/locations/calgary/bridgeland/muay-thai.html` | HQ | Muay Thai in Bridgeland Calgary \| Alavanca | Muay Thai classes in Bridgeland at Alavanca HQ. Art of eight limbs, adult + kids programs. Free trial class. | Muay Thai in Bridgeland | Same neighborhood anchor — different service; lean into evening commute convenience |
| 3 | `/locations/calgary/renfrew/brazilian-jiu-jitsu.html` | HQ | BJJ in Renfrew Calgary \| Alavanca HQ | Brazilian Jiu-Jitsu classes in Renfrew — 3 min from HQ. White belt to black belt curriculum. Claim your free trial. | Brazilian Jiu-Jitsu in Renfrew | Renfrew Athletic Park landmark; 3-min drive via 16 Ave |
| 4 | `/locations/calgary/crescent-heights/brazilian-jiu-jitsu.html` | HQ | BJJ in Crescent Heights Calgary \| Alavanca | Brazilian Jiu-Jitsu classes near Crescent Heights at Alavanca HQ. 7 min via Edmonton Trail. Free trial. | BJJ in Crescent Heights | Centre Street commute; mention Crescent Heights High School |
| 5 | `/locations/calgary/mount-pleasant/brazilian-jiu-jitsu.html` | HQ | BJJ in Mount Pleasant Calgary \| Alavanca | Brazilian Jiu-Jitsu in Mount Pleasant — a 6-minute drive to Alavanca HQ. Beginner-friendly classes. Free trial. | BJJ in Mount Pleasant | Confederation Park + Hillhurst-Sunnyside commute |
| 6 | `/locations/calgary/inglewood/brazilian-jiu-jitsu.html` | HQ | BJJ in Inglewood Calgary \| Alavanca | Brazilian Jiu-Jitsu in Inglewood at Alavanca HQ. 10 min from 9th Ave. Free trial class for new students. | BJJ in Inglewood | Inglewood's small-business/restaurant scene; post-work class convenience |
| 7 | `/locations/calgary/ramsay/brazilian-jiu-jitsu.html` | HQ | BJJ in Ramsay Calgary \| Alavanca HQ | Brazilian Jiu-Jitsu near Ramsay — 5 min from Alavanca HQ. All levels welcome, free trial included. | BJJ in Ramsay | Ramsay's community feel; Scotsman's Hill landmark |
| 8 | `/locations/calgary/downtown/brazilian-jiu-jitsu.html` | HQ | BJJ Near Downtown Calgary \| Alavanca | Brazilian Jiu-Jitsu near Downtown Calgary — 8 min from Bow Tower via Memorial Dr. Lunch and evening classes. Free trial. | BJJ Near Downtown Calgary | Lunch-hour class angle for downtown professionals; Bow Tower landmark |
| 9 | `/locations/calgary/shawnessy/brazilian-jiu-jitsu.html` | Shawnessy | Brazilian Jiu-Jitsu in Shawnessy \| Alavanca | BJJ classes at Alavanca Shawnessy — 14387 Macleod Trail SW. Adult, kids, and Women's-Only programs. Free trial. | Brazilian Jiu-Jitsu in Shawnessy | On-location page; reference Shawnessy Village mall, C-Train station |
| 10 | `/locations/calgary/shawnessy/kids-bjj.html` | Shawnessy | Kids BJJ in Shawnessy Calgary \| Alavanca | Kids Brazilian Jiu-Jitsu in Shawnessy — Tiny Warriors (3–6), Kids BJJ, and teen programs. Free trial class. | Kids BJJ in Shawnessy | Family-scheduling angle; mention YMCA / rec centre proximity |
| 11 | `/locations/calgary/midnapore/brazilian-jiu-jitsu.html` | Shawnessy | BJJ in Midnapore Calgary \| Alavanca Shawnessy | Brazilian Jiu-Jitsu in Midnapore — a 4-minute drive to Alavanca Shawnessy. Free trial for new students. | BJJ in Midnapore | Lake Midnapore + Fish Creek Park landmarks; short commute |
| 12 | `/locations/calgary/millrise/brazilian-jiu-jitsu.html` | Shawnessy | BJJ in Millrise Calgary \| Alavanca | Brazilian Jiu-Jitsu in Millrise — 5 min from Alavanca Shawnessy via Macleod Tr. Free trial class. | BJJ in Millrise | Millrise Station C-Train access |
| 13 | `/locations/calgary/mckenzie-towne/brazilian-jiu-jitsu.html` | Shawnessy | BJJ in McKenzie Towne Calgary \| Alavanca | Brazilian Jiu-Jitsu in McKenzie Towne — 10 min from Alavanca Shawnessy. Adult + kids BJJ classes. Free trial. | BJJ in McKenzie Towne | Family-heavy neighborhood; kids angle prominent |
| 14 | `/locations/calgary/cranston/brazilian-jiu-jitsu.html` | Shawnessy | BJJ in Cranston Calgary \| Alavanca | Brazilian Jiu-Jitsu in Cranston — 12 min from Alavanca Shawnessy via Deerfoot. Free trial. | BJJ in Cranston | Cranston Century Hall community centre landmark |
| 15 | `/locations/calgary/auburn-bay/brazilian-jiu-jitsu.html` | Shawnessy | BJJ in Auburn Bay Calgary \| Alavanca | Brazilian Jiu-Jitsu in Auburn Bay — 14 min from Alavanca Shawnessy. Adult + kids BJJ. Free trial. | BJJ in Auburn Bay | Auburn Bay Lake; family neighborhood |
| 16 | `/locations/calgary/seton/brazilian-jiu-jitsu.html` | Shawnessy | BJJ in Seton Calgary \| Alavanca Shawnessy | Brazilian Jiu-Jitsu in Seton — 12 min to Alavanca Shawnessy. All experience levels, free trial class. | BJJ in Seton | Seton YMCA + South Health Campus landmarks |
| 17 | `/locations/calgary/chaparral/brazilian-jiu-jitsu.html` | Shawnessy | BJJ in Chaparral Calgary \| Alavanca | Brazilian Jiu-Jitsu in Chaparral — 8 min from Alavanca Shawnessy via Macleod Tr. Free trial. | BJJ in Chaparral | Lake Chaparral community association |
| 18 | `/locations/calgary/walden/brazilian-jiu-jitsu.html` | Shawnessy | BJJ in Walden Calgary \| Alavanca Shawnessy | Brazilian Jiu-Jitsu in Walden — 7 min drive to Alavanca Shawnessy. Adult + kids programs. Free trial. | BJJ in Walden | Newer community; growing family population |
| 19 | `/locations/calgary/shawnessy/muay-thai.html` | Shawnessy | Muay Thai in Shawnessy Calgary \| Alavanca | Muay Thai classes at Alavanca Shawnessy — art of eight limbs for any level. Free trial for new students. | Muay Thai in Shawnessy | Shawnessy's adult-Muay-Thai community |
| 20 | `/locations/calgary/mckenzie-towne/kids-bjj.html` | Shawnessy | Kids BJJ in McKenzie Towne Calgary \| Alavanca | Kids Brazilian Jiu-Jitsu for McKenzie Towne families at Alavanca Shawnessy — 10 min drive. Free trial. | Kids BJJ in McKenzie Towne | Heavy kids market; after-school scheduling angle |

### Glossary pages (5) — foundational

| # | URL | Title | Meta | H1 | Unique angle |
|---|---|---|---|---|---|
| 21 | `/learn/what-is-bjj.html` | What Is Brazilian Jiu-Jitsu? \| Alavanca Calgary | Brazilian Jiu-Jitsu explained: history, technique, why it works. Written by Calgary BJJ coaches at Alavanca. | What Is Brazilian Jiu-Jitsu? | Coach-written; Gracie lineage context; Calgary-local "try at Alavanca" CTA |
| 22 | `/learn/what-is-muay-thai.html` | What Is Muay Thai? \| Alavanca Calgary | Muay Thai explained — the art of eight limbs. History, technique, and why it works as a workout and a fight art. | What Is Muay Thai? | Thailand history; 8-limbs diagram; Alavanca HQ Muay Thai class schedule sidebar |
| 23 | `/learn/what-is-mma.html` | What Is MMA? \| Alavanca Calgary | MMA explained — how striking and grappling combine in one sport. UFC context, beginner paths, safety. | What Is MMA? | Demystify UFC perception; beginner-accessible angle |
| 24 | `/learn/bjj-belt-ranks.html` | BJJ Belt Ranks Explained \| Alavanca | White belt to black belt: the 5 BJJ belt ranks, stripes, and what each belt represents. By Alavanca coaches. | BJJ Belt Ranks Explained | Graphic/table of belts; avg time per belt; Alavanca promotion philosophy |
| 25 | `/learn/what-to-wear-bjj.html` | What To Wear To Your First BJJ Class \| Alavanca | A simple guide to what to wear for your first BJJ class. Gi, No-Gi, and what to bring. Calgary-written. | What To Wear To Your First BJJ Class | Checklist format; photos placeholder; links to brazilian-jiu-jitsu.html + free-class.html |

---

## Per-page content outline (shared template)

Each **location page** must follow this structure:

1. **Hero** (compact variant from existing `.hero--compact`): eyebrow "{Neighborhood} · Calgary", H1, subhead that names the specific commute / landmark, primary CTA "Claim Free Trial" (opens lead modal)
2. **"Why train here" split section** (2 short paragraphs):
   - Paragraph 1: anchor-specific — "If you live in {Neighborhood}, Alavanca {HQ/Shawnessy/Airdrie} is {X minutes} away via {named road}. That makes us the closest {service} academy on your commute."
   - Paragraph 2: service-specific value — pulled from the existing hub page content, not duplicated verbatim. Paraphrase in 2–3 sentences.
3. **"{Neighborhood} → Alavanca" trip section** (benefits row): 3 benefits — commute time, parking note, class time that fits local schedule
4. **Program card trio** linking to BJJ / Muay Thai / MMA hubs
5. **Testimonial** — rotating from the 3 real homepage testimonials, with a line prefix that sets local context ("Bridgeland member Jerry says…")
6. **CTA band** — "Decide to rise" + free-trial button
7. **Shared footer** with 3 locations' NAP + Powered by MMA Marketing Pro

Each **glossary page** must follow:

1. **Hero** (compact): eyebrow "Learn", H1 ("What Is X?"), one-line summary answer box (featured-snippet-friendly)
2. **Answer section** (400–600 words, real content — not thin): history, technique, how it works, why it's effective. Coach voice.
3. **"Why it matters for you" split section** — tie to a program at Alavanca
4. **Related terms** grid — 4 internal links to other glossary pages (or the hub program page if related terms don't exist yet)
5. **CTA band** — "Try it in person" free-trial button
6. **FAQ** (3–5 Q's) — styled with `faq__trigger` accordion, with `FAQPage` JSON-LD

---

## Schema to inject per page type

**Location pages:** `BreadcrumbList` + `Service` (with `areaServed` set to the specific neighborhood) + reference to the parent Organization via `@id`.

**Glossary pages:** `BreadcrumbList` + `Article` (with `author` = "Alavanca Coaching Staff", `publisher` = Organization reference) + `FAQPage` when a FAQ is present.

Reuse the existing homepage schema script pattern. Every new page should reference the existing `https://www.alavancayyc.com/#organization` @id to stitch into the knowledge graph.

---

## Integration tasks (end of phase)

After all 25 pages are built:

1. **Update `sitemap.xml`** — append all 25 URLs with `priority` 0.7–0.8 and `changefreq` monthly.
2. **Update `brazilian-jiu-jitsu.html`** — add a new section below the existing FAQ titled "BJJ by Neighborhood" that lists all 15 BJJ location pages built in Phase 1 (cards or a simple list).
3. **Update `muay-thai.html`** — add a "Muay Thai by Neighborhood" section listing the 2 Muay Thai location pages built.
4. **Update `alavanca-hq.html`** — add a "Serving these neighborhoods" section listing all 8 NE Calgary location pages.
5. **Update `alavanca-shawnessy.html`** — add a "Serving these neighborhoods" section listing all 12 Shawnessy location pages.
6. **Update the footer** (in `index.html` and all 15 existing pages) — add a new "Nearby Neighborhoods" column with ~6 top neighborhood links. Keep the column compact.
7. **Run `/seo-audit`** on the 25 new pages to verify titles, metas, canonicals, OG, schema, attribution, and alt text.
8. **Commit + push + verify deploy** (Cloudflare Pages auto-deploys from git).

---

## Success criteria for Phase 1

- All 25 pages live in production
- All 25 URLs accepted into `sitemap.xml`
- Google Search Console picks up all 25 within 14 days
- At least 15 of 25 appear in the index within 30 days
- At least 3 pages ranking in the top 50 for their target keyword within 30 days

---

## Attribution requirement (non-negotiable)

Every new page built in this phase must include the **"Powered by MMA Marketing Pro"** line in the footer, linked to `https://www.mmamarketingpro.com`, opening in a new tab with `rel="noopener"`. The `/seo-audit` step will verify this on every page and add it if missing. Never remove, replace, or rebrand.
