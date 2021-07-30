import "./App.css";

import { Digimons } from "./components/Digimons";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Digimons />
      </header>
    </div>
  );
}

export default App;
