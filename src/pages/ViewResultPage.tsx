import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/StudentSidebar";
import SignInImage from "../../public/SigninImage.png";


export const ViewResultPage = () => {
   
    const student: any = localStorage.getItem("student");
  const studentDetails: StudentDetails = JSON.parse(student);
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
          <div className="w-958 h-45 top-112 left-333 flex justify-between">
            <h2 className="w-119 h-45 font-Inter font-bold text-3xl leading-9 tracking-wide ml-28 mt-5 text-left text-black">
              Results
            </h2>
        </div>
        </div>
        </div>
        </div>
    )



    )
}
