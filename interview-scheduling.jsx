import React from 'react';

const InterviewScheduling = ({ candidates, onSchedule }) => {
  return (
    <div>
      <h2>Schedule Interviews</h2>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <h4>{candidate.name}</h4>
          <button onClick={() => onSchedule(candidate.id)}>Schedule Interview</button>
        </div>
      ))}
    </div>
  );
};

export default InterviewScheduling;
