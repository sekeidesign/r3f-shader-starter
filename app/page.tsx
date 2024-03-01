'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';
import * as THREE from 'three';
import { useTweaks } from 'use-tweaks';

function Shader(props: any) {
  const shaderRef = useRef<THREE.ShaderMaterial | null>(null);
  const { viewport } = useThree();
  const { opacity } = useTweaks({
    opacity: { value: 1, min: 0, max: 1, step: 0.05 },
  });
  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value += 0.01;
      shaderRef.current.uniforms.uOpacity.value = opacity;
      shaderRef.current.uniforms.uPointer.value = state.pointer;
      // console.log(opacity);
    }
  });

  return (
    <mesh {...props}>
      <planeGeometry args={[viewport.width, viewport.height, 10]} />
      <shaderMaterial
        ref={shaderRef}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          uTime: { value: 0.0 },
          uPointer: { value: new THREE.Vector2(0.5, 0.5) },
          uOpacity: { value: 0.0 },
        }}
      />
    </mesh>
  );
}

export default function Home() {
  return (
    <main className="h-screen">
      <Canvas orthographic>
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Shader props={{ position: [0, 0, 0] }} />
      </Canvas>
    </main>
  );
}
