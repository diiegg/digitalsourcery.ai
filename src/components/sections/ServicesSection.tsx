"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Intelligent Observability",
    description:
      "Systems that continuously learn and improve from real-time operational data.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mx-auto mb-6">
        <ellipse cx="32" cy="40" rx="16" ry="6" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        <ellipse cx="32" cy="34" rx="16" ry="6" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <ellipse cx="32" cy="28" rx="16" ry="6" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        <ellipse cx="32" cy="28" rx="16" ry="6" fill="currentColor" opacity="0.08" />
        <line x1="16" y1="28" x2="16" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        <line x1="48" y1="28" x2="48" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "AI Platform Engineering",
    description:
      "Bring all your infrastructure into one intelligent, self-managing foundation.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mx-auto mb-6">
        <circle cx="26" cy="30" r="10" fill="currentColor" opacity="0.15" />
        <circle cx="38" cy="30" r="10" fill="currentColor" opacity="0.10" />
        <circle cx="32" cy="38" r="8" fill="currentColor" opacity="0.08" />
        <circle cx="26" cy="30" r="10" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
        <circle cx="38" cy="30" r="10" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Autonomous Infrastructure",
    description:
      "Reliable architecture designed for secure, scalable, and self-healing systems.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mx-auto mb-6">
        <line x1="32" y1="20" x2="32" y2="44" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <line x1="20" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <rect x="29" y="17" width="6" height="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <rect x="29" y="41" width="6" height="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <rect x="17" y="29" width="6" height="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <rect x="41" y="29" width="6" height="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
        <rect x="29" y="29" width="6" height="6" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-20 max-w-2xl"
        >
          Build Systems That
          <br />
          Think, Not Just React
        </motion.h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-[1px]"
          style={{ backgroundColor: "var(--color-ds-card-border)" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="themed-card p-10 lg:p-12 text-ds-text"
              style={{ backgroundColor: "var(--color-ds-card)" }}
            >
              {service.icon}
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-ds-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
