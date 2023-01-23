import _ from "lodash";

const getCountriesDataApi = () => {
  axios({
    method: "get",
    url: "https://restcountries.com/v3.1/all",
  })
    .then(({ data }) => {
      if (!_.isUndefined(data)) {
        return data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  getCountries: () => getCountriesDataApi(),
};
