import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import type { IGameState } from './src/types/IGameState.ts';


const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: 'http://localhost:5173' } });

// Shared RNG to determine crash point
function generateCrashPoint() {
  const maxMultiplier = 100; // Maximum multiplier
  const crashPoint = Math.random() * maxMultiplier; // Random crash point
  return crashPoint.toFixed(2); // Round to 2 decimal places
}


// Game state
const gameState: IGameState = {
  isRunning: false,
  isCountdown: false,
  crashPoint: null,
  currentMultiplier: 1.0,
  countdown: 5, // Countdown duration in seconds
};

// Start a new round
function startRound() {
  gameState.isCountdown = true;
  gameState.crashPoint = generateCrashPoint();
  gameState.currentMultiplier = 1.0;

  // Broadcast the start of the countdown
  io.emit('countdownStart', { countdown: gameState.countdown });

  // Start the countdown
  const countdownInterval = setInterval(() => {
    gameState.countdown -= 1;
    io.emit('countdownUpdate', { countdown: gameState.countdown });

    if (gameState.countdown <= 0) {
      clearInterval(countdownInterval);
      gameState.isCountdown = false;
      gameState.isRunning = true;
      io.emit('roundStart', { crashPoint: gameState.crashPoint });

      // Simulate the flight
      const flightInterval = setInterval(() => {
        const crashPoint = Number(gameState.crashPoint);
        if (gameState.currentMultiplier >= crashPoint) {
          // Plane crashed
          clearInterval(flightInterval);
          gameState.isRunning = false;
          gameState.countdown = 5; // Reset countdown
          io.emit('roundEnd', { crashPoint: gameState.crashPoint });
          startRound(); // Start the next round
        } else {
          // Increase multiplier
          gameState.currentMultiplier += 0.1;
          io.emit('flightUpdate', { multiplier: gameState.currentMultiplier });
        }
      }, 100); // Update every 100ms
    }
  }, 1000); // Countdown every 1 second
}

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Send current game state to the new player
  socket.emit('gameState', gameState);

  // Start a new round when requested (only during countdown)
  socket.on('startRound', () => {
    if (!gameState.isRunning && gameState.isCountdown) {
      startRound();
    }
  });

  // Handle cash-out
  socket.on('cashOut', (data) => {
    const { userId, betAmount } = data;
    const winnings = betAmount * gameState.currentMultiplier;
    io.emit('cashOutSuccess', { userId, winnings });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));