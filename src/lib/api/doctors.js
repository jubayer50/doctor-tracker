import { protectServerFetch, serverFetch } from "../core/server.js";

export const getDoctors = async (query) => {
  return serverFetch(`/api/doctors?${query}`);
};

export const getDoctorById = async (id) => {
  return protectServerFetch(`/api/doctors/${id}`);
};
