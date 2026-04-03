import React, { useState } from 'react';

const JobRequest = ({ onRequest }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleRequest = () => {
    // Notify HR Manager (Karina) when a job request is made
    onRequest({ title: jobTitle, description });
    setJobTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Job Opening Request</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleRequest}>Submit Job Request</button>
    </div>
  );
};

export default JobRequest;
