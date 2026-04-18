import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const values = [
  { title: "Premium by default", description: "Every site we build looks and performs like it cost twice the price." },
  { title: "Always personal", description: "No templates. No shortcuts. Every decision is made for your specific business." },
  { title: "Results over vanity", description: "Beautiful design means nothing if it doesn't convert. We build for outcomes." },
  { title: "Long-term partnership", description: "We're not a one-off agency. We're here for the long run." },
];

const About = () => (
  <main>
    <Reveal as="section" className="py-16 px-10 border-b border-border">
      <h1
        className="font-inter font-black uppercase text-foreground"
        style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em" }}
      >
        About MTMN
      </h1>
      <p className="font-cormorant italic text-muted-foreground mt-4" style={{ fontSize: "21px" }}>
        We exist to make Irish businesses look as good online as they are in person.
      </p>
    </Reveal>

    <Reveal as="section" className="py-14 px-10 grid md:grid-cols-2 gap-16 border-b border-border">
      <div>
        <span
          className="font-inter font-medium uppercase block text-muted-foreground"
          style={{ fontSize: "9px", letterSpacing: "0.22em" }}
        >
          Our Mission
        </span>
        <h2
          className="font-inter font-black uppercase text-foreground mt-4"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em" }}
        >
          We Move The Needle.
        </h2>
      </div>
      <div className="space-y-6">
        <p className="font-cormorant text-muted-foreground" style={{ fontSize: "21px", lineHeight: "1.7" }}>
          MTMN Digital is a premium Irish digital agency built for professional service businesses. We don't build generic websites — we build business tools that convert visitors into clients.
        </p>
        <p className="font-cormorant text-muted-foreground" style={{ fontSize: "21px", lineHeight: "1.7" }}>
          Every site we build is completely personal to the client. Built with them, not just for them. From the first discovery call to going live, every decision is made together.
        </p>
      </div>
    </Reveal>

    <Reveal as="section" className="py-14 px-10 border-b border-border">
      <span
        className="font-inter font-medium uppercase block text-muted-foreground"
        style={{ fontSize: "9px", letterSpacing: "0.22em" }}
      >
        Our Approach
      </span>
      <h2
        className="font-cormorant italic text-foreground mt-4"
        style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
      >
        Built with you. Not just for you.
      </h2>
      <p className="font-cormorant text-muted-foreground mt-6 max-w-[680px]" style={{ fontSize: "21px", lineHeight: "1.7" }}>
        We take the time to understand your business, your clients, and your goals before a single pixel is designed. Your images, your story, your assets — everything on your site is yours. We don't disappear after launch either. We're your long-term digital partner for as long as you need us.
      </p>
    </Reveal>

    <Reveal as="section" className="py-14 px-10 border-b border-border">
      <span
        className="font-inter font-medium uppercase block mb-8 text-muted-foreground"
        style={{ fontSize: "9px", letterSpacing: "0.22em" }}
      >
        What We Believe
      </span>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, i) => (
          <div
            key={value.title}
            className="px-8 py-6"
            style={{ borderRight: i < values.length - 1 ? "1px solid hsl(var(--border))" : "none" }}
          >
            <h3
              className="font-inter font-bold uppercase text-foreground"
              style={{ fontSize: "13px", letterSpacing: "0.02em" }}
            >
              {value.title}
            </h3>
            <p className="font-cormorant italic text-muted-foreground mt-2" style={{ fontSize: "18px", lineHeight: "1.6" }}>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </Reveal>

    <Reveal
      as="section"
      className="py-20 px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-border"
    >
      <h2
        className="font-inter font-black uppercase text-foreground"
        style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}
      >
        Work With Us.
      </h2>
      <Link
        to="/contact"
        className="bg-primary text-primary-foreground font-inter font-bold uppercase text-[13px] hover:opacity-90 transition-opacity"
        style={{ letterSpacing: "0.08em", padding: "14px 32px" }}
      >
        Let's talk
      </Link>
    </Reveal>
  </main>
);

export default About;
