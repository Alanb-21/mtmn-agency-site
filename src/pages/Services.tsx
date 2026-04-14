import { Link } from "react-router-dom";

const services = [
  {
    num: "01",
    name: "Web Design & Build",
    description:
      "Fully custom, conversion-engineered websites built with your assets, your story, and your audience in mind. No templates. Every site is unique.",
    items: [
      "Custom design",
      "Mobile-first build",
      "Contact forms & booking systems",
      "SEO ready",
      "Fast loading",
    ],
  },
  {
    num: "02",
    name: "UX & Booking Systems",
    description:
      "Seamless user journeys and booking integrations that reduce friction and turn visitors into clients.",
    items: [
      "Booking system integration",
      "Contact form build",
      "User journey mapping",
      "Simple automations",
    ],
  },
  {
    num: "03",
    name: "Ongoing Support",
    description:
      "We don't disappear after launch. Updates, changes, and growth support for as long as you need us.",
    items: [
      "Post-launch maintenance",
      "Content updates",
      "Long-term partnership",
    ],
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section
        className="py-16 px-10 max-md:px-5"
        style={{ borderBottom: "1px solid var(--mtmn-border)" }}
      >
        <h1
          className="font-inter font-extrabold uppercase text-primary"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          What We Do
        </h1>
        <p
          className="font-cormorant font-light italic text-secondary mt-4"
          style={{ fontSize: "21px" }}
        >
          Three services. One goal — your business performing better online.
        </p>
      </section>

      {/* Service sections */}
      {services.map((s) => (
        <section
          key={s.num}
          className="py-14 px-10 max-md:px-5"
          style={{ borderBottom: "1px solid var(--mtmn-border)" }}
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span
              className="font-cormorant font-light italic"
              style={{ color: "var(--mtmn-muted)", fontSize: "18px" }}
            >
              {s.num}
            </span>
            <h2
              className="font-inter font-extrabold uppercase text-primary"
              style={{ fontSize: "clamp(20px, 2.5vw, 26px)", letterSpacing: "-0.02em" }}
            >
              {s.name}
            </h2>
          </div>

          <p
            className="font-cormorant font-light text-secondary max-w-[680px] mb-8"
            style={{ fontSize: "21px", lineHeight: 1.65 }}
          >
            {s.description}
          </p>

          <span
            className="font-inter font-medium uppercase block mb-4"
            style={{
              fontSize: "9px",
              letterSpacing: "0.22em",
              color: "var(--mtmn-muted)",
            }}
          >
            What's included
          </span>

          <ul className="flex flex-col gap-2">
            {s.items.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="block w-4 h-px"
                  style={{ background: "var(--mtmn-muted)" }}
                />
                <span
                  className="font-cormorant font-light italic text-secondary"
                  style={{ fontSize: "18px" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* CTA Strip */}
      <section className="py-16 px-10 max-md:px-5 flex items-center justify-between max-md:flex-col max-md:gap-6 max-md:text-center">
        <div>
          <h2
            className="font-inter font-extrabold uppercase text-primary"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Ready to start?
          </h2>
          <p
            className="font-cormorant font-light italic text-secondary mt-2"
            style={{ fontSize: "19px" }}
          >
            No templates. No fluff. Just results.
          </p>
        </div>
        <Link
          to="/contact"
          className="font-inter font-bold uppercase text-[10px] bg-primary text-primary-foreground px-6 py-3 transition-opacity duration-200 hover:opacity-90"
          style={{ letterSpacing: "0.12em" }}
        >
          Book a discovery call
        </Link>
      </section>
    </main>
  );
};

export default Services;
