import {
  createMatch,
  deleteMatch,
  updateMatch,
  getAllMatchs,
  getMatchById,
} from "../services/match.service.js";
import ApiResponse from "../../../common/utils/api-response.js";
import ApiError from "../../../common/utils/api-error.js";

export async function handleCreateMatch(req, res) {
  try {
    const match = await createMatch(req.body);
    res
      .status(201)
      .json(
        new ApiResponse(201, match, "Match created successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetAllMatch(req, res) {
  try {
    const matchs = await getAllMatchs();
    res
      .status(200)
      .json(
        new ApiResponse(200, matchs, "Matchs Fetched successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetMatchById(req, res) {
  try {
    const match = await getMatchById(req.params.id);
    res
      .status(200)
      .json(
        new ApiResponse(200, match, "Match fetched successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleUpdateMatch(req, res) {
  try {
    const match = await updateMatch(req.params.id, req.body);
    res
      .status(200)
      .json(
        new ApiResponse(200, match, "Match Updated successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleDeleteMatch(req, res) {
  try {
    const match = await deleteMatch(req.params.id);
    res
      .status(200)
      .json(
        new ApiResponse(200, match, "Match Deleted successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
