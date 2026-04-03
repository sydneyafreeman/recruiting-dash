import React from 'react';

const CandidatesApplied = ({ candidates }) => {
  return (
    <div>
      <h2>Applied Candidates</h2>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <h4>{candidate.name}</h4>
          <p>Status: {candidate.status}</p>
          {/* Add buttons to mark candidates' status */}
        </div>
      ))}
    </div>
  );
};

export default CandidatesApplied;
