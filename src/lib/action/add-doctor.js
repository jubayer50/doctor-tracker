"use server";

import { protectServerMutation } from "../core/server.js";

export const createDoctor = async (data) => {
  return protectServerMutation("/api/doctors", data);
};
