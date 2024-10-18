import { useRef, useEffect } from "react";

const Bullet = ({ position, direction, onRemove }) => {
  const bulletRef = useRef();

  useEffect(() => {
    const bulletSpeed = 0.1; // Ajusta la velocidad de la bolita
    const interval = setInterval(() => {
      bulletRef.current.position.add(
        direction.clone().multiplyScalar(bulletSpeed)
      );

      // Eliminar si sale del rango
      if (bulletRef.current.position.z > 10) {
        onRemove();
      }
    }, 16); // Approximately 60 FPS

    return () => clearInterval(interval);
  }, [direction, onRemove]);

  return (
    <mesh ref={bulletRef} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} /> {/* Tamaño de la bolita */}
      <meshStandardMaterial color="orange" /> {/* Color de la bolita */}
    </mesh>
  );
};

export default Bullet;
