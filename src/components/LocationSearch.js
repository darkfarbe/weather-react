import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import HumidityWind from "./HumidityWind";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function LocationSearch() {
  const [dataFromAPI, setDataFromAPI] = useState({
    wind: {
      speed: 7,
    },
    condition: {
      description: "overcast clouds",
      icon_url:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    },
    city: "New York",
    temperature: {
      current: 21,
      humidity: 80,
    },

    dt: new Date().getTime(),
  });

  function handleSubmit(event) {
    event.preventDefault();
    let el = document.getElementById("city-input");
    let apiKey = "fbde5cao1a5748d107tcc6736273f093";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${el.value}&key=${apiKey}&units=metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${el.value}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(getDisplayData);
  }

  function getDisplayData(response) {
    console.log(response);
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
        <WeatherForecast data={dataFromAPI} />
      </div>
    </div>
  );
}
