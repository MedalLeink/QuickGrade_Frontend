import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SessionCalendar from "../components/SessionCalendar";
// import date from "date-fns";

const EnrolledCourses = () => {
  const [selectedOption, setSelectedOption] = useState<string>(""); // Initialize state

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar name={"22/23/08/019"} />
        <div className="p-8 h-full bg-blue-50 bg-opacity-50">
          <h2 className="w-272 h-6 -mt-2 font-Inter font-bold text-2xl leading-9 tracking-wide text-left text-black">
            Enrolled Courses
          </h2>
          <div
            className="w-1009 h-22 mt-8 bg-blue-600 rounded-xl bg-opacity-90"
            style={{ marginRight: "70px" }}
          >
            <div className="w-[927px] h-[88px] top-16 left-41 pb-8 pt-8 md:p-120 gap-300 flex items-center justify-between">
              <span className="w-166 h-34 font-bold pl-32 text-32 font-inter font-bold leading-45 tracking-0.25 text-left text-white">
                22/23/08/019
              </span>
              <span
                className="w-221 h-88 text-14 font-inter pr-34 font-normal leading-22 tracking-0.15 text-left text-white"
                // style={{ fontSize: "14px", important: "true" }}
              >
                Department of Biochemistry,
                <br />
                Faculty of Science, <br />
                Camouflage University, <br /> Atlanta, Nigeria.
              </span>
            </div>
          </div>
          <div className="w-1091 h-642 top-168 gap-16">
            <span className="w-590 h-44 mt-3 gap-24 flex">
              <span
                className="w-121 h-10 font-inter text-24 font-bold leading-34 tracking-0 text-left"
                style={{ color: "#667085" }}
              >
                Semester:
                <select
                  name="semester"
                  id="semester"
                  className="w-150 h-34 gap-8 p-2 rounded-md font-Inter font-bold text-24 leading-34 text-left"
                  style={{ color: "#667085" }}
                  value={selectedOption} // Set value attribute for controlled component
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option
                    value="option-1"
                    className="w-90 h-34 font-inter font-bold text-24 leading-34 bg-blue-50"
                  >
                    First
                  </option>
                  <option value="option-2">Second</option>
                </select>
              </span>
              <div className="flex items-center gap-8">
                <span className="w-295 h-44">
                  <SessionCalendar />
                </span>
              </div>
            </span>
            <div className="w-1091 h-582 -mt-32">
              <div
                className="w-189 h-22 font-inter font-bold text-16 leading-22"
                style={{ color: "#2D00F7" }}
              >
                Examinations Timetable
                <div className="w-1091 h-560 flex">
                  <div className="w-[1091px] h-[54px] p-[16px 56px] gap-60px mt-4 md-2 mx-auto">
                    <span className="w-103 h-22 text-base font-bold font-inter leading-22 tracking-wider text-left text-black pl-6 pr-20">
                      Course Code
                    </span>
                    <span className="w-200 h-22 text-base font-bold font-inter leading-22 tracking-wider text-left text-black pl-2 pr-24">
                      Course Title
                    </span>
                    <span className="w-200 h-22 text-base font-bold font-inter leading-22 tracking-wider text-left text-black pl-10 pr-20">
                      Date/Time
                    </span>
                    <span className="w-136 h-22 text-base font-bold font-inter leading-22 tracking-wider text-left text-black pl-12 pr-20">
                      Venue
                    </span>
                    <span className="w-100 h-22 font-inter text-16 font-bold leading-22 tracking-0.15 text-left text-black pl-28 pr-20">
                      Status
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[1091px] h-[666px] p-[16px 24px] rounded-16 gap-16 bg-white flex-col justify-center">
                <div className="w-[1043px] h-[45px] p-[16px 32px] border border-solid border-[#98A2B3] gap-60 bg-grey-400 mx-auto">
                  <span className="w-103 h-20 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-32">
                    BCH 208
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                    Enzymology
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-32">
                    BCH 208
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                    Campus E-Center
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-8 pr-22">
                    BCH 208
                  </span>
                </div>
                <div className="w-[1043px] h-[44px] p-[16px 32px] border border-solid border-[#98A2B3] gap-60 bg-grey-400 mt-4 mx-auto">
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-32">
                    BCH 201
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-28">
                    Nutrition and Diet
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                    BCH 208
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                    Campus E-Center
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-8 pr-22">
                    BCH 208
                  </span>
                </div>
                <div className="w-[1043px] h-[44px] p-[16px 32px] border border-solid border-[#98A2B3] gap-60 bg-grey-400 mt-4 mx-auto">
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-32">
                    BCH 212
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-24">
                    Blood & Body Fluids
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                    BCH 208
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                    Campus E-Center
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-8 pr-22">
                    BCH 208
                  </span>
                </div>
                <div className="w-[1043px] h-[44px] p-[16px 32px] border border-solid border-[#98A2B3] gap-60 bg-grey-400 mt-4 mx-auto">
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-32">
                    BCH 121
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-20">
                    DNA / RNA Sequence
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-2 pr-32">
                    BCH 208
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                    Campus E-Center
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-8 pr-22">
                    BCH 208
                  </span>
                </div>
                <div className="w-[1043px] h-[44px] p-[16px 32px] border border-solid border-[#98A2B3] gap-60 bg-grey-400 mt-4 mx-auto">
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-28">
                    Chem 212
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-24">
                    Organic Chemistry
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-4 pr-32">
                    BCH 208
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                    Campus E-Center
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-8 pr-22">
                    BCH 208
                  </span>
                </div>
                <div className="w-[1043px] h-[44px] p-[16px 32px] border border-solid border-[#98A2B3] gap-60 bg-grey-400 mt-4 mx-auto">
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-28">
                    BCH 233
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-2 pr-32">
                    Pharmacology
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-4 pr-32">
                    BCH 208
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                    Campus E-Center
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-8 pr-22">
                    BCH 208
                  </span>
                </div>
                <div className="w-[1043px] h-[44px] p-[16px 32px] border border-solid border-[#98A2B3] gap-60 bg-grey-400 mt-4 mx-auto mr-auto">
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-28">
                    BCH 205
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-20">
                    Cytochromes Reactivity
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                    BCH 208
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                    Campus E-Center
                  </span>
                  <span className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-8 pr-22">
                    BCH 208
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;
