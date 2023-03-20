import React, { useState } from "react";

export default function TempSwitch(props) {
  const [unit, setUnit] = useState("celsius");

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  return (
    <div>
      <strong>
        {unit === "celsius"
          ? Math.round(props.temp)
          : Math.round((props.temp * 9) / 5 + 32)}
      </strong>
      <span className="units" id="celsius-convert">
        <a href="/" onClick={toCelsius}>
          °C
        </a>{" "}
        |{" "}
        <a href="/" onClick={toFahrenheit}>
          °F
        </a>
      </span>
    </div>
  );
}
