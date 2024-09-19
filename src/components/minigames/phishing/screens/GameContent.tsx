import { Email } from "../email/Email";

export const GameContent = () => {
  return (
    <div className="flex items-center gap-10 w-full h-full bg-blue-50 p-6">
      <Email />
      <div>Más contenido</div>
    </div>
  );
};
