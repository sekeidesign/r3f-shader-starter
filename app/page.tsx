'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';

type WindowSizeType = {
  width: number | undefined;
  height: number | undefined;
};

function Box({
  props,
  windowSize,
}: {
  props: any;
  windowSize: WindowSizeType;
}) {
  console.log(fragmentShader);
  return (
    <mesh {...props}>
      <planeGeometry args={[windowSize.width, windowSize.height, 10]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
      {/* <meshBasicMaterial color="red" /> */}
    </mesh>
  );
}

export default function Home() {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <main className="h-screen">
      <Canvas
        orthographic
        camera={{
          left: windowSize.width ?? 0 / -2,
          right: windowSize.width ?? 0 / 2,
          top: windowSize.height ?? 0 / 2,
          bottom: windowSize.height ?? 0 / -2,
          near: 0.1,
          far: 1000,
          position: [0, 0, 100],
        }}
      >
        <ambientLight intensity={Math.PI / 2} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box
          props={{ position: [0, 0, -10] }}
          windowSize={{ width: windowSize.width, height: windowSize.height }}
        />
      </Canvas>
      {/* {windowSize.width} x {windowSize.height} */}
    </main>
  );
}
