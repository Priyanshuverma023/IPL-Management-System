import TeamSponsor from '../models/team-TeamSponsor.model.js';

export async function createTeamTeamSponsor(data) {
  const TeamSponsor = await TeamSponsor.create(data);
  return TeamSponsor;
}

export async function getAllTeamSponsors() {
  const TeamSponsors = await TeamSponsor.find();
  return TeamSponsors;
}

export async function getTeamSponsorById(id) {
  const TeamSponsor = await TeamSponsor.findById(id);
  if (!TeamSponsor) throw new Error('TeamSponsor not found');
  return TeamSponsor;
}

export async function updateTeamSponsor(id, data) {
  const TeamSponsor = await TeamSponsor.findByIdAndUpdate(id, data, {
    returnDocument: 'after',
  });
  if (!TeamSponsor) throw new Error('TeamSponsor not found');
  return TeamSponsor;
}

export async function deleteTeamSponsor(id) {
  const TeamSponsor = await TeamSponsor.findByIdAndDelete(id);
  if (!TeamSponsor) throw new Error('TeamSponsor not found');
  return TeamSponsor;
}
