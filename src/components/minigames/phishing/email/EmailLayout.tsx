import { ReactNode } from "react";

export const EmailLayout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-blue-200 p-2 w-1/2 rounded-md">{children}</div>;
};
