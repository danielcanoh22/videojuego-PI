import Swal from "sweetalert2";

import { ReactNode } from "react";
import { GameImage } from "./GameImage";
import { NextScreenButton } from "./NextScreenButton";
import { usePhishingGame } from "../../../../../context/PhishingGameContext";

export const GameLayout = ({
  children,
  screen,
}: {
  children: ReactNode;
  screen?: number;
}) => {
  const { closePhishingGame } = usePhishingGame();

  const handleExitGame = () => {
    Swal.fire({
      title: "¿Estás seguro de que deseas salir? ",
      showDenyButton: true,
      confirmButtonText: "Salir",
      denyButtonText: "Cancelar",
      customClass: {
        actions: "my-actions",
        confirmButton: "order-2",
        denyButton: "order-1",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        closePhishingGame();
      }
    });
  };

  return (
    <div className="flex flex-col w-full h-auto xl:h-full bg-blue-50 p-6 relative ">
      <div className="w-full h-full bg-minigameBackground bg-cover opacity-15 absolute top-0 left-0 z-10"></div>
      <div className="flex justify-center z-20 mb-6">
        {screen !== 4 && (
          <NextScreenButton
            styles="absolute top-6 left-6"
            onClick={handleExitGame}
          >
            Salir
          </NextScreenButton>
        )}

        <GameImage
          image="/assets/img/phishing/title-phishing.png"
          title="Título del videojuego - Detector de Fraudes"
          styles="w-72"
        />
      </div>

      {children}
    </div>
  );
};
