import { EmailContentData } from "@/types/phishing";
import { FeedbackItem } from "./FeedbackItem";
import { ScoreSummary } from "./ScoreSummary";

type FeedbackPhishingProps = {
  content: EmailContentData;
  isCorrect: boolean;
  additionalPoints: number[];
};

export const FeedbackPhishing = ({
  content,
  isCorrect,
  additionalPoints,
}: FeedbackPhishingProps) => {
  return (
    <div className="flex flex-col gap-4 mt-12 text-2xl mb-6">
      <FeedbackItem item="Asunto">{content.feedback.subject}</FeedbackItem>
      <FeedbackItem item="Remitente">{content.feedback.sender}</FeedbackItem>
      <FeedbackItem item="Correo electrónico">
        {content.feedback.email}
      </FeedbackItem>
      <FeedbackItem item="Mensaje">{content.feedback.body}</FeedbackItem>

      <ScoreSummary
        correctAnswer={isCorrect}
        additionalPoints={additionalPoints}
        content={content}
      />
    </div>
  );
};
