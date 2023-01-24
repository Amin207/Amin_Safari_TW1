import React, { useEffect } from "react";

import useStore from "../useStore";

export default function WeatherReport() {

  const weatherData = useStore((s) => s.weatherData);
  

  return <div className="card weatherReport">
            <header>WeatherReport</header>
            <div className="weatherIcon">test</div>
            <ul>
              <li>Wind Speed: <span>--</span></li>
              <li>Temperature: <span>--</span></li>
              <li>Humidity: <span>--</span></li>
              <li>Visibility : <span>--</span></li>
            </ul>
         </div>;
}
