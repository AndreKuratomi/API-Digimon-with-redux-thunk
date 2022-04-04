import { api } from "../../../services/api";
import DigimonCard from "../../../components/DigimonCard";

import { addDigimons } from "./actions";

export const addDigimonsThunk = (digimons, setError) => (dispatch) => {
  api
    .get(`/name/${digimons}`)
    .then((response) => {
      const arr = response.data;
      console.log(arr);
      dispatch(addDigimons(arr.map((elt) => <DigimonCard elt={elt} />)));
      setError(false);
    })
    .catch((e) => setError(true));
};
