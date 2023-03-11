import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import HumidityWind from "./HumidityWind";
import Temperature from "./Temperature";
import axios from "axios";

export default function LocationSearch() {
  const [dataFromAPI, setDataFromAPI] = useState({
    main: {
      temp: 21,
      humidity: 80,
    },
    wind: {
      speed: 7,
    },
    weather: [{ description: "overcast clouds", icon: "03d" }],
    name: "New York",
  });

  function handleSubmit(event) {
    event.preventDefault();
    let el = document.getElementById("city-input");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${el.value}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(getDisplayData);
  }

  function getDisplayData(response) {
    console.log(response.data);
    setDataFromAPI(response.data);
  }

  return (
    <div className="weather-app">
      <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Write a city"
              className="form-control"
              id="city-input"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
          <div className="col-2">
            <button id="myLocation" className="btn btn-success">
              <span title="My location">
                <i className="fa-solid fa-location-crosshairs"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
      <div className="row align-items-center">
        <CurrentDate data={dataFromAPI} />
        <Temperature data={dataFromAPI} />
        <HumidityWind data={dataFromAPI} />
      </div>
    </div>
  );
}
