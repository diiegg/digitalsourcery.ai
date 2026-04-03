"use client";

import { useEffect, useRef } from "react";

const CHARS = ".:+-=*#@&~<>{}[]|/\\";
const SPRING = 0.04;
const DAMP = 0.88;
const MOUSE_R = 100;
const MOUSE_F = 3;
const STEP = 4;
const CHAR_SIZE = 6;

type Particle = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  char: string;
  a: number;
  ta: number;
  text: boolean;
  phase: number;
  delay: number;
};

export default function AsciiHero({ text = "Digital Sorcery" }: { text?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getAccent = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      return theme === "accent" ? "#c9daed" : "rgba(255, 255, 255, 0.85)";
    };

    let accent = getAccent();

    const themeObs = new MutationObserver(() => {
      accent = getAccent();
    });
    themeObs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const parentW = container.offsetWidth;
    const baseFontSize = 80;
    const H = 100;

    canvas.style.width = parentW + "px";
    canvas.style.height = H + "px";
    canvas.width = parentW * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    let animId = 0;

    document.fonts.ready.then(() => {
      const tmp = document.createElement("canvas").getContext("2d")!;
      tmp.font = `600 ${baseFontSize}px "Outfit", sans-serif`;
      const naturalW = tmp.measureText(text).width;
      const scaledSize = Math.floor(
        baseFontSize * (parentW / naturalW) * 0.95
      );
      const sampleFont = `600 ${scaledSize}px "Outfit", sans-serif`;

      const scaledH = Math.max(H, Math.ceil(scaledSize * 1.3));
      canvas.style.height = scaledH + "px";
      canvas.width = parentW * dpr;
      canvas.height = scaledH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = parentW;
      off.height = scaledH;
      const oc = off.getContext("2d")!;
      oc.font = sampleFont;
      oc.fillStyle = "#fff";
      oc.textBaseline = "middle";
      oc.fillText(text, 0, scaledH / 2);

      const img = oc.getImageData(0, 0, parentW, scaledH);
      const particles: Particle[] = [];

      for (let y = 0; y < scaledH; y += STEP) {
        for (let x = 0; x < parentW; x += STEP) {
          const i = (y * parentW + x) * 4;
          if (img.data[i + 3] > 100) {
            particles.push({
              x: x + (Math.random() - 0.5) * parentW * 0.5,
              y: y + (Math.random() - 0.5) * scaledH * 2.5,
              tx: x,
              ty: y,
              vx: 0,
              vy: 0,
              char: CHARS[Math.floor(Math.random() * CHARS.length)],
              a: 0,
              ta: 0.85 + Math.random() * 0.15,
              text: true,
              phase: Math.random() * Math.PI * 2,
              delay: (x / parentW) * 1.2,
            });
          }
        }
      }

      // Ambient floating particles
      const ambientCount = Math.max(30, Math.floor(particles.length * 0.15));
      for (let i = 0; i < ambientCount; i++) {
        const px = Math.random() * parentW;
        const py = Math.random() * scaledH;
        particles.push({
          x: px,
          y: py,
          tx: px,
          ty: py,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          a: 0,
          ta: 0.04 + Math.random() * 0.07,
          text: false,
          phase: Math.random() * Math.PI * 2,
          delay: Math.random() * 0.6,
        });
      }

      let mx = -9999;
      let my = -9999;

      const onMove = (e: MouseEvent) => {
        const r = canvas.getBoundingClientRect();
        mx = e.clientX - r.left;
        my = e.clientY - r.top;
      };
      const onLeave = () => {
        mx = -9999;
        my = -9999;
      };
      const onTouchStart = (e: TouchEvent) => {
        const r = canvas.getBoundingClientRect();
        const t = e.touches[0];
        mx = t.clientX - r.left;
        my = t.clientY - r.top;
      };
      const onTouchMove = (e: TouchEvent) => {
        const r = canvas.getBoundingClientRect();
        const t = e.touches[0];
        mx = t.clientX - r.left;
        my = t.clientY - r.top;
      };
      const onTouchEnd = () => {
        mx = -9999;
        my = -9999;
      };

      canvas.addEventListener("mousemove", onMove, { passive: true });
      canvas.addEventListener("mouseleave", onLeave);
      canvas.addEventListener("touchstart", onTouchStart, { passive: true });
      canvas.addEventListener("touchmove", onTouchMove, { passive: true });
      canvas.addEventListener("touchend", onTouchEnd);

      const t0 = performance.now();

      const frame = (now: number) => {
        const elapsed = (now - t0) / 1000;
        ctx.clearRect(0, 0, parentW, scaledH);
        ctx.font = `500 ${CHAR_SIZE}px "JetBrains Mono", monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = accent;

        for (const p of particles) {
          const t = Math.max(0, elapsed - p.delay);

          if (p.text && t < 0.01) {
            ctx.globalAlpha = 0.02;
            ctx.fillText(p.char, p.x, p.y);
            continue;
          }

          p.vx += (p.tx - p.x) * SPRING;
          p.vy += (p.ty - p.y) * SPRING;

          const dx = p.x - mx;
          const dy = p.y - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_R && d > 0) {
            const f = ((1 - d / MOUSE_R) ** 2) * MOUSE_F;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }

          p.vx *= DAMP;
          p.vy *= DAMP;
          p.x += p.vx;
          p.y += p.vy;

          p.a += (p.ta - p.a) * 0.04;

          if (p.text) {
            p.a = p.ta + Math.sin(elapsed * 0.8 + p.phase) * 0.08;
            if (t < 0.8 || Math.random() < 0.0008) {
              p.char = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          } else {
            p.tx += (Math.random() - 0.5) * 0.2;
            p.ty += (Math.random() - 0.5) * 0.2;
            if (p.x < -20) p.x = p.tx = parentW + 10;
            if (p.x > parentW + 20) p.x = p.tx = -10;
            if (p.y < -20) p.y = p.ty = scaledH + 10;
            if (p.y > scaledH + 20) p.y = p.ty = -10;
            if (Math.random() < 0.003) {
              p.char = CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }

          ctx.globalAlpha = Math.max(0, p.a);
          ctx.fillText(p.char, p.x, p.y);
        }

        ctx.globalAlpha = 1;
        animId = requestAnimationFrame(frame);
      };

      animId = requestAnimationFrame(frame);

      // Store cleanup for event listeners
      const cleanup = () => {
        canvas.removeEventListener("mousemove", onMove);
        canvas.removeEventListener("mouseleave", onLeave);
        canvas.removeEventListener("touchstart", onTouchStart);
        canvas.removeEventListener("touchmove", onTouchMove);
        canvas.removeEventListener("touchend", onTouchEnd);
      };
      (canvas as unknown as Record<string, () => void>).__cleanup = cleanup;
    });

    return () => {
      cancelAnimationFrame(animId);
      themeObs.disconnect();
      const cleanup = (canvas as unknown as Record<string, () => void>).__cleanup;
      if (cleanup) cleanup();
    };
  }, [text]);

  return (
    <div ref={containerRef} className="w-full mb-4">
      <canvas ref={canvasRef} className="block w-full" aria-hidden="true" />
      {/* SR-only fallback for accessibility */}
      <span className="sr-only">{text}</span>
    </div>
  );
}
