import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/motion/AnimatedSection";
import AnimatedItem from "@/components/motion/AnimatedItem";

/* ─── Section border helper ─── */
const sectionBorder = { borderBottom: "1px solid var(--mtmn-border)" };

/* ─────────────────────────────────────────────
   SECTION 1 — HERO
   ───────────────────────────────────────────── */
const Hero = () => (
  <AnimatedSection
    className="min-h-screen flex flex-col justify-between px-10 max-md:px-5 pt-16 pb-12"
    style={sectionBorder}
  >
    {/* Eyebrow */}
    <AnimatedItem>
      <div className="flex items-center gap-3">
        <span className="block w-8 h-px" style={{ background: "var(--mtmn-muted)" }} />
        <span
          className="font-inter font-normal text-[10px] uppercase"
          style={{ letterSpacing: "0.2em", color: "var(--mtmn-muted)" }}
        >
          Irish Digital Agency
        </span>
      </div>
    </AnimatedItem>

    {/* Headline */}
    <AnimatedItem className="my-auto py-12">
      {[
        { text: "We make", ghost: false },
        { text: "businesses", ghost: true },
        { text: "look exceptional", ghost: false },
        { text: "online.", ghost: true },
      ].map(({ text, ghost }, i) => (
        <h1
          key={i}
          className="font-inter font-black uppercase"
          style={{
            fontSize: "clamp(56px, 8.5vw, 118px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            ...(ghost
              ? {
                  color: "transparent",
                  WebkitTextStroke: "1.5px var(--mtmn-ghost-stroke)",
                }
              : {
                  color: "hsl(var(--primary))",
                }),
          }}
        >
          {text}
        </h1>
      ))}
    </AnimatedItem>

    {/* Bottom row */}
    <AnimatedItem>
      <div className="flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-8">
        <p
          className="font-cormorant font-light italic text-secondary max-w-[440px]"
          style={{ fontSize: "21px", lineHeight: 1.65 }}
        >
          Premium websites built for Irish professionals. Designed with you, not just for you
          — from the first call to going live and long after.
        </p>

        <div className="flex items-center gap-6">
          <Link
            to="/contact"
            className="font-inter font-bold text-[10px] uppercase bg-primary text-primary-foreground transition-opacity duration-200 hover:opacity-85"
            style={{ letterSpacing: "0.14em", padding: "12px 28px" }}
          >
            Start a project
          </Link>
          <Link
            to="/work"
            className="font-inter font-normal text-[10px] uppercase transition-colors duration-200"
            style={{ letterSpacing: "0.08em", color: "var(--mtmn-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--primary))")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mtmn-muted)")}
          >
            See our work
          </Link>
        </div>
      </div>
    </AnimatedItem>
  </AnimatedSection>
);

/* ─────────────────────────────────────────────
   SECTION 2 — TICKER
   ───────────────────────────────────────────── */
const tickerItems = [
  { text: "We Move The Needle", highlight: true },
  { text: "Web Design", highlight: false },
  { text: "UX Systems", highlight: false },
  { text: "Dentists & Clinics", highlight: false },
  { text: "Solicitors", highlight: false },
  { text: "Accountants", highlight: false },
  { text: "Cut The Noise", highlight: true },
  { text: "Irish SMEs", highlight: false },
];

const TickerContent = () => (
  <>
    {tickerItems.map(({ text, highlight }, i) => (
      <span key={i} className="flex items-center gap-4 shrink-0">
        <span
          className={`font-inter uppercase whitespace-nowrap ${highlight ? "font-bold" : "font-medium"}`}
          style={{
            fontSize: "9px",
            letterSpacing: "0.22em",
            color: highlight ? "hsl(var(--primary))" : "var(--mtmn-muted)",
          }}
        >
          {text}
        </span>
        <span style={{ color: "var(--mtmn-muted)", fontSize: "9px" }}>·</span>
      </span>
    ))}
  </>
);

const Ticker = () => (
  <AnimatedSection
    className="overflow-hidden py-2.5"
    style={{
      borderTop: "1px solid var(--mtmn-border)",
      borderBottom: "1px solid var(--mtmn-border)",
    }}
  >
    <div
      className="flex gap-4"
      style={{ animation: "ticker-scroll 30s linear infinite", width: "max-content" }}
    >
      <TickerContent />
      <TickerContent />
    </div>
  </AnimatedSection>
);

/* ─────────────────────────────────────────────
   SECTION 3 — STATEMENT
   ───────────────────────────────────────────── */
const Statement = () => (
  <AnimatedSection className="grid md:grid-cols-2 gap-[60px] py-16 px-10 max-md:px-5" style={sectionBorder}>
    <AnimatedItem>
      <h2
        className="font-inter font-extrabold uppercase text-primary"
        style={{ fontSize: "clamp(30px, 3.5vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}
      >
        Built with you.
        <br />
        Not just for you.
      </h2>
    </AnimatedItem>
    <AnimatedItem className="flex flex-col gap-6">
      <p className="font-cormorant font-light text-secondary" style={{ fontSize: "21px", lineHeight: 1.65 }}>
        From the first discovery call to going live, every decision is made together. Your images,
        your story, your goals.
      </p>
      <p className="font-cormorant font-light text-secondary" style={{ fontSize: "21px", lineHeight: 1.65 }}>
        We don't disappear after launch. We're your long-term digital partner for as long as you
        need us.
      </p>
    </AnimatedItem>
  </AnimatedSection>
);

/* ─────────────────────────────────────────────
   SECTION 4 — SERVICES
   ───────────────────────────────────────────── */
const services = [
  { num: "01", name: "Web Design & Build", tag: "Core" },
  { num: "02", name: "UX & Booking Systems", tag: "Systems" },
  { num: "03", name: "Ongoing Support", tag: "Always on" },
];

const Services = () => (
  <AnimatedSection style={sectionBorder}>
    {/* Label row */}
    <AnimatedItem>
      <div className="flex items-center justify-between px-10 max-md:px-5 pt-12 pb-6 max-md:flex-col max-md:items-start max-md:gap-3">
        <span
          className="font-inter font-medium text-[9px] uppercase"
          style={{ letterSpacing: "0.22em", color: "var(--mtmn-muted)" }}
        >
          What we do
        </span>
        <span className="font-cormorant font-light italic text-secondary" style={{ fontSize: "18px" }}>
          Three offerings. One outcome — your business performing better online.
        </span>
      </div>
    </AnimatedItem>

    {/* Rows */}
    {services.map(({ num, name, tag }) => (
      <AnimatedItem key={num}>
        <Link
          to="/services"
          className="group flex items-center justify-between px-10 max-md:px-5 transition-colors duration-200"
          style={{
            borderBottom: "1px solid var(--mtmn-border)",
            padding: "22px 40px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--mtmn-hover-bg)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <div className="flex items-center gap-6 max-md:gap-4">
            <span
              className="font-cormorant font-light italic text-[14px]"
              style={{ color: "var(--mtmn-muted)" }}
            >
              {num}
            </span>
            <span
              className="font-inter font-extrabold uppercase text-primary"
              style={{ fontSize: "22px", letterSpacing: "-0.02em" }}
            >
              {name}
            </span>
            <span
              className="font-cormorant font-light italic text-[13px] px-3 py-1 max-md:hidden"
              style={{
                border: "1px solid var(--mtmn-border)",
                borderRadius: "20px",
                color: "var(--mtmn-muted)",
              }}
            >
              {tag}
            </span>
          </div>
          <ArrowUpRight
            size={20}
            className="transition-colors duration-200 group-hover:text-primary"
            style={{ color: "var(--mtmn-dim)" }}
          />
        </Link>
      </AnimatedItem>
    ))}
  </AnimatedSection>
);

/* ─────────────────────────────────────────────
   SECTION 5 — WHO WE WORK WITH
   ───────────────────────────────────────────── */
const sectors = [
  {
    sector: "Healthcare",
    title: "Dentists & Clinics",
    desc: "Build trust before the first appointment. Your site should reflect the quality of your care.",
  },
  {
    sector: "Legal & Finance",
    title: "Solicitors & Accountants",
    desc: "A premium digital presence that matches your professional reputation.",
  },
  {
    sector: "Trade & Service",
    title: "Irish SMEs",
    desc: "Stop losing business to competitors with better websites. We fix that.",
  },
];

const WhoWeWorkWith = () => (
  <AnimatedSection style={sectionBorder}>
    <AnimatedItem>
      <h2
        className="font-inter font-extrabold uppercase text-primary px-10 max-md:px-5 py-11"
        style={{
          fontSize: "clamp(26px, 3vw, 42px)",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          borderBottom: "1px solid var(--mtmn-border)",
        }}
      >
        Built for Irish professionals
        <br />
        who help people.
      </h2>
    </AnimatedItem>
    <div className="grid md:grid-cols-3">
      {sectors.map(({ sector, title, desc }, i) => (
        <AnimatedItem
          key={sector}
          className="py-8 px-9 max-md:px-5"
          style={{
            borderRight: i < 2 ? "1px solid var(--mtmn-border)" : "none",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-5 h-px" style={{ background: "var(--mtmn-muted)" }} />
            <span
              className="font-inter font-medium text-[9px] uppercase"
              style={{ letterSpacing: "0.2em", color: "var(--mtmn-muted)" }}
            >
              {sector}
            </span>
          </div>
          <h3
            className="font-inter font-bold text-[13px] uppercase text-primary mb-3"
            style={{ letterSpacing: "0.02em" }}
          >
            {title}
          </h3>
          <p className="font-cormorant font-light text-secondary" style={{ fontSize: "18px", lineHeight: 1.6 }}>
            {desc}
          </p>
        </AnimatedItem>
      ))}
    </div>
  </AnimatedSection>
);

/* ─────────────────────────────────────────────
   SECTION 6 — FACTS
   ───────────────────────────────────────────── */
const facts = [
  { number: "100", sup: "%", label: "Your assets. Your brand." },
  { number: "0", sup: "×", label: "Cookie-cutter templates" },
  { number: "∞", sup: "", label: "Long-term support" },
];

const Facts = () => (
  <AnimatedSection
    className="grid md:grid-cols-3"
    style={{
      borderTop: "1px solid var(--mtmn-border)",
      borderBottom: "1px solid var(--mtmn-border)",
    }}
  >
    {facts.map(({ number, sup, label }, i) => (
      <AnimatedItem
        key={number}
        className="py-10 px-9 max-md:px-5"
        style={{
          borderRight: i < 2 ? "1px solid var(--mtmn-border)" : "none",
        }}
      >
        <div className="flex items-start mb-3">
          <span className="font-inter font-extralight text-primary" style={{ fontSize: "48px", lineHeight: 1 }}>
            {number}
          </span>
          {sup && (
            <span
              className="font-inter font-extralight"
              style={{ fontSize: "18px", color: "var(--mtmn-muted)", marginTop: "6px" }}
            >
              {sup}
            </span>
          )}
        </div>
        <p className="font-cormorant font-light italic text-secondary" style={{ fontSize: "17px", lineHeight: 1.5 }}>
          {label}
        </p>
      </AnimatedItem>
    ))}
  </AnimatedSection>
);

/* ─────────────────────────────────────────────
   SECTION 7 — CTA STRIP
   ───────────────────────────────────────────── */
const CtaStrip = () => (
  <AnimatedSection
    className="flex items-center justify-between px-10 max-md:px-5 py-20 max-md:flex-col max-md:items-start max-md:gap-10"
    style={sectionBorder}
  >
    <AnimatedItem>
      <h2
        className="font-inter font-extrabold uppercase text-primary mb-4"
        style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
      >
        Ready to stop looking
        <br />
        average online?
      </h2>
      <p className="font-cormorant font-light italic text-secondary" style={{ fontSize: "19px" }}>
        No templates. No fluff. Just results.
      </p>
    </AnimatedItem>
    <AnimatedItem>
      <Link
        to="/contact"
        className="font-inter font-bold text-[10px] uppercase bg-primary text-primary-foreground transition-opacity duration-200 hover:opacity-85 shrink-0"
        style={{ letterSpacing: "0.14em", padding: "12px 28px" }}
      >
        Book a discovery call
      </Link>
    </AnimatedItem>
  </AnimatedSection>
);

/* ─────────────────────────────────────────────
   HOME PAGE
   ───────────────────────────────────────────── */
const Index = () => (
  <main>
    <Hero />
    <Ticker />
    <Statement />
    <Services />
    <WhoWeWorkWith />
    <Facts />
    <CtaStrip />
  </main>
);

export default Index;
