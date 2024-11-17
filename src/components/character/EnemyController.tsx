import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { Enemy } from "./Enemy";
import { Enemy as EnemyType } from "../../types";

export const EnemyController = ({
  coordinates,
}: {
  coordinates: EnemyType;
}) => {
  const { x, y, z } = coordinates;
  const rb = useRef<RapierRigidBody | null>(null);
  const container = useRef<Group | null>(null);
  const character = useRef<Group | null>(null);

  // @ts-expect-error Fix type
  const [animation, setAnimation] = useState("idle");

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
