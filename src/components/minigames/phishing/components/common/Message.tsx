import { ReactNode } from "react";

type MessageProps = {
  children: ReactNode;
  styles?: string;
};

export const Message = ({ children, styles }: MessageProps) => {
  return (
    <div className={`bg-blue-100 p-2 rounded-md ${styles}`}>{children}</div>
  );
};
