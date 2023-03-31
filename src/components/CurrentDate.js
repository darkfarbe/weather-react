import React from "react";

export default function CurrentDate(props) {
  if (props && props.data) {
    return (
      <div className="overview">
        <h1 id="city" className="cityName mb-1">
          {props.data.city}
        </h1>
        <ul>
          <li id="date">{FormattedDate(props.data.dt)}</li>
          <li id="description"> {props.data.condition.description}</li>
        </ul>
      </div>
    );
  } else return "";
}

function FormattedDate(props) {
  let weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  let today = new Date();
  let day = today.getDay();
  let hour = today.getHours();
  let minutes = today.getMinutes();

  return (
    <div>
      {weekDays[day]} {hour}:{minutes}
    </div>
  );
}
