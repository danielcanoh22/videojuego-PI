import { useTrojanGame } from "@/context/TrojanGameContext";
import { EnemyController } from "@/features/character/EnemyController";

export const EnemySpawner = () => {
  const { state } = useTrojanGame();
  const { enemies } = state;

  return (
    <>
      {enemies.map((position, index) => (
        <EnemyController key={index} coordinates={position} />
      ))}
    </>
  );
};
