import { TitleSecondary } from "../../../titles/Titles";

export const Welcome = ({ onNextSection }: { onNextSection: () => void }) => {
  return (
    <div className="bg-blue-100 w-full h-full rounded-lg p-4 border border-black relative">
      <div className="flex flex-col justify-center p-4 gap-20 h-full">
        <div className="flex flex-col items-center gap-10">
          <TitleSecondary
            title="Bienvenid@ a NOMBRE MINIJUEGO"
            styles="text-center mb-10"
          />
          <p className="text-3xl w-3/4 text-center">
            En este minijuego deberás revisar una serie de correos electrónicos
            simulados para identificar aquellos que son sospechosos de phishing.
            Tendrás que analizar detalles como el remitente, enlaces y errores
            comunes de los correos fraudulentos.
          </p>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-centermb-2 max-w-max mx-auto"
          onClick={onNextSection}
        >
          Iniciar juego
        </button>
      </div>
    </div>
  );
};
