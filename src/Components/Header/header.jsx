"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "../ReusableComponents/Button";
import { LoginOutlined } from "@mui/icons-material";
import { path } from "./constants";
import Link from "next/link";


const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between px-[100px] py-[15px] gap-x-[20px] text-[18px] border-b border-b-[var(--primary-blue)] sticky bg-[var(--lightest-gray)]/60 top-0  z-10 backdrop-blur-md">
       <Link href="/">
        <span
          className="text-[25px] font-[700] text-[var(--primary-blue)] hover:cursor-pointer"
    >
            JobFinder
        </span>
       </Link>
        <div className="w-[500px] flex justify-between items-center gap-x-[10px]">
          <>
            {path.map((data, index) => (
              <Link href="/findjobs">
              <span
                className={`text-[17px] font-[500] hover:cursor-pointer hover:text-[var(--primary-blue)] ${
                  pathname === data.routePath
                    ? "text-[var(--primary-blue)]"
                    : "non-active"
                }`}
                key={index}
              >
                {data.name}
              </span>
              </Link>
            ))}
          </>
          <div className="flex gap-x-[20px] items-center">
            <Button
              buttonName="Post a Job"
              className="primary"
             
            />

            <Button
              buttonName="Login"
              preIcon={<LoginOutlined style={{ fontSize: "18px" }} />}
              className="login-secondary"
              
            />
          </div>
        </div>
      </div>
  );
};

export default Header;
