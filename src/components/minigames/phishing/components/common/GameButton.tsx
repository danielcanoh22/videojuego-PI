import { MouseEventHandler, ReactNode } from "react";

export const GameButton = ({
  children,
  isPositive,
  onClick,
}: {
  children: ReactNode;
  isPositive: boolean;
  onClick?: MouseEventHandler;
}) => {
  const bgColor = isPositive
    ? "bg-green-700 hover:bg-green-800"
    : "bg-red-700 hover:bg-red-800";

  return (
    <button
      className={`border text-white py-4 rounded-md text-2xl ${bgColor} transition duration-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
