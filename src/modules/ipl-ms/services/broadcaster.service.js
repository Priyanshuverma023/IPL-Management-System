import Broadcaster from '../models/broadcaster.model.js';

export async function createBroadcaster(data) {
  const broadcaster = await Broadcaster.create(data);
  return broadcaster;
}

export async function getAllBroadcasters() {
  const broadcasters = await Broadcaster.find();
  return broadcasters;
}

export async function getBroadcasterById(id) {
  const broadcaster = await Broadcaster.findById(id);
  if (!broadcaster) throw new Error('broadcaster not found');
  return broadcaster;
}

export async function updateBroadcaster(id, data) {
  const broadcaster = await Broadcaster.findByIdAndUpdate(id, data, {
    returnDocument: 'after',
  });
  if (!broadcaster) throw new Error('broadcaster not found');
  return broadcaster;
}

export async function deleteBroadcaster(id) {
  const broadcaster = await Broadcaster.findByIdAndDelete(id);
  if (!broadcaster) throw new Error('broadcaster not found');
  return broadcaster;
}
