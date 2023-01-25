import React from "react";

import useStore from "../useStore";

import _ from "lodash";

export default function CallingCode() {

  const callingCode = useStore((s) => s.selectedCountry?.callingCode);

  console.log("test",callingCode)

  return <div className="card callingCode">
            <header>CallingCode</header>
            <div className="codeWrapper">
              {/* {callingCode} */}
              {/* <span></span>
              <span></span>
              <span></span> */}
            </div>
    </div>;
}
