import { ReactNode } from "react";

export const HomeScreenButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      className={`text-white bg-gradient-to-br from-blue-800 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-4xl px-5 py-2.5 text-centermb-2 max-w-max mx-auto border-4 border-blue-700 hover:border-blue-500 transition duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
