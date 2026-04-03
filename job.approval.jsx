import React from 'react';

const JobApproval = ({ jobRequests, onApprove }) => {
  return (
    <div>
      <h2>Job Requests</h2>
      {jobRequests.map((job, index) => (
        <div key={index}>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
          <button onClick={() => onApprove(job)}>Approve</button>
        </div>
      ))}
    </div>
  );
};

export default JobApproval;
