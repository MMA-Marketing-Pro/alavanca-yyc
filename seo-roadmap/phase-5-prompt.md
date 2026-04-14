# Phase 5 Prompt — Pricing + Airdrie Catchment + Deep Suburbs (25 pages)

> **Target ship date:** _________
> **Prerequisites:** Phases 1–4 live.

## Context to load
Same as Phase 1. **Before Phase 5, confirm with the client what pricing details they're willing to publish.** If they won't disclose specific dollar amounts, convert pricing pages into "what's included" / "membership framework" pages instead.

## Objective
Ship **25 pages**: 8 pricing/offer pages (bottom-of-funnel), 7 Airdrie-specific pages (their north catchment is under-exploited), 10 deep-suburb locations.

## Pages to build

### Pricing / offer pages (8) — `/memberships/{slug}.html`

| # | URL | Title | Meta | H1 | Unique angle |
|---|---|---|---|---|---|
| 1 | `/memberships/bjj-pricing-calgary.html` | BJJ Membership Pricing Calgary \| Alavanca | What does BJJ cost in Calgary? Alavanca's membership tiers explained, plus competitor average pricing. | BJJ Membership Pricing in Calgary | Tier breakdown; compared to Calgary-average pricing |
| 2 | `/memberships/muay-thai-pricing-calgary.html` | Muay Thai Pricing Calgary \| Alavanca | Muay Thai membership costs in Calgary — what you get at each tier, plus market comparison. | Muay Thai Pricing in Calgary | Tier breakdown; market comparison |
| 3 | `/memberships/family-pricing.html` | Family Martial Arts Pricing \| Alavanca Calgary | Family discount pricing at Alavanca — bundle adult + kids memberships and save. Calgary + Airdrie. | Family Pricing | Family tier value; kid-count scaling |
| 4 | `/memberships/kids-bjj-pricing.html` | Kids BJJ Pricing Calgary \| Alavanca | Kids BJJ membership cost in Calgary — what's included, sibling discounts, and trial options. | Kids BJJ Pricing | Sibling discount logic; trial → membership path |
| 5 | `/memberships/drop-in-pricing.html` | Drop-In Class Pricing \| Alavanca Calgary | Drop-in BJJ, Muay Thai, and MMA classes at Alavanca — when drop-ins make sense vs membership. | Drop-In Pricing | Visitors, travelers; member-referral drop-in |
| 6 | `/memberships/private-lessons.html` | Private Lessons at Alavanca \| BJJ · Muay Thai · MMA | Private lessons with Alavanca coaches — pricing, what to bring, and when a private makes sense. | Private Lessons | When privates help; coach availability; pricing |
| 7 | `/memberships/summer-camp-registration.html` | Alavanca Summer Camp Registration \| Kids Martial Arts | Register your child for Alavanca Summer Camp — July 8–12, all three Calgary + Airdrie locations. Cost + inclusions. | Summer Camp Registration | Dated-campaign page; refresh each year |
| 8 | `/memberships/free-trial-faq.html` | Free Trial Class FAQ \| Alavanca Calgary | Everything about your free trial at Alavanca — what to wear, bring, and expect. Answer your last questions. | Free Trial Class FAQ | Pre-trial objection-buster; links to booking page |

### Airdrie-specific (7)

| # | URL | Topic | Unique angle |
|---|---|---|---|
| 9 | `/locations/airdrie/kingsview/brazilian-jiu-jitsu.html` | BJJ · Kingsview Airdrie | On-location page for the Airdrie anchor neighborhood |
| 10 | `/locations/airdrie/bayside/brazilian-jiu-jitsu.html` | BJJ · Bayside Airdrie | Bayside lake community; family focus |
| 11 | `/locations/airdrie/luxstone/brazilian-jiu-jitsu.html` | BJJ · Luxstone Airdrie | Luxstone community; 5-min drive to location |
| 12 | `/locations/airdrie/coopers-crossing/brazilian-jiu-jitsu.html` | BJJ · Cooper's Crossing Airdrie | Cooper's Crossing family neighborhood |
| 13 | `/locations/airdrie/ridgegate/brazilian-jiu-jitsu.html` | BJJ · Ridgegate Airdrie | Ridgegate community profile |
| 14 | `/locations/airdrie/kingsview/kids-bjj.html` | Kids BJJ · Kingsview Airdrie | Airdrie anchor for kids BJJ specifically |
| 15 | `/locations/airdrie/kingsview/mma.html` | MMA · Kingsview Airdrie | Airdrie MMA availability |

### Deep-suburb locations (10)

| # | URL | Service · Neighborhood | Unique angle |
|---|---|---|---|
| 16 | `/locations/calgary/cranston/muay-thai.html` | Muay Thai · Cranston | SE Muay Thai option |
| 17 | `/locations/calgary/auburn-bay/muay-thai.html` | Muay Thai · Auburn Bay | Auburn Bay striking option |
| 18 | `/locations/calgary/seton/kids-bjj.html` | Kids BJJ · Seton | Seton YMCA proximity; kids programs |
| 19 | `/locations/calgary/chaparral/kids-bjj.html` | Kids BJJ · Chaparral | Lake Chaparral family community |
| 20 | `/locations/calgary/walden/kids-bjj.html` | Kids BJJ · Walden | Newer community; growing kid population |
| 21 | `/locations/calgary/legacy/kids-bjj.html` | Kids BJJ · Legacy | Deep SE family community |
| 22 | `/locations/calgary/silverado/kids-bjj.html` | Kids BJJ · Silverado | Silverado family market |
| 23 | `/locations/calgary/evergreen/kids-bjj.html` | Kids BJJ · Evergreen | Evergreen family market |
| 24 | `/locations/calgary/somerset/kids-bjj.html` | Kids BJJ · Somerset | Somerset community; C-Train access |
| 25 | `/locations/calgary/bridlewood/kids-bjj.html` | Kids BJJ · Bridlewood | Bridlewood community; short Shawnessy commute |

## Per-page content requirements

### Pricing pages
- Specific tiers with dollar amounts (or "starting at $X") — requires client sign-off
- What's included at each tier (feature checklist)
- Competitor/market comparison — research average Calgary BJJ/MT/MMA pricing before writing
- Financing, family discount, trial-credit details
- Clear "Book a call" or "Claim Free Trial" CTA
- Schema: `Product` or `Service` with `Offer` + `BreadcrumbList`

### Airdrie pages + deep-suburb pages — same Phase 1 location-page rules.

## Integration tasks

1. Add all 25 URLs to `sitemap.xml`.
2. Update `memberships.html` — link to all 8 pricing/offer pages from a "Specific pricing guides" section.
3. Update `alavanca-airdrie.html` — add "Serving Airdrie communities" listing the 7 Airdrie neighborhood pages.
4. Update `summer-camps.html` — link to the dated registration page.
5. Update `free-class.html` — link to the Free Trial FAQ.
6. Run `/seo-audit` on all 25 new pages.
7. Commit, push, verify deploy.

## Attribution requirement
Every new page must include "Powered by MMA Marketing Pro" in the footer linked to `https://www.mmamarketingpro.com` (target=_blank, rel=noopener).
