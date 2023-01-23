import { createContext, useEffect, useState } from "react";

import _ from "lodash";

import axios from "axios";

const DataContext = createContext();

export function DataProvider({ children }) {
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

  // Get data of countries at start
  useEffect(() => {
    if (_.isEmpty(countryData)) getCountriesData();
  }, []);

  return (
    <DataContext.Provider value={{ countryData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
