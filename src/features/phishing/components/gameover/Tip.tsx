type TipProps = {
  title: string;
  message: string;
};

export const Tip = ({ title, message }: TipProps) => {
  return (
    <li className="text-2xl">
      🚧
      <span className="font-bold">{title}: </span>
      {message}
    </li>
  );
};
