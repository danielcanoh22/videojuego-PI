import { Environment, OrthographicCamera } from "@react-three/drei";
import { OrthographicCamera as ThreeOrthographicCamera } from "three";
import { Physics } from "@react-three/rapier";
import { useRef } from "react";
import { Map } from "./Map";
import { CharacterController } from "@/features/character/CharacterController";
import { useTrojanGame } from "@/context/TrojanGameContext";
import { EnemySpawner } from "@/features/trojan/EnemySpawner";

const maps: Record<
  string,
  { scale: number; position: [number, number, number] }
> = {
  map2: {
    scale: 0.4,
    position: [-9, -6.2, -1],
  },
};

const MAP_NAME = "map2";

export const Experience = () => {
  const shadowCameraRef = useRef<ThreeOrthographicCamera>(null);

  const { state } = useTrojanGame();
  const { gameState } = state;
  const isGameActive = gameState === "running";

  return (
    <>
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.65}
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>

      <Physics key={MAP_NAME}>
        <Map
          scale={maps[MAP_NAME].scale}
          position={maps[MAP_NAME].position}
          model={`/assets/models/${MAP_NAME}.glb`}
        />
        <CharacterController />
        {isGameActive && <EnemySpawner />}
      </Physics>
    </>
  );
};
