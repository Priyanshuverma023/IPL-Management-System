import express from "express";
import {
  handleCreateBroadcaster,
  handleDeleteBroadcaster,
  handleGetAllBroadcaster,
  handleGetBroadcasterById,
  handleUpdateBroadcaster,
} from "../controllers/broadcaster.controller.js";

const router = express.Router();

router.post("/", handleCreateBroadcaster);
router.get("/", handleGetAllBroadcaster);
router.get("/:id", handleGetBroadcasterById);
router.put("/:id", handleUpdateBroadcaster);
router.delete("/:id", handleDeleteBroadcaster);

export default router;
