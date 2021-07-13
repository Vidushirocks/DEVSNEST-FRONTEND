import './App.css';
import Counter from "./Components/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <div className="Counter">
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
            <Counter></Counter>
          </div>
      </header>
    </div>
  );
}

export default App;
