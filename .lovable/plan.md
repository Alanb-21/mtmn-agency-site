

## Step 9: Build the Contact Page (/contact)

### New file: `src/pages/Contact.tsx`

**Hero** — `py-16 px-10`, border bottom. "LET'S WORK TOGETHER" headline (`font-inter font-black uppercase text-primary`, `clamp(40px, 5vw, 72px)`, `letter-spacing -0.03em`). Subtext as specified, Cormorant italic 21px.

**Two-column layout** — `md:grid-cols-2`, border bottom.

**Left column — Enquiry form** (`py-14 px-10`, border right):
- "SEND AN ENQUIRY" section label (9px Inter, muted, `tracking-[0.22em]`, `mb-8`)
- React state for form fields + `submitted` boolean + `errors` object
- Five fields: Full Name, Business Name, Email, Phone (optional), Project Description (textarea, rows 4)
- Labels: Inter 500, 10px uppercase, `tracking-[0.14em]`, `mb-1.5`
- Inputs: custom styled — transparent bg, only bottom border (`var(--mtmn-border)`), no radius, `py-3`, Cormorant light 18px, focus border `#DEE7F1`
- Validation on submit: required fields checked, email format validated. Inline error messages below failed fields (Cormorant italic, 14px, `rgba(222,231,241,0.5)`)
- Submit button: full width, `bg-primary text-background`, Inter bold 10px uppercase, `py-4`, `mt-8`, `rounded-none`
- Success state: form replaced with centred "Thank you" message (Cormorant italic 21px). No backend call — just local state toggle for now.

**Right column — Contact methods** (`py-14 px-10`):
- "OR REACH OUT DIRECTLY" section label
- Four rows mapped from data array, each: `py-5`, border bottom, flex between, hover bg `rgba(222,231,241,0.03)`, transition
- Each row: label (Inter 10px uppercase) + detail (Cormorant italic 18px) left, arrow `↗` right (muted → primary on hover)
- WhatsApp, LinkedIn, Email (mailto), Book a Call — external links open `target="_blank" rel="noopener noreferrer"`

### Modified file: `src/App.tsx`

Add import and route `<Route path="/contact" element={<Contact />} />` above catch-all.

### Files NOT touched
Nav, Footer, Index, Services, Process, About, Work.

