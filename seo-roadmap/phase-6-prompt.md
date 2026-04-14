# Phase 6 Prompt — Gap Fill + Optimization Refresh (30 pages)

> **Target ship date:** _________
> **Prerequisites:** Phases 1–5 live. **Before Phase 6, pull Search Console data** — which Phase 1 pages are ranking? Which are indexed but invisible? That data drives the refresh pass below.

## Context to load
Same as Phase 1, plus: export the Search Console "Performance" report for the last 90 days, filtered to the 25 Phase 1 URLs. Sort by impressions. Any page with high impressions + low CTR is a refresh candidate. Any page with zero impressions after 30+ days may have an indexation or content-quality issue.

## Objective
Ship **30 pages**: 15 remaining matrix gaps (personas + locations we haven't built) + 7 remaining personas + 8 refresh / optimize passes on Phase 1 pages. Total roadmap now stands at **155 new pages**.

## Pages to build

### Remaining matrix gaps — locations (15)

| # | URL | Service · Neighborhood | Unique angle |
|---|---|---|---|
| 1 | `/locations/calgary/downtown/muay-thai.html` | Muay Thai · Downtown | Lunch-hour striking angle |
| 2 | `/locations/calgary/beltline/muay-thai.html` | Muay Thai · Beltline | Evening striking for urban professionals |
| 3 | `/locations/calgary/inglewood/mma.html` | MMA · Inglewood | Small community; MMA adjacent to HQ |
| 4 | `/locations/calgary/bridgeland/mma.html` | MMA · Bridgeland | HQ-anchor MMA page |
| 5 | `/locations/calgary/midnapore/kids-bjj.html` | Kids BJJ · Midnapore | Lake-community family angle |
| 6 | `/locations/calgary/millrise/kids-bjj.html` | Kids BJJ · Millrise | C-Train access + after-school slots |
| 7 | `/locations/calgary/sundance/kids-bjj.html` | Kids BJJ · Sundance | Deep SW family market |
| 8 | `/locations/calgary/shawnessy/combat-conditioning.html` | Combat Conditioning · Shawnessy | Fitness-focused entry point |
| 9 | `/locations/calgary/bridgeland/combat-conditioning.html` | Combat Conditioning · Bridgeland | HQ bootcamp page |
| 10 | `/locations/calgary/downtown/kids-bjj.html` | Kids BJJ · Downtown | Urban family market |
| 11 | `/locations/airdrie/kingsview/kids-muay-thai.html` | Kids Muay Thai · Airdrie | Airdrie kids striking page |
| 12 | `/locations/airdrie/bayside/kids-bjj.html` | Kids BJJ · Bayside Airdrie | Bayside families |
| 13 | `/locations/calgary/cranston/mma.html` | MMA · Cranston | Deep SE MMA reach |
| 14 | `/locations/calgary/mckenzie-towne/mma.html` | MMA · McKenzie Towne | Family SE-MMA |
| 15 | `/locations/calgary/shawnessy/kids-muay-thai.html` | Kids Muay Thai · Shawnessy | Shawnessy kids striking |

### Remaining persona + specialty pages (7)

| # | URL | Title | Unique angle |
|---|---|---|---|
| 16 | `/programs/bjj-for-office-workers.html` | BJJ for Office Workers \| Alavanca Calgary | Stress relief, mobility, commute-to-class after work |
| 17 | `/programs/muay-thai-for-adults-over-40.html` | Muay Thai for Adults Over 40 \| Alavanca | Joint-aware Muay Thai; technique-first pad work |
| 18 | `/programs/muay-thai-for-competitors.html` | Muay Thai for Competitors \| Alavanca Calgary | Amateur MT competition path |
| 19 | `/programs/kids-mma.html` | Kids MMA \| Alavanca Calgary | Kids-MMA structure; safety framework; age ranges |
| 20 | `/programs/mma-for-fitness.html` | MMA for Fitness & Conditioning \| Alavanca | Non-competitive MMA; fitness angle |
| 21 | `/programs/bjj-for-teens.html` | BJJ for Teens \| Alavanca Calgary | Teen-specific BJJ angle; peer-group class |
| 22 | `/programs/self-defense-for-women.html` | Self-Defense for Women \| Alavanca Calgary | Women-focused self-defense via Alavanca's BJJ + Muay Thai |

### Refresh / optimization passes (8) — update Phase 1 pages based on Search Console data

| # | Page to refresh | What to do |
|---|---|---|
| 23 | `/learn/what-is-bjj.html` | Refresh with FAQ expansion; add internal links to all new `/programs/` and `/locations/` pages built across Phases 2–5 |
| 24 | `/learn/what-is-muay-thai.html` | Same refresh — add internal link cluster, expand FAQ, update "last updated" date |
| 25 | `/learn/what-is-mma.html` | Same refresh — now link to the 6+ MMA location pages, the MMA persona pages |
| 26 | Top-performing Phase 1 location page (e.g., `/locations/calgary/shawnessy/brazilian-jiu-jitsu.html`) | Expand with new local testimonial, fresh neighborhood landmark, stronger internal links to sibling neighborhood pages |
| 27 | Top-performing Phase 1 location page #2 | Same refresh template |
| 28 | Top-performing Phase 1 location page #3 | Same refresh template |
| 29 | `/guides/best-bjj-gym-in-calgary.html` | Update rankings if any competitor landscape changed; refresh "last updated" date |
| 30 | `/memberships/bjj-pricing-calgary.html` | Update pricing if adjusted; refresh competitor-comparison data |

**For refresh pages:** increment a visible "Last updated" field in the body AND update `<meta name="article:modified_time">`. Do NOT change the URL. The goal is freshness signals, not new content.

## Per-page content requirements
- Location / persona / pricing pages follow Phase 1–5 rules.
- Refresh pages must add AT LEAST 3 meaningful edits (new paragraph, new internal links, new FAQ, new testimonial) — not just date-changes. Google penalizes cosmetic-only "updates."

## Integration tasks

1. Add the 22 brand-new URLs to `sitemap.xml` (the 8 refresh pages keep their existing sitemap entry but get a fresh `<lastmod>` date).
2. Run a full `/seo-audit` on ALL 155 roadmap pages — not just the 30 new ones. This catches any post-deploy regressions (broken internal links, missing attributions, broken schema).
3. Verify the internal linking graph: are there any orphan pages? Run a Screaming Frog export (or equivalent) and check.
4. Update the global footer's "Nearby Towns" link list with data-driven choices (which towns are showing the most impressions in Search Console).
5. Update `memberships.html`, the 3 location pages, and the 5 service pages with refreshed "by Neighborhood" / "by Audience" sections now that the full matrix is built.
6. Commit, push, verify deploy.

## End-of-roadmap review (after Phase 6 ships)

Run a retrospective:
- How many of 155 pages are indexed?
- How many rank top 20? Top 10? Top 3?
- Organic session growth vs baseline (pre-Phase 1)?
- Lead form submission growth attributable to organic?
- Which page types over-performed? Under-performed?
- What should Phase 7 (if budget allows) prioritize based on data?

Feed the retrospective into a Phase 7 plan (same folder naming convention: `phase-7-prompt.md`). Common Phase 7 moves:
- **Geographic expansion** — if Calgary is saturated, target Edmonton, Lethbridge.
- **Seminar / event pages** — dated pages for visiting black-belt seminars or gradings.
- **Coach profile pages** — one page per coach with their competitive credentials, improves E-E-A-T.
- **Video / YouTube integration** — import the YouTube channel content as embedded tutorial pages.

## Attribution requirement
Every new page built in this phase must include "Powered by MMA Marketing Pro" in the footer linked to `https://www.mmamarketingpro.com` (target=_blank, rel=noopener). Refresh pages that already have this attribution must keep it.
