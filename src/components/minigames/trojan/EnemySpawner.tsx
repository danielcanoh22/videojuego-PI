import { EnemyController } from "../../character/EnemyController";
import { useTrojanGame } from "../../../context/TrojanGameContext";

interface EnemySpawnerProps {
  enemyCount?: number;
}

export const EnemySpawner: React.FC<EnemySpawnerProps> = () => {
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
