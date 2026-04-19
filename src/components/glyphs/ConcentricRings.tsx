interface Props {
  size?: number;
  className?: string;
  variant?: 0 | 1 | 2;
  ariaLabel?: string;
}

export default function ConcentricRings({ size = 120, className, variant = 0, ariaLabel = "Signal pattern" }: Props) {
  const pingPositions = [
    { x: 92, y: 45 },
    { x: 36, y: 88 },
    { x: 88, y: 92 },
  ];
  const ping = pingPositions[variant];

  const rings = [
    { r: 10, opacity: 0.95 },
    { r: 22, opacity: 0.7 },
    { r: 34, opacity: 0.5 },
    { r: 46, opacity: 0.32 },
    { r: 56, opacity: 0.18 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      {rings.map((ring, i) => (
        <circle
          key={i}
          cx={60}
          cy={60}
          r={ring.r}
          stroke="#c8d0e0"
          strokeWidth="0.75"
          fill="none"
          opacity={ring.opacity}
        />
      ))}
      {/* Center node */}
      <circle cx={60} cy={60} r={3} fill="#c8d0e0" />
      {/* Off-center ping in warm accent */}
      <circle cx={ping.x} cy={ping.y} r={1.8} fill="#E3CCB1" opacity={0.85} />
      <circle cx={ping.x} cy={ping.y} r={5} fill="none" stroke="#E3CCB1" strokeWidth="0.5" opacity={0.4} />
    </svg>
  );
}
