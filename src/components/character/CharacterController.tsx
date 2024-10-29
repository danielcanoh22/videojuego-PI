import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
import { useRef, useState } from "react";
import { MathUtils, Vector3, Group } from "three";
import { Character } from "./Character";
import { lerpAngle } from "../../utils/utils";
import { ROTATION_SPEED, RUN_SPEED, WALK_SPEED } from "../../utils/constants";
import { useGame } from "../../context/GameContext";
import { Enemy } from "../../types";

export const CharacterController = () => {
  const {
    openPhishingGame,
    isActiveGame,
    enemies,
    openModal,
    showModal,
    setClosestEnemy,
  } = useGame();

  const rb = useRef<RapierRigidBody | null>(null);
  const container = useRef<Group | null>(null);
  const character = useRef<Group | null>(null);

  const [animation, setAnimation] = useState("idle");

  const characterRotationTarget = useRef(0);
  const rotationTarget = useRef(0);
  const cameraTarget = useRef<Group | null>(null);
  const cameraPosition = useRef<Group | null>(null);
  const cameraWorldPosition = useRef<Vector3>(new Vector3());
  const cameraLookAtWorldPosition = useRef<Vector3>(new Vector3());
  const cameraLookAt = useRef<Vector3>(new Vector3());
  const [, get] = useKeyboardControls();

  // Coordenada objetivo
  // const targetPosition2 = { x: -15.21, y: -6.00, z: 0.35 };
  const targetPosition = { x: -9.51, y: -6.06, z: 1.27 };
  const proximityThreshold = 0.6; // Definir un umbral de cercanía
  const newSafePosition = { x: -8.56, y: -6.13, z: 2.66 };

  useFrame(() => {
    if (rb.current) {
      const pos = rb.current.translation();
      // console.log({
      //   x: pos.x.toFixed(2),
      //   y: pos.y.toFixed(2),
      //   z: pos.z.toFixed(2),
      // });

      // Calcular distancia entre el personaje y la coordenada objetivo
      const distance = Math.sqrt(
        (pos.x - targetPosition.x) ** 2 +
          (pos.y - targetPosition.y) ** 2 +
          (pos.z - targetPosition.z) ** 2
      );

      // Si está lo suficientemente cerca, mostrar el modal
      if (distance < proximityThreshold) {
        openPhishingGame();

        // Mover al personaje a la nueva ubicación segura
        rb.current.setTranslation(
          { x: newSafePosition.x, y: newSafePosition.y, z: newSafePosition.z },
          true
        );

        setAnimation("idle");
      }
    }
  });

  useFrame(() => {
    if (rb.current) {
      const playerPosition = rb.current.translation();
      enemies.forEach((enemy) => {
        const distance = Math.sqrt(
          (playerPosition.x - enemy.x) ** 2 +
            (playerPosition.y - enemy.y) ** 2 +
            (playerPosition.z - enemy.z) ** 2
        );

        const proximityThreshold = 0.6; // Umbral de proximidad para activar el modal

        if (distance < proximityThreshold && !showModal) {
          setClosestEnemy(enemy);
          openModal();
        }
      });
    }
  });

  useFrame(({ camera }) => {
    if (!isActiveGame) {
      // Personaje
      if (rb.current) {
        const vel = rb.current.linvel();

        const movement = {
          x: 0,
          z: 0,
        };

        if (get().forward) {
          movement.z = 1;
        }
        if (get().backward) {
          movement.z = -1;
        }

        const speed = get().run ? RUN_SPEED : WALK_SPEED;

        if (get().left) {
          movement.x = 1;
        }
        if (get().right) {
          movement.x = -1;
        }

        if (movement.x !== 0) {
          rotationTarget.current += ROTATION_SPEED * movement.x;
        }

        if (movement.x !== 0 || movement.z !== 0) {
          characterRotationTarget.current = Math.atan2(movement.x, movement.z);
          vel.x =
            Math.sin(rotationTarget.current + characterRotationTarget.current) *
            speed;
          vel.z =
            Math.cos(rotationTarget.current + characterRotationTarget.current) *
            speed;
          if (speed === RUN_SPEED) {
            setAnimation("run");
          } else {
            setAnimation("walk");
          }
        } else {
          setAnimation("idle");
        }
        character.current!.rotation.y = lerpAngle(
          character.current!.rotation.y,
          characterRotationTarget.current,
          0.1
        );

        rb.current.setLinvel(vel, true);
      }
    }

    // Cámara
    container.current!.rotation.y = MathUtils.lerp(
      container.current!.rotation.y,
      rotationTarget.current,
      0.1
    );

    cameraPosition.current!.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 0.1);

    if (cameraTarget.current) {
      cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
      cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

      camera.lookAt(cameraLookAt.current);
    }
  });
  // -0.1
  return (
    <>
      <RigidBody colliders={false} lockRotations ref={rb}>
        <group ref={container}>
          <group ref={cameraTarget} position-z={1.5} />
          <group ref={cameraPosition} position-y={2} position-z={-3} />
          <group ref={character}>
            <Character scale={0.35} position-y={0} animation={animation} />
          </group>
        </group>
        <CapsuleCollider args={[0.15, 0.15]} />
      </RigidBody>

      {/* Mostrar modal si el personaje está cerca de la coordenada */}
      {/* {showModal && <Modal onClose={() => setShowModal(false)} />} */}
    </>
  );
};
