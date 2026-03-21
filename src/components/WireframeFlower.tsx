"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";
import * as THREE from "three";

function createPetalGeometry(
  widthSegments = 12,
  heightSegments = 16,
  curlAmount = 0.6,
  width = 1,
  height = 1.8
): THREE.BufferGeometry {
  const vertices: number[] = [];
  const indices: number[] = [];

  for (let iy = 0; iy <= heightSegments; iy++) {
    const v = iy / heightSegments;
    for (let ix = 0; ix <= widthSegments; ix++) {
      const u = ix / widthSegments;

      // Petal shape: wider in middle, tapered at tip and base
      const widthFactor = Math.sin(v * Math.PI) * width;
      const x = (u - 0.5) * widthFactor;

      // Height along petal
      const y = v * height;

      // Curl: petals curve outward and slightly back
      const curlFactor = v * v * curlAmount;
      const sideCurl = Math.abs(u - 0.5) * 2 * curlFactor * 0.3;
      const z = -curlFactor + sideCurl;

      vertices.push(x, y, z);
    }
  }

  for (let iy = 0; iy < heightSegments; iy++) {
    for (let ix = 0; ix < widthSegments; ix++) {
      const a = iy * (widthSegments + 1) + ix;
      const b = a + 1;
      const c = a + (widthSegments + 1);
      const d = c + 1;

      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function Petal({
  rotation,
  scale,
  tilt,
  color,
}: {
  rotation: number;
  scale: number;
  tilt: number;
  color: string;
}) {
  const geometry = useMemo(
    () => createPetalGeometry(10, 14, 0.7, 0.9, 1.6),
    []
  );

  return (
    <group
      rotation={[
        tilt,
        rotation,
        0,
      ]}
    >
      <mesh geometry={geometry} scale={scale}>
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

function InnerPetals({ color }: { color: string }) {
  const geometry = useMemo(
    () => createPetalGeometry(8, 10, 1.2, 0.5, 1.0),
    []
  );

  const count = 5;
  return (
    <group>
      {Array.from({ length: count }).map((_, i) => (
        <group
          key={i}
          rotation={[
            0.3 + Math.random() * 0.2,
            (i / count) * Math.PI * 2 + 0.15,
            0,
          ]}
        >
          <mesh geometry={geometry} scale={0.7}>
            <meshBasicMaterial
              color={color}
              wireframe
              transparent
              opacity={0.35}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Stem({ color }: { color: string }) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      pts.push(
        new THREE.Vector3(
          Math.sin(t * 0.8) * 0.3 * t,
          -t * 3.5,
          Math.cos(t * 0.5) * 0.15 * t
        )
      );
    }
    return pts;
  }, []);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 30, 0.03, 6, false]} />
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function CoreGlow({ color }: { color: string }) {
  return (
    <group position={[0, 0.3, 0]}>
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.3, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>
      <pointLight color={color} intensity={2} distance={5} />
    </group>
  );
}

function FlowerScene({ theme }: { theme: string }) {
  const groupRef = useRef<THREE.Group>(null);

  const isAccent = theme === "accent";

  const colors = {
    petal: isAccent ? "#8b5cf6" : "#c8d4f0",
    innerPetal: isAccent ? "#a78bfa" : "#dde4f5",
    stem: isAccent ? "#6366f1" : "#a0aac0",
    core: isAccent ? "#c4b5fd" : "#e8eeff",
  };

  const petalCount = 7;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Outer petals */}
        {Array.from({ length: petalCount }).map((_, i) => (
          <Petal
            key={`outer-${i}`}
            rotation={(i / petalCount) * Math.PI * 2}
            scale={1}
            tilt={0.15 + (i % 2) * 0.1}
            color={colors.petal}
          />
        ))}

        {/* Middle layer */}
        {Array.from({ length: petalCount }).map((_, i) => (
          <Petal
            key={`mid-${i}`}
            rotation={(i / petalCount) * Math.PI * 2 + 0.25}
            scale={0.8}
            tilt={0.35}
            color={colors.petal}
          />
        ))}

        {/* Inner petals */}
        <InnerPetals color={colors.innerPetal} />

        {/* Core glow */}
        <CoreGlow color={colors.core} />

        {/* Stem */}
        <Stem color={colors.stem} />
      </Float>
    </group>
  );
}

export default function WireframeFlower() {
  const theme =
    typeof window !== "undefined"
      ? document.documentElement.getAttribute("data-theme") || "accent"
      : "accent";

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <FlowerScene theme={theme} />
        <EffectComposer>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            radius={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
