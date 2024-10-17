import { GameImage, Message } from "../common";
import { TutorialPhishingSteps } from "./TutorialPhishingSteps";

export const TutorialPhishing = () => {
  return (
    <>
      <GameImage
        image="/assets/img/phishing/tutorial-phishing.png"
        title="Imagen con los elementos de un correo electrónico señalados."
        styles="justify-self-center"
      />
      <div className="flex flex-col gap-4">
        <TutorialPhishingSteps />
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
            ⛔ Perderás algunos puntos por cada elemento que identifiques como
            sospechoso, y este no lo sea.
          </p>
        </Message>
      </div>
    </>
  );
};
