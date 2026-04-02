"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const AsciiHero = dynamic(() => import("@/components/AsciiHero"), { ssr: false });

const colLinks = [
  {
    title: "Intelligence",
    links: [
      { label: "AI-Driven Platform Eng", href: "/intelligence" },
      { label: "Intelligent Observability", href: "/intelligence" },
      { label: "Autonomous Infrastructure", href: "/intelligence" },
      { label: "AI Cost Optimization", href: "/intelligence" },
      { label: "Legacy AI Modernization", href: "/intelligence" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Foundation", href: "/foundation" },
      { label: "Our Stack", href: "/stack" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "mailto:hello@digitalsourcery.ai" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--color-ds-void)",
        borderTop: "1px solid rgba(200, 208, 224, 0.06)",
      }}
    >
      {/* Top section: tagline + links */}
      <div
        className="mx-auto max-w-[1440px] px-[var(--fib-5)]"
        style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-6)" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[var(--phi-major)_auto_auto] items-start"
          style={{ gap: "var(--fib-5)" }}
        >
          {/* Tagline */}
          <div>
            <h2
              className="font-[family-name:var(--font-display)] font-bold text-white tracking-[-0.03em]"
              style={{ fontSize: "var(--text-fib-lg)", lineHeight: 1.2, marginBottom: "var(--fib-4)" }}
            >
              Make AI Work
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>in Production.</span>
            </h2>
            <a
              href="mailto:hello@digitalsourcery.ai"
              className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 cursor-pointer ds-cta-prismatic"
              style={{
                fontSize: "var(--text-fib-xs)",
                padding: "var(--fib-2) var(--fib-4)",
              }}
            >
              Start a Discovery Call
            </a>
          </div>

          {/* Link columns */}
          {colLinks.map((col) => (
            <div key={col.title}>
              <p
                className="font-[family-name:var(--font-display)] uppercase tracking-[0.15em] text-white font-semibold"
                style={{ fontSize: "var(--text-fib-xs)", marginBottom: "var(--fib-3)" }}
              >
                {col.title}
              </p>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-ds-text-secondary hover:text-white transition-colors duration-200 cursor-pointer"
                  style={{
                    fontSize: "var(--text-fib-sm)",
                    lineHeight: 1.618,
                    marginBottom: "var(--fib-1)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Giant ASCII "Digital Sourcery" — the signature */}
      <div
        className="mx-auto max-w-[1440px] px-[var(--fib-5)] overflow-hidden"
        style={{ paddingBottom: "var(--fib-4)" }}
      >
        <div style={{ opacity: 0.4 }}>
          <AsciiHero text="Digital Sourcery" />
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(200, 208, 224, 0.06)",
        }}
      >
        <div
          className="mx-auto max-w-[1440px] px-[var(--fib-5)] flex flex-col sm:flex-row items-center justify-between"
          style={{ padding: "var(--fib-3) var(--fib-5)", gap: "var(--fib-2)" }}
        >
          <span
            className="text-ds-text-dim font-[family-name:var(--font-mono)]"
            style={{ fontSize: "var(--text-fib-xs)" }}
          >
            &copy; {new Date().getFullYear()} Digital Sourcery
          </span>
          <span
            className="text-ds-text-dim font-[family-name:var(--font-mono)]"
            style={{ fontSize: "var(--text-fib-xs)" }}
          >
            Powered by BlackMagickOps
          </span>
        </div>
      </div>
    </footer>
  );
}
