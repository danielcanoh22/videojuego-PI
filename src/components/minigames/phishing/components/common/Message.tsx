import { ReactNode } from "react";

export const Message = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: string;
}) => {
  return (
    <div className={`bg-blue-100 p-2 rounded-md ${styles}`}>{children}</div>
  );
};
