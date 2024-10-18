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
import Bullet from "./Bullet";

export const CharacterController = () => {
  const { openPhishingGame, isActivePhishing } = useGame();

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

  const [bullets, setBullets] = useState([]); // Estado para las bolitas
  const [canShoot, setCanShoot] = useState(true);
  const [lastShotTime, setLastShotTime] = useState(0);

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

  useFrame(({ camera }) => {
    if (!isActivePhishing) {
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

    const currentTime = Date.now();

    // // Disparo de bolitas
    if (rb.current && get().shoot && currentTime - lastShotTime > 2000) {
      // 500 ms de espera entre disparos
      // Obtener la rotación actual del personaje
      const rotation = character.current.rotation.y; // Rotación en el eje Y
      const direction = new Vector3(
        Math.sin(rotation), // Calcula la dirección X
        0, // La dirección Y será 0 porque el proyectil se mueve en el plano XZ
        Math.cos(rotation) // Calcula la dirección Z
      ).normalize(); // Normaliza la dirección

      const position = rb.current.translation(); // Posición actual del personaje

      // Agregar una nueva bolita al estado
      setBullets((prev) => [
        ...prev,
        {
          position: new Vector3(position.x, position.y, position.z),
          direction,
        },
      ]);

      setLastShotTime(currentTime); // Actualiza el tiempo del último disparo
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

      {/* Renderiza las bolitas disparadas */}
      {bullets.map((bullet, index) => (
        <Bullet
          key={index}
          position={bullet.position}
          direction={bullet.direction}
          onRemove={() =>
            setBullets((prev) => prev.filter((_, i) => i !== index))
          }
        />
      ))}
    </>
  );
};
