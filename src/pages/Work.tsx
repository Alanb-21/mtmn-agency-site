import { Link } from "react-router-dom";
import AnimatedSection from "@/components/motion/AnimatedSection";
import AnimatedItem from "@/components/motion/AnimatedItem";

const projects: { title: string; description: string; image: string }[] = [];

const Work = () => {
  return (
    <main>
      {/* Hero */}
      <AnimatedSection className="py-16 px-10" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
        <AnimatedItem>
          <h1
            className="font-inter font-extrabold uppercase text-primary"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em" }}
          >
            OUR WORK
          </h1>
        </AnimatedItem>
        <AnimatedItem>
          <p className="font-cormorant font-light italic text-secondary mt-4" style={{ fontSize: "21px" }}>
            Every site tells a story. Here are a few of ours.
          </p>
        </AnimatedItem>
      </AnimatedSection>

      {/* Case Study Grid / Empty State */}
      <AnimatedSection className="py-14 px-10" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <AnimatedItem key={i}>
                <h3 className="font-inter font-extrabold uppercase text-primary text-lg">{project.title}</h3>
                <p className="font-cormorant font-light text-secondary mt-2" style={{ fontSize: "19px" }}>
                  {project.description}
                </p>
              </AnimatedItem>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <AnimatedItem>
              <p
                className="font-cormorant font-light italic text-secondary text-center"
                style={{ fontSize: "21px" }}
              >
                Our work speaks for itself. Projects coming soon.
              </p>
            </AnimatedItem>
            <AnimatedItem>
              <Link
                to="/contact"
                className="mt-8 bg-primary text-background font-inter font-bold uppercase px-8 py-3 rounded-none inline-block"
                style={{ fontSize: "10px", letterSpacing: "0.14em" }}
              >
                In the meantime, let's talk
              </Link>
            </AnimatedItem>
          </div>
        )}
      </AnimatedSection>

      {/* CTA Strip */}
      <AnimatedSection className="py-20 px-10 flex flex-col md:flex-row justify-between items-center gap-8" style={{ borderTop: "1px solid var(--mtmn-border)" }}>
        <AnimatedItem>
          <h2
            className="font-inter font-black uppercase text-primary"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}
          >
            READY TO START?
          </h2>
        </AnimatedItem>
        <AnimatedItem>
          <Link
            to="/contact"
            className="bg-primary text-background font-inter font-bold uppercase px-8 py-3 rounded-none inline-block"
            style={{ fontSize: "10px", letterSpacing: "0.14em" }}
          >
            Book a discovery call
          </Link>
        </AnimatedItem>
      </AnimatedSection>
    </main>
  );
};

export default Work;
