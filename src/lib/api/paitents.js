import { protectServerFetch } from "../core/server.js";

export const getPatients = async () => {
  return protectServerFetch("/api/patients");
};
