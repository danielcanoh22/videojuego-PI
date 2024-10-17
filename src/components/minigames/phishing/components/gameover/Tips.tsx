import { Tip } from "./Tip";

const tips = [
  {
    title: "Revisa siempre el remitente",
    message:
      "asegúrate de revisar la dirección de correo electrónico o número telefónico de la persona que se comunicó contigo.",
  },
  {
    title: "Verifica los enlaces antes de hacer click",
    message: "asegúrate de ingresar solo a sitios web oficiales.",
  },
  {
    title: "Cuidado con tu información personal",
    message:
      "no compartas información como contraseñas o números de tarjeta de crédito, a través de correos electrónicos o mensajes de texto.",
  },
];

export const Tips = () => {
  return (
    <ul className="grid gap-4">
      {tips.map((tip) => (
        <Tip key={tip.title} {...tip} />
      ))}
    </ul>
  );
};
