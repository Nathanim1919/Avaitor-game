import FlightAnimation from "../components/FlightAnimation";
import PlayBoard from "../components/PlayBoard";
import { PrevBetMultiplier } from "../components/PrevBetMultiplier";

const GameBoard: React.FC = () => {
  return (
    <div className="grid overflow-hidden">
      <PrevBetMultiplier />
      <div className="grid grid-rows-4 h-[85vh] p-1 gap-2">
        <div className="row-span-3">
          <FlightAnimation />
        </div>
        <PlayBoard />
      </div>
    </div>
  );
};

export default GameBoard;
