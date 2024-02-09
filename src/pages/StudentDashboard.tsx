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
          <div className="border-9 rounded-[16px] h-[150px] w-[1100px] bg-purple-50 mr-[156px] text-white flex justify-around items-center">
            <div>
              <p className="ml-[50px] text-lg font-bold">22/23/08/019</p>
            </div>
            <div>
              <p className="text-lg font-bold">
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
              <div className="flex">
                <div className="text-gray-500 font-bold font-custom my-4 w-1/4 whitespace-nowrap">
                  Semester: Second
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="false"
                  />
                </div>
                <div className="text-gray-500 w-[50%] font-bold font-custom my-4 w-1/4 whitespace-nowrap">
                  <p>
                    Session: 2022/2023{" "}
                    <ChevronDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </div>

              <div>
                <table className="">
                    <thead>
                      <tr className="flex justify-between gap-[200px]">
                        <th className="">Course Code </th>
                        <th>Course Title</th>
                        <th>Credit Unit</th>
                        <th></th>
                      </tr>
                    </thead>
                  <tbody>
                      <tr className="flex items-center justify-between pl-[40px] p-[10px] border-2 whitespace-nowrap mt-5">
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
