import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const projects: { title: string; description: string }[] = [];

const Work = () => {
  return (
    <main>
      <Reveal as="section" className="py-16 px-10 border-b border-border">
        <h1
          className="font-inter font-extrabold uppercase text-foreground"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em" }}
        >
          OUR WORK
        </h1>
        <p className="font-cormorant italic text-muted-foreground mt-4" style={{ fontSize: "21px" }}>
          Every site tells a story. Here are a few of ours.
        </p>
      </Reveal>

      <Reveal as="section" className="py-14 px-10 border-b border-border">
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <div key={i}>
                <h3 className="font-inter font-extrabold uppercase text-foreground text-lg">{project.title}</h3>
                <p className="font-cormorant text-muted-foreground mt-2" style={{ fontSize: "19px" }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="font-cormorant italic text-muted-foreground text-center" style={{ fontSize: "21px" }}>
              Our work speaks for itself. Projects coming soon.
            </p>
            <Link
              to="/contact"
              className="mt-8 bg-primary text-primary-foreground font-inter font-bold uppercase inline-block hover:opacity-90 transition-opacity"
              style={{ fontSize: "13px", letterSpacing: "0.08em", padding: "14px 32px" }}
            >
              In the meantime, let's talk
            </Link>
          </div>
        )}
      </Reveal>

      <Reveal
        as="section"
        className="py-20 px-10 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border"
      >
        <h2
          className="font-inter font-black uppercase text-foreground"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)", letterSpacing: "-0.03em" }}
        >
          READY TO START?
        </h2>
        <Link
          to="/contact"
          className="bg-primary text-primary-foreground font-inter font-bold uppercase inline-block hover:opacity-90 transition-opacity"
          style={{ fontSize: "13px", letterSpacing: "0.08em", padding: "14px 32px" }}
        >
          Book a discovery call
        </Link>
      </Reveal>
    </main>
  );
};

export default Work;
