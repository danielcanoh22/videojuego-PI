export const Tip = ({ title, message }: { title: string; message: string }) => {
  return (
    <li className="text-2xl">
      🚧
      <span className="font-bold">{title}: </span>
      {message}
    </li>
  );
};
