import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Instagram", href: "https://instagram.com/mtmndigital", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/company/mtmndigital", external: true },
  { label: "hello@mtmn.ie", href: "mailto:hello@mtmn.ie", external: false },
];

const Footer = () => {
  return (
    <footer className="w-full bg-background py-5 px-10 max-md:px-5 border-t border-border">
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-6 max-md:text-center">
        <Link
          to="/"
          className="font-inter font-extrabold uppercase text-foreground text-xs"
          style={{ letterSpacing: "0.18em" }}
        >
          MTMN DIGITAL
        </Link>

        <div className="flex items-center gap-6">
          {footerLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-cormorant italic text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <span className="font-inter font-normal text-[10px] text-muted-foreground">
          © 2026 MTMN Digital
        </span>
      </div>
    </footer>
  );
};

export default Footer;
