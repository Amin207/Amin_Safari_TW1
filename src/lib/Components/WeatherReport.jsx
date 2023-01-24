import React from "react";

export default function WeatherReport() {
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
