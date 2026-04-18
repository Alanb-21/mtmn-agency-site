import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";

const niches = [
  "Dental & Clinics",
  "Physiotherapy",
  "Legal & Accountancy",
  "Trades & Engineering",
  "More",
];

const services = [
  {
    num: "01",
    name: "Website Design & Build",
    outcome: "A site that turns visitors into enquiries — not just a digital brochure.",
    features: [
      "Custom design built to your brand",
      "Mobile-first, fast-loading",
      "Contact form + WhatsApp CTA",
      "Google-ready from day one",
    ],
    price: "From €[PLACEHOLDER]",
  },
  {
    num: "02",
    name: "SEO & Local Search",
    outcome: "Appear when your ideal client searches for you in your town.",
    features: [
      "Local keyword research",
      "On-page SEO setup",
      "Google Business Profile",
      "Monthly rank reporting",
    ],
    price: "From €[PLACEHOLDER]/mo",
  },
  {
    num: "03",
    name: "Paid Social",
    outcome: "Facebook & Instagram ads that generate leads, not just likes.",
    features: [
      "Ad creative + copywriting",
      "Audience targeting",
      "Weekly optimisation",
      "Transparent reporting",
    ],
    price: "From €25/mo",
  },
];

/* ─── HERO ─── */
const Hero = () => (
  <section
    className="grid md:grid-cols-2 min-h-[100vh] max-md:min-h-[85vh] border-b border-border"
  >
    {/* Left content */}
    <Reveal
      className="flex flex-col justify-center"
      style={{ paddingLeft: "clamp(20px, 6vw, 96px)", paddingRight: "clamp(20px, 4vw, 48px)" }}
    >
      <span
        className="font-inter font-medium uppercase text-muted-foreground"
        style={{ fontSize: "13px", letterSpacing: "0.15em" }}
      >
        IRISH DIGITAL AGENCY
      </span>

      <h1
        className="font-inter font-black uppercase text-foreground mt-6"
        style={{
          fontSize: "clamp(52px, 8vw, 110px)",
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}
      >
        Websites That
        <br />
        Win Clients.
      </h1>

      <p
        className="font-cormorant italic text-muted-foreground mt-6 max-w-[560px]"
        style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.5 }}
      >
        Built for Irish dentists, solicitors, physiotherapists & tradespeople who want
        more from their online presence.
      </p>

      <div className="flex items-center gap-4 mt-10 max-md:flex-col max-md:items-stretch">
        <Link
          to="/contact"
          className="bg-primary text-primary-foreground font-inter font-bold uppercase text-center hover:opacity-90 transition-opacity"
          style={{ fontSize: "13px", letterSpacing: "0.08em", padding: "14px 32px" }}
        >
          Book a Free Call
        </Link>
        <Link
          to="/work"
          className="border border-primary text-primary font-inter font-bold uppercase text-center hover:bg-primary hover:text-primary-foreground transition-colors"
          style={{ fontSize: "13px", letterSpacing: "0.08em", padding: "13px 31px" }}
        >
          See Our Work
        </Link>
      </div>

      <p
        className="font-inter font-medium text-muted-foreground mt-8"
        style={{ fontSize: "12px" }}
      >
        ⬤ [PLACEHOLDER: X clients] across Ireland · Est. 2026
      </p>
    </Reveal>

    {/* Right image — hidden on mobile */}
    <div className="hidden md:block relative overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Dark editorial workspace"
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  </section>
);

/* ─── NICHE TRUST BAR ─── */
const NicheBar = () => (
  <Reveal
    as="section"
    className="border-b border-border flex flex-col items-center justify-center text-center"
    style={{ minHeight: "120px", paddingTop: "32px", paddingBottom: "32px" }}
  >
    <span
      className="font-inter font-medium uppercase text-muted-foreground"
      style={{ fontSize: "12px", letterSpacing: "0.15em" }}
    >
      TRUSTED BY IRISH BUSINESSES IN
    </span>

    <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-3 mt-5 px-5">
      {niches.map((n, i) => (
        <span
          key={n}
          className="font-inter font-medium uppercase text-foreground px-6"
          style={{
            fontSize: "14px",
            borderRight: i < niches.length - 1 ? "1px solid hsl(var(--border))" : "none",
          }}
        >
          {n}
        </span>
      ))}
    </div>
  </Reveal>
);

/* ─── SERVICES ─── */
const Services = () => (
  <Reveal
    as="section"
    className="border-b border-border"
    style={{ paddingLeft: "clamp(20px, 6vw, 96px)", paddingRight: "clamp(20px, 6vw, 96px)", paddingTop: "96px", paddingBottom: "96px" }}
  >
    <span
      className="font-inter font-medium uppercase text-muted-foreground block"
      style={{ fontSize: "12px", letterSpacing: "0.15em" }}
    >
      WHAT WE DO
    </span>

    <h2
      className="font-inter font-extrabold text-foreground mt-4 max-w-[1000px]"
      style={{
        fontSize: "clamp(36px, 5vw, 64px)",
        lineHeight: 1.05,
        letterSpacing: "-0.02em",
      }}
    >
      Everything your business needs online.
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-16">
      {services.map((s) => (
        <article
          key={s.num}
          className="bg-card border border-border flex flex-col"
          style={{ padding: "40px" }}
        >
          <span
            className="font-inter font-extrabold uppercase text-muted-foreground"
            style={{ fontSize: "11px", letterSpacing: "0.2em" }}
          >
            {s.num}
          </span>

          <h3
            className="font-inter font-extrabold text-foreground mt-6"
            style={{ fontSize: "22px", lineHeight: 1.2 }}
          >
            {s.name}
          </h3>

          <p
            className="font-cormorant italic text-muted-foreground mt-3"
            style={{ fontSize: "17px", lineHeight: 1.5 }}
          >
            {s.outcome}
          </p>

          <ul className="flex flex-col gap-2 mt-8">
            {s.features.map((f) => (
              <li
                key={f}
                className="font-inter text-muted-foreground"
                style={{ fontSize: "14px", lineHeight: 1.6 }}
              >
                {f}
              </li>
            ))}
          </ul>

          <p
            className="font-inter font-semibold text-primary mt-auto pt-10"
            style={{ fontSize: "13px" }}
          >
            {s.price}
          </p>
        </article>
      ))}
    </div>
  </Reveal>
);

const Index = () => (
  <main>
    <Hero />
    <NicheBar />
    <Services />
  </main>
);

export default Index;
