import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { CharacterProps } from "@/types/global";

export function Character({ animation, ...props }: CharacterProps) {
  const group = useRef<THREE.Group>();
  const { scene, animations } = useGLTF("/assets/models/cupguy.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions[animation]) {
      actions[animation].reset().fadeIn(0.24).play();
    }

    return () => {
      if (actions && actions[animation]) {
        actions[animation].fadeOut(0.24);
      }
    };
  }, [animation, actions]);

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/assets/models/cupguy.glb");
