interface Props {
  size?: number;
  className?: string;
  variant?: 0 | 1 | 2;
  ariaLabel?: string;
}

export default function GeometricGrid({ size = 120, className, variant = 0, ariaLabel = "Network topology" }: Props) {
  const positions: { x: number; y: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      positions.push({ x: 18 + col * 28, y: 18 + row * 28 });
    }
  }

  const hub = { x: 60, y: 60 };
  const cornerIdx = variant === 1 ? [1, 2, 13, 14] : variant === 2 ? [4, 7, 8, 11] : [0, 3, 12, 15];

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
      {cornerIdx.map((idx) => (
        <line
          key={`edge-${idx}`}
          x1={hub.x}
          y1={hub.y}
          x2={positions[idx].x}
          y2={positions[idx].y}
          stroke="#c8d0e0"
          strokeWidth="0.5"
          opacity={0.35}
        />
      ))}
      {positions.map((p, i) => (
        <rect
          key={i}
          x={p.x - 2}
          y={p.y - 2}
          width={4}
          height={4}
          fill="none"
          stroke="#c8d0e0"
          strokeWidth="0.75"
          opacity={0.7}
        />
      ))}
      <rect
        x={hub.x - 4}
        y={hub.y - 4}
        width={8}
        height={8}
        fill="#c8d0e0"
        fillOpacity={0.18}
        stroke="#c8d0e0"
        strokeWidth="1"
      />
    </svg>
  );
}
