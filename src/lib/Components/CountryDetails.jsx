import React, { useEffect } from "react";

import useStore from "../useStore";

import _ from "lodash";

export default function CountryDetails() {

  const detailInfo = useStore((s) => s.selectedCountry?.detail);

  // console.log(detailInfo)

  const capitals = () => {
    if (!_.isEmpty(detailInfo) && detailInfo.capital) {
      return detailInfo.capital.map(item => {
        return item
      })
    }
    return "--"
  }

  return <div className="card countryDetails">
    <header>CountryDetails</header>
    <ul>
      <li>Native Name: <span>{!_.isEmpty(detailInfo) ? detailInfo.nativeName : "--"}</span></li>
      <li>Capital: <span>{capitals()}</span></li>
      <li>Region: <span>{!_.isEmpty(detailInfo) ? detailInfo.region : "--"}</span></li>
      <li>Population: <span>{!_.isEmpty(detailInfo) ? detailInfo.population.toLocaleString() : "--"}</span></li>
      <li>Languages: <span>{!_.isEmpty(detailInfo) ? detailInfo.nativeName : "--"}</span></li>
      <li>Time Zone: <span>{!_.isEmpty(detailInfo) ? detailInfo.timeZones : "--"}</span></li>
    </ul>
  </div>;
}
