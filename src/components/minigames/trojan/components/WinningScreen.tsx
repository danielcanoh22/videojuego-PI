import { useGame } from "../../../../context/GameContext";
import { HomeScreenButton } from "../../../common/HomeScreenButton";


export const WinningScreen = () => {
    const { closeWinningScreen } = useGame();
    return(
        
        <div className="bg-red-300 z-50">
           <h1>Parece que ganaste</h1> 
           <div className="flex justify-center mt-10">
            <HomeScreenButton onClick={closeWinningScreen}>
                Salir
            </HomeScreenButton>
            </div>
        </div>


    );

};