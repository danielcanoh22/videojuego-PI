import { GameLayout, NextScreenButton } from "../components/common";

// TODO: implementar la pantalla final del minijuego
export const GameOver = ({ screen }: { screen: number }) => {
  return (
    <GameLayout screen={screen}>
      <div className="z-20 flex flex-col justify-center items-center gap-20">
        <h2 className="text-6xl">Pantalla Final</h2>

        <div className="flex gap-6">
          <NextScreenButton>Volver a jugar</NextScreenButton>
          <NextScreenButton>Salir</NextScreenButton>
        </div>
      </div>
    </GameLayout>
  );
};
