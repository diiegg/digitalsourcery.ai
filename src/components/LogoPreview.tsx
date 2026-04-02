"use client";

import FibonacciDots from "./logos/FibonacciDots";
import GoldenFlower from "./logos/GoldenFlower";
import FibonacciSpiral from "./logos/FibonacciSpiral";

export default function LogoPreview() {
  return (
    <section
      className="border-t border-ds-border"
      style={{ padding: "var(--fib-6) 0" }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <p
          className="font-[family-name:var(--font-mono)] tracking-[0.2em] uppercase text-ds-text-dim"
          style={{ fontSize: "var(--text-fib-xs)", marginBottom: "var(--fib-4)" }}
        >
          Logo Options — Pick one
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "var(--fib-4)" }}>
          {/* Option 1: Fibonacci Dots */}
          <div
            className="flex flex-col items-center justify-center rounded-xl"
            style={{
              backgroundColor: "var(--color-ds-card)",
              border: "1px solid var(--color-ds-card-border)",
              padding: "var(--fib-5)",
            }}
          >
            <span className="text-white" style={{ marginBottom: "var(--fib-3)" }}>
              <FibonacciDots size={89} />
            </span>
            <div className="flex items-center" style={{ gap: "var(--fib-2)", marginBottom: "var(--fib-2)" }}>
              <span className="text-white"><FibonacciDots size={34} /></span>
              <span className="font-[family-name:var(--font-display)] text-white font-medium" style={{ fontSize: "var(--text-fib-sm)" }}>
                Digital Sourcery
              </span>
            </div>
            <p className="text-ds-text-dim font-[family-name:var(--font-mono)]" style={{ fontSize: "11px" }}>
              #1 — Fibonacci Phyllotaxis
            </p>
          </div>

          {/* Option 2: Golden Flower */}
          <div
            className="flex flex-col items-center justify-center rounded-xl"
            style={{
              backgroundColor: "var(--color-ds-card)",
              border: "1px solid var(--color-ds-card-border)",
              padding: "var(--fib-5)",
            }}
          >
            <span className="text-white" style={{ marginBottom: "var(--fib-3)" }}>
              <GoldenFlower size={89} />
            </span>
            <div className="flex items-center" style={{ gap: "var(--fib-2)", marginBottom: "var(--fib-2)" }}>
              <span className="text-white"><GoldenFlower size={34} /></span>
              <span className="font-[family-name:var(--font-display)] text-white font-medium" style={{ fontSize: "var(--text-fib-sm)" }}>
                Digital Sourcery
              </span>
            </div>
            <p className="text-ds-text-dim font-[family-name:var(--font-mono)]" style={{ fontSize: "11px" }}>
              #2 — Sacred Flower
            </p>
          </div>

          {/* Option 3: Fibonacci Spiral */}
          <div
            className="flex flex-col items-center justify-center rounded-xl"
            style={{
              backgroundColor: "var(--color-ds-card)",
              border: "1px solid var(--color-ds-card-border)",
              padding: "var(--fib-5)",
            }}
          >
            <span className="text-white" style={{ marginBottom: "var(--fib-3)" }}>
              <FibonacciSpiral size={89} />
            </span>
            <div className="flex items-center" style={{ gap: "var(--fib-2)", marginBottom: "var(--fib-2)" }}>
              <span className="text-white"><FibonacciSpiral size={34} /></span>
              <span className="font-[family-name:var(--font-display)] text-white font-medium" style={{ fontSize: "var(--text-fib-sm)" }}>
                Digital Sourcery
              </span>
            </div>
            <p className="text-ds-text-dim font-[family-name:var(--font-mono)]" style={{ fontSize: "11px" }}>
              #3 — Golden Spiral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
