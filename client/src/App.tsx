import { useState, useEffect } from 'react';
import FlightAnimation from './components/FlightAnimation';


const Game = () => {
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    // Simulate multiplier increase over time
    const interval = setInterval(() => {
      setMultiplier((prev) => prev + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Aviator Game</h1>
      <div className="w-96">
        <FlightAnimation multiplier={multiplier} />
      </div>
      <p className="mt-4 text-xl">Current Multiplier: {multiplier.toFixed(12)}x</p>
    </div>
  );
};

export default Game;