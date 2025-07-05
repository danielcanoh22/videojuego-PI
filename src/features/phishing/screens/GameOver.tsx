import { usePhishingGame } from "@/context/PhishingGameContext";
import { MIN_SCORE } from "@/utils/constants";
import { GameLayout } from "@/features/phishing/components/common/GameLayout";
import { GameImage } from "@/components/common/GameImage";
import { Message } from "@/features/phishing/components/common/Message";
import { Tips } from "@/features/phishing/components/gameover/Tips";
import { NextScreenButton } from "@/features/phishing/components/common/NextScreenButton";

type GameOverProps = {
  screen: number;
  score: number;
  onRestart: () => void;
};

export const GameOver = ({ screen, score, onRestart }: GameOverProps) => {
  const { closePhishingGame } = usePhishingGame();

  const wonTheGame = score >= MIN_SCORE;
  const positiveMessage =
    "🎉 ¡Felicidades! Has evitado caer en las trampas de phishing y smishing. ¡Sigue así, protegiendo tu información personal y navegando con seguridad! 🎉";
  const negativeMessage =
    "⛔ ¡Cuidado! Has caído en un ataque de phishing/smishing. Aprende de este error y sigue practicando para proteger tu información personal en el futuro. ⛔";

  return (
    <GameLayout screen={screen}>
      <div className="z-20 flex flex-row-reverse justify-center">
        <GameImage
          image="/assets/img/ruh-gameover.png"
          title="Imagen de Ruh, el personaje principal del videojuego."
          styles="w-2/5"
        />
        <div className="flex flex-col gap-6 h-max w-[50%]">
          <Message
            styles={`text-3xl text-center shadow-md ${
              wonTheGame ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {wonTheGame ? positiveMessage : negativeMessage}
          </Message>

          <Message styles="bg-pink-100 shadow-md text-2xl">
            ⭐ Puntos conseguidos: {score}/{MIN_SCORE}
          </Message>

          <h3 className="text-2xl font-bold">
            Recuerda siempre tener presente lo siguiente:
          </h3>

          <Tips />

          <div className="flex gap-6 w-max mx-auto">
            <NextScreenButton onClick={onRestart}>
              Volver a jugar
            </NextScreenButton>
            <NextScreenButton onClick={closePhishingGame}>
              Salir
            </NextScreenButton>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};
