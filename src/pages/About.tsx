import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/motion/AnimatedSection";
import AnimatedItem from "@/components/motion/AnimatedItem";

const values = [
  { title: "Premium by default", description: "Every site we build looks and performs like it cost twice the price." },
  { title: "Always personal", description: "No templates. No shortcuts. Every decision is made for your specific business." },
  { title: "Results over vanity", description: "Beautiful design means nothing if it doesn't convert. We build for outcomes." },
  { title: "Long-term partnership", description: "We're not a one-off agency. We're here for the long run." },
];

const About = () => (
  <main>
    {/* Hero */}
    <AnimatedSection className="py-16 px-10" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
      <AnimatedItem>
        <h1
          className="font-inter font-black uppercase text-primary"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em" }}
        >
          About MTMN
        </h1>
      </AnimatedItem>
      <AnimatedItem>
        <p className="font-cormorant font-light italic text-secondary mt-4" style={{ fontSize: "21px" }}>
          We exist to make Irish businesses look as good online as they are in person.
        </p>
      </AnimatedItem>
    </AnimatedSection>

    {/* Mission */}
    <AnimatedSection className="py-14 px-10 grid md:grid-cols-2 gap-16" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
      <AnimatedItem>
        <span
          className="font-inter font-medium uppercase block"
          style={{ fontSize: "9px", letterSpacing: "0.22em", color: "var(--mtmn-muted)" }}
        >
          Our Mission
        </span>
        <h2
          className="font-inter font-black uppercase text-primary mt-4"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em" }}
        >
          We Move The Needle.
        </h2>
      </AnimatedItem>
      <AnimatedItem className="space-y-6">
        <p className="font-cormorant font-light text-secondary" style={{ fontSize: "21px", lineHeight: "1.7" }}>
          MTMN Digital is a premium Irish digital agency built for professional service businesses. We don't build generic websites — we build business tools that convert visitors into clients.
        </p>
        <p className="font-cormorant font-light text-secondary" style={{ fontSize: "21px", lineHeight: "1.7" }}>
          Every site we build is completely personal to the client. Built with them, not just for them. From the first discovery call to going live, every decision is made together.
        </p>
      </AnimatedItem>
    </AnimatedSection>

    {/* Approach */}
    <AnimatedSection className="py-14 px-10" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
      <AnimatedItem>
        <span
          className="font-inter font-medium uppercase block"
          style={{ fontSize: "9px", letterSpacing: "0.22em", color: "var(--mtmn-muted)" }}
        >
          Our Approach
        </span>
      </AnimatedItem>
      <AnimatedItem>
        <h2
          className="font-cormorant font-light italic text-primary mt-4"
          style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
        >
          Built with you. Not just for you.
        </h2>
      </AnimatedItem>
      <AnimatedItem>
        <p className="font-cormorant font-light text-secondary mt-6 max-w-[680px]" style={{ fontSize: "21px", lineHeight: "1.7" }}>
          We take the time to understand your business, your clients, and your goals before a single pixel is designed. Your images, your story, your assets — everything on your site is yours. We don't disappear after launch either. We're your long-term digital partner for as long as you need us.
        </p>
      </AnimatedItem>
    </AnimatedSection>

    {/* Values */}
    <AnimatedSection className="py-14 px-10" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
      <AnimatedItem>
        <span
          className="font-inter font-medium uppercase block mb-8"
          style={{ fontSize: "9px", letterSpacing: "0.22em", color: "var(--mtmn-muted)" }}
        >
          What We Believe
        </span>
      </AnimatedItem>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, i) => (
          <AnimatedItem
            key={value.title}
            className="px-8 py-6"
            style={{
              borderRight: i < values.length - 1 ? "1px solid var(--mtmn-border)" : "none",
            }}
          >
            <h3
              className="font-inter font-bold uppercase text-primary"
              style={{ fontSize: "13px", letterSpacing: "0.02em" }}
            >
              {value.title}
            </h3>
            <p className="font-cormorant font-light italic text-secondary mt-2" style={{ fontSize: "18px", lineHeight: "1.6" }}>
              {value.description}
            </p>
          </AnimatedItem>
        ))}
      </div>
    </AnimatedSection>

    {/* CTA */}
    <AnimatedSection
      className="py-20 px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
      style={{ borderTop: "1px solid var(--mtmn-border)" }}
    >
      <AnimatedItem>
        <h2
          className="font-inter font-black uppercase text-primary"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}
        >
          Work With Us.
        </h2>
      </AnimatedItem>
      <AnimatedItem>
        <Button asChild className="bg-primary text-background font-inter font-bold text-[10px] uppercase tracking-[0.14em] px-8 py-3 rounded-none hover:bg-primary/90">
          <Link to="/contact">Let's talk</Link>
        </Button>
      </AnimatedItem>
    </AnimatedSection>
  </main>
);

export default About;
