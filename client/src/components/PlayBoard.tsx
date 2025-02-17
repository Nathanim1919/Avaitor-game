const PlayBoard = () => {
  return (
    <div className="flex gap-2 w-[70%] m-auto relative z-50">
      <div className="flex-1 grid gap-1">
        <div className="flex items-center bg-gray-950">
          <span className="flex-1 w-full grid place-items-center text-2xl font-bold bg-blue-950">
            -
          </span>
          <span className="flex-1 w-full grid place-items-center text-2xl font-bold">
            5 ETB
          </span>
          <span className="flex-1 w-full grid place-items-center text-2xl font-bold bg-blue-950">
            +
          </span>
        </div>
        <div className="w-full grid grid-cols-2 border border-gray-800 rounded-md bg-gray-900 place-items-center gap-1 p-1">
          <span className="p-2 bg-gray-950 w-full grid place-items-center border border-gray-800 text-gray-400 font-bold rounded-md hover:bg-gray-900 cursor-pointer">
            100
          </span>
          <span className="p-2 bg-gray-950 w-full grid place-items-center border border-gray-800 text-gray-400 font-bold rounded-md hover:bg-gray-900 cursor-pointer">
            200
          </span>
          <span className="p-2 bg-gray-950 w-full grid place-items-center border border-gray-800 text-gray-400 font-bold rounded-md hover:bg-gray-900 cursor-pointer">
            300
          </span>
          <span className="p-2 bg-gray-950 w-full grid place-items-center border border-gray-800 text-gray-400 font-bold rounded-md hover:bg-gray-900 cursor-pointer">
            400
          </span>
        </div>
      </div>
      <div className="flex-1 grid gap-1 p-4">
        <button className="bg-green-500 hover:bg-green-600 rounded-2xl cursor-pointer shadow-2xl border border-gray-100 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">Bet</span>
          <span>400.00 ETB</span>
        </button>
      </div>
    </div>
  );
};

export default PlayBoard;
