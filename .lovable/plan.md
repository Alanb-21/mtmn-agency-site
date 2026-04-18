

## Add scroll-triggered fade-up animations site-wide

### Approach
Use `framer-motion`'s `whileInView` API with `viewport={{ once: true }}` to trigger animations once per element as they enter the viewport. Build two small reusable wrappers so every page gets identical behaviour without rewriting markup styles.

### New file: `src/components/motion/AnimatedSection.tsx`
A wrapper around `motion.section` that:
- Accepts all standard section props (`className`, `style`, `children`)
- Sets `initial={{ opacity: 0, y: 40 }}`, `whileInView={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.6, ease: "easeOut" }}`
- `viewport={{ once: true, amount: 0.2 }}` so it triggers once when 20% visible
- Provides a `staggerChildren: 0.1` variant context so child `AnimatedItem`s cascade

### New file: `src/components/motion/AnimatedItem.tsx`
A wrapper around `motion.div` (with optional `as` prop for `h1`, `p`, etc., or just used as a generic wrapper) that:
- Uses variants `{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }`
- Inherits stagger timing from parent `AnimatedSection`
- `transition={{ duration: 0.6, ease: "easeOut" }}`

### Install
- `framer-motion` via package manager

### Page edits (6 files)
For each page (`Index.tsx`, `Services.tsx`, `Process.tsx`, `About.tsx`, `Work.tsx`, `Contact.tsx`):
- Replace each top-level `<section>` with `<AnimatedSection>` (preserves all existing className, style, borders, padding)
- Wrap the headline, body text, and CTA/button groupings inside each section with `<AnimatedItem>` so they stagger in order: headline → body → CTA

No changes to colours, fonts, spacing, layout classes, or existing styles. No changes to `Nav.tsx` or `Footer.tsx`.

### Files touched
- `package.json` (framer-motion install)
- `src/components/motion/AnimatedSection.tsx` (new)
- `src/components/motion/AnimatedItem.tsx` (new)
- `src/pages/Index.tsx`, `Services.tsx`, `Process.tsx`, `About.tsx`, `Work.tsx`, `Contact.tsx` (wrap sections + key elements)

### Files NOT touched
`Nav.tsx`, `Footer.tsx`, `App.tsx`, `index.css`, `tailwind.config.ts`, all UI components.

