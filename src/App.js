import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Weather city="Paris" />
      <p>
        This code was coded with ❤️ and is open-sourced on{" "}
        <a href="https://github.com/Domer078/weather-react-app" target="blank">
          Github
        </a>{" "}
        and hosted on{" "}
        <a href="https://magical-panda-4acfd3.netlify.app/" target="blank">
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
