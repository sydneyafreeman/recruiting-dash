// CandidateCard.tsx
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const CandidateCard = ({ candidate, index }) => {
  return (
    <Draggable draggableId={candidate.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="candidate-card"
        >
          <h3>{candidate.name}</h3>
          <p>{candidate.role}</p>
          <p>Status: {candidate.status}</p>
        </div>
      )}
    </Draggable>
  );
};

export default CandidateCard;
