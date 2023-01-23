import React, { useContext } from "react";

import DataContext from "../DataContext";

import "../Style/MainPage.css";

import AutoComplete from "./AutoComplete";
import WeatherReport from "./WeatherReport";
import CallingCode from "./CallingCode";
import CountryDetails from "./CountryDetails";
import Flag from "./Flag";
import Map from "./Map";

export default function MainPage() {
  const { countryData } = useContext(DataContext);

  console.log(countryData);

  return (
    <div className="MainPage">
      <AutoComplete />
      <WeatherReport />
      <CallingCode />
      <CountryDetails />
      <Flag />
      <Map />
    </div>
  );
}
