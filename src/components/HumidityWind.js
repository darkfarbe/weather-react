import React from "react";

export default function HumidityWind(props) {
  if (props && props.data) {
    return (
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">{props.data.main.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{Math.round(props.data.wind.speed)} </span>{" "}
            m/s
          </li>
        </ul>
      </div>
    );
  } else return "";
}
