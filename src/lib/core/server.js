import { getTokenServer } from "./getTokenServer.js";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

// headers
export const authHeader = async () => {
  const token = await getTokenServer();

  const headers = token ? { authorization: `Bearer ${token}` } : {};

  return headers;
};

export const serverFetch = async (path) => {
  const res = await fetch(`${base_url}${path}`);
  return res.json();
};

export const protectServerMutation = async (path, data) => {
  const res = await fetch(`${base_url}${path}`, {
    method: "POST",
    headers: { "Content-type": "application/json", ...(await authHeader()) },
    body: JSON.stringify(data),
  });

  return res.json();
};

//handle error with code
const handleCode = () => {};
