import React from "react";
import TempSwitch from "./TempSwitch";

export default function Temperature(props) {
  if (props && props.data) {
    return (
      <div className="col-6 d-flex">
        <div className="weather-temperature d-flex align-items-center">
          <img src={props.data.condition.icon_url} alt="Weather Icon" />
          <div>
            <TempSwitch temp={props.data.temperature.current} />
          </div>
        </div>
      </div>
    );
  } else return "";
}
