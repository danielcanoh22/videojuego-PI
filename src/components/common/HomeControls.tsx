import { useEffect, useState } from "react";
import { useGame } from "../../context/GameContext";

export const HomeControls = () => {
  const { showHomeControls, showHomeTutorial } = useGame();
  const [showMessage, setShowMessage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!showHomeTutorial) {
      // Temporizador para mostrar el mensaje después de 2 segundos
      const showTimer = setTimeout(() => {
        setShowMessage(true);
        // Temporizador para desvanecer el mensaje después de 5 segundos
        const fadeTimer = setTimeout(() => {
          setFadeOut(true);
          const fadeOutTimer = setTimeout(() => {
            setShowMessage(false);
            setFadeOut(false);
          }, 500); // Duración del desvanecimiento
          return () => clearTimeout(fadeOutTimer);
        }, 7000); // Duración antes de comenzar a desvanecerse

        return () => clearTimeout(fadeTimer);
      }, 1500); // 2 segundos para mostrar el mensaje

      // Limpiar el temporizador al desmontar el componente
      return () => clearTimeout(showTimer);
    }
  }, [showHomeTutorial]);

  if (!showHomeControls) return null;

  return (
    <>
      {showMessage && (
        <div
          className={`fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-6xl text-center bg-black/60 p-6 rounded-md text-white transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          Mueve a Ruh utilizando A, W, S, D o las flechas del teclado.
        </div>
      )}
    </>
  );
};
