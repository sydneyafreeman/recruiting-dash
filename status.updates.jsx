import React from 'react';

const StatusUpdates = ({ updates }) => {
  return (
    <div>
      <h2>Status Updates</h2>
      {updates.map((update, index) => (
        <div key={index}>
          <p>{update.message}</p>
        </div>
      ))}
    </div>
  );
};

export default StatusUpdates;
