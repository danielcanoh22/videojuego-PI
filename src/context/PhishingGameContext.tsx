import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { useUI } from "./UIContext";

type GameState = "active" | "inactive";

interface PhishingState {
  gameState: GameState;
  hasWon: boolean;
}

type PhishingAction =
  | { type: "START_GAME" }
  | { type: "END_GAME" }
  | { type: "WIN_GAME" };

const initialState: PhishingState = {
  gameState: "inactive",
  hasWon: false,
};

const phishingReducer = (
  state: PhishingState,
  action: PhishingAction
): PhishingState => {
  switch (action.type) {
    case "START_GAME":
      return { ...state, gameState: "active" };

    case "END_GAME":
      return { ...state, gameState: "inactive" };

    case "WIN_GAME":
      return { ...state, hasWon: true };

    default:
      return state;
  }
};

interface PhishingGameContextType {
  state: PhishingState;
  openPhishingGame: () => void;
  closePhishingGame: () => void;
  winGame: () => void;
}

const PhishingGameContext = createContext<PhishingGameContextType | undefined>(
  undefined
);

export const PhishingGameProvider = ({ children }: { children: ReactNode }) => {
  const { setGlobalActive } = useUI();
  const [state, dispatch] = useReducer(phishingReducer, initialState);

  const openPhishingGame = useCallback(
    () => dispatch({ type: "START_GAME" }),
    []
  );

  const closePhishingGame = useCallback(
    () => dispatch({ type: "END_GAME" }),
    []
  );

  const winGame = useCallback(() => dispatch({ type: "WIN_GAME" }), []);

  useEffect(() => {
    if (state.gameState === "active") {
      setGlobalActive(true);
    } else {
      setGlobalActive(false);
    }
  }, [state.gameState, setGlobalActive]);

  const contextValue = useMemo(
    () => ({
      state,
      openPhishingGame,
      closePhishingGame,
      winGame,
    }),
    [state, openPhishingGame, closePhishingGame, winGame]
  );

  return (
    <PhishingGameContext.Provider value={contextValue}>
      {children}
    </PhishingGameContext.Provider>
  );
};

export const usePhishingGame = () => {
  const context = useContext(PhishingGameContext);
  if (!context)
    throw new Error(
      "usePhishingGame debe usarse dentro de PhishingGameProvider"
    );
  return context;
};
