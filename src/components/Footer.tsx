import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Instagram", href: "https://instagram.com/mtmndigital", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/company/mtmndigital", external: true },
  { label: "hello@mtmn.ie", href: "mailto:hello@mtmn.ie", external: false },
];

const Footer = () => {
  return (
    <footer
      className="w-full bg-background py-5 px-10 max-md:px-5"
      style={{ borderTop: "1px solid var(--mtmn-border)" }}
    >
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-6 max-md:text-center">
        {/* Logo */}
        <Link
          to="/"
          className="font-inter font-black uppercase text-primary text-xs"
          style={{ letterSpacing: "0.24em" }}
        >
          MTMN
        </Link>

        {/* Centre links */}
        <div className="flex items-center gap-6">
          {footerLinks.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-cormorant font-light italic text-sm transition-colors duration-200"
              style={{ color: "var(--mtmn-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--secondary))")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mtmn-muted)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <span
          className="font-inter font-normal text-[10px]"
          style={{ color: "var(--mtmn-dim)" }}
        >
          © 2026 MTMN Digital
        </span>
      </div>
    </footer>
  );
};

export default Footer;
