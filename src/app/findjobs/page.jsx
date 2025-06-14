"use client";
import { Search, LocationOn, ArrowDropDown } from "@mui/icons-material";
import Button from "@/Components/ReusableComponents/Button";
import SelectOption from "@/Components/ReusableComponents/SelectOption";
import TabButton from "@/Components/ReusableComponents/SwitchTabsButton";
import { useState } from "react";

const tabs = ["List View", "Map View"];

const FindJobsUI = () => {
  const [view, setView] = useState(tabs[0]);

  return (
    <div className="find-job-main-container p-[30px]">
      <div className="find-job-container flex flex-col gap-y-[30px]">
        {/* Search bar */}
        <div className="flex justify-center w-full">
          <div className="flex gap-x-[15px] justify-center items-center border border-[var(--light-black)] rounded-[8px] p-[10px] w-[clamp(200px,70vw,900px)] shadow-xl">
            <div className="flex-1 flex items-center gap-x-[10px] p-[5px] rounded-[5px] relative">
              <Search className="!text-[28px] text-[var(--black)]" />
              <input
                type="text"
                placeholder="Job title, Keywords, or company"
                className="w-full border-none outline-none text-[17px]"
              />
            </div>
            <span className="h-[30px] w-[1px] bg-[var(--lighter-gray)]" />
            <div className="flex-1 flex items-center gap-x-[10px] p-[5px] rounded-[5px] relative">
              <LocationOn className="!text-[24px] text-[var(--black)]" />
              <input
                type="text"
                placeholder="City or State"
                className="w-full border-none outline-none text-[17px]"
              />
            </div>
            <Button className="primary" buttonName="Find Jobs" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-x-[10px] justify-center mt-[20px]">
          <SelectOption
            placeHolder="Pay"
            option={[
              "₹10000+/month",
              "₹15000+/month",
              "₹20000+/month",
              "₹30000+/month",
              "₹40000+/month",
            ]}
            className="bg-[var(--lightest-gray2)] !text-[13px] !rounded-[10px]"
          />
          <SelectOption
            placeHolder="Job Type"
            option={["Full-time", "Part-time", "Internship", "Freelance"]}
            className="bg-[var(--lightest-gray2)] !text-[13px] !rounded-[10px]"
          />
          <SelectOption
            placeHolder="Location"
            option={["Tamil Nadu", "Karnataka", "Delhi", "Maharashtra"]}
            className="bg-[var(--lightest-gray2)] !text-[13px] !rounded-[10px]"
          />
          <div className="flex items-center justify-center pl-[15px] pr-[10px] border border-[var(--lighter-gray)] py-[6px] bg-[var(--lightest-gray2)] text-[13px] rounded-[10px] hover:border-[var(--black)] hover:cursor-pointer">
            <span>Education Level</span>
            <ArrowDropDown className="text-[var(--light-gray)]" />
          </div>
          <SelectOption
            placeHolder="Date Posted"
            option={[
              "Last 24 hours",
              "Last 3 days",
              "Last 7 days",
              "Last 14 days",
            ]}
            className="bg-[var(--lightest-gray2)] !text-[13px] !rounded-[10px]"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-end border-b border-b-[var(--lighter-gray)] pb-[20px] mt-[20px]">
          <TabButton
            tabs={tabs}
            currentTab={view}
            setCurrentTab={setView}
            className="find-job-view"
          />
        </div>
      </div>
    </div>
  );
};

export default FindJobsUI;
