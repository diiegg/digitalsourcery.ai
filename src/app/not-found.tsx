import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Off the path | Digital Sorcery",
  description: "The page you tried isn't part of the current site.",
};

export default function NotFound() {
  return (
    <main className="relative" style={{ minHeight: "calc(100dvh - var(--fib-7))" }}>
      <section style={{ paddingTop: "var(--fib-8)", paddingBottom: "var(--fib-8)" }}>
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)" }}>
            <div className="md:col-span-8">
              <span
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-4)" }}
              >
                404 · Off the path
              </span>
              <h1
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.045em] text-white"
                style={{ fontSize: "clamp(var(--text-fib-2xl), 12vw, 220px)", lineHeight: 0.92, marginBottom: "var(--fib-5)" }}
              >
                Not in the box.
              </h1>
              <p
                className="text-ds-text-secondary"
                style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.55, maxWidth: "55ch", marginBottom: "var(--fib-6)" }}
              >
                The page you tried isn&apos;t part of the current site. Either it moved, it was retired, or the link was already wrong when it reached you.
              </p>

              <div className="flex flex-col md:flex-row" style={{ gap: "var(--fib-3)" }}>
                <Link
                  href="/"
                  className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn"
                  style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}
                >
                  <span>Back to the home page</span>
                </Link>
                <Link
                  href="/stack"
                  className="inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-ds-card)] transition-colors duration-200"
                  style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)", border: "1px solid rgba(200, 208, 224, 0.1)", color: "var(--color-ds-text)" }}
                >
                  See the reference stack
                </Link>
              </div>
            </div>

            <div className="md:col-span-3 md:col-start-10 md:self-end">
              <div style={{ padding: "var(--fib-4)", border: "1px solid var(--color-ds-border)" }}>
                <span
                  className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                  style={{ fontSize: "10px", color: "var(--color-ds-text-dim)", marginBottom: "var(--fib-2)" }}
                >
                  Looking for something specific?
                </span>
                <a
                  href="mailto:sayhi@digitalsourcery.ai"
                  className="font-[family-name:var(--font-display)] font-medium text-white hover:text-[var(--color-ds-warm)] transition-colors"
                  style={{ fontSize: "var(--text-fib-sm)" }}
                >
                  sayhi@digitalsourcery.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
