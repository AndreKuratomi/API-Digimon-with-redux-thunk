import { api } from "../../../services";

import { addDigimons } from "./actions";

export const addDigimonsThunk = (digimons, setError) => (dispatch) => {
  api
    .get(`/api/digimon/name/${digimons}`)
    .then((response) => dispatch(addDigimons(response.data.name)))
    .catch((error) => setError(error));
};
