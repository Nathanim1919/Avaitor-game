import Header from "./components/Header";
import Bet from "./page/Bet";
import GameBoard from "./page/GameBoard";
import "./App.css";

const Game = () => {
  return (
    <div className="bg-gray-950 grid grid-rows-[auto_1fr] gap-2 h-screen w-screen text-white">
      <Header />
      <div className="grid grid-cols-4 px-1 w-full h-full">
        <Bet />
        <div className="col-span-2">
          <GameBoard />
        </div>
        <div className="bg-gray-900"></div>
      </div>
    </div>
  );
};

export default Game;
