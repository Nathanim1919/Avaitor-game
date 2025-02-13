import React from "react";

const AllBets: React.FC = () => {
  return (
    <div className="bg-gray-900 overflow-hidden rounded-md border-1 border-gray-800">
      <div className="p-2 font-bold">
        <h2>All Bets: 4534</h2>
      </div>
      <div className="p-2 overflow-hidden rounded-t-2xl">
        <div className="flex items-center justify-between p-1 text-[13px] place-items-center text-gray-500 font-bold">
          <span>User</span>
          <span>Bet ETB X</span>
          <span className="self-end">Cash out ETB</span>
        </div>

        <div className="grid gap-1 h-[66vh] overflow-y-auto">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between text-[13px] place-items-center bg-gray-950 p-1 rounded-md text-gray-500 font-bold border border-gray-800"
            >
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                <div className="flex flex-col">
                  <p className="m-0">09**45</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span>2,340</span>
                <span className="text-[11px] text-violet-700 bg-gray-800 px-2 py-[2px] rounded-full">2.02x</span>
              </div>
              <div>
                <span className="text-orange-300">2,340</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBets;
