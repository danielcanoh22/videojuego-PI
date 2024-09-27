import { ReactNode } from "react";

export const Window = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="w-[90%] h-[90%] p-3 rounded-lg shadow-md shadow-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    //   {children}
    // </div>
    <div className="w-[90%] h-[90%] p-3 rounded-lg shadow-md shadow-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border z-40 ">
      <div className="absolute inset-0 bg-blue-400/50 filter blur-xl rounded-lg"></div>

      <div className="h-full z-50 overflow-auto">{children}</div>
    </div>
  );
};

// bg-gradient-to-r from-fuchsia-700 to-cyan-600
