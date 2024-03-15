import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/StudentSidebar";
import SessionCalendar from "../components/SessionCalendar";
import { Link, NavLink } from "react-router-dom";
import ViewResult from "../pages/ViewResultPage";

interface StudentDetails {
  dataValues: {
    first_name: string;
    level: string;
    department_id: string;
  };
}

export const ResultScreen = () => {
  const student: any = localStorage.getItem("student");
  const studentDetails: StudentDetails = JSON.parse(student);
  const [filters, setFilters] = useState({
    semester: "First",
    session: "2023/2024",
    level: studentDetails.dataValues.level,
    department_id: studentDetails.dataValues.department_id,
  });

  const inputStyle: React.CSSProperties = {
    width: "320px",
    height: "48px",
    position: "absolute",
    top: "181px",
    left: "333px",
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar name={studentDetails.dataValues.first_name} />
        <div className="p-4 h-full ml-[200px] mt-[70px] bg-blue-50 bg-opacity-50">
          <div className="w-958 h-45 top-112 left-333 flex justify-between">
            <h2 className="w-119 h-45 font-Inter font-bold text-3xl leading-9 tracking-wide ml-28 mt-5 text-left text-black">
              Results
            </h2>
            <div className="w-590 mt-8 gap-24 flex text-black">
              <span className="w-18 mr-20 h-22 text-bold font-Inter font-bold text-center leading-6 tracking-wide text-center text-black pr-30">
                Semester: First
              </span>
              <div className="w-216 h-44 -mt-4 font-bold text-24 p-2 font-inter leading-34 tracking-0 text-left bg-blue-10 bg-opacity-10 ml-8 text-black pr-40">
                <SessionCalendar />

                <div>
                  <input
                    type="text"
                    placeholder="🔍 Search by course code"
                    aria-label="Search"
                    aria-required={false}
                    style={inputStyle}
                    className="dark-mode:bg-gray-800 dark-mode:text-white p-2 border border-gray-300 rounded-md pr-18 mr-40 -mt-3 -ml-1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc((100% - 64px) / 3)] bg-white ml-28 rounded-2xl">
            <div className="-p-16 -pr-32 -pb-16 -pl-32 flex flex-col items-center p-4 -ml-28">
              <div className="flex justify-between w-full -mt-20 mr-20 ml-20 pl-28 pt-20">
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 208
                    </div>
                    <div className="flex items-center mt-4">
                    <NavLink
                        to="/ViewResultPage"
                        className="w-20 h-20 p-6 rounded-full bg-green-600 bg-opacity-80 -mt-1 -ml-16 flex items-center justify-center text-white text-4xl font-bold ml-0"
                        activeClassName="bg-white text-blue-500"
                      >
                        <span>62</span>
                        </NavLink>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                    {/* <div className="flex flex-col -mt-12 -ml-12 w-160">
                      <div
                        className="font-inter text-lg font-extrabold font-bold leading-22 tracking-[0.15px] text-left"
                        style={{ width: "81px", height: "22px" }}
                      >
                        Section A: <span className="text-gray-600">38/40</span>
                      </div>
                      <div className="font-inter text-lg font-extrabold mt-2">
                        Section B: <span className="text-gray-700">24/30</span>
                      </div>
                      <div className="flex items-center font-inter text-base font-bold leading-22 tracking-[0.15px] text-[#004FFF] mt-4 ml-8">
                        View Script
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-blue-500 ml-2"
                        >
                          <path
                            d="M1.8335 1.83331L10.1668 10.1666M10.1668 10.1666V1.83331M10.1668 10.1666H1.8335"
                            stroke="#004FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl ml-3">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 108
                    </div>
                    <div className="flex items-center mt-4">
                      <Link to="/ViewResultPage">
                        <div className="w-20 h-20 p-6 rounded-full bg-green-600 bg-opacity-80 -mt-1 -ml-16">
                          <div className="flex items-center justify-center w-full h-full text-white text-4xl font-bold ml-0">
                            57
                          </div>
                        </div>
                      </Link>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl ml-3">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 233
                    </div>
                    <div className="flex items-center mt-4">
                    <Link to="/ViewResultPage">
      <div className="w-20 h-20 p-6 rounded-full bg-green-600 bg-opacity-80 -mt-1 -ml-16">
        <div className="flex items-center justify-center w-full h-full text-white text-4xl font-bold ml-0">
          68
        </div>
      </div>
    </Link>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc((100% - 64px) / 3)] bg-white ml-28 rounded-2xl -mt-4">
            <div className="-p-16 -pr-32 -pb-16 -pl-32 flex flex-col items-center p-4 -ml-28">
              <div className="flex justify-between w-full -mt-20 mr-20 ml-20 pl-28 pt-20">
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 225
                    </div>
                    <div className="flex items-center mt-4">
                    <Link to="/ViewResultPage">
      <div className="w-20 h-20 p-6 rounded-full bg-green-600 bg-opacity-80 -mt-1 -ml-16">
        <div className="flex items-center justify-center w-full h-full text-white text-4xl font-bold ml-0">
          68
        </div>
      </div>
    </Link>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl ml-3">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 223
                    </div>
                    <div className="flex items-center mt-4">
                    <Link to="/ViewResultPage">
      <div className="w-20 h-20 p-6 rounded-full bg-green-600 bg-opacity-80 -mt-1 -ml-16">
        <div className="flex items-center justify-center w-full h-full text-white text-4xl font-bold ml-0">
          46
        </div>
      </div>
    </Link>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl ml-3 mt-4 mb-2">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 203
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-20 h-20 p-6 rounded-full bg-gray-600 bg-opacity-10 -mt-1 -ml-16">
                        <div className="flex items-center justify-center w-full h-full text-white text-16 font-bold ml-0 ">
                          No Result
                        </div>
                      </div>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc((100% - 64px) / 3)] bg-white ml-28 rounded-2xl -mt-4 mb-1">
            <div className="-p-16 -pr-32 -pb-16 -pl-32 flex flex-col items-center p-5 -ml-32 -mt-8">
              <div className="flex justify-between w-full -mt-20 mr-20 ml-20 pl-28 pt-20 -mb-3">
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl ml-3 mt-4 mb-2">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 214
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-20 h-20 p-6 rounded-full bg-gray-600 bg-opacity-10 -mt-1 -ml-16">
                        <div className="flex items-center justify-center w-full h-full text-white text-16 font-bold ml-0 ">
                          No Result
                        </div>
                      </div>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl ml-3 mt-4 mb-2">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 222
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-20 h-20 p-6 rounded-full bg-gray-600 bg-opacity-10 -mt-1 -ml-16">
                        <div className="flex items-center justify-center w-full h-full text-white text-16 font-bold ml-0 ">
                          No Result
                        </div>
                      </div>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 bg-gray-400 bg-opacity-30 rounded-2xl ml-3 mt-4 mb-2">
                  <div className="p-2 pr-32 pb-16 -pl-32 flex flex-col items-center p-4">
                    <div className="font-inter text-2xl font-extrabold text-[#2D00F7] -ml-16">
                      BCH 217
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-20 h-20 p-6 rounded-full bg-gray-600 bg-opacity-10 -mt-1 -ml-16">
                        <div className="flex items-center justify-center w-full h-full text-white text-16 font-bold ml-0 ">
                          No Result
                        </div>
                      </div>
                      <div className="-ml-20 font-inter text-lg font-extrabold mt-3 -mb-24">
                        Total Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
