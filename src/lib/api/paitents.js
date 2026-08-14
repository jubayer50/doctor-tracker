import { protectServerFetch } from "../core/server.js";

export const getPatients = async (query) => {
  return protectServerFetch(`/api/patients?${query}`);
};
