


"use client";

import { useRouter } from "next/navigation";
import "./footer.css";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="footer-main-container flex flex-col p-[30px]">
      <div className="flex justify-evenly gap-x-[30px] px-[60px] py-[30px]">
        <div className="flex flex-col gap-y-[20px] flex-1  ">
            <span className="text-[20px] font-[600]">JobFinder</span>
          <span className="text-[14px] text-[var(--light-gray)] ">
            Connecting skilled blue-collar workers with quality employers across
            India
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-y-[20px]">
          <span className="text-[20px] font-[600]">For Workers</span>
          <div className="flex flex-col gap-y-[10px]">
            <span className="footer-page" >
              Find Jobs
            </span>
            <span className="footer-page" >
              Create Profile
            </span>
            <span className="footer-page">
              FAQ
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-[20px]">
          <span className="text-[20px] font-[600]">For Employers</span>
          <div className="flex flex-col gap-y-[10px]">
            <span className="footer-page" >
              Post a Job
            </span>
            <span className="footer-page" >
              Register
            </span>
            <span className="footer-page" >
              FAQ
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-[20px]">
          <span className="text-[20px] font-[600]">Contact Us</span>
          <div className="flex flex-col gap-y-[10px]">
            <span className="text-[var(--light-gray)]">
              Have questions? Reach out us!
            </span>
            <span
              className="text-[15px] text-[var(--primary-blue)] hover:underline hover:cursor-pointer"
            >
              Contact Form
            </span>
          </div>
        </div>
      </div>
      <span className="text-center text-[var(--light-gray)] text-[14px] pt-[30px] border-t border-t-[var(--lighter-gray)]">
        &copy; 2025 LocalBlueForce. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
