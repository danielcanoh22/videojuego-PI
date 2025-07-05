import { EmailContentData, EmailElementType } from "@/types/phishing";
import { EmailLayout } from "@/features/phishing/components/email/EmailLayout";
import { EmailContent } from "@/features/phishing/components/email/EmailContent";
import { Message } from "@/features/phishing/components/common/Message";
import { EmailElement } from "@/features/phishing/components/email/EmailElement";
import { GameButton } from "@/features/phishing/components/common/GameButton";

type PhishingProps = {
  content: EmailContentData;
  elements: EmailElementType[];
  onChooseOption: (option: boolean) => void;
  onAddElement: (element: EmailElementType) => void;
  onRemoveElement: (id: string) => void;
};

export const Phishing = ({
  content,
  elements,
  onAddElement,
  onRemoveElement,
  onChooseOption,
}: PhishingProps) => {
  return (
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
        <GameButton isPositive={false} onClick={() => onChooseOption(false)}>
          No es sospechoso
        </GameButton>
        <GameButton isPositive onClick={() => onChooseOption(true)}>
          ¡Es sospechoso!
        </GameButton>
      </div>
    </div>
  );
};
