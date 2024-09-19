import { ReactNode } from "react";

export const Window = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-3/4 h-3/4 bg-gradient-to-r from-fuchsia-700 to-cyan-600 p-3 rounded-lg shadow-md shadow-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
};
