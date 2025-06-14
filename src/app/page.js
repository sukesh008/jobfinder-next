"use client";

import { useRouter } from "next/navigation";
import { LocationOn, Search } from "@mui/icons-material";
import Button from "@/Components/ReusableComponents/Button";

export default function Home() {
  const router = useRouter();

  return (
    <div className="home-main-container">
      <div className="flex flex-col">
        <div className="bg-[var(--lightest-gray)] flex flex-col gap-y-[50px] h-screen pt-[150px]">
          <div className="flex flex-col items-center gap-y-[15px]">
            <span className="text-[60px] font-[600]">
              Find Your Next Blue-Collar Job
            </span>
            <span className="text-[var(--light-gray)] text-[22px] pb-[15px]">
              Connecting skilled workers with quality employers across India
            </span>
            <div className="flex gap-x-[15px]">
              <Button
                buttonName="Find Jobs"
                className="primary"
                handleClick={() => router.push("/findjobs")}
              />
              <Button
                buttonName="Post a Job"
                className="primary"
                handleClick={() => router.push("/postjob")}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex gap-x-[15px] bg-[var(--white)] p-[10px] border border-[var(--lighter-gray)] rounded-[5px] shadow-lg">
              {/* Job Search */}
              <div className="relative">
                <div className="flex items-center gap-x-[5px] border border-[var(--lighter-gray)] py-[13px] px-[20px] rounded-[5px]">
                  <Search className="!text-[20px] text-[var(--light-gray)]" />
                  <input
                    type="text"
                    name="jobTitleSearch"
                    placeholder="Job title, Keywords , or Company"
                   
                  />
                </div>
              </div>

              {/* Location Search */}
              <div className="relative">
                <div className="flex items-center gap-x-[5px] border border-[var(--lighter-gray)] py-[13px] px-[20px] rounded-[5px]">
                  <LocationOn className="!text-[20px] text-[var(--light-gray)]" />
                  <input
                    type="text"
                    name="locationSearch"
                    placeholder="City or State"
                  />
                </div>
              </div>

              <Button
                buttonName="Find Jobs"
                className="primary"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col gap-y-[25px] items-center bg-[var(--primary-blue)] text-[var(--white)] p-[60px]">
          <span className="text-[30px] font-[700]">
            Ready to find a Perfect Job?
          </span>
          <span className="text-[22px]">
            Join thousands of workers who found their next opportunity with
            LocalBlueForce
          </span>
          <div className="flex gap-x-[20px]">
            <Button
              buttonName="Register as Worker"
              className="secondary"
              handleClick={() => router.push("/worker/signup")}
            />
            <Button
              buttonName="Register as Employer"
              className="special-button"
              handleClick={() => router.push("/employer/signup")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
