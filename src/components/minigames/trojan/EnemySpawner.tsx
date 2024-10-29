import { EnemyController } from "../../character/EnemyController";
import { useGame } from "../../../context/GameContext";

interface EnemySpawnerProps {
  enemyCount?: number; // Optional prop to specify the number of enemies
}

export const EnemySpawner: React.FC<EnemySpawnerProps> = () => {
  const { enemies } = useGame();

  return (
    <>
      {enemies.map((position, index) => (
        <EnemyController
          key={index}
          coordinates={position} // Pass the unique position to each EnemyController
        />
      ))}
    </>
  );
};
