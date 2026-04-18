import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Nav = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-background border-b border-border">
        <nav className="flex items-center justify-between h-16 px-10 max-md:px-5">
          {/* Logo */}
          <Link
            to="/"
            className="font-inter font-extrabold uppercase text-foreground text-sm"
            style={{ letterSpacing: "0.18em" }}
          >
            MTMN DIGITAL
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`font-inter font-medium uppercase text-[13px] transition-colors duration-200 ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={{ letterSpacing: "0.08em" }}
                >
                  {label}
                </Link>
              );
            })}

            {/* CTA button */}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground font-inter font-bold uppercase text-[13px] transition-opacity duration-200 hover:opacity-90"
              style={{ letterSpacing: "0.08em", padding: "14px 32px" }}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground"
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
            className="absolute top-4 right-5 text-foreground"
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
                className={`font-inter font-bold uppercase text-2xl tracking-widest ${
                  pathname === to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-primary-foreground font-inter font-bold uppercase text-sm mt-4"
              style={{ letterSpacing: "0.08em", padding: "14px 32px" }}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
