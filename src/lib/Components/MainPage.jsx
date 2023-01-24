import React, { useEffect } from "react";

import useStore from "../useStore";

import api from "../Api/Api";

import "../Style/MainPage.css";

import AutoComplete from "./AutoComplete";
import WeatherReport from "./WeatherReport";
import CallingCode from "./CallingCode";
import CountryDetails from "./CountryDetails";
import Flag from "./Flag";
import Map from "./Map";

export default function MainPage() {
  const countryData = useStore((s) => s.countryData);

  useEffect(() => {
    api.getCountry();
  }, []);

  // console.log(countryData)

  return (
    <div className="MainPage">
      <AutoComplete countryData={countryData} />
      <CountryDetails />
      <CallingCode />
      <Flag />
      <WeatherReport />
      <Map />
    </div>
  );
}
