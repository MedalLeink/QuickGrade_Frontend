import Button from "../components/Button";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function StudentDashboard() {
  return (
    <div>
      <div className="fixed left-0">
        <Sidebar />
      </div>
      <Navbar name={"Benn"} />
      <div className="ml-40">
        {/* The middle section */}
        <div className=" w-[1000px] mt-[50px] ml-[120px]">
          {/* The Dashboard */}
          <div className="w-[173px] h-[45px] leading-[44.8px]">
            <p className="font-inter font-bold text-lg font-[700] text-[32px]">
              Dashboard
            </p>
          </div>
          {/* Department */}
          <div className="border-9 rounded-[16px] h-[150px] w-[1100px] bg-[#3746F5] mr-[156px] text-white flex justify-around items-center">
            <div>
              <p className="ml-[50px] text-lg font-inter font-bold">22/23/08/019</p>
            </div>
            <div>
              <p className="text-lg font-inter font-bold">
                Department of Biochemistry.
                <br /> Faculty of Science.
                <br />
                Camouflage university.
                <br />
                Atlanta, Nigeria.
              </p>
            </div>
          </div>
          {/* the 2022/2023 section*/}
          <div>
            {/* 2022/2023 */}
            <div className="pt-9">
              <div className="flex justify-between">
                <div className="font-inter text-gray-500 font-bold font-custom my-4 whitespace-nowrap">
                  Semester: Second
                </div>
                <div className="text-gray-500 font-bold font-custom my-4 whitespace-nowrap">
                  <p className="flex font-inter">
                    Session: 2022/2023{" "}
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </p>
                </div>
                <div className="text-gray-500 font-bold font-custom my-4 whitespace-nowrap">
                  <p className="flex font-inter">
                    Total Units: 18
                  </p>
                </div>
                <div className="text-gray-500 font-bold font-custom my-4 w-1/4 whitespace-nowrap">
                  <p className="flex">
                    Total Units Used: 5
                  </p>
                </div>
              </div>

              <div className="">
                <table className="w-[100%]">
                  <thead className="">
                    <tr className="">
                      <th className="text-start text-lg px-6 py-3">Course Code </th>
                      <th className="text-start text-lg px-6 py-3">Course Title</th>
                      <th className="text-start text-lg px-6 py-3">Credit Unit</th>
                      <th className="text-start text-lg px-6 py-3">Department</th>
                      {/* <th className="text-start text-lg px-6 py-3">Action</th> */}
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="border-2">
                      <td className="text-lg px-6 py-3">BCH 208</td>
                      <td className="text-lg px-6 py-3">Enzymology</td>
                      <td className="text-lg px-6 py-3">5 Units</td>
                      <td className="text-lg px-6 py-3">Mathematics</td>
                      <div className="h-16 flex items-center justify-center">
                        <Button
                          title={"Enroll"}
                          text={"white"}
                          bg={"blue"}
                        />
                      </div>
                    </tr>
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
