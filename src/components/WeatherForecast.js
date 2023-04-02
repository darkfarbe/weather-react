import React from "react";
import "../WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  if (props.forecast) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {props.forecast.slice(0, 5).map((dailyForecast, index) => {
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else return "";
}
