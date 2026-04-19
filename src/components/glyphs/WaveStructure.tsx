interface Props {
  size?: number;
  className?: string;
  variant?: number;
  ariaLabel?: string;
}

const STROKE = "#c8d0e0";

function sineP(y: number, amp: number, phase: number, ampMul: (x: number) => number = () => 1): string {
  const points: string[] = [];
  for (let x = 0; x <= 120; x += 3) {
    const yVal = y + Math.sin((x / 120) * Math.PI * 2 + phase) * amp * ampMul(x);
    points.push(`${x === 0 ? "M" : "L"}${x},${yVal.toFixed(2)}`);
  }
  return points.join(" ");
}

export default function WaveStructure({ size = 120, className, variant = 0, ariaLabel = "Continuous flow" }: Props) {
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
        // sine 5-line
        <>
          {[
            { y: 25, amp: 7, phase: 0, op: 0.28 },
            { y: 45, amp: 9, phase: 0.5, op: 0.5 },
            { y: 65, amp: 11, phase: 1.0, op: 0.78 },
            { y: 85, amp: 9, phase: 1.5, op: 0.5 },
            { y: 105, amp: 7, phase: 2.0, op: 0.28 },
          ].map((w, i) => (
            <path key={i} d={sineP(w.y, w.amp, w.phase)} stroke={STROKE} strokeWidth="0.75" fill="none" opacity={w.op} />
          ))}
        </>
      )}

      {variant === 1 && (
        // cosine: phase-shifted parallel waves
        <>
          {[
            { y: 35, amp: 12, phase: Math.PI / 2 },
            { y: 60, amp: 12, phase: Math.PI },
            { y: 85, amp: 12, phase: Math.PI * 1.5 },
          ].map((w, i) => (
            <path key={i} d={sineP(w.y, w.amp, w.phase)} stroke={STROKE} strokeWidth="0.85" fill="none" opacity={0.7 - i * 0.1} />
          ))}
        </>
      )}

      {variant === 2 && (
        // decay: amplitude decreases from left to right
        <>
          {[35, 60, 85].map((y, i) => (
            <path key={i} d={sineP(y, 18, 0, (x) => 1 - x / 130)} stroke={STROKE} strokeWidth="0.85" fill="none" opacity={0.75 - i * 0.15} />
          ))}
        </>
      )}

      {variant === 3 && (
        // packet: 3 wave bursts with quiet between
        <>
          {[35, 60, 85].map((y, i) => (
            <path key={i} d={sineP(y, 14, 0, (x) => Math.exp(-Math.pow((x - 60) / 25, 2)))} stroke={STROKE} strokeWidth="0.9" fill="none" opacity={0.75 - i * 0.15} />
          ))}
        </>
      )}

      {variant === 4 && (
        // spiral: spiraling wave path
        <>
          {(() => {
            const pts: string[] = [];
            for (let t = 0; t < 6.5; t += 0.1) {
              const r = 8 + t * 6;
              const x = 60 + Math.cos(t) * r;
              const y = 60 + Math.sin(t) * r;
              pts.push(`${t === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
            }
            return <path d={pts.join(" ")} stroke={STROKE} strokeWidth="0.85" fill="none" opacity={0.85} />;
          })()}
        </>
      )}

      {variant === 5 && (
        // double-helix: two interlocking sine waves
        <>
          <path d={sineP(60, 22, 0)} stroke={STROKE} strokeWidth="0.9" fill="none" opacity={0.85} />
          <path d={sineP(60, 22, Math.PI)} stroke={STROKE} strokeWidth="0.9" fill="none" opacity={0.7} />
          {Array.from({ length: 7 }).map((_, i) => {
            const x = 15 + i * 15;
            const y1 = 60 + Math.sin((x / 120) * Math.PI * 2) * 22;
            const y2 = 60 + Math.sin((x / 120) * Math.PI * 2 + Math.PI) * 22;
            return <line key={i} x1={x} y1={y1} x2={x} y2={y2} stroke={STROKE} strokeWidth="0.4" opacity={0.3} />;
          })}
        </>
      )}

      {variant === 6 && (
        // square-wave: stepped pattern
        <>
          {[40, 60, 80].map((y, i) => {
            const pts: string[] = [];
            const step = 20;
            const amp = 12;
            for (let x = 0; x <= 120; x += step) {
              const yVal = y + (Math.floor(x / step) % 2 === 0 ? -amp : amp);
              pts.push(`${x === 0 ? "M" : "L"}${x},${yVal}`);
              if (x + step <= 120) pts.push(`L${x + step},${yVal}`);
            }
            return <path key={i} d={pts.join(" ")} stroke={STROKE} strokeWidth="0.85" fill="none" opacity={0.75 - i * 0.15} />;
          })}
        </>
      )}

      {variant === 7 && (
        // breathing: radial expanding waves
        <>
          {[16, 28, 40, 52].map((r, i) => (
            <circle key={i} cx={60} cy={60} r={r} stroke={STROKE} strokeWidth="0.75" fill="none" opacity={0.7 - i * 0.12} strokeDasharray={`${4 + i * 2} ${3 + i * 2}`} />
          ))}
          <circle cx={60} cy={60} r={4} fill={STROKE} fillOpacity={0.3} stroke={STROKE} strokeWidth="0.75" />
        </>
      )}

      {variant === 8 && (
        // zigzag: sharp angular waves
        <>
          {[35, 60, 85].map((y, i) => {
            const pts: string[] = [];
            const step = 15;
            const amp = 10;
            for (let x = 0; x <= 120; x += step) {
              const yVal = y + (Math.floor(x / step) % 2 === 0 ? -amp : amp);
              pts.push(`${x === 0 ? "M" : "L"}${x},${yVal}`);
            }
            return <path key={i} d={pts.join(" ")} stroke={STROKE} strokeWidth="0.85" fill="none" opacity={0.75 - i * 0.15} />;
          })}
        </>
      )}

      {variant === 9 && (
        // flowing: single elegant curve through canvas
        <>
          <path d="M0 90 Q30 30 60 60 T120 30" stroke={STROKE} strokeWidth="1.4" fill="none" opacity={0.9} />
          <path d="M0 100 Q30 50 60 75 T120 50" stroke={STROKE} strokeWidth="0.6" fill="none" opacity={0.45} />
          <path d="M0 110 Q30 70 60 90 T120 70" stroke={STROKE} strokeWidth="0.4" fill="none" opacity={0.25} />
        </>
      )}
    </svg>
  );
}
