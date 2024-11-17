import { useGame } from "../../context/GameContext";
import { GameImage } from "../minigames/phishing/components/common";
import { HomeScreenButton } from "./HomeScreenButton";

export const HomeScreen = () => {
  const { setHomeScreen, openCreditsScreen } = useGame();

  return (
    <div className="fixed top-0 left-0 bg-blue-200 w-screen h-screen z-[100] text-white flex flex-col items-center justify-end gap-20 pb-52">
      <div className="w-full h-full bg-minigameBackground bg-cover opacity-15 fixed top-0 left-0"></div>
      <GameImage
        image="/assets/img/title-game.png"
        title="Título del videojuego - Detector de Fraudes"
        styles="w-2/3 z-50"
      />
      <div className="flex flex-col gap-6 z-50">
        <HomeScreenButton onClick={setHomeScreen}>
          Iniciar juego
        </HomeScreenButton>
        <HomeScreenButton onClick={openCreditsScreen}>
          Créditos
        </HomeScreenButton>
      </div>
    </div>
  );
};
