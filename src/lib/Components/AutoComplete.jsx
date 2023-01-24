import React, { useState } from "react";
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


export default function AutoComplete({countryData}) {
  console.log(countryData)

  const [selectedOption, setSelectedOption] = useState(null);

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
