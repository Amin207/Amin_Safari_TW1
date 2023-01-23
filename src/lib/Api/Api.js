import { useState } from "react";

import axios from "axios";
import _ from "lodash";

const getCountriesDataApi = () => {
  let d = [];

  axios({
    method: "get",
    url: "https://restcountries.com/v3.1/all",
  })
    .then(({ data }) => {
      if (!_.isUndefined(data)) {
        data.forEach((e) => {
          d.push(e);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return d;
};

export default {
  getCountries: () => getCountriesDataApi(),
};
