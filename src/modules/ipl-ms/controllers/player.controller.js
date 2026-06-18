import {
  createPlayer,
  getAllPlayer,
  getPlayerById,
  updatePlayer,
  deletePlayer,
} from "../services/player.service.js";

import ApiError from "../../../common/utils/api-error.js";
import ApiResponse from "../../../common/utils/api-response.js";

export async function handleCreatePlayer(req, res) {
  try {
    const player = await createPlayer(req.body);
    res
      .status(201)
      .json(new ApiResponse(201, player, "Player created successfully!"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetAllPlayer(req, res) {
  try {
    const players = await getAllPlayer();
    res
      .status(200)
      .json(new ApiResponse(200, player, "Players fetched successfully!"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetPlayerById(req, res) {
  try {
    const player = await getPlayerById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, player, "Player fetched successfully!"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleUpdatePlayer(req, res) {
  try {
    const player = await updatePlayer(req.params.id, req.body);
    res
      .status(200)
      .json(new ApiResponse(200, player, "Player updated successfully!"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleDeletePlayer(req, res) {
  try {
    const player = await deletePlayer(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, player, "Player deleted successfully!"));
  } catch (err) {
    res.status(500).json(ApiError(500, err.message));
  }
}
