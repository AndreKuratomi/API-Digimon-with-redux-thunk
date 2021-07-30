import { api } from "../../../services/api";

import { addDigimons } from "./actions";

export const addDigimonsThunk = (digimons, setError) => (dispatch) => {
  // const arr = response.data;
  api
    .get(`/name/${digimons}`)
    .then((response) => {
      const arr = response.data;
      dispatch(addDigimons(arr.map((elt) => elt.name)));
      setError(false);
    })
    .catch((e) => setError(true));
};
