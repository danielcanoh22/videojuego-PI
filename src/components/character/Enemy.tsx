import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { CharacterProps } from "../../types";

export function Enemy({ animation, ...props }: CharacterProps) {
  const capsuleRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);

  // Animación simple de rotación para darle vida al enemigo
  useFrame(() => {
    if (capsuleRef.current) {
      capsuleRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group {...props} rotation={[0, Math.random() * Math.PI * 2, 0]}>
      {/* Cuerpo en forma de cápsula */}
      <mesh ref={capsuleRef} position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.5, 0.8, 16, 32]} />
        <meshStandardMaterial color={"#8b9dc3"} />
      </mesh>

      {/* Ojo izquierdo */}
      <mesh ref={leftEyeRef} position={[-0.3, 0.8, 0.6]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={"#ffffff"} />
        {/* Pupila izquierda */}
        <mesh position={[0, 0, 0.1]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={"#000000"} />
        </mesh>
      </mesh>

      {/* Ojo derecho */}
      <mesh ref={rightEyeRef} position={[0.3, 0.8, 0.6]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={"#ffffff"} />
        {/* Pupila derecha */}
        <mesh position={[0, 0, 0.1]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={"#000000"} />
        </mesh>
      </mesh>
    </group>
  );
}
