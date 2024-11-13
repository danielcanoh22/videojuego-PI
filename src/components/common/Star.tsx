import { useGame } from "../../context/GameContext";

export const Star = () => {
  const { wonPhishing, wonTrojan } = useGame();

  return (
    <div className="fixed top-6 left-6 z-50 w-28 flex items-center gap-4">
      {wonPhishing && <img src="/assets/img/star.png" alt="" />}
      {wonTrojan && <img src="/assets/img/star.png" alt="" />}
    </div>
  );
};
