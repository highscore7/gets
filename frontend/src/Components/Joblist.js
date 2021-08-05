import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { BsPlusSquare } from "react-icons/bs";

const Joblist = () => {
  const { jobs, openModal } = useGlobalContext();

  return (
    <div id="joblist-container">
      <Title />
      {jobs.length > 0 && <Jobs jobs={jobs} />}
      <BsPlusSquare
        id="plus-icon"
        className="btn"
        onClick={() => {
          openModal();
        }}
      />
    </div>
  );
};

const Title = () => {
  return (
    <div className="title">
      <span className="priority">Priority</span>
      <span className="name spaced">Name</span>
      <span className="date-code spaced">Date Code</span>
      <span className="part-number spaced">Part Number</span>
      <span className="sales-order spaced">Sales Order</span>
      <span className="date">Date</span>
    </div>
  );
};

const Jobs = ({ jobs }) => {
  return (
    <div className="jobs">
      {jobs.map((job) => {
        return <Job key={job.id} job={job}></Job>;
      })}
    </div>
  );
};

const Job = ({ job }) => {
  const { priority, name, dc, date, pn, so } = job;
  return (
    <div className="job-card">
      <span className="priority">{priority}</span>
      <span className="name spaced">{name}</span>
      <span className="date-code spaced">{dc}</span>
      <span className="part-number spaced">{pn}</span>
      <span className="sales-order spaced">{so}</span>
      <span className="date">{date}</span>
    </div>
  );
};

export default Joblist;