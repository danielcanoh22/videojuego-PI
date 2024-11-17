import { ContentData, EmailElementType, SmishingData } from "../../../../types";
import { GameLayout, Score } from "../components/common";

import { difficulty } from "../../../../utils";
import { Smishing } from "./Smishing";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Phishing } from "./Phishing";

export const GameContent = ({
  content,
  onChooseOption,
  score,
  elements,
  onAddElement,
  onRemoveElement,
}: {
  content: ContentData | SmishingData;
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
        {/* @ts-expect-error Fix type */}
        {!content.isSmishing && (
          <Phishing
            content={content}
            elements={elements}
            onAddElement={onAddElement}
            onRemoveElement={onRemoveElement}
            onChooseOption={onChooseOption}
          />
        )}
        {/* @ts-expect-error Fix type */}
        {content.isSmishing && (
          <DndProvider backend={HTML5Backend}>
            <Smishing onChooseOption={onChooseOption} content={content} />
          </DndProvider>
        )}
      </div>
    </GameLayout>
  );
};
