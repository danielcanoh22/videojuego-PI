import { useEffect, useState } from "react";
import { useUI } from "../../context/UIContext";

export const HomeControls = () => {
  const { hideCurrentScreen } = useUI();

  const [showMessage, setShowMessage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowMessage(true);

      const fadeTimer = setTimeout(() => {
        setFadeOut(true);

        const cleanUpTimer = setTimeout(() => {
          setShowMessage(false);
          hideCurrentScreen();
        }, 500);

        return () => clearTimeout(cleanUpTimer);
      }, 7000);

      return () => clearTimeout(fadeTimer);
    }, 1500);

    return () => clearTimeout(showTimer);
  }, [hideCurrentScreen]); // L

  if (!showMessage) return null;

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
