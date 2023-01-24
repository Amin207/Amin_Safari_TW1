import React, { useState } from "react";
import Select from "react-select";

import _ from "lodash";

import api from "../Api/Api";

import useStore from "../useStore";
import shallow from "zustand";

export default function AutoComplete() {


  const countryData = useStore((s) => s.countryData);
  const selectedCountry = useStore((s) => s.selectedCountry);
  const updateState = useStore((s) => s.updateState);

  const options = countryData.map((item) => {
    return {
      value: item.name.common,
      label: item.name.common,
      lat: item.latlng[0],
      lon: item.latlng[1],
      map: item.maps.googleMaps,
      flag: item.flags,
    };
  });

  const handleOnchange = (e) => {
    updateState("selectedCountry", e);
    if (
      _.isUndefined(selectedCountry["lat"]) &&
      _.isUndefined(selectedCountry["lon"])
    ) {
      console.log("test api");
      api.getWeather();
    }
  };

  return (
    <div className="autoComplete">
      <header>AutoComplete</header>
      <Select
        className="selectedCountry"
        onChange={handleOnchange}
        options={options}
      />
    </div>
  );
}
