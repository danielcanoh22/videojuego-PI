import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Experience } from "./components/map/Experience";

import { PhishingGame } from "./components/minigames/phishing/PhishingGame";

import "@fontsource-variable/exo-2";
import { TrojanWindow } from "./components/minigames/trojan/components/TrojanWindow";
import { HomeScreen } from "./components/common/HomeScreen";
import { HomeTutorial } from "./components/common/HomeTutorial";
import { HomeControls } from "./components/common/HomeControls";
import { CreditsScreen } from "./components/common/CreditsScreen";
import { TrojanHomeScreen } from "./components/minigames/trojan/components/TrojanHomeScreen";
import { WinningScreen } from "./components/minigames/trojan/components/WinningScreen";
import { Star } from "./components/common/Star";
import { useTrojanGame } from "./context/TrojanGameContext";
import { useUI } from "./context/UIContext";
import { usePhishingGame } from "./context/PhishingGameContext";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];

function App() {
  const { state } = useTrojanGame();
  const { state: uiState } = useUI();
  const { state: statePhishing } = usePhishingGame();

  const isPhishingGameActive = statePhishing.gameState === "active";

  const isHomeVisible = state.gameState === "home";
  const isQuestionVisible = state.gameState === "question";

  const isHomeScreenVisible = uiState.activeScreen === "home";
  const isHomeTutorialVisible = uiState.activeScreen === "tutorial";
  const isWinningVisible = state.gameState === "won";
  const isCreditsVisible = uiState.activeScreen === "credits";
  const isHomeControlsVisible = uiState.activeScreen === "controls";

  const showOverlay =
    isPhishingGameActive ||
    isQuestionVisible ||
    isHomeTutorialVisible ||
    isHomeVisible ||
    isWinningVisible;

  return (
    <>
      {isHomeScreenVisible && <HomeScreen />}

      {isCreditsVisible && <CreditsScreen />}

      {isHomeTutorialVisible && <HomeTutorial />}

      {isHomeControlsVisible && <HomeControls />}

      {isHomeVisible && <TrojanHomeScreen />}

      {isWinningVisible && <WinningScreen />}

      <Star />

      <KeyboardControls map={keyboardMap}>
        <Canvas shadows camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </KeyboardControls>

      {isPhishingGameActive && <PhishingGame />}

      {isQuestionVisible && <TrojanWindow />}

      {showOverlay && (
        <div className="w-full h-full bg-black/50 fixed top-0 left-0 z-10"></div>
      )}
    </>
  );
}

export default App;
