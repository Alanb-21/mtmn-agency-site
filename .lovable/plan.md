

## Step 5: Build the Services Page (/services)

### New file: `src/pages/Services.tsx`

**Hero section**
- Padding `py-16 px-10`, border bottom `var(--mtmn-border)`
- Headline: "What We Do" — `font-inter font-extrabold uppercase text-primary`, `clamp(36px, 5vw, 64px)`, `letter-spacing -0.03em`
- Subtext: "Three services. One goal — your business performing better online." — `font-cormorant font-light italic text-secondary`, 21px

**Three service sections** (stacked, each with border bottom)
- Padding `py-14 px-10`
- Service number + headline row: number in `font-cormorant font-light italic` muted, name in `font-inter font-extrabold uppercase text-primary` ~26px
- Description paragraph: `font-cormorant font-light text-secondary`, 21px, `line-height 1.65`, `max-w-[680px]`
- "What's included" label: `font-inter font-medium text-[9px] uppercase`, muted, `letter-spacing 0.22em`
- Included items: `font-cormorant font-light italic text-secondary`, 18px, each preceded by a short decorative line

**Service content:**
1. **01 — Web Design & Build**: Description as specified. Items: Custom design, Mobile-first build, Contact forms & booking systems, SEO ready, Fast loading
2. **02 — UX & Booking Systems**: Description as specified. Items: Booking system integration, Contact form build, User journey mapping, Simple automations
3. **03 — Ongoing Support**: Description as specified. Items: Post-launch maintenance, Content updates, Long-term partnership

**CTA strip** (reuses same pattern as Home page)
- "Ready to start?" headline, "Book a discovery call" filled button linking to `/contact`

### Modified file: `src/App.tsx`
- Import `Services` page, add route `<Route path="/services" element={<Services />} />`

### Files NOT touched
Nav, Footer, Index, no other files.

