"use client";

import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Process", href: "#process" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ds-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ border: "1px solid var(--color-ds-logo-border)" }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: "var(--color-ds-logo-dot)" }}
              />
            </div>
            <span className="font-[family-name:var(--font-display)] text-sm font-medium text-white tracking-wide">
              Digital Sourcery
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-ds-text-secondary hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Theme switch */}
          <div className="flex items-center gap-5">
            <ThemeSwitcher />
            <a
              href="#contact"
              className="ds-cta text-[13px] px-5 py-2"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
