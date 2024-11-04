import { useGame } from "../../../../context/GameContext";
import Star from "./star.svg";
import { ansOption } from "./options";
import { useState } from "react";

export const TrojanWindow = () => {
  const { closeModal, removeEnemy, closestEnemy } = useGame();

  const currentQuestion = ansOption.find(
    (question) => question.id === closestEnemy.id
  );
  const [selectedOption, setSelectedOption] = useState<null | number>(null);
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    const correct = index === currentQuestion.correct;
    setIsCorrect(correct);
    const pointsEarned = correct ? 25 : -10;
    setScore((prevScore) => prevScore + pointsEarned);

    if (correct) {
      removeEnemy(currentQuestion.coordinates); // Elimina el enemigo si es correcto
      // closeModal();
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
          <div className="text-center text-md">{currentQuestion.question}</div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          {currentQuestion.options.map((option, index) => (
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
            {isCorrect ? "Sabe cositas 🫦" : "Que estan viendo mis ojos 🤺🤺🤺"}
          </div>
        )}

        <div className="flex flex-row items-center mt-4">
          <img src={Star} alt="Point's star" className="w-[80px] h-[80px]" />
          <div className="w-32 h-10 bg-yellow-300 ml-2"></div>
          <div className="w-full h-10 bg-[rgb(255,0,255)] flex justify-center items-center"></div>
        </div>
        <div className="text-[30px] text-center font-bold">Puntos: {score}</div>
      </div>
    </div>
  );
};
