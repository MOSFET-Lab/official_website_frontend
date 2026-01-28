"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  const points = useRef();

  // Create a sphere of particles
  const particlesCount = 8000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 
      const distance = 1.5 + Math.random() * 0.2; // Sphere radius

      pos[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = distance * Math.cos(theta);
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.2;
    points.current.rotation.x = time * 0.1;
    // Pulsing effect
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
        color="#406ae8" // Glowing Orange/Red like your image
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function AICore() {
  return (
    <div className="mt-10 w-full h-full absolute inset-0 rounded-full overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Scene />
        {/* Adds the glow light in the center */}
        <pointLight position={[0, 0, 0]} intensity={2} color="#ffaa00" />
      </Canvas>
      {/* Central "Pause" Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-orange-500/10"> */}
           {/* <span className="text-white font-bold tracking-widest text-xs">PAUSE</span> */}
        </div>
      </div>
    
  );
}