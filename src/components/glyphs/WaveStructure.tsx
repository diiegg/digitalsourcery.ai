interface Props {
  size?: number;
  className?: string;
  variant?: 0 | 1 | 2;
  ariaLabel?: string;
}

export default function WaveStructure({ size = 120, className, variant = 0, ariaLabel = "Continuous flow" }: Props) {
  const phaseShift = variant * 0.7;

  const waves = [
    { y: 25, amplitude: 7, phase: 0 + phaseShift, opacity: 0.28 },
    { y: 45, amplitude: 9, phase: 0.5 + phaseShift, opacity: 0.5 },
    { y: 65, amplitude: 11, phase: 1.0 + phaseShift, opacity: 0.78 },
    { y: 85, amplitude: 9, phase: 1.5 + phaseShift, opacity: 0.5 },
    { y: 105, amplitude: 7, phase: 2.0 + phaseShift, opacity: 0.28 },
  ];

  const generatePath = (y: number, amp: number, phase: number) => {
    const points: string[] = [];
    for (let x = 0; x <= 120; x += 3) {
      const yVal = y + Math.sin((x / 120) * Math.PI * 2 + phase) * amp;
      points.push(`${x === 0 ? "M" : "L"}${x},${yVal.toFixed(2)}`);
    }
    return points.join(" ");
  };

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
      {waves.map((w, i) => (
        <path
          key={i}
          d={generatePath(w.y, w.amplitude, w.phase)}
          stroke="#c8d0e0"
          strokeWidth="0.75"
          fill="none"
          opacity={w.opacity}
        />
      ))}
    </svg>
  );
}
