import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CharacterProps } from "../../types";

export function Enemy({ animation, ...props }: CharacterProps) {
  // const group = useRef<THREE.Group>();
  const { scene } = useGLTF("/assets/models/small_creature_-_mint.glb");
  // const { actions } = useAnimations(animations, group);

  // useEffect(() => {
  //   if (actions && actions[animation]) {
  //     actions[animation].reset().fadeIn(0.24).play();
  //   }

  //   return () => {
  //     if (actions && actions[animation]) {
  //       actions[animation].fadeOut(0.24);
  //     }
  //   };
  // }, [animation, actions]);

  // return <primitive object={scene} {...props} />;

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

useGLTF.preload("/assets/models/small_creature_-_chili.glb");
