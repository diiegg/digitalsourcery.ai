import Link from "next/link";

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
      className="border-t border-ds-border"
      style={{ paddingTop: "var(--fib-6)", paddingBottom: "var(--fib-4)" }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        {/* Link columns */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "var(--fib-4)", marginBottom: "var(--fib-6)" }}
        >
          {/* Intelligence */}
          <div>
            <p
              className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-white"
              style={{ fontSize: "11px", marginBottom: "var(--fib-3)" }}
            >
              Intelligence
            </p>
            {intelligenceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-ds-text-dim hover:text-white transition-colors"
                style={{ fontSize: "var(--text-fib-xs)", marginBottom: "var(--fib-1)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Foundation */}
          <div>
            <p
              className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-white"
              style={{ fontSize: "11px", marginBottom: "var(--fib-3)" }}
            >
              Foundation
            </p>
            {foundationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-ds-text-dim hover:text-white transition-colors"
                style={{ fontSize: "var(--text-fib-xs)", marginBottom: "var(--fib-1)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <p
              className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-white"
              style={{ fontSize: "11px", marginBottom: "var(--fib-3)" }}
            >
              Company
            </p>
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-ds-text-dim hover:text-white transition-colors"
                style={{ fontSize: "var(--text-fib-xs)", marginBottom: "var(--fib-1)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* BlackMagickOps badge */}
          <div>
            <p
              className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-white"
              style={{ fontSize: "11px", marginBottom: "var(--fib-3)" }}
            >
              Platform Foundations
            </p>
            <p
              className="text-ds-text-dim"
              style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.618, marginBottom: "var(--fib-2)" }}
            >
              Built on the engineering discipline of BlackMagickOps — platform engineering,
              automation, and observability.
            </p>
            <Link
              href="/foundation"
              className="font-[family-name:var(--font-mono)] text-ds-text-secondary hover:text-white transition-colors"
              style={{ fontSize: "11px" }}
            >
              blackmagickops.com →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between border-t"
          style={{
            borderColor: "var(--color-ds-border)",
            paddingTop: "var(--fib-3)",
            gap: "var(--fib-2)",
          }}
        >
          <span
            className="text-ds-text-dim"
            style={{ fontSize: "var(--text-fib-xs)" }}
          >
            &copy; {new Date().getFullYear()} Digital Sourcery
          </span>
          <span
            className="text-ds-text-dim"
            style={{ fontSize: "var(--text-fib-xs)" }}
          >
            Powered by BlackMagickOps
          </span>
        </div>
      </div>
    </footer>
  );
}
