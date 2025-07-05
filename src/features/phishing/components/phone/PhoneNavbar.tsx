import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

export const PhoneNavbar = ({ phoneNumber }: { phoneNumber: string }) => {
  return (
    <div className="flex items-center justify-between bg-gray-500 p-4 text-white text-xl">
      <p>{phoneNumber}</p>
      <div className="flex items-center gap-4">
        <FaPhoneAlt />
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};
