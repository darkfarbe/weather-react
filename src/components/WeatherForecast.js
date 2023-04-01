import React from "react";
import "../WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  if (props.forecast) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={props.forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else return "";
}
