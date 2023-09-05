"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree  } from '@react-three/fiber'
import { MeshPhysicalMaterial } from 'three';
import * as THREE from "three";
import { Sky, Torus } from "@react-three/drei"
import { useGLTF, Stats, OrbitControls, SpotLight } from '@react-three/drei'


const Bulb = (props:any) => {
    const ref:any = useRef();

    useFrame((state, delta) => {
        ref.current.children[1].rotation.y -= (delta/5);
        ref.current.children[2].rotation.y += (delta/4);
    })

    const bulb = useGLTF('/models/SCAILogo8.glb');

    return (
        <>
         <primitive ref={ref} position={[0,-2,0]} scale={40} object={bulb.scene} />
        </>
       
    )
}

const ScaiLogo = () => {

    const [active, activate] = useState(false);

    //<Sky azimuth={0.1} turbidity={5} rayleigh={0.5} inclination={.6} distance={1000} />
    //<pointLight position={[0, 2, 4]} args={["0xffffff", 3, 0, 1]} />
    //<ambientLight />
    return (
        <div className="w-[600px] h-[600px] m-auto">
            <Canvas camera={{ position: [0, 0, 6]}} className=' '>
                <Bulb/>
                <ambientLight intensity={4} />
                <pointLight intensity={1} position={[5, 5, 5]} />
                <OrbitControls/> 
                <Stats/>
            </Canvas>
        </div>
    )
}

//useGLTF.preload('/models/temp.glb');
export default ScaiLogo;