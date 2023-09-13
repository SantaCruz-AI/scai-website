"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Stats,
  OrbitControls,
  useCubeTexture,
} from "@react-three/drei";
import { useEnvironment } from "@react-three/drei";
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
    color: new THREE.Color(0xffea00),
    emissive: new THREE.Color(0xffea00),
    emissiveIntensity: 0.3,
    roughness: 0.1,
    metalness: 0.4,
    transmission: 1,
    thickness: 0.3,
    envMap: texture,
    side: 0,
  });

  const blueMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0x0062ff),
    emissive: new THREE.Color(0x0062ff),
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

  useEffect(() => {
    console.log(ref.current);
  }, []);

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
  const [active, activate] = useState(false);

  //<pointLight intensity={10} position={[0, 5, 5]} />
  const envMap = useEnvironment({ path: "/envMap" });
  return (
    <div className="w-[600px] h-[600px] m-auto">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={1} />
        <Bulb />
        {/* <Stats /> */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

//useGLTF.preload('/models/temp.glb');
export default ScaiLogo;
