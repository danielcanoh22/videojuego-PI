import { EmailButton } from "./EmailButton";

export const EmailContent = () => {
  return (
    <div className="w-full h-full bg-white p-4 mt-2 rounded-bl-md rounded-br-md">
      <h4 className="text-2xl mb-4">Este es el asunto del email :)</h4>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold">Nombre del remitente </p>
        <small>mar, 17 sept, 20:53 </small>
      </div>
      <p className="font-normal text-blue-700 underline underline-offset-2 mb-8 mt-2">
        correo@correo.com
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
        doloremque optio atque fugit autem adipisci culpa. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Recusandae, doloremque optio
        atque fugit autem adipisci culpa.
      </p>
      <div className="flex gap-2 items-center mt-10">
        <EmailButton>Responder</EmailButton>
        <EmailButton>Reenviar</EmailButton>
      </div>
    </div>
  );
};
