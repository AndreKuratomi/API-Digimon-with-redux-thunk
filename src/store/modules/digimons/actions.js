import { ADD_DIGIMONS } from "./actionTypes";

export const addDigimons = (digimon) => ({
  type: ADD_DIGIMONS,
  digimon,
});
