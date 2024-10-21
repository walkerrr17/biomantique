import {useEffect} from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/animated_drone.glb");


export default function Model() {
  const group = useRef<Group>(null);
  const {animations, scene} = useGLTF("/animated_drone.glb");
  const {actions} = useAnimations(animations, scene);

  useEffect(() => {
    console.log(actions);
    actions["exploded_view"]?.play()
  }, [])
  

  return (
    <group ref={group} scale={30} position={-2.5}>
      <primitive object={scene} />
    </group>
  )
}