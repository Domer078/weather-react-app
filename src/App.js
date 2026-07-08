import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather city="Paris" />
    </div>
  );
}

export default App;
