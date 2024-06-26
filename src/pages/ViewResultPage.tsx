import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/StudentSidebar";
import QuestionWithOptions from "../components/QuestionWithOptions";
import { Link } from "react-router-dom";


interface Props {
  darkMode?: any;
  leftIcon?: any;
  rightIcon?: any;

}

export const ViewResultPage = (Props:Props) => {
  const student:any = localStorage.getItem("student");
  const studentDetails = JSON.parse(student);
  const [clickedNumber, setClickedNumber] = useState(0);

  const handleClick = (number:number) => {
    setClickedNumber(number);
  };
  const [filters, setFilters] = useState({
    semester: "First",
    session: "2023/2024",
    level: studentDetails.dataValues.level,
    department_id: studentDetails.dataValues.department_id,
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar name={studentDetails.dataValues.first_name} />
        <div className="p-4 h-full ml-[200px] mt-[70px] bg-blue-50 bg-opacity-50">
          <div className="w-252 h-45 top-112 left-333 gap-8 flex justify-between">
            <h2 className="font-bold flex items-center ml-28 mt-4 text-3xl text-[#0000000]">
              Results /{" "}
              <span className="ml-4 font-bold text-[#2D00F7]">BCH 208</span>
            </h2>
          </div>
          <div className="w-957 h-1663 top-183 left-358 pt-3 pr-14 pl-5 relative">
            <div className="relative w-957 h-auto top-3 py-12 px-16 gap-16 bg-[#2D00F7] ml-28 -mb-12 pb-1 mr-4">
              <div className="w-873 h-72 flex gap-24">
                <table className="w-873">
                  <tbody>
                    <tr className="h-72 flex flex-wrap gap-24 pt-12">
                      <td className="p-2 pr-32 pb-16 pl-10 flex flex-col items-center p-4">
                        <div className="w-fill h-hug p-3 gap-2 text-white pl-1 -ml-40 -mt-28 -mb-1">
                          Session
                        </div>
                        <div className="flex items-center mt-16">
                          <div className="w-48 h-12 -mt-24 p-5 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -ml-14 flex items-center text-black text-lg font-light -mr-3 pr-8">
                            <span>2023/2024</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 pr-32 pb-16 pl-10 -ml-40 flex flex-col items-center p-4">
                        <div className="w-fill h-hug p-3 gap-2 text-white -ml-40 pl-1 -mt-28 -mb-1">
                          Semester
                        </div>
                        <div className="flex items-center mt-16">
                          <div className="w-48 h-12 -mt-24 p-5 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -mt-1 -ml-14 flex items-center text-black text-lg font-light -mr-1">
                            <span>Second</span>
                          </div>
                        </div>
                      </td>
                      <td className="w-200 p-2 pr-32 pb-16 pl-10 -ml-40 flex flex-col items-center p-4">
                        <div className="w-fill h-hug p-3 gap-2 text-white -ml-40 pl-1 -mt-28 mr-12 -mb-1">
                          Faculty
                        </div>
                        <div className="flex items-center mt-16">
                          <div className="w-48 h-12 -mt-24 p-5 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -mt-1 -ml-14 flex items-center text-black text-lg font-light mr-6">
                            <span>Science</span>
                          </div>
                        </div>
                      </td>
                      <td className="-ml-40 flex flex-col items-start">
                        <div className="w-fill h-hug p-3 gap-2 text-white pl-28 -ml-40 -mt-24 mb-3">
                          Department
                        </div>
                        <div className="flex items-center mt-16">
                          <div className="w-48 h-12 -mt-32 p-5 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -mt-1 -ml-14 flex items-center text-black text-lg font-light">
                            <span>Biochemistry</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-72 flex flex-wrap gap-24 -mt-40 pt-10">
                      <td className="p-2 pr-32 pb-16 pl-10 flex flex-col items-center p-4">
                        <div className="w-fill h-hug p-3 gap-2 text-white pl-1 -ml-32 -mt-36 -mb-1">
                          Course Title
                        </div>
                        <div className="flex items-center mt-16">
                          <div className="w-48 h-12 -mt-24 p-5 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -ml-14 flex items-center text-black text-lg font-light -mr-3 pr-8">
                            <span>BCH 208</span>
                          </div>
                        </div>
                      </td>

                      <td className="p-2 pr-32 pb-16 pl-10 -ml-40 flex flex-col items-center p-4">
                        <div className="w-fill h-hug p-3 gap-2 text-white -ml-36 pl-1 -mt-36 -mb-1">
                          Course Title
                        </div>
                        <div className="flex items-center mt-16">
                          <div className="w-48 h-12 -mt-24 p-5 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -mt-1 -ml-14 flex items-center text-black text-lg font-light -mr-1">
                            <span>Enzymology</span>
                          </div>
                        </div>
                      </td>

                      <td className="w-200 p-2 pr-32 pb-16 pl-10 -ml-40 flex flex-col items-center p-4">
                        <div className="w-fill h-hug p-3 gap-2 text-white -ml-32 pl-1 -mt-36 mr-12 -mb-1">
                          Total Score
                        </div>
                        <div className="flex items-center mt-16">
                          <div className="w-48 h-12 -mt-24 p-5 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -mt-1 -ml-14 flex items-center text-black text-lg font-light mr-6">
                            <span>70</span>
                          </div>
                        </div>
                      </td>

                      <td className="-ml-40 flex flex-col items-start">
                        <div className="w-fill h-hug p-7 gap-2 text-white pl-28 -ml-40 -mt-36 mb-2 -mb-1">
                          Time allowed
                        </div>
                        <div className="flex items-center mt-16">
                          <div className="w-48 h-12 -mt-32 p-5 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -mt-1 -ml-14 flex items-center text-black text-lg font-light">
                            <span>120 Minutes</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="w-872 h-28 flex flex-wrap gap-24 -mt-48 mb-1 pt-8">
                      <td className="p-2 pr-32 pb-16 pl-10 flex flex-col items-start p-4">
                        <div className="w-fill h-hug p-3 gap-2 text-white -ml-14 pr-96 pl-1 -mt-36 -mb-1">
                          Instructions
                        </div>
                      </td>
                    </tr>
                    <div className="w-78 h-12 -mt-44 p-5 gap-8 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -ml-4 flex items-center text-black text-md font-light -pr-2">
                      <span>
                        1. There are 2 sections. Answer all questions in section
                        A and any 5 questions in section B
                      </span>
                    </div>
                    <div className="w-78 h-12 mt-1 p-5 gap-8 border border-gray-400 rounded bg-gray-300 bg-opacity-100 -ml-4 flex items-center text-black text-md font-light -mr- -pr-2">
                      <span>
                        2. Time allowed is 2 hours, after which the session ends
                        and your exam is automatically submitted.
                      </span>
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-957 h-1663 top-183 left-358 pt-3 pr-14 pl-5 relative -mt-8">
              <div className="relative w-957 h-auto top-12 left-3 py-1 px-6 gap-16 bg-white ml-20 -pl-4 -mr-7">
                <div className="w-873 h-72 flex gap-24 items-center -mt-24">
                  <span className="w-195 h-34 text-lg font-Inter font-bold text-start leading-6 tracking-wide text-black pl-2 -mt-4 -mr-48">
                    ID: 20/21/03/051
                  </span>
                  <div className="flex flex-grow items-center justify-end">
                    <div className="font-inter text-lg font-extrabold top-1/2 mt-3 pr-7 transform -translate-x-1/2 -translate-y-1/2">
                      Total Score
                    </div>
                    <div className="w-15 h-15 p-6 rounded-full bg-green-600 -mt-4 -ml-20 flex flex-col items-center relative">
                      <div className="text-white text-2xl font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        68
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[969px] h-[1222px] px-64 gap-24">
                  <div className="w-[841px] h-[1143px] gap-32">
                    <div className="w-[334px] h-[99px] gap-4">
                      <div className="w-[334px] h-[71px] gap-4 relative">
                        <div className="w-[334px] h-[34px] gap-4 flex items-center pl-16 -mt-20 border-b border-6 border-gray-200">
                          <span style={{ width: "684px" }}>
                            <span className="font-inter font-extrabold text-lg leading-10 tracking-normal text-center text-black">
                              Section A
                            </span>{" "}
                            <span className="font-inter text-sm leading-10 tracking-normal text-center text-gray-800">
                              (Multiple choice questions)
                            </span>
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-684 font-inter text-md leading-6 tracking-tight text-center text-gray-800 pl-40 mt-2">
                            40 Marks
                          </div>
                        </div>
                        <div className="flex items-center mt-2 pl-40">
                          <div className="font-inter text-base leading-6 tracking-tight text-left text-lg -ml-6 pr-2">
                            Section Score
                          </div>
                          <div className="w-9 h-9 rounded-full bg-red-700 text-white flex items-center justify-center">
                            <span className="text-white items-center justify-center">
                              38
                            </span>
                          </div>
                        </div>
                        <div>
                          <QuestionWithOptions
                            question="What does CE stand for?"
                            options={[
                              "Option 1",
                              "Option 2",
                              "Option 3",
                              "Option 4",
                            ]}
                          />
                          <QuestionWithOptions
                            question="The Following are properties of a chemical catalyst, except?"
                            options={[
                              "Option A",
                              "Option B",
                              "Option C",
                              "Option D",
                            ]}
                          />
                          <QuestionWithOptions
                            question="The Following are properties of a chemical catalyst, except?"
                            options={[
                              "Option A",
                              "Option B",
                              "Option C",
                              "Option D",
                            ]}
                          />
                          <QuestionWithOptions
                            question="The Following are properties of a chemical catalyst, except?"
                            options={[
                              "Option A",
                              "Option B",
                              "Option C",
                              "Option D",
                            ]}
                          />
                          <QuestionWithOptions
                            question="The Following are properties of a chemical catalyst, except?"
                            options={[
                              "Option A",
                              "Option B",
                              "Option C",
                              "Option D",
                            ]}
                          />
                          <QuestionWithOptions
                            question="The Following are properties of a chemical catalyst, except?"
                            options={[
                              "Option A",
                              "Option B",
                              "Option C",
                              "Option D",
                            ]}
                          />
                          <QuestionWithOptions
                            question="The Following are properties of a chemical catalyst, except?"
                            options={[
                              "Option A",
                              "Option B",
                              "Option C",
                              "Option D",
                            ]}
                          />
                          <QuestionWithOptions
                            question="The Following are properties of a chemical catalyst, except?"
                            options={[
                              "Option A",
                              "Option B",
                              "Option C",
                              "Option D",
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      padding:
                        "5px 4.166665554046631px 5px 4.166666507720947px",
                    }}
                  ></div>
                  <div className="width-hug height-hug gap-16 -mt-12 -ml-10">
                    <div className="flex gap-8">
                      <button
                        className={`flex items-center justify-center w-20 h-20 mr-3 relative ${
                          Props.darkMode ? "bg-gray-900 text-white" : "text-gray-500"
                        }`}
                      >
                        {Props.leftIcon && (
                          <img
                            src={Props.leftIcon}
                            alt="Left Icon"
                            className="w-5 h-5 mr-2 absolute left-2 top-2"
                          />
                        )}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 mr-2 absolute left-0 top-1 -ml-14"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                        <span className="mr-2 -mt-14">Previous </span>{" "}
                        <span className=" -mt-14">Section</span>
                      </button>
                      {[1, 2, 3, 4, 5, 6].map((number) => (
                        <div
                          key={number}
                          className={`w-[24px] h-[28px] p-3 gap-10 rounded-[8px] ${
                            clickedNumber === number
                              ? "bg-blue-700"
                              : "bg-gray-300 bg-opacity-50"
                          } -mr-3`}
                        >
                          <div className="flex items-center">
                            <Link
                              to={`ViewResultPage${number}`}
                              className="flex items-center gap-8"
                              onClick={() => handleClick(number)}
                            >
                              <span
                                className={`font-bold ${
                                  clickedNumber === number
                                    ? "text-white"
                                    : "text-gray-500"
                                } -mt-4 -ml-1`}
                              >
                                {number}
                              </span>
                              <div className="w-[8px] h-[20px]"></div>
                            </Link>
                          </div>
                        </div>
                      ))}
                      <div className="width-hug height-hug gap-16 -mt-16 -ml-20">
                        <div className="flex gap-8">
                          <a
                            href="ViewResultPage2"
                            className="flex items-start justify-center w-20 h-20 mr-3 relative"
                          >
                            <a
                              href="/ResultPage2"
                              className="flex items-center"
                            >
                              <button
                                className={`flex items-start justify-center w-20 h-20 mr-3 relative ${
                                  Props.darkMode
                                    ? "bg-gray-900 text-white"
                                    : "text-blue-700"
                                }`}
                              >
                                {Props.leftIcon && (
                                  <img
                                    src={Props.leftIcon}
                                    alt="Left Icon"
                                    className="w-5 h-5 mr-2 absolute left-2 top-2"
                                  />
                                )}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 h-5 mr-2 absolute left-0 top-16 mt-1 ml-52 transform rotate-180"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                  />
                                </svg>
                                <div className="w-108 h-20 flex items-center ml-48 mt-9">
                                  <span className="mr-2">Next</span>
                                  <span>Section</span>
                                </div>
                              </button>
                            </a>
                          </a>
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
    </div>
  );
};
