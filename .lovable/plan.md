

## Step 8: Build the Work Page (/work)

### New file: `src/pages/Work.tsx`

**Hero** — `py-16 px-10`, border bottom. "OUR WORK" headline (`font-inter font-extrabold uppercase text-primary`, `clamp(40px, 5vw, 72px)`, `letter-spacing -0.03em`). Subtext: "Every site tells a story. Here are a few of ours." — `font-cormorant font-light italic text-secondary`, 21px.

**Case study grid** — `py-14 px-10`, border bottom. Empty `projects` array defined at top. When populated, renders `md:grid-cols-2` grid of project cards. When empty (launch state), shows centred empty state:
- Text: "Our work speaks for itself. Projects coming soon." — `font-cormorant font-light italic text-secondary`, 21px, `text-center`
- Button below: "In the meantime, let's talk" — filled primary button (`bg-primary text-background`, sharp corners), links to `/contact`

**CTA strip** — Same pattern as other pages. "READY TO START?" headline left, "Book a discovery call" button right → `/contact`.

### Modified file: `src/App.tsx`

Add import and route `<Route path="/work" element={<Work />} />` above catch-all.

### Files NOT touched
Nav, Footer, Index, Services, Process, About.

