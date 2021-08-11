import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { getAllOrders } from "../services/orders.db";
/**
 * @returns the list of current jobs
 */
const Joblist = () => {
  const { jobs, setJobs } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getAllOrders();
      setJobs(data);
      setIsLoading(false);
    })();
  }, [setJobs]);

  return (
    <div id="joblist-container">
      <Title />
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="scroll-container">
          {jobs.length > 0 && <Jobs jobs={jobs} />}
        </div>
      )}
    </div>
  );
};

const Title = () => {
  return (
    <div className="title">
      <h3 className="priority">Priority</h3>
      <h3 className="name spaced">Name</h3>
      <h3 className="date-code spaced">Date Code</h3>
      <h3 className="part-number spaced">Part Number</h3>
      <h3 className="sales-order spaced">Sales Order</h3>
      <h3 className="date">Date</h3>
    </div>
  );
};

const Jobs = ({ jobs }) => {
  return (
    <div className="jobs">
      {jobs.map((job) => {
        return <Job key={job._id} job={job}></Job>;
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
