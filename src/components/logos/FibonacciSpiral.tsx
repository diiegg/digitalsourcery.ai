"use client";

// Fibonacci golden spiral made of dots
// Dots follow the golden spiral path, getting larger toward the outside
export default function FibonacciSpiral({ size = 36 }: { size?: number }) {
  const center = size / 2;
  const phi = 1.618033988749895;
  const dots: { cx: number; cy: number; r: number; opacity: number }[] = [];
  const totalDots = 34; // fibonacci number
  const maxRadius = size * 0.42;

  for (let i = 0; i < totalDots; i++) {
    const t = i / totalDots;
    // Golden spiral: r = a * φ^(θ / 90°)
    const theta = t * Math.PI * 4; // 2 full rotations
    const r = maxRadius * Math.pow(t, 0.7);
    const cx = center + Math.cos(theta) * r;
    const cy = center + Math.sin(theta) * r;
    // Dots grow along the spiral
    const dotR = 0.4 + t * 1.0;
    const opacity = 0.3 + t * 0.7;
    dots.push({ cx, cy, r: dotR, opacity });
  }

  // Add a few ambient sparkle dots in fibonacci positions
  const sparkleAngles = [0, 137.5, 275, 52.5, 190];
  for (let i = 0; i < sparkleAngles.length; i++) {
    const angle = (sparkleAngles[i] * Math.PI) / 180;
    const dist = maxRadius * (0.85 + Math.random() * 0.15);
    dots.push({
      cx: center + Math.cos(angle) * dist,
      cy: center + Math.sin(angle) * dist,
      r: 0.35,
      opacity: 0.25,
    });
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Golden ratio: ${phi.toFixed(3)}`}
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
