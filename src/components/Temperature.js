import React from "react";

export default function Temperature(props) {
  if (props && props.data) {
    return (
      <div className="col-6 d-flex">
        <div className="weather-temperature d-flex align-items-center">
          <img
            src={
              "http://openweathermap.org/img/w/" +
              props.data.weather[0].icon +
              ".png"
            }
            alt="Weather Icon"
          />
          <div>
            <strong>{Math.round(props.data.main.temp)}</strong>
            <span className="units" id="celsius-convert">
              °C
            </span>
          </div>
        </div>
      </div>
    );
  } else return "";
}
