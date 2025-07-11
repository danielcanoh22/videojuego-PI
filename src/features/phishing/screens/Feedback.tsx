import { EmailContentData, PhishingContent } from "@/types/phishing";
import { emailsData } from "@/features/phishing/data";
import { GameLayout } from "@/features/phishing/components/common/GameLayout";
import { Score } from "@/features/phishing/components/common/Score";
import { NextScreenButton } from "@/features/phishing/components/common/NextScreenButton";
import { Message } from "@/features/phishing/components/common/Message";
import { GameImage } from "@/components/common/GameImage";
import { FeedbackPhishing } from "@/features/phishing/components/feedback/FeedbackPhishing";
import { FeedbackSmishing } from "@/features/phishing/components/feedback/FeedbackSmishing";

type FeedbackProps = {
  content: PhishingContent;
  positiveFeedback: boolean | null;
  index: number;
  score: number;
  additionalPoints: number[];
  onScreen: () => void;
  onFinishGame: () => void;
};

export const Feedback = ({
  content,
  positiveFeedback,
  onScreen,
  onFinishGame,
  index,
  score,
  additionalPoints,
}: FeedbackProps) => {
  const isCorrect = content.isSuspicious === positiveFeedback;
  const finalLevel = emailsData.length - 1 === index;
  const answer = isCorrect ? "Correcta ✅" : "Incorrecta ❌";
  const bgColor = isCorrect ? "bg-green-200" : "bg-red-200";

  return (
    <GameLayout>
      <div className="z-20">
        <Score value={score} />
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 items-center gap-12">
          <div className="grid">
            <h3 className={`text-4xl ${bgColor} p-2 w-max rounded-md`}>
              <span className="font-bold">Respuesta:</span> {answer}
            </h3>

            {!content.isSmishing ? (
              <FeedbackPhishing
                content={content as EmailContentData}
                isCorrect={isCorrect}
                additionalPoints={additionalPoints}
              />
            ) : (
              <FeedbackSmishing
                content={content}
                isCorrect={isCorrect}
                additionalPoints={additionalPoints}
              />
            )}

            {!finalLevel && (
              <NextScreenButton onClick={onScreen} styles="">
                Continuar
              </NextScreenButton>
            )}
            {finalLevel && (
              <NextScreenButton onClick={onFinishGame}>
                Terminar
              </NextScreenButton>
            )}
          </div>
          <div className="flex flex-col items-center gap-4">
            <Message styles="bg-red-100 shadow-md text-2xl w-max">
              <p className="font-bold">
                ⛔ Tipo de ataque:{" "}
                <span className="font-normal">
                  {content.isSmishing ? "Smishing" : "Phishing"}
                </span>
              </p>
            </Message>
            <div
              className="justify-self-center"
              style={content.isSmishing ? { width: "35%" } : {}}
            >
              <GameImage
                image={content.feedback.image}
                title="Imagen con los elementos sospechosos del correo electrónico señalados."
              />
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};
