"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import FibonacciDots from "./logos/FibonacciDots";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Process", href: "#process" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ds-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <nav className="flex items-center justify-between" style={{ height: "var(--fib-5)" }}>
          {/* Logo */}
          <a href="#" className="flex items-center" style={{ gap: "var(--fib-2)" }}>
            <span style={{ color: "var(--color-ds-logo-dot)" }}>
              <FibonacciDots size={34} />
            </span>
            <span
              className="font-[family-name:var(--font-display)] font-medium text-white tracking-wide"
              style={{ fontSize: "var(--text-fib-sm)" }}
            >
              Digital Sourcery
            </span>
          </a>

          {/* Nav links — fibonacci gap between items */}
          <div className="hidden md:flex items-center" style={{ gap: "var(--fib-4)" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ds-text-secondary hover:text-white transition-colors duration-200"
                style={{ fontSize: "var(--text-fib-xs)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Theme switch */}
          <div className="flex items-center" style={{ gap: "var(--fib-3)" }}>
            <ThemeSwitcher />
            <a
              href="#contact"
              className="ds-cta"
              style={{
                fontSize: "var(--text-fib-xs)",
                padding: "var(--fib-1) var(--fib-3)",
              }}
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
