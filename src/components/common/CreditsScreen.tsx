import { useGame } from "../../context/GameContext";
import { HomeScreenButton } from "./HomeScreenButton";

export const CreditsScreen = () => {
  const { closeCreditsScreen } = useGame();

  return (
    <div className="fixed top-0 left-0 bg-blue-200 w-screen h-screen z-[100] text-black flex flex-col items-center p-20">
      <div className="w-full h-full bg-minigameBackground bg-cover opacity-15 fixed top-0 left-0"></div>
      <div className="z-10 text-center text-xl">
        <h2 className="mb-10 text-5xl font-bold text-blue-800">Créditos</h2>

        <h3 className="text-3xl mb-6 font-bold">Modelos 3D</h3>

        <h4 className="text-2xl mb-2 font-semibold">Mapa</h4>
        <p>
          "Invasion Halloween Map - miniroyale.io" (
          <a
            href="https://skfb.ly/oVBsY"
            target="_blank"
            className="text-blue-600"
          >
            https://skfb.ly/oVBsY
          </a>
          ) by zct_33 <br /> is licensed under Creative Commons Attribution (
          <a
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            className="text-blue-600"
          >
            http://creativecommons.org/licenses/by/4.0/
          </a>
          ).
        </p>

        <h4 className="text-2xl mb-2 mt-8 font-semibold">Personaje</h4>
        <p>
          "Cupguy" (
          <a
            href="https://skfb.ly/otHu9"
            target="_blank"
            className="text-blue-600"
          >
            https://skfb.ly/otHu9
          </a>
          ) by Ivan Petralia <br /> is licensed under Creative Commons
          Attribution (
          <a
            href="http://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            className="text-blue-600"
          >
            http://creativecommons.org/licenses/by/4.0/
          </a>
          ).
        </p>

        <h3 className="text-3xl mb-6 font-bold mt-10">Desarrolladores</h3>
        <p>Daniel Cano Hernández</p>
        <p>Alejandra Díaz Hernández</p>
      </div>
      <div className="z-10 mt-20">
        <HomeScreenButton onClick={closeCreditsScreen}>Atrás</HomeScreenButton>
      </div>
    </div>
  );
};
