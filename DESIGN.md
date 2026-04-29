---
name: Alavanca
description: Three-location BJJ, Muay Thai, and MMA academy — Calgary and Airdrie. Modern editorial black-and-white, photography-led, with one quiet atelier-blue marker reserved for emphasis.
colors:
  bone: "#F5F2EC"
  cream: "#EDE8DE"
  paper: "#FFFFFF"
  ink: "#0E0E0E"
  ink-deep: "#050505"
  graphite: "#1C1C1C"
  steel: "#3A3A3A"
  smoke: "#6B6B6B"
  ash: "#9A9A9A"
  fog: "#C9C5BD"
  hairline: "#1C1C1C"
  hairline-light: "#D9D4CA"
  atelier-blue: "#4F6BA0"
  atelier-blue-deep: "#3F578A"
  brand-navy: "#223855"
typography:
  display:
    fontFamily: "Akira Expanded, Archivo Black, Bebas Neue, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7.5vw, 6.25rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.01em"
  display-outline:
    fontFamily: "Akira Expanded Outline, Akira Expanded, Archivo Black, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7.5vw, 6.25rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Akira Expanded, Archivo Black, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Akira Expanded, Archivo Black, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Inter, Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  lede:
    fontFamily: "Inter, Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.005em"
  label:
    fontFamily: "Inter, Manrope, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
  5xl: "128px"
  6xl: "160px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 32px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.bone}"
  button-primary-on-dark:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "18px 32px"
  button-primary-on-dark-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 30px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  button-ghost-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "16px 30px"
  button-ghost-on-dark-hover:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "32px"
  card-on-dark:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "32px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 0"
  input-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "14px 0"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "8px 0"
  nav-link-hover:
    textColor: "{colors.smoke}"
  nav-link-active:
    textColor: "{colors.ink}"
  eyebrow:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Alavanca

## 1. Overview

**Creative North Star: "The Modern Editorial Academy"**

Alavanca is a modern black-and-white sportswear-brand identity for a serious combat-sports academy. The system runs on **bone (`#F5F2EC`) and ink (`#0E0E0E`)** — a warm off-white default canvas that flips to a deep off-black inversion for full-bleed cinematic moments. Photography is the load-bearing element: real members, real coaches, real rooms in high-contrast black-and-white or full-color editorial. Typography is **Akira Expanded** — extra-wide geometric athletic display caps that read as sportswear-poster authority — paired with **Inter** for body, a humanist-modern sans that carries premium-magazine clarity at any size. The system is structurally restrained — square corners, hairline rules, generous whitespace, deliberate spacing rhythm — and resists every combat-sports cliché.

This system explicitly rejects the lanes of Alavanca's competitors and predecessors. It is **not** the conservative navy/gray Duda site-builder template the current Alavanca site runs on. It is **not** UFC fight-poster brutalism — no blood-red, no skulls, no distressed grunge, no cage iconography. It is **not** corporate gym-chain visual language — no group-fitness stock photography, no chain-blue, no "membership special" yellow banners. It is **not** a pro-fighters-only signal that pushes parents and beginner women out of the funnel.

It reads in the lane of **Equinox / modern Nike campaigns / Tracksmith / Aesop / Gentle Monster / Under Armour flagship.** Editorial monochrome, premium materials, real photography, oversized whitespace, and one quiet **Atelier Blue** marker that appears only on structural emphasis (active nav, focus rings, the marquee separator, the booking-progress completed step) — never as a default surface and never on a CTA fill.

**Key Characteristics:**
- Warm off-white canvas (`#F5F2EC`) as the default, with a deep off-black inversion (`#0E0E0E`) for cinematic full-bleed sections.
- Pure `#000` and pure `#FFF` are forbidden — every neutral is tinted toward bone (warm gray) for printed-paper feel.
- A single quiet accent — **Atelier Blue (`#4F6BA0`)** — used as the structural marker for emphasis: active nav underline, focus rings, the kinetic marquee separator, status indicators, completed booking-progress steps, and link hover. Never on a CTA fill, never as a section background, never as a default text color.
- Primary CTA hover state is a **tonal flip** (ink → graphite, or bone → cream on dark) plus the lift + arrow slide — no color change on the button itself. The motion carries the affordance.
- Display type is **Akira Expanded** — extra-wide geometric athletic caps (Bold for section headlines, Super Bold for hero, Outline for the outlined hero word). Body is **Inter** — humanist-modern sans, the editorial reading voice. High weight contrast, no flat scales.
- Square corners by default (0px / 2px / 4px maximum). No pills outside the "Most Popular" tag. Editorial, not playful.
- Hairline 1px ink rules as the default divider. No drop shadows. No glass blurs as decoration. No gradients.
- Photography is the brand. Real members, real coaches, real rooms — high-contrast or full-color editorial, never stock.
- Spacing rhythm varies deliberately: 48px / 64px / 96px / 128px / 160px section breaks.

## 2. Colors

The palette is two-tone at the strategic level — bone and ink — extended by a four-stop tinted-gray scale and one amber accent that earns its place. The system is rigorously monochromatic; the discipline is the design.

### Primary
- **Bone** (`#F5F2EC`): The default canvas. Warm off-white with a faint cream tint. Reads as printed paper, not as a digital white. The page background, the body of light cards, the reverse-on-dark text color.
- **Ink** (`#0E0E0E`): The default text color and the inversion-section canvas. Off-black with a barely-perceptible warm tint, never pure `#000`. Carries headlines, body, and full-bleed dark sections.
- **Cream** (`#EDE8DE`): Surface elevation +1 inside the bone canvas. Slightly warmer and slightly darker than bone — used for inset cards or alternating section bands when more separation than a hairline rule is needed (rarely).
- **Paper** (`#FFFFFF`): Reserved exclusively for inset card surfaces that need to "pop" against the bone canvas. Use sparingly. Most cards live on the canvas with a hairline rule, not in a paper card.

### Inversion (off-black system)
- **Ink Deep** (`#050505`): The deepest tone. Reserved for footer and floor-of-page treatments where the canvas needs to "drop out" beneath the content. Never used as a default canvas.
- **Graphite** (`#1C1C1C`): Surface elevation +1 inside the ink-canvas inversion section. The dark equivalent of cream — used for inset cards inside dark full-bleed sections.

### Neutral (the tinted-gray scale)
- **Steel** (`#3A3A3A`): Strong text on bone, secondary headlines on ink. Body weight emphasis without going full ink.
- **Smoke** (`#6B6B6B`): Body text in muted contexts, captions, eyebrow secondary text.
- **Ash** (`#9A9A9A`): Inactive nav links, helper text, schedule cell labels in inactive state.
- **Fog** (`#C9C5BD`): The lightest gray. Hairline rules on dark canvas, inactive borders, decorative dividers.

### Hairline (1px rules)
- **Hairline** (`#1C1C1C`): The default 1px rule on bone canvas. Not pure ink — slightly lighter so it reads as a structural mark rather than a hard edge.
- **Hairline Light** (`#D9D4CA`): Subtler 1px rule on bone canvas where a softer divider is needed (alternating row guides, table internals). Tinted toward bone, not toward gray.

### Brand Identity Carriers
- **Brand Navy** (`#223855`): Alavanca's existing brand color. Preserved only inside the live logo lockup and any context where the navy version of the logo is required. **Not a usable design token elsewhere.** The logo carries its own color; the system does not.

### The Single Accent
- **Atelier Blue** (`#4F6BA0`): A quiet, desaturated workshop blue — the only chromatic color in the system. Used **only** as a structural emphasis marker on:
  - The active nav link underline (2px under the active item).
  - The status dot in the floating nav console.
  - The kinetic marquee `✦` separator between phrases.
  - The completed step on the booking progress indicator.
  - The focus ring on every interactive element (`:focus-visible`).
  - The hover color on text links (nav links, footer links, dropdown items, in-card CTAs).
  - The form input underline at the focused state (lead modal).

  Forbidden as: a button fill, a CTA hover state, a body text color, a card background, an icon fill, a section background, a decorative wash, or a brand-identity carrier.
- **Atelier Blue Deep** (`#3F578A`): Reserved for any pressed/active variant of the above. Currently unused but available.

### Named Rules

**The Two-Tone Rule.** The system is bone and ink. Every other color in the palette is a structural variation of bone (cream, paper, fog) or ink (graphite, steel, smoke, ash) or a hairline rule. Chromatic color is forbidden outside the atelier-blue marker and the live logo navy.

**The Tonal-Hover Rule.** Primary CTAs do not change color on hover. They lift (`translateY(-2px)`), shift one tonal step (ink → graphite, or bone → cream on dark), and slide the arrow glyph. The system is disciplined enough that motion carries the affordance — a color flash would be the cheap answer.

**The Earned Marker Rule.** Atelier Blue appears only where the system needs to say *"this is structurally meaningful right now"* — active nav, focused field, in-progress booking step, hover-affordance on a link, marquee rhythm-marker. It is never a default-rest color, never decorative, never on a fill. If it shows up to "warm" or "add color" to anything, the system has been broken.

**The No-Pure-Black, No-Pure-White Rule.** `#000` and `#FFF` are forbidden as page colors. The canvas is bone (`#F5F2EC`); the deepest dark is ink (`#0E0E0E`); the strongest text contrast is `#FFFFFF` only on photographs and full-bleed video overlays where it functions as a caption layer, not as a surface.

**The Seafoam Ban.** The seafoam teal (`#9ED4CC`) from the experimental neumorphic refinish is not part of the Alavanca brand. Do not reintroduce it. Do not introduce any other saturated color in its place. The brand is bone, ink, and the atelier-blue marker.

**The Amber Ban.** The amber-flash (`#F59E0B`) used in earlier iterations of this system has been retired — it read as cheese on the modern black-and-white canvas. Do not reintroduce amber, gold, yellow, or orange as accent colors. The atelier-blue replaces it.

## 3. Typography

**Display Font:** Akira Expanded (with Archivo Black, Bebas Neue, system-ui, sans-serif fallback). Loaded locally as `.otf` / `.ttf` from `fonts/akira/`. Three cuts: **Akira Bold** (700), **Akira Super Bold** (900), **Akira Outline** (decorative cut for the outlined hero word).

**Body Font:** Inter (with Manrope, system-ui, sans-serif fallback). Loaded via Google Fonts. Weights 400, 500, 600, 700.

**Character:** Akira Expanded is a wide, geometric, sportswear-poster display sans — the type system used by performance brands (it's the kind of letterform you'd find on a Nike product launch poster). It pairs with Inter — a humanist-modern body sans by Rasmus Andersson, the editorial reading voice trusted by Linear, Vercel, Notion, and dozens of premium SaaS — to create a "two voices, one room" pairing: Akira shouts the headlines, Inter speaks the body.

The pairing is intentionally extreme: 900 weight uppercase Akira against 400 weight sentence-case Inter. The gap is the hierarchy — there is no middle-weight headline that softens the contrast.

### Hierarchy
- **Display** (Akira Expanded Super Bold 900, `clamp(2.5rem, 7.5vw, 6.25rem)`, line-height 0.94, tracking -0.01em): Hero headlines only. Uppercase. One per page maximum. The tagline "DECIDE TO RISE" is the canonical use.
- **Display Outline** (Akira Expanded Outline 900, same scale): Used only on the outlined word inside a hero display headline ("to" in "Decide to Rise"). The font itself carries the outline — no `text-stroke` hack, no fragile fallbacks.
- **Headline** (Akira Expanded Bold 700, `clamp(1.875rem, 4.2vw, 3.25rem)`, line-height 0.96, tracking -0.005em): Section openers ("CHAMPIONS FORGED", "OUR LOCATIONS", "MEET THE COACHES"). Uppercase.
- **Title** (Akira Expanded Bold 700, `clamp(1.25rem, 2vw, 1.625rem)`, line-height 1.05, tracking -0.005em): Card titles, program names, coach names, FAQ triggers. Uppercase.
- **Sub-title** (Akira Expanded Bold 700, `clamp(1rem, 1.4vw, 1.125rem)`, line-height 1.15): In-card secondary headings.
- **Lede** (Inter 400, `clamp(1.0625rem, 1.4vw, 1.25rem)`, line-height 1.55, tracking -0.005em): The first paragraph after a hero or section opener. Caps at 65ch.
- **Body** (Inter 400, 16px, line-height 1.6): Default paragraph copy. Caps at 65ch. Never wider.
- **Label** (Inter 600, 12px, tracking 0.18em, uppercase): The eyebrow rule above headlines, button labels, nav links, schedule cell labels, footer headers.
- **Button label** (Inter 700, 13px, tracking 0.10em, uppercase): The CTA label specifically — slightly heavier and tighter than the eyebrow label so the button reads as actionable.

### Named Rules

**The Caps Rule.** Display, Headline, Title, and button labels are always uppercase. Body and Lede are always sentence case. The transition between caps display and sentence-case body is part of the rhythm — breaking it (sentence-case headlines, caps body) weakens both halves.

**The Eyebrow Rule.** Every section opener carries a 12px uppercase label with `0.18em` tracking and a 24×1.5px leading rule. On bone, both are ink (`#0E0E0E`); on ink inversion, both flip to bone (`#F5F2EC`) — full monochrome contrast, no chromatic accent. The eyebrow is the only place uppercase labels appear above headlines.

**The 65ch Rule.** Body and Lede paragraphs cap at 65ch. Wider columns flatten the reading rhythm and break the premium feel. If a section appears to need a wider column, the section needs a different layout — not a wider paragraph.

**The Akira-Inter Pairing Rule.** Akira is the only display family. Inter is the only body family. Substitutes — Archivo, Bebas, Manrope, Anton, Oswald, system bold sans — are explicitly fallbacks, never first-choice. If Akira fails to load, the fallback chain delivers Archivo Black; if Inter fails, the fallback chain delivers Manrope. The brand is the pairing — never replace one half without the other.

**The Weight-Contrast Rule.** Display lives at 700 (headlines/titles) and 900 (hero display). Body lives at 400. Inter labels live at 600. There is no 500 body, no 800 headline. The four weight stops are the entire system; everything else is forbidden as a typographic shortcut.

## 4. Elevation

The system is **flat by intention.** Surfaces are differentiated by **canvas inversion** (bone → ink), **hairline 1px rules**, and **whitespace** — not by shadow, not by tonal layering inside a single canvas, not by glow.

The only structural shadow in the entire system sits under the floating nav console. Drop shadows on cards, buttons, modals, and tooltips are forbidden as default treatments. Depth is implied by the relationship between elements, not by ambient lighting.

### Shadow Vocabulary (sparing, structural only)
- **Nav Console Floating** (`box-shadow: 0 12px 40px -16px rgba(0, 0, 0, 0.18)`): The only shadow in the default-bone system. Anchors the floating nav console to the canvas below it. Soft, long, downward-only.
- **Modal Scrim** (`background: rgba(14, 14, 14, 0.85); backdrop-filter: blur(6px)`): The lead-capture modal scrim. The scrim is the depth signal, not a shadow on the modal itself.
- **Hover Lift** (`transform: translateY(-2px)`): The CTA's depth signal. Movement, not shadow. Used on primary buttons and pricing tier cards.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only on the floating nav console and the modal scrim. If you find yourself adding a shadow to a card, a button, or a section to "make it pop", the layout itself is wrong — not the lack of shadow.

**The Hairline Rule.** A 1px ink rule (`#1C1C1C`) on bone, or a 1px fog rule (`#C9C5BD`) on ink, is the default divider between cards, sections, table rows, and stacked components. It is not decorative; it is the structural mark that separates one element from another. Never replaced by a colored stripe, never thicker than 1px, never inset.

**The Photography-Carries-Depth Rule.** Cinematic depth in the system comes from photography, not CSS. A full-bleed black-and-white photograph of a coach mid-instruction creates more depth than any shadow, gradient, or layered card stack. Use photography in place of decorative effects.

## 5. Components

Every component lives in a two-tone system: most have a **light variant** (on bone canvas) and an **on-dark variant** (on ink inversion canvas). Corners are square by default. Hairline rules carry separation. The amber flash appears only as the primary CTA hover state.

### Buttons

- **Shape:** Square (0px radius). Editorial, not playful. The pill button does not exist in this system. The single exception is the small "Most Popular" tag on a featured pricing card, which uses a 9999px pill.
- **Primary (on bone):** Solid ink (`#0E0E0E`) background with bone (`#F5F2EC`) text. Inter 700 at 13px / 0.10em tracking, uppercase. 18px × 32px padding. 52px minimum height.
- **Primary (on bone) hover:** Background shifts ink → graphite (`#1C1C1C`); the entire button lifts 2px; the inline arrow glyph slides 6px right. Easing: `cubic-bezier(0.22, 1, 0.36, 1)` over 200ms. **No color flash. The motion carries the affordance.**
- **Primary (on ink):** Inverted — bone background, ink text. On hover: bone shifts to cream (`#EDE8DE`), lift, arrow slide. Same tonal-flip pattern.
- **Ghost (on bone):** Transparent background, 1.5px ink border, ink text. On hover: fills ink, text inverts to bone. Lift 2px.
- **Ghost (on ink):** Transparent background, 1.5px bone border, bone text. On hover: fills bone, text inverts to ink.
- **Pressed:** Transform resets to 0 and the background shifts one tonal step deeper (graphite → ink-deep on bone-context buttons).
- **Focus:** 2px atelier-blue outline, offset 4px. The atelier-blue appears as a focus ring — keyboard users get the marker.

### Eyebrow

- **Style (on bone):** 12px Inter 600, uppercase, `0.18em` tracking, ink color. A 24×1.5px ink rule precedes the label with an 8px gap.
- **Style (on ink):** Same dimensions; rule and text both flip to bone. Full monochrome contrast — no chromatic accent on the eyebrow.
- **Use:** The structural lead-in above every section headline. Carries the section name in the eyebrow ("THE ROOM", "WHAT YOU'LL TRAIN", "MEMBERSHIPS", "BOOK A TRIAL").

### Cards / Containers

- **Shape:** Square (0px radius). Always.
- **Background (default):** Transparent — most cards live on the canvas with a 1px hairline ink rule on the top, bottom, or both edges, not as a filled box.
- **Background (paper variant):** Paper (`#FFFFFF`) for the rare card that genuinely needs to "pop" off the bone canvas — typically a featured pricing tier or a quote pulled from a long-form testimonial. Surrounded by a 1px ink hairline.
- **Background (on-dark variant):** Graphite (`#1C1C1C`) inside an ink inversion section. Paired with a 1px fog hairline.
- **Internal Padding:** 32px on default cards, 48px on featured cards. The padding shift is part of the elevation signal.
- **Shadow:** None. Ever.

### Inputs / Fields

- **Style (on bone):** Transparent background, no border on the sides or top, **1.5px ink underline** on the bottom edge. Manrope 400 at 16px, ink text color. Padding 14px × 0 (the underline is the field — there is no rounded box).
- **Style (on ink):** Transparent background, 1.5px bone underline. Bone text color.
- **Label:** Sits above the field as a 12px Manrope 700 uppercase eyebrow-style label, no rule prefix. Smoke color on bone, ash color on ink.
- **Focus:** Underline thickens from 1.5px to 2.5px, color shifts to amber-flash. No glow, no inner shadow, no border-on-top.
- **Error:** Underline shifts to a desaturated brick (`#A4382A`); helper text appears in the same brick below the field.
- **Disabled:** 50% opacity on the underline; helper text reads "not available" in ash.

### Navigation — The Floating Ink Console

(Recent commit: "Redesign nav as a floating ink console". This is the canonical nav.)

- **Style:** Fixed top, centered horizontal bar shape, ink (`#0E0E0E`) background, bone (`#F5F2EC`) text. Lives on the bone canvas with a 16px standoff from the page edge and a soft `0 12px 40px -16px rgba(0, 0, 0, 0.18)` shadow that anchors it to the canvas. On scroll past 24px, top tightens to 8px and background deepens to ink-deep.
- **Brand Mark:** The Alavanca landscape logo (white version) at 36px height, aligned to the left edge of the console (32px when scrolled, 30px on ≤520px).
- **Links:** Inter 500 at 13px, uppercase, `0.06em` tracking, bone color. On hover, color shifts to atelier-blue. The active link adds a 2px atelier-blue underline anchored 4px below the baseline.
- **Status:** A 6px atelier-blue dot precedes a small "3 LOCATIONS · OPEN" label in ash. Quiet, structural, never decorative.
- **CTA:** A compact bone-on-ink button (10px × 20px, 13px label) sits at the right end of the console. On hover: shifts to cream, lifts 1px. No color flash.
- **Dropdown Panel:** Drops below the console with a 16px gap. Graphite background, 0px radius, internal padding. Internal links are 12px × 16px, sentence case, with optional ash sublabels. 1px fog hairline divider between items. Hover color shifts to atelier-blue.
- **Mobile:** ≤960px viewport collapses the console to a brand mark + hamburger toggle. The full-screen mobile sheet is ink canvas with stacked uppercase bone links (Akira at section level, Inter for sub-links), indented sentence-case sublinks in ash, and the primary CTA pinned at the bottom.

### Kinetic Marquee (signature component)

- **Style:** A horizontally-scrolling band that runs across full-bleed ink inversion sections. Akira Expanded Bold uppercase at clamp(1.5rem, 4vw, 2.75rem), 0.02em tracking, in bone color with **atelier-blue ✦ separators** between phrases. The separator is set in Inter (not Akira) so the geometric rhythm reads cleanly against the heavy display text.
- **Behavior:** 40s linear loop. Respects `prefers-reduced-motion` by freezing in place.
- **Use:** Once per long-form page, as a section-break rhythm element. Never inside a card. Never on a bone canvas — always full-bleed ink.

### Lead-Capture Modal

- **Shape:** Square corners (0px radius). 480px max-width on desktop, full-screen on mobile.
- **Background:** Bone (`#F5F2EC`) on light pages, graphite (`#1C1C1C`) on ink inversion contexts. 32px padding. 1px ink hairline (or 1px fog hairline on dark) instead of a shadow.
- **Scrim:** Full-viewport ink at 85% opacity with 6px backdrop-filter blur. Click-to-dismiss.
- **Header:** Headline + lede + close glyph (16px stroke icon, top-right, hit area 40×40).
- **Form:** Stacked underline-style Inputs at 24px gap; primary submit button as a full-width primary variant pinned to the bottom of the form.

### Tag (single exception to the square-corner rule)

- **Style:** Pill-shape (9999px radius). 4px × 12px padding. 11px Manrope 700 uppercase `0.16em` tracking. Used exclusively for the "Most Popular" / "Featured" / "New" tags on pricing tiers and program cards.
- **Color:** Ink fill on bone canvas with bone text; bone fill on ink canvas with ink text. Never amber-fill.

## 6. Do's and Don'ts

### Do:
- **Do** anchor every page on the bone (`#F5F2EC`) canvas. Use the ink (`#0E0E0E`) inversion only for full-bleed cinematic sections (hero photography, marquee, dark CTA bands).
- **Do** preserve Alavanca's existing brand navy (`#223855`) inside the live logo lockup. The logo carries its own color; do not extend the navy into the rest of the system.
- **Do** use atelier-blue (`#4F6BA0`) only as a structural marker: the active nav underline, focus rings, marquee separator, status dot, completed booking-progress step, hover color on text links, focused form-field underline. Never on a button fill, a section background, a default text color, or as decorative warmth.
- **Do** treat primary CTA hover as a tonal flip (ink → graphite, or bone → cream on dark) plus the 2px lift and arrow slide. No color flash. The motion is the affordance.
- **Do** use Akira Expanded for every uppercase headline and title. Bold (700) for sections/cards/titles; Super Bold (900) for the hero display only; Outline for the outlined hero word.
- **Do** use Inter for every body paragraph, lede, label, button, and form field. Weights 400 (body/lede), 600 (labels/eyebrows), 700 (button labels). No middle weights.
- **Do** lead every section with a 12px uppercase eyebrow label preceded by a 24×1.5px rule, followed by an Akira Bold headline in caps.
- **Do** cap body and lede paragraphs at 65ch. Wider columns break the premium feel.
- **Do** use 1px hairline rules (ink on bone, fog on ink) as the default divider between sections, cards, and table rows.
- **Do** keep corners square (0px radius) by default. The single exception is the small pill tag on featured pricing/program cards.
- **Do** use real Alavanca photography — members on the mat, coaches teaching, kids in class. The visual system depends on photography to carry the "earned authority" principle from PRODUCT.md. High-contrast black-and-white or full-color editorial. Never stock.
- **Do** vary section spacing rhythm: 48px / 64px / 96px / 128px / 160px. Same-padding-everywhere reads cheap.
- **Do** lift hovered CTAs with `translateY(-2px)` and 200ms `cubic-bezier(0.22, 1, 0.36, 1)`. Movement, not glow.
- **Do** respect `prefers-reduced-motion` on every kinetic element (marquee, scroll reveals, button lifts).
- **Do** use a 1.5px underline-only style for form inputs. The underline is the field. Focus thickens to 2.5px and shifts to atelier-blue.

### Don't:
- **Don't** reintroduce the seafoam teal (`#9ED4CC`) from the experimental neumorphic refinish. It is not part of the Alavanca brand and breaks the Two-Tone Rule.
- **Don't** reintroduce amber, gold, yellow, or orange (`#F59E0B`, `#D97706`, etc.) — they read as cheese on the modern black-and-white canvas. Atelier blue replaces all amber usages from earlier iterations.
- **Don't** use a second chromatic color anywhere. Atelier blue is the only permitted accent. No teal, no green, no red, no chain-blue, no navy outside the live logo, no gold.
- **Don't** flash color on a CTA hover. Buttons hover via tonal flip + lift + arrow slide only. Color flash is the cheap answer.
- **Don't** use pure `#000` or pure `#FFF` as page or surface colors. The canvas is bone (`#F5F2EC`); the deepest dark is ink (`#0E0E0E`); pure white only appears as caption text on photography and pure black does not appear at all.
- **Don't** revert to the **generic Duda / Wix / GoDaddy site-builder template** the current Alavanca site runs on — conservative navy/gray, weak hierarchy, Mapbox blocks where heroes belong.
- **Don't** lean into **UFC fight-poster brutalism** — no blood-red palettes, no skulls, no cage iconography, no distressed-grunge textures, no ransom-note typography.
- **Don't** mimic **corporate gym chains** (LA Fitness, GoodLife, Anytime Fitness) — no group-fitness stock photos, no "membership special" yellow banners, no chain-blue, no vendor-templated location pinning.
- **Don't** signal **pro-fighters-only** energy — no copy or imagery that implies a beginner, parent, or first-time woman should hesitate.
- **Don't** introduce **glassmorphism, gradient text, animated gradient backgrounds, or neumorphic shadows.** They are forbidden as decorative effects.
- **Don't** use **side-stripe `border-left` / `border-right` colored accents** on cards, list items, or callouts. Hairline 1px rules only, on full edges.
- **Don't** use rounded corners above 4px on cards, buttons, or inputs. The system is square. The pill tag is the single exception.
- **Don't** add drop shadows to cards, buttons, modals, or tooltips. The only shadow in the system is the floating nav console anchor.
- **Don't** wrap content in **redundant cards**. If a section can breathe on the canvas with a hairline rule, leave it on the canvas.
- **Don't** animate CSS layout properties (width, height, margin, padding). Animate `transform` and `opacity` only.
- **Don't** use bounce, elastic, or overshoot easing curves. Ease-out exponential / quart / quint only.
- **Don't** use em dashes (`—`) in copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** use a middle-weight headline font that softens the contrast. Akira lives at 700 (sections) and 900 (hero). Inter body lives at 400 only. Inter labels live at 600. Inter CTAs live at 700. The four stops are the system; everything else is forbidden.
- **Don't** substitute Akira or Inter with similar-but-different fonts (Archivo, Bebas, Anton, Manrope, GT America, Söhne, Suisse, etc.) outside the documented fallback chain. The Akira-Inter pairing is the brand voice.
- **Don't** flatten the spacing rhythm. Sections should breathe at different scales — same-padding-everywhere reads cheap.
- **Don't** use stock photography. If real photography of the actual Alavanca rooms, members, and coaches is unavailable for a section, use a typographic poster treatment with the eyebrow + headline + body stack instead.
