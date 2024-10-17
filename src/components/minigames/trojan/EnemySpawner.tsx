import React, { useMemo } from 'react';
import { EnemyController } from "../../character/EnemyController";
import enemyPositions from "./enemyPositions.json";

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
const getUniqueRandomPositions = (count: number, positions: Coordinates[]): Coordinates[] => {
  const uniquePositions: Coordinates[] = [];
  const usedIndices = new Set<number>();

  while (uniquePositions.length < count && uniquePositions.length < positions.length) {
    const randomIndex = Math.floor(Math.random() * positions.length);
    
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      uniquePositions.push(positions[randomIndex]);
    }
  }
  console.log('Unique positions:', uniquePositions);

  return uniquePositions;
};

export const EnemySpawner: React.FC<EnemySpawnerProps> = ({ enemyCount = 5 }) => {
  // Memoize the positions to prevent unnecessary recalculations
  const enemyPositions = useMemo(() => getUniqueRandomPositions(enemyCount, positions), [enemyCount]);

  return (
    <>
      {enemyPositions.map((position, index) => (
        <EnemyController
          key={index}
          coordinates={position} // Pass the unique position to each EnemyController
        />
      ))}
    </>
  );
};
