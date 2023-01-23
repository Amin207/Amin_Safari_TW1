import { createContext, useEffect, useState } from "react";

import _ from "lodash";

import axios from "axios";

const DataContext = createContext();

export function DataProvider({ children }) {
  // Get data of countries at start
  const [countryData, setCountryData] = useState([]);

  const getCountriesData = () => {
    axios({
      method: "get",
      url: "https://restcountries.com/v3.1/all",
    })
      .then(({ data }) => {
        if (!_.isUndefined(data)) {
          setCountryData(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (_.isEmpty(countryData)) getCountriesData();
  }, []);

  // Weather api and stuff
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = () => {
    
  }

  return (
    <DataContext.Provider value={{ countryData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
