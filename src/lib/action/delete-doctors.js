"use server";

import { headers } from "next/headers.js";
import { auth } from "../auth.js";
import { base_url, handleStatusCode } from "../core/server.js";

export const deleteDoctor = async (doctorId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${base_url}/api/doctors/${doctorId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  return handleStatusCode(res);
};
