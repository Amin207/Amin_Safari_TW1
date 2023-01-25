import useStore from "../useStore";

import axios from "axios";
import _ from "lodash";

const { getState } = useStore;

const weatherApiKey = "98b874cce4e331429cbbe740d7f2b2f5";

const typeObj = {
  getCountry: {
    method: "get",
    url: "https://restcountries.com/v3.1/all",
    func: (data) => {
      getState().updateState("countryData", data);
    },
  },
  getWeather: {
    method: "get",
    url: ({ lat, lon }) => {
      const url = "https://api.openweathermap.org/data/2.5/weather?";
      const params = new URLSearchParams({
        lat: lat,
        lon: lon,
        appid: weatherApiKey,
      }).toString();
      return url + params;
    },
    func: (data) => {
      getState().updateState("weatherData", data);
    },
  },
};

const api = (type, ...arg) => {
  const url = typeObj[type]["url"];

  axios({
    method: typeObj[type]["method"],
    url: _.isFunction(url) ? url(...arg) : url,
  })
    .then(({ data }) => {
      if (!_.isUndefined(data)) {
        typeObj[type]["func"](data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  getCountry: () => api("getCountry"),
  getWeather: (...arg) => api("getWeather", ...arg),
};
