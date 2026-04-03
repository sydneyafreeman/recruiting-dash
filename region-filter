import React from 'react';

const RegionFilter = ({ regions, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionFilter;

