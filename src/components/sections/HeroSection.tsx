"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// Previous 2D canvas version kept as fallback:
// import ConstellationHero from "@/components/ConstellationHero";

// Previous 3D flower kept as fallback:
// const WireframeFlower = dynamic(
//   () => import("@/components/WireframeFlower"),
//   { ssr: false }
// );

const WireframeOwl = dynamic(
  () => import("@/components/WireframeOwl"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16 w-full pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[1.0] tracking-[-0.03em] text-white mb-8">
              Infrastructure
              <br />
              <span style={{ color: "var(--color-ds-headline-accent)" }}>
                That Thinks
              </span>
            </h1>

            <p className="text-ds-text-secondary text-base lg:text-lg leading-relaxed max-w-md mb-12">
              AI-native platform engineering, intelligent observability,
              and autonomous infrastructure for teams building at scale.
            </p>

            <a
              href="#contact"
              className="ds-cta inline-block text-sm px-7 py-3.5"
            >
              Get Started
            </a>
          </motion.div>

          {/* Right — 3D Wireframe Flower */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[650px]"
          >
            <WireframeOwl />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
