import { create } from "zustand";

import "regenerator-runtime/runtime";

const useStore = create((set, get) => ({
  countryData: [],
  capitalCoord: { lat: undefined, lon: undefined },

  weatherData: {},

  updateState: (stateName, value) => {
    set((s) => ({ [stateName]: value }));
  },
  updateObjState: (stateName, object) => {
    set((s) => ({ [stateName]: { ...s[stateName], ...object } }));
  },
}));

export default useStore;
