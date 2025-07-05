import { IoIosClose } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { EmailElementType } from "@/types/phishing";

export const EmailElement = ({
  element,
  onRemoveElement,
}: {
  element: EmailElementType;
  onRemoveElement: (id: string) => void;
}) => {
  return (
    <div className="flex items-center">
      <div className="border-4 border-blue-900 p-2 rounded-md bg-blue-700">
        <IoWarningOutline className="text-2xl text-white" />
      </div>
      <p className="flex items-center justify-between gap-6 text-2xl hover:text-blue-800 border-4 border-l-0 pl-2 pr-1 border-blue-900 rounded-tr-full rounded-br-full w-full">
        {element.name}{" "}
        <span
          className="text-2xl cursor-pointer bg-blue-700 rounded-full text-white"
          onClick={() => onRemoveElement(element.id)}
        >
          <IoIosClose />
        </span>
      </p>
    </div>
  );
};
