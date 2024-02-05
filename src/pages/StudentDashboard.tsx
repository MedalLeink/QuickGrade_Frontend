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
                  <div className="mt-9">
                    <thead>
                      <tr className="flex gap-[120px]">
                        <th className="whitespace-nowrap">Course Code </th>
                        <th>Department</th>
                        <th>Date/Time</th>
                        <th>Venue</th>
                        <th>Registered</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                 </div>
                  <tbody>
                    <div className="mt-9 border-4 border-gray-400 w-full mb-8">
                      {data1.map((item: any) => (
                        <tr className="flex gap-[90px]">
                          <td>{item.code}</td>
                          <td>{item.department}</td>
                          <td>{item.timeDate}</td>
                          <td>{item.venue}</td>
                          <td>{item.registered}</td>
                          <Button
                            title={"Set Exam"}
                            text={"purple-50"}
                            bg={"purple-50"}
                            type={""}
                          />
                        </tr>
                      ))}
                    </div>

                    <div className="mt-9 border-4 border-gray-400 w-full mb-8">
                      {data1.map((item: any) => (
                        <tr className="flex gap-[90px]">
                          <td>{item.code}</td>
                          <td>{item.department}</td>
                          <td>{item.timeDate}</td>
                          <td>{item.venue}</td>
                          <td>{item.registered}</td>
                          <Button
                            title={"Set Exam"}
                            text={"purple-50"}
                            bg={"purple-50"}
                            type={""}
                          />
                        </tr>
                      ))}
                    </div>
                    <div className="mt-9 border-4 border-gray-400 w-full mb-8">
                      {data1.map((item: any) => (
                        <tr className="flex gap-[90px]">
                          <td>{item.code}</td>
                          <td>{item.department}</td>
                          <td>{item.timeDate}</td>
                          <td>{item.venue}</td>
                          <td>{item.registered}</td>
                          <Button
                            title={"Set Exam"}
                            text={"purple-50"}
                            bg={"purple-50"}
                            type={""}
                          />
                        </tr>
                      ))}
                    </div>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
