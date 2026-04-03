"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(5, 5, 8, 0.85)",
        backdropFilter: "blur(20px) saturate(120%)",
        borderBottom: "1px solid rgba(200, 208, 224, 0.06)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <nav
          className="flex items-center justify-between"
          style={{ height: "var(--fib-6)" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer"
            style={{ gap: "var(--fib-2)" }}
          >
            <span style={{ color: "var(--color-ds-crystalline)" }}>
              <FibonacciDots size={34} />
            </span>
            <span
              className="font-[family-name:var(--font-display)] font-bold text-white tracking-tight"
              style={{ fontSize: "var(--text-fib-base)" }}
            >
              Digital Sorcery
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
                className={`font-[family-name:var(--font-display)] uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
                  pathname === link.href
                    ? "text-white"
                    : "text-[var(--color-ds-crystalline)]/60 hover:text-[var(--color-ds-warm)]"
                }`}
                style={{
                  fontSize: "var(--text-fib-xs)",
                  paddingBottom: "var(--fib-1)",
                  borderBottom: pathname === link.href
                    ? "2px solid var(--color-ds-warm)"
                    : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center" style={{ gap: "var(--fib-3)" }}>
            <a
              href="mailto:hello@digitalsourcery.ai"
              className="hidden sm:inline-block font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.15em] bg-white text-black hover:scale-[0.97] transition-transform duration-200 cursor-pointer rotating-gradient-btn"
              style={{
                fontSize: "var(--text-fib-xs)",
                padding: "var(--fib-1) var(--fib-3)",
              }}
            >
              <span>Start a Discovery Call</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-px bg-white transition-all duration-300"
                style={{
                  transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none",
                }}
              />
              <span
                className="block w-5 h-px bg-white transition-all duration-300"
                style={{
                  marginTop: "6px",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-px bg-white transition-all duration-300"
                style={{
                  marginTop: "6px",
                  transform: mobileOpen ? "rotate(-45deg) translateY(-4px)" : "none",
                }}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "rgba(5, 5, 8, 0.98)",
            borderTop: "1px solid rgba(200, 208, 224, 0.06)",
            padding: "var(--fib-4) var(--fib-5)",
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-[family-name:var(--font-display)] uppercase tracking-[0.15em] transition-colors duration-200 cursor-pointer ${
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
          <a
            href="mailto:hello@digitalsourcery.ai"
            className="inline-block font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.15em] bg-white text-black cursor-pointer rotating-gradient-btn"
            style={{
              fontSize: "var(--text-fib-xs)",
              padding: "var(--fib-1) var(--fib-3)",
              marginTop: "var(--fib-3)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            <span>Start a Discovery Call</span>
          </a>
        </div>
      )}
    </header>
  );
}
