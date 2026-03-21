"use client";

import { useEffect, useRef, useCallback } from "react";

export default function ConstellationHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getTheme = useCallback(() => {
    return document.documentElement.getAttribute("data-theme") || "mono";
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    // Theme-aware color palettes
    const colors = {
      mono: {
        petal: "210, 220, 240",
        spoke: "180, 190, 220",
        ring: "200, 210, 240",
        node: "220, 225, 245",
        stem: "200, 210, 230",
        coreInner: "rgba(200, 210, 255, 0.08)",
      },
      accent: {
        petal: "139, 92, 246",    // violet
        spoke: "99, 102, 241",    // indigo
        ring: "129, 140, 248",    // indigo-glow
        node: "167, 139, 250",    // violet-light
        stem: "99, 102, 241",     // indigo
        coreInner: "rgba(124, 58, 237, 0.12)",
      },
    };

    const drawWireframeBloom = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const cx = w * 0.5;
      const cy = h * 0.48;
      const baseR = Math.min(w, h) * 0.38;
      const theme = getTheme() as "mono" | "accent";
      const c = colors[theme];

      ctx.clearRect(0, 0, w, h);

      // Core glow
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseR * 0.4);
      coreGlow.addColorStop(0, c.coreInner);
      coreGlow.addColorStop(1, "transparent");
      ctx.fillStyle = coreGlow;
      ctx.fillRect(0, 0, w, h);

      // Petals — wireframe flower
      const petalCount = 7;
      for (let p = 0; p < petalCount; p++) {
        const baseAngle = (p / petalCount) * Math.PI * 2 + time * 0.00008;
        const layers = 4;

        for (let layer = 0; layer < layers; layer++) {
          const layerOffset = layer * 0.04;
          const layerOpacity = 0.06 + (layers - layer) * 0.025;
          const petalScale = 0.5 + layer * 0.18;

          ctx.beginPath();
          for (let t = 0; t <= Math.PI * 2; t += 0.015) {
            const k = 1;
            const petalR =
              baseR *
              petalScale *
              Math.pow(Math.abs(Math.cos(k * t + baseAngle + layerOffset)), 0.6);

            const stretch = 1.1;
            const x = cx + Math.cos(t + baseAngle) * petalR;
            const y = cy + Math.sin(t + baseAngle) * petalR * stretch;

            if (t === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(${c.petal}, ${layerOpacity})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }

      // Radial spokes
      const spokeCount = 36;
      for (let i = 0; i < spokeCount; i++) {
        const angle = (i / spokeCount) * Math.PI * 2 + time * 0.00005;
        const innerR = baseR * 0.03;
        const pulseOffset = Math.sin(time * 0.0006 + i * 0.4) * 0.12;
        const outerR = baseR * (0.55 + pulseOffset);
        const opacity = 0.025 + Math.sin(time * 0.0004 + i * 0.8) * 0.015;

        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR);
        ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR);
        ctx.strokeStyle = `rgba(${c.spoke}, ${opacity})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      }

      // Concentric rings
      const ringCount = 6;
      for (let r = 0; r < ringCount; r++) {
        const radius = baseR * (0.1 + r * 0.1);
        const opacity = 0.03 + Math.sin(time * 0.0003 + r) * 0.015;

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${c.ring}, ${opacity})`;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      }

      // Floating nodes
      for (let i = 0; i < 40; i++) {
        const angle = (i / 40) * Math.PI * 2 + time * 0.0001;
        const dist = baseR * (0.25 + Math.sin(time * 0.0005 + i * 1.2) * 0.2);
        const x = cx + Math.cos(angle) * dist;
        const y = cy + Math.sin(angle) * dist * 1.1;
        const nodeR = 0.8 + Math.sin(time * 0.001 + i) * 0.4;
        const opacity = 0.15 + Math.sin(time * 0.0008 + i * 0.6) * 0.1;

        ctx.beginPath();
        ctx.arc(x, y, nodeR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.node}, ${opacity})`;
        ctx.fill();
      }

      // Stem
      ctx.beginPath();
      const stemStartY = cy + baseR * 0.45;
      ctx.moveTo(cx, stemStartY);
      ctx.quadraticCurveTo(
        cx - baseR * 0.15,
        stemStartY + baseR * 0.4,
        cx - baseR * 0.25,
        h
      );
      ctx.strokeStyle = `rgba(${c.stem}, 0.04)`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    };

    const animate = (t: number) => {
      time = t;
      drawWireframeBloom();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animationId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [getTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
    />
  );
}
