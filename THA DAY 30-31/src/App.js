import Language from "./condi/app";
import Web from "./condi/web";
import GameDev from "./condi/gamedev";
import Android from "./condi/android";
import "./App.css"

function App() {
  return (
    <div className="App">
       <Web /> 
      <GameDev />
       <Android />
      <Language />
    </div>
  );
}

export default App;