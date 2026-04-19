interface Props {
  size?: number;
  className?: string;
  variant?: number;
  ariaLabel?: string;
}

const STROKE = "#c8d0e0";
const ACCENT = "#E3CCB1";

export default function ConcentricRings({ size = 120, className, variant = 0, ariaLabel = "Signal pattern" }: Props) {
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
        // sonar with off-center ping (NE)
        <>
          {[10, 22, 34, 46, 56].map((r, i) => (
            <circle key={i} cx={60} cy={60} r={r} stroke={STROKE} strokeWidth="0.75" fill="none" opacity={0.95 - i * 0.18} />
          ))}
          <circle cx={60} cy={60} r={3} fill={STROKE} />
          <circle cx={92} cy={45} r={1.8} fill={ACCENT} opacity={0.85} />
          <circle cx={92} cy={45} r={5} fill="none" stroke={ACCENT} strokeWidth="0.5" opacity={0.4} />
        </>
      )}

      {variant === 1 && (
        // target: alternating filled/outline rings
        <>
          {[14, 26, 38, 50].map((r, i) => (
            <circle key={i} cx={60} cy={60} r={r} stroke={STROKE} strokeWidth="0.85" fill={i % 2 === 0 ? STROKE : "none"} fillOpacity={i % 2 === 0 ? 0.06 : 0} opacity={0.85 - i * 0.12} />
          ))}
          <circle cx={60} cy={60} r={4} fill={STROKE} fillOpacity={0.4} stroke={STROKE} strokeWidth="0.85" />
        </>
      )}

      {variant === 2 && (
        // ripple: expanding rings (densest at outer)
        <>
          {[8, 18, 30, 44, 58].map((r, i) => (
            <circle key={i} cx={60} cy={60} r={r} stroke={STROKE} strokeWidth={i < 3 ? "0.5" : "0.85"} fill="none" opacity={0.3 + i * 0.15} />
          ))}
          <circle cx={60} cy={60} r={2} fill={STROKE} />
        </>
      )}

      {variant === 3 && (
        // vortex: spiral inward
        <>
          {(() => {
            const pts: string[] = [];
            for (let t = 0; t < 6 * Math.PI; t += 0.1) {
              const r = 56 - t * 2.6;
              if (r < 2) break;
              const x = 60 + Math.cos(t) * r;
              const y = 60 + Math.sin(t) * r;
              pts.push(`${t === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
            }
            return <path d={pts.join(" ")} stroke={STROKE} strokeWidth="0.85" fill="none" opacity={0.85} />;
          })()}
          <circle cx={60} cy={60} r={2.5} fill={STROKE} />
        </>
      )}

      {variant === 4 && (
        // bullseye-quad: rings + 4 cardinal markers
        <>
          {[16, 30, 44, 56].map((r, i) => (
            <circle key={i} cx={60} cy={60} r={r} stroke={STROKE} strokeWidth="0.75" fill="none" opacity={0.85 - i * 0.15} />
          ))}
          <circle cx={60} cy={60} r={3} fill={STROKE} />
          {[
            { x: 60, y: 4 },
            { x: 116, y: 60 },
            { x: 60, y: 116 },
            { x: 4, y: 60 },
          ].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={2} fill={ACCENT} opacity={0.7} />
          ))}
        </>
      )}

      {variant === 5 && (
        // breathing: dashed/solid alternating
        <>
          {[14, 26, 38, 50, 56].map((r, i) => (
            <circle key={i} cx={60} cy={60} r={r} stroke={STROKE} strokeWidth="0.75" fill="none" opacity={0.85 - i * 0.13} strokeDasharray={i % 2 === 0 ? undefined : "4 3"} />
          ))}
          <circle cx={60} cy={60} r={4} fill={STROKE} fillOpacity={0.4} stroke={STROKE} strokeWidth="0.75" />
        </>
      )}

      {variant === 6 && (
        // eclipse: partial overlap of 2 large circles
        <>
          <circle cx={48} cy={60} r={36} stroke={STROKE} strokeWidth="0.85" fill={STROKE} fillOpacity={0.05} opacity={0.85} />
          <circle cx={72} cy={60} r={36} stroke={STROKE} strokeWidth="0.85" fill={STROKE} fillOpacity={0.05} opacity={0.85} />
          <circle cx={60} cy={60} r={3} fill={STROKE} />
        </>
      )}

      {variant === 7 && (
        // single spiral path
        <>
          {(() => {
            const pts: string[] = [];
            for (let t = 0; t < 7 * Math.PI; t += 0.1) {
              const r = 4 + t * 2.5;
              if (r > 56) break;
              const x = 60 + Math.cos(t) * r;
              const y = 60 + Math.sin(t) * r;
              pts.push(`${t === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
            }
            return <path d={pts.join(" ")} stroke={STROKE} strokeWidth="0.75" fill="none" opacity={0.85} />;
          })()}
          <circle cx={60} cy={60} r={2.5} fill={STROKE} />
        </>
      )}

      {variant === 8 && (
        // ping-trail: multiple ping dots at varying radii
        <>
          {[18, 32, 46, 56].map((r, i) => (
            <circle key={i} cx={60} cy={60} r={r} stroke={STROKE} strokeWidth="0.5" fill="none" opacity={0.5 - i * 0.07} />
          ))}
          <circle cx={60} cy={60} r={3} fill={STROKE} />
          {[
            { x: 78, y: 35, r: 1.6 },
            { x: 92, y: 78, r: 1.4 },
            { x: 35, y: 88, r: 1.5 },
            { x: 28, y: 42, r: 1.2 },
            { x: 100, y: 50, r: 1.0 },
          ].map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={ACCENT} opacity={0.85 - i * 0.1} />
          ))}
        </>
      )}

      {variant === 9 && (
        // interrupted: broken arcs not full rings
        <>
          {[20, 32, 44, 56].map((r, i) => {
            const start = i * 0.6;
            const end = start + Math.PI * 1.4;
            const x1 = 60 + Math.cos(start) * r;
            const y1 = 60 + Math.sin(start) * r;
            const x2 = 60 + Math.cos(end) * r;
            const y2 = 60 + Math.sin(end) * r;
            return <path key={i} d={`M${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 1,1 ${x2.toFixed(1)},${y2.toFixed(1)}`} stroke={STROKE} strokeWidth="0.85" fill="none" opacity={0.85 - i * 0.15} />;
          })}
          <circle cx={60} cy={60} r={3} fill={STROKE} />
        </>
      )}
    </svg>
  );
}
