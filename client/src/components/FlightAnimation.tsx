import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import PlaneImage from "../assets/plane.png";
import { Clouds } from './cloud';

const socket = io('http://localhost:3000'); // Connect to the server

const FlightAnimation: React.FC = () => {
  const [multiplier, setMultiplier] = useState(1.0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    });
    // Listen for game state updates
    socket.on('gameState', (data) => {
      setIsRunning(data.isRunning);
      setIsCountdown(data.isCountdown);
      setCountdown(data.countdown);
    });

    // Listen for countdown updates
    socket.on('countdownUpdate', (data) => {
      setCountdown(data.countdown);
    });

    // Listen for flight updates
    socket.on('flightUpdate', (data) => {
      setMultiplier(data.multiplier);
    });

    // Listen for round start
    socket.on('roundStart', () => {
      setIsRunning(true);
      setIsCountdown(false);
      setMultiplier(1.0);
    });

    // Listen for round end
    socket.on('roundEnd', () => {
      setIsRunning(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startRound = () => {
    socket.emit('startRound');
  };

  const cashOut = () => {
    const betAmount = 10; // Example bet amount
    socket.emit('cashOut', { userId: '123', betAmount });
  };

  return (
    <div className="relative w-full h-96 bg-blue-200 overflow-hidden">
      {/* Clouds */}
      <Clouds />

      {/* Flight Path */}
      <svg className="absolute inset-0 w-full h-full">
        <path
          id="flight-path"
          d="M10 90 C 30 70, 70 30, 90 10" // Cubic Bezier curve
          stroke="gray"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Plane */}
      <div
        className="absolute top-0 left-0 w-16 h-16 transition-all duration-500"
        style={{
          offsetPath: 'path("M10 90 C 30 70, 70 30, 90 10")',
          offsetDistance: `${(multiplier / 10) * 100}%`, // Scale multiplier to path distance
          rotate: '45deg',
        }}
      >
        <img
          src={PlaneImage}
          alt="Plane"
          className="w-full h-full"
        />
      </div>

      {/* Countdown Timer */}
      {isCountdown && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold">
          Next Round in: {countdown}s
        </div>
      )}

      {/* Multiplier Display */}
      {isRunning && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-bold">
          Multiplier: {multiplier.toFixed(2)}x
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          onClick={startRound}
          disabled={isRunning || !isCountdown}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Start Round
        </button>
        <button
          onClick={cashOut}
          disabled={!isRunning}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Cash Out
        </button>
      </div>
    </div>
  );
};

export default FlightAnimation;