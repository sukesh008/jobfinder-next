"use client";

import { CalendarMonth, LocationOn, Work } from "@mui/icons-material";
import "./jobdetails.css";
import Button from "@/Components/ReusableComponents/Button";

const jobList = [
  {
    id: 1,
    job_title: "Frontend Developer",
    company_name: "TechNova",
    location: "Bangalore",
    job_type: "Full-time",
    created_at: "2024-06-01T00:00:00Z",
    minimum_salary: 30000,
    maximum_salary: 60000,
    job_description: "We are looking for a skilled frontend developer...",
    responsibilities: "Develop user-facing features, optimize UI...",
    requirements: "Experience with React, Tailwind, MUI...",
    benefits: "Flexible hours, Health insurance, Remote options...",
    about_company:
      "TechNova is a fast-growing startup focusing on modern web technologies.",
  },
];

const JobDetails = () => {
  const selectedJob = jobList[0]; // Static selection

  return (
    <div className="job-details-main-container">
      {selectedJob ? (
        <div className="job-details-container">
          <div className="job-details-company-overview">
            <div className="job-details-header">
              <span className="job-header-title">{selectedJob.job_title}</span>
              <span className="job-header-company-name">
                {selectedJob.company_name}
              </span>
            </div>

            <div className="job-about">
              <div className="job-about-detail">
                <LocationOn style={{ color: "gray", fontSize: "18px" }} />
                <span className="job-about-content">
                  {selectedJob.location}
                </span>
              </div>
              <div className="job-about-detail">
                <Work style={{ color: "gray", fontSize: "18px" }} />
                <span className="job-about-content">
                  {selectedJob.job_type}
                </span>
              </div>
              <div className="job-about-detail">
                <CalendarMonth style={{ color: "gray", fontSize: "18px" }} />
                <span className="job-about-content">
                  5hrs ago
                </span>
              </div>
            </div>

            <span className="job-salary">
              ₹{selectedJob.minimum_salary}-{selectedJob.maximum_salary}/month
            </span>

            <div className="job-details-buttons">
              <Button className="primary" buttonName="Apply Now" />
            </div>
          </div>

          <div className="job-description-container">
            <span className="job-description-header">Job Description</span>
            <div className="job-description-content">
              <span className="description-detail">
                {selectedJob.job_description}
              </span>
              <div className="description-detail-container">
                <span className="description-detail-header">
                  Responsibilities:
                </span>
                <span className="description-detail">
                  {selectedJob.responsibilities}
                </span>
              </div>
              <div className="description-detail-container">
                <span className="description-detail-header">Requirements:</span>
                <span className="description-detail">
                  {selectedJob.requirements}
                </span>
              </div>
              <div className="description-detail-container">
                <span className="description-detail-header">Benefits:</span>
                <span className="description-detail">
                  {selectedJob.benefits}
                </span>
              </div>
            </div>
          </div>

          <div className="about-company-container">
            <span className="about-company-header">About the Company</span>
            <div className="about-company-content">
              <img src="/company-logo.png" alt="Company Logo" />
              <span className="about-company">{selectedJob.about_company}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="job-details-no-details-container">
          <div className="job-details-no-details-content">
            <Work style={{ color: "lightgray", fontSize: "50px" }} />
            <span className="no-job-details-title">No job selected</span>
            <span className="no-job-details-subtitle">
              Select a job from the list to view details
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
