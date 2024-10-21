import {useEffect} from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

useGLTF.preload("/animated_drone.glb");


export default function Model() {
  const {animations, scene} = useGLTF("/animated_drone.glb");
  const {actions} = useAnimations(animations, scene);

  useEffect(() => {
    console.log(actions);
    actions["exploded_view"]?.play()
  }, [])
  

  return (
    <group scale={30} position={-2.5}>
      <primitive object={scene} />
    </group>
  )
}