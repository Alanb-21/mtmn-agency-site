

## Full rebuild to the new MTMN Digital spec

Overwrites the current site to match the new brief. Memory rules will be updated to reflect the new truth (cards allowed, pricing allowed, Unsplash hero allowed, CSS-only animations).

### 1. Dependency cleanup
- Remove `framer-motion`
- Delete `src/components/motion/AnimatedSection.tsx` and `AnimatedItem.tsx`

### 2. Design system — `src/index.css` + `tailwind.config.ts`
- `--background` 0 0% 0% (#000000)
- `--card` 0 0% 5.1% (#0D0D0D)
- `--primary` 213 47% 91% (#DEE7F1, kept)
- `--foreground` 0 0% 100% (#FFFFFF)
- `--muted-foreground` 0 0% 62.7% (#A0A0A0)
- `--border` 0 0% 10.2% (#1A1A1A)
- Drop `--mtmn-*` rgba helpers; replace with semantic tokens
- Global `--radius: 0` (sharp corners everywhere — overrides prior 20px tag exception)
- Google Fonts: Inter 400/500/600/800/900 + Cormorant Garamond 400 italic, 600 italic
- Add `@keyframes mtmn-fade-up` (opacity 0→1, translateY 24px→0, 0.6s ease-out) + `.mtmn-reveal` / `.is-visible` utility

### 3. CSS scroll-fade utility
- New `src/hooks/useScrollReveal.ts` — IntersectionObserver, adds `.is-visible` once at threshold 0.15
- New `src/components/Reveal.tsx` — wrapper component using the hook

### 4. Nav — overwrite `src/components/Nav.tsx`
- Logo `MTMN DIGITAL` (Inter 800 white tracked uppercase)
- Links: Work · Services · About · Contact (drops Process)
- Right CTA: primary button `Book a Call` → `/contact` (#DEE7F1 bg, #000 text, Inter 700, no radius, padding 14px 32px)
- Sticky, #000 bg, 1px bottom border #1A1A1A, no blur, no transparency
- Mobile: hamburger → full-screen black overlay

### 5. Home — overwrite `src/pages/Index.tsx`
**Hero (100vh / 85vh mobile, 50/50 split)**
- Eyebrow `IRISH DIGITAL AGENCY`
- H1 `Websites That` / `Win Clients.` (Inter 900, clamp(52px, 8vw, 110px), line-height 0.95)
- Subheadline (Cormorant italic clamp(18px, 2vw, 24px) #A0A0A0)
- Buttons: primary `Book a Free Call` + ghost `See Our Work`
- Caption: `⬤ [PLACEHOLDER: X clients] across Ireland · Est. 2026`
- Right: full-height dark editorial Unsplash image (workspace, no people), flush right, hidden on mobile

**Niche Trust Bar (~120px)**
- Centred label `TRUSTED BY IRISH BUSINESSES IN`
- Flex row with 1px #1A1A1A vertical dividers: Dental & Clinics · Physiotherapy · Legal & Accountancy · Trades & Engineering · More
- Mobile: wraps to 2 rows

**Services (3-column grid)**
- Eyebrow `WHAT WE DO` + headline `Everything your business needs online.`
- Cards: bg #0D0D0D, 1px border #1A1A1A, no radius, padding 40px
  - 01 Website Design & Build — `From €[PLACEHOLDER]`
  - 02 SEO & Local Search — `From €[PLACEHOLDER]/mo`
  - 03 Paid Social — `From €25/mo`
- Mobile: stack full-width
- Each section wrapped in `<Reveal>`

### 6. Other pages
- Drop `/process` route in `src/App.tsx`; delete `src/pages/Process.tsx`
- Work, Services, About, Contact: strip `<AnimatedSection>` / `<AnimatedItem>` and `--mtmn-*` token refs (swap to semantic tokens). Keep their current copy/structure — spec doesn't redesign them.
- Footer: only edits if it references framer or `--mtmn-*`

### 7. Memory updates
Update `mem://index.md` Core + dependent files (`design/system`, `constraints/donots`, `features/pages`):
- Cards allowed (#0D0D0D surface)
- Pricing allowed
- Dark Unsplash editorial imagery allowed (no people)
- Sharp corners on every element
- Animations: CSS IntersectionObserver fade-ins only, no framer-motion
- Logo is `MTMN DIGITAL`
- Five pages now (Process dropped)

### Files touched
`package.json`, `src/index.css`, `tailwind.config.ts`, `src/components/Nav.tsx`, `src/pages/Index.tsx`, `src/pages/Work.tsx`/`Services.tsx`/`About.tsx`/`Contact.tsx`, `src/App.tsx`, new `src/components/Reveal.tsx` + `src/hooks/useScrollReveal.ts`, deletions: `src/components/motion/*`, `src/pages/Process.tsx`. Memory: `mem://index.md`, `design/system`, `constraints/donots`, `features/pages`.

### Files NOT touched
`src/components/Footer.tsx` (verify only), all `src/components/ui/*`, tests, configs.

### Heads-up
- Work/Services/About/Contact pages aren't redesigned in this spec — they'll lose animations and recolor to new tokens but keep current copy. Separate prompt to redesign each.
- `[PLACEHOLDER]` strings (client count, prices) left literal for you to fill.
- I'll pick a dark editorial Unsplash workspace shot for the hero unless you supply a URL.

