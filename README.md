# Alavanca — Website Redesign

Premium website redesign for **Alavanca** — Brazilian Jiu-Jitsu, Muay Thai, and MMA academy with three locations across Calgary and Airdrie, Alberta.

- **Live site (current):** https://www.alavancayyc.com
- **Phone:** 1-587-742-0556
- **Email:** info@alavancayyc.com

## Locations

- **Alavanca HQ** — 209 16 Ave NE, Calgary, AB T2E 1J9
- **Alavanca Shawnessy** — 14387 Macleod Trail SW, Calgary, AB T2Y 1M7
- **Alavanca Airdrie** — 2920 Kingsview Blvd SE #3153, Airdrie, AB T4A 0A9

## Tech

- Static HTML/CSS/JS — no framework, no build step
- Performance-athletic design system (Archivo Black + Bebas Neue display, Manrope body)
- Dark-mode with amber accent (`#F59E0B`) over Alavanca's brand navy (`#223855`)
- Lead-capture modal → 2-step booking flow (`booking.html` with GHL calendar placeholders)
- Full SEO package: canonical tags, Open Graph + Twitter Cards, JSON-LD schema (SportsClub, Service, Location, FAQPage, BreadcrumbList), sitemap.xml, robots.txt
- Deployed to Cloudflare Pages (auto-deploys on git push)

## Structure

```
/
├── index.html                  Home
├── brazilian-jiu-jitsu.html    BJJ program
├── muay-thai.html              Muay Thai program
├── mma.html                    MMA program
├── womens-jiu-jitsu.html       Women's-Only BJJ (Shawnessy)
├── summer-camps.html           Kids summer camps
├── alavanca-hq.html            Calgary NE location
├── alavanca-shawnessy.html     Calgary SW location
├── alavanca-airdrie.html       Airdrie location
├── coaches-hq.html             HQ & Airdrie coaches
├── coaches-shawnessy.html      Shawnessy coaches
├── memberships.html            Pricing tiers
├── blog.html                   Blog hub
├── free-class.html             Free trial landing
├── contact.html                Contact
├── booking.html                Step 2 of 2 booking funnel (noindex)
├── styles.css                  Shared design system
├── scripts.js                  Nav, modal, reveals, booking switcher
├── sitemap.xml
├── robots.txt
├── images/                     Real Alavanca photos
└── seo-roadmap/                6-month programmatic SEO expansion plan (155 planned pages)
```

## Before go-live

- [ ] Replace GoHighLevel calendar placeholders in `booking.html` with real embed codes (one per program)
- [ ] Add dedicated Muay Thai action photos (currently using No-Gi photos as closest visual)
- [ ] Add coach headshot photos (currently using Alavanca training shots as backdrops)
- [ ] Confirm final membership pricing on `memberships.html`

---

Designed and built by **[MMA Marketing Pro](https://www.mmamarketingpro.com)** — marketing agency for BJJ, Muay Thai, and MMA schools.
