import React, { useEffect } from "react";

import useStore from "../useStore";

import _ from "lodash";

import { DetailPaper } from "../Style/Style";

export default function CountryDetails() {
  const detailInfo = useStore((s) => s.selectedCountry?.detail);

  // console.log(detailInfo)

  const capitals = () => {
    if (!_.isEmpty(detailInfo) && detailInfo.capital) {
      return detailInfo.capital.map((item) => {
        return item;
      });
    }
    return "--";
  };

  return (
    <DetailPaper elevation={2}>
      <header>{!_.isEmpty(detailInfo) ? detailInfo.nativeName : "--"}</header>
      <ul style={{ maxWidth: "300px" }}>
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
            {!_.isEmpty(detailInfo) ? detailInfo.languages.eng : "--"}
          </span>
        </li>
        <li>
          Time Zone:{" "}
          <span style={{ wordBreak: "break-word" }}>
            {!_.isEmpty(detailInfo) ? detailInfo.timeZones : "--"}
          </span>
        </li>
      </ul>
    </DetailPaper>
  );
}
