import Navbar from "../components/Navbar";
import Sidebar from "../components/StudentSidebar";
import Button from "../components/Button";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const TakeExamInstructions = () => {

    const student:any = localStorage.getItem('student')

    const studentDetails = JSON.parse(student)

    const navigate = useNavigate()

    return (
        <div className="bg-[#F9FAFB]">
            <Sidebar />
            <Navbar name = {studentDetails.dataValues.first_name}/>
            <div className="flex justify-end">
                <div className="w-[79%] mt-[83px] bg-[#F7FAFE]">
                    <div className="flex justify-between p-5">
                        <h2 className="font-inter font-bold text-2xl">Take Exams</h2>
                        <div className="w-[auto] h-[auto] bg-[#D0D5DD] flex-col px-2 py-2 drop-shadow-lg">
                            <div className="flex justify-around">
                                <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-white rounded-full p-2 text-white text-2xl">120</div>
                                <div className="flex items-center text-2xl text-white mx-2">:</div>
                                <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-white rounded-full p-2 text-white text-2xl">00</div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-white">Minutes</p>
                                <p className="text-white">Seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[797px] h-auto bg-white rounded-lg drop-shadow-lg p-16">
                            <div className="flex justify-center font-Inter font-bold text-2xl">Read Carefully</div>
                            <div className="py-[32px]">
                                <div className="flex items-center">
                                    <GoDotFill />
                                    <p className="pl-1 font-normal font-Inter text-sm">Camera is turned on from examination start to finish.</p>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill />
                                    <p className="pl-1 font-normal font-Inter text-sm">Examination is timed and countdown begins once the start button is clicked.</p>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill />
                                    <p className="pl-1 font-normal font-Inter text-sm">When the <span className="font-bold font-Inter">submit</span> button is clicked, answers will be submitted and you will be logged out of the examination.</p>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill />
                                    <p className="pl-1 font-normal font-Inter text-sm">Once the assigned examination time ends, you will be logged out of the exam and your answers will be automatically submitted.</p>
                                </div>
                                <div className="flex items-center">
                                    <GoDotFill />
                                    <p className="pl-1 font-normal font-Inter text-sm">Read examination instructions carefully.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-center font-Inter font-normal text-[#667085] text-xs pb-[3px]">By clicking start, you consent to video recording of you during the duration of the exams</div>
                                <Button
                                    title={"Start Exam"}
                                    text={"white"}
                                    bg={"#2D00F7"}
                                      onClick={() => navigate('/TakeExamPage')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeExamInstructions