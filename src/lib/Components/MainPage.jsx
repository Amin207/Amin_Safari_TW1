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

import { Box } from "@mui/material";

export default function MainPage() {
  useEffect(() => {
    api.getCountry();
  }, []);

  return (
    <Box className="MainPage">
      <Box className="autoCompleteBox">
        <AutoComplete />
      </Box>
      <Box className="middleContent">
        <CountryDetails />
        <CallingCode />
        <Flag />
        <WeatherReport />
      </Box>
      <Box className="mapBox">
        <Map />
      </Box>
    </Box>
  );
}
