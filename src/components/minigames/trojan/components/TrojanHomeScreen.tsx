import { useGame } from "../../../../context/GameContext";
import { HomeScreenButton } from "../../../common/HomeScreenButton";
import { GameImage } from "../../phishing/components/common";

export const TrojanHomeScreen = () => {
  const { closeHomeTrojan } = useGame();

  return (
    <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-200 z-50 w-2/3 p-8 rounded-md">
      <div className="w-full h-full bg-minigameBackground bg-cover opacity-15 fixed top-0 left-0"></div>

      <div className="z-50">
        <h2 className="text-5xl font-semibold text-center mb-8">
          ¡Han aparecido algunos enemigos en la ciudad!
        </h2>
        <div className="flex gap-8 w-2/3 mx-auto">
          <p className="text-4xl leading-normal">
            Localiza a todos los enemigos{" "}
            <span className="font-semibold">(ver imagen)</span> y acércate a
            cada uno para responder sus preguntas y eliminarlos.
          </p>
          <GameImage
            image="/assets/img/trojan-enemy.png"
            title="Imagen de uno de los enemigos del minijuego de preguntas."
          />
        </div>
        <div className="flex justify-center mt-10">
          <HomeScreenButton onClick={closeHomeTrojan}>
            Continuar
          </HomeScreenButton>
        </div>
      </div>
    </div>
  );
};
