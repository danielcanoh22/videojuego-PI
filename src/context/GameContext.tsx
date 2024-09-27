import { createContext, ReactNode, useContext, useState } from "react";

interface GameContext {
  showModal: boolean;
  showPhishingGame: boolean;
  isActivePhishing: boolean;
  openPhishingGame: () => void;
  closePhishingGame: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const GameContext = createContext<GameContext | undefined>(undefined);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const [isActivePhishing, setIsActivePhishing] = useState(false);
  const [showPhishingGame, setShowPhishingGame] = useState(false);

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

  return (
    <GameContext.Provider
      value={{
        showModal,
        showPhishingGame,
        isActivePhishing,
        openPhishingGame: handleOpenPhishingGame,
        closePhishingGame: handleClosePhishingGame,
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
