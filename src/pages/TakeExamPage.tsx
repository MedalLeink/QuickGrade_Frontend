import Navbar from "../components/Navbar";
import Sidebar from "../components/StudentSidebar";
import Button from "../components/Button";
import Dropdown from 'react-bootstrap/Dropdown';

const TakeExamPage = () => {

    const student:any = localStorage.getItem('student')

    const studentDetails = JSON.parse(student)

    return (
        <div className="bg-[#F9FAFB]">
            <Sidebar />
            <Navbar name = {studentDetails.dataValues.first_name}/>
            <div className="flex justify-end">
                <div className="w-[75%] mt-[83px] bg-[#F7FAFE]">
                    <div className="flex justify-between p-5">
                        <h2 className="font-inter font-bold text-2xl">Take Exams</h2>
                        <div className="w-[auto] h-[auto] bg-[#667085] flex-col px-2 py-2 drop-shadow-lg">
                            <div className="flex justify-around">
                                <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-white rounded-full p-2 text-white text-2xl">118</div>
                                <div className="flex items-center text-2xl text-white mx-2">:</div>
                                <div className="w-[60px] h-[60px] flex justify-center items-center border-2 border-white rounded-full p-2 text-white text-2xl">32</div>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-white">Minutes</p>
                                <p className="text-white">Seconds</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[957px] h-[330px] bg-[#3746F5]">
                        <div className="px-10 pt-5">
                            <div className="flex justify-between">
                                <div className="">
                                    <div className="mb-1 text-white font-Heebo text-sm">Session</div>
                                    <div className="w-[200px] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">2022/2023</div>
                                </div>
                                <div className="">
                                    <div className="mb-1 text-white font-Heebo text-sm">Semester</div>
                                    <div className="w-[200px] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">Second</div>
                                </div>
                                <div className="">
                                    <div className="mb-1 text-white font-Heebo text-sm">Faculty</div>
                                    <div className="w-[200px] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">Science</div>
                                </div>
                                <div className="">
                                    <div className="mb-1 text-white font-Heebo text-sm">Department</div>
                                    <div className="w-[200px] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">Biochemistry</div>
                                </div>
                            </div>
                            <div className="flex justify-between my-4">
                                <div className="">
                                    <div className="mb-1 text-white font-Heebo text-sm">Course Code</div>
                                    <div className="w-[200px] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">BCH 208</div>
                                </div>
                                <div className="">
                                    <div className="mb-1 text-white font-Heebo text-sm">Course Title</div>
                                    <div className="w-[200px] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">Enzymology</div>
                                </div>
                                <div className="">
                                    <div className="mb-1 text-white font-Heebo text-sm">Total Score</div>
                                    <div className="w-[200px] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">70</div>
                                </div>
                                <div className="">
                                    <div className="mb-1 text-white font-Heebo text-sm">Time Allowed</div>
                                    <div className="w-[200px] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">120 Minutes</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-white text-sm mb-1">Instructions</div>
                                <div className="w-[auto] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center">1. There are 2 sections. Answer all questions in section A and any 5 questions in section B</div>
                                <div className="w-[auto] pl-3 h-[40px] rounded bg-[#D0D5DD] flex justify-start items-center mt-1">2. Time allowed is 2 hours, after which the session ends and your exam is automatically submitted.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[89%]">
                        <div>ID: {studentDetails.dataValues.userID_no}</div>
                        <div className="flex justify-around items-center">
                            <div className="font-Inter font-semibold">Total Score</div>
                            <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#D0D5DD] rounded-full p-2 mx-2 my-1 text-white text-2xl"></div>
                        </div>
                    </div>
                    <div className="w-[89%] flex-col">
                        <div className="flex justify-center font-Inter text-lg">Section A <span className="flex items-center text-[#4C525E] text-sm"> (Multiple Choice Questions)</span></div>
                        <div className="flex justify-center my-0.5">
                            <div className="w-[28%] h-[2px] bg-[#E1E5EA]"></div>
                        </div>
                        <div className="flex justify-center text-sm">40 Marks</div>
                        <div className="flex justify-center items-center">
                            <div>Section Score</div>
                            <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#EAECF0] rounded-full p-2 mx-2 text-white text-2xl"></div>
                        </div>
                    </div>
                    <div className="w-[89%] my-5">
                        <div className="flex justify-center">
                            <div className="w-[90%] flex items-center justify-between">
                                <div>1.</div>
                                <div className="w-[98%] flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black px-2 py-1">What does CE stand for?</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[90%] flex-col ml-2 mt-3">
                                <div className="flex items-center">
                                    <div>A.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 1</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>B.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 2</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>C.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 3</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>D.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 px-2 py-1">Option 4</div>
                                    <div><input type="radio"></input></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[89%] my-5">
                        <div className="flex justify-center">
                            <div className="w-[90%] flex items-center justify-between">
                                <div>2.</div>
                                <div className="w-[98%] flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black px-2 py-1">The following are properties of a chemical catalyst except?</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[90%] flex-col ml-2 mt-3">
                                <div className="flex items-center">
                                    <div>A.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 1</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>B.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 2</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>C.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 3</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>D.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 px-2 py-1">Option 4</div>
                                    <div><input type="radio"></input></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[89%] my-5">
                        <div className="flex justify-center">
                            <div className="w-[90%] flex items-center justify-between">
                                <div>3.</div>
                                <div className="w-[98%] flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black px-2 py-1">What does CE stand for?</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[90%] flex-col ml-2 mt-3">
                                <div className="flex items-center">
                                    <div>A.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 1</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>B.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 2</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>C.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 3</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>D.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 px-2 py-1">Option 4</div>
                                    <div><input type="radio"></input></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[89%] my-5">
                        <div className="flex justify-center">
                            <div className="w-[90%] flex items-center justify-between">
                                <div>4.</div>
                                <div className="w-[98%] flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black px-2 py-1">What does CE stand for?</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[90%] flex-col ml-2 mt-3">
                                <div className="flex items-center">
                                    <div>A.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 1</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>B.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 2</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>C.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 3</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>D.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 px-2 py-1">Option 4</div>
                                    <div><input type="radio"></input></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[89%] my-5">
                        <div className="flex justify-center">
                            <div className="w-[90%] flex items-center justify-between">
                                <div>5.</div>
                                <div className="w-[98%] flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black px-2 py-1">What does CE stand for?</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[90%] flex-col ml-2 mt-3">
                                <div className="flex items-center">
                                    <div>A.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 1</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>B.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 2</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>C.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 3</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>D.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 px-2 py-1">Option 4</div>
                                    <div><input type="radio"></input></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[89%] my-5">
                        <div className="flex justify-center">
                            <div className="w-[90%] flex items-center justify-between">
                                <div>6.</div>
                                <div className="w-[98%] flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black px-2 py-1">What does CE stand for?</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[90%] flex-col ml-2 mt-3">
                                <div className="flex items-center">
                                    <div>A.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 1</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>B.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 2</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>C.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 3</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>D.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 px-2 py-1">Option 4</div>
                                    <div><input type="radio"></input></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[89%] my-5">
                        <div className="flex justify-center">
                            <div className="w-[90%] flex items-center justify-between">
                                <div>7.</div>
                                <div className="w-[98%] flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black px-2 py-1">What does CE stand for?</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[90%] flex-col ml-2 mt-3">
                                <div className="flex items-center">
                                    <div>A.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 1</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>B.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 2</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>C.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 3</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>D.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 px-2 py-1">Option 4</div>
                                    <div><input type="radio"></input></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[89%] my-5">
                        <div className="flex justify-center">
                            <div className="w-[90%] flex items-center justify-between">
                                <div>8.</div>
                                <div className="w-[98%] flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black px-2 py-1">What does CE stand for?</div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[90%] flex-col ml-2 mt-3">
                                <div className="flex items-center">
                                    <div>A.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 1</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>B.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 2</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>C.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 mb-1 px-2 py-1">Option 3</div>
                                    <div><input type="radio"></input></div>
                                </div>
                                <div className="flex items-center">
                                    <div>D.</div>
                                    <div className="w-full flex items-center font-Inter text-sm border-2 bg-white text-[#101828] rounded text-black mx-1 px-2 py-1">Option 4</div>
                                    <div><input type="radio"></input></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TakeExamPage