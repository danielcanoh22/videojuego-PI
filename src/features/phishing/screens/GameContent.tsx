import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  EmailContentData,
  EmailElementType,
  PhishingContent,
} from "@/types/phishing";
import { DIFFICULTY } from "@/utils/constants";
import { Phishing } from "./Phishing";
import { Smishing } from "./Smishing";
import { GameLayout } from "@/features/phishing/components/common/GameLayout";
import { Score } from "@/features/phishing/components/common/Score";

type GameContentProps = {
  content: PhishingContent;
  score: number;
  elements: EmailElementType[];
  onChooseOption: (option: boolean) => void;
  onAddElement: (element: EmailElementType) => void;
  onRemoveElement: (id: string) => void;
};

export const GameContent = ({
  content,
  onChooseOption,
  score,
  elements,
  onAddElement,
  onRemoveElement,
}: GameContentProps) => {
  let difficultyColor;

  if (content.difficulty === DIFFICULTY.EASY) difficultyColor = "bg-green-200";
  if (content.difficulty === DIFFICULTY.MID) difficultyColor = "bg-yellow-200";
  if (content.difficulty === DIFFICULTY.HARD) difficultyColor = "bg-red-200";

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

        {!content.isSmishing && (
          <Phishing
            content={content as EmailContentData}
            elements={elements}
            onAddElement={onAddElement}
            onRemoveElement={onRemoveElement}
            onChooseOption={onChooseOption}
          />
        )}

        {content.isSmishing && (
          <DndProvider backend={HTML5Backend}>
            <Smishing onChooseOption={onChooseOption} content={content} />
          </DndProvider>
        )}
      </div>
    </GameLayout>
  );
};
