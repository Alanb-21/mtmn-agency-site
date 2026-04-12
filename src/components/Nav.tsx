import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
];

const Nav = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-[100] w-full bg-background"
        style={{ borderBottom: "1px solid var(--mtmn-border)" }}
      >
        <nav className="flex items-center justify-between h-14 px-10 max-md:px-5">
          {/* Logo */}
          <Link
            to="/"
            className="font-inter font-black uppercase text-primary text-sm"
            style={{ letterSpacing: "0.28em" }}
          >
            MTMN
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="font-inter font-normal uppercase text-[10px] transition-colors duration-200"
                style={{
                  letterSpacing: "0.08em",
                  color: pathname === to ? "hsl(var(--primary))" : "var(--mtmn-muted)",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== to) e.currentTarget.style.color = "hsl(var(--primary))";
                }}
                onMouseLeave={(e) => {
                  if (pathname !== to) e.currentTarget.style.color = "var(--mtmn-muted)";
                }}
              >
                {label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="font-inter font-medium uppercase text-[10px] text-primary transition-opacity duration-200 hover:opacity-80"
              style={{ letterSpacing: "0.08em" }}
            >
              Let's work together
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-5 text-primary"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className="font-inter font-bold uppercase text-2xl tracking-widest transition-colors duration-200"
                style={{
                  color: pathname === to ? "hsl(var(--primary))" : "var(--mtmn-muted)",
                }}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="font-inter font-medium uppercase text-lg text-primary tracking-widest mt-4"
            >
              Let's work together
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
