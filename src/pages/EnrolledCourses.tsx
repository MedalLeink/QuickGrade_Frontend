import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/StudentSidebar";
import SessionCalendar from "../components/SessionCalendar";
import Modal from "../components/Modal";
import { getEnrolledCourses } from "../axios/axiosFunctions/studentAxios";
// import date from "date-fns";

const EnrolledCourses = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [modalCoures, setModalCourses] = useState<any>();

  const handleCourseDetailsModal = (course: any) => {
    setModalCourses(course);
    console.log(course)
    return setShowCourseModal(true);
  };

  const handleCloseModal = () => {
    setModalCourses([]);
    return setShowCourseModal(false);
  };

  const [courses, setCourses] = useState<any>([]);

  const fetchStudentCourses = async() => {
    try{

      const body = {
        semester: 'First',
        session: '2023/2024',
      }

      const data = await getEnrolledCourses(body)

      console.log(data.data)

      return setCourses(data.data.coursesWithDepartments)

    }catch(error:any){
      console.log(error.message)
    }
  }
  useEffect(()=> {
    fetchStudentCourses()
  }, [])

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar name={"22/23/08/019"} />
        <div className="p-8 h-full bg-blue-50 ml-[300px] mt-[90px] bg-opacity-50">
          <h2 className="w-272 h-6 -mt-3 font-Inter font-bold text-2xl leading-9 tracking-wide text-left text-black">
            Enrolled Courses
          </h2>
          <div
            className="w-1009 h-22 mt-8 p-4 bg-[#2D00F7] rounded-xl bg-opacity-90"
            style={{ marginRight: "70px" }}
          >
            <div className="w-[927px] h-[88px] top-16 left-41 pb-8 pt-8 md:p-120 gap-300 flex items-center justify-between">
              <span className="w-166 h-34 font-bold pl-32 text-32 font-inter font-bold leading-45 tracking-0.25 text-left text-white">
                22/23/08/019
              </span>
              <span className="w-221 h-88 text-14 font-inter pr-34 font-normal leading-22 tracking-0.15 text-left text-white">
                Department of Biochemistry,
                <br />
                Faculty of Science, <br />
                Camouflage University, <br /> Atlanta, Nigeria.
              </span>
            </div>
          </div>
          <div className="w-1091">
            <div className="w-590 mt-8 gap-24 flex">
              <div
                className="w-121 mt-4  h-10 font-inter text-24 font-bold leading-34 tracking-0 text-left"
                style={{ color: "#667085" }}
              >
                Semester: Second
              </div>
              <div className="flex items-center gap-8 ">
                <span className="w-295">
                  <SessionCalendar />
                </span>
              </div>
            </div>

            <div className="flex justify-between w-full mt-[20px] mb-[50px]">
              <div className="w-[100%]">
                <table className="w-full flex flex-col">
                  <thead className="w-[90%]">
                    <tr className="w-[100%] flex justify-between items-center">
                      <th className="text-start text-lg px-6 py-3 pl-16 pr-1">
                        Course Code{" "}
                      </th>
                      <th className="text-start text-lg px-6 py-3 pl-2 pr-2">
                        Course Title
                      </th>
                      <th className="text-start text-lg px-6 py-3 pl-2 pr-1">
                        Department
                      </th>
                      {/* <th className="text-start text-lg px-6 py-3 pl-4">
                        Venue
                      </th> */}
                      <th className="text-start text-lg px-6 py-3 pr-1">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <div className="bg-white">
                    {courses.length ? (courses.map((course:any, index:number) => (
                      <tbody
                        key={index}
                        className="mb-[10px] w-full  border-2 flex justify-center hover:cursor-pointer hover:brightness-180 hover:bg-gray-200"
                      >
                        <tr
                          onClick={() => handleCourseDetailsModal(course)}
                          className="w-[100%] flex p-[5px] justify-around items-center"
                        >
                          <td className="text-lg py-3 w-[95px]">
                            {course.dataValues.course_code}
                          </td>
                          <td className="text-lg py-3 w-[95px]">
                            {course.dataValues.course_title.length > 10
                              ? `${course.dataValues.course_title.substring(0, 10)}...`
                              : course.dataValues.course_title}
                          </td>
                          <td className="text-lg py-3 w-[95px]">
                            {course.departmentName.length > 10
                              ? `${course.departmentName.substring(0, 10)}...`
                              : course.departmentName}
                          </td>
                          {/* <td className="text-lg py-3 w-[80px]">
                            {course.venue}
                          </td> */}
                          <td
                            className={`flex justify-center items-center text-lg py-3 w-[95px] ${
                              course.examinationStatus === "Expired"
                                ? "text-red-500"
                                : course.examinationStatus === "No"
                                ? "text-gray-500"
                                : "text-green-500"
                            }`}
                          >
                           {course.examinationStatus === 'No' ? 'Unavailable' : course.examinationStatus === 'Expired' ? 'Expired' : 'Take Exam'}
                          </td>
                        </tr>
                      </tbody>
                    ))):(<div className="text-red-700"><br /><strong><em>Not Enrolled in any course yet...</em></strong></div>)}
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCourseModal && (
        <Modal onClose={handleCloseModal}>
          <div className="mb-[20px] flex flex-col justify-center items-center bg-gray-200 w-full h-[350px] overflow-y-scroll">
            <label className="mb-[20px] mt-[10px] font-bold text-xl">
              COURSE DETAILS
            </label>
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col p-[10px] w-full gap-[20px] h-[300px] overflow-y-scroll">
                <div>
                  <span className="font-bold text-lg">Course Code: </span>
                  {modalCoures.dataValues.course_code}
                </div>
                <div>
                  <span className="font-bold text-lg">Course Title: </span>
                  {modalCoures.dataValues.course_title}
                </div>
                <div>
                  <span className="font-bold text-lg">Department: </span>
                  {modalCoures.departmentName}
                </div>
                {/* <div>
                  <span className="font-bold text-lg">Lecturer Name: </span>
                  {modalCoures.lecturer}
                </div>
                <div>
                  <span className="font-bold text-lg">Department: </span>
                  {modalCoures.dept}
                </div>
                <div>
                  <span className="font-bold text-lg">Exam Venue: </span>
                  {modalCoures.venue}
                </div> */}
                <div>
                  <span className={`font-bold text-lg`}>Course Exam Status: </span>
                  <span
                    className={`${
                      modalCoures.examinationStatus === "Expired"
                        ? "text-red-500"
                        : modalCoures.examinationStatus === "No"
                        ? "text-gray-500"
                        : "text-green-500"
                    }`}
                  >
                    {modalCoures.examinationStatus === 'No' ? 'Unavailable' : modalCoures.examinationStatus === 'Expired' ? 'Expired' : 'Take Exam'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EnrolledCourses;
