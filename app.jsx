import React, { useState } from 'react';
import JobRequest from './components/JobRequest';
import JobApproval from './components/JobApproval';
import CandidatesApplied from './components/CandidatesApplied';
import CandidateScreening from './components/CandidateScreening';
import StatusUpdates from './components/StatusUpdates';
import InterviewScheduling from './components/InterviewScheduling';
import OfferStatus from './components/OfferStatus';
import Orientation from './components/Orientation';

const App = () => {
  const [jobRequests, setJobRequests] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [updates, setUpdates] = useState([]);
  
  const handleJobRequest = (request) => {
    setJobRequests((prev) => [...prev, request]);
    // Notify Karina (e.g., via email or notification system)
  };

  const handleJobApproval = (job) => {
    // Logic to approve job
    // Integrate with Indeed to post job
  };

  const handleStatusChange = (id, status) => {
    // Logic to update candidate status and notify PMs
  };

  const handleScheduleInterview = (id) => {
    // Logic to schedule an interview
  };

  const handleOffer = (id) => {
    // Logic to send an offer
  };

  const handleCompleteOrientation = (id) => {
    // Logic to complete orientation process
  };

  return (
    <div>
      <h1>Recruiting Dashboard</h1>
      <JobRequest onRequest={handleJobRequest} />
      <JobApproval jobRequests={jobRequests} onApprove={handleJobApproval} />
      <CandidatesApplied candidates={candidates} />
      <CandidateScreening candidates={candidates} onStatusChange={handleStatusChange} />
      <StatusUpdates updates={updates} />
      <InterviewScheduling candidates={candidates} onSchedule={handleScheduleInterview} />
      <OfferStatus candidates={candidates} onOffer={handleOffer} />
      <Orientation newHires={candidates.filter(c => c.status === 'Hired')} onComplete={handleCompleteOrientation} />
    </div>
  );
};

export default App;
