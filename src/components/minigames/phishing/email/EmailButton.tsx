import { ReactNode } from "react";

export const EmailButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="border border-blue-800 px-4 rounded-full cursor-default">
      {children}
    </button>
  );
};
