import { SmsContentData } from "@/types/phishing";
import { FeedbackItem } from "./FeedbackItem";
import { ScoreSummary } from "./ScoreSummary";

type FeedbackSmishingProps = {
  content: SmsContentData;
  isCorrect: boolean;
  additionalPoints: number[];
};

export const FeedbackSmishing = ({
  content,
  isCorrect,
  additionalPoints,
}: FeedbackSmishingProps) => {
  return (
    <div className="flex flex-col gap-4 mt-12 text-2xl mb-6">
      <FeedbackItem item="Número telefónico">
        {content.feedback.number}
      </FeedbackItem>
      <FeedbackItem item="Mensaje">{content.feedback.message}</FeedbackItem>

      <ScoreSummary
        correctAnswer={isCorrect}
        additionalPoints={additionalPoints}
        content={content}
      />
    </div>
  );
};
