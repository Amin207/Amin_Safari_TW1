import React, { useEffect } from "react";

import api from "../Api/Api";

import Map from "./Map";
import AutoComplete from "./AutoComplete";
import MiddleContent from "./MiddleContent";

import { MainBox } from "../Style/Style";

export default function MainPage() {
  useEffect(() => {
    api.getCountry();
  }, []);

  return (
    <MainBox>
      <AutoComplete />
      <MiddleContent />
      <Map />
    </MainBox>
  );
}
