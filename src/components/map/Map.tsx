import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { MapProps } from "../../types";
import { Group, Mesh } from "three";

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
      {/* Genera automáticamente colisiones para todos los elementos del mapa */}
      <RigidBody type="fixed" colliders="trimesh">
        <primitive object={scene} {...props} ref={group} />
      </RigidBody>
    </group>
  );
};
