import express from 'express';
import {
  handleCreateTeam,
  handleDeleteTeam,
  handleGetAllTeam,
  handleGetTeamById,
  handleUpdateTeam,
} from '../controllers/team.controller.js';

const router = express.Router();

router.post('/', handleCreateTeam);
router.get('/', handleGetAllTeam);
router.get('/:id', handleGetTeamById);
router.put('/:id', handleUpdateTeam);
router.delete('/:id', handleDeleteTeam);

export default router;