import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Experience } from "./components/map/Experience";
import { useGame } from "./context/GameContext";
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
import { useEffect } from "react";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];



function App() {
  const {
    showHomeScreen,
    showPhishingGame,
    showModal,
    showHomeTutorial,
    showHomeControls,
    showCreditsScreen,
    showHomeTrojan,
    showWinningScreen,
  } = useGame();

  const showOverlay =
    showPhishingGame ||
    showModal ||
    showHomeTutorial ||
    showHomeTrojan ||
    showWinningScreen;

  useEffect(() => {
    const bgAudio = new Audio("/assets/sounds/fight.mp3");
    bgAudio.play();
    bgAudio.volume = 0.20;
    bgAudio.loop = true;
    
  },[])

  return (
    <>

      {showHomeScreen && <HomeScreen />}

      {showCreditsScreen && <CreditsScreen />}

      {showHomeTutorial && <HomeTutorial />}

      {showHomeControls && <HomeControls />}

      {showHomeTrojan && <TrojanHomeScreen />}

      {showWinningScreen && <WinningScreen />}

      <Star />

      <KeyboardControls map={keyboardMap}>
        <Canvas shadows camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </KeyboardControls>

      {showPhishingGame && <PhishingGame />}

      {showModal && <TrojanWindow />}

      {showOverlay && (
        <div className="w-full h-full bg-black/50 fixed top-0 left-0 z-10"></div>
      )}
    </>
  );
}

export default App;
