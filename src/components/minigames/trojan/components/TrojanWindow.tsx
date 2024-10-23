import { useGame } from "../../../../context/GameContext";

export const TrojanWindow = () => {
  const { closeModal } = useGame();

  return (
    <div className="w-2/5 h-96 bg-blue-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button
        className="text-4xl text-white border-2 border-white p-2"
        onClick={() => closeModal()}
      >
        X
      </button>
    </div>
  );
};
