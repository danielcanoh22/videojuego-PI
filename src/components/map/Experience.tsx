import { Environment, OrthographicCamera } from "@react-three/drei";
import { useRef } from "react";
import { Map } from "./Map";
import { Physics } from "@react-three/rapier";
import { CharacterController } from "../character/CharacterController";
import { OrthographicCamera as ThreeOrthographicCamera } from "three";

const maps: Record<
  string,
  { scale: number; position: [number, number, number] }
> = {
  map: {
    scale: 0.4,
    position: [-9, -6.2, -1],
  },
};

const MAP_NAME = "map";

export const Experience = () => {
  const shadowCameraRef = useRef<ThreeOrthographicCamera>(null);

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

      {/* Se envuelven todos los elementos que deben ser afectados por las físicas */}
      <Physics key={MAP_NAME}>
        <Map
          scale={maps[MAP_NAME].scale}
          position={maps[MAP_NAME].position}
          model={`models/${MAP_NAME}.glb`}
        />
        <CharacterController />
      </Physics>
    </>
  );
};
