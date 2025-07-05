import { GoPlusCircle } from "react-icons/go";

export const PhoneBottombar = () => {
  return (
    <div className="grid grid-cols-[15%_1fr] items-center px-2 py-4">
      <GoPlusCircle className="text-2xl text-white" />
      <div className="bg-gray-500 p-2 rounded-full text-gray-200 px-4">
        Escribe un mensaje
      </div>
    </div>
  );
};
