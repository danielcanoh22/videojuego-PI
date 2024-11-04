import { createContext, ReactNode, useContext, useState } from "react";
//DATOS GLOBALES --
import enemyPositions from "../components/minigames/trojan/enemyPositions.json";
import { Coordinates, Enemy } from "../types";
import { getUniqueRandomPositions } from "../utils";

const positions: Coordinates[] = enemyPositions;

interface GameContext {
  showHomeScreen: boolean;
  setHomeScreen: () => void;
  showCreditsScreen: boolean;
  openCreditsScreen: () => void;
  closeCreditsScreen: () => void;
  showHomeTutorial: boolean;
  setHomeTutorial: () => void;
  showHomeControls: boolean;
  setHomeControls: () => void;
  showModal: boolean;
  showPhishingGame: boolean;
  isActiveGame: boolean;
  showHomeTrojan: boolean;
  openHomeTrojan: () => void;
  closeHomeTrojan: () => void;
  isActiveTrojanGame: boolean;
  enemies: object[];
  closestEnemy: Enemy;
  trojanScore: number;
  setTrojanScore: (score: number) => void;
  setClosestEnemy: (enemy: Enemy) => void;
  openPhishingGame: () => void;
  closePhishingGame: () => void;
  activeTrojanGame: () => void;
  openModal: () => void;
  closeModal: () => void;
  setEnemies: () => void;
  removeEnemy: (coordinates: Enemy) => void;
}

const GameContext = createContext<GameContext | undefined>(undefined);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [showHomeScreen, setShowHomeScreen] = useState(true);
  const [showCreditsScreen, setShowCreditsScreen] = useState(false);
  const [showHomeTutorial, setShowHomeTutorial] = useState(true);
  const [showHomeControls, setShowHomeControls] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [isActiveGame, setIsActiveGame] = useState(true);
  const [isActiveTrojanGame, setIsActiveTrojanGame] = useState(false);
  const [showHomeTrojan, setShowHomeTrojan] = useState(false);
  const [showPhishingGame, setShowPhishingGame] = useState(false);

  // const [enemies, setEnemies] = useState<Enemy[]>(() =>
  //   getUniqueRandomPositions(5, positions)
  // );
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [trojanScore, setTrojanScore] = useState(0);
  const [closestEnemy, setClosestEnemy] = useState({ id: 0, x: 0, y: 0, z: 0 });

  const handleCloseHomeScreen = () => {
    setShowHomeScreen(false);
  };

  const handleOpenCreditsScreen = () => {
    setShowCreditsScreen(true);
  };

  const handleCloseCreditsScreen = () => {
    setShowCreditsScreen(false);
  };

  const handleCloseHomeTutorial = () => {
    setShowHomeTutorial(false);
    setIsActiveGame(false);
  };

  const handleCloseHomeControls = () => {
    setShowHomeControls(false);
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

  const handleEnemies = () => {
    setEnemies(getUniqueRandomPositions(5, positions));
  };

  const handleTrojanGame = () => {
    setIsActiveTrojanGame(true);
  };

  const handleOpenHomeTrojan = () => {
    setShowHomeTrojan(true);
    setIsActiveGame(true);
  };

  const handleCloseHomeTrojan = () => {
    setShowHomeTrojan(false);
    setIsActiveGame(false);
  };

  const handleTrojanScore = (sc: number) => {
    if (trojanScore + sc < 0) setTrojanScore(0);
    else if (trojanScore + sc > 100) setTrojanScore(100);
    else setTrojanScore((prevScore: number) => prevScore + sc);
  };

  return (
    <GameContext.Provider
      value={{
        showHomeScreen,
        setHomeScreen: handleCloseHomeScreen,
        showCreditsScreen,
        openCreditsScreen: handleOpenCreditsScreen,
        closeCreditsScreen: handleCloseCreditsScreen,
        showHomeTutorial,
        setHomeTutorial: handleCloseHomeTutorial,
        showHomeControls,
        setHomeControls: handleCloseHomeControls,
        showModal,
        showPhishingGame,
        isActiveGame,
        isActiveTrojanGame,
        showHomeTrojan,
        openHomeTrojan: handleOpenHomeTrojan,
        closeHomeTrojan: handleCloseHomeTrojan,
        activeTrojanGame: handleTrojanGame,
        enemies,
        trojanScore,
        setTrojanScore: handleTrojanScore,
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
