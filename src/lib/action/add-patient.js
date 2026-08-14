"use server";

import { protectServerMutation } from "../core/server.js";

export const createPatient = async (data) => {
  return protectServerMutation("/api/patients", data);
};
