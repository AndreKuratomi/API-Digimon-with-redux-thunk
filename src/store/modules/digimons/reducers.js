import { ADD_DIGIMONS } from "./actionTypes";

export const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      return action.digimon;
    default:
      return state;
  }
};
