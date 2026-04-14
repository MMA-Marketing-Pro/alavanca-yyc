# Alavanca — Site Scan Analysis

## Business Snapshot
- **Name:** ALAVANCA (YYC = Calgary)
- **Type:** Brazilian Jiu-Jitsu, Muay Thai, and MMA academy
- **Locations:** 3 — Calgary HQ (NE), Calgary Shawnessy (SW), Airdrie
- **Tagline:** "Decide to Rise"
- **Phone / Email:** 1-587-742-0556 / info@alavancayyc.com
- **Head instructor / owner:** Professor Tim (Tim Blanchard, per live schedule)
- **Programs:** Adult + Kids BJJ, Adult + Kids Muay Thai, MMA, Tiny Warriors (3–6yo), Women's-Only BJJ (Shawnessy), Combat Conditioning, Summer Camps
- **Social:** IG @alavancahq, YouTube @AlavancaHQ, FB /AlavancaYYC

## Brand Vibe
Serious combat-sports academy with a family-friendly, community-first undercurrent. Gracie-lineage context in their BJJ copy, but positioning clearly targets beginners, kids, and women as well as competitors. Testimonials emphasize longevity (10+ year members), accessibility ("50+ year old who trains regularly"), and the culture around Professor Tim. This is NOT a pure pro-fighter team — it's a modern multi-location academy serving real local families.

## Design Recommendation: `performance-athletic-skill`
This is the best default for combat-sports clients who aren't strictly pro-fighter teams or heritage academies. Alavanca fits cleanly:
- Multiple locations + kids + women's programs → needs to read as accessible, not intimidating.
- Strong tagline ("Decide to Rise") → deserves bold sportswear-brand treatment.
- Three gyms need visual differentiation while still feeling like one brand.
- Performance-athletic delivers: kinetic marquees, one electric accent, athletic type scale.

**Rejected alternatives:**
- `cinematic-fight-skill` — no visible pro fighter roster on the current site; positioning is community-first.
- `championship-heritage-skill` — no multi-decade heritage claim; the academy reads as modern.
- `training-lab-skill` — they don't lean into data/performance-institute messaging.
- `brutalist-skill` — too raw; would undersell their family/kids programs.

## Current Site Issues
1. **Generic template design** — appears to be built on a Duda-style site builder. Conservative navy + gray palette, no hero photography, no visual hierarchy.
2. **Navigation bloat (15 pages)** with confusing labels: `/newpage` for MMA, `/alavanca-airdire-coaches` (typo), three overlapping "HQ" location pages.
3. **Homepage leads with Mapbox map tiles** instead of a hero. Maps belong on the contact / locations page.
4. **Tagline "Decide to Rise" is buried** inside an H3 — it should anchor the hero.
5. **No published pricing** on memberships page — just a generic "contact us" feel.
6. **Blog has no content** but is linked in the top nav.
7. **No real photography** of coaches or facility surfaced in the scrape. Stock imagery will be used as placeholders, then swapped before deploy.
8. **Weak mobile-first hierarchy** — 15 nav items will collapse into an overwhelming hamburger menu.

## Page Inventory (15 pages — all 15 will be rebuilt)
| # | Page | Type | Notes |
|---|------|------|-------|
| 1 | Home | homepage | Hero + tagline, program trio, three locations, testimonials, CTA |
| 2 | Brazilian Jiu-Jitsu | services | History of Gracie lineage + BJJ benefits |
| 3 | Muay Thai | services | Art of eight limbs + benefits |
| 4 | MMA | services | Combined disciplines + benefits |
| 5 | Women's Jiu-Jitsu (Shawnessy) | services | Tuesday 7:15 PM, ages 14+, beginner-friendly |
| 6 | Summer Camps | services | Kids camps July 8–12 |
| 7 | Alavanca HQ (NE Calgary) | location | 209 16 Ave NE |
| 8 | Alavanca Shawnessy | location | 14387 Macleod Trail SW |
| 9 | Alavanca Airdrie | location | 2920 Kingsview Blvd SE #3153 |
| 10 | HQ / Airdrie Coaches | team | BJJ + Muay Thai + MMA coaches |
| 11 | Shawnessy Coaches | team | BJJ + Muay Thai coaches |
| 12 | Memberships | pricing | Pricing placeholder to fill in |
| 13 | Blog | blog | Clean template ready for posts |
| 14 | Try A Free Class | trial | Lead form page |
| 15 | Contact | contact | Three locations, phone, email |

Plus a required **booking.html** (Step 2 of 2) = 16 HTML files total per the lead-capture spec.

## Essential vs. Nice-to-Have
- **Essential:** Home, Memberships, all 3 location pages, BJJ/Muay Thai/MMA program pages, Contact, Free Class, Booking.
- **Nice-to-have but MUST still build (per the "recreate every page" rule):** Coaches pages (both), Women's-only BJJ, Summer Camps, Blog.

## Open Items to Flag to the User (at later steps)
- Real coach headshots + bios for each location (images step)
- Real facility photos for each of the 3 locations
- High-res original logo (white + dark versions)
- Membership pricing tiers
- GoHighLevel calendar embed codes, one per program (booking step)
- Confirm Professor Tim is the correct name to use publicly for the head-coach positioning
