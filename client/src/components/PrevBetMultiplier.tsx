import { useState } from "react";

export const PrevBetMultiplier: React.FC = () => {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className={`flex transition-all duration-500 items-center justify-between bg-gray-900 p-2 
    ${expand?"absolute max-w-[100%] m-auto z-100 flex-wrap":"relative  overflow-hidden"}
    rounded-t-md`}>
      <div className={`transition-all duration-500 flex items-center gap-1 w-full
      ${expand?"relative flex-wrap":""}
        `}>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">3.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.81x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">2.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">3.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.81x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">2.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">3.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.81x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">2.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">3.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.81x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">2.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">3.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.81x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">2.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">3.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.81x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">2.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">4.01x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">1.81x</span>
        <span className="text-[13px] text-violet-600 py-[2px] px-1">
          10.01x
        </span>
      </div>
      <div className="absolute bg-gradient-to-l from-black to-transparent top-0 right-0 p-2 grid place-items-center px-2">
        <button
          onClick={() => setExpand(!expand)}
          className="bg-gray-800 hover:text-gray-200 cursor-pointer px-1 rounded-2xl text-[13px]"
        >
          more
        </button>
      </div>
    </div>
  );
};
