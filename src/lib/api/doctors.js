import { serverFetch } from "../core/server.js";

export const getDoctors = async () => {
  return serverFetch("/api/doctors");
};
