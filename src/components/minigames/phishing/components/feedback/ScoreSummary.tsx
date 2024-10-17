import { ContentData, SmishingData } from "../../../../../types";

export const ScoreSummary = ({
  correctAnswer,
  additionalPoints,
  content,
}: {
  correctAnswer: boolean;
  additionalPoints: number[];
  content: ContentData | SmishingData;
}) => {
  const pointsEarned = correctAnswer ? 20 : 0;

  return (
    <div className="flex flex-col gap-4 bg-blue-100 p-2 rounded-lg mt-4 shadow-md">
      {!content.isSmishing && (
        <>
          <p>⭐ Puntos ganados por identificar el correo: {pointsEarned}</p>
          <p>
            💯 Puntos ganados por identificar cada elemento:{" "}
            {additionalPoints[0]}
          </p>
          <p>
            ⛔ Puntos perdidos por identificar mal los elementos:{" "}
            {Math.abs(additionalPoints[1])}
          </p>
        </>
      )}

      {content.isSmishing && (
        <p>
          ⭐ Puntos ganados por identificar el mensaje de texto: {pointsEarned}
        </p>
      )}
    </div>
  );
};
