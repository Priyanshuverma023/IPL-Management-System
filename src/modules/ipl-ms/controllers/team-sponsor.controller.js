import {
  createTeamSponsor,
  deleteTeamSponsor,
  updateTeamSponsor,
  getAllTeamSponsors,
  getTeamSponsorById,
} from "../services/team-sponsor.service.js";
import ApiResponse from "../../../common/utils/api-response.js";
import ApiError from "../../../common/utils/api-error.js";

export async function handleCreateTeamSponsor(req, res) {
  try {
    const teamSponsor = await createTeamSponsor(req.body);
    res
      .status(201)
      .json(new ApiResponse(201, teamSponsor, "TeamSponsor created successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetAllTeamSponsor(req, res) {
  try {
    const teamSponsors = await getAllTeamSponsors();
    res
      .status(200)
      .json(new ApiResponse(200, teamSponsors, "TeamSponsors Fetched successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetTeamSponsorById(req, res) {
  try {
    const teamSponsor = await getTeamSponsorById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, teamSponsor, "TeamSponsor fetched successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleUpdateTeamSponsor(req, res) {
  try {
    const teamSponsor = await updateTeamSponsor(req.params.id, req.body);
    res
      .status(200)
      .json(new ApiResponse(200, teamSponsor, "TeamSponsor Updated successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleDeleteTeamSponsor(req, res) {
  try {
    const teamSponsor = await deleteTeamSponsor(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, teamSponsor, "TeamSponsor Deleted successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
