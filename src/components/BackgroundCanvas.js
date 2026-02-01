import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// Floating particles component
function FloatingParticles() {
  const mesh = useRef();
  const light = useRef();

  // Generate random positions for particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.y = time * 0.15;
    }
    if (light.current) {
      light.current.position.x = Math.sin(time * 0.5) * 10;
      light.current.position.z = Math.cos(time * 0.5) * 10;
    }
  });

  return (
    <>
      <pointLight ref={light} intensity={0.5} color="#00ffff" position={[0, 0, 0]} />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#00ffff"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.6}
        />
      </points>
    </>
  );
}

// Animated geometric shapes
function GeometricShapes() {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = time * 0.1;
      groupRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-15, 5, -10]}>
          <torusGeometry args={[1, 0.3, 16, 32]} />
          <meshStandardMaterial color="#00ffff" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[15, -5, -15]}>
          <octahedronGeometry args={[1.5]} />
          <meshStandardMaterial color="#0080ff" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1} floatIntensity={3}>
        <mesh position={[0, 10, -20]}>
          <icosahedronGeometry args={[1]} />
          <meshStandardMaterial color="#8000ff" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-10, -8, -12]}>
          <tetrahedronGeometry args={[1.2]} />
          <meshStandardMaterial color="#ff0080" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
    </group>
  );
}

// Grid background
function GridBackground() {
  const gridRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gridRef.current) {
      gridRef.current.position.z = (time * 0.5) % 2;
    }
  });

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
      <planeGeometry args={[100, 100, 50, 50]} />
      <meshBasicMaterial 
        color="#001a1a" 
        wireframe 
        transparent 
        opacity={0.2}
      />
    </mesh>
  );
}

// Main Canvas component
const BackgroundCanvas = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 75
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#00ffff" />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={5000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5}
        />
        
        <FloatingParticles />
        <GeometricShapes />
        <GridBackground />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#000000', 20, 100]} />
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;

