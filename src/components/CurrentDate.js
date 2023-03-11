import React from "react";

export default function CurrentDate(props) {
  if (props && props.data) {
    return (
      <div className="overview">
        <h1 id="city" className="cityName mb-1">
          {props.data.name}
        </h1>
        <ul>
          <li id="date"> Saturday 10:29</li>
          <li id="description"> {props.data.weather[0].description}</li>
        </ul>
      </div>
    );
  } else return "";
}
