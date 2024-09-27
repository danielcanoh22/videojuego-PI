import { ReactNode } from "react";
import { EmailLogo } from "./EmailLogo";
import { EmailSidebar } from "./EmailSidebar";

export const EmailLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-blue-300 p-2 pb-6 h-full max-h-max w-full rounded-md">
      <EmailLogo />
      <div className="flex gap-4 mt-4">
        <EmailSidebar />
        {children}
      </div>
    </div>
  );
};
