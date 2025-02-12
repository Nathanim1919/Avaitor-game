import React from "react";

const AllBets: React.FC = () => {
  return (
    <div className="bg-gray-900 overflow-hidden rounded-md border-1 border-gray-800">
      <div className="p-2 font-bold">
        <h2>All Bets: 4534</h2>
      </div>
      <div className="p-2 overflow-hidden rounded-t-2xl">
        <div className="grid grid-cols-3 p-1 text-[13px] place-items-center text-gray-500 font-bold">
          <span>User</span>
          <span>Bet ETB X</span>
          <span className="self-end">Cash out ETB</span>
        </div>

        <div className="grid gap-1 h-[66vh] overflow-y-auto">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-3 text-[14px] place-items-center bg-gray-950 p-1 rounded-md text-gray-500 font-bold"
            >
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                <div className="flex flex-col">
                  <p className="m-0">09******45</p>
                </div>
              </div>
              <div>
                <span>2,340</span>
              </div>
              <div>
                <span>2,340</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBets;
