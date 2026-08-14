"use server";

import { serverMutation } from "../core/server.js";

export const createDoctor = async (data) => {
  return serverMutation("/api/doctors", data);
};
