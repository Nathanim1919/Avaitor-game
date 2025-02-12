import express from "express";
import {
  getGameState,
  startRound,
  cashOut,
} from "../controller/gameController.ts";

const router = express.Router();

router.get("/state", getGameState);
router.post("/start", startRound);
router.post("/cashout", cashOut);

export default router;
