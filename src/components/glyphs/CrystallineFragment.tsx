interface Props {
  size?: number;
  className?: string;
  variant?: number;
  ariaLabel?: string;
}

const STROKE = "#c8d0e0";

export default function CrystallineFragment({ size = 120, className, variant = 0, ariaLabel = "Transformation" }: Props) {
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
        // 4-shard radial
        <>
          {[
            { p: "60,60 92,28 102,55 75,75", op: 0.85 },
            { p: "60,60 95,78 85,102 58,90", op: 0.7 },
            { p: "60,60 50,95 22,82 32,58", op: 0.55 },
            { p: "60,60 22,55 32,22 55,30", op: 0.4 },
          ].map((s, i) => (
            <polygon key={i} points={s.p} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={s.op} />
          ))}
          <circle cx={60} cy={60} r={1.5} fill={STROKE} />
        </>
      )}

      {variant === 1 && (
        // 6-shard radial
        <>
          {Array.from({ length: 6 }).map((_, i) => {
            const a1 = (i / 6) * Math.PI * 2;
            const a2 = ((i + 1) / 6) * Math.PI * 2;
            const r1 = 38;
            const x1 = 60 + Math.cos(a1) * r1;
            const y1 = 60 + Math.sin(a1) * r1;
            const x2 = 60 + Math.cos(a2) * r1;
            const y2 = 60 + Math.sin(a2) * r1;
            return <polygon key={i} points={`60,60 ${x1.toFixed(1)},${y1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.4 + (i % 3) * 0.2} />;
          })}
          <circle cx={60} cy={60} r={2} fill={STROKE} />
        </>
      )}

      {variant === 2 && (
        // asymmetric break: uneven shards
        <>
          <polygon points="60,60 105,18 110,52" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
          <polygon points="60,60 110,52 90,98" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.7} />
          <polygon points="60,60 90,98 28,108" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.55} />
          <polygon points="60,60 28,108 14,40" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.6} />
          <polygon points="60,60 14,40 105,18" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.04} opacity={0.4} />
        </>
      )}

      {variant === 3 && (
        // prismatic: 3 triangular prism shapes
        <>
          <polygon points="40,30 80,30 90,60 30,60" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.65} />
          <polygon points="30,60 90,60 70,90 50,90" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.08} opacity={0.85} />
          <polygon points="50,90 70,90 60,108" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.5} />
          <line x1={40} y1={30} x2={50} y2={90} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          <line x1={80} y1={30} x2={70} y2={90} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
        </>
      )}

      {variant === 4 && (
        // cracked: central with radiating cracks
        <>
          <circle cx={60} cy={60} r={32} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.6} />
          {[0, 0.6, 1.5, 2.4, 3.3, 4.2, 5.1].map((a, i) => {
            const x = 60 + Math.cos(a) * 50;
            const y = 60 + Math.sin(a) * 50;
            return <line key={i} x1={60} y1={60} x2={x} y2={y} stroke={STROKE} strokeWidth="0.5" opacity={0.5} />;
          })}
          <circle cx={60} cy={60} r={3} fill={STROKE} fillOpacity={0.4} stroke={STROKE} strokeWidth="0.75" />
        </>
      )}

      {variant === 5 && (
        // growing: shards from a corner
        <>
          {[
            { p: "20,100 60,40 50,90", op: 0.85 },
            { p: "20,100 75,30 65,75", op: 0.7 },
            { p: "20,100 95,60 80,95", op: 0.55 },
            { p: "20,100 100,90 70,108", op: 0.4 },
          ].map((s, i) => (
            <polygon key={i} points={s.p} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={s.op} />
          ))}
          <circle cx={20} cy={100} r={2.5} fill={STROKE} />
        </>
      )}

      {variant === 6 && (
        // exploding: star burst pattern
        <>
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2;
            const r1 = 10;
            const r2 = 48;
            const x1 = 60 + Math.cos(a) * r1;
            const y1 = 60 + Math.sin(a) * r1;
            const x2 = 60 + Math.cos(a) * r2;
            const y2 = 60 + Math.sin(a) * r2;
            const a2 = ((i + 0.4) / 8) * Math.PI * 2;
            const x3 = 60 + Math.cos(a2) * r1;
            const y3 = 60 + Math.sin(a2) * r1;
            return <polygon key={i} points={`${x1.toFixed(1)},${y1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)} ${x3.toFixed(1)},${y3.toFixed(1)}`} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.55 + (i % 2) * 0.25} />;
          })}
          <circle cx={60} cy={60} r={5} fill={STROKE} fillOpacity={0.3} stroke={STROKE} strokeWidth="0.75" />
        </>
      )}

      {variant === 7 && (
        // faceted: diamond/gem facets
        <>
          <polygon points="60,18 88,42 60,68 32,42" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.08} opacity={0.85} />
          <polygon points="32,42 60,68 60,102 32,42" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.55} />
          <polygon points="88,42 60,68 60,102 88,42" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.7} />
          <line x1={60} y1={18} x2={60} y2={68} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
        </>
      )}

      {variant === 8 && (
        // shattered: many small shards
        <>
          {[
            "30,28 50,22 42,42",
            "55,30 75,26 68,48",
            "80,32 100,40 88,55",
            "92,60 105,82 80,82",
            "70,75 85,95 60,98",
            "40,80 58,92 35,102",
            "20,68 40,75 25,90",
            "22,40 38,55 18,55",
            "55,55 70,55 62,72",
          ].map((p, i) => (
            <polygon key={i} points={p} stroke={STROKE} strokeWidth="0.6" fill={STROKE} fillOpacity={0.05} opacity={0.5 + (i % 3) * 0.15} />
          ))}
        </>
      )}

      {variant === 9 && (
        // double-helix-shard: two parallel angular shards
        <>
          <polygon points="20,30 50,20 60,55 35,65" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
          <polygon points="60,55 90,40 100,75 75,90" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.07} opacity={0.85} />
          <polygon points="35,65 65,75 55,100 30,95" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.65} />
          <polygon points="75,90 95,80 90,108 70,108" stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.06} opacity={0.65} />
        </>
      )}
    </svg>
  );
}
