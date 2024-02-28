import Button from "../components/Button";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { showErrorToast } from "../utilities/toastifySetup";
import Modal from "../components/Modal";

function StudentDashboard() {
  const [firstEnrollment, setFirstEnrollment] = useState<any>([]);
  const [usedUnits, setUsedUnits] = useState(0);
  const [totalUnits, setTotalUnits] = useState(30);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [modalCoures, setModalCourses] = useState<any>();
  const [courseCount, setCourseCount] = useState(0);

  const handleCourseDetailsModal = (course: any) => {
    setModalCourses(course);
    return setShowCourseModal(true);
  };

  const handleCloseModal = () => {
    setModalCourses([]);
    return setShowCourseModal(false);
  };

  const handleEnroll = async (course: any) => {
    try {
      const isCourseEnrolled = firstEnrollment.some(
        (enrolledCourse: any) => enrolledCourse.code === course.code
      );

      if (isCourseEnrolled) {
        return showErrorToast("Course already enrolled");
      } else {
        if (totalUnits < course.unit || totalUnits === 0) {
          return showErrorToast(
            "You do not have enough units to enroll for this course"
          );
        }

        let newUnit = usedUnits;
        newUnit = newUnit + course.unit;

        let newTotalUnits = totalUnits;
        newTotalUnits = newTotalUnits - course.unit;
        setTotalUnits(newTotalUnits);
        setUsedUnits(newUnit);
        setFirstEnrollment([...firstEnrollment, course]);

        let totalCount = courseCount;
        totalCount = totalCount + 1;
        return setCourseCount(totalCount);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleUnenroll = async (course: any, index: number) => {
    try {
      const updatedEnrollment = [...firstEnrollment];

      updatedEnrollment.splice(index, 1);

      let newUnit = usedUnits;

      newUnit = newUnit - course.unit;

      let newTotalUnits = totalUnits;
      newTotalUnits = newTotalUnits + course.unit;
      setTotalUnits(newTotalUnits);
      setUsedUnits(newUnit);
      setFirstEnrollment(updatedEnrollment);

      let totalCount = courseCount;
      totalCount = totalCount - 1;
      return setCourseCount(totalCount);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const clearCourses = () => {
    setTotalUnits(30);
    setUsedUnits(0);
    setFirstEnrollment([]);
    return setCourseCount(0);
  };

  const [courses, setCourses] = useState([
    {
      code: "BSC 100",
      title: "Biochemistry of Diseases",
      unit: 5,
      dept: "Biochemistry of Education that has all the itrigues of life embedded in it. We have it here guys fhjsygg oiygejeb oicga ig wuyhegboijc yab aoiurg tc hgudhg icusoiurgc",
      lecturer: "Prof Albert",
    },
    {
      code: "MAT 100",
      title: "Biochemistry of Diseases",
      unit: 5,
      dept: "Biochemistry of Education",
      lecturer: "Prof Albert",
    },
    {
      code: "MBN 100",
      title: "Biochemistry of Diseases",
      unit: 3,
      dept: "Biochemistry of Education",
      lecturer: "Prof Albert",
    },
    {
      code: "PHE 100",
      title: "Biochemistry of Diseases",
      unit: 2,
      dept: "Biochemistry of Education",
      lecturer: "Prof Albert",
    },
    {
      code: "KQY 100",
      title: "Biochemistry of Diseases",
      unit: 5,
      dept: "Biochemistry of Education",
      lecturer: "Prof Albert",
    },
    {
      code: "BUT 100",
      title: "Biochemistry of Diseases",
      unit: 2,
      dept: "Biochemistry of Education",
      lecturer: "Prof Albert",
    },
    {
      code: "KUT 100",
      title: "Biochemistry of Diseases",
      unit: 3,
      dept: "Biochemistry of Education",
      lecturer: "Prof Albert",
    },
    {
      code: "MUT 100",
      title: "Biochemistry of Diseases",
      unit: 5,
      dept: "Biochemistry of Education",
      lecturer: "Prof Albert",
    },
    {
      code: "BYC 100",
      title: "Biochemistry of Diseases",
      unit: 3,
      dept: "Biochemistry of Education",
      lecturer: "Prof Albert",
    },
  ]);

  return (
    <div className="bg-[#F9FAFB]">
        <Sidebar />
      <Navbar name={"Benn"} />
      <div className="ml-[200px]">
        {/* The middle section */}
        <div className=" w-[1000px] mt-[90px] ml-[120px] bg-[#F9FAFB]">
          {/* The Dashboard */}
          <div className="w-[173px] h-[45px] leading-[44.8px]">
            <h2 className="font-inter font-bold text-2xl">
              Dashboard
            </h2>
          </div>
          {/* Department */}
          <div className="border-9 rounded-[16px] h-[150px] w-[1100px] bg-[#2D00F7] mr-[156px] text-white flex justify-around items-center">
            <div>
              <p className="ml-[50px] text-lg font-inter font-bold">
                22/23/08/019
              </p>
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
          <div className="">
            {/* 2022/2023 */}
            <div className="pt-9 flex w-[1120px]">
              <div className="w-full">
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
                    <p className="flex font-inter">Total Units: {totalUnits}</p>
                  </div>
                  <div className="text-gray-500 font-bold font-custom my-4 w-1/4 whitespace-nowrap">
                    <p className="flex">Total Units Used: {usedUnits}</p>
                  </div>
                </div>

                <div className="flex justify-between w-[95%] h-[500px] mb-[50px] overflow-y-scroll">
                  <div className="w-[100%]">
                    <table className="w-full flex flex-col">
                      <thead className="w-[90%]">
                        <tr className="w-[96%] flex justify-between items-center">
                          <th className="text-start text-lg px-6 py-3">
                            Course Code{" "}
                          </th>
                          <th className="text-start text-lg px-6 py-3">
                            Course Title
                          </th>
                          <th className="text-start text-lg px-6 py-3">
                            Credit Unit
                          </th>
                          <th className="text-start text-lg px-6 py-3">
                            Department
                          </th>
                          <th className="text-start text-lg px-6 py-3"></th>
                        </tr>
                      </thead>
                      <div className="bg-white">
                      {courses.map((course, index) => (
                        <tbody
                          key={index}
                          className="mb-[10px] w-[94%] rounded-lg  border-2 flex justify-around hover:cursor-pointer hover:brightness-180 hover:bg-gray-200"
                        >
                          <tr
                            onClick={() => handleCourseDetailsModal(course)}
                            className="w-full flex justify-around items-center"
                          >
                            <td className="text-lg px-6 py-3">{course.code}</td>
                            <td className="text-lg px-6 py-3">
                              {course.title.length > 12
                                ? `${course.title.substring(0, 12)}...`
                                : course.title}
                            </td>
                            <td className="text-lg px-6 py-3">
                              {`${course.unit} Units`}
                            </td>
                            <td className="text-lg px-6 py-3">
                              {course.dept.length > 12
                                ? `${course.dept.substring(0, 12)}...`
                                : course.dept}
                            </td>
                          </tr>
                          <td className="text-lg px-6 py-3 mt-[10px]">
                            <Button
                              title={"Enroll"}
                              text={"white"}
                              bg={"#2D00F7"}
                              onClick={() => handleEnroll(course)}
                            />
                          </td>
                        </tbody>
                      ))}
                      </div>
                    </table>
                  </div>
                </div>
              </div>
              {firstEnrollment.length ? (
                <div className="w-[40%] flex flex-col mr-[10px] justify-start h-[370px] rounded items-center bg-gray-100">
                    <div className="mb-[10px] font-bold text-lg h-[100px] bg-gray-200 w-full flex text-center items-center justify-center">
                      Selected Courses ({courseCount})
                    </div>
                  <div className="w-[100%] h-[300px] flex flex-col items-center overflow-y-scroll">
                    {firstEnrollment.map((enrolled: any, index: any) => (
                      <div
                        className="flex w-[95%] mb-[10px] flex justify-center items-center pt-[10px]"
                        style={{ border: "solid 1px gray" }}
                        key={index}
                      >
                        <div className="w-[90%] mb-[20px]">
                          <table className="w-[100%]">
                            <tbody className="w-[90%] pl-[10px]">
                              <tr className="w-[100%] flex justify-around">
                                <td>{enrolled.code}</td>
                                <td>{`${enrolled.unit} Units`}</td>
                                <td className="">
                                  <Button
                                    title={"Remove"}
                                    text={"white"}
                                    bg={"red"}
                                    onClick={() =>
                                      handleUnenroll(enrolled, index)
                                    }
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-around rounded w-[100%] bg-gray-200 p-[20px]">
                    <Button
                      title={"Clear Courses"}
                      text={"white"}
                      bg={"red"}
                      onClick={clearCourses}
                    />
                    <Button
                      title={"Submit Courses"}
                      text={"white"}
                      bg={"#2D00F7"}
                    />
                  </div>
                </div>
              ) : null}
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
                  {modalCoures.code}
                </div>
                <div>
                  <span className="font-bold text-lg">Course Title: </span>
                  {modalCoures.title}
                </div>
                <div>
                  <span className="font-bold text-lg">Credit Unit: </span>
                  {modalCoures.unit} units
                </div>
                <div>
                  <span className="font-bold text-lg">Lecturer Name: </span>
                  {modalCoures.lecturer}
                </div>
                <div>
                  <span className="font-bold text-lg">Department: </span>
                  {modalCoures.dept}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default StudentDashboard;
