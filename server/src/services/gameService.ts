import type { IGameState } from "../types/IGameState";
import { generateCrashPoint } from "../utils/rng";

export class GameService {
  private gameState: IGameState;

  constructor() {
    this.gameState = {
      isRunning: false,
      isCountdown: false,
      crashPoint: null,
      currentMultiplier: 1,
      countdown: 5,
    };
  }

  getGameState(): IGameState {
    return this.gameState;
  }

  startRound(callback: (event: string, data: any) => void): void {
    this.gameState.isCountdown = true;
    this.gameState.crashPoint = generateCrashPoint();
    this.gameState.currentMultiplier = 1.0;

    // Broadcast the start of the round
    callback("countdownStart", {
      countdown: this.gameState.countdown,
    });

    // Start the countdown
    const countdownInterval = setInterval(() => {
      this.gameState.countdown -= 1;

      // Broadcast the countdown
      callback("countdownUpdate", {
        countdown: this.gameState.countdown,
      });

      if (this.gameState.countdown <= 0) {
        clearInterval(countdownInterval);
        this.gameState.isCountdown = false;
        this.gameState.isRunning = true;
        callback("gameStart", {
          crashPoint: this.gameState.crashPoint,
        });

        // Simulate the flight
        const flightInterval = setInterval(() => {
          if (this.gameState.currentMultiplier >= this.gameState.crashPoint!) {
            // Plane crashed
            clearInterval(flightInterval);
            this.gameState.isRunning = false;
            this.gameState.countdown = 5; // Reset the countdown
            callback("roundEnd", {
              crashPoint: this.gameState.crashPoint,
            });
            this.startRound(callback); // Start a new round
          } else {
            this.gameState.currentMultiplier += 0.01;
            callback("multiplierUpdate", {
              currentMultiplier: this.gameState.currentMultiplier,
            });
          }
        }, 100);
      }
    }, 1000);
  }

  cash(betAmount: number): number {
    return betAmount * this.gameState.currentMultiplier;
  }
}
