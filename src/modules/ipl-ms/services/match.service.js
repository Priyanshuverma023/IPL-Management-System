import Match from "../models/match.model.js";

export async function createMatch(data) {
  const match = await Match.create(data);
  return match;
}

export async function getAllMatchs() {
  const matchs = await Match.find()
    .populate("teamA")
    .populate("teamB")
    .populate("winner");
  return matchs;
}

export async function getMatchById(id) {
  const match = await Match.findById(id)
    .populate("teamA")
    .populate("teamB")
    .populate("winner");
  if (!match) throw new Error("match not found");
  return match;
}

export async function updateMatch(id, data) {
  const match = await Match.findByIdAndUpdate(id, data, {
    returnDocument: "after",
  })
    .populate("teamA")
    .populate("teamB")
    .populate("winner");
  if (!match) throw new Error("match not found");
  return match;
}

export async function deleteMatch(id) {
  const match = await Match.findByIdAndDelete(id);
  if (!match) throw new Error("match not found");
  return match;
}
