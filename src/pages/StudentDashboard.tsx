import Button from "../components/Button";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

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
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="false"
              />
              Session: 2022/2023
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
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
                    <tr className="flex gap-[230px] whitespace-nowrap mt-9">
                      <td>BCH 208</td>
                      <td>Enzymology</td>
                      <td>5 Units</td>
                      <Button
                        title={"Enroll"}
                        text={"purple-50"}
                        bg={"purple-50"}
                        type={""}
                      />
                    </tr>
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
