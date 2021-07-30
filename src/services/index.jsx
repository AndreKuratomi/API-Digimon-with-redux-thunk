import axios from "axios";

export const api = axios.create({
  baseURL: "https://digimon-api.vercel.app/api/digimon",
});
