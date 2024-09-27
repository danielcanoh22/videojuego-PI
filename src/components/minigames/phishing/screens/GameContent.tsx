import { ContentData, EmailElementType } from "../../../../types";
import { EmailLayout, EmailContent, EmailElement } from "../components/email";
import { Message, GameButton, GameLayout, Score } from "../components/common";

import { difficulty } from "../../../../utils";

export const GameContent = ({
  content,
  onChooseOption,
  score,
  elements,
  onAddElement,
  onRemoveElement,
}: {
  content: ContentData;
  score: number;
  elements: EmailElementType[];
  onChooseOption: (option: boolean) => void;
  onAddElement: (element: EmailElementType) => void;
  onRemoveElement: (id: string) => void;
}) => {
  let difficultyColor;

  if (content.difficulty === difficulty.EASY) difficultyColor = "bg-green-200";
  if (content.difficulty === difficulty.MID) difficultyColor = "bg-yellow-200";
  if (content.difficulty === difficulty.HARD) difficultyColor = "bg-red-200";

  return (
    <GameLayout>
      <div className="z-20">
        <Score value={score} />
        <p className="mt-4 text-2xl mb-4 text-center">
          Nivel de dificultad:{" "}
          <span className={`${difficultyColor} px-4 rounded-lg`}>
            {content.difficulty}
          </span>
        </p>

        <div className="grid grid-cols-[1fr_25%_20%] gap-14 h-full w-[90%] mx-auto mt-10">
          <EmailLayout>
            <EmailContent onAddElement={onAddElement} content={content} />
          </EmailLayout>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl text-blue-800">
              Elementos identificados
            </h3>
            {!elements.length && (
              <Message styles="shadow-md">
                Aún no has identificado ningún elemento sospechoso.
              </Message>
            )}
            {elements.map((el) => (
              <EmailElement
                key={el.id}
                element={el}
                onRemoveElement={onRemoveElement}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <GameButton
              isPositive={false}
              onClick={() => onChooseOption(false)}
            >
              No es sospechoso
            </GameButton>
            <GameButton isPositive onClick={() => onChooseOption(true)}>
              ¡Es sospechoso!
            </GameButton>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};
