import express from "express";
import {
  handleGetMatchById,
  handleCreateMatch,
  handleDeleteMatch,
  handleGetAllMatch,
  handleUpdateMatch,
} from "../controllers/match.controller.js";

const router = express.Router();

router.post("/", handleCreateMatch);
router.get("/", handleGetAllMatch);
router.get("/:id", handleGetMatchById);
router.put("/:id", handleUpdateMatch);
router.delete("/:id", handleDeleteMatch);

export default router;
