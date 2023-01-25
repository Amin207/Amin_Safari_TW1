import React from "react";

import useStore from "../useStore";

import _ from "lodash";

export default function Flag() {
  const selectedCountry = useStore((s) => s.selectedCountry);

  const url = !_.isEmpty(selectedCountry) ? selectedCountry.flag.png : "";

  return (
    <div className="card flag">
      <img src={url} />
    </div>
  );
}
