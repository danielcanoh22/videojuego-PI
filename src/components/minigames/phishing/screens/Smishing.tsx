import { useDrop } from "react-dnd";
import { PhoneLayout } from "../components/phone/PhoneLayout";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { ContentData, SmishingData } from "../../../../types";
import { PhoneNavbar } from "../components/phone/PhoneNavbar";
import { PhoneMessage } from "../components/phone/PhoneMessage";

export const DropTarget = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PHONE_LAYOUT", // Acepta elementos de este tipo
    drop: (item) => onDrop(item), // Maneja el drop
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="flex items-center justify-center text-9xl w-96 h-96 border-2"
      style={{
        backgroundColor: isOver ? "#8abdff50" : "white",
      }}
    >
      {children}
    </div>
  );
};

export const Smishing = ({
  onChooseOption,
  content,
}: {
  onChooseOption: (option: boolean) => void;
  content: ContentData | SmishingData;
}) => {
  // @ts-expect-error Fix type
  const handleDropPositive = (item) => {
    onChooseOption(true);
  };

  // @ts-expect-error Fix type
  const handleDropNegative = (item) => {
    onChooseOption(false);
  };

  return (
    <div className="grid grid-cols-[auto_auto_auto] justify-center items-center gap-20">
      <DropTarget onDrop={handleDropPositive}>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-3xl text-red-800">Eliminar mensaje</p>
          <FaRegTrashAlt className="text-red-800" />
        </div>
      </DropTarget>

      <PhoneLayout>
        {/* @ts-expect-error Fix type */}
        <PhoneNavbar phoneNumber={content.number} />
        {/* @ts-expect-error Fix type */}
        <PhoneMessage phoneMessage={content.message} />
      </PhoneLayout>

      <DropTarget onDrop={handleDropNegative}>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-3xl text-green-800">Parece confiable</p>
          <FaRegCheckCircle className="text-green-700" />
        </div>
      </DropTarget>
    </div>
  );
};
