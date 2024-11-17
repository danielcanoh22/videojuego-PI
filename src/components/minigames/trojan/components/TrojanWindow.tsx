import { useGame } from "../../../../context/GameContext";
import Star from "./star.svg";
import { ansOption } from "./options";
import { useState } from "react";

export const TrojanWindow = () => {
  const {
    closeModal,
    removeEnemy,
    closestEnemy,
    trojanScore,
    setTrojanScore,
    accuracyRate,
    setAccuracyRate,
  } = useGame();

  const currentQuestion = ansOption.find(
    (question) => question.id === closestEnemy.id
  );

  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);

  const handleAnswer = (index: number) => {
    if (isCorrect) return;

    setSelectedOption(index);
    const correct = index === currentQuestion?.correct;
    setIsCorrect(correct);
    setAccuracyRate(correct);

    const pointsEarned = correct ? 15 : -10;
    setTrojanScore(pointsEarned);

    if (correct) {
      removeEnemy(currentQuestion?.coordinates);
      setTimeout(() => {
        closeModal();
      }, 1000);

      const audio = new Audio("/assets/sounds/correct.mp3");
      audio.play();
    } else {
      const audio = new Audio("/assets/sounds/error.mp3");
      audio.play();
    }
  };

  return (
    <div className="w-[680px] h-[240px] bg-black fixed top-1/4 right-[100px] -translate-y-1/2 rounded-md text-white text-[25px] z-50">
      <div>
        <div className="w-full h-80 bg-[rgb(128,128,255)] rounded-lg flex flex-col items-center justify-center">
          <button
            className="text-4xl text-white absolute top-4 right-8"
            onClick={() => closeModal()}
          >
            x
          </button>
          <div className="text-center text-md">{currentQuestion?.question}</div>
          <p>Promedio de aciertos {accuracyRate.toFixed(0)}%</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          {currentQuestion?.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full h-[100px] bg-[rgb(128,128,255)] rounded-lg flex items-center justify-center mt-4 text-center text-lg p-2 cursor-pointer 
              ${
                selectedOption === index
                  ? isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
                  : ""
              }`}
            >
              {String.fromCharCode(97 + index)}. {option}
            </div>
          ))}
        </div>

        {selectedOption !== null && (
          <div className="mt-4 text-center">
            {isCorrect
              ? "¡Respuesta correcta!"
              : "Respuesta incorrecta. Inténtalo nuevamente."}
          </div>
        )}

        <div className="flex gap-4 items-center mt-4">
          <img src={Star} alt="Point's star" className="w-[80px] h-[80px]" />
          <div className="w-full h-10 bg-[rgb(255,0,255)]">
            <div
              className="h-10 bg-yellow-300"
              style={{ width: `${trojanScore}%` }}
            ></div>
          </div>
        </div>
        <div className="text-[30px] text-center font-bold">
          Puntos: {trojanScore}
        </div>
      </div>
    </div>
  );
};
