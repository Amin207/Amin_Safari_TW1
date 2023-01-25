import React, { useEffect } from "react";

import useStore from "../useStore";

import _ from "lodash";

import { DetailPaper } from "../Style/Style";

export default function CountryDetails() {
  const detailInfo = useStore((s) => s.selectedCountry?.detail);


  const capitals = () => {
    if (!_.isEmpty(detailInfo) && detailInfo.capital) {
      return detailInfo.capital.map((item) => {
        return item + ',';
      });
    }
    return "--";
  };

  const languages = () => {
    if (!_.isEmpty(detailInfo) && detailInfo.languages) {
      return Object.values(detailInfo.languages).map((item) => {
        return item + ',';
      });

    }
    return "--"
  }

  const timeZone = () => {

    if (!_.isEmpty(detailInfo) && detailInfo.timeZones) {
      return detailInfo.timeZones.map((item, key) => {
        if (key < 4) return item + ',';
      });
    }
    return "--"
  }

  

  return (
    <DetailPaper elevation={2}>
      <header className="title">Country Informations</header>
      <ul style={{ maxWidth: "300px" }} className='list'>
        <li>
          Native Name:{" "}
          <span>{!_.isEmpty(detailInfo) ? detailInfo.nativeName : "--"}</span>
        </li>
        <li>
          Capital: <span>{capitals()}</span>
        </li>
        <li>
          Region:{" "}
          <span>{!_.isEmpty(detailInfo) ? detailInfo.region : "--"}</span>
        </li>
        <li>
          Population:{" "}
          <span>
            {!_.isEmpty(detailInfo)
              ? detailInfo.population.toLocaleString()
              : "--"}
          </span>
        </li>
        <li>
          Languages:{" "}
          <span>
            {languages()}
          </span>
        </li>
        <li>
          Time Zone:{" "}
          <span style={{ wordBreak: "break-word" }}>
            {timeZone()}
          </span>
        </li>
        
      </ul>
    </DetailPaper>
  );
}
