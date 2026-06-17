import Team from '../models/team.model.js';

export async function createTeam(data) {
  const team = await Team.create(data);
  return team;
}

export async function getAllTeams() {
  const teams = await Team.find();
  return teams;
}

export async function getTeamById(id) {
  const team = await Team.findById(id);
  if (!team) throw new Error('Team not found');
  return team;
}

export async function updateTeam(id, data) {
  const team = await Team.findByIdAndUpdate(id, data, {
    returnDocument: 'after',
  });
  if (!team) throw new Error('Team not found');
  return team;
}

export async function deleteTeam(id) {
  const team = await Team.findByIdAndDelete(id);
  if (!team) throw new Error('Team not found');
  return team;
}
