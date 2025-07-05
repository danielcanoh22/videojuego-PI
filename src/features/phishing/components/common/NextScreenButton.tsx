import { ReactNode } from "react";

type NextScreenButtonProps = {
  children: ReactNode;
  styles?: string;
  onClick?: () => void;
};

export const NextScreenButton = ({
  children,
  styles,
  onClick,
}: NextScreenButtonProps) => {
  return (
    <button
      type="button"
      className={`text-white bg-gradient-to-br from-blue-800 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-4xl px-5 py-2.5 text-centermb-2 max-w-max mx-auto border-4 border-blue-400 hover:border-blue-800 transition duration-300 ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
