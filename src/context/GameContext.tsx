import { createContext, ReactNode, useContext, useState } from "react";

interface GameContext {
  showModal: boolean;
  showPhishingGame: boolean;
  openPhishingGame: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const GameContext = createContext<GameContext | undefined>(undefined);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPhishingGame, setShowPhishingGame] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenPhishingGame = () => {
    setShowPhishingGame(true);
  };

  return (
    <GameContext.Provider
      value={{
        showModal,
        showPhishingGame,
        openPhishingGame: handleOpenPhishingGame,
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
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
