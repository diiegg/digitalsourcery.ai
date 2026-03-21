"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section id="contact" className="py-40 lg:py-56" style={{ borderTop: "1px solid var(--color-ds-border)" }}>
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-8">
            Build the intelligence layer
            <br />
            <span style={{ color: "var(--color-ds-headline-accent)" }}>
              for your infrastructure
            </span>
          </h2>

          <p className="text-ds-text-secondary text-lg mb-12 max-w-lg">
            Free assessment. No commitment.
            If we can&apos;t show you the path to value, we&apos;ll tell you.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <a
              href="mailto:hello@digitalsourcery.ai"
              className="ds-cta inline-block text-sm px-8 py-4"
            >
              Book a Free Assessment
            </a>
            <span className="text-ds-text-dim text-sm self-center">
              hello@digitalsourcery.ai
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
