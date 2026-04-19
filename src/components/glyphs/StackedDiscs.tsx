interface Props {
  size?: number;
  className?: string;
  variant?: 0 | 1 | 2;
  ariaLabel?: string;
}

export default function StackedDiscs({ size = 120, className, variant = 0, ariaLabel = "Layered system" }: Props) {
  const offset = variant * 4;
  const layers = [
    { y: 30 + offset, rx: 40, opacity: 0.22 },
    { y: 45 + offset, rx: 44, opacity: 0.38 },
    { y: 60 + offset, rx: 48, opacity: 0.55 },
    { y: 75 + offset, rx: 52, opacity: 0.72 },
    { y: 90 + offset, rx: 56, opacity: 0.95 },
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
      {layers.map((layer, i) => (
        <ellipse
          key={i}
          cx={60}
          cy={layer.y}
          rx={layer.rx}
          ry={layer.rx * 0.22}
          stroke="#c8d0e0"
          strokeWidth="0.75"
          fill="#c8d0e0"
          fillOpacity={0.05}
          opacity={layer.opacity}
        />
      ))}
    </svg>
  );
}
