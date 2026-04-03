import React from 'react';

const CandidateScreening = ({ candidates, onStatusChange }) => {
  return (
    <div>
      <h2>Candidate Screening</h2>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <h4>{candidate.name}</h4>
          <button onClick={() => onStatusChange(candidate.id, 'Not a Fit')}>Not a Fit</button>
          <button onClick={() => onStatusChange(candidate.id, 'Good Fit')}>Good Fit</button>
          {/* Additional status buttons as needed */}
        </div>
      ))}
    </div>
  );
};

export default CandidateScreening;
