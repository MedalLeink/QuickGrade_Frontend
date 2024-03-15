import { Link, NavLink } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GiStairs } from "react-icons/gi";
import { showErrorToast, showSuccessToast } from "../utilities/toastifySetup";
// import { useState } from "react";

function StudentSidebar() {
  const student: any = localStorage.getItem("student");

  const studentDetails = JSON.parse(student);

  return (
    <div
      className="w-[20%] h-screen bg-[#2D00F7] top-0 left-0 fixed p-[20px] flex justify-center"
      style={{ zIndex: "200" }}
    >
      <div className="w-[250px] pt-4">
        <div className="flex w-full justify-around">
          <div className="p-3 bg-white text-blue-600 rounded-full">
            <FaLock />
          </div>
          <div className="text-white text-[32px] font-sans font-xxl">
            QuickGrade
          </div>
        </div>
        <div className="my-5 h-[2px] bg-black"></div>
        <div className="font-sans text-white text-[20px]">
          <div>Overview</div>
        </div>
        <div className="mt-[40px]">
          <NavLink
            to="/StudentDashboard"
            className="p-[10px] flex gap-2 jusify-center items-center rounded-lg"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "#2D00F7",
                color: isActive ? "blue" : "white",
              };
            }}
          >
            <span className="py-2">
              <RxDashboard className="rounded"></RxDashboard>
            </span>
            <span className="text-[20px] font-extralight">Dashboard</span>
          </NavLink>
        </div>
        <div className="mt-[20px]">
          <NavLink
            to="/EnrolledCourses"
            className="p-[10px] flex gap-2 jusify-center items-center rounded-lg"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "#2D00F7",
                color: isActive ? "blue" : "white",
              };
            }}
          >
            <span className="py-2">
              <FaBookOpen className="p-0.5 rounded text-white bg-[#8265F7]" />
            </span>
            <span className="text-[20px] font-extralight">
              Enrolled Courses
            </span>
          </NavLink>
        </div>
        <div className="mt-[20px]">
          <NavLink
            to="/ResultScreen"
            className="p-[10px] flex gap-2 jusify-center items-center rounded-lg"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "#2D00F7",
                color: isActive ? "blue" : "white",
              };
            }}
          >
            <span className="py-2">
              <GiStairs className="p-0.5 rounded text-white bg-[#8265F7]" />
            </span>
            <span className="text-[20px] font-extralight">Results</span>
          </NavLink>
        </div>
        <div className="font-inter pt-8 text-white text-[20px]">
          <div>Others</div>
        </div>
        <div className="mt-[20px]">
          <NavLink
            to="/us"
            className="p-[10px] flex gap-2 jusify-center items-center rounded-lg"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "#2D00F7",
                color: isActive ? "blue" : "white",
              };
            }}
          >
            <span className="py-2">
              <IoIosSettings className="p-0.5 rounded text-white bg-[#8265F7]" />
            </span>
            <span className="text-[20px] font-extralight">Settings</span>
          </NavLink>
        </div>
        <div className="mt-[20px]">
          <NavLink
            to="/"
            onClick={() => {
              showSuccessToast(
                `Goodbye ${studentDetails.dataValues.first_name}`
              );
              localStorage.clear();
            }}
            className="p-[10px] flex gap-2 jusify-center items-center rounded-lg"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "#2D00F7",
                color: isActive ? "blue" : "white",
              };
            }}
          >
            <span className="py-2">
              <RiLogoutCircleRLine className="p-0.5 rounded text-white bg-[#8265F7]" />
            </span>
            <span className="text-[20px] font-extralight">Logout</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default StudentSidebar;
