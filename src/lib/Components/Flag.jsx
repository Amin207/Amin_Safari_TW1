import React from "react";

import useStore from "../useStore";

import _ from "lodash";

// import { FlagPaper } from "../Style/Style";


export default function Flag() {
  const selectedCountry = useStore((s) => s.selectedCountry);

  const url = !_.isEmpty(selectedCountry) ? selectedCountry.flag.svg : "";

  const callingCode = useStore((s) => s.selectedCountry?.callingCode)


  const callingCodeList = () => {

    return callingCode?.suffixes.map((item, key) => {
      if (key < 10) {
        return callingCode.root + item + ','
      }
    })

  }

  return (
    // <FlagPaper elevation={2}>

    // </FlagPaper>
    <figure className="flag">
      <img src={url} alt='flag' />
      <figcaption>
        <header className="title">
          Calling Code
        </header>
        {callingCodeList()}
      </figcaption>
    </figure>
  );
}
