import React from "react";
import "../WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  if (props.forecast) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {props.forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else return "";
}
