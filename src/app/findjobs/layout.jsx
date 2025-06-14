

export default function FindjobsLayout({children,joblist,jobdetails}){
    return <div className="border-b border-b-[var(--black)] ">
    {children}
     <div className="w-full flex justify-center pb-[30px]">
              <div className="flex gap-x-[20px] justify-center w-[1100px]">
                <span className="flex-1">
                 {joblist}
                </span>
                <span className="flex-1 border border-[var(--lighter-gray)] rounded-[5px] p-[20px] h-fit sticky top-[90px]">
                  {jobdetails}
                </span>
              </div>
            </div>
    </div>
}