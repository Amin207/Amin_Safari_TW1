import React, { useEffect } from "react";

import useStore from "../useStore";

import _ from "lodash";

import { DetailPaper } from "../Style/Style";

export default function WeatherReport() {
  const weatherData = useStore((s) => s.weatherData);


  const icon = () => {
    if (!_.isEmpty(weatherData) && weatherData.weather) {
      const iconUrl = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"
      const description = weatherData.weather[0].description
      return <figure>
                <img src={iconUrl} alt="icon" />
                <figcaption>{description}</figcaption>
            </figure>
    }
    return ""
  }


  return (

    <DetailPaper elevation={2}>

      <header>WeatherReport</header>
      <div className="weatherIcon">
        {icon()}
      </div>
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
    </DetailPaper>
  );
}
