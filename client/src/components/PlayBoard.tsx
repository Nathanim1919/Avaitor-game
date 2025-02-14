const PlayBoard = () => {
  return (
    <div className="flex gap-2 w-[70%] m-auto">
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
        <div className="w-full grid grid-cols-2 bg-gray-900 place-items-center gap-2">
          <span className="p-2">100</span>
          <span className="p-2">200</span>
          <span className="p-2">300</span>
          <span className="p-2">400</span>
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
