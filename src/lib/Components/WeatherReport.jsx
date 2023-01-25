import React, { useEffect } from "react";

import useStore from "../useStore";

import _ from "lodash";

export default function WeatherReport() {
  const weatherData = useStore((s) => s.weatherData);

  return (
    <div className="card weatherReport">
      <header>WeatherReport</header>
      <div className="weatherIcon">test</div>
      <ul>
        <li>
          Wind Speed:{" "}
          <span>{!_.isEmpty(weatherData) ? weatherData.wind.speed : "--"}</span>
        </li>
        <li>
          Temperature:{" "}
          <span>{!_.isEmpty(weatherData) ? weatherData.main.temp : "--"}</span>
        </li>
        <li>
          Humidity:{" "}
          <span>
            {!_.isEmpty(weatherData) ? weatherData.main.humidity : "--"}
          </span>
        </li>
        <li>
          Visibility :{" "}
          <span>{!_.isEmpty(weatherData) ? weatherData.visibility : "--"}</span>
        </li>
      </ul>
    </div>
  );
}
