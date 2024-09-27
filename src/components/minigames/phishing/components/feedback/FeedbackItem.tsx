import { ReactNode } from "react";

export const FeedbackItem = ({
  item,
  children,
}: {
  item: string;
  children: ReactNode;
}) => {
  return (
    <p>
      <span className="font-bold">{item}: </span>
      {children}
    </p>
  );
};
