import React, { useState } from 'react';

const ResponseFilter = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(value);
  };

  const filterResponse = () => {
    let filteredResponse = {};
    selectedOptions.forEach(option => {
      const key = option.toLowerCase().replace(/ /g, '_'); // Convert to lowercase and replace spaces with underscores
      if (response[key]) {
        filteredResponse[option] = response[key];
      }
    });
    return filteredResponse;
  };

  return (
    <>
      <select multiple onChange={handleChange}>
        <option value="Numbers">Numbers</option>
        <option value="Alphabets">Alphabets</option>
        <option value="Highest Lowercase Alphabet">Highest Lowercase Alphabet</option>
      </select>
      <div>
        {Object.entries(filterResponse()).map(([key, value]) => (
          <p key={key}>{key}: {Array.isArray(value) ? value.join(', ') : value.toString()}</p>
        ))}
      </div>
    </>
  );
};

export default ResponseFilter;
