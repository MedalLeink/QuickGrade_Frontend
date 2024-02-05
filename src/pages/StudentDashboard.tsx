import React from "react";
import Button from "../components/Button";



const data1 = [
  {
    code: "CE 522",
    department: "Chemical Engineering",
    timeDate: "10 Aug 2023 / 2:10PM",
    venue: "Campus E-center",
    registered: 211,
  },
];

function StudentDashboard() {
  return (
    <div className="pl-[100px] ">
      {/* The middle section */}
      <div className=" w-[1000px] mt-[90px] ml-[120px]">
        {/* The Dashboard */}
        <div className="w-[173px] h-[45px] leading-[44.8px]">
          <p className="font-inter font-bold text-lg font-[700] ">Dashboard</p>
        </div>
        {/* The Lecturer */}
        <div className="border-1 rounded-[16px] bg-purple-50 mr-[156px] text-white">
          <p className="p-9 text-lg font-bold ">
            Lecturer (Dr.), Department of Chemistry.
            <br /> Faculty of Science.
            <br /> Camouflage University.
            <br />
            Atlanta, Nigeria.
          </p>
        </div>
        {/* the 2022/2023 section*/}
        <div>
          {/* 2022/2023 */}
          <div className="pt-9">
            <p className="text-gray-500 font-bold font-custom border-b-2 border-gray-300 my-4 w-1/4">
              2022/2023:Second Semester
            </p>
            {/* Course Examination */}
            <div className="">
              <p className="mt-9 font-inter text-gray-800">
                Course Examinations Timetable
              </p>
              <div>
                <table className="">
                  <thead>
                    <tr>
                      <th className="pl-[25px] pr-[55px] whitespace-nowrap">
                        Course Code
                      </th>
                      <th className="p-[55px]">Department</th>
                      <th className="p-[55px]">Date/Time</th>
                      <th className="p-[55px]">Venue</th>
                      <th className="p-[55px]">Registered</th>
                      <th className="p-[55px]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="justify-space between">
                    <div>
                      {data1.map((item: any) => (
                        <tr>
                          <td>{item.code}</td>
                          <td>{item.department}</td>
                          <td>{item.timeDate}</td>
                          <td>{item.venue}</td>
                          <td>{item.registered}</td>
                        </tr>
                      ))}
                      <Button
                        title={"Set Exam"}
                        text={"purple-50"}
                        bg={"purple-50"}
                        type={""}
                       />
                    </div>

                    {/* <tr  className="border-4 border-gray-400 w-full mb-8">
                      <td className="pl-[25px] pr-[15px]">CE 522</td>
                      <td className="p-[5px] whitespace-nowrap">
                        Chemical Engineering
                      </td>
                      <td className="pl-[35px] p-[15px]">
                        10 Aug 2023/
                        <br /> 2:10PM
                      </td>
                      <td className="p-[15px]">Campus E-centre</td>
                      <td className="pl-[90px]">211</td>
                      <td className="pl-[45px]">
                        <button className="border border-purple-50 text-purple-50 px-2 py-2 rounded-full hover:bg-purple-50 hover:text-white transition-all duration-300" onClick={()=>console.log("Clicked")}>
                          Set Exam
                        </button>
                      </td>
                    </tr>
                     
                    <tr className="border-4 border-gray-400 gap-4">
                      <td className="pl-[25px] pr-[15px]">CE 522</td>
                      <td className="p-[5px] whitespace-nowrap">
                        Chemical Engineering
                      </td>
                      <td className="pl-[35px] p-[15px]">
                        10 Aug 2023/
                        <br /> 2:10PM
                      </td>
                      <td className="p-[15px]">Campus E-centre</td>
                      <td className="pl-[90px]">211</td>
                      <td className="pl-[45px]">
                        <button className="border border-purple-50 text-purple-50 px-2 py-2 rounded-full hover:bg-purple-50 hover:text-white transition-all duration-300" onClick={()=>console.log("Clicked")}>
                          Set Exam
                        </button>
                      </td>
                    </tr>
                    <tr className="border-4 border-gray-400 rounded mt-4">
                      <td className="pl-[25px] pr-[15px]">CE 522</td>
                      <td className="p-[5px] whitespace-nowrap">
                        Chemical Engineering
                      </td>
                      <td className="pl-[35px] p-[15px]">
                        10 Aug 2023/
                        <br /> 2:10PM
                      </td>
                      <td className="p-[15px]">Campus E-centre</td>
                      <td className="pl-[90px]">211</td>
                      <td className="pl-[45px]">
                        <button className="border border-purple-50 text-purple-50 px-2 py-2 rounded-full hover:bg-purple-50 hover:text-white transition-all duration-300" onClick={()=>console.log("Clicked")}>
                          Set Exam
                        </button>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* j */}
      </div>
    </div>
  );
}

export default StudentDashboard;
