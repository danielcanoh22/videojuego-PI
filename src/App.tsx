import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Experience } from "./components/map/Experience";
import { useGame } from "./context/GameContext";
import { PhishingGame } from "./components/minigames/phishing/PhishingGame";

import "@fontsource-variable/exo-2";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
];

function App() {
  const { showPhishingGame } = useGame();

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Canvas shadows camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
      </KeyboardControls>
      {showPhishingGame && <PhishingGame />}

      {/* <PhishingGame /> */}
      {showPhishingGame && (
        <div className="w-full h-full bg-black/50 fixed top-0 left-0 z-10"></div>
      )}
    </>
  );
}

export default App;
