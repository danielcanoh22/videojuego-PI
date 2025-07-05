import { useUI } from "../../context/UIContext";
import { GameImage } from "../minigames/phishing/components/common";
import { HomeScreenButton } from "./HomeScreenButton";

export const HomeTutorial = () => {
  const { showControls } = useUI();

  return (
    <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 z-50 w-2/3 p-8 rounded-md">
      <div className="w-full h-full bg-minigameBackground bg-cover opacity-15 fixed top-0 left-0"></div>
      <GameImage
        image="/assets/img/title-game.png"
        title="Título del videojuego - Academia de Ruh"
        styles="w-1/3 mb-10"
      />
      <div className="z-50">
        <h2 className="text-5xl font-semibold text-center mb-8">
          ¡Bienvenido a la Academia de Ruh!
        </h2>
        <div className="flex gap-8">
          <p className="text-4xl leading-normal">
            Explora la ciudad en busca de puntos clave{" "}
            <span className="font-bold">(ver imagen)</span>. Cuando te acerques
            a cada uno, se activará un reto que pondrá a prueba tu conocimiento
            sobre ciberseguridad.
          </p>
          <GameImage
            image="/assets/img/place.png"
            title="Título del videojuego - Academia de Ruh"
            styles="w-1/3 mb-10"
          />
        </div>
        <div className="flex justify-center">
          <HomeScreenButton onClick={showControls}>Continuar</HomeScreenButton>
        </div>
      </div>
    </div>
  );
};
