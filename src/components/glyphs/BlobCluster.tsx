interface Props {
  size?: number;
  className?: string;
  variant?: 0 | 1 | 2;
  ariaLabel?: string;
}

export default function BlobCluster({ size = 120, className, variant = 0, ariaLabel = "Unified data" }: Props) {
  const rotation = variant * 30;

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
        {/* Central blob */}
        <path
          d="M60 30 Q90 35 88 65 Q85 95 55 92 Q25 88 27 60 Q30 32 60 30 Z"
          stroke="#c8d0e0"
          strokeWidth="0.75"
          fill="#c8d0e0"
          fillOpacity={0.08}
          opacity={0.85}
        />
        {/* Satellite 1 */}
        <ellipse
          cx="92"
          cy="40"
          rx="14"
          ry="11"
          stroke="#c8d0e0"
          strokeWidth="0.75"
          fill="#c8d0e0"
          fillOpacity={0.05}
          opacity={0.55}
        />
        {/* Satellite 2 */}
        <ellipse
          cx="32"
          cy="95"
          rx="12"
          ry="9"
          stroke="#c8d0e0"
          strokeWidth="0.75"
          fill="#c8d0e0"
          fillOpacity={0.05}
          opacity={0.5}
        />
        {/* Satellite 3 */}
        <ellipse
          cx="98"
          cy="92"
          rx="10"
          ry="8"
          stroke="#c8d0e0"
          strokeWidth="0.75"
          fill="#c8d0e0"
          fillOpacity={0.05}
          opacity={0.45}
        />
      </g>
    </svg>
  );
}
