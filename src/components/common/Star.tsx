import { useEffect, useState } from "react";
import { useGame } from "../../context/GameContext";

export const Star = () => {
  const { wonPhishing, wonTrojan } = useGame();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (wonPhishing || wonTrojan) {
      setShowMessage(true);

      const audio = new Audio("/assets/sounds/star.mp3");
      audio.play();

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [wonPhishing, wonTrojan]);

  return (
    <div className="fixed top-6 left-6 z-50 w-28 flex items-center gap-4">
      {wonPhishing && <img src="/assets/img/star.png" alt="" />}
      {wonTrojan && <img src="/assets/img/star.png" alt="" />}

      {showMessage && (
        <div className="fixed top-32 left-6 z-50 p-2 bg-yellow-300 text-black rounded-md shadow-lg">
          Ganaste una estrella dorada ⭐️
        </div>
      )}
    </div>
  );
};
