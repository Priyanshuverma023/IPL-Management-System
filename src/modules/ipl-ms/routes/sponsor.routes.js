import express from "express";
import {
  handleCreateSponsor,
  handleDeleteSponsor,
  handleGetAllSponsor,
  handleGetSponsorById,
  handleUpdateSponsor,
} from "../controllers/sponsor.controller.js";

const router = express.Router();

router.post("/", handleCreateSponsor);
router.get("/", handleGetAllSponsor);
router.get("/:id", handleGetSponsorById);
router.put("/:id", handleUpdateSponsor);
router.delete("/:id", handleDeleteSponsor);

export default router;
