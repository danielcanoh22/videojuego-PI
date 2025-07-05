import { usePhishingGame } from "../../../../context/PhishingGameContext";
import { GameImage, NextScreenButton } from "../components/common";

export const Welcome = ({ onNextSection }: { onNextSection: () => void }) => {
  const { closePhishingGame } = usePhishingGame();

  return (
    <div className="bg-transparent w-full h-full rounded-lg p-4 relative">
      <div className="flex flex-col justify-center p-4 gap-20 h-full">
        <div className="flex flex-col items-center gap-10">
          <div className="flex justify-center">
            <GameImage
              image="/assets/img/phishing/title-phishing.png"
              title="Título del videojuego - Detector de Fraudes"
              styles="w-2/3"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <NextScreenButton styles="hover:scale-105" onClick={onNextSection}>
            Iniciar juego
          </NextScreenButton>
          <NextScreenButton
            styles="hover:scale-105"
            onClick={closePhishingGame}
          >
            Salir
          </NextScreenButton>
        </div>
      </div>
    </div>
  );
};
