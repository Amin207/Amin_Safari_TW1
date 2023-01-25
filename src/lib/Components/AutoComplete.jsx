import React, { useEffect, useState } from "react";

import _ from "lodash";

import api from "../Api/Api";

import useStore from "../useStore";
import { shallow } from "zustand/shallow";

import { AutoBox, StyledAutocomplete } from "../Style/Style";
import { TextField } from "@mui/material";

export default function AutoComplete() {
  const { countryData, updateState } = useStore(
    (s) => ({ countryData: s.countryData, updateState: s.updateState }),
    shallow
  );

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(countryData)) {
      countryData
        .sort((a, b) => {
          const x = a.name.common.replace(/\s/g, "").toLowerCase();
          const y = b.name.common.replace(/\s/g, "").toLowerCase();
          return x > y ? 1 : x < y ? -1 : 0;
        })
        .forEach((e, i) => {
          setOptions((prev) => [
            ...prev,
            {
              id: i,
              label: e.name.common,
              lat: e.latlng[0],
              lon: e.latlng[1],
              map: e.maps,
              flag: e.flags,
              callingCode: e.idd,
              detail: {
                nativeName: e.name.official,
                capital: e.capital,
                region: e.region,
                population: e.population,
                languages: e.languages,
                timeZones: e.timezones,
              },
            },
          ]);
        });
    }
  }, [countryData]);

  const handleOnchange = (event, newValue) => {
    if (!_.isNull(newValue)) {
      updateState("selectedCountry", newValue);
      api.getWeather({ lat: newValue.lat, lon: newValue.lon });
    }
  };

  return (
    <AutoBox>
      <StyledAutocomplete
        options={options ? options : [{ id: 0, label: "No Countries..." }]}
        renderInput={(params) => (
          <TextField {...params} label="Choose a country" />
        )}
        dense="ture"
        size="small"
        disableClearable
        onChange={handleOnchange}
      />
    </AutoBox>
  );
}
