"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const AsciiHero = dynamic(() => import("@/components/AsciiHero"), { ssr: false });

const intelligenceLinks = [
  { label: "Intelligent Observability", href: "/intelligence" },
  { label: "AI-Driven Platform Eng", href: "/intelligence" },
  { label: "Autonomous Infrastructure", href: "/intelligence" },
  { label: "AI Cost Optimization", href: "/intelligence" },
  { label: "Legacy AI Modernization", href: "/intelligence" },
];

const foundationLinks = [
  { label: "Cognitive IDP", href: "/foundation" },
  { label: "Agentic Workflows", href: "/foundation" },
  { label: "Eco-FinOps", href: "/foundation" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Stack", href: "/stack" },
  { label: "Contact", href: "mailto:hello@digitalsourcery.ai" },
];

export default function Footer() {
  return (
    <footer
      className="border-t crystalline-bg"
      style={{
        borderColor: "rgba(200, 208, 224, 0.08)",
        backgroundColor: "var(--color-ds-void)",
        paddingTop: "var(--fib-6)",
        paddingBottom: "var(--fib-5)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-[var(--fib-5)]">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "var(--fib-5)", marginBottom: "var(--fib-6)" }}
        >
          {/* Intelligence */}
          <div>
            <p
              className="font-[family-name:var(--font-display)] uppercase tracking-[0.15em] text-white font-semibold"
              style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-3)" }}
            >
              Intelligence
            </p>
            {intelligenceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-ds-text-secondary hover:text-white transition-colors cursor-pointer"
                style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-2)", lineHeight: 1.618 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Foundation */}
          <div>
            <p
              className="font-[family-name:var(--font-display)] uppercase tracking-[0.15em] text-white font-semibold"
              style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-3)" }}
            >
              Foundation
            </p>
            {foundationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-ds-text-secondary hover:text-white transition-colors cursor-pointer"
                style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-2)", lineHeight: 1.618 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <p
              className="font-[family-name:var(--font-display)] uppercase tracking-[0.15em] text-white font-semibold"
              style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-3)" }}
            >
              Company
            </p>
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-ds-text-secondary hover:text-white transition-colors cursor-pointer"
                style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-2)", lineHeight: 1.618 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* BlackMagickOps */}
          <div>
            <p
              className="font-[family-name:var(--font-display)] uppercase tracking-[0.15em] text-white font-semibold"
              style={{ fontSize: "var(--text-fib-sm)", marginBottom: "var(--fib-3)" }}
            >
              Platform Foundations
            </p>
            <p
              className="text-ds-text-secondary"
              style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-3)" }}
            >
              Built on the engineering discipline of BlackMagickOps — platform engineering,
              automation, and observability.
            </p>
            <Link
              href="/foundation"
              className="font-[family-name:var(--font-mono)] text-ds-text-secondary hover:text-white transition-colors cursor-pointer"
              style={{ fontSize: "var(--text-fib-xs)" }}
            >
              blackmagickops.com &rarr;
            </Link>
          </div>
        </div>

        {/* Giant ASCII "Digital Sourcery" */}
        <div style={{ marginBottom: "var(--fib-5)" }}>
          <AsciiHero text="Digital Sourcery" />
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between border-t"
          style={{
            borderColor: "rgba(200, 208, 224, 0.06)",
            paddingTop: "var(--fib-4)",
            gap: "var(--fib-2)",
          }}
        >
          <span className="text-ds-text-dim" style={{ fontSize: "var(--text-fib-sm)" }}>
            &copy; {new Date().getFullYear()} Digital Sourcery
          </span>
          <span className="text-ds-text-dim" style={{ fontSize: "var(--text-fib-sm)" }}>
            Powered by BlackMagickOps
          </span>
        </div>
      </div>
    </footer>
  );
}
