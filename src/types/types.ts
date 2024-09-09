import { Vector3 } from "three";

export interface CharacterProps {
  animation: string;
  scale?: number | [number, number, number];
  position?: Vector3;
}

export interface MapProps {
  model: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
}
