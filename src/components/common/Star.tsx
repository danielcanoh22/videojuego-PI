import { useEffect, useMemo, useState } from "react";
import { useTrojanGame } from "../../context/TrojanGameContext";
import { usePhishingGame } from "../../context/PhishingGameContext";

export const Star = () => {
  const { state } = useTrojanGame();
  const { state: statePhishing } = usePhishingGame();
  const [showMessage, setShowMessage] = useState(false);

  const hasWonTrojan = state.hasWon;
  const hasWonPhishing = statePhishing.hasWon;

  const starsWonCount = useMemo(() => {
    return (hasWonPhishing ? 1 : 0) + (hasWonTrojan ? 1 : 0);
  }, [hasWonPhishing, hasWonTrojan]);

  useEffect(() => {
    if (starsWonCount === 0) {
      return;
    }

    setShowMessage(true);
    const audio = new Audio("/assets/sounds/star.mp3");
    audio.play();

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [starsWonCount]);

  return (
    <div className="fixed top-6 left-6 z-50 w-28 flex items-center gap-4">
      {hasWonPhishing && <img src="/assets/img/star.png" alt="" />}
      {hasWonTrojan && <img src="/assets/img/star.png" alt="" />}

      {showMessage && (
        <div className="fixed top-32 left-6 z-50 p-2 bg-yellow-300 text-black rounded-md shadow-lg">
          Ganaste una estrella dorada ⭐️
        </div>
      )}
    </div>
  );
};
