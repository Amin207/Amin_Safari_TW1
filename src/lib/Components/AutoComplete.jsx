import React, { useState } from "react";
import Select from "react-select";

import _ from "lodash";

import api from "../Api/Api";

import useStore from "../useStore";
import { shallow } from "zustand/shallow";

export default function AutoComplete() {
  const { countryData, updateState } = useStore(
    (s) => ({ countryData: s.countryData, updateState: s.updateState }),
    shallow
  );

  const options = countryData
    .sort((a, b) => {
      const x = a.name.common.replace(/\s/g, "").toLowerCase();
      const y = b.name.common.replace(/\s/g, "").toLowerCase();
      return x > y ? 1 : x < y ? -1 : 0;
    })
    .map((item) => {
      // console.log(item.capital);
      return {
        value: item.name.common,
        label: item.name.common,
        lat: item.latlng[0],
        lon: item.latlng[1],
        map: item.maps.googleMaps,
        flag: item.flags,
        callingCode: item.idd.root,
        detail: {
          nativeName: item.name.official,
          capital: item.capital,
          region: item.region,
          population: item.population,
          languages: item.languages,
          timeZones: item.timezones,
        },
      };
    });

  const handleOnchange = (e) => {
    updateState("selectedCountry", e);
    api.getWeather({ lat: e.lat, lon: e.lon });
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
