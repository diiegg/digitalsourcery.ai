"use client";

// Sacred geometry flower — 8 petals derived from overlapping vesica piscis
// Each petal is a lens shape (intersection of two circles)
// Petal count 8 = fibonacci(6), angles divide by golden ratio
export default function GoldenFlower({ size = 36 }: { size?: number }) {
  const center = size / 2;
  const petalCount = 8;
  const outerR = size * 0.38;
  const innerR = size * 0.18;

  const petals: string[] = [];
  for (let i = 0; i < petalCount; i++) {
    const angle = (i / petalCount) * Math.PI * 2 - Math.PI / 2;
    const tipX = center + Math.cos(angle) * outerR;
    const tipY = center + Math.sin(angle) * outerR;

    // Control points for the petal curves
    const spread = 0.35;
    const leftAngle = angle - spread;
    const rightAngle = angle + spread;
    const cpDist = outerR * 0.55;

    const cpLX = center + Math.cos(leftAngle) * cpDist;
    const cpLY = center + Math.sin(leftAngle) * cpDist;
    const cpRX = center + Math.cos(rightAngle) * cpDist;
    const cpRY = center + Math.sin(rightAngle) * cpDist;

    // Inner point
    const innerDist = innerR * 0.3;
    const innerX = center + Math.cos(angle) * innerDist;
    const innerY = center + Math.sin(angle) * innerDist;

    petals.push(
      `M ${innerX} ${innerY} Q ${cpLX} ${cpLY} ${tipX} ${tipY} Q ${cpRX} ${cpRY} ${innerX} ${innerY}`
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx={center}
        cy={center}
        r={outerR + 1}
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.15"
      />
      {/* Petal outlines */}
      {petals.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth="0.8"
          fill="currentColor"
          fillOpacity="0.06"
          opacity={0.7 + (i % 2) * 0.3}
        />
      ))}
      {/* Center dot */}
      <circle cx={center} cy={center} r={1.2} fill="currentColor" opacity="0.9" />
    </svg>
  );
}
