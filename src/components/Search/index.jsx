import { useState } from "react";
import { useDispatch } from "react-redux";

import { addDigimonsThunk } from "../../store/modules/digimons/thunks";

import { Input, Button, Div } from "./styles";

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
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Procure pelo seu digimon!"
          />
          <Button onClick={handleSearch}>Pesquisar</Button>
        </div>
        {error && <Div>Digimon não encontrado!</Div>}
      </section>
      {/* <Digimons /> */}
    </main>
  );
};
