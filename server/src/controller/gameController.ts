import { Request, Response } from "express";
import { GameService } from "../services/gameService";


const gameService = new GameService();


export const getGameState = (req: Request, res: Response) => {
    res.json(gameService.getGameState());
};


export const startRound = (req: Request, res: Response) => {
    gameService.startRound((event, data) => {
        // res.io.emit(event, data);
        // broadcast to all clients
    });
    res.json({ message: "Round started" });
};


export const cashOut = (req: Request, res: Response) => {
   const {betAmount} = req.body;
   const winnings = gameService.cashOut(betAmount);
   res.json({ message: "Cashed out", winnings });
};