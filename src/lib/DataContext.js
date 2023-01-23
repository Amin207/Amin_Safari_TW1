import { createContext, useState } from "react";

import _ from "lodash";

import axios from "axios";

const DataContext = createContext();

export function DataProvider({ children }) {
  

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}

export default DataContext;
