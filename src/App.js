import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LocationSearch from "./components/LocationSearch";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <LocationSearch />
          <a href="https://github.com/darkfarbe/weather-react" target="_blank">
            Open-source code
          </a>
          by Ximena Ruiz
        </div>
      </div>
    </div>
  );
}

export default App;
