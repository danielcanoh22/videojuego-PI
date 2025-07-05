import { useEffect, useState } from "react";
import { usePhishingGame } from "@/context/PhishingGameContext";
import { EmailContentData, EmailElementType } from "@/types/phishing";
import { calcScore } from "@/utils/helpers";
import { emailsData } from "./data";

import { Window } from "@/components/layout/Window";
import { Welcome } from "./screens/Welcome";
import { Tutorial } from "./screens/Tutorial";
import { GameContent } from "./screens/GameContent";
import { Feedback } from "./screens/Feedback";
import { GameOver } from "./screens/GameOver";
import { MIN_SCORE } from "@/utils/constants";

export const PhishingGame = () => {
  const { winGame } = usePhishingGame();

  const [screen, setScreen] = useState(0);
  const [positiveAnswer, setPositiveAnswer] = useState<boolean | null>(null);
  const [emailsIndex, setEmailsIndex] = useState(0);

  const [elements, setElements] = useState<EmailElementType[]>([]);
  const [score, setScore] = useState(0);
  const [additionalPoints, setAdditionalPoints] = useState([0, 0]);

  const currentEmail = emailsData[emailsIndex];

  const handleRestartGame = () => {
    setScreen(1);
    setPositiveAnswer(null);
    setEmailsIndex(0);
    setElements([]);
    setScore(0);
    setAdditionalPoints([0, 0]);
  };

  const handleNextGameLevel = () => {
    setPositiveAnswer(null);
    setElements([]);
    setAdditionalPoints([0, 0]);

    setEmailsIndex((index) => index + 1);
    setScreen(2);
  };

  const handleNextSection = () => {
    setScreen(screen + 1);
  };

  const handleChooseOption = (option: boolean) => {
    if (!currentEmail.isSmishing) {
      if (option && !elements.length) return;

      if (option === currentEmail.isSuspicious) {
        const points = calcScore(elements, currentEmail as EmailContentData);
        setAdditionalPoints(points);
      }
    }

    setPositiveAnswer(option);
    setScreen(3);
  };

  const handleAddElement = (newElement: EmailElementType) => {
    if (elements.map((el) => el.name).includes(newElement.name)) return;

    const audio = new Audio("/assets/sounds/bubble.mp3");
    audio.play();

    setElements((prevEl) => [...prevEl, newElement]);
  };

  const handleRemoveElement = (id: string) => {
    const audio = new Audio("/assets/sounds/spacebar.mp3");
    audio.play();

    setElements((prevEl) => prevEl.filter((element) => element.id !== id));
  };

  const handleFinishGame = () => {
    setScreen(4);
    if (score >= MIN_SCORE) {
      winGame();
    }
  };

  useEffect(() => {
    if (positiveAnswer === currentEmail.isSuspicious) {
      setScore(
        (prevScore) =>
          prevScore + 20 + additionalPoints[0] + additionalPoints[1]
      );
    }
  }, [positiveAnswer, additionalPoints, currentEmail.isSuspicious]);

  return (
    <Window>
      {screen === 0 && <Welcome onNextSection={handleNextSection} />}

      {screen === 1 && <Tutorial onNextSection={handleNextSection} />}

      {screen === 2 && (
        <GameContent
          content={currentEmail}
          elements={elements}
          onAddElement={handleAddElement}
          onRemoveElement={handleRemoveElement}
          onChooseOption={handleChooseOption}
          score={score}
        />
      )}

      {screen === 3 && (
        <Feedback
          content={currentEmail}
          positiveFeedback={positiveAnswer}
          onScreen={handleNextGameLevel}
          onFinishGame={handleFinishGame}
          index={emailsIndex}
          score={score}
          additionalPoints={additionalPoints}
        />
      )}

      {screen === 4 && (
        <GameOver screen={screen} score={score} onRestart={handleRestartGame} />
      )}
    </Window>
  );
};
