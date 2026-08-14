"use server";

import { protectServerMutation } from "../core/server.js";

export const updateDoctor = async (id, data) => {
  return protectServerMutation(`/api/doctors/${id}`, data, "PATCH");
};
