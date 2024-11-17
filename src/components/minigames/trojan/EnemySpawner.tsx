import { EnemyController } from "../../character/EnemyController";
import { useGame } from "../../../context/GameContext";

interface EnemySpawnerProps {
  enemyCount?: number;
}

export const EnemySpawner: React.FC<EnemySpawnerProps> = () => {
  const { enemies } = useGame();

  return (
    <>
      {enemies.map((position, index) => (
        <EnemyController
          key={index}
          // @ts-expect-error Fix type
          coordinates={position} // Pass the unique position to each EnemyController
        />
      ))}
    </>
  );
};
