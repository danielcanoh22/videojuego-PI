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
import { useTrojanGame } from "../../context/TrojanGameContext";
import { useUI } from "../../context/UIContext";
import { usePhishingGame } from "../../context/PhishingGameContext";

const PROXIMITY_THRESHOLD = 0.6;
const PHISHING_TRIGGER_POSITION = { x: -9.51, y: -6.06, z: 1.27 };
const PHISHING_SAFE_POSITION = { x: -8.56, y: -6.13, z: 2.66 };
const TROJAN_TRIGGER_POSITION = { x: -16.91, y: -5.08, z: -11.99 };

export const CharacterController = () => {
  const { state: uiState } = useUI();
  const { isGlobalActive } = uiState;
  const { openPhishingGame } = usePhishingGame();
  const { state, openHome, openQuestion } = useTrojanGame();
  const { gameState, enemies } = state;

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

  useFrame(({ camera }) => {
    if (
      !rb.current ||
      !container.current ||
      !character.current ||
      !cameraPosition.current ||
      !cameraTarget.current
    ) {
      return;
    }

    const playerPosition = rb.current.translation();

    const phishingDistance = Math.sqrt(
      (playerPosition.x - PHISHING_TRIGGER_POSITION.x) ** 2 +
        (playerPosition.y - PHISHING_TRIGGER_POSITION.y) ** 2 +
        (playerPosition.z - PHISHING_TRIGGER_POSITION.z) ** 2
    );
    if (phishingDistance < PROXIMITY_THRESHOLD) {
      openPhishingGame();
      rb.current.setTranslation(PHISHING_SAFE_POSITION, true);
      setAnimation("idle");
    }

    const trojanDistance = Math.sqrt(
      (playerPosition.x - TROJAN_TRIGGER_POSITION.x) ** 2 +
        (playerPosition.y - TROJAN_TRIGGER_POSITION.y) ** 2 +
        (playerPosition.z - TROJAN_TRIGGER_POSITION.z) ** 2
    );
    if (trojanDistance < PROXIMITY_THRESHOLD && gameState === "inactive") {
      openHome();
    }

    if (gameState === "running") {
      for (const enemy of enemies) {
        const enemyDistance = Math.sqrt(
          (playerPosition.x - enemy.x) ** 2 +
            (playerPosition.y - enemy.y) ** 2 +
            (playerPosition.z - enemy.z) ** 2
        );
        if (enemyDistance < PROXIMITY_THRESHOLD) {
          openQuestion(enemy);
          break;
        }
      }
    }

    if (!isGlobalActive) {
      const vel = rb.current.linvel();
      const movement = { x: 0, z: 0 };
      const speed = get().run ? RUN_SPEED : WALK_SPEED;

      if (get().forward) movement.z = 1;
      if (get().backward) movement.z = -1;
      if (get().left) movement.x = 1;
      if (get().right) movement.x = -1;

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
        setAnimation(speed === RUN_SPEED ? "run" : "walk");
      } else {
        setAnimation("idle");
      }

      character.current.rotation.y = lerpAngle(
        character.current.rotation.y,
        characterRotationTarget.current,
        0.1
      );

      rb.current.setLinvel(vel, true);
    }

    container.current.rotation.y = MathUtils.lerp(
      container.current.rotation.y,
      rotationTarget.current,
      0.1
    );

    cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 0.1);

    cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
    cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);

    camera.lookAt(cameraLookAt.current);
  });

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
    </>
  );
};
