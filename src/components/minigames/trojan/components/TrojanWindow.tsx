import { useGame } from "../../../../context/GameContext";
import Star from "./star.svg";
import { ansOption } from "./options";
import { useState } from "react";

export const TrojanWindow = () => {
  const { closeModal } = useGame();


  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * ansOption.length);
    return ansOption[randomIndex];
  };

  const [currentQuestion]= useState(getRandomQuestion());

  return (
    <div className="w-[680px] h-[240px] bg-black fixed top-1/4 right-[100px] -translate-y-1/2 rounded-md text-white text-lg ">
      <div>
        <div className="w-full h-80 bg-[rgb(128,128,255)] rounded-lg">
          <button
            className="text-4xl text-white border-2 border-white p-2"
            onClick={() => closeModal()}
          >
            x
          </button>
          <div className="flex items-center justify-center">
            {currentQuestion.question}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className="w-full h-[100px] bg-[rgb(128,128,255)] rounded-lg flex items-center justify-center mt-4"
            >
              {String.fromCharCode(97 + index)}. {option}
            </div>
          ))}
        </div>

        <div className="flex flex-row items-center mt-4">
          <img src={Star} alt="Point's star" className="w-[80px] h-[80px]" />
          <div className="w-32 h-10 bg-yellow-300 ml-2"></div>
          <div className="w-full h-10 bg-[rgb(255,0,255)] flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};
