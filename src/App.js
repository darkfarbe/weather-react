import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LocationSearch from "./components/LocationSearch";
import CurrentDate from "./components/CurrentDate";
import HumidityWind from "./components/HumidityWind";
import Temperature from "./components/Temperature";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <LocationSearch />
            <CurrentDate />

            <div className="row align-items-center">
              <Temperature />
              <HumidityWind />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
