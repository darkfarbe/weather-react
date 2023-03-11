import React from "react";

export default function LocationSearch() {
  return (
    <form id="search-form" class="mb-3">
      <div class="row">
        <div class="col-8">
          <input
            type="search"
            placeholder="Write a city"
            class="form-control"
            id="city-input"
          />
        </div>
        <div class="col-2">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
        <div class="col-2">
          <button id="myLocation" class="btn btn-success">
            <span title="My location">
              <i class="fa-solid fa-location-crosshairs"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
