export const PhoneMessage = ({ phoneMessage }: { phoneMessage: string }) => {
  return (
    <div className="bg-gray-500 text-white w-[90%] p-2 ml-2 rounded-lg border-2 border-gray-700 h-max self-end mb-6">
      {/* Servientrega: Tu paquete ha llegado al almacén. Intentamos la entrega dos
      veces pero no pudimos debido a que la información de la dirección estaba
      incompleta. Por favor, confirme su información en el siguiente enlace:
      https://enlacesospechoso.com */}
      {phoneMessage}
    </div>
  );
};
