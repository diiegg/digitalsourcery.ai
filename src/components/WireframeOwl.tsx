"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Helper: THREE.Line from points
function makeLine(
  points: THREE.Vector3[],
  color: string,
  opacity: number
): THREE.Line {
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
  return new THREE.Line(geo, mat);
}

// ─── CRESCENT — one half of the Pisces symbol ───
function Crescent({
  position,
  flip,
  color,
}: {
  position: [number, number, number];
  flip: boolean;
  color: string;
}) {
  const crescentLine = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 80;
    const dir = flip ? -1 : 1;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = -Math.PI * 0.7 + t * Math.PI * 1.4; // arc sweep
      const r = 0.65;
      const x = dir * (Math.cos(angle) * r - r * 0.15);
      const y = Math.sin(angle) * r;
      // Subtle 3D curvature — push center forward
      const z = Math.sin(t * Math.PI) * 0.12;
      pts.push(new THREE.Vector3(x, y, z));
    }

    return makeLine(pts, color, 0.85);
  }, [flip, color]);

  // Thinner secondary crescent for depth
  const innerCrescent = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 60;
    const dir = flip ? -1 : 1;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = -Math.PI * 0.55 + t * Math.PI * 1.1;
      const r = 0.5;
      const x = dir * (Math.cos(angle) * r - r * 0.1);
      const y = Math.sin(angle) * r;
      const z = Math.sin(t * Math.PI) * 0.08 + 0.03;
      pts.push(new THREE.Vector3(x, y, z));
    }

    return makeLine(pts, color, 0.2);
  }, [flip, color]);

  return (
    <group position={position}>
      <primitive object={crescentLine} />
      <primitive object={innerCrescent} />
    </group>
  );
}

// ─── HORIZONTAL BRIDGE — the line connecting both crescents ───
function Bridge({ color }: { color: string }) {
  const bridgeLine = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 40;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = -0.55 + t * 1.1;
      const y = 0;
      // Very subtle 3D bow
      const z = Math.sin(t * Math.PI) * 0.04;
      pts.push(new THREE.Vector3(x, y, z));
    }

    return makeLine(pts, color, 0.7);
  }, [color]);

  return <primitive object={bridgeLine} />;
}

// ─── SUBTLE GLOW POINTS at crescent tips ───
function GlowPoints({ color }: { color: string }) {
  const points: [number, number, number][] = [
    [-0.52, 0.58, 0.04],
    [-0.52, -0.58, 0.04],
    [0.52, 0.58, 0.04],
    [0.52, -0.58, 0.04],
  ];

  return (
    <group>
      {points.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

// ─── VERY SUBTLE outer rings — just a whisper of the owl face ───
function SubtleRings({ color }: { color: string }) {
  return (
    <group>
      {/* Left eye hint */}
      <mesh position={[-0.38, 0, 0.02]}>
        <ringGeometry args={[0.68, 0.695, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Right eye hint */}
      <mesh position={[0.38, 0, 0.02]}>
        <ringGeometry args={[0.68, 0.695, 64]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function OwlScene({ theme }: { theme: string }) {
  const groupRef = useRef<THREE.Group>(null);

  const isAccent = theme === "accent";

  const colors = {
    symbol: isAccent ? "#c9daed" : "#d4daf0",
    glow: isAccent ? "#e4edf8" : "#e8eeff",
    subtle: isAccent ? "#8ea8c4" : "#a0aac0",
  };

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      // Very gentle sway to reveal 3D depth
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.12;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={0.3} rotationIntensity={0.02} floatIntensity={0.08}>
        {/* Left crescent */}
        <Crescent position={[-0.38, 0, 0]} flip={false} color={colors.symbol} />

        {/* Right crescent */}
        <Crescent position={[0.38, 0, 0]} flip={true} color={colors.symbol} />

        {/* Horizontal bridge */}
        <Bridge color={colors.symbol} />

        {/* Glow at crescent tips */}
        <GlowPoints color={colors.glow} />

        {/* Very subtle outer rings */}
        <SubtleRings color={colors.subtle} />

        {/* Center glow — where bridge crosses */}
        <mesh position={[0, 0, 0.02]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color={colors.glow} transparent opacity={0.5} />
        </mesh>

        {/* Ambient light from center */}
        <pointLight
          color={colors.glow}
          intensity={0.4}
          distance={4}
          position={[0, 0, 0.5]}
        />
      </Float>
    </group>
  );
}

export default function WireframeOwl() {
  const theme =
    typeof window !== "undefined"
      ? document.documentElement.getAttribute("data-theme") || "accent"
      : "accent";

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <OwlScene theme={theme} />
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.08}
            luminanceSmoothing={0.95}
            radius={0.9}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
