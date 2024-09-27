import { FaStar } from "react-icons/fa";

export const Score = ({ value }: { value: number }) => {
  return (
    <div className="flex items-center gap-2 absolute top-10 right-10 text-2xl">
      <FaStar className="text-yellow-500 drop-shadow-md" />
      <div className="border-2 border-blue-900 bg-blue-500 text-white px-4 rounded-full shadow-md">
        {value}/100
      </div>
    </div>
  );
};
