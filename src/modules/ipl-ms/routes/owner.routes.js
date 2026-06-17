import express from 'express';
import {
  handleCreateOwner,
  handleDeleteOwner,
  handleGetAllOwner,
  handleGetOwnerById,
  handleUpdateOwner,
} from '../controllers/owner.controller.js';

const router = express.Router();

router.post('/', handleCreateOwner);
router.delete('/:id', handleDeleteOwner);
router.get('/', handleGetAllOwner);
router.get('/:id', handleGetOwnerById);
router.put('/:id', handleUpdateOwner);

export default router;