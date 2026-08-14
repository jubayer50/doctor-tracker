"use server";

import { authHeader, base_url, handleStatusCode } from "../core/server.js";

export const deleteDoctor = async (doctorId) => {
  const res = await fetch(`${base_url}/api/doctors/${doctorId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      ...(await authHeader()),
    },
  });

  return handleStatusCode(res);
};
