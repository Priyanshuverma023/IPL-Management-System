import Sponsor from '../models/sponsor.model.js';

export async function createSponsor(data) {
  const sponsor = await Sponsor.create(data);
  return sponsor;
}

export async function getAllSponsors() {
  const sponsors = await Sponsor.find();
  return Sponsors;
}

export async function getSponsorById(id) {
  const sponsor = await sponsor.findById(id);
  if (!sponsor) throw new Error('sponsor not found');
  return sponsor;
}

export async function updateSponsor(id, data) {
  const sponsor = await sponsor.findByIdAndUpdate(id, data, {
    returnDocument: 'after',
  });
  if (!sponsor) throw new Error('sponsor not found');
  return sponsor;
}

export async function deleteSponsor(id) {
  const sponsor = await sponsor.findByIdAndDelete(id);
  if (!sponsor) throw new Error('sponsor not found');
  return sponsor;
}
