export const EmailSidebar = () => {
  return (
    <div className="flex flex-col gap-2 bg-blue-300">
      <div className="bg-white text-blue-500 px-2">Redactar</div>
      <div className="text-white">Recibidos</div>
      <div className="text-white">Enviados</div>
      <div className="text-white">Borradores</div>
      <div className="text-white">Spam</div>
      <div className="text-white">Papelera</div>
    </div>
  );
};
