

## Steps 6 & 7: Build Process Page (/process) and About Page (/about)

### Overview
Two new page components and a routing update. Three files touched total. No existing pages, Nav, or Footer modified.

### File 1: `src/pages/Process.tsx` (new)

**Hero** — `py-16 px-10`, border bottom, "HOW WE WORK" headline (`font-inter font-black uppercase`, `clamp(40px, 5vw, 72px)`), Cormorant italic subtext.

**Six step rows** — data array mapped to rows. Each row: border bottom, `py-7 px-10`, flex layout with three columns:
- Number (Cormorant 300 italic, 16px, muted, `w-[60px]`)
- Step name (Inter 900 uppercase, `clamp(20px, 2.5vw, 28px)`, `w-[300px]`)
- Description (Cormorant 300, 19px, `flex-1`)

Steps: Discovery Call, Proposal, Design & Build, Review & Approve, Launch, Ongoing Support — all content as specified.

**CTA strip** — `py-20 px-10`, flex between, "START WITH A CONVERSATION." headline left, filled "Book a discovery call" button right → `/contact`.

### File 2: `src/pages/About.tsx` (new)

**Hero** — Same pattern as Process. "ABOUT MTMN" headline, Cormorant italic subtext.

**Mission** — Two-column grid (`md:grid-cols-2`, `gap-16`). Left: "OUR MISSION" label + "We Move The Needle." headline. Right: two Cormorant paragraphs.

**Approach** — "OUR APPROACH" label, Cormorant italic headline "Built with you. Not just for you." (`clamp(32px, 4vw, 52px)`), single paragraph `max-w-[680px]`.

**Values** — "WHAT WE BELIEVE" label, four-column grid (`md:grid-cols-2 lg:grid-cols-4`), each card with border-right (last none), `px-8 py-6`. Title (Inter 700, 13px) + description (Cormorant 300 italic, 18px). Four values: Premium by default, Always personal, Results over vanity, Long-term partnership.

**CTA strip** — "WORK WITH US." headline, "Let's talk" button → `/contact`.

### File 3: `src/App.tsx` (modified)

Add two imports and two routes above the catch-all:
```
<Route path="/process" element={<Process />} />
<Route path="/about" element={<About />} />
```

### Files NOT touched
Nav, Footer, Index, Services, no other files.

