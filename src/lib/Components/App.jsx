import "../Style/App.css";

import MainPage from "./MainPage";

import { DataProvider } from "../DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <MainPage />
      </DataProvider>
    </div>
  );
}

export default App;
