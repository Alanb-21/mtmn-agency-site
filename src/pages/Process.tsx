import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  { number: "01", name: "Discovery Call", description: "We learn your business, your goals, and what makes you different. No assumptions, no templates." },
  { number: "02", name: "Proposal", description: "Scope, timeline, and investment presented clearly. No surprises, no hidden costs." },
  { number: "03", name: "Design & Build", description: "Built together, iteratively. Your assets, your images, your decisions at every stage." },
  { number: "04", name: "Review & Approve", description: "You sign off before anything goes live. Nothing is published without your approval." },
  { number: "05", name: "Launch", description: "We go live together. Every detail checked, every link tested, every page verified." },
  { number: "06", name: "Ongoing Support", description: "We stay for as long as you need us. Updates, changes, and growth support included." },
];

const Process = () => (
  <main>
    {/* Hero */}
    <section className="py-16 px-10" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
      <h1
        className="font-inter font-black uppercase text-primary"
        style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em" }}
      >
        How We Work
      </h1>
      <p className="font-cormorant font-light italic text-secondary mt-4" style={{ fontSize: "21px" }}>
        A collaborative journey from first conversation to long-term partnership.
      </p>
    </section>

    {/* Steps */}
    {steps.map((step) => (
      <div
        key={step.number}
        className="py-7 px-10 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-0"
        style={{ borderBottom: "1px solid var(--mtmn-border)" }}
      >
        <span
          className="font-cormorant font-light italic shrink-0"
          style={{ fontSize: "16px", color: "var(--mtmn-muted)", width: "60px" }}
        >
          {step.number}
        </span>
        <span
          className="font-inter font-black uppercase text-primary shrink-0"
          style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.02em", width: "300px" }}
        >
          {step.name}
        </span>
        <p className="font-cormorant font-light text-secondary flex-1" style={{ fontSize: "19px", lineHeight: "1.65" }}>
          {step.description}
        </p>
      </div>
    ))}

    {/* CTA */}
    <section
      className="py-20 px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
      style={{ borderTop: "1px solid var(--mtmn-border)" }}
    >
      <h2
        className="font-inter font-black uppercase text-primary"
        style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}
      >
        Start With A Conversation.
      </h2>
      <Button asChild className="bg-primary text-background font-inter font-bold text-[10px] uppercase tracking-[0.14em] px-8 py-3 rounded-none hover:bg-primary/90">
        <Link to="/contact">Book a discovery call</Link>
      </Button>
    </section>
  </main>
);

export default Process;
