import { Server } from "socket.io";
import { GameService } from "../services/gameService";


export const setUpGameSocket = (io: Server) => {
    const gameService = new GameService();

    io.on("connection", (socket) => {
        console.log("Client connected");

        // send current game state to the new player
        socket.emit("gameState", gameService.getGameState());


        // start a new round when requested (only during countdown)
        socket.on("startRound", () => {
            const gameState = gameService.getGameState();
            if (!gameState.isRunning && gameState.isCountdown) {
                gameService.startRound((event, data) => {
                    io.emit(event, data);
                });
            }
        });


        // cash out when requested (only during running)
        socket.on("cashOut", (data)=> {
            const {betAmount, userId} = data;
            const winnings = gameService.cashOut(betAmount);
            io.emit("cashOut", {userId, winnings});
        });

        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });
    });
};