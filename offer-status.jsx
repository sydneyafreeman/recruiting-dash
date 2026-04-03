import React from 'react';

const OfferStatus = ({ candidates, onOffer }) => {
  return (
    <div>
      <h2>Offer Status</h2>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <h4>{candidate.name}</h4>
          <button onClick={() => onOffer(candidate.id)}>Send Offer</button>
          {/* Additional offer management options */}
        </div>
      ))}
    </div>
  );
};

export default OfferStatus;
