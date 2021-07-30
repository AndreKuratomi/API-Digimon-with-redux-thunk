import { useState } from "react";
import { useDispatch } from "react-redux";

import { addDigimonsThunk } from "../../store/modules/digimons/thunks";

export const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    // setError(false);
    dispatch(addDigimonsThunk(input, setError));
  };

  return (
    <main>
      <section>
        <h1>Procure pelo seu digimon!</h1>
        <div>
          {error && <div>Digimon não encontrado!</div>}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Procure pelo seu digimon!"
          />
          <button onClick={handleSearch}>Pesquisar</button>
        </div>
      </section>
      {/* <Digimons /> */}
    </main>
  );
};
