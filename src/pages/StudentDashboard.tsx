import Button from "../components/Button";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Navbar from "../components/Navbar";
import Sidebar from "../components/StudentSidebar";
import { useEffect, useState } from "react";
import { showErrorToast, showSuccessToast } from "../utilities/toastifySetup";
import Modal from "../components/Modal";
import { getDepartmentCourses, studentEnroll } from "../axios/axiosFunctions/studentAxios";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const [firstEnrollment, setFirstEnrollment] = useState<any>([]);
  const [usedUnits, setUsedUnits] = useState(0);
  const [totalUnits, setTotalUnits] = useState(30);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [modalCoures, setModalCourses] = useState<any>();
  const [courseCount, setCourseCount] = useState(0);

  const student:any = localStorage.getItem('student')

  const studentDetails = JSON.parse(student)

  const [filters, setFilters] = useState({
    semester: 'First',
    session: '2023/2024',
    level: studentDetails.level,
    department_id: studentDetails.department_id
  })

  const handleCourseDetailsModal = (course: any) => {
    setModalCourses(course);
    console.log(course)
    return setShowCourseModal(true);
  };

  const handleCloseModal = () => {
    setModalCourses([]);
    return setShowCourseModal(false);
  };

  const handleEnroll = async (course: any) => {
    try {
      console.log(course)
      const isCourseEnrolled = firstEnrollment.some(
        (enrolledCourse: any) => enrolledCourse.dataValues.course_code === course.dataValues.course_code
      );

      if (isCourseEnrolled) {
        return showErrorToast("Course already added to the enrollment list");
      } else {
        if (totalUnits < Number(course.dataValues.credit_unit) || totalUnits === 0) {
          return showErrorToast(
            "You do not have enough units to enroll for this course"
          );
        }

        let newUnit = usedUnits;
        newUnit = newUnit + Number(course.dataValues.credit_unit);

        let newTotalUnits = totalUnits;
        newTotalUnits = newTotalUnits - Number(course.dataValues.credit_unit);
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

      newUnit = newUnit - Number(course.dataValues.credit_unit);

      let newTotalUnits = totalUnits;
      newTotalUnits = newTotalUnits + Number(course.dataValues.credit_unit);
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

  const [courses, setCourses] = useState<any>([]);
  const [loading, setLoading] = useState(false)
  const [checkEnroll, setCheckEnroll] = useState(false)
  const [alreadyEnrolled, setAlreadyEnrolled] = useState<any>([])

  const navigate = useNavigate()

  const fetchCourses = async()=>{
    try{
      const data = await getDepartmentCourses(filters)

      console.log(data.data)
      
     return setCourses(data.data.coursesWithDepartments)
      
    }catch(error){
      console.log(error)
    }
  }

  const submitCourses = async(event:any) => {
    try{
      // event.preventDefault()
      setLoading(true)

      const submissions = firstEnrollment.map((course:any) => course.dataValues)

      const sent = {
        courses: JSON.stringify(submissions)
      }

      const data = await studentEnroll(sent)

      console.log(data)

      if(data.status === 406){
        setLoading(false)
        setAlreadyEnrolled(data.data.checkEnrollment)
        return setCheckEnroll(true)
      }

      if(data.status !== 200){
        setLoading(false)
        return showErrorToast(data.data.message)
      }

      showSuccessToast(data.data.message)

      setLoading(false)

      clearCourses()

      return navigate('/EnrolledCourses')

    }catch(error:any){
      console.log(error.message)
    }
  }


  useEffect(()=> {
    fetchCourses()
  }, [filters])

  return (
    <div className="bg-[#F9FAFB]">
        <Sidebar />
      <Navbar name={studentDetails.first_name} />
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
                    Semester: First
                  </div>
                  <div className="text-gray-500 font-bold font-custom my-4 whitespace-nowrap">
                    <div className="flex font-inter">
                      Session: <br />
                      {/* 2022/2023{" "} */}
                      {/* <ChevronDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      /> */}
                      <select
              name="sign-in"
              id="sign-in"
              className="w-full rounded-md hover:cursor-pointer bg-white"
              onChange={(e) => setFilters({...filters, session: e.target.value})}
            >
              <option value="2023/2024">2023/2024</option>
              <option value="2022/2023">2022/2023</option>
              <option value="2021/2022">2021/2022</option>
              <option value="2020/2021">2020/2021</option>
            </select>
                    </div>
                  </div>
                  <div className="text-gray-500 font-bold font-custom my-4 whitespace-nowrap">
                    <p className="flex font-inter">Total Units: {totalUnits}</p>
                  </div>
                  <div className="text-gray-500 font-bold font-custom my-4 w-1/4 whitespace-nowrap">
                    <p className="flex">Total Units Used: {usedUnits}</p>
                  </div>
                </div>

                <div className="flex justify-between w-[97%] h-[500px] mb-[50px] overflow-y-scroll">
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
                      {courses?.map((course:any, index:number) => (
                        <tbody
                          key={index}
                          className="mb-[10px] w-[94%] rounded-lg  border-2 flex justify-around hover:cursor-pointer hover:brightness-180 hover:bg-gray-200"
                        >
                          <tr
                            onClick={() => handleCourseDetailsModal(course)}
                            className="w-full flex justify-around items-center"
                          >
                            <td className="text-lg px-6 w-[150px] py-3 flex justify-center items-center">{course.dataValues.course_code}</td>
                            <td className="text-lg w-[160px] px-6 py-3">
                              {course.dataValues.title.length > 10 ? `${course.dataValues.title.substring(0, 10)}...` : course.dataValues.title}
                            </td>
                            <td className="text-lg w-[130px] px-6 py-3">
                              {`${course.dataValues.credit_unit} Units`}
                            </td>
                            <td className="text-lg w-[180px] px-6 py-3">
                              {course.departmentName.length > 10
                                ? `${course.departmentName.substring(0, 10)}...`
                                : course.departmentName}
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
                <div className="w-[40%] flex flex-col">
                  <form className="w-[90%] flex flex-col mr-[10px] justify-start h-[370px] rounded items-center bg-gray-100">
                  <div className="mb-[10px] font-bold text-lg h-[100px] bg-gray-200 w-full flex text-center items-center justify-center">
                    Selected Courses ({courseCount})
                  </div>
                  <div className="w-[100%] h-[300px] flex flex-col items-center overflow-y-scroll">
                    {firstEnrollment.map((enrolled: any, index: number) => (
                      <div
                        className="flex w-[95%] mb-[10px] flex justify-center items-center pt-[10px]"
                        style={{ border: "solid 1px gray" }}
                        key={index}
                      >
                        <div className="w-[90%] mb-[20px]">
                          <table className="w-[100%]">
                            <tbody className="w-[90%] pl-[10px]">
                              <tr className="w-[100%] flex justify-around">
                                <td>{enrolled.dataValues.course_code}</td>
                                <td>{`${enrolled.dataValues.credit_unit} Units`}</td>
                                <td className="">
                                  <Button
                                    title={"Remove"}
                                    text={"white"}
                                    bg={"red"}
                                    onClick={() => handleUnenroll(enrolled, index)} />
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
                      onClick={clearCourses} />
                    <Button
                      title={loading ? 'Loading...' : 'Submit'}
                      text={"white"}
                      bg={"#2D00F7"}
                      onClick={submitCourses} />
                  </div>
                </form>
                <br />
                {checkEnroll ? <p className="text-red-700 text-sm flex justify-center items-center"><em>Already Enrolled in the following course(s): {alreadyEnrolled.map((a:any)=> a + " ")}</em></p> : null}
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
                  {modalCoures.dataValues.course_code}
                </div>
                <div>
                  <span className="font-bold text-lg">Course Title: </span>
                  {modalCoures.dataValues.title}
                </div>
                <div>
                  <span className="font-bold text-lg">Credit Unit: </span>
                  {modalCoures.dataValues.credit_unit} units
                </div>
                {/* <div>
                  <span className="font-bold text-lg">Lecturer Name: </span>
                  {modalCoures.lecturer}
                </div> */}
                <div>
                  <span className="font-bold text-lg">Department: </span>
                  {modalCoures.departmentName}
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
