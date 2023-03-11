import React from "react";

export default function Temperature() {
  return (
    <div class="col-6 d-flex">
      <div class="weather-temperature d-flex align-items-center">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="clouds"
          id="icon"
        />
        <div>
          <strong id="temperature">14</strong>
          <span class="units" id="celsius-convert">
            °C
          </span>
        </div>
      </div>
    </div>
  );
}
