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
  let time = new Intl.DateTimeFormat("en-UK", {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date());

  return <div>{time}</div>;
}
