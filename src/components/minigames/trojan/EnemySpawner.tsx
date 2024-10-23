import { useEffect, useMemo } from "react";
import { EnemyController } from "../../character/EnemyController";
import enemyPositions from "./enemyPositions.json";
import { useGame } from "../../../context/GameContext";

interface Coordinates {
  x: number;
  y: number;
  z: number;
}

const positions: Coordinates[] = enemyPositions;

// Props interface for the EnemySpawner component
interface EnemySpawnerProps {
  enemyCount?: number; // Optional prop to specify the number of enemies
}

// Function to get a unique random position
const getUniqueRandomPositions = (
  count: number,
  positions: Coordinates[]
): Coordinates[] => {
  const uniquePositions: Coordinates[] = [];
  const usedIndices = new Set<number>();

  while (
    uniquePositions.length < count &&
    uniquePositions.length < positions.length
  ) {
    const randomIndex = Math.floor(Math.random() * positions.length);

    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      uniquePositions.push(positions[randomIndex]);
    }
  }
  console.log("Unique positions:", uniquePositions);

  return uniquePositions;
};

export const EnemySpawner: React.FC<EnemySpawnerProps> = ({
  enemyCount = 5,
}) => {
  // Memoize the positions to prevent unnecessary recalculations
  const enemyPositions2 = useMemo(() => {
    return getUniqueRandomPositions(enemyCount, positions);
  }, [enemyCount]);

  const { setEnemies } = useGame();

  useEffect(() => {
    setEnemies(enemyPositions2);
  }, [enemyPositions2, setEnemies]);

  // const enemyPositions = [
  //   {
  //     x: 1.79,
  //     y: -6.12,
  //     z: 5.29,
  //   },
  //   {
  //     x: -0.83,
  //     y: -6.12,
  //     z: 7.74,
  //   },
  //   {
  //     x: -0.64,
  //     y: -6.12,
  //     z: 4.58,
  //   },
  // ];

  console.log(enemyPositions2.length);

  return (
    <>
      {enemyPositions2.map((position, index) => (
        <EnemyController
          key={index}
          coordinates={position} // Pass the unique position to each EnemyController
        />
      ))}
    </>
  );
};
