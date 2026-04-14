import { useState } from "react";

const contactMethods = [
  { label: "WHATSAPP", detail: "Chat with us directly", href: "https://wa.me/353000000000", external: true },
  { label: "LINKEDIN", detail: "Connect with MTMN Digital", href: "https://linkedin.com/company/mtmn-digital", external: true },
  { label: "EMAIL", detail: "hello@mtmn.ie", href: "mailto:hello@mtmn.ie", external: false },
  { label: "BOOK A CALL", detail: "Schedule a free discovery call", href: "https://calendly.com/mtmn-digital", external: true },
];

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  description: string;
}

const Contact = () => {
  const [form, setForm] = useState<FormData>({ fullName: "", businessName: "", email: "", phone: "", description: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your name";
    if (!form.businessName.trim()) e.businessName = "Please enter your business name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Please enter a valid email";
    if (!form.description.trim()) e.description = "Please describe your project";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const inputClass =
    "w-full bg-transparent py-3 font-cormorant font-light text-secondary text-lg outline-none border-0 border-b rounded-none focus:border-primary transition-colors";

  const fields: { key: keyof FormData; label: string; required: boolean; textarea?: boolean }[] = [
    { key: "fullName", label: "FULL NAME", required: true },
    { key: "businessName", label: "BUSINESS NAME", required: true },
    { key: "email", label: "EMAIL", required: true },
    { key: "phone", label: "PHONE (OPTIONAL)", required: false },
    { key: "description", label: "PROJECT DESCRIPTION", required: true, textarea: true },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-16 px-10" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
        <h1
          className="font-inter font-black uppercase text-primary"
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em" }}
        >
          LET'S WORK TOGETHER
        </h1>
        <p className="font-cormorant font-light italic text-secondary mt-4" style={{ fontSize: "21px" }}>
          Tell us about your project. We'll get back to you within 24 hours.
        </p>
      </section>

      {/* Two-column layout */}
      <section className="grid md:grid-cols-2" style={{ borderBottom: "1px solid var(--mtmn-border)" }}>
        {/* Left — Form */}
        <div className="py-14 px-10" style={{ borderRight: "1px solid var(--mtmn-border)" }}>
          <p
            className="font-inter font-medium uppercase mb-8"
            style={{ fontSize: "9px", letterSpacing: "0.22em", color: "var(--mtmn-muted)" }}
          >
            SEND AN ENQUIRY
          </p>

          {submitted ? (
            <div className="flex items-center justify-center py-20">
              <p className="font-cormorant font-light italic text-secondary text-center" style={{ fontSize: "21px" }}>
                Thank you. We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {fields.map(({ key, label, textarea }) => (
                <div key={key} className="mb-6">
                  <label
                    className="font-inter font-medium uppercase text-primary block mb-1.5"
                    style={{ fontSize: "10px", letterSpacing: "0.14em" }}
                  >
                    {label}
                  </label>
                  {textarea ? (
                    <textarea
                      rows={4}
                      value={form[key]}
                      onChange={(e) => update(key, e.target.value)}
                      className={inputClass}
                      style={{ borderBottomColor: errors[key] ? "rgba(222,231,241,0.5)" : "var(--mtmn-border)", resize: "vertical" }}
                    />
                  ) : (
                    <input
                      type={key === "email" ? "email" : "text"}
                      value={form[key]}
                      onChange={(e) => update(key, e.target.value)}
                      className={inputClass}
                      style={{ borderBottomColor: errors[key] ? "rgba(222,231,241,0.5)" : "var(--mtmn-border)" }}
                    />
                  )}
                  {errors[key] && (
                    <p className="font-cormorant font-light italic mt-1" style={{ fontSize: "14px", color: "rgba(222,231,241,0.5)" }}>
                      {errors[key]}
                    </p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-primary text-background font-inter font-bold uppercase py-4 mt-8 rounded-none"
                style={{ fontSize: "10px", letterSpacing: "0.14em" }}
              >
                SEND ENQUIRY
              </button>
            </form>
          )}
        </div>

        {/* Right — Contact Methods */}
        <div className="py-14 px-10">
          <p
            className="font-inter font-medium uppercase mb-8"
            style={{ fontSize: "9px", letterSpacing: "0.22em", color: "var(--mtmn-muted)" }}
          >
            OR REACH OUT DIRECTLY
          </p>

          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.external ? "_blank" : undefined}
              rel={m.external ? "noopener noreferrer" : undefined}
              className="flex justify-between items-center py-5 group transition-colors"
              style={{ borderBottom: "1px solid var(--mtmn-border)", backgroundColor: "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(222,231,241,0.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <div>
                <p className="font-inter font-medium uppercase text-primary" style={{ fontSize: "10px", letterSpacing: "0.14em" }}>
                  {m.label}
                </p>
                <p className="font-cormorant font-light italic text-secondary mt-1" style={{ fontSize: "18px" }}>
                  {m.detail}
                </p>
              </div>
              <span className="transition-colors" style={{ color: "var(--mtmn-muted)" }}>
                <span className="group-hover:text-primary transition-colors">↗</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
