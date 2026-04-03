import React from 'react';

const Orientation = ({ newHires, onComplete }) => {
  return (
    <div>
      <h2>Orientation</h2>
      {newHires.map((hire, index) => (
        <div key={index}>
          <h4>{hire.name}</h4>
          <button onClick={() => onComplete(hire.id)}>Complete Orientation</button>
        </div>
      ))}
    </div>
  );
};

export default Orientation;
