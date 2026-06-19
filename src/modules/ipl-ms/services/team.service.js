import TeamSponsor from "../models/team-sponsor.model.js";

export async function createTeamSponsor(data) {
  const teamSponsor = await TeamSponsor.create(data);
  return teamSponsor;
}

export async function getAllTeamSponsors() {
  const teamSponsors = await TeamSponsor.find()
    .populate("team")
    .populate("sponsor");
  return teamSponsors;
}

export async function getTeamSponsorById(id) {
  const teamSponsor = await TeamSponsor.findById(id)
    .populate("team")
    .populate("sponsor");
  if (!teamSponsor) throw new Error("teamSponsor not found");
  return teamSponsor;
}

export async function updateTeamSponsor(id, data) {
  const teamSponsor = await TeamSponsor.findByIdAndUpdate(id, data, {
    returnDocument: "after",
  })
    .populate("team")
    .populate("sponsor");
  if (!teamSponsor) throw new Error("teamSponsor not found");
  return teamSponsor;
}

export async function deleteTeamSponsor(id) {
  const teamSponsor = await TeamSponsor.findByIdAndDelete(id);
  if (!teamSponsor) throw new Error("teamSponsor not found");
  return teamSponsor;
}
