import express from "express";
import {
  handleCreateTeamBroadcaster,
  handleDeleteTeamBroadcaster,
  handleGetAllTeamBroadcaster,
  handleGetTeamBroadcasterById,
  handleUpdateTeamBroadcaster,
} from "../controllers/team-broadcaste.controller.js";

const router = express.Router();

router.post("/", handleCreateTeamBroadcaster);
router.get("/", handleGetAllTeamBroadcaster);
router.get("/:id", handleGetTeamBroadcasterById);
router.put("/:id", handleUpdateTeamBroadcaster);
router.delete("/:id", handleDeleteTeamBroadcaster);

export default router;
