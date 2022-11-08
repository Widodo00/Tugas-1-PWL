import Beranda from "./Component/Class/Beranda";
import Home from "./Component/Fungsional/Home";
import "./App.css";
import Timer from "./Component/Class/Timer";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Ramalan Horoskop</h1>
        <Timer start="0" />
      </div>
      <Home />
      Kosonga
    </div>
  );
}

export default App;
