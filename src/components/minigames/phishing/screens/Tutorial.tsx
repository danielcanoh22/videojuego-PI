import { useState } from "react";
import { GameLayout, NextScreenButton } from "../components/common";
import { TutorialPhishing } from "../components/tutorial/TutorialPhishing";
import { TutorialSmishing } from "../components/tutorial/TutorialSmishing";

export const Tutorial = ({ onNextSection }: { onNextSection: () => void }) => {
  const [tutorialScreen, setTutorialScreen] = useState(0);

  const minigame =
    tutorialScreen === 0 ? "Escenarios de Phishing" : "Escenarios de Smishing";

  return (
    <GameLayout>
      <div className="z-20">
        <h2 className="text-6xl font-bold text-blue-800">
          ¿Cómo jugar? - {minigame}
        </h2>
        <div className="grid grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 mt-10 gap-10">
          {tutorialScreen === 0 && <TutorialPhishing />}
          {tutorialScreen === 1 && <TutorialSmishing />}
        </div>
      </div>

      {tutorialScreen === 0 && (
        <NextScreenButton
          styles="mt-6 z-20"
          onClick={() => setTutorialScreen(tutorialScreen + 1)}
        >
          Siguiente
        </NextScreenButton>
      )}

      {tutorialScreen === 1 && (
        <NextScreenButton styles="mt-6 z-20" onClick={onNextSection}>
          ¡Comenzar!
        </NextScreenButton>
      )}
    </GameLayout>
  );
};
