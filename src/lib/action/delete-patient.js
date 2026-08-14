"use server";

import { authHeader, base_url, handleStatusCode } from "../core/server.js";

export const deletePatient = async (patientId) => {
  const res = await fetch(`${base_url}/api/patients/${patientId}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json", ...(await authHeader()) },
  });

  return handleStatusCode(res);
};
