import express from "express";
import {
  handleCreateTeamSponsor,
  handleDeleteTeamSponsor,
  handleGetAllTeamSponsor,
  handleGetTeamSponsorById,
  handleUpdateTeamSponsor,
} from "../controllers/team-sponsor.controller.js";

const router = express.Router();

router.post("/", handleCreateTeamSponsor);
router.get("/", handleGetAllTeamSponsor);
router.get("/:id", handleGetTeamSponsorById);
router.put("/:id", handleUpdateTeamSponsor);
router.delete("/:id", handleDeleteTeamSponsor);

export default router;
