import { serverFetch } from "../core/server.js";

export const getStats = async () => {
  return serverFetch("/api/stats");
};
