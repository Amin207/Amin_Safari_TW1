import React from "react";

import useStore from "../useStore";

import _ from "lodash";

import { FlagPaper } from "../Style/Style";

export default function Flag() {
  const selectedCountry = useStore((s) => s.selectedCountry);

  const url = !_.isEmpty(selectedCountry) ? selectedCountry.flag.svg : "";

  return (
    <FlagPaper elevation={2}>
      <img style={{ width: "100%", height: "100%" }} src={url} />
    </FlagPaper>
  );
}
