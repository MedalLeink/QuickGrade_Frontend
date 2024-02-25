import { NavLink } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GiStairs } from "react-icons/gi";
// import { useState } from "react";

function Sidebar() {
    return (
        <div className="w-[237px] h-screen bg-[#3746F5] flex justify-center">
            <div className="w-[80%] pt-4">
                <div className="flex justify-around">
                    <div className="p-3 bg-white text-blue-600 rounded-full"><FaLock /></div>
                    <div className="text-white text-[24px] font-inter font-medium">Quickgrade</div>
                </div>
                <div className="my-5 h-[2px] bg-black"></div>
                <button className="font-inter text-white text-[20px]">
                    <NavLink to={""}>Overview</NavLink>
                </button>
                {/* <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="py-2"><RxDashboard className="rounded text-white "/></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <NavLink 
                                to={"/StudentDashboard"}
                                style={({ isActive }) => {
                                    return {
                                        // fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "white" : "blue",
                                        color: isActive ? "blue" : "white"
                                        // color: isPending ? "red" : "black",
                                        // viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }}
                            >
                                Dashboard
                            </NavLink>
                        </button>
                    </div>
                </div> */}
                {/* <div className="pl-5 pt-8 flex gap-2"> */}
                <NavLink to="/StudentDashboard" className="pl-5 pt-8 flex gap-2" style={({ isActive }) => { return { backgroundColor: isActive ? "white" : "blue", color: isActive ? "blue" : "white"};}}>
                    {/* {({ isActive }) => ( */}
                        <span className="py-2"><RxDashboard className="rounded"></RxDashboard></span>
                        <span className="text-[20px] font-extralight">Dashboard</span>
                    {/* )} */}
                </NavLink>
                {/* </div> */}
                {/* <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="py-2"><FaBookOpen className="p-0.5 rounded text-white bg-[#8265F7]"/></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <NavLink to={"/EnrolledCourses"}>Enrolled courses</NavLink>
                        </button>
                    </div>
                </div> */}
                <NavLink to="/EnrolledCourses" className="pl-5 pt-8 flex gap-2" style={({ isActive }) => { return { backgroundColor: isActive ? "white" : "blue", color: isActive ? "blue" : "white"};}}>
                    {/* {({ isActive }) => ( */}
                        <span className="py-2"><FaBookOpen className="p-0.5 rounded text-white bg-[#8265F7]"/></span>
                        <span className="text-[20px] font-extralight">Enrolled Courses</span>
                    {/* )} */}
                </NavLink>
                <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="py-2"><GiStairs className="p-0.5 rounded text-white bg-[#8265F7]"/></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <NavLink to={""}>Results</NavLink>
                        </button>
                    </div>
                </div>
                <button className="font-inter pt-8 text-white text-[20px]">
                    <NavLink to={""}>Others</NavLink>
                </button>
                <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="py-2"><IoIosSettings className="text-white"/></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <NavLink to={""}>Settings</NavLink>
                        </button>
                    </div>
                </div>
                <div className="pl-5 pt-8">
                    <div className="flex gap-2">
                        <div className="py-2"><RiLogoutCircleRLine className="text-white"/></div>
                        <button className="font-inter text-white text-[20px] font-extralight">
                            <NavLink to={""}>Logout</NavLink>
                        </button>
                    </div>
                </div>
            </div>
            <button className="font-inter text-white text-[20px] font-extralight">
              <Link to={""}>Logout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
