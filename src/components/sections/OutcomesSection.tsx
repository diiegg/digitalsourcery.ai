"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import TextScramble from "@/components/TextScramble";
import { Rocket, Percent, Zap } from "lucide-react";

export default function OutcomesSection() {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!glowRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.left = `${x}px`;
    glowRef.current.style.top = `${y}px`;
    glowRef.current.style.opacity = "1";
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }, []);

  return (
    <section id="outcomes" style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-7)", borderTop: "1px solid var(--color-ds-border)" }}>
      <div className="ds-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} style={{ marginBottom: "var(--fib-6)" }}>
          <div className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", border: "1px solid var(--color-ds-warm-dim)", padding: "var(--fib-1) var(--fib-2)", marginBottom: "var(--fib-4)" }}>
            Measurable Impact
          </div>
          <TextScramble as="h2" className="font-[family-name:var(--font-display)] font-bold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))", marginBottom: "var(--fib-5)" }}>
            Engineered Outcomes
          </TextScramble>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2" style={{ gap: "var(--fib-3)" }}>
          {/* Large card — with mouse-following glow + grid overlay */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="md:col-span-2 md:row-span-2 refractive-card flex flex-col justify-end relative overflow-hidden cursor-crosshair"
            style={{ padding: "var(--fib-5)" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Mouse-following warm glow */}
            <div
              ref={glowRef}
              className="pointer-events-none absolute"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(227, 204, 177, 0.15) 0%, rgba(227, 204, 177, 0.05) 40%, transparent 70%)",
                transform: "translate(-50%, -50%)",
                opacity: 0,
                transition: "opacity 0.5s ease",
              }}
            />

            {/* Grid overlay pattern */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(200, 208, 224, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 208, 224, 0.03) 1px, transparent 1px)", backgroundSize: "55px 55px" }} />

            <div className="absolute top-[var(--fib-4)] right-[var(--fib-4)]">
              <Rocket size={48} style={{ color: "var(--color-ds-crystalline)", opacity: 0.15 }} strokeWidth={1} />
            </div>

            {/* Decorative arc SVG */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid slice">
              <circle cx="300" cy="200" r="150" stroke="#E3CCB1" strokeWidth="0.5" opacity="0.06" />
              <circle cx="300" cy="200" r="100" stroke="#c8d0e0" strokeWidth="0.5" opacity="0.04" />
              <circle cx="300" cy="200" r="200" stroke="#E3CCB1" strokeWidth="0.3" opacity="0.03" />
            </svg>

            <div className="relative z-10" style={{ marginBottom: "var(--fib-4)" }}>
              <div className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "clamp(var(--text-fib-xl), 10vw, var(--text-fib-2xl))" }}>90</div>
              <h3 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.15em]" style={{ fontSize: "var(--text-fib-md)", color: "var(--color-ds-warm)" }}>Days to Production</h3>
            </div>
            <p className="text-ds-text-secondary max-w-md relative z-10" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618 }}>From prototype to production in one quarter. Working software integrated with your systems, deployed to your infrastructure, monitored by your team.</p>
          </motion.div>

          {/* Cost card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="refractive-card flex flex-col justify-center relative overflow-hidden" style={{ padding: "var(--fib-4)" }}>
            <div className="absolute top-[var(--fib-3)] right-[var(--fib-3)]">
              <Percent size={28} style={{ color: "var(--color-ds-crystalline)", opacity: 0.15 }} strokeWidth={1} />
            </div>
            <div className="font-[family-name:var(--font-display)] font-bold text-white" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))" }}>40-60%</div>
            <h3 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.15em]" style={{ fontSize: "var(--text-fib-xs)", color: "var(--color-ds-warm)", marginTop: "var(--fib-1)" }}>AI Cost Reduction</h3>
            <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.5, marginTop: "var(--fib-2)" }}>Semantic caching, model routing, and token budgets. Most clients save more than our fees.</p>
          </motion.div>

          {/* MTTR card — inverted */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }} className="flex flex-col justify-center relative overflow-hidden" style={{ padding: "var(--fib-4)", backgroundColor: "var(--color-ds-warm)", color: "var(--color-ds-black)" }}>
            <div className="absolute top-[var(--fib-3)] right-[var(--fib-3)]">
              <Zap size={28} style={{ opacity: 0.15 }} strokeWidth={1} />
            </div>
            <div className="font-[family-name:var(--font-display)] font-bold" style={{ fontSize: "clamp(var(--text-fib-lg), 5vw, var(--text-fib-xl))" }}>70%+</div>
            <h3 className="font-[family-name:var(--font-display)] font-bold uppercase tracking-[0.15em] opacity-70" style={{ fontSize: "var(--text-fib-xs)", marginTop: "var(--fib-1)" }}>MTTR Reduction</h3>
            <p className="opacity-60" style={{ fontSize: "var(--text-fib-xs)", lineHeight: 1.5, marginTop: "var(--fib-2)" }}>80%+ incidents auto-remediate. Fewer 3 AM pages. Engineering time back for building.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
