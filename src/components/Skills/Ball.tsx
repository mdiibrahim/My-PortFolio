"use client";
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload } from "@react-three/drei";
import Loader from "./Loader";
import * as THREE from "three";

// Define types for props
interface BallProps {
  imgUrl: { src: string };
}

interface BallCanvasProps {
  icon: { src: string };
}

const Ball: React.FC<BallProps> = ({ imgUrl }) => {
  // Use useLoader to load the texture efficiently
  const decal = useLoader(THREE.TextureLoader, imgUrl.src);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Remove the rotation to avoid flipping the icon */}
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} map={decal} />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: false }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
