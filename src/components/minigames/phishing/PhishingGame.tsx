import { useState } from "react";
import { Welcome } from "./screens/Welcome";
import { GameContent } from "./screens/GameContent";
import { Window } from "../../layout/Window";

export const PhishingGame = () => {
  const [screen, setScreen] = useState(0);

  const handleNextSection = () => {
    setScreen(screen + 1);
  };

  return (
    <Window>
      {screen === 0 && <Welcome onNextSection={handleNextSection} />}
      {screen === 1 && <GameContent />}
    </Window>
  );
};
