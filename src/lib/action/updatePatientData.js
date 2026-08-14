"use server";

import { protectServerMutation } from "../core/server";

export const updatePatient = async (id, data) => {
  return protectServerMutation(`/api/patients/${id}`, data, "PATCH");
};
