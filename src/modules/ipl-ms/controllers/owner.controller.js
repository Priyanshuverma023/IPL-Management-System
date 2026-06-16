import {
  createOwner,
  updateOwner,
  deleteOwner,
  getAllOwners,
  getOwnerById,
} from "../services/owner.service.js";
import ApiResponse from "../../../common/utils/api-response.js";
import ApiError from "../../../common/utils/api-error.js";

export async function handleCreateOwner(req, res) {
  try {
    const owner = await createOwner(req.body);
    res
      .status(201)
      .json(new ApiResponse(201, owner, "Owner created successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetAllOwner(req, res) {
  try {
    const owners = await getAllOwners();
    res
      .status(200)
      .json(new ApiResponse(200, owners, "Owners Fetched successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetOwnerById(req, res) {
  try {
    const owner = await getOwnerById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, owner, "Owner fetched successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleUpdateOwner(req, res) {
  try {
    const owner = await updateOwner(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, owner, "Owner Updated successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleDeleteOwner(req, res) {
  try {
    const owner = await deleteOwner(req.params.id, req.body);
    res
      .status(200)
      .json(new ApiResponse(200, owner, "Owner Deleted successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
