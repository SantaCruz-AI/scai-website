"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useCubeTexture, useEnvironment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";


const Bulb = (props: any) => {
  const ref: any = useRef();

  const texture = useCubeTexture(
    ["px.png", "nx.png", "py.png", "ny.png", "nz.png", "pz.png"],
    { path: "envMap/" }
  );

  const bulb = useGLTF("/models/logo.glb");
  const base: any = bulb.scene.getObjectByName("Object_0001");
  const nodes: any = bulb.scene.getObjectByName("Cylinder001_1");
  const glassBalls: any = bulb.scene.getObjectByName("Cylinder001_2");
  const glassLogo: any = bulb.scene.getObjectByName("Circle001");

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0xfbff00),
    emissive: new THREE.Color(0xfbff00),
    emissiveIntensity: 0.2,
    roughness: 0.1,
    metalness: 0.3,
    transmission: 1,
    thickness: 0.4,
    envMap: texture,
    side: 0,
  });
  // 4287f5, 0044b0 
  const blueMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0x4287f5),
    emissive: new THREE.Color(0x4287f5),
    emissiveIntensity: 0.6,
    roughness: 0.2,
    metalness: 1,
    clearcoat: 1,
    envMap: texture,
    side: 2,
  });

  base["material"] = blueMaterial;
  base["material"].needsUpdate = true;

  nodes["material"] = blueMaterial;
  nodes["material"].needsUpdate = true;

  glassBalls["material"] = glassMaterial;
  glassBalls["material"].needsUpdate = true;

  glassLogo["material"] = glassMaterial;
  glassLogo["material"].needsUpdate = true;

  useFrame((state, delta) => {
    ref.current.children[0].children[3].rotation.y += delta / 2;
    ref.current.children[0].children[2].rotation.y -= delta / 3;
  });

  return (
    <>
      <primitive
        ref={ref}
        position={[0, -2, 0]}
        scale={2}
        object={bulb.scene}
      />
    </>
  );
};


const ScaiLogo = () => {

  //const envMap = useEnvironment({ path: "/envMap" });

  return (
    <div className="w-[250px] h-[250px] md:w-[600px] md:h-[600px]  m-auto">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={3} color={""} />
        <Bulb /> 
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ScaiLogo;
