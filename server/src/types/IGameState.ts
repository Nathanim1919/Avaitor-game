export interface IGameState {
    isRunning: boolean;
    isCountdown: boolean;
    crashPoint: number | null;
    currentMultiplier: number;
    countdown: number;
}