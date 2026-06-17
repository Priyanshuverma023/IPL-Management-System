import {
  createTeam,
  deleteTeam,
  updateTeam,
  getAllTeams,
  getTeamById,
} from '../services/team.service.js';

import ApiError from '../../../common/utils/api-error.js';
import ApiResponse from '../../../common/utils/api-response.js';

export async function handleCreateTeam(req, res) {
  try {
    const team = await createTeam(req.body);
    res
      .status(201)
      .json(new ApiResponse(201, team, 'Team created Successfully'));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleDeleteTeam(req, res) {
  try {
    const team = await deleteTeam(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, team, 'Team Deleted Successfully'));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleUpdateTeam(req, res) {
  try {
    const team = await updateTeam(req.params.id, req.body);
    res
      .status(200)
      .json(new ApiResponse(200, team, 'Team Updated Successfully'));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleGetAllTeam(req, res) {
  try {
    const teams = await getAllTeams();
    res
      .status(200)
      .json(new ApiResponse(200, teams, 'Teams fetched   Successfully'));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleGetTeamById(req, res) {
  try {
    const team = await getTeamById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, team, 'Team Fetched Successfully'));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
