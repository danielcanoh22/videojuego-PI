import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Group, Mesh } from "three";
import { useEffect, useRef } from "react";

export interface MapProps {
  model: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
}

export const Map = ({ model, ...props }: MapProps) => {
  const { scene, animations } = useGLTF(model);
  const group = useRef<Group>();
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        (child as Mesh).castShadow = true;
        (child as Mesh).receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (actions && animations.length > 0) {
      const firstAnimation = animations[0];
      if (firstAnimation) {
        actions[firstAnimation.name]?.play();
      }
    }
  }, [actions, animations]);

  return (
    <group>
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={scene} {...props} ref={group} />
      </RigidBody>
    </group>
  );
};
