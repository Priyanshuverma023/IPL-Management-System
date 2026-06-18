import {
  createBroadcaster,
  deleteBroadcaster,
  updateBroadcaster,
  getAllBroadcasters,
  getBroadcasterById,
} from "../services/broadcaster.service.js";
import ApiResponse from "../../../common/utils/api-response.js";
import ApiError from "../../../common/utils/api-error.js";

export async function handleCreateBroadcaster(req, res) {
  try {
    const broadcaster = await createBroadcaster(req.body);
    res
      .status(201)
      .json(
        new ApiResponse(201, broadcaster, "Broadcaster created successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetAllBroadcaster(req, res) {
  try {
    const broadcasters = await getAllBroadcasters();
    res
      .status(200)
      .json(
        new ApiResponse(200, broadcasters, "Broadcasters Fetched successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetBroadcasterById(req, res) {
  try {
    const broadcaster = await getBroadcasterById(req.params.id);
    res
      .status(200)
      .json(
        new ApiResponse(200, broadcaster, "Broadcaster fetched successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleUpdateBroadcaster(req, res) {
  try {
    const broadcaster = await updateBroadcaster(req.params.id, req.body);
    res
      .status(200)
      .json(
        new ApiResponse(200, broadcaster, "Broadcaster Updated successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleDeleteBroadcaster(req, res) {
  try {
    const broadcaster = await deleteBroadcaster(req.params.id);
    res
      .status(200)
      .json(
        new ApiResponse(200, broadcaster, "Broadcaster Deleted successfully"),
      );
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
