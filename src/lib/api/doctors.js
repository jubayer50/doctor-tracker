import { serverFetch } from "../core/server.js";

export const getDoctors = async (query) => {
  return serverFetch(`/api/doctors?${query}`);
};
