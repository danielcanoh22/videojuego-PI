import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { Coordinates, Enemy } from "../types";
import { getUniqueRandomPositions } from "../utils";
import enemyPositions from "../components/minigames/trojan/enemyPositions.json";
import { useUI } from "./UIContext";

type GameState = "inactive" | "home" | "running" | "question" | "won" | "lost";

interface TrojanState {
  gameState: GameState;
  hasWon: boolean;
  score: number;
  enemies: Enemy[];
  closestEnemy: Enemy | null;
  correctAnswers: number;
  totalAnswers: number;
}

type TrojanAction =
  | { type: "OPEN_HOME" }
  | { type: "START_GAME"; initialEnemies: Enemy[] }
  | { type: "OPEN_QUESTION"; enemy: Enemy }
  | { type: "ANSWER_QUESTION"; isCorrect: boolean }
  | { type: "UPDATE_SCORE"; points: number }
  | { type: "REMOVE_ENEMY"; id: number }
  | { type: "RESET_GAME" }
  | { type: "ACKNOWLEDGE_WIN" };

const initialState: TrojanState = {
  gameState: "inactive",
  hasWon: false,
  score: 0,
  enemies: [],
  closestEnemy: null,
  correctAnswers: 0,
  totalAnswers: 0,
};

const trojanReducer = (
  state: TrojanState,
  action: TrojanAction
): TrojanState => {
  switch (action.type) {
    case "OPEN_HOME":
      return { ...initialState, gameState: "home" };

    case "START_GAME":
      return {
        ...state,
        gameState: "running",
        enemies: action.initialEnemies,
      };

    case "OPEN_QUESTION":
      return { ...state, gameState: "question", closestEnemy: action.enemy };

    case "ANSWER_QUESTION": {
      const newCorrect = state.correctAnswers + (action.isCorrect ? 1 : 0);
      const newTotal = state.totalAnswers + 1;
      return {
        ...state,
        gameState: "running",
        correctAnswers: newCorrect,
        totalAnswers: newTotal,
        closestEnemy: null,
      };
    }

    case "REMOVE_ENEMY": {
      const newEnemies = state.enemies.filter((e) => e.id !== action.id);

      if (newEnemies.length === 0 && !state.hasWon) {
        return { ...state, enemies: [], gameState: "lost" };
      }
      return { ...state, enemies: newEnemies };
    }

    case "UPDATE_SCORE": {
      const newScore = Math.max(0, state.score + action.points);
      if (newScore >= 100) {
        return {
          ...state,
          score: 100,
          hasWon: true,
          gameState: "won",
          enemies: [],
          closestEnemy: null,
        };
      }
      return { ...state, score: newScore };
    }

    case "RESET_GAME":
      return initialState;

    case "ACKNOWLEDGE_WIN":
      return { ...state, gameState: "inactive" };

    default:
      return state;
  }
};

interface TrojanGameContextType {
  state: TrojanState;
  accuracy: number;
  openHome: () => void;
  startGame: () => void;
  openQuestion: (enemy: Enemy) => void;
  answerQuestion: (isCorrect: boolean) => void;
  updateScore: (points: number) => void;
  removeEnemyById: (id: number) => void;
  resetGame: () => void;
  acknowledgeWin: () => void;
}

const TrojanGameContext = createContext<TrojanGameContextType | undefined>(
  undefined
);

const positions: Coordinates[] = enemyPositions;
const INITIAL_ENEMY_COUNT = 13;

export const TrojanGameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(trojanReducer, initialState);
  const { setGlobalActive } = useUI();

  const openHome = useCallback(() => dispatch({ type: "OPEN_HOME" }), []);

  const startGame = useCallback(() => {
    const initialEnemies = getUniqueRandomPositions(
      INITIAL_ENEMY_COUNT,
      positions
    );
    dispatch({ type: "START_GAME", initialEnemies });
  }, []);

  const openQuestion = useCallback(
    (enemy: Enemy) => dispatch({ type: "OPEN_QUESTION", enemy }),
    []
  );

  const answerQuestion = useCallback(
    (isCorrect: boolean) => dispatch({ type: "ANSWER_QUESTION", isCorrect }),
    []
  );

  const updateScore = useCallback(
    (points: number) => dispatch({ type: "UPDATE_SCORE", points }),
    []
  );

  const removeEnemyById = useCallback(
    (id: number) => dispatch({ type: "REMOVE_ENEMY", id }),
    []
  );

  const resetGame = useCallback(() => dispatch({ type: "RESET_GAME" }), []);

  const acknowledgeWin = useCallback(
    () => dispatch({ type: "ACKNOWLEDGE_WIN" }),
    []
  );

  useEffect(() => {
    const shouldBePaused =
      state.gameState === "home" ||
      state.gameState === "question" ||
      state.gameState === "won" ||
      state.gameState === "lost";
    setGlobalActive(shouldBePaused);
  }, [state.gameState, setGlobalActive]);

  const accuracy =
    state.totalAnswers > 0
      ? (state.correctAnswers / state.totalAnswers) * 100
      : 0;

  const contextValue = useMemo(
    () => ({
      state,
      accuracy,
      openHome,
      startGame,
      openQuestion,
      answerQuestion,
      updateScore,
      removeEnemyById,
      resetGame,
      acknowledgeWin,
    }),
    [
      accuracy,
      acknowledgeWin,
      answerQuestion,
      openHome,
      openQuestion,
      removeEnemyById,
      resetGame,
      startGame,
      state,
      updateScore,
    ]
  );

  return (
    <TrojanGameContext.Provider value={contextValue}>
      {children}
    </TrojanGameContext.Provider>
  );
};

export const useTrojanGame = () => {
  const context = useContext(TrojanGameContext);
  if (context === undefined) {
    throw new Error("useTrojanGame must be used within a TrojanGameProvider");
  }
  return context;
};
