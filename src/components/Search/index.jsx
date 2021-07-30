import { useState } from "react";
import { useDispatch } from "react-redux";

import { addDigimonsThunk } from "../../store/modules/digimons/thunks";

export const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    //   fazer um condicional aqui dependendo do que for digitado se o que for digitado estiver na api então setSearch(true)
    setError(false);
    dispatch(addDigimonsThunk(input));
  };

  return (
    <main>
      <section>
        <h1>Procure pelo seu digimon!</h1>
        <div>
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
