"use client"
import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";

import dynamic from "next/dynamic";


const IronManModel = dynamic(() => import("./IronManModel"), {
  ssr: false,
});
const IronManCanvas = () => {
  return (
      <Canvas camera={{ position: [1, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} castShadow />
        <spotLight
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        <OrbitControls  autoRotate autoRotateSpeed={5} />
        <IronManModel scale={0.005} />
        <Environment preset="sunset" background={false} />
      </Canvas>
      
  )
}

export default IronManCanvas