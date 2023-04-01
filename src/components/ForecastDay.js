import react from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);

    let d = new Intl.DateTimeFormat("en-UK", { weekday: "short" }).format(date);
    return d;
  }

  return (
    <div>
      <div className="WeatherForecast-day"> {day()} </div>
      <img src={props.data.condition.icon_url} alt="Weather Icon" />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°{" "}
        </span>
        <span className="WeatherForecaste-temperature-min">
          {Math.round(props.data.temperature.minimum)}°{" "}
        </span>
      </div>
    </div>
  );
}
