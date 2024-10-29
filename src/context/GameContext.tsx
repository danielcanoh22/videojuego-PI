import { createContext, ReactNode, useContext, useState } from "react";
//DATOS GLOBALES --
import enemyPositions from "../components/minigames/trojan/enemyPositions.json";
import { Coordinates, Enemy } from "../types";
import { getUniqueRandomPositions } from "../utils";

const positions: Coordinates[] = enemyPositions;

interface GameContext {
  showHomeScreen: boolean;
  setHomeScreen: () => void;
  showModal: boolean;
  showPhishingGame: boolean;
  isActiveGame: boolean;
  enemies: object[];
  closestEnemy: Enemy;
  setClosestEnemy: (enemy: Enemy) => void;
  openPhishingGame: () => void;
  closePhishingGame: () => void;
  openModal: () => void;
  closeModal: () => void;
  setEnemies: (positions: Enemy[]) => void;
  removeEnemy: (coordinates: Enemy) => void;
}

const GameContext = createContext<GameContext | undefined>(undefined);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [isActiveGame, setIsActiveGame] = useState(false);
  const [showPhishingGame, setShowPhishingGame] = useState(false);

  const [enemies, setEnemies] = useState<Enemy[]>(() =>
    getUniqueRandomPositions(3, positions)
  );

  const [closestEnemy, setClosestEnemy] = useState({ id: 0, x: 0, y: 0, z: 0 });

  const handleCloseHomeScreen = () => {
    setShowHomeScreen(false);
  };

  const handleRemoveEnemy = (enemyCoordinates: Enemy) => {
    setEnemies((prevEnemies) => {
      const updatedEnemies = prevEnemies.filter(
        (enemy) =>
          !(
            enemy.x === enemyCoordinates.x &&
            enemy.y === enemyCoordinates.y &&
            enemy.z === enemyCoordinates.z
          )
      );

      return updatedEnemies;
    });
  };

  const handleClosestEnemy = (enemy: Enemy) => {
    setClosestEnemy(enemy);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setIsActiveGame(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsActiveGame(false);
  };

  const handleOpenPhishingGame = () => {
    setShowPhishingGame(true);
    setIsActiveGame(true);
  };

  const handleClosePhishingGame = () => {
    setShowPhishingGame(false);
    setIsActiveGame(false);
  };

  const handleEnemies = (positions: Enemy[]) => {
    setEnemies(positions);
  };

  return (
    <GameContext.Provider
      value={{
        showHomeScreen,
        setHomeScreen: handleCloseHomeScreen,
        showModal,
        showPhishingGame,
        isActiveGame,
        enemies,
        closestEnemy,
        setClosestEnemy: handleClosestEnemy,
        removeEnemy: handleRemoveEnemy,
        openPhishingGame: handleOpenPhishingGame,
        closePhishingGame: handleClosePhishingGame,
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
        setEnemies: handleEnemies,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => {
  const context = useContext(GameContext);

  if (!context) throw new Error("useGame must be used within an GameProvider");

  return context;
};

export { GameProvider, useGame };
