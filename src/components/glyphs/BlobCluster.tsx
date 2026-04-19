interface Props {
  size?: number;
  className?: string;
  variant?: number;
  ariaLabel?: string;
}

const STROKE = "#c8d0e0";

export default function BlobCluster({ size = 120, className, variant = 0, ariaLabel = "Unified data" }: Props) {
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
      {variant === 0 && (
        // orbital: 1 large + 3 satellites
        <>
          <path d="M60 30 Q90 35 88 65 Q85 95 55 92 Q25 88 27 60 Q30 32 60 30 Z" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.08} opacity={0.85} />
          <ellipse cx="92" cy="40" rx="14" ry="11" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.55} />
          <ellipse cx="32" cy="95" rx="12" ry="9" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.5} />
          <ellipse cx="98" cy="92" rx="10" ry="8" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.45} />
        </>
      )}

      {variant === 1 && (
        // triangle-cluster: 3 equal blobs in triangle
        <>
          <ellipse cx="60" cy="32" rx="22" ry="18" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
          <ellipse cx="32" cy="82" rx="22" ry="18" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
          <ellipse cx="88" cy="82" rx="22" ry="18" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
        </>
      )}

      {variant === 2 && (
        // satellite-ring: central + 5 small around
        <>
          <circle cx="60" cy="60" r="20" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.1} opacity={0.9} />
          {Array.from({ length: 5 }).map((_, i) => {
            const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
            const x = 60 + Math.cos(a) * 40;
            const y = 60 + Math.sin(a) * 40;
            return <circle key={i} cx={x} cy={y} r={7} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.6} />;
          })}
        </>
      )}

      {variant === 3 && (
        // merged-twin: 2 large blobs with crown satellite
        <>
          <ellipse cx="42" cy="60" rx="26" ry="34" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.08} opacity={0.8} />
          <ellipse cx="78" cy="60" rx="26" ry="34" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.08} opacity={0.8} />
          <ellipse cx="60" cy="22" rx="6" ry="5" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.55} />
        </>
      )}

      {variant === 4 && (
        // fluid-wave: 4 blobs in a wave
        <>
          <ellipse cx="22" cy="76" rx="14" ry="10" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.55} />
          <ellipse cx="48" cy="50" rx="18" ry="14" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.78} />
          <ellipse cx="76" cy="72" rx="20" ry="16" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
          <ellipse cx="100" cy="50" rx="14" ry="10" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.6} />
        </>
      )}

      {variant === 5 && (
        // vesica pisces: 2 overlapping circles
        <>
          <circle cx="46" cy="60" r="32" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.78} />
          <circle cx="74" cy="60" r="32" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.78} />
        </>
      )}

      {variant === 6 && (
        // scattered: 5 blobs of various sizes
        <>
          <ellipse cx="35" cy="30" rx="14" ry="10" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.7} />
          <ellipse cx="80" cy="38" rx="18" ry="14" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
          <ellipse cx="55" cy="65" rx="22" ry="16" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.8} />
          <ellipse cx="92" cy="80" rx="12" ry="9" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.55} />
          <ellipse cx="35" cy="92" rx="16" ry="11" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.65} />
        </>
      )}

      {variant === 7 && (
        // droplet-trail: descending size
        <>
          <ellipse cx="32" cy="32" rx="22" ry="22" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.08} opacity={0.9} />
          <ellipse cx="58" cy="55" rx="14" ry="14" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.7} />
          <ellipse cx="78" cy="74" rx="9" ry="9" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.55} />
          <ellipse cx="92" cy="88" rx="5" ry="5" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.04} opacity={0.4} />
          <circle cx="100" cy="98" r="2.5" fill={STROKE} opacity={0.3} />
        </>
      )}

      {variant === 8 && (
        // nucleated: 1 big + tight cluster of inner nodes
        <>
          <path d="M60 30 Q88 38 86 62 Q82 88 58 88 Q30 84 30 60 Q32 32 60 30 Z" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.09} opacity={0.9} />
          <circle cx="40" cy="48" r="6" fill={STROKE} fillOpacity={0.4} stroke={STROKE} strokeWidth="0.5" opacity={0.7} />
          <circle cx="72" cy="44" r="5" fill={STROKE} fillOpacity={0.4} stroke={STROKE} strokeWidth="0.5" opacity={0.7} />
          <circle cx="58" cy="72" r="7" fill={STROKE} fillOpacity={0.4} stroke={STROKE} strokeWidth="0.5" opacity={0.75} />
        </>
      )}

      {variant === 9 && (
        // archipelago: 6 blobs in scattered arc
        <>
          <ellipse cx="22" cy="50" rx="10" ry="7" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.5} />
          <ellipse cx="40" cy="38" rx="14" ry="10" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.65} />
          <ellipse cx="62" cy="32" rx="18" ry="12" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
          <ellipse cx="84" cy="42" rx="13" ry="9" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.7} />
          <ellipse cx="98" cy="62" rx="9" ry="6" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.55} />
          <ellipse cx="55" cy="88" rx="11" ry="8" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.5} />
        </>
      )}
    </svg>
  );
}
