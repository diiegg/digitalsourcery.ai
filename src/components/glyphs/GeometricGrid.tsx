interface Props {
  size?: number;
  className?: string;
  variant?: number;
  ariaLabel?: string;
}

const STROKE = "#c8d0e0";

export default function GeometricGrid({ size = 120, className, variant = 0, ariaLabel = "Network topology" }: Props) {
  // Pre-compute data for variants that need iteration
  const grid4x4: { x: number; y: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      grid4x4.push({ x: 18 + col * 28, y: 18 + row * 28 });
    }
  }

  const grid3x3: { x: number; y: number }[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      grid3x3.push({ x: 22 + col * 38, y: 22 + row * 38 });
    }
  }
  const denseEdges: [number, number][] = [];
  for (let i = 0; i < grid3x3.length; i++) {
    for (let j = i + 1; j < grid3x3.length; j++) {
      const dx = Math.abs(grid3x3[i].x - grid3x3[j].x);
      const dy = Math.abs(grid3x3[i].y - grid3x3[j].y);
      if ((dx === 38 && dy === 0) || (dx === 0 && dy === 38) || (dx === 38 && dy === 38)) {
        denseEdges.push([i, j]);
      }
    }
  }

  const hex = [
    { x: 60, y: 60 },
    { x: 60, y: 30 },
    { x: 86, y: 45 },
    { x: 86, y: 75 },
    { x: 60, y: 90 },
    { x: 34, y: 75 },
    { x: 34, y: 45 },
  ];

  const spokes = Array.from({ length: 6 }).map((_, i) => {
    const angle = (i / 6) * Math.PI * 2;
    return { x: 60 + Math.cos(angle) * 40, y: 60 + Math.sin(angle) * 40 };
  });

  const asym = [
    { x: 25, y: 22, s: 4 },
    { x: 65, y: 30, s: 6 },
    { x: 95, y: 40, s: 3 },
    { x: 35, y: 55, s: 5 },
    { x: 78, y: 65, s: 4 },
    { x: 50, y: 85, s: 8 },
    { x: 20, y: 92, s: 3 },
    { x: 95, y: 98, s: 4 },
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
      {variant === 0 && (
        // 4x4 grid with central hub + corner edges
        <>
          {[0, 3, 12, 15].map((idx) => (
            <line key={`e${idx}`} x1={60} y1={60} x2={grid4x4[idx].x} y2={grid4x4[idx].y} stroke={STROKE} strokeWidth="0.5" opacity={0.35} />
          ))}
          {grid4x4.map((p, i) => (
            <rect key={i} x={p.x - 2} y={p.y - 2} width={4} height={4} fill="none" stroke={STROKE} strokeWidth="0.75" opacity={0.7} />
          ))}
          <rect x={56} y={56} width={8} height={8} fill={STROKE} fillOpacity={0.18} stroke={STROKE} strokeWidth="1" />
        </>
      )}

      {variant === 1 && (
        // 3x3 hub
        <>
          {[0, 2, 6, 8].map((idx) => (
            <line key={`e${idx}`} x1={60} y1={60} x2={grid3x3[idx].x} y2={grid3x3[idx].y} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          ))}
          {grid3x3.map((p, i) => (
            <rect key={i} x={p.x - 3} y={p.y - 3} width={6} height={6} fill={i === 4 ? STROKE : "none"} fillOpacity={i === 4 ? 0.18 : 0} stroke={STROKE} strokeWidth={i === 4 ? "1" : "0.75"} opacity={0.75} />
          ))}
        </>
      )}

      {variant === 2 && (
        // hexagonal-lattice
        <>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <line key={`c${i}`} x1={hex[0].x} y1={hex[0].y} x2={hex[i].x} y2={hex[i].y} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          ))}
          {[1, 2, 3, 4, 5, 6].map((i) => {
            const next = i === 6 ? 1 : i + 1;
            return <line key={`o${i}`} x1={hex[i].x} y1={hex[i].y} x2={hex[next].x} y2={hex[next].y} stroke={STROKE} strokeWidth="0.5" opacity={0.25} />;
          })}
          {hex.map((p, i) => (
            <rect key={i} x={p.x - 3} y={p.y - 3} width={6} height={6} fill={i === 0 ? STROKE : "none"} fillOpacity={i === 0 ? 0.18 : 0} stroke={STROKE} strokeWidth={i === 0 ? "1" : "0.75"} opacity={0.85} />
          ))}
        </>
      )}

      {variant === 3 && (
        // radial-spokes: center + 6 endpoints
        <>
          {spokes.map((s, i) => (
            <line key={`s${i}`} x1={60} y1={60} x2={s.x} y2={s.y} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          ))}
          {spokes.map((s, i) => (
            <circle key={`n${i}`} cx={s.x} cy={s.y} r={3} fill={STROKE} fillOpacity={0.2} stroke={STROKE} strokeWidth="0.75" opacity={0.8} />
          ))}
          <circle cx={60} cy={60} r={5} fill={STROKE} fillOpacity={0.25} stroke={STROKE} strokeWidth="1" />
        </>
      )}

      {variant === 4 && (
        // branching-tree
        <>
          <line x1={60} y1={20} x2={60} y2={60} stroke={STROKE} strokeWidth="0.6" opacity={0.5} />
          <line x1={60} y1={60} x2={32} y2={80} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          <line x1={60} y1={60} x2={88} y2={80} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          <line x1={32} y1={80} x2={20} y2={100} stroke={STROKE} strokeWidth="0.5" opacity={0.35} />
          <line x1={32} y1={80} x2={44} y2={100} stroke={STROKE} strokeWidth="0.5" opacity={0.35} />
          <line x1={88} y1={80} x2={76} y2={100} stroke={STROKE} strokeWidth="0.5" opacity={0.35} />
          <line x1={88} y1={80} x2={100} y2={100} stroke={STROKE} strokeWidth="0.5" opacity={0.35} />
          <rect x={57} y={17} width={6} height={6} fill={STROKE} fillOpacity={0.18} stroke={STROKE} strokeWidth="1" />
          <circle cx={60} cy={60} r={2.5} fill={STROKE} />
          <circle cx={32} cy={80} r={2} fill={STROKE} opacity={0.8} />
          <circle cx={88} cy={80} r={2} fill={STROKE} opacity={0.8} />
          {[20, 44, 76, 100].map((x, i) => (
            <rect key={i} x={x - 2} y={98} width={4} height={4} fill="none" stroke={STROKE} strokeWidth="0.75" opacity={0.7} />
          ))}
        </>
      )}

      {variant === 5 && (
        // sparse-mesh
        <>
          <line x1={30} y1={30} x2={60} y2={60} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          <line x1={90} y1={30} x2={60} y2={60} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          <line x1={30} y1={90} x2={60} y2={60} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          <line x1={90} y1={90} x2={60} y2={60} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          {[
            { x: 30, y: 30 }, { x: 90, y: 30 },
            { x: 60, y: 60 },
            { x: 30, y: 90 }, { x: 90, y: 90 },
          ].map((n, i) => (
            <rect key={i} x={n.x - 3} y={n.y - 3} width={6} height={6} fill={i === 2 ? STROKE : "none"} fillOpacity={i === 2 ? 0.18 : 0} stroke={STROKE} strokeWidth={i === 2 ? "1" : "0.75"} opacity={0.8} />
          ))}
        </>
      )}

      {variant === 6 && (
        // dense-mesh: 3x3 with all adjacency edges
        <>
          {denseEdges.map(([a, b], i) => (
            <line key={`e${i}`} x1={grid3x3[a].x} y1={grid3x3[a].y} x2={grid3x3[b].x} y2={grid3x3[b].y} stroke={STROKE} strokeWidth="0.4" opacity={0.25} />
          ))}
          {grid3x3.map((p, i) => (
            <rect key={i} x={p.x - 3} y={p.y - 3} width={6} height={6} fill={i === 4 ? STROKE : "none"} fillOpacity={i === 4 ? 0.18 : 0} stroke={STROKE} strokeWidth={i === 4 ? "1" : "0.75"} opacity={0.75} />
          ))}
        </>
      )}

      {variant === 7 && (
        // asymmetric: irregular nodes converging on a hub
        <>
          {asym.slice(0, 5).concat(asym.slice(6)).map((n, i) => (
            <line key={`e${i}`} x1={n.x} y1={n.y} x2={50} y2={85} stroke={STROKE} strokeWidth="0.4" opacity={0.3} />
          ))}
          {asym.map((n, i) => (
            <rect key={i} x={n.x - n.s / 2} y={n.y - n.s / 2} width={n.s} height={n.s} fill={i === 5 ? STROKE : "none"} fillOpacity={i === 5 ? 0.18 : 0} stroke={STROKE} strokeWidth={i === 5 ? "1" : "0.7"} opacity={0.75} />
          ))}
        </>
      )}

      {variant === 8 && (
        // cross: plus pattern
        <>
          <line x1={60} y1={20} x2={60} y2={100} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          <line x1={20} y1={60} x2={100} y2={60} stroke={STROKE} strokeWidth="0.5" opacity={0.4} />
          <rect x={57} y={17} width={6} height={6} fill="none" stroke={STROKE} strokeWidth="0.75" opacity={0.7} />
          <rect x={57} y={97} width={6} height={6} fill="none" stroke={STROKE} strokeWidth="0.75" opacity={0.7} />
          <rect x={17} y={57} width={6} height={6} fill="none" stroke={STROKE} strokeWidth="0.75" opacity={0.7} />
          <rect x={97} y={57} width={6} height={6} fill="none" stroke={STROKE} strokeWidth="0.75" opacity={0.7} />
          <rect x={56} y={56} width={8} height={8} fill={STROKE} fillOpacity={0.2} stroke={STROKE} strokeWidth="1" />
        </>
      )}

      {variant === 9 && (
        // corner-star: top-left anchor with diagonals
        <>
          <line x1={20} y1={20} x2={100} y2={100} stroke={STROKE} strokeWidth="0.5" opacity={0.35} />
          <line x1={20} y1={20} x2={100} y2={20} stroke={STROKE} strokeWidth="0.5" opacity={0.35} />
          <line x1={20} y1={20} x2={20} y2={100} stroke={STROKE} strokeWidth="0.5" opacity={0.35} />
          <line x1={20} y1={20} x2={60} y2={100} stroke={STROKE} strokeWidth="0.5" opacity={0.3} />
          <line x1={20} y1={20} x2={100} y2={60} stroke={STROKE} strokeWidth="0.5" opacity={0.3} />
          <rect x={16} y={16} width={8} height={8} fill={STROKE} fillOpacity={0.2} stroke={STROKE} strokeWidth="1" />
          {[
            { x: 100, y: 100 }, { x: 100, y: 20 }, { x: 20, y: 100 },
            { x: 60, y: 100 }, { x: 100, y: 60 },
          ].map((n, i) => (
            <rect key={i} x={n.x - 2.5} y={n.y - 2.5} width={5} height={5} fill="none" stroke={STROKE} strokeWidth="0.7" opacity={0.6} />
          ))}
        </>
      )}
    </svg>
  );
}
