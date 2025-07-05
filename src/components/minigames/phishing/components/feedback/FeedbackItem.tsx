import { ReactNode } from "react";

type FeedbackItemProps = {
  item: string;
  children: ReactNode;
};

export const FeedbackItem = ({ item, children }: FeedbackItemProps) => {
  return (
    <p>
      <span className="font-bold">{item}: </span>
      {children}
    </p>
  );
};
