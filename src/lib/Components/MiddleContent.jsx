import React from "react";

import WeatherReport from "./WeatherReport";
import CountryDetails from "./CountryDetails";
import Flag from "./Flag";

import { MiddleContentBox } from "../Style/Style";

export default function MiddleContent() {
  return (
    <MiddleContentBox>
      <CountryDetails />
      <Flag />
      <WeatherReport />
    </MiddleContentBox>
  );
}
