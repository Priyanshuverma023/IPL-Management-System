import Player from "../models/player.model.js";

export async function createPlayer(data) {
  const player = await Player.create(data);
  return player;
}

export async function getAllPlayer() {
  const players = await Player.find();
  return players;
}

export async function getPlayerById(id) {
  const player = await Player.findById(id);
  if (!player) throw new Error("Player not found");
  return player;
}

export async function updatePlayer(id, data) {
  const player = await Player.findByIdAndUpdate(id, data, {
    returnDocument: "after",
  });
  if (!player) throw new Error("Player not found");
  return player;
}

export async function deletePlayer(id) {
  const player = await Player.findByIdAndDelete(id);
  if (!player) throw new Error("Player not found");
  return player;
}
