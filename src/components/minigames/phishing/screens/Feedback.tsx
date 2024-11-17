import { ContentData, SmishingData } from "../../../../types";
import {
  GameImage,
  GameLayout,
  Message,
  NextScreenButton,
  Score,
} from "../components/common";
import { FeedbackItem, ScoreSummary } from "../components/feedback";

import { emailsData } from "../data";

export const Feedback = ({
  content,
  positiveFeedback,
  onScreen,
  onFinishGame,
  index,
  score,
  additionalPoints,
}: {
  content: ContentData | SmishingData;
  positiveFeedback: boolean | null;
  index: number;
  score: number;
  additionalPoints: number[];
  onScreen: () => void;
  onFinishGame: () => void;
}) => {
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
            {/* @ts-expect-error Fix type */}
            {!content.isSmishing && (
              <div className="flex flex-col gap-4 mt-12 text-2xl mb-6">
                <FeedbackItem item="Asunto">
                  {/* @ts-expect-error Fix type */}
                  {content.feedback.subject}
                </FeedbackItem>
                <FeedbackItem item="Remitente">
                  {/* @ts-expect-error Fix type */}
                  {content.feedback.sender}
                </FeedbackItem>
                <FeedbackItem item="Correo electrónico">
                  {/* @ts-expect-error Fix type */}
                  {content.feedback.email}
                </FeedbackItem>
                <FeedbackItem item="Mensaje">
                  {/* @ts-expect-error Fix type */}
                  {content.feedback.body}
                </FeedbackItem>

                <ScoreSummary
                  correctAnswer={isCorrect}
                  additionalPoints={additionalPoints}
                  content={content}
                />
              </div>
            )}
            {/* @ts-expect-error Fix type */}
            {content.isSmishing && (
              <div className="flex flex-col gap-4 mt-12 text-2xl mb-6">
                <FeedbackItem item="Número telefónico">
                  {/* @ts-expect-error Fix type */}
                  {content.feedback.number}
                </FeedbackItem>
                <FeedbackItem item="Mensaje">
                  {/* @ts-expect-error Fix type */}
                  {content.feedback.message}
                </FeedbackItem>

                <ScoreSummary
                  correctAnswer={isCorrect}
                  additionalPoints={additionalPoints}
                  content={content}
                />
              </div>
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
                  {/* @ts-expect-error Fix type */}
                  {content.isSmishing ? "Smishing" : "Phishing"}
                </span>
              </p>
            </Message>
            <div
              className="justify-self-center"
              // @ts-expect-error Fix type
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
