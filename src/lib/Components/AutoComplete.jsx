import React, { useState } from "react";
import Select from 'react-select';


export default function AutoComplete({ countryData }) {
  console.log(countryData)

  const [selectedOption, setSelectedOption] = useState(null);

  const options = countryData.map(item => {
    return { value: item.name.common, label: item.name.common }
  })

  //  const [flags , setFlags ] = useState()


  return <div className="autoComplete">
    <header>AutoComplete</header>
    <Select
      className="selectedOption"
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
    />


  </div>;
}
