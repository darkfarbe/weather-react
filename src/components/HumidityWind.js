import React from "react";

export default function HumidityWind() {
  return (
    <div class="col-6">
      <ul>
        <li>
          Humidity: <span id="humidity">80</span>%
        </li>
        <li>
          Wind: <span id="wind">20</span> m/s
        </li>
      </ul>
    </div>
  );
}
