import express from "express";
import {
  handleCreatePlayer,
  handleGetAllPlayer,
  handleGetPlayerById,
  handleUpdatePlayer,
  handleDeletePlayer,
} from "../controllers/player.controller.js";

const router = express.Router();

router.post("/", handleCreatePlayer);
router.get("/", handleGetAllPlayer);
router.get("/:id", handleGetPlayerById);
router.put("/:id", handleUpdatePlayer);
router.delete("/:id", handleDeletePlayer);

export default router;
