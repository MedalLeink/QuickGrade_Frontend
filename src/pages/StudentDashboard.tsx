import React from "react";
import Button from "../components/Button";
import { Dropdown } from "primereact/dropdown";

interface TableProps {
  code: string;
  title: string;
  unit: string;
}

const data1: TableProps[] = [
  { code: "BCH 208", title: "Enzymology", unit: "5 Units" },
  { code: "BCH 201", title: "Nutrition and Diet", unit: "4 Units" },
  { code: "BCH 212", title: "Blood and Body Fluids", unit: "2 Units" },
  { code: "BCH 121", title: "DNA/RNA Sequence", unit: "4 Units" },
  { code: "Chem 212", title: "Organic Chemistry", unit: "2 Units" },
  { code: "BCH 233", title: "Pharmacology", unit: "4 Units" },
  { code: "BCH 205", title: "Cytochromes Reactivity", unit: "2 Units" },
  { code: "BCH 205", title: "Cytochromes Reactivity", unit: "2 Units" },
  // Add more data as needed
];

function StudentDashboard() {
  return (
    <div className="pl-[150px] ">
      {/* The middle section */}
      <div className=" w-[1000px] mt-[90px] ml-[120px]">
        {/* The Dashboard */}
        <div className="w-[173px] h-[45px] leading-[44.8px]">
          <p className="font-inter font-bold text-lg font-[700] ">Dashboard</p>
        </div>
        {/* Department */}
        <div className="border-9 rounded-[16px] w-[1100px] bg-purple-50 mr-[156px] text-white">
          <p className="ml-[200px] text-lg font-bold">22/23/08/019"</p>
          <p className="pl-[600px] text-lg font-bold">
            Department of Biochemistry.
            <br /> Faculty of Science.
            <br />
            Camouflage university.
            <br />
            Atlanta, Nigeria.
          </p>
        </div>
        {/* the 2022/2023 section*/}
        <div>
          {/* 2022/2023 */}
          <div className="pt-9">
            <p className="text-gray-500 font-bold font-custom border-b-2 border-gray-300 my-4 w-1/4 whitespace-nowrap">
              Semester: Second
              <Dropdown />
              Session: 2022/2023
              <Dropdown />
            </p>

            <div>
              <table className="">
                <div className="mt-9">
                  <thead>
                    <tr className="flex gap-[200px]">
                      <th className="">Course Code </th>
                      <th>Course Title</th>
                      <th>Credit Unit</th>
                    </tr>
                  </thead>
                </div>
                <tbody>
                  <div className="mt-9 ">
                    {data1.map((item: any) => (
                      <tr className="flex gap-[200px] border-2 border-gray-400 whitespace-nowrap mt-9">
                        <td>{item.code}</td>
                        <td>{item.title}</td>
                        <td>{item.unit}</td>
                        <Button
                          title={"Enroll"}
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
  );
}

export default StudentDashboard;
