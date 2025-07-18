import { useDrop } from "react-dnd";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { SmsContentData } from "@/types/phishing";
import { PhoneLayout } from "@/features/phishing/components/phone/PhoneLayout";
import { PhoneNavbar } from "@/features/phishing/components/phone/PhoneNavbar";
import { PhoneMessage } from "@/features/phishing/components/phone/PhoneMessage";

export const DropTarget = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "PHONE_LAYOUT",
    drop: (item) => onDrop(item),
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

type SmishingProps = {
  content: SmsContentData;
  onChooseOption: (option: boolean) => void;
};

export const Smishing = ({ onChooseOption, content }: SmishingProps) => {
  const handleDropPositive = () => {
    onChooseOption(true);
  };

  const handleDropNegative = () => {
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
        <PhoneNavbar phoneNumber={content.number} />

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
