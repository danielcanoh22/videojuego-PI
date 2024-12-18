import { BsTrash } from "react-icons/bs";
import { EmailButton } from "./EmailButton";
import {
  ContentData,
  EmailElementType,
  SmishingData,
} from "../../../../../types";
import { EMAIL_PARTS } from "../../../../../utils";

export const EmailContent = ({
  onAddElement,
  content,
}: {
  onAddElement: (element: EmailElementType) => void;
  content: ContentData | SmishingData;
}) => {
  const addElement = (element: string) => {
    const id = crypto.randomUUID();
    onAddElement({ id, name: element });
  };

  return (
    <div className="w-full h-full bg-white p-4 placeholder:rounded-bl-md rounded-br-md">
      <h4
        className="text-xl mb-4 cursor-pointer hover:text-purple-700"
        onClick={() => addElement(EMAIL_PARTS.subject)}
      >
        {/* @ts-expect-error Fix type */}
        {content.subject}
      </h4>
      <div className="flex justify-between items-center">
        <p
          className="text-lg font-bold cursor-pointer hover:text-purple-700"
          onClick={() => addElement(EMAIL_PARTS.sender)}
        >
          {/* @ts-expect-error Fix type */}
          {content.sender}
        </p>
        <small>mar, 17 sept, 20:53 </small>
      </div>
      <p
        className="font-normal text-blue-700 underline underline-offset-2 mb-8 mt-2 cursor-pointer hover:text-purple-700"
        onClick={() => addElement(EMAIL_PARTS.email)}
      >
        {/* @ts-expect-error Fix type */}
        {content.email}
      </p>
      <p
        className="cursor-pointer hover:text-purple-700"
        onClick={() => addElement(EMAIL_PARTS.body)}
      >
        {/* @ts-expect-error Fix type */}
        {content.body}
      </p>
      <div className="flex items-center justify-between mt-10">
        <div className="flex gap-4 items-center">
          <EmailButton>Responder</EmailButton>
          <EmailButton>Reenviar</EmailButton>
        </div>
        <BsTrash className="text-2xl text-red-800" />
      </div>
    </div>
  );
};
