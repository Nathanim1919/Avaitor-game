import AllBets from "../components/AllBet";

const Bet: React.FC = () => {
  return (
    <div className="rounded-md grid gap-2 p-2">
      <div className="bg-gray-900 p-2 rounded-t-lg">
        <ul className="flex items-center justify-around p-2 gap-2">
          <li className="bg-gray-800 rounded-full text-[12px] flex-1 grid place-items-center cursor-pointer py-[4px] border border-gray-800">All Bets</li>
          <li className="rounded-full text-[12px] flex-1 grid place-items-center cursor-pointer py-[4px] border border-gray-800">My Bets</li>
          <li className="rounded-full text-[12px] flex-1 grid place-items-center cursor-pointer py-[4px] border border-gray-800">Top Bet</li>
        </ul>
      </div>
      <AllBets />
    </div>
  );
};

export default Bet;
