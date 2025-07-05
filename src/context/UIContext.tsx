import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";

type Screen = "none" | "home" | "credits" | "tutorial" | "controls" | "winning";

interface UIState {
  activeScreen: Screen;
  isGlobalActive: boolean;
}

type UIAction =
  | { type: "SET_GLOBAL_ACTIVE"; payload: boolean }
  | { type: "SHOW_SCREEN"; payload: Screen }
  | { type: "SHOW_CONTROLS_OVERLAY" }
  | { type: "HIDE_SCREEN" };

const initialState: UIState = {
  activeScreen: "home",
  isGlobalActive: true,
};

const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "SET_GLOBAL_ACTIVE":
      return { ...state, isGlobalActive: action.payload };

    case "SHOW_SCREEN":
      return { ...state, activeScreen: action.payload, isGlobalActive: true };

    case "SHOW_CONTROLS_OVERLAY":
      return { ...state, activeScreen: "controls", isGlobalActive: false };

    case "HIDE_SCREEN":
      return { ...state, activeScreen: "none", isGlobalActive: false };

    default:
      return state;
  }
};

interface UIContextType {
  state: UIState;
  showHomeScreen: () => void;
  showCredits: () => void;
  showTutorial: () => void;
  showControls: () => void;
  showWinningScreen: () => void;
  hideCurrentScreen: () => void;
  setGlobalActive: (isActive: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const showHomeScreen = useCallback(
    () => dispatch({ type: "SHOW_SCREEN", payload: "home" }),
    []
  );

  const showCredits = useCallback(
    () => dispatch({ type: "SHOW_SCREEN", payload: "credits" }),
    []
  );

  const showTutorial = useCallback(
    () => dispatch({ type: "SHOW_SCREEN", payload: "tutorial" }),
    []
  );

  const showControlsOverlay = useCallback(
    () => dispatch({ type: "SHOW_CONTROLS_OVERLAY" }),
    []
  );

  const showWinningScreen = useCallback(
    () => dispatch({ type: "SHOW_SCREEN", payload: "winning" }),
    []
  );

  const hideCurrentScreen = useCallback(
    () => dispatch({ type: "HIDE_SCREEN" }),
    []
  );

  const setGlobalActive = useCallback(
    (isActive: boolean) =>
      dispatch({ type: "SET_GLOBAL_ACTIVE", payload: isActive }),
    []
  );

  const contextValue = useMemo(
    () => ({
      state,
      showHomeScreen,
      showCredits,
      showTutorial,
      showControls: showControlsOverlay,
      showWinningScreen,
      hideCurrentScreen,
      setGlobalActive,
    }),
    [
      state,
      showHomeScreen,
      showCredits,
      showTutorial,
      showControlsOverlay,
      showWinningScreen,
      hideCurrentScreen,
      setGlobalActive,
    ]
  );

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI debe usarse dentro de UIProvider");
  return context;
};
