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
          <h2 className="w-272 h-6 -mt-3 font-Inter font-bold text-2xl leading-9 tracking-wide text-left text-black">
            Enrolled Courses
          </h2>
          <div
            className="w-1009 h-22 mt-8 p-4 bg-[#3746F5] rounded-xl bg-opacity-90"
            style={{ marginRight: "70px" }}
          >
            <div className="w-[927px] h-[88px] top-16 left-41 pb-8 pt-8 md:p-120 gap-300 flex items-center justify-between">
              <span className="w-166 h-34 font-bold pl-32 text-32 font-inter font-bold leading-45 tracking-0.25 text-left text-white">
                22/23/08/019
              </span>
              <span className="w-221 h-88 text-14 font-inter pr-34 font-normal leading-22 tracking-0.15 text-left text-white">
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
                  className="w-150 h-34 gap-8 p-2 rounded-md font-Inter font-bold text-24 leading-34 text-left bg-blue-50 bg-opacity-50"
                  style={{ color: "#667085" }}
                  value={selectedOption} // Set value attribute for controlled component
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option
                    value="option-1"
                    className="w-90 h-34 font-inter font-bold text-24 leading-34"
                  >
                    First
                  </option>
                  <option value="option-2">Second</option>
                </select>
              </span>
              <div className="flex items-center gap-8 ">
                <span className="w-295 h-44">
                  <SessionCalendar />
                </span>
              </div>
            </span>

            <div className="w-1091 h-582 -mt-32 mx-auto">
              <table className="overflow-hidden w-full bg-white p-[16px 32px]">
                <thead className="flex justify-between w-full h-[54px] p-[16px 32px] gap-60px items-center bg-blue-50 bg-opacity-50">
                  <th className="w-103 h-22 text-base font-bold font-inter leading-22 tracking-wider text-left text-black pl-10 pr-2">
                    Course Code
                  </th>
                  <th className="w-200 h-22 text-base font-bold font-inter leading-22 tracking-wider text-left text-black pr-12">
                    Course Title
                  </th>
                  <th className="w-200 h-22 text-base font-bold font-inter leading-22 tracking-wider text-left text-black pl-12 pr-14">
                    Department
                  </th>
                  <th className="w-136 h-22 text-base font-bold font-inter leading-22 tracking-wider text-left text-black pl-2 pr-20">
                    Venue
                  </th>
                  <th className="w-200 h-22 font-inter text-16 font-bold leading-22 tracking-0.15 text-left text-black pl-2 pr-20">
                    Status
                  </th>
                </thead>
              </table>
            </div>
            <div>
              <table className="rounded-s overflow-hidden w-full bg-white p-[16px 32px] pb-8 border border-r-8 border-l-8">
                <tbody className="bg-white rounded-md overflow-hidden -mt-2">
                  <tr className="flex items-center justify-between pl-[40px] p-[10px] border-2 whitespace-nowrap mt-2 mb-2">
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-5">
                      BCH 208
                    </td>
                    <td className="w-200 h-22 text-base font-inter leading-22 tracking-wider text-left text-black pl- pr-5">
                      Enzymology
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-14 pr-6">
                      Biochemistry
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-">
                      Campus E-center
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-18 pr-20 text-red-600">
                      Expired
                    </td>
                  </tr>
                  <tr className="flex items-center justify-between pl-[40px] p-[10px] border-2 whitespace-nowrap mt-3">
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-16">
                      BCH 201
                    </td>
                    <td className="w-200 h-22 text-base font-inter leading-22 tracking-wider text-left text-black pl-2 pr-20">
                      Nutrition and Diet
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                      Biochemistry
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                      Campus E-center
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-8 pr-22 text-green-600">
                      Take Exam
                    </td>
                  </tr>
                  <tr className="flex items-center justify-between pl-[40px] p-[10px] border-2 whitespace-nowrap mt-3">
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-16">
                      BCH 212
                    </td>
                    <td className="w-200 h-22 text-base font-inter leading-22 tracking-wider text-left text-black pl-8 pr-16">
                      Blood & Body Fluids
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                      Biochemistry
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                      Campus E-center
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-8 pr-22 text-gray-400">
                      Take Exam
                    </td>
                  </tr>
                  <tr className="flex items-center justify-between pl-[40px] p-[10px] border-2 whitespace-nowrap mt-3">
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-16">
                      BCH 121
                    </td>
                    <td className="w-200 h-22 text-base font-inter leading-22 tracking-wider text-left text-black pl-10 pr-16">
                      DNA / RNA Sequence
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                      Biochemistry
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                      Campus E-center
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-8 pr-22 text-gray-400">
                      Unavailable
                    </td>
                  </tr>
                  <tr className="flex items-center justify-between pl-[40px] p-[10px] border-2 whitespace-nowrap mt-3">
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-16">
                      CHM 212
                    </td>
                    <td className="w-200 h-22 text-base font-inter leading-22 tracking-wider text-left text-black pl-6 pr-16">
                      Organic Chemistry
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                      Biochemistry
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                      Campus E-center
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-8 pr-22 text-gray-400">
                      Unavailable
                    </td>
                  </tr>
                  <tr className="flex items-center justify-between pl-[40px] p-[10px] border-2 whitespace-nowrap mt-3">
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-16">
                      BCH 233
                    </td>
                    <td className="w-200 h-22 text-base font-inter leading-22 tracking-wider text-left text-black pl-2 pr-16">
                      Pharmacology
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                      Biochemistry
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                      Campus E-center
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-8 pr-22 text-gray-400">
                      Unavailable
                    </td>
                  </tr>
                  <tr className="flex items-center justify-between pl-[40px] p-[10px] border-2 whitespace-nowrap mt-3">
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-16">
                      BCH 205
                    </td>
                    <td className="w-200 h-22 text-base font-inter leading-22 tracking-wider text-left text-black pl-6 pr-16">
                      Cytochromes Reactivity
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-32">
                      Biochemistry
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pl-6 pr-20">
                      Campus E-center
                    </td>
                    <td className="w-103 h-22 font-inter text-16 font-normal leading-22 tracking-0.15 text-left text-black pr-8 pr-22 text-red-600">
                      Expired
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default EnrolledCourses;
