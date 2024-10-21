'use client'

import { Canvas, useThree } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";

export default function Scene() {
  return (
    <Canvas className="h-svh">
      <directionalLight position={[10,10,10]} intensity={2} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}