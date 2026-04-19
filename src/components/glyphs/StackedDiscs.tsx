interface Props {
  size?: number;
  className?: string;
  variant?: number;
  ariaLabel?: string;
}

const STROKE = "#c8d0e0";

export default function StackedDiscs({ size = 120, className, variant = 0, ariaLabel = "Layered system" }: Props) {
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
        // vertical-stack: bottom-heavy growing down
        <>
          {[
            { cy: 30, rx: 40, op: 0.22 },
            { cy: 45, rx: 44, op: 0.38 },
            { cy: 60, rx: 48, op: 0.55 },
            { cy: 75, rx: 52, op: 0.72 },
            { cy: 90, rx: 56, op: 0.95 },
          ].map((d, i) => (
            <ellipse key={i} cx={60} cy={d.cy} rx={d.rx} ry={d.rx * 0.22} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={d.op} />
          ))}
        </>
      )}

      {variant === 1 && (
        // horizontal-cascade: tall ellipses cascading right
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <ellipse key={i} cx={28 + i * 16} cy={60} rx={9} ry={32} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.04} opacity={0.3 + i * 0.15} />
          ))}
        </>
      )}

      {variant === 2 && (
        // fanned-arc: ellipses fanning out from bottom pivot
        <>
          {[-40, -20, 0, 20, 40].map((angle, i) => (
            <ellipse key={i} cx={60} cy={50} rx={5} ry={32} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.04} opacity={0.5 + (i === 2 ? 0.4 : 0.2)} transform={`rotate(${angle} 60 100)`} />
          ))}
        </>
      )}

      {variant === 3 && (
        // spiraling: small discs along Archimedean spiral
        <>
          {Array.from({ length: 9 }).map((_, i) => {
            const t = i * 0.7;
            const r = 3 + i * 4.5;
            const x = 60 + r * Math.cos(t);
            const y = 60 + r * Math.sin(t);
            return <circle key={i} cx={x} cy={y} r={3.5 - i * 0.25} fill={STROKE} opacity={0.95 - i * 0.08} />;
          })}
        </>
      )}

      {variant === 4 && (
        // scalloped: overlapping circles in arc
        <>
          {Array.from({ length: 5 }).map((_, i) => (
            <circle key={i} cx={28 + i * 16} cy={70} r={20} stroke={STROKE} strokeWidth="0.75" fill="none" opacity={0.4 + i * 0.1} />
          ))}
        </>
      )}

      {variant === 5 && (
        // telescoped: nested flat ellipses (top-down)
        <>
          {[12, 22, 32, 42, 52].map((rx, i) => (
            <ellipse key={i} cx={60} cy={60} rx={rx} ry={rx * 0.32} stroke={STROKE} strokeWidth="0.75" fill="none" opacity={1 - i * 0.16} />
          ))}
        </>
      )}

      {variant === 6 && (
        // nested-shells: portrait nested ellipses
        <>
          {[16, 28, 40, 52, 56].map((rx, i) => (
            <ellipse key={i} cx={60} cy={60} rx={rx} ry={rx * 0.85} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={i === 4 ? 0 : 0.025} opacity={0.85 - i * 0.13} />
          ))}
        </>
      )}

      {variant === 7 && (
        // offset-shells: stacked with horizontal offset
        <>
          {[
            { cx: 50, cy: 30, rx: 40 },
            { cx: 56, cy: 45, rx: 44 },
            { cx: 62, cy: 60, rx: 48 },
            { cx: 68, cy: 75, rx: 52 },
            { cx: 74, cy: 90, rx: 56 },
          ].map((d, i) => (
            <ellipse key={i} cx={d.cx} cy={d.cy} rx={d.rx} ry={d.rx * 0.22} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={0.22 + i * 0.18} />
          ))}
        </>
      )}

      {variant === 8 && (
        // dome: wide top, narrow bottom (inverted)
        <>
          {[
            { cy: 30, rx: 56, op: 0.95 },
            { cy: 45, rx: 52, op: 0.72 },
            { cy: 60, rx: 48, op: 0.55 },
            { cy: 75, rx: 44, op: 0.38 },
            { cy: 90, rx: 40, op: 0.22 },
          ].map((d, i) => (
            <ellipse key={i} cx={60} cy={d.cy} rx={d.rx} ry={d.rx * 0.22} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={d.op} />
          ))}
        </>
      )}

      {variant === 9 && (
        // funnel: dramatic taper top-to-bottom
        <>
          {[
            { cy: 25, rx: 56, op: 0.95 },
            { cy: 45, rx: 42, op: 0.75 },
            { cy: 65, rx: 28, op: 0.58 },
            { cy: 85, rx: 14, op: 0.42 },
            { cy: 100, rx: 6, op: 0.3 },
          ].map((d, i) => (
            <ellipse key={i} cx={60} cy={d.cy} rx={d.rx} ry={d.rx * 0.25} stroke={STROKE} strokeWidth="0.75" fill={STROKE} fillOpacity={0.05} opacity={d.op} />
          ))}
        </>
      )}
    </svg>
  );
}
