import { useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { Enemy } from "./Enemy";

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

export const EnemyController = ({
  coordinates,
}: {
  coordinates: Coordinates;
}) => {
  const { x, y, z } = coordinates;
  const rb = useRef<RapierRigidBody | null>(null);
  const container = useRef<Group | null>(null);
  const character = useRef<Group | null>(null);

  const [animation, setAnimation] = useState("idle");

  // useFrame(() => {
  //   if (rb.current) {
  //     const pos = rb.current.translation();
  //         // console.log({
  //         //   x: pos.x.toFixed(2),
  //         //   y: pos.y.toFixed(2),
  //         //   z: pos.z.toFixed(2),
  //         // });

  //     // Calcular distancia entre el personaje y la coordenada objetivo
  //     // const distance = Math.sqrt(
  //     //   (pos.x - x) ** 2 +
  //     //     (pos.y - y) ** 2 +
  //     //     (pos.z - z) ** 2
  //     // );

  //     // Si está lo suficientemente cerca, mostrar el modal
  //     //if (distance < proximityThreshold) {
  //     //  openPhishingGame();

  //       // Mover al personaje a la nueva ubicación segura
  //    //   rb.current.setTranslation(
  //    //     { x: newSafePosition.x, y: newSafePosition.y, z: newSafePosition.z },
  //    //     true
  //    //   );

  //    //   setAnimation("idle");
  //    // }
  //   }
  // });

  return (
    <>
      <RigidBody
        colliders={false}
        lockRotations
        ref={rb}
        position={new Vector3(x, y, z)}
        type="fixed"
      >
        <group ref={container}>
          <group ref={character}>
            <Enemy scale={0.35} animation={animation} />
          </group>
        </group>
        <CapsuleCollider args={[0.15, 0.15]} />
      </RigidBody>

      {/* Mostrar modal si el personaje está cerca de la coordenada */}
      {/* {showModal && <Modal onClose={() => setShowModal(false)} />} */}
    </>
  );
};
