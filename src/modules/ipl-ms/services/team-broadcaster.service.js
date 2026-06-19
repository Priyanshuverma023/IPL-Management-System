import TeamBroadcaster from "../models/team-broadcaster.model.js";

export async function createTeamBroadcaster(data) {
  const teamBroadcaster = await TeamBroadcaster.create(data);
  return teamBroadcaster;
}

export async function getAllTeamBroadcasters() {
  const teamBroadcasters = await TeamBroadcaster.find()
    .populate("team")
    .populate("broadcaster");
  return teamBroadcasters;
}

export async function getTeamBroadcasterById(id) {
  const teamBroadcaster = await TeamBroadcaster.findById(id)
    .populate("team")
    .populate("broadcaster");
  if (!teamBroadcaster) throw new Error("TeamBroadcaster not found");
  return teamBroadcaster;
}

export async function updateTeamBroadcaster(id, data) {
  const teamBroadcaster = await TeamBroadcaster.findByIdAndUpdate(id, data, {
    new: true,
  })
    .populate("team")
    .populate("broadcaster");
  if (!teamBroadcaster) throw new Error("TeamBroadcaster not found");
  return teamBroadcaster;
}

export async function deleteTeamBroadcaster(id) {
  const teamBroadcaster = await TeamBroadcaster.findByIdAndDelete(id);
  if (!teamBroadcaster) throw new Error("TeamBroadcaster not found");
  return teamBroadcaster;
}
