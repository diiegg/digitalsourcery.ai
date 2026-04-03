"use client";

// Fibonacci phyllotaxis pattern — dots placed at the golden angle (137.5°)
// Same pattern as sunflower seeds, pine cones, galaxy arms
export default function FibonacciDots({ size = 36 }: { size?: number }) {
  const goldenAngle = 137.508; // degrees — 360 / φ²
  const dots: { cx: number; cy: number; r: number; opacity: number }[] = [];
  const totalDots = 55; // fibonacci number
  const center = size / 2;
  const maxR = size * 0.44;

  for (let i = 1; i <= totalDots; i++) {
    const angle = (i * goldenAngle * Math.PI) / 180;
    const dist = maxR * Math.sqrt(i / totalDots);
    const cx = center + Math.cos(angle) * dist;
    const cy = center + Math.sin(angle) * dist;
    // Dots get smaller toward the outside
    const dotR = 0.6 + (1 - i / totalDots) * 0.8;
    const opacity = 0.5 + (1 - i / totalDots) * 0.5;
    dots.push({ cx, cy, r: dotR, opacity });
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="currentColor"
          opacity={d.opacity}
        />
      ))}
    </svg>
  );
}
