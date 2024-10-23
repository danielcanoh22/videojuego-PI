import { createContext, ReactNode, useContext, useState } from "react";
//DATOS GLOBALES --

interface GameContext {
  showModal: boolean;
  showPhishingGame: boolean;
  isActivePhishing: boolean;
  enemies: object[];
  openPhishingGame: () => void;
  closePhishingGame: () => void;
  openModal: () => void;
  closeModal: () => void;
  setEnemies: (positions: object[]) => void;
}

const GameContext = createContext<GameContext | undefined>(undefined);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const [isActivePhishing, setIsActivePhishing] = useState(false);
  const [showPhishingGame, setShowPhishingGame] = useState(false);

  const [enemies, setEnemies] = useState<object[]>([{}]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenPhishingGame = () => {
    setShowPhishingGame(true);
    setIsActivePhishing(true);
  };

  const handleClosePhishingGame = () => {
    setShowPhishingGame(false);
    setIsActivePhishing(false);
  };

  const handleEnemies = (positions: object[]) => {
    setEnemies(positions);
  };

  return (
    <GameContext.Provider
      value={{
        showModal,
        showPhishingGame,
        isActivePhishing,
        enemies,
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
