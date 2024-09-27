import {
  GameImage,
  GameLayout,
  Message,
  NextScreenButton,
} from "../components/common";

import { TutorialSteps } from "../components/tutorial/TutorialSteps";

export const Tutorial = ({ onNextSection }: { onNextSection: () => void }) => {
  return (
    <GameLayout>
      <div className="z-20">
        <h2 className="text-6xl font-bold text-blue-800">¿Cómo jugar?</h2>
        <div className="grid grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 mt-10 gap-10">
          <GameImage
            image="/assets/img/phishing/tutorial-phishing.png"
            title="Imagen con los elementos de un correo electrónico señalados."
            styles="justify-self-center"
          />
          <div className="flex flex-col gap-4">
            <TutorialSteps />
            <Message styles="text-xl shadow-md">
              <p>
                ⭐ Ganarás puntos si identificas el correo como sospechoso o no
                correctamente.
              </p>
              <p>
                💯 Ganarás puntos extras por cada elemento sospechoso que logres
                identificar.
              </p>
              <p>
                ⛔ Perderás algunos puntos por cada elemento que identifiques
                como sospechoso, y este no lo sea.
              </p>
            </Message>
          </div>
        </div>
      </div>
      <NextScreenButton styles="mt-6 z-20" onClick={onNextSection}>
        ¡Comenzar!
      </NextScreenButton>
    </GameLayout>
  );
};
