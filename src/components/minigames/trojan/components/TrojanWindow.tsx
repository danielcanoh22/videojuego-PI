import Star from "./star.svg";
import { ansOption } from "./options";
import { useEffect, useState } from "react";
import { useTrojanGame } from "../../../../context/TrojanGameContext";

export const TrojanWindow = () => {
  const { state, accuracy, removeEnemyById, updateScore, answerQuestion } =
    useTrojanGame();

  const { score, closestEnemy } = state;

  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
  }, [closestEnemy]);

  if (!closestEnemy) {
    return null;
  }

  const currentQuestion = ansOption.find(
    (question) => question.id === closestEnemy.id
  );

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return;

    setSelectedOption(index);

    const correct = index === currentQuestion?.correct;
    setIsCorrect(correct);

    const pointsEarned = correct ? 15 : -10;
    const potentialNewScore = score + pointsEarned;
    const isWinningMove = potentialNewScore >= 100;

    updateScore(pointsEarned);

    const audioPath = correct
      ? "/assets/sounds/correct.mp3"
      : "/assets/sounds/error.mp3";
    new Audio(audioPath).play();

    if (!isWinningMove) {
      setTimeout(() => {
        answerQuestion(correct);
        if (correct && currentQuestion) {
          removeEnemyById(currentQuestion.id);
        }
      }, 1000);
    }
  };

  const handleClose = () => {
    updateScore(-5);
    answerQuestion(false);
  };

  return (
    <div className="w-[680px] h-[240px] bg-black fixed top-1/4 right-[100px] -translate-y-1/2 rounded-md text-white text-[25px] z-50">
      <div>
        <div className="w-full h-80 bg-[#8080ff] rounded-lg flex flex-col items-center justify-center">
          <button
            className="text-4xl text-white absolute top-4 right-8"
            onClick={handleClose}
          >
            x
          </button>
          <div className="text-center text-md">{currentQuestion?.question}</div>
          <p>Promedio de aciertos {accuracy.toFixed(0)}%</p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          {currentQuestion?.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full h-[100px] bg-[#8080ff] rounded-lg flex items-center justify-center mt-4 text-center text-lg p-2 cursor-pointer 
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
          <div className="w-full h-10 bg-[#ff00ff]">
            <div
              className="h-10 bg-yellow-300"
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
        <div className="text-[30px] text-center font-bold">Puntos: {score}</div>
      </div>
    </div>
  );
};
