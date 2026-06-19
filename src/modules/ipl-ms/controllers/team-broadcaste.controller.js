import {
  createTeamBroadcaster,
  deleteTeamBroadcaster,
  updateTeamBroadcaster,
  getAllTeamBroadcasters,
  getTeamBroadcasterById,
} from "../services/team-broadcaster.service.js";
import ApiResponse from "../../../common/utils/api-response.js";
import ApiError from "../../../common/utils/api-error.js";

export async function handleCreateTeamBroadcaster(req, res) {
  try {
    const teamBroadcaster = await createTeamBroadcaster(req.body);
    res
      .status(201)
      .json(
        new ApiResponse(201, teamBroadcaster, "TeamBroadcaster created successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetAllTeamBroadcaster(req, res) {
  try {
    const teamBroadcasters = await getAllTeamBroadcasters();
    res
      .status(200)
      .json(
        new ApiResponse(200, teamBroadcasters, "TeamBroadcasters Fetched successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetTeamBroadcasterById(req, res) {
  try {
    const teamBroadcaster = await getTeamBroadcasterById(req.params.id);
    res
      .status(200)
      .json(
        new ApiResponse(200, teamBroadcaster, "TeamBroadcaster fetched successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleUpdateTeamBroadcaster(req, res) {
  try {
    const teamBroadcaster = await updateTeamBroadcaster(req.params.id, req.body);
    res
      .status(200)
      .json(
        new ApiResponse(200, teamBroadcaster, "TeamBroadcaster Updated successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleDeleteTeamBroadcaster(req, res) {
  try {
    const teamBroadcaster = await deleteTeamBroadcaster(req.params.id);
    res
      .status(200)
      .json(
        new ApiResponse(200, teamBroadcaster, "TeamBroadcaster Deleted successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
