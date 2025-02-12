export interface IGameState {
    isRunning: boolean;
    isCountdown: boolean;
    crashPoint: string | null;
    currentMultiplier: number;
    countdown: number;
}