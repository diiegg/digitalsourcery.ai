"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const POOL =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*~+-=.:";
const DURATION = 600;

interface TextScrambleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function TextScramble({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
}: TextScrambleProps) {
  const ref = useRef<HTMLElement>(null);
  const hasScrambled = useRef(false);
  const [displayText, setDisplayText] = useState<string | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrambled.current) {
            hasScrambled.current = true;
            observer.disconnect();

            const finalText = el.textContent || "";
            if (!finalText.length) return;

            setTimeout(() => {
              const start = performance.now();

              const tick = (now: number) => {
                const progress = Math.min((now - start) / DURATION, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const resolved = Math.floor(eased * finalText.length);

                let out = "";
                for (let i = 0; i < finalText.length; i++) {
                  if (i < resolved) {
                    out += finalText[i];
                  } else if (finalText[i] === " " || finalText[i] === "\n") {
                    out += finalText[i];
                  } else {
                    out += POOL[Math.floor(Math.random() * POOL.length)];
                  }
                }

                setDisplayText(out);

                if (progress < 1) {
                  requestAnimationFrame(tick);
                } else {
                  setDisplayText(null); // restore original children
                }
              };

              requestAnimationFrame(tick);
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as React.RefObject<never>} className={className}>
      {displayText !== null ? displayText : children}
    </Tag>
  );
}
