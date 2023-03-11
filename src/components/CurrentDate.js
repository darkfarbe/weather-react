import React from "react";

export default function CurrentDate() {
  return (
    <div className="overview">
      <h1 id="city" className="cityName mb-1">
        New York
      </h1>
      <ul>
        <li id="date"> Saturday 10:29</li>
        <li id="description"> Overcast clouds</li>
      </ul>
    </div>
  );
}
