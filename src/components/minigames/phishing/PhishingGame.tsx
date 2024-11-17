import { useEffect, useState } from "react";
import { Window } from "../../layout/Window";
import { Welcome, Tutorial, GameContent, Feedback, GameOver } from "./screens";

import { emailsData } from "./data";
import { EmailElementType } from "../../../types";
import { calcScore } from "../../../utils";
import { useGame } from "../../../context/GameContext";

export const PhishingGame = () => {
  const { setWonPhishing } = useGame();

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
        /* @ts-expect-error Fix type */
        const points = calcScore(elements, currentEmail);

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

    setTimeout(() => {
      setWonPhishing(true);
    }, 2000);
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
