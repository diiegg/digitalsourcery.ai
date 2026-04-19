interface Props {
  size?: number;
  className?: string;
  variant?: 0 | 1 | 2 | 3;
  ariaLabel?: string;
}

export default function CrystallineFragment({ size = 120, className, variant = 0, ariaLabel = "Transformation" }: Props) {
  const rotation = variant * 22;

  const shards = [
    { points: "60,60 92,28 102,55 75,75", opacity: 0.85 },
    { points: "60,60 95,78 85,102 58,90", opacity: 0.7 },
    { points: "60,60 50,95 22,82 32,58", opacity: 0.55 },
    { points: "60,60 22,55 32,22 55,30", opacity: 0.4 },
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
      <g transform={`rotate(${rotation} 60 60)`}>
        {shards.map((s, i) => (
          <polygon
            key={i}
            points={s.points}
            stroke="#c8d0e0"
            strokeWidth="0.75"
            fill="#c8d0e0"
            fillOpacity={0.06}
            opacity={s.opacity}
          />
        ))}
        {/* Center dot */}
        <circle cx={60} cy={60} r={1.5} fill="#c8d0e0" />
      </g>
    </svg>
  );
}
