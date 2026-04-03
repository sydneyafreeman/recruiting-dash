import React, { useState } from 'react';
import RegionFilter from './Filters/RegionFilter';

const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    // Add logic to filter candidates based on selected region
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <RegionFilter regions={['All', 'North', 'South', 'East', 'West']} onSelect={handleRegionChange} />
      {/* Render components based on selected filters */}
    </div>
  );
};

export default Dashboard;

