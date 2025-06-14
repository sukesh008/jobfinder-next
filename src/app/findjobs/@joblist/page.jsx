"use client";

import { CalendarMonth, LocationOn, Search, Work } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./joblist.css"; 
import Button from "@/Components/ReusableComponents/Button";

const staticJobList = [
  {
    id: 1,
    job_title: "Frontend Developer",
    company_name: "TechNova",
    location: "Bangalore",
    job_type: "Full-time",
    created_at: "2024-06-01T00:00:00Z",
    minimum_salary: 30000,
    maximum_salary: 60000,
  },
  {
    id: 2,
    job_title: "Backend Developer",
    company_name: "CodeGenix",
    location: "Chennai",
    job_type: "Part-time",
    created_at: "2024-05-25T00:00:00Z",
    minimum_salary: 25000,
    maximum_salary: 45000,
  },
];

const JobList = () => {
  const [select, setSelect] = useState(null);
  const jobList = staticJobList;

  useEffect(() => {
    setSelect(jobList?.[0]?.id);
  }, [jobList]);

  const handleSelectJob = (id) => {
    setSelect(id);
  };

  return (
    <div className="job-list-main-container">
      <div className="job-list-header">
        <span className="job-list-no">Jobs Found ({jobList.length})</span>
        <span className="job-list-sort">Sorted by: Newest</span>
      </div>

      <div className="job-list-content-container">
        {jobList ? (
          jobList.length ? (
            jobList.map((data) => (
              <div
                key={data.id}
                className={`job-list-job-container ${
                  select === data.id ? "selectedJob" : "unselected-job"
                }`}
                onClick={() => handleSelectJob(data.id)}
              >
                <div className="job-list-job">
                  <div className="job-content-details">
                    <div className="job-header">
                      <span className="job-header-title">{data.job_title}</span>
                      <span className="job-header-company-name">
                        {data.company_name}
                      </span>
                    </div>

                    <div className="job-about">
                      <div className="job-about-detail">
                        <LocationOn style={{ color: "gray", fontSize: "18px" }} />
                        <span className="job-about-content">{data.location}</span>
                      </div>
                      <div className="job-about-detail">
                        <Work style={{ color: "gray", fontSize: "18px" }} />
                        <span className="job-about-content">{data.job_type}</span>
                      </div>
                      <div className="job-about-detail">
                        <CalendarMonth style={{ color: "gray", fontSize: "18px" }} />
                        <span className="job-about-content">
                          5hrs ago
                        </span>
                      </div>
                    </div>

                    <span className="job-salary">
                      ₹{data.minimum_salary}-{data.maximum_salary}/month
                    </span>
                  </div>

                  <div className="apply-job">
                    <Button buttonName="Apply Now" className="primary" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="job-list-no-job-content">
              <Search style={{ color: "rgb(197, 197, 197)", fontSize: "50px" }} />
              <span className="job-list-no-job-title">No jobs found</span>
              <span className="job-list-no-job-subtitle">
                Try adjusting your search filters or keywords
              </span>
            </div>
          )
        ) : (
          <div className="flex justify-center h-[300px] items-center bg-[var(--lightest-gray)] rounded-[5px]">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
