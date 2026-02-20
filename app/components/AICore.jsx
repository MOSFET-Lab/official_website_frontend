"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Generate particle positions once, outside the component
const generateParticles = (count) => {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    const distance = 1.5 + Math.random() * 0.2; // Sphere radius

    pos[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
    pos[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
    pos[i * 3 + 2] = distance * Math.cos(theta);
  }
  return pos;
};

function Scene() {
  const points = useRef();
  const particlesCount = 8000;

  // useMemo now only returns the precomputed positions
  const positions = useMemo(() => generateParticles(particlesCount), []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.2;
    points.current.rotation.x = time * 0.1;
    points.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#406ae8"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function AICore() {
  return (
    <div className="mt-10 w-full h-full absolute inset-0 rounded-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Scene />
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffaa00" />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" />
    </div>
  );
}
