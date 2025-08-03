"use client";
import { useGLTF } from "@react-three/drei";

type IronManModelProps = {
  scale?: number;
};

export default function IronManModel({ scale = 1 }: IronManModelProps) {
  const { scene } = useGLTF("/models/iron_man.glb");

 

  return (
    <primitive
      object={scene}
      scale={scale}
      position={[0, -10, 0]} 
      rotation={[0, Math.PI, 0]} // ✅ Rotate if facing backward
    />
  );
}
