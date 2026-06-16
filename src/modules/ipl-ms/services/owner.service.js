import Owner from "../models/owner.model.js";

export async function createOwner(data) {
  const owner = await Owner.create(data);
  return owner;
}

export async function getAllOwners() {
  const owner = await Owner.find();
  return owner;
}

export async function getOwnerById(id) {
  const owner = await Owner.findById(id);
  if (!owner) throw new Error("Owner not found");
  return owner;
}

export async function updateOwner(id, data) {
  const owner = await Owner.findByIdAndUpdate(id, data, { new: true });
  if (!owner) throw new Error("Owner not found");
  return owner;
}

export async function deleteOwner(id) {
  const owner = await Owner.findByIdAndDelete(id);
  if (!owner) throw new Error("Owner not found");
  return owner;
}
