"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import FibonacciDots from "./logos/FibonacciDots";

const navLinks = [
  { label: "Intelligence", href: "/intelligence" },
  { label: "Foundation", href: "/foundation" },
  { label: "Stack", href: "/stack" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ds-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <nav
          className="flex items-center justify-between"
          style={{ height: "var(--fib-5)" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center" style={{ gap: "var(--fib-2)" }}>
            <span style={{ color: "var(--color-ds-logo-dot)" }}>
              <FibonacciDots size={34} />
            </span>
            <span
              className="font-[family-name:var(--font-display)] font-medium text-white tracking-wide"
              style={{ fontSize: "var(--text-fib-sm)" }}
            >
              Digital Sourcery
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden md:flex items-center"
            style={{ gap: "var(--fib-4)" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-ds-text-secondary hover:text-white"
                }`}
                style={{ fontSize: "var(--text-fib-xs)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Theme + Mobile toggle */}
          <div className="flex items-center" style={{ gap: "var(--fib-2)" }}>
            <ThemeSwitcher />
            <Link
              href="/intelligence"
              className="ds-cta hidden sm:inline-block"
              style={{
                fontSize: "var(--text-fib-xs)",
                padding: "var(--fib-1) var(--fib-3)",
              }}
            >
              Get Started
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-px bg-white transition-transform duration-200"
                style={{
                  transform: mobileOpen ? "rotate(45deg) translateY(3px)" : "none",
                }}
              />
              <span
                className="block w-5 h-px bg-white mt-1.5 transition-opacity duration-200"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-px bg-white mt-1.5 transition-transform duration-200"
                style={{
                  transform: mobileOpen ? "rotate(-45deg) translateY(-3px)" : "none",
                }}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--color-ds-black)",
            borderColor: "var(--color-ds-border)",
            padding: "var(--fib-3) var(--fib-4)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block transition-colors duration-200 ${
                pathname === link.href
                  ? "text-white"
                  : "text-ds-text-secondary hover:text-white"
              }`}
              style={{
                fontSize: "var(--text-fib-sm)",
                padding: "var(--fib-2) 0",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/intelligence"
            className="ds-cta inline-block"
            style={{
              fontSize: "var(--text-fib-xs)",
              padding: "var(--fib-1) var(--fib-3)",
              marginTop: "var(--fib-2)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
