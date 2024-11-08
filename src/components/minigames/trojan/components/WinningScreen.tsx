import { useGame } from "../../../../context/GameContext";


export const WinningScreen = () => {
    const { closeWinningScreen } = useGame();
    return(
        <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 z-50 w-3/4 p-10 rounded-lg shadow-2xl">
            <div className="w-full h-full bg-minigameBackground bg-cover opacity-20 fixed top-0 left-0"></div> 
            <div className="relative z-50 text-center animate-fadeIn">
                <h2 className="text-6xl font-bold text-white drop-shadow-lg mb-6">
                    ¡LOGRASTE VENCER A LOS ENEMIGOS!
                </h2>
                <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-md mx-auto w-3/4">
                    <p className="text-3xl font-medium text-gray-800 leading-relaxed">
                        Demostraste tener buena intuición, ¡buen trabajo!
                    </p>
                </div>
                <div className="flex justify-center mt-10">
                    <button 
                        onClick={closeWinningScreen}
                        className="px-8 py-4 text-xl font-semibold text-white bg-blue-600 hover:bg-green-600 active:bg-green-700 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
                    >
                        Salir
                    </button>
                </div>
            </div>
        </div>
    );

};