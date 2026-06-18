import {
  createSponsor,
  deleteSponsor,
  getAllSponsors,
  getSponsorById,
  updateSponsor,
} from "../services/sponsor.service.js";
import ApiResponse from "../../../common/utils/api-response.js";
import ApiError from "../../../common/utils/api-error.js";

export async function handleCreateSponsor(req, res) {
  try {
    const sponsor = await createSponsor(req.body);
    res
      .status(201)
      .json(new ApiResponse(201, sponsor, "Sponsor created successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetAllSponsor(req, res) {
  try {
    const sponsors = await getAllSponsors();
    res
      .status(200)
      .json(new ApiResponse(200, sponsors, "Sponsors Fetched successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleGetSponsorById(req, res) {
  try {
    const sponsor = await getSponsorById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, sponsor, "Sponsor fetched successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}

export async function handleUpdateSponsor(req, res) {
  try {
    const sponsor = await updateSponsor(req.params.id, req.body);
    res
      .status(200)
      .json(new ApiResponse(200, sponsor, "Sponsor Updated successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
export async function handleDeleteSponsor(req, res) {
  try {
    const sponsor = await deleteSponsor(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(200, sponsor, "Sponsor Deleted successfully"));
  } catch (err) {
    res.status(500).json(new ApiError(500, err.message));
  }
}
