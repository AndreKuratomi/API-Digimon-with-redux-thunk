import { ADD_DIGIMONS } from "./actionTypes";

export const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      const { digimon } = action;
      console.log({ digimon });
      return [...state, digimon];
    default:
      return state;
  }
};
